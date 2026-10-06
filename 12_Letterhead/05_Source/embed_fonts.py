"""Embed the Auris Nexus brand fonts in finished .docx files and derive .dotx templates.

Word only renders a font it cannot find locally if the font is embedded in the
document (ECMA-376 Part 1 §17.8.1: obfuscated .odttf parts referenced from
fontTable.xml). docx-js embeds a single regular face, so this step writes the
complete set — regular, bold, italic and bold italic — for every face used.

    python embed_fonts.py <docx> [<docx> ...] [--dotx <dir>]
"""
import argparse
import re
import shutil
import uuid
import zipfile
from pathlib import Path

FONT_DIR = Path(__file__).resolve().parents[1] / "04_Brand-Assets" / "fonts"

# Word family name -> {embed slot: file}. Saira SemiBold is its own family in Word
# (name ID 1), because weights outside regular/bold are exposed as separate families.
FAMILIES = {
    "Source Sans 3": {
        "embedRegular": "SourceSans3-400.ttf",
        "embedBold": "SourceSans3-700.ttf",
        "embedItalic": "SourceSans3-400i.ttf",
        "embedBoldItalic": "SourceSans3-700i.ttf",
        "alt": "Calibri",
        "panose": "020B0503030403020204",
    },
    "Saira SemiBold": {
        "embedRegular": "Saira-600.ttf",
        "alt": "Tahoma",
        "panose": "00000700000000000000",
    },
    "Saira": {
        "embedRegular": "Saira-400.ttf",
        "embedBold": "Saira-600.ttf",
        "alt": "Tahoma",
        "panose": "00000500000000000000",
    },
}
SLOTS = ["embedRegular", "embedBold", "embedItalic", "embedBoldItalic"]
REL_FONT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font"
ODTTF = "application/vnd.openxmlformats-officedocument.obfuscatedFont"


def obfuscate(data: bytes, key: str) -> bytes:
    """XOR the first 32 bytes with the GUID key, bytes taken in reverse order (§17.8.1)."""
    hexkey = key.strip("{}").replace("-", "")
    kb = bytes(int(hexkey[i:i + 2], 16) for i in range(0, 32, 2))[::-1]
    head = bytes(b ^ kb[i % 16] for i, b in enumerate(data[:32]))
    return head + data[32:]


def font_entry(name, spec, rels):
    parts = [f'<w:font w:name="{name}">',
             f'<w:altName w:val="{spec["alt"]}"/>',
             f'<w:panose1 w:val="{spec["panose"]}"/>',
             '<w:charset w:val="00"/><w:family w:val="swiss"/><w:pitch w:val="variable"/>']
    for slot in SLOTS:
        if slot in spec:
            rid, key = rels[(name, slot)]
            parts.append(f'<w:{slot} r:id="{rid}" w:fontKey="{key}"/>')
    parts.append("</w:font>")
    return "".join(parts)


def embed(path: Path):
    with zipfile.ZipFile(path) as z:
        files = {n: z.read(n) for n in z.namelist()}

    # Drop anything docx-js embedded so the set is defined in one place.
    files = {n: d for n, d in files.items() if not n.startswith("word/fonts/")}
    rels = {}
    rel_xml = []
    n = 0
    for name, spec in FAMILIES.items():
        for slot in SLOTS:
            if slot not in spec:
                continue
            n += 1
            key = "{" + str(uuid.uuid4()).upper() + "}"
            rid = f"rIdF{n}"
            part = f"fonts/font{n}.odttf"
            files["word/" + part] = obfuscate((FONT_DIR / spec[slot]).read_bytes(), key)
            rels[(name, slot)] = (rid, key)
            rel_xml.append(f'<Relationship Id="{rid}" Type="{REL_FONT}" Target="{part}"/>')

    table = files["word/fontTable.xml"].decode("utf8")
    for name in FAMILIES:  # remove any existing entry for our families
        table = re.sub(rf'<w:font w:name="{re.escape(name)}"(?:/>|>.*?</w:font>)', "", table, flags=re.S)
    if "<w:fonts" not in table:
        raise SystemExit(f"{path}: unexpected fontTable.xml")
    table = re.sub(r"(<w:fonts[^>]*?)/>", r"\1></w:fonts>", table)
    entries = "".join(font_entry(nm, sp, rels) for nm, sp in FAMILIES.items())
    table = table.replace("</w:fonts>", entries + "</w:fonts>")
    if "xmlns:r=" not in table.split(">", 2)[1]:
        table = table.replace("<w:fonts", "<w:fonts " + 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"', 1)
    files["word/fontTable.xml"] = table.encode("utf8")

    files["word/_rels/fontTable.xml.rels"] = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
        + "".join(rel_xml) + "</Relationships>").encode("utf8")

    ct = files["[Content_Types].xml"].decode("utf8")
    if 'Extension="odttf"' not in ct:
        ct = ct.replace(
            "</Types>", f'<Default Extension="odttf" ContentType="{ODTTF}"/></Types>')
    files["[Content_Types].xml"] = ct.encode("utf8")

    settings = files["word/settings.xml"].decode("utf8")
    settings = re.sub(r"<w:embedTrueTypeFonts[^>]*/>|<w:saveSubsetFonts[^>]*/>", "", settings)
    # embedTrueTypeFonts is near the top of CT_Settings; after writeProtection/view/zoom.
    m = re.search(r"<w:settings[^>]*>", settings)
    head = settings[:m.end()]
    rest = settings[m.end():]
    lead = re.match(r"((?:<w:writeProtection[^>]*/>)?(?:<w:view[^>]*/>)?(?:<w:zoom[^>]*/>)?(?:<w:removePersonalInformation[^>]*/>)?(?:<w:removeDateAndTime[^>]*/>)?(?:<w:doNotDisplayPageBoundaries[^>]*/>)?(?:<w:displayBackgroundShape[^>]*/>)?(?:<w:printPostScriptOverText[^>]*/>)?(?:<w:printFractionalCharacterWidth[^>]*/>)?(?:<w:printFormsData[^>]*/>)?)", rest).group(1)
    settings = head + lead + "<w:embedTrueTypeFonts/>" + rest[len(lead):]
    files["word/settings.xml"] = settings.encode("utf8")

    write(path, files)


def write(path: Path, files: dict):
    tmp = path.with_suffix(".tmp")
    with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", files["[Content_Types].xml"])
        for name, data in files.items():
            if name != "[Content_Types].xml":
                z.writestr(name, data)
    shutil.move(tmp, path)


def to_dotx(src: Path, dest: Path):
    with zipfile.ZipFile(src) as z:
        files = {n: z.read(n) for n in z.namelist()}
    ct = files["[Content_Types].xml"].decode("utf8")
    ct = ct.replace("wordprocessingml.document.main+xml", "wordprocessingml.template.main+xml")
    files["[Content_Types].xml"] = ct.encode("utf8")
    write(dest, files)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("docx", nargs="+", type=Path)
    ap.add_argument("--dotx", type=Path, help="also write a .dotx template for each file into this directory")
    a = ap.parse_args()
    for d in a.docx:
        embed(d)
        print("embedded fonts:", d.name)
        if a.dotx:
            out = a.dotx / d.with_suffix(".dotx").name
            to_dotx(d, out)
            print("template:", out.name)
