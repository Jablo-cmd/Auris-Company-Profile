"""Derive letterhead logo assets from the supplied master artwork.

Source: 03_Images/aurilogo.png (1536 x 1024 RGB, off-white ground, no alpha).
Nothing is redrawn: every output is the supplied pixels, with the white ground
removed (colour-to-alpha against white) and the elements recomposed only where
07_Branding/08_Logo-and-Identity.md §2.1 specifies a horizontal lockup.
"""
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "03_Images" / "aurilogo.png"
OUT = ROOT / "12_Letterhead" / "04_Brand-Assets" / "logo"
NAVY = (0x00, 0x1A, 0x48)

# Element bands measured from the source (y0, y1, x0, x1), inclusive.
SYMBOL = (57, 495, 477, 1007)
WORDMARK = (547, 853, 279, 1260)      # AURIS + NEXUS rule + TECHNOLOGIES
STACKED = (57, 853, 279, 1260)        # standard stacked: no tagline
NEXUS_CAP = 783 - 737 + 1             # base unit u, per §1.1


def to_rgba(rgb):
    """Colour-to-alpha against white, so anti-aliased edges stay clean on any light ground."""
    a = rgb.astype(float)
    alpha = ((255.0 - a) / 255.0).max(axis=2)
    alpha = np.clip((alpha - 0.03) / 0.97, 0, 1)          # drop the #FEFEFE ground noise
    safe = np.where(alpha > 0, alpha, 1)[..., None]
    colour = np.clip(255.0 - (255.0 - a) / safe, 0, 255)
    out = np.dstack([colour, alpha * 255.0]).round().astype(np.uint8)
    out[alpha == 0, :3] = 255
    return out


def crop(img, box, pad=6):
    y0, y1, x0, x1 = box
    return img[y0 - pad:y1 + 1 + pad, x0 - pad:x1 + 1 + pad]


def save(arr, name, scale=1):
    im = Image.fromarray(arr, "RGBA")
    if scale != 1:
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    im.save(OUT / name, optimize=True, dpi=(600, 600))
    print(f"{name}: {im.width} x {im.height}")


def mono(arr, rgb):
    out = arr.copy()
    out[..., :3] = rgb
    out[arr[..., 3] == 0, :3] = 255
    return out


def horizontal(rgba):
    """Symbol left, wordmark stack right (§2.1): symbol height 3u, gap 0.75u,
    where u is defined on the lockup so that NEXUS cap height = 0.5u."""
    word = crop(rgba, WORDMARK, pad=0)
    u = NEXUS_CAP / 0.5
    sym_img = Image.fromarray(crop(rgba, SYMBOL, pad=0), "RGBA")
    sym_h = round(3 * u)
    sym_img = sym_img.resize((round(sym_img.width * sym_h / sym_img.height), sym_h), Image.LANCZOS)
    gap = round(0.75 * u)
    pad = 6
    h = max(sym_h, word.shape[0]) + 2 * pad
    w = sym_img.width + gap + word.shape[1] + 2 * pad
    canvas = Image.new("RGBA", (w, h), (255, 255, 255, 0))
    canvas.alpha_composite(sym_img, (pad, (h - sym_h) // 2))
    canvas.alpha_composite(Image.fromarray(word, "RGBA"), (pad + sym_img.width + gap, (h - word.shape[0]) // 2))
    return np.array(canvas)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    rgba = to_rgba(np.array(Image.open(SRC).convert("RGB")))
    hz = horizontal(rgba)
    sym = crop(rgba, SYMBOL)
    stk = crop(rgba, STACKED)
    # 2x Lanczos so the header placement exceeds 600 ppi at its printed size.
    save(hz, "an-logo-horizontal-fullcolour.png", 2)
    save(mono(hz, NAVY), "an-logo-horizontal-mono-navy.png", 2)
    save(mono(hz, (0, 0, 0)), "an-logo-horizontal-mono-black.png", 2)
    save(sym, "an-logo-symbol-fullcolour.png", 2)
    save(mono(sym, NAVY), "an-logo-symbol-mono-navy.png", 2)
    save(stk, "an-logo-stacked-fullcolour.png")
    # Opaque copies for the Word/PDF letterheads (white page ground): no soft mask in the PDF.
    for name in ("an-logo-horizontal-fullcolour.png", "an-logo-symbol-fullcolour.png"):
        im = Image.open(OUT / name)
        flat = Image.new("RGB", im.size, (255, 255, 255))
        flat.paste(im, mask=im.split()[3])
        out = name.replace(".png", "-onwhite.png")
        flat.save(OUT / out, optimize=True, dpi=(600, 600))
        print(f"{out}: {flat.width} x {flat.height} (opaque)")


if __name__ == "__main__":
    main()
