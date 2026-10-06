/*
 * Auris Nexus Technologies — corporate letterhead builder.
 *
 * Produces real, editable Word documents (no screenshots): styles, a first-page
 * header/footer and a restrained continuation header/footer, all on A4.
 *
 *   node build_letterhead.js <outDir>
 *
 * Every colour, typeface and logo placement follows 07_Branding/:
 *   02_Colour-Palette.md · 03_Typography.md · 08_Logo-and-Identity.md
 * Fonts are embedded afterwards by embed_fonts.py.
 */
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Header, Footer, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, VerticalAlign, HeightRule, PageNumber, TabStopType,
  LevelFormat, ExternalHyperlink, TableLayoutType, PageBreak, LineRuleType,
} = require("docx");

// ---------------------------------------------------------------- brand tokens
const C = {
  navy: "001A48",      // Nexus Navy — the brand
  cyan: "098FB4",      // Auris Cyan — accent, graphics only on white
  orbitBlue: "0B5E9A", // text-safe accent
  graphite: "22282F",  // body copy
  slate: "5A646E",     // secondary text
  ruleGrey: "BDC1C5",  // light rules
  mist: "E3E8EC",
  mistLight: "F2F5F6",
};
const F = { body: "Source Sans 3", display: "Saira SemiBold", displayReg: "Saira" };

const SIGNATORY = { name: "Loyiso Ngcala", title: "Managing Director" };

const COMPANY = {
  legal: "Auris Nexus Technologies (Pty) Ltd",
  reg: "2026/606690/07",
  address: ["140 Linden Road", "Sandown, Sandton", "Gauteng, South Africa"],
  addressLine: "140 Linden Road, Sandown, Sandton, Gauteng, South Africa",
  tel: "063 122 6552",
  email: "info@aurisnexus.co.za",
  web: "aurisnexus.co.za",
  bbbee: "B-BBEE Level 1",
  // Fact Register E10: National Treasury CSD notification, 2026-10-06. Formal version only.
  csd: "R0341462686",
  positioning: "Technology Consulting & Digital Solutions",
  tagline: "Transforming Businesses Through Technology",
};

// ---------------------------------------------------------------- geometry
const mm = (v) => Math.round(v * 56.6929);        // millimetres -> twips (DXA)
const px = (v) => (v / 25.4) * 96;                // millimetres -> docx-js image pixels
const pt = (v) => v * 2;                          // points -> half-points (font size)
const PAGE = { w: 210, h: 297, left: 20, right: 20, top: 36, bottom: 32, header: 12, footer: 10 };
const TEXT_W = PAGE.w - PAGE.left - PAGE.right;   // 170 mm

const LOGO_DIR = path.join(__dirname, "..", "04_Brand-Assets", "logo");
// Documents use the logos flattened onto white: no alpha reaches the PDF, so nothing is left to flatten at print.
const logoHz = fs.readFileSync(path.join(LOGO_DIR, "an-logo-horizontal-fullcolour-onwhite.png"));
const logoSym = fs.readFileSync(path.join(LOGO_DIR, "an-logo-symbol-fullcolour-onwhite.png"));
const HZ_RATIO = 638 / 2810;
const SYM_RATIO = 902 / 1086;

const NONE = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: NONE, bottom: NONE, left: NONE, right: NONE };
const TABLE_NO_BORDERS = { ...NO_BORDERS, insideHorizontal: NONE, insideVertical: NONE };
const ZERO_MARGINS = { top: 0, bottom: 0, left: 0, right: 0 };

// ---------------------------------------------------------------- small helpers
const run = (text, o = {}) => new TextRun({ text, ...o });
const p = (children, o = {}) =>
  new Paragraph({ children: Array.isArray(children) ? children : [run(children)], ...o });

function cell(children, widthMm, o = {}) {
  return new TableCell({
    children,
    width: { size: mm(widthMm), type: WidthType.DXA },
    borders: o.borders || NO_BORDERS,
    margins: o.margins || ZERO_MARGINS,
    verticalAlign: o.valign || VerticalAlign.TOP,
    columnSpan: o.span,
    shading: o.fill ? { fill: o.fill, type: "clear", color: "auto" } : undefined,
  });
}

function layoutTable(widthsMm, rows) {
  return new Table({
    width: { size: mm(widthsMm.reduce((a, b) => a + b, 0)), type: WidthType.DXA },
    columnWidths: widthsMm.map(mm),
    layout: TableLayoutType.FIXED,
    borders: TABLE_NO_BORDERS,
    margins: ZERO_MARGINS,
    rows,
  });
}

// Header/footer text runs share a compact, fixed rhythm so nothing drifts between versions.
// The Formal version sets company information near-black at 8 pt: grey 7.5 pt text drops out
// on light-density photocopies, and tender packs are routinely copied.
const INK = {
  standard: { text: C.slate, size: pt(7.5), label: C.orbitBlue },
  formal: { text: C.graphite, size: pt(8), label: C.navy },
};
let ink = INK.standard;
const hf = (text, o = {}) =>
  run(text, { font: F.body, size: ink.size, color: ink.text, ...o });
const hfPara = (children, o = {}) =>
  new Paragraph({
    children,
    style: "Footer",
    spacing: { before: 0, after: 0, line: 200, lineRule: LineRuleType.EXACT },
    ...o,
  });
const link = (text, href, o = {}) =>
  new ExternalHyperlink({ link: href, children: [hf(text, o)] });

// ---------------------------------------------------------------- headers
function firstPageHeader(version) {
  const logoW = 56;
  const logoH = logoW * HZ_RATIO;
  const accentW = version === "formal" ? 0 : 15;

  const right =
    version === "formal"
      ? [
          hfPara([run(COMPANY.legal, { font: F.display, size: pt(8.5), color: C.navy, characterSpacing: 6 })],
            { alignment: AlignmentType.RIGHT, spacing: { after: 0, line: 230, lineRule: LineRuleType.EXACT } }),
          hfPara([hf(`Registration No. ${COMPANY.reg}`), hf("   |   ", { color: C.ruleGrey }), hf(COMPANY.bbbee)],
            { alignment: AlignmentType.RIGHT, spacing: { after: 0, line: 210, lineRule: LineRuleType.EXACT } }),
        ]
      : [
          hfPara([run(COMPANY.legal, { font: F.display, size: pt(8.5), color: C.navy, characterSpacing: 6 })],
            { alignment: AlignmentType.RIGHT, spacing: { after: 0, line: 230, lineRule: LineRuleType.EXACT } }),
          hfPara([hf(COMPANY.positioning)],
            { alignment: AlignmentType.RIGHT, spacing: { after: 0, line: 210, lineRule: LineRuleType.EXACT } }),
          hfPara([hf(COMPANY.tagline, { color: C.orbitBlue })],
            { alignment: AlignmentType.RIGHT, spacing: { after: 0, line: 210, lineRule: LineRuleType.EXACT } }),
        ];

  const logo = hfPara([
    new ImageRun({
      type: "png",
      data: logoHz,
      transformation: { width: px(logoW), height: px(logoH) },
      altText: { name: "Auris Nexus Technologies logo", title: "Auris Nexus Technologies",
        description: "Auris Nexus Technologies logo" },
    }),
  ], { spacing: { before: 0, after: 0 } });

  // Row 2 is the brand rule: a short Auris Cyan segment set into a Nexus Navy hairline
  // (Standard), or a single navy hairline (Formal). Drawn as cell borders so it is real
  // Word structure, prints crisply and cannot drift away from the header.
  const ruleRow = version === "formal"
    ? new TableRow({
        height: { value: mm(3.2), rule: HeightRule.EXACT },
        children: [cell([hfPara([run("", { size: 2 })])], TEXT_W, {
          span: 3, borders: { ...NO_BORDERS, bottom: { style: BorderStyle.SINGLE, size: 6, color: C.navy } },
        })],
      })
    : new TableRow({
        height: { value: mm(3.2), rule: HeightRule.EXACT },
        children: [
          cell([hfPara([run("", { size: 2 })])], accentW, {
            borders: { ...NO_BORDERS, bottom: { style: BorderStyle.SINGLE, size: 18, color: C.cyan } },
          }),
          cell([hfPara([run("", { size: 2 })])], TEXT_W - accentW, {
            span: 2, borders: { ...NO_BORDERS, bottom: { style: BorderStyle.SINGLE, size: 4, color: C.navy } },
          }),
        ],
      });

  const firstCol = accentW || 15;
  return new Header({
    children: [
      layoutTable([firstCol, logoW - firstCol, TEXT_W - logoW], [
        new TableRow({
          height: { value: mm(logoH), rule: HeightRule.ATLEAST },
          children: [
            cell([logo], logoW, { span: 2, valign: VerticalAlign.BOTTOM }),
            cell(right, TEXT_W - logoW, { valign: VerticalAlign.BOTTOM }),
          ],
        }),
        ruleRow,
      ]),
      hfPara([run("", { size: 2 })]),
    ],
  });
}

function continuationHeader(version, reference) {
  const symW = 8.5;
  const symH = symW * SYM_RATIO;
  const right = version === "formal"
    ? [hfPara([hf("Our ref: "), hf(reference || "[Reference]", { color: C.graphite })], { alignment: AlignmentType.RIGHT })]
    : [hfPara([hf(COMPANY.web)], { alignment: AlignmentType.RIGHT })];
  return new Header({
    children: [
      layoutTable([symW + 3, 100, TEXT_W - symW - 3 - 100], [
        new TableRow({
          height: { value: mm(symH), rule: HeightRule.ATLEAST },
          children: [
            cell([hfPara([new ImageRun({
              type: "png", data: logoSym,
              transformation: { width: px(symW), height: px(symH) },
              altText: { name: "Auris Nexus symbol", title: "Auris Nexus", description: "Auris Nexus symbol" },
            })], { spacing: { before: 0, after: 0 } })], symW + 3, { valign: VerticalAlign.BOTTOM }),
            cell([hfPara([run(COMPANY.legal, { font: F.display, size: pt(8), color: C.navy, characterSpacing: 6 })])],
              100, { valign: VerticalAlign.BOTTOM }),
            cell(right, TEXT_W - symW - 3 - 100, { valign: VerticalAlign.BOTTOM }),
          ],
        }),
        new TableRow({
          height: { value: mm(2.6), rule: HeightRule.EXACT },
          children: [cell([hfPara([run("", { size: 2 })])], TEXT_W, {
            span: 3, borders: { ...NO_BORDERS, bottom: { style: BorderStyle.SINGLE, size: 4, color: C.ruleGrey } },
          })],
        }),
      ]),
      hfPara([run("", { size: 2 })]),
    ],
  });
}

// ---------------------------------------------------------------- footers
const pageOf = (o = {}) => [
  hf("Page ", o), new TextRun({ children: [PageNumber.CURRENT], font: F.body, size: ink.size, color: ink.text, ...o }),
  hf(" of ", o), new TextRun({ children: [PageNumber.TOTAL_PAGES], font: F.body, size: ink.size, color: ink.text, ...o }),
];

function firstPageFooter(version) {
  const label = (t) => hf(t, { font: F.display, color: ink.label, size: pt(7) });
  const col1 = [
    hfPara([run(COMPANY.legal, { font: F.display, size: pt(7.5), color: C.navy })]),
    hfPara([hf(`Registration No. ${COMPANY.reg}`)]),
    hfPara([hf(COMPANY.bbbee)]),
    ...(version === "formal" ? [hfPara([hf(`CSD Supplier No. ${COMPANY.csd}`)])] : []),
  ];
  const col2 = COMPANY.address.map((l) => hfPara([hf(l)]));
  const col3 = [
    hfPara([label("T"), hf("   "), link(COMPANY.tel, "tel:+27631226552")]),
    hfPara([label("E"), hf("   "), link(COMPANY.email, `mailto:${COMPANY.email}`)]),
    hfPara([label("W"), hf("   "), link(COMPANY.web, `https://${COMPANY.web}`)]),
  ];
  const widths = version === "formal" ? [58, 44, 46, 22] : [62, 52, 56];
  const cols = [col1, col2, col3];
  if (version === "formal") cols.push([hfPara(pageOf(), { alignment: AlignmentType.RIGHT })]);
  return new Footer({
    children: [
      new Paragraph({
        children: [run("", { size: 2 })],
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.ruleGrey, space: 1 } },
        spacing: { before: 0, after: 60, line: 120, lineRule: LineRuleType.EXACT },
      }),
      layoutTable(widths, [new TableRow({ children: cols.map((c, i) => cell(c, widths[i])) })]),
    ],
  });
}

function continuationFooter(version) {
  const left = [
    hf(COMPANY.legal, { color: C.navy }),
    hf("   |   ", { color: C.ruleGrey }),
    hf(`Registration No. ${COMPANY.reg}`),
  ];
  if (version === "formal") left.push(hf("   |   ", { color: C.ruleGrey }), hf(COMPANY.bbbee));
  return new Footer({
    children: [
      new Paragraph({
        children: [run("", { size: 2 })],
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.ruleGrey, space: 1 } },
        spacing: { before: 0, after: 60, line: 120, lineRule: LineRuleType.EXACT },
      }),
      hfPara([...left, new TextRun({ text: "\t" }), ...pageOf()], {
        tabStops: [{ type: TabStopType.RIGHT, position: mm(TEXT_W) }],
      }),
    ],
  });
}

// ---------------------------------------------------------------- styles
const styles = {
  default: {
    document: { run: { font: F.body, size: pt(10.5), color: C.graphite } },
    hyperlink: { run: { color: C.orbitBlue, underline: { type: "single", color: C.orbitBlue } } },
    // Built-in headings are restyled here, not in paragraphStyles: docx-js always emits its own
    // Heading 1/2, and a second definition with the same styleId is ignored by Word.
    heading1: {
      run: { font: F.display, size: pt(10.5), color: C.navy, characterSpacing: 4 },
      paragraph: { spacing: { before: 260, after: 90, line: 270 }, keepNext: true, keepLines: true, outlineLevel: 0 } },
    heading2: {
      run: { font: F.body, size: pt(10.5), bold: true, color: C.navy },
      paragraph: { spacing: { before: 180, after: 60 }, keepNext: true, keepLines: true, outlineLevel: 1 } },
  },
  paragraphStyles: [
    { id: "Normal", name: "Normal", quickFormat: true,
      run: { font: F.body, size: pt(10.5), color: C.graphite },
      paragraph: { spacing: { before: 0, after: 150, line: 290, lineRule: LineRuleType.AUTO }, widowControl: true } },
    { id: "Header", name: "header", basedOn: "Normal",
      run: { size: pt(7.5), color: C.slate }, paragraph: { spacing: { after: 0 } } },
    { id: "Footer", name: "footer", basedOn: "Normal",
      run: { size: pt(7.5), color: C.slate }, paragraph: { spacing: { after: 0 } } },
    { id: "LetterDate", name: "Letter Date", basedOn: "Normal", next: "Normal", quickFormat: true,
      paragraph: { spacing: { after: 360 }, tabStops: [{ type: TabStopType.RIGHT, position: mm(TEXT_W) }] } },
    { id: "Recipient", name: "Recipient Address", basedOn: "Normal", next: "Recipient", quickFormat: true,
      paragraph: { spacing: { after: 0, line: 270 } } },
    { id: "RecipientName", name: "Recipient Name", basedOn: "Recipient", next: "Recipient", quickFormat: true,
      run: { bold: true, color: C.navy } },
    { id: "Salutation", name: "Salutation", basedOn: "Normal", next: "Subject", quickFormat: true,
      paragraph: { spacing: { before: 360, after: 200 } } },
    { id: "Subject", name: "Subject Line", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { font: F.display, size: pt(10), color: C.navy, characterSpacing: 6, allCaps: true },
      paragraph: { spacing: { before: 0, after: 220, line: 270 }, keepNext: true } },
    { id: "ListBulletAN", name: "List Bullet", basedOn: "Normal", quickFormat: true,
      paragraph: { spacing: { after: 70 } } },
    { id: "ListNumberAN", name: "List Number", basedOn: "Normal", quickFormat: true,
      paragraph: { spacing: { after: 70 } } },
    { id: "Closing", name: "Closing", basedOn: "Normal", next: "SignatureSpace", quickFormat: true,
      paragraph: { spacing: { before: 240, after: 0 }, keepNext: true, keepLines: true } },
    { id: "SignatureSpace", name: "Signature Space", basedOn: "Normal", next: "SignatureName",
      paragraph: { spacing: { before: 0, after: 0, line: mm(17), lineRule: LineRuleType.EXACT }, keepNext: true } },
    { id: "SignatureName", name: "Signature Name", basedOn: "Normal", next: "SignatureTitle", quickFormat: true,
      run: { bold: true, color: C.navy },
      paragraph: { spacing: { before: 0, after: 0 }, keepNext: true, keepLines: true } },
    { id: "SignatureTitle", name: "Signature Title", basedOn: "Normal", next: "Normal", quickFormat: true,
      paragraph: { spacing: { before: 0, after: 0 }, keepNext: true, keepLines: true } },
    { id: "Enclosure", name: "Enclosure", basedOn: "Normal", quickFormat: true,
      run: { size: pt(9), color: C.slate },
      paragraph: { spacing: { before: 360, after: 0 } } },
    { id: "TableText", name: "Table Text", basedOn: "Normal", quickFormat: true,
      run: { size: pt(9.5) },
      paragraph: { spacing: { before: 0, after: 0, line: 260 } } },
    { id: "TableLabel", name: "Table Label", basedOn: "TableText", quickFormat: true,
      run: { font: F.display, size: pt(8), color: C.navy, characterSpacing: 4 } },
    { id: "Placeholder", name: "Placeholder Note", basedOn: "Normal", quickFormat: true,
      run: { color: C.slate, italics: true } },
  ],
};

const numbering = {
  config: [
    { reference: "an-bullets", levels: [
      { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: mm(6), hanging: mm(4) } }, run: { color: C.cyan, font: "Arial" } } },
      { level: 1, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: mm(11), hanging: mm(4) } }, run: { color: C.slate } } },
    ] },
    { reference: "an-numbers", levels: [
      { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: mm(7), hanging: mm(7) } }, run: { color: C.navy } } },
      { level: 1, format: LevelFormat.LOWER_LETTER, text: "(%2)", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: mm(14), hanging: mm(7) } } } },
    ] },
    { reference: "an-headings", levels: [
      { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: mm(8), hanging: mm(8) } } } },
    ] },
  ],
};

// ---------------------------------------------------------------- content blocks
const H1 = (t, numbered) => new Paragraph({ text: t, style: "Heading1", keepNext: true, keepLines: true,
  ...(numbered ? { numbering: { reference: "an-headings", level: 0 } } : {}) });
const body = (t, o = {}) => new Paragraph({ children: typeof t === "string" ? [run(t)] : t, ...o });
const LAST = { spacing: { after: 150 } };
const bullet = (t, last) => new Paragraph({ children: typeof t === "string" ? [run(t)] : t,
  style: "ListBulletAN", numbering: { reference: "an-bullets", level: 0 }, ...(last ? LAST : {}) });
const numbered = (t, level = 0, last) => new Paragraph({ children: typeof t === "string" ? [run(t)] : t,
  style: "ListNumberAN", numbering: { reference: "an-numbers", level }, ...(last ? LAST : {}) });
// The paragraph before the sign-off is kept with it, so a signature never stands alone on a page.
const finalPara = (t) => body(t, { keepNext: true, keepLines: true });
const styled = (style, t) => new Paragraph({ style, children: typeof t === "string" ? [run(t)] : t });
const bold = (t) => run(t, { bold: true });

function dateLine(date, ref) {
  return new Paragraph({ style: "LetterDate", children: ref
    ? [run(date), run("\t"), run("Our ref:  ", { color: C.slate }), run(ref)]
    : [run(date)] });
}

function recipient(lines) {
  return lines.map((l, i) => styled(i === 0 ? "RecipientName" : "Recipient", l));
}

function signature(name, title, closing = "Yours faithfully") {
  return [
    styled("Closing", closing + ","),
    styled("SignatureSpace", ""),
    styled("SignatureName", name),
    styled("SignatureTitle", title),
    styled("SignatureTitle", [run(COMPANY.legal, { color: C.slate })]),
  ];
}

// Formal reference panel: hairline-ruled, label/value pairs, no fills — photocopies cleanly.
function referencePanel(pairs) {
  const W = [27, 58, 27, 58];
  const rule = { style: BorderStyle.SINGLE, size: 4, color: C.ruleGrey };
  const m = { top: mm(1.6), bottom: mm(1.6), left: 0, right: mm(2) };
  const rows = [];
  for (let i = 0; i < pairs.length; i += 2) {
    const pr = [pairs[i], pairs[i + 1] || ["", ""]];
    rows.push(new TableRow({ cantSplit: true, children: pr.flatMap(([k, v], j) => [
      cell([styled("TableLabel", k.toUpperCase())], W[j * 2], { margins: m, borders: { ...NO_BORDERS, bottom: rule } }),
      cell([styled("TableText", v)], W[j * 2 + 1], { margins: m, borders: { ...NO_BORDERS, bottom: rule } }),
    ]) }));
  }
  return new Table({
    width: { size: mm(TEXT_W), type: WidthType.DXA }, columnWidths: W.map(mm), layout: TableLayoutType.FIXED,
    borders: { ...TABLE_NO_BORDERS, top: { style: BorderStyle.SINGLE, size: 6, color: C.navy } },
    margins: ZERO_MARGINS, rows,
  });
}

// Data table: navy header row with white labels, hairline rows — palette §10 table spec.
function dataTable(widths, head, rows) {
  const rule = { style: BorderStyle.SINGLE, size: 4, color: C.ruleGrey };
  const m = { top: mm(1.5), bottom: mm(1.5), left: mm(2), right: mm(2) };
  const headRow = new TableRow({ tableHeader: true, cantSplit: true, children: head.map((h, i) =>
    cell([styled("TableLabel", [run(h.toUpperCase(), { color: "FFFFFF" })])], widths[i],
      { margins: m, fill: C.navy, borders: NO_BORDERS, valign: VerticalAlign.CENTER })) });
  const bodyRows = rows.map((r, ri) => new TableRow({ cantSplit: true, children: r.map((v, i) =>
    cell([styled("TableText", typeof v === "string" ? [run(v)] : v)], widths[i],
      { margins: m, borders: { ...NO_BORDERS, bottom: rule }, fill: ri % 2 ? C.mistLight : undefined })) }));
  return new Table({
    width: { size: mm(widths.reduce((a, b) => a + b, 0)), type: WidthType.DXA },
    columnWidths: widths.map(mm), layout: TableLayoutType.FIXED, borders: TABLE_NO_BORDERS,
    margins: ZERO_MARGINS, rows: [headRow, ...bodyRows],
  });
}

const spacer = (after = 200) => new Paragraph({ children: [], spacing: { before: 0, after, line: 120, lineRule: LineRuleType.EXACT } });

// ---------------------------------------------------------------- documents
const TODAY = "1 October 2026";

function templateContent(version) {
  const ph = (t) => run(t, { color: C.slate });
  const out = [];
  if (version === "formal") {
    out.push(...recipient(["[Recipient Name]", "[Position]", "[Organisation]", "[Street Address]", "[Suburb, City]", "[Postal Code]"]));
    out.push(spacer(240));
    out.push(referencePanel([
      ["Our ref", "AN/[Year]/[Number]"], ["Your ref", "[Tender / RFQ reference]"],
      ["Date", "[Day Month Year]"], ["Enquiries", `[Name]  ·  ${COMPANY.email}`],
    ]));
    out.push(new Paragraph({ style: "Salutation", text: "Dear [Mr / Ms Surname] / Dear Sir or Madam," }));
  } else {
    out.push(dateLine("[Day Month Year]", "AN/[Year]/[Number]"));
    out.push(...recipient(["[Recipient Name]", "[Position]", "[Organisation]", "[Street Address]", "[Suburb, City]", "[Postal Code]"]));
    out.push(new Paragraph({ style: "Salutation", text: "Dear [Mr / Ms Surname]," }));
  }
  out.push(styled("Subject", "[Subject of the letter]"));
  out.push(body([ph("[Opening paragraph. State the purpose of the letter in one or two sentences.]")]));
  out.push(body([ph("[Body paragraphs. Type or paste over this text — the Normal style is already set to the Auris Nexus body specification, and the header, footer and continuation pages adjust automatically as the letter grows.]")]));
  out.push(bullet([ph("[Bulleted point — use the List Bullet style]")]));
  out.push(bullet([ph("[Bulleted point]")], true));
  out.push(finalPara([ph("[Closing paragraph with the requested action or next step.]")]));
  out.push(...signature(SIGNATORY.name, SIGNATORY.title, version === "formal" ? "Yours faithfully" : "Yours sincerely"));
  out.push(styled("Enclosure", "Enclosure: [Document name]"));
  return out;
}

function blankContent() {
  // Two-page blank stationery: shows the first page and the continuation page.
  return [new Paragraph({ children: [new PageBreak()] }), new Paragraph({ children: [] })];
}

function standardSample() {
  return [
    dateLine(TODAY, "AN/2026/[No.]"),
    ...recipient(["The Head: Procurement and Supplier Management", "[Organisation Name]",
      "[Street Address]", "[Suburb, City]", "[Postal Code]"]),
    new Paragraph({ style: "Salutation", text: "Dear Sir or Madam," }),
    styled("Subject", "Introduction of Auris Nexus Technologies (Pty) Ltd — Technology Consulting and Digital Solutions"),
    body("We write to introduce Auris Nexus Technologies (Pty) Ltd, a South African technology consulting and digital solutions company based in Sandton, Gauteng, and to request that we be considered for inclusion on your organisation’s supplier database for technology-related requirements."),
    body("Auris Nexus works from the business problem outward. Our engagements typically begin where an organisation has outgrown spreadsheets, manual handovers or disconnected systems, and needs dependable technology that reflects the way its people actually work. We design, build and support digital systems that help organisations operate, serve their customers and manage information more effectively."),
    H1("Capabilities"),
    body("Our services are structured so that a single engagement can move from advice to a working, supported system:"),
    bullet("Technology consulting and digital transformation advisory"),
    bullet("Custom software development and enterprise business systems"),
    bullet("Business process automation and systems integration"),
    bullet("Data, business intelligence and management reporting"),
    bullet("Responsible AI integration within existing business processes"),
    bullet("Web and mobile application development"),
    bullet("Cloud integration, technology support and continuous improvement", true),
    H1("How we work"),
    body("Every engagement follows a defined delivery lifecycle — discovery and requirements, analysis and design, development, testing and quality assurance, deployment and training, followed by ongoing support. Requirements, scope and acceptance criteria are agreed in writing before development begins, and progress is reported against them throughout the engagement."),
    body("We treat information security and the protection of personal information as design requirements rather than afterthoughts. Systems are built with role-based access, auditability and data minimisation in mind, in line with the Protection of Personal Information Act, 4 of 2013 (POPIA), and with the information-management policies of the client organisation."),
    body("Our commercial approach is equally practical. We are able to work on a fixed-scope project basis, through phased delivery with defined milestones, or on a retained support arrangement, depending on the nature of the requirement and the client’s procurement framework."),
    H1("Company information"),
    body([run("For your supplier records, our registered details are as follows: "), bold(COMPANY.legal),
      run(`, CIPC Registration No. ${COMPANY.reg}, ${COMPANY.bbbee}, with our office at ${COMPANY.addressLine}. Supporting registration and compliance documentation is available on request and can be provided in the format required by your supplier onboarding process.`)]),
    H1("Proposed next step"),
    body("We would welcome the opportunity to complete your supplier registration requirements and to meet with your team to understand the technology priorities on which you anticipate going to market. We would also be pleased to respond to any request for information, request for quotation or tender in which our capabilities are relevant."),
    finalPara([run("Please direct any correspondence to "), run(COMPANY.email, { color: C.orbitBlue }),
      run(` or ${COMPANY.tel}. Thank you for your time and consideration.`)]),
    ...signature(SIGNATORY.name, SIGNATORY.title),
    styled("Enclosure", "Enclosure: Auris Nexus Technologies company profile"),
  ];
}

function formalSample() {
  const facts = [
    ["Registered name", COMPANY.legal],
    ["CIPC registration number", COMPANY.reg],
    ["B-BBEE status", "Level 1"],
    ["CSD supplier number", COMPANY.csd],
    ["Registered address", COMPANY.addressLine],
    ["Telephone", COMPANY.tel],
    ["Email", COMPANY.email],
    ["Website", COMPANY.web],
  ];
  return [
    ...recipient(["The Bid Office / Supply Chain Management", "[Organisation Name]",
      "[Street Address]", "[Suburb, City]", "[Postal Code]"]),
    spacer(240),
    referencePanel([
      ["Our ref", "AN/2026/[No.]"], ["Your ref", "[Tender / RFQ reference as issued]"],
      ["Date", TODAY], ["Enquiries", `[Name]  ·  ${COMPANY.email}`],
    ]),
    new Paragraph({ style: "Salutation", text: "Dear Sir or Madam," }),
    styled("Subject", "Request for clarification and confirmation of intention to respond — [Tender / RFQ reference]: [Title of requirement as issued]"),
    H1("Purpose", true),
    body("Auris Nexus Technologies (Pty) Ltd acknowledges receipt of the above bid documentation and confirms its intention to submit a response by the stipulated closing date. In accordance with the clarification procedure set out in the bid documents, we respectfully request clarification on the matters listed in section 3 below, so that our response is complete and fully compliant."),
    H1("Bidder details", true),
    body("The bidder details below correspond to the information that will be provided in the standard bidding documents and returnable schedules."),
    dataTable([62, 108], ["Item", "Detail"], facts),
    H1("Clarifications requested", true),
    body("We request clarification on the following items. Where the response affects the pricing schedule or returnable documents, we would be grateful if it could be circulated to all prospective bidders by way of a formal addendum."),
    dataTable([12, 42, 116], ["No.", "Document reference", "Clarification requested"], [
      ["3.1", "Scope of work, section [x]", "Please confirm whether migration of historical data from the existing system falls within the scope of this requirement, and if so, the approximate number of records and the source formats involved."],
      ["3.2", "Scope of work, section [x]", "Please confirm whether end-user training is to be priced as a separate line item, and the number of users and locations to be trained."],
      ["3.3", "Pricing schedule", "Please confirm whether rates are to be quoted inclusive or exclusive of VAT, and whether ongoing support is to be priced per month or per annum."],
      ["3.4", "Returnable documents", "Please confirm whether certified copies must be certified within a specific period prior to the closing date."],
      ["3.5", "Submission requirements", "Please confirm whether an electronic copy is required in addition to the original hard-copy submission, and the preferred file format."],
    ]),
    H1("Undertakings", true),
    body("In submitting this request, Auris Nexus Technologies (Pty) Ltd confirms that:"),
    numbered("it has read and understood the bid documents as issued, including any addenda published to date;", 1),
    numbered("it will not seek to obtain information about this bid other than through the official channel nominated in the bid documents; and", 1),
    numbered("the bidder details provided in section 2 above are true and correct as at the date of this letter.", 1, true),
    H1("Contact", true),
    finalPara([run("All correspondence regarding this bid may be directed to the undersigned at "),
      run(COMPANY.email, { color: C.orbitBlue }), run(` or ${COMPANY.tel}. We thank you for your assistance and look forward to your response.`)]),
    ...signature(SIGNATORY.name, SIGNATORY.title),
    styled("Enclosure", "Enclosures: Company registration documents; B-BBEE certificate or sworn affidavit, as applicable"),
  ];
}

// ---------------------------------------------------------------- assembly
const TITLES = {
  standard: "Auris Nexus Technologies — Standard Corporate Letterhead",
  formal: "Auris Nexus Technologies — Formal Procurement Letterhead",
};

function buildDocument(version, mode) {
  ink = INK[version];
  const content = {
    template: () => templateContent(version),
    blank: () => blankContent(),
    sample: () => (version === "formal" ? formalSample() : standardSample()),
    // QA only: a long document that exercises page breaks, repeated table headers and numbering.
    stress: () => [...standardSample(), new Paragraph({ children: [new PageBreak()] }), ...formalSample(),
      ...standardSample().slice(5, 20), ...formalSample().slice(13, 20)],
  }[mode]();
  const ref = mode === "sample" ? "AN/2026/[No.]" : "AN/[Year]/[Number]";
  return new Document({
    creator: COMPANY.legal,
    lastModifiedBy: COMPANY.legal,
    title: TITLES[version],
    subject: "Corporate correspondence",
    description: "Auris Nexus Technologies (Pty) Ltd corporate letterhead",
    keywords: "Auris Nexus; letterhead",
    styles,
    numbering,
    features: { updateFields: false },
    sections: [{
      properties: {
        titlePage: true,
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: mm(PAGE.top), bottom: mm(PAGE.bottom), left: mm(PAGE.left), right: mm(PAGE.right),
            header: mm(PAGE.header), footer: mm(PAGE.footer), gutter: 0 },
        },
      },
      headers: { first: firstPageHeader(version), default: continuationHeader(version, ref) },
      footers: { first: firstPageFooter(version), default: continuationFooter(version) },
      children: content,
    }],
  });
}

const FILES = [
  ["standard", "template", "AurisNexus_Letterhead_Standard.docx"],
  ["formal", "template", "AurisNexus_Letterhead_Formal-Procurement.docx"],
  ["standard", "blank", "AurisNexus_Letterhead_Standard_Blank-Stationery.docx"],
  ["formal", "blank", "AurisNexus_Letterhead_Formal-Procurement_Blank-Stationery.docx"],
  ["standard", "sample", "AurisNexus_Sample_Standard_Supplier-Introduction-Letter.docx"],
  ["formal", "sample", "AurisNexus_Sample_Formal_Bid-Clarification-Letter.docx"],
];

if (process.env.AN_QA) {
  FILES.push(["standard", "stress", "QA_Standard_Long-Document.docx"], ["formal", "stress", "QA_Formal_Long-Document.docx"]);
}

(async () => {
  const outDir = process.argv[2] || path.join(__dirname, "build");
  fs.mkdirSync(outDir, { recursive: true });
  for (const [version, mode, name] of FILES) {
    const buf = await Packer.toBuffer(buildDocument(version, mode));
    fs.writeFileSync(path.join(outDir, name), buf);
    console.log("wrote", name);
  }
})();
