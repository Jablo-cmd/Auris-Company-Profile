// Auris Nexus Technologies — Stage 10 production draft generator
// Reads 02_Content/**/*.md, applies brand styling from 07_Branding, emits an editable .docx.
// Source Markdown is read-only input — no content files are modified by this script.

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  Header, Footer, PageNumber, PageBreak, ImageRun,
  LevelFormat, convertInchesToTwip, VerticalAlign, TableLayoutType
} = require("docx");

const REPO = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(REPO, "02_Content");
const LOGO_PATH = path.join(REPO, "03_Images", "aurilogo.png");
const OUT_PATH = path.join(REPO, "08_Word", "Auris-Nexus-Company-Profile-Stage10-Draft.docx");

// ---- Brand constants (from 07_Branding/02_Colour-Palette.md, 03_Typography.md, 04_Grid-and-Spacing.md) ----
const COLOR = {
  navy: "001A48",     // Nexus Navy
  cyan: "098FB4",     // Auris Cyan
  signal: "00B3BF",   // Signal Cyan
  orbitBlue: "0B5E9A",
  orbitDeep: "06488B",
  slate: "5A646E",
  mist: "E3E8EC",
  graphite: "22282F",
  white: "FFFFFF",
};
const FONT = { display: "Saira", body: "Source Sans 3", editorial: "Source Serif 4" };

// A4 in twips (1 mm = 56.6929 twip)
const MM = (n) => Math.round(n * 56.6929);
const PAGE = { width: MM(210), height: MM(297) };
// Simplified single-sided margins (see production methodology note): using the larger of
// inner/outer as left, and outer as right, rather than true mirrored facing-page margins.
const MARGIN = { top: MM(20), bottom: MM(22), left: MM(22), right: MM(18) };

const TOKEN_RE = /\[\[[A-Z0-9_]+\]\]/g;
const PENDING_MARK = "confirmation pending";

// ---------------------------------------------------------------------------
// Markdown body -> docx element list
// ---------------------------------------------------------------------------

function stripFrontmatter(raw) {
  if (!raw.startsWith("---")) return { fm: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  const fmText = raw.slice(3, end);
  const body = raw.slice(end + 4);
  const fm = {};
  const secM = fmText.match(/section:\s*"([^"]*)"/);
  const titleM = fmText.match(/title:\s*"([^"]*)"/);
  const partM = fmText.match(/part:\s*"([^"]*)"/);
  if (secM) fm.section = secM[1];
  if (titleM) fm.title = titleM[1];
  if (partM) fm.part = partM[1];
  return { fm, body };
}

// Split body into blocks on a line that is exactly "---"
function splitBlocks(body) {
  const lines = body.split("\n");
  const blocks = [];
  let cur = [];
  for (const line of lines) {
    if (line.trim() === "---") {
      if (cur.length) blocks.push(cur);
      cur = [];
    } else {
      cur.push(line);
    }
  }
  if (cur.length) blocks.push(cur);
  return blocks.map((b) => b.join("\n").trim()).filter(Boolean);
}

// Substitute any [[TOKEN]] occurrence — including ones nested inside **bold**/*italic*/`code`
// spans — with the documented pending-confirmation marker. Must run on every text fragment
// before it becomes a TextRun, not only on fragments that are themselves a bare token.
function substituteTokens(text) {
  return text.replace(TOKEN_RE, () => { pendingTokenCount++; return PENDING_MARK; });
}

// Parse **bold**, *italic*, `code` and [[TOKEN]] into TextRun[]
function inlineRuns(text, baseOpts = {}) {
  const runs = [];
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[\[[A-Z0-9_]+\]\])/g).filter((s) => s !== "" && s !== undefined);
  for (const part of parts) {
    if (/^\[\[[A-Z0-9_]+\]\]$/.test(part)) {
      pendingTokenCount++;
      runs.push(new TextRun({ text: PENDING_MARK, italics: true, color: COLOR.slate, ...baseOpts }));
    } else if (/^\*\*[^*]+\*\*$/.test(part)) {
      runs.push(new TextRun({ text: substituteTokens(part.slice(2, -2)), bold: true, color: COLOR.navy, ...baseOpts }));
    } else if (/^\*[^*]+\*$/.test(part)) {
      runs.push(new TextRun({ text: substituteTokens(part.slice(1, -1)), italics: true, ...baseOpts }));
    } else if (/^`[^`]+`$/.test(part)) {
      runs.push(new TextRun({ text: substituteTokens(part.slice(1, -1)), font: "Consolas", ...baseOpts }));
    } else if (part.length) {
      runs.push(new TextRun({ text: substituteTokens(part), ...baseOpts }));
    }
  }
  return runs.length ? runs : [new TextRun({ text: "", ...baseOpts })];
}

function bodyParagraph(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 160, line: 288 },
    children: inlineRuns(text, { font: FONT.body, size: 20, color: COLOR.graphite }),
    ...opts,
  });
}

function isTableLine(line) {
  return /^\s*\|.*\|\s*$/.test(line);
}
function isTableSepLine(line) {
  return /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line);
}

function parseTableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

function buildTable(headerCells, dataRows) {
  const colCount = headerCells.length;
  const colWidth = Math.floor(9026 / colCount); // ~6.27" live width in twips, even split
  const mkCell = (text, isHeader) =>
    new TableCell({
      width: { size: colWidth, type: WidthType.DXA },
      shading: isHeader ? { type: ShadingType.CLEAR, fill: COLOR.navy } : undefined,
      verticalAlign: VerticalAlign.CENTER,
      margins: { top: 60, bottom: 60, left: 80, right: 80 },
      children: [
        new Paragraph({
          children: inlineRuns(text, {
            font: isHeader ? FONT.display : FONT.body,
            size: isHeader ? 17 : 17,
            bold: !!isHeader,
            color: isHeader ? COLOR.white : COLOR.graphite,
          }),
        }),
      ],
    });
  const rows = [];
  rows.push(new TableRow({ children: headerCells.map((c) => mkCell(c, true)), tableHeader: true }));
  dataRows.forEach((r, i) => {
    rows.push(
      new TableRow({
        children: r.map((c) => mkCell(c, false)),
      })
    );
  });
  return new Table({
    width: { size: 9026, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: COLOR.mist },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: COLOR.mist },
      left: { style: BorderStyle.SINGLE, size: 4, color: COLOR.mist },
      right: { style: BorderStyle.SINGLE, size: 4, color: COLOR.mist },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: COLOR.mist },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: COLOR.mist },
    },
    rows,
  });
}

function cleanHeadingText(raw) {
  // strip a leading circled numeral (①-⑩ etc.) and a trailing word-count parenthetical
  let t = raw.replace(/^[①-⑳]\s*/, "");
  t = t.replace(/\s*\(\d+[–-]\d+\s*words?\)\s*$/i, "");
  return t.trim();
}

let pendingTokenCount = 0;

// Process one block's lines into docx elements. `firstBlock` flags the H1/Standfirst block.
function processBlock(blockText, elements) {
  const lines = blockText.split("\n");
  let i = 0;
  let sawStandfirstLabel = false;
  while (i < lines.length) {
    let line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") { i++; continue; }

    // H1 section heading
    if (/^#\s+/.test(trimmed)) {
      const text = trimmed.replace(/^#\s+/, "");
      elements.push(new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 120, after: 200 },
        children: [new TextRun({ text, font: FONT.display, bold: true, size: 44, color: COLOR.navy })],
      }));
      i++; continue;
    }

    // Production-instruction single line — never rendered
    if (/^\*\*Layout:\*\*/.test(trimmed)) { i++; continue; }

    // Standfirst label — marks the following blockquote as a pull-quote; label itself not printed
    if (/^\*\*Standfirst\*\*$/.test(trimmed)) { sawStandfirstLabel = true; i++; continue; }

    // H2 subsection heading (## ...) — must be checked before H3 since both start with "#"
    if (/^##\s+/.test(trimmed)) {
      const raw = trimmed.replace(/^##\s+/, "");
      if (raw.trim() === "Copy") { i++; continue; } // CMS-only label, not reader content
      const text = substituteTokens(cleanHeadingText(raw));
      elements.push(new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 160, after: 120 },
        children: [new TextRun({ text, font: FONT.display, bold: true, size: 26, color: COLOR.orbitDeep })],
      }));
      i++; continue;
    }

    // H3 sub-subsection heading (### ...)
    if (/^###\s+/.test(trimmed)) {
      const raw = trimmed.replace(/^###\s+/, "");
      const text = substituteTokens(cleanHeadingText(raw));
      elements.push(new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 140, after: 100 },
        children: [new TextRun({ text: text.toUpperCase(), font: FONT.display, size: 21, color: COLOR.slate, characterSpacing: 20 })],
      }));
      i++; continue;
    }

    // Blockquote (Standfirst / pull-quote)
    if (/^>/.test(trimmed)) {
      const quoteLines = [];
      while (i < lines.length && /^>/.test(lines[i].trim())) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      const text = quoteLines.join(" ");
      elements.push(new Paragraph({
        spacing: { before: 120, after: 220 },
        indent: { left: 360 },
        border: { left: { style: BorderStyle.SINGLE, size: 18, color: COLOR.orbitDeep, space: 12 } },
        children: inlineRuns(text, { font: FONT.editorial, italics: true, size: 24, color: COLOR.orbitDeep }),
      }));
      sawStandfirstLabel = false;
      continue;
    }

    // Table
    if (isTableLine(trimmed)) {
      const tblLines = [];
      while (i < lines.length && isTableLine(lines[i].trim())) { tblLines.push(lines[i].trim()); i++; }
      const header = parseTableRow(tblLines[0]);
      const rest = tblLines.slice(1).filter((l) => !isTableSepLine(l)).map(parseTableRow);
      // Category D: whole-table-is-tokens -> omit table, emit an honest one-line note instead.
      const allTokenCells = rest.length > 0 && rest.every((row) => row.every((c) => /^\[\[[A-Z0-9_]+\]\]$/.test(c.trim()) || c.trim() === "—" || c.trim() === ""));
      if (allTokenCells) {
        pendingTokenCount += rest.reduce((n, row) => n + row.filter((c) => /^\[\[[A-Z0-9_]+\]\]$/.test(c.trim())).length, 0);
        elements.push(new Paragraph({
          spacing: { before: 100, after: 200 },
          children: [new TextRun({
            text: "A detailed table for this section will be included once the underlying figures are confirmed.",
            italics: true, color: COLOR.slate, font: FONT.body, size: 19,
          })],
        }));
      } else {
        elements.push(buildTable(header, rest));
        elements.push(new Paragraph({ spacing: { after: 200 }, children: [] }));
      }
      continue;
    }

    // Bulleted list
    if (/^[-*]\s+/.test(trimmed)) {
      while (i < lines.length && (/^[-*]\s+/.test(lines[i].trim()) || (lines[i].trim() !== "" && !/^[-*]\s+/.test(lines[i].trim()) && i > 0 && /^[-*]\s+/.test(lines[i - 1].trim()) && /^\s{2,}/.test(lines[i])))) {
        const isCont = !/^[-*]\s+/.test(lines[i].trim());
        const raw = isCont ? lines[i].trim() : lines[i].trim().replace(/^[-*]\s+/, "");
        if (!isCont) {
          elements.push(new Paragraph({
            bullet: { level: 0 },
            spacing: { after: 80 },
            children: inlineRuns(raw, { font: FONT.body, size: 20, color: COLOR.graphite }),
          }));
        } else {
          // continuation line of previous bullet: append as its own run into last paragraph is complex;
          // simplest reproducible approach: treat as its own bullet-less indented line.
          elements.push(new Paragraph({
            indent: { left: 720 },
            spacing: { after: 80 },
            children: inlineRuns(raw, { font: FONT.body, size: 20, color: COLOR.graphite }),
          }));
        }
        i++;
      }
      continue;
    }

    // Default: paragraph (accumulate wrapped lines until blank line)
    const paraLines = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== "" && !/^(#|>|[-*]\s|\|)/.test(lines[i].trim()) && lines[i].trim() !== "---") {
      paraLines.push(lines[i]);
      i++;
    }
    const text = paraLines.join(" ").trim();
    elements.push(bodyParagraph(text));
  }
}

function renderContentFile(filePath, elements) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { fm, body } = stripFrontmatter(raw);
  const blocks = splitBlocks(body);
  for (const block of blocks) {
    const headingLine = block.split("\n").find((l) => l.trim().length);
    if (headingLine && /^##\s+Production notes\s*$/i.test(headingLine.trim())) {
      break; // production notes and everything conceptually after: never rendered
    }
    processBlock(block, elements);
  }
}

function partDivider(title, elements) {
  elements.push(new Paragraph({ children: [new PageBreak()] }));
  elements.push(new Paragraph({
    spacing: { before: 2400, after: 200 },
    children: [new TextRun({ text: "AURIS NEXUS TECHNOLOGIES", font: FONT.display, size: 18, color: COLOR.slate, allCaps: true, characterSpacing: 40 })],
  }));
  elements.push(new Paragraph({
    spacing: { after: 2000 },
    children: [new TextRun({ text: title.toUpperCase(), font: FONT.display, bold: true, size: 60, color: COLOR.navy })],
  }));
}

// ---------------------------------------------------------------------------
// Assemble document
// ---------------------------------------------------------------------------

function listContentFiles(part) {
  const dir = path.join(CONTENT_DIR, `part-${part}`);
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort().map((f) => path.join(dir, f));
}

const elements = [];

// --- Cover page ---
const logoBuf = fs.readFileSync(LOGO_PATH);
elements.push(new Paragraph({ spacing: { before: 1800 }, alignment: AlignmentType.CENTER, children: [
  new ImageRun({ data: logoBuf, transformation: { width: 160, height: 107 }, type: "png" }),
]}));
elements.push(new Paragraph({ spacing: { before: 600, after: 100 }, alignment: AlignmentType.CENTER, children: [
  new TextRun({ text: "AURIS NEXUS TECHNOLOGIES", font: FONT.display, bold: true, size: 56, color: COLOR.navy }),
]}));
elements.push(new Paragraph({ spacing: { after: 100 }, alignment: AlignmentType.CENTER, children: [
  new TextRun({ text: "Connecting Innovation. Delivering Impact.", font: FONT.editorial, italics: true, size: 24, color: COLOR.orbitDeep }),
]}));
elements.push(new Paragraph({ spacing: { before: 800 }, alignment: AlignmentType.CENTER, children: [
  new TextRun({ text: "CORPORATE PROFILE — STAGE 10 PRODUCTION DRAFT", font: FONT.display, size: 18, color: COLOR.slate, characterSpacing: 40 }),
]}));
elements.push(new Paragraph({ spacing: { before: 40 }, alignment: AlignmentType.CENTER, children: [
  new TextRun({ text: "Not final. Not approved. Contains open evidence gates.", font: FONT.body, italics: true, size: 18, color: COLOR.slate }),
]}));
elements.push(new Paragraph({ children: [new PageBreak()] }));

// --- Table of contents (native field, mirrors actual generated headings) ---
elements.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text: "Contents", font: FONT.display, bold: true, size: 44, color: COLOR.navy })],
}));
elements.push(new Paragraph({
  children: [new TextRun({
    text: 'Auto-generated field. In Word: right-click → "Update Field" (or Update Table) after opening.',
    italics: true, color: COLOR.slate, font: FONT.body, size: 18,
  })],
}));
const { TableOfContents } = require("docx");
elements.push(new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }));
elements.push(new Paragraph({ children: [new PageBreak()] }));

// --- Front matter: MD message ---
partDivider("Front Matter", elements);
renderContentFile(path.join(CONTENT_DIR, "part-1", "0-06-md-message.md"), elements);

// --- Part One ---
partDivider("Part One — The Company", elements);
for (const f of listContentFiles(1).filter((f) => !f.includes("0-06"))) {
  renderContentFile(f, elements);
  elements.push(new Paragraph({ children: [new PageBreak()] }));
}

// --- Part Two ---
partDivider("Part Two — Services", elements);
for (const f of listContentFiles(2)) {
  renderContentFile(f, elements);
  elements.push(new Paragraph({ children: [new PageBreak()] }));
}

// --- Part Three ---
partDivider("Part Three — Industries", elements);
for (const f of listContentFiles(3)) {
  renderContentFile(f, elements);
  elements.push(new Paragraph({ children: [new PageBreak()] }));
}

// --- Part Four ---
partDivider("Part Four — Technical Capabilities", elements);
for (const f of listContentFiles(4)) {
  renderContentFile(f, elements);
  elements.push(new Paragraph({ children: [new PageBreak()] }));
}

// --- Part Five ---
partDivider("Part Five — Project Delivery", elements);
for (const f of listContentFiles(5)) {
  renderContentFile(f, elements);
  elements.push(new Paragraph({ children: [new PageBreak()] }));
}

// ---------------------------------------------------------------------------
// Header / Footer
// ---------------------------------------------------------------------------

const header = new Header({
  children: [new Paragraph({
    alignment: AlignmentType.RIGHT,
    children: [new TextRun({
      text: "AURIS NEXUS TECHNOLOGIES — CORPORATE PROFILE (STAGE 10 DRAFT)",
      font: FONT.display, size: 14, color: COLOR.slate, characterSpacing: 20,
    })],
  })],
});

const footer = new Footer({
  children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: "Page ", font: FONT.display, size: 16, color: COLOR.navy }),
      new TextRun({ children: [PageNumber.CURRENT], font: FONT.display, size: 16, color: COLOR.navy }),
    ],
  })],
});

const doc = new Document({
  creator: "Auris Company Profile — Stage 10 build",
  title: "Auris Nexus Technologies — Corporate Profile (Stage 10 Draft)",
  styles: {
    default: {
      document: { run: { font: FONT.body, size: 20, color: COLOR.graphite } },
    },
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE.width, height: PAGE.height },
        margin: MARGIN,
      },
    },
    headers: { default: header },
    footers: { default: footer },
    children: elements,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT_PATH, buf);
  console.log("WROTE", OUT_PATH, buf.length, "bytes");
  console.log("PENDING_TOKEN_COUNT", pendingTokenCount);
});
