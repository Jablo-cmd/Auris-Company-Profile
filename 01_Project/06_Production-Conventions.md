# Production Conventions
## Auris Nexus Technologies (Pty) Ltd — Corporate Profile

**Document:** `01_Project/06_Production-Conventions.md`
**Stage:** 1 — Project Planning
**Status:** Draft for approval

---

## 1. Stage plan and gates

| Stage | Deliverable | Output location | Gate criteria |
|---|---|---|---|
| **1** | Publication blueprint | `01_Project/`, `07_Branding/` | Strategy, IA, pagination and design system approved |
| **2** | Design system: identity, components, print production | `07_Branding/08`–`10`, `04_Icons/` | Every component specified; press spec set; **system frozen** |
| **3** | Company foundation copy | `02_Content/part-1/` | Groups A, B resolved; voice established |
| **4** | Services copy | `02_Content/part-2/` | Group C resolved; eight spreads complete |
| **5** | Industries copy | `02_Content/part-3/` | All fifteen industries addressed in full |
| **6** | Technical capabilities copy | `02_Content/part-4/`, `06_Tables/` | Comparison tables built and editable |
| **7** | Delivery copy | `02_Content/part-5/`, `05_Diagrams/` | Figure 5.1 master diagram complete |
| **8** | Business excellence copy | `02_Content/part-6/` | Group G resolved |
| **9** | Credentials copy | `02_Content/part-7/` | Groups E, F, H resolved; **fact base frozen** |
| **10** | Visual content | `03_Images/`, `04_Icons/`, `05_Diagrams/` | All assets produced; images CMYK at 300 dpi; logo vector rebuild delivered |
| **11** | Assembly | `08_Word/`, `09_PDF/` | Word master complete; both variants paginate identically; screen and tender PDFs pass preflight |
| **12** | Quality audit | `10_Output/` | Zero tokens; all checklists passed |

No stage begins before its predecessor is approved.

> **Cross-reference (2026-08-02).** The client's Project Handover Brief,
> `01_Project/08_Project-Handover-Brief.md` §5, restates the remaining stages in more granular form —
> naming Closing Matter as its own stage and splitting this table's Stage 11 (Assembly) into Word
> Production and Final Print Production, either side of Quality Assurance. Stages 1–9 agree across
> both documents. See that brief's §7 for the reconciliation note; the split is not yet applied to
> this table pending confirmation at Stage 11.

### Two freeze points

- **After Stage 2 — the design system freezes.** A component altered at Stage 9 invalidates every
  page built between Stages 3 and 8. Later changes require change control and retroactive application.
- **After Stage 9 — the fact base freezes.** Copy may be edited for style thereafter, but no new
  factual claim enters the document without returning to the Fact Register.

---

## 2. File naming

| Type | Pattern | Example |
|---|---|---|
| Content | `<part>-<section>-<slug>.md` | `2-04-cybersecurity.md` |
| Diagram | `fig-<part>.<n>-<slug>.svg` | `fig-5.1-delivery-lifecycle.svg` |
| Table | `tbl-<part>.<n>-<slug>.md` | `tbl-4.1-technology-stack.md` |
| Icon | `an-icon-<domain>-<name>.svg` | `an-icon-tech-cybersecurity.svg` |
| Illustration | `an-illus-<subject>.svg` | `an-illus-apex-cover.svg` |
| Logo | `an-logo-<version>-<variant>.svg` | `an-logo-stacked-reversed.svg` |
| Image | `img-p<page>-<slug>.tif` | `img-p006-md-portrait.tif` |
| Output | `Auris-Profile-<variant>-v<n>.<ext>` | `Auris-Profile-Brand-v1.docx` |

Lower case, hyphen-separated, no spaces, no dates in filenames — versioning is carried in the
document control table, not the filename.

---

## 3. Content file structure

Every content file in `02_Content/` opens with the same front matter block, so that assembly at
Stage 11 is mechanical rather than interpretive.

```yaml
---
section: "4.4"
title: "Cybersecurity"
part: "Four — Technical Capabilities"
pages: [65]
archetype: C
words_target: 420
figures: []
tables: []
icons: ["fa-shield-halved"]
images: []
tokens: ["To be confirmed during final production"]
status: draft | review | approved
---
```

`words_target` is derived from the archetype and is binding within ±10%. Copy written to an
arbitrary length is the primary cause of layout failure at assembly, and the reason so many
profiles end up with three-quarters-empty pages next to overset ones.

### Word budgets by archetype

| Archetype | Words |
|---|---|
| C — narrative single | 380–450 |
| D — narrative spread | 750–900 |
| E — card grid (per card) | 55–75 |
| F — diagram page | 180–260 plus labels |
| G — table page | 120–180 plus table |
| H — service spread | 620–720 across ten blocks |
| I — fact panel | 200–300 |
| J — portrait grid (per entry) | 40–55 |
| K — editorial image | 400–650 |

**Total drafted extent: approximately 34 000 words.**

---

## 4. Terminology register

One term, one spelling, one meaning, throughout. Maintained from Stage 3 and audited at Stage 12.

| Preferred | Not |
|---|---|
| Auris Nexus Technologies (first mention in any section) | Auris Nexus, ANT, the Company |
| Auris Nexus (subsequent mentions) | ANT |
| client | customer, partner (unless a formal partner) |
| engagement | project (where a broader relationship is meant) |
| capability | competency, skillset |
| solution | product (unless a licensed product is meant) |
| deliver | provide, offer, supply |
| public sector | government sector |
| state-owned enterprise | parastatal |
| cybersecurity | cyber security, cyber-security |
| POPIA | PoPI, POPI Act |
| B-BBEE | BBBEE, BEE |
| information security | infosec |
| business intelligence | BI (spell out on first use per section) |
| artificial intelligence | AI (spell out on first use per section) |

Acronyms are expanded on first use **in every section**, because any section may be extracted and
read standalone.

---

## 5. Production tool chain

**Microsoft Word is the authoring and design master**, so the document stays editable and
maintainable by Auris Nexus. It is composed to professional publishing standards and is portable to
InDesign or Affinity Publisher without redesign. Commercial offset remains the primary output
medium. Full specification in `07_Branding/10_Print-Production.md`.

```
Word master (approximately 55–65 pp · A4 · 216×303 mm with bleed · design grid)
   ├── Screen PDF (sRGB)       → distribution
   ├── Tender PDF (< 10 MB)    → procurement portals
   ├── Acrobat Pro → CMYK/X-4  → offset press
   └── .docx                   → client editing
```

**The binding rule: no design decision is made because of what Word can or cannot do.** The grid,
baseline, type scale, spacing tokens and CMYK-verified palette are tool-independent. Where Word
cannot execute something cleanly, the production method adapts — never the design. Word's specific
limitations and their handling are set out in `10_Print-Production.md` §1.2; the significant ones
are no CMYK, no bleed setting and no baseline grid, all of which are resolved downstream or were
designed around from the outset.

**Diagrams, tables and charts are built once**, as native Word objects — preserving Charter
principle **P4** in the master itself.

---

## 6. Word derivative standards

| Requirement | Specification |
|---|---|
| Format | `.docx`, Word 2016 compatibility or later |
| Styles | Every paragraph carries a named `AN …` style. **Direct formatting prohibited** |
| Theme | Custom Office theme `Auris-Nexus.thmx` installed, so charts and SmartArt inherit brand colours |
| Contents | `TOC` field, Heading 1–2, updated at build. Never typed |
| Cross-references | `REF` fields to bookmarks. **No typed page numbers anywhere** |
| Figure and table numbering | `SEQ` fields with caption styles |
| Sections | One Word section per part, for independent headers and footers |
| Headers | Verso: part name · Recto: section title. Different first page on dividers |
| Footers | Folio outer, status line inner, 0.3 pt hairline above |
| Page numbering | Continuous arabic from p. 1; suppressed on covers and dividers |
| Fonts | Embedded; "embed only characters used" **off** |
| Language | `en-ZA` set on styles, tables, captions and footnotes |
| Alt text | On every image, diagram and chart |
| Accessibility | Word Accessibility Checker returns zero errors |
| Metadata | Title, author, company, keywords set; comments and revision history cleared before release |

---

## 7. Output standards

| Variant | Specification |
|---|---|
| **Press** | **PDF/X-4:2010**, FOGRA39, 3 mm bleed, crop/bleed/registration marks and colour bars, fonts embedded, 300 dpi images, TAC ≤ 300%, **no transparency**, **single pages, not spreads**. Produced by converting the Word PDF export in Acrobat Pro, or by rebuilding in InDesign |
| **Screen** | PDF 1.7, sRGB, 150 dpi, tagged for accessibility, bookmarks from headings, live hyperlinks, fast web view |
| **Tender** | Screen variant, flattened, no interactive elements, **under 10 MB** — many procurement portals cap upload size and reject interactive PDFs |
| **Word** | `.docx` Brand and Safe variants, per `07_Branding/03_Typography.md` §3 |

Screen and tender variants export directly from the **Word master**. The press variant requires a
downstream colour conversion in Acrobat Pro — Word cannot produce PDF/X-4 itself. The tender size
ceiling is a real constraint that has cost bidders submissions, and it is designed for rather than
discovered late.

Full preflight checklist: `07_Branding/10_Print-Production.md` §9.

---

## 8. Version control

| Convention | Rule |
|---|---|
| Repository | Git. One commit per stage deliverable, tagged `stage-<n>-approved` |
| Draft numbering | `v0.n` in draft; `v1.0` at first release |
| Revisions | Recorded in the document control table on the inside back cover |
| Edition | Stated on the cover — `Edition 1 · 2026` |
| Review cycle | Annual, or on material change to any Group E fact |

---

## 9. Stage close-out format

Every stage closes with the same four-part report:

1. **Completed** — what was produced, with file references
2. **Assumptions** — every judgement made in the absence of confirmed input
3. **Recommendations** — improvements identified, ranked by impact
4. **Approval checklist** — explicit items to confirm before the next stage opens

Plus, from Stage 3 onward: an open `To be confirmed during final production` count against the Fact Register.
