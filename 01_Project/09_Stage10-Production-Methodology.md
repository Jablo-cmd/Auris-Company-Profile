---
title: "Stage 10 — Production methodology"
status: "Stage 10 — first production-draft pass"
---

# 09 — Stage 10 Production Methodology

This document records the decisions made in the first Stage 10 production pass: how the
`.docx` is generated from `02_Content/`, how words are counted for the authoritative
`words_actual` figure, and how unresolved evidence tokens are handled in client-facing
output. It supersedes the per-file `words_actual` frontmatter values in `02_Content/*.md`
as the basis for word-count reporting; those frontmatter values remain in place as the
historical drafting estimates they always were, not because they are still authoritative.

Nothing in this document authorises closing an open Fact Register or Claim Verification
Register item. See `05_Fact-Register.md` and `07_Claim-Verification-Register.md` for the
evidence gates themselves — this file only describes how the *production pipeline* behaves
while those gates remain open.

---

## 1. Production architecture

**Tool:** `scripts/generate-docx.js` (Node.js, using the `docx` package — see
`scripts/package.json`). Run with `npm install && node generate-docx.js` from `scripts/`.
It reads every file under `02_Content/**/*.md` directly — the Markdown is the only input;
no separate content database or CMS is involved — and writes
`08_Word/Auris-Nexus-Company-Profile-Stage10-Draft.docx`. The script never modifies source
Markdown; all editorial treatment described below happens only at generation time.

**Why this tool:** `docx` (docx-js) builds a new, valid OOXML document directly, which suits
generating from Markdown far better than editing an existing template's XML by hand. See the
`docx` skill for the toolchain rationale.

**Document order:** cover → native Word Contents field → Front Matter (MD message) → Part
One → Part Two → Part Three → Part Four → Part Five, each Part preceded by a divider page.
Within a Part, files are read in their existing filename order (already numbered to match
the intended reading order — `1-01`, `1-02`, ... `1-10`, etc.).

**Per-file parsing rule.** Every content file follows the same structural convention:
frontmatter, then an H1, then reader-facing body content, then a `## Production notes`
section. The parser:
- Discards frontmatter entirely (never rendered).
- Renders the H1 as the page/section heading.
- Renders `**Standfirst**`-labelled blockquotes as a styled pull-quote (the literal word
  "Standfirst" is a CMS label, not reader copy, and is not printed).
- Renders `## Copy` bodies as normal paragraphs (the word "Copy" itself is a CMS label and
  is not printed as a heading).
- Renders numbered circled headings (used by the ten-block service-page archetype, Part
  Two) as subheadings, stripping the circle glyph and any word-count parenthetical such as
  "(40–55 words)" — those are drafting guidance, not reader content.
- Renders `##`/`###` headings, bullet lists, and Markdown tables as their Word equivalents.
- **Stops entirely at `## Production notes`.** Everything from that heading to the end of
  the file — fact-callout instructions, layout notes, changelog entries, cross-reference
  reminders — is production/editorial metadata, never reader-facing copy, and is excluded
  from the generated document in full. This is the main reason unresolved evidence tokens
  mostly never reach the draft at all: nearly every `[[TOKEN]]` reference sits inside a
  Production Notes block. The handful that sit in reader-facing prose are handled per §3.
- A single leading `**Layout:**` instruction line (used by some archetypes, e.g. "Archetype
  H, the fixed ten-block service template") is likewise a production note and is dropped.

**Known simplifications in this first pass** (documented rather than silently accepted):
- **Margins.** The brand spec (`07_Branding/04_Grid-and-Spacing.md`) defines true mirrored
  facing-page margins for a perfect-bound book (18 mm outer / 22 mm inner gutter). This
  build uses a single-sided approximation (22 mm left / 18 mm right on every page) rather
  than alternating odd/even mirrored margins. Correct for a desktop review copy; a
  print-ready build needs real mirroring.
- **No font embedding.** Saira, Source Sans 3 and Source Serif 4 are referenced by name
  (per `03_Typography.md`'s own fallback table: Saira→Tahoma/Arial, Source Sans 3→Calibri/
  Verdana on a machine without them installed). The brand doc's own two-variant plan
  (`Auris-Profile-Brand.docx` with embedded fonts vs. `Auris-Profile-Safe.docx` with
  metric-compatible substitutes) is a later production step, not done here.
- **No diagrams, custom icon graphics, or photography.** `04_Icons/`, `05_Diagrams/`,
  `06_Tables/` (as image exports) hold no files beyond `.gitkeep` — Font Awesome icon codes
  and diagram descriptions in the source content are specifications for a designer, not
  renderable assets, and none exist yet (see §4). The draft is text- and table-complete but
  visually plain compared to the intended magazine-style layout.
- **Part divider pages** are a plain navy-on-white title treatment, not the full-bleed
  reversed-colour spread the brand system specifies — a legitimate simplification for a
  content-focused first draft, not a brand deviation of substance.
- **Page numbers will not land on the same page as `04_Page-by-Page-Outline.md`'s fixed
  112-page grid.** That outline is a *design specification* (what page 26 should contain);
  this build's actual pagination is whatever Word's live reflow produces from the available
  fonts on the viewing machine, which will differ. Reconciling the two is a desktop-
  publishing-fidelity task for a later pass, not something a Markdown→docx script can
  guarantee.

---

## 2. Word-count methodology (Phase 4)

The previous per-file `words_actual` frontmatter values were produced by an unvalidated
Markdown word count during drafting (Stage 9A and earlier explicitly deferred trusting
them). Stage 10 replaces that with a count taken from the **actual generated document**,
using `scripts/count-words.py`.

**Counts:**
- Cover page title, tagline, and descriptor text.
- Part divider titles.
- All heading levels (H1 section titles, H2/H3 subheadings) as rendered.
- Standfirst / pull-quote text.
- Body paragraph text.
- Bulleted list item text.
- Table cell text, header and body rows alike.
- Numbers, identifiers, and codes count as one word each (e.g. `2026/606690/07` = 1 word),
  consistent with standard word-count convention.
- Hyphenated compounds count as one word (e.g. `founder-led`).

**Does not count:**
- YAML frontmatter (never rendered, so moot).
- Anything inside a `## Production notes` block (excluded from rendering entirely, so
  moot for the same reason).
- Running headers and footers (python-docx does not expose these as body paragraphs, so
  the counting script cannot see them even if it tried).
- Page numbers / folios.
- The Contents page's field-instruction label ("Auto-generated field...") — an editorial
  instruction to the person opening the file, not document content.
- The native Word Table of Contents field's own generated entry lines — before the field is
  updated in Word it carries no text for the counter to see, and after updating it would
  only mirror heading text already counted once, so it is excluded by construction rather
  than needing a special case.
- The `"confirmation pending"` marker phrase substituted for unresolved tokens (see §3) —
  it stands in for the *absence* of content, not for authored copy, so counting it would
  overstate how much has actually been written. It is reported separately for transparency.

**Method (reproducible):**
```
python3 scripts/count-words.py [path-to-docx]
```
reads every paragraph and table cell via `python-docx`, applies the exclusions above, and
reports three numbers: the raw visible word count, the word count attributable to the
pending-confirmation marker, and the authored count (raw minus marker) — the last of these
is the authoritative Stage 10 `words_actual` figure.

**Result at this build (2026-09-14):**
- Raw visible words: 18,164
- Words attributable to `"confirmation pending"` markers: 194 (97 token instances × 2 words)
- **Authored word count (authoritative): 17,970**

This is a whole-document figure. Per-page/per-section reconciliation against
`04_Page-by-Page-Outline.md`'s individual word budgets is not attempted here — the outline
gives design guidance for a hand-laid-out spread, and this build does not yet map 1:1 to
that page grid (see §1). Re-deriving per-page counts is left to the desktop-publishing pass.

---

## 3. Unresolved evidence token treatment (Phase 8)

Tokens are handled at generation time only; **no source Markdown file is edited**, so every
token remains exactly as tracked in the Fact Register and CVR for future stages.

**Category A — production-note tokens (the majority).** Tokens inside a `## Production
notes` block (e.g. every "Fact callout, lower recto: `[[PROOF_WEB]]`..." instruction) are
never rendered at all, because that whole block is excluded (§1). This resolves most of the
82 open content tokens without any special-case handling.

**Category B/C — inline reader-facing tokens.** A `[[TOKEN]]` that sits inside actual reader
copy (e.g. "Tax compliance status: `[[TAX_COMPLIANCE_STATUS]]`.", or a labelled field like
"**Technologies currently used:** `[[TECH_CURRENT_ENGINEERING]]`") is replaced with the
italic marker phrase **"confirmation pending"**, styled in Slate to read visibly as an
editorial note rather than body prose or a typo. This is deliberately neutral: it neither
asserts an unsupported fact nor claims something is "available on request" (which would
itself imply the thing currently exists) — it just says, truthfully, that the detail is not
yet confirmed. 97 token instances received this treatment in the current build.

**Category D — a table with no non-token content.** Two tables in the source (`4.11`
Capability and technology comparison; `5.9` Service level framework) have every data cell
filled with an unresolved token — nothing else to show. Printing a table entirely composed
of "confirmation pending" cells communicates nothing and reads as a production error rather
than an honest gap. These two tables are omitted from the rendered body and replaced with a
single italic sentence: *"A detailed table for this section will be included once the
underlying figures are confirmed."* This is the Phase 8 "removing a claim that cannot be
supported" option, applied to a structural element (a table) rather than a sentence.

**Verification.** After generation, every paragraph and table cell in the output `.docx` is
scanned for a literal `[[` — the current build returns zero matches. This check is cheap and
should be re-run after any change to the generator or the source content
(`python3 -c "import docx; ..."` — see `scripts/count-words.py` for the `python-docx` access
pattern, or re-run the ad hoc scan described in the Stage 10 build log).

---

## 4. Asset requirements identified, not fabricated (Phase 7)

The following are referenced by `02_Content/` and `04_Page-by-Page-Outline.md` but do not
exist as files in this repository. They are recorded here as **requirements for a future
production pass**, not fabricated for this one:

- Custom diagrams for each Part (delivery lifecycle master diagram, operating-model diagram,
  RACI/escalation diagrams referenced in older outline text, capability comparison charts).
- Icon graphics — Font Awesome codes are specified per page (e.g. `fa-file-lines`) but no
  icon asset files have been exported.
- Photography/illustration per the brand's photography direction (`07_Branding/
  06_Photography-and-Illustration.md`) — genuine work-in-progress imagery is specified in
  several Production Notes blocks (e.g. 2.5's note: "development or design review in
  progress... not a generic stock image"); none exists yet, and none was substituted with
  stock imagery, per Phase 7's explicit instruction.
- Case-study / portfolio visuals — none exist; none were fabricated, and no imagery
  representing a specific client deployment was created, consistent with the Fact Register's
  gated `PROOF_*` tokens.

Only the one asset that does exist — `03_Images/aurilogo.png` — was used, on the cover page.

---

## 5. Page-by-page mapping (Phase 9)

`04_Page-by-Page-Outline.md` remains the authoritative page-level specification (page
number, section, archetype, required assets, word budget). This build does not attempt to
re-derive or replace that table. What it adds is the confirmation that every one of its 51
corresponding content files is present, uniquely represented, and in the correct order in
the generated document (see the Stage 10 build QA log) — not that each file's *content*
currently lands on the specific physical page number the outline assigns, which depends on
final typesetting decisions outside this script's scope.
