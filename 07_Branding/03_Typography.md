# Typography
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/03_Typography.md`
**Stage:** 2 — Document Design System
**Status:** Draft for approval
**Derived from:** the `AURIS` wordmark — see `08_Logo-and-Identity.md` §1

---

## 1. Analysis of the wordmark

The typeface system is chosen to sit with the mark, not against it. The `AURIS` wordmark was
examined at high magnification and shows five defining characteristics:

| # | Characteristic | Evidence in the wordmark |
|---|---|---|
| 1 | **Monolinear** | Stroke weight is uniform throughout; no thick/thin modulation anywhere |
| 2 | **Geometric** | Forms are constructed from straight lines and constant-radius arcs. The `U` is a squared shoulder with a flat-radius base |
| 3 | **Squared terminals** | All stroke ends are cut flat, at 90° or on a diagonal — never rounded, never tapered |
| 4 | **Wide stance** | Letterforms are notably extended; generous counters and open apertures |
| 5 | **Diagonal shear** | The `I` is a parallelogram sheared at the top right; the `S` terminals and the `R` leg are cut on the diagonal. This is the wordmark's signature detail |

The `A` carries no conventional crossbar — it is a chevron with a solid triangular counter, echoing
the symbol above it at small scale. The wordmark and the symbol are the same idea drawn twice.

### 1.1 What this means for the document

The wordmark is a **display face**. It is wide, geometric and highly characterised — excellent at
72 mm on a cover, unreadable across 34 000 words. The system therefore uses a **three-tier
strategy**: a display face that visibly relates to the wordmark, a text face that does not compete,
and an editorial serif for the three places the document speaks personally.

---

## 2. Typeface selection

| Role | Typeface | Licence | Relationship to the mark |
|---|---|---|---|
| **Display and headings** | **Saira** | SIL OFL 1.1 | A squared grotesque: monolinear, flat terminals, geometric skeleton — characteristics 1, 2 and 3 above. Critically, Saira carries a **variable width axis (50–125)**, so cover and part titles can be set semi-expanded to echo the wordmark's stance while section headings stay at normal width for readability at length |
| **Body** | **Source Sans 3** | SIL OFL 1.1 | Deliberately neutral. Designed for interfaces and long-form reading: large x-height, open apertures, unambiguous `1 l I` and `0 O` — a genuine requirement in a document full of registration numbers, tax references and version strings |
| **Editorial** | **Source Serif 4** | SIL OFL 1.1 | Managing Director's message, pull-quotes, case study narrative only. Metrically companionable with Source Sans by design |

### 2.1 Change from Stage 1 — documented

**Stage 1 specified Barlow for display and headings. It is replaced by Saira.**

Barlow was chosen before the logo was available, on the assumption of a generically "engineered"
identity. Against the actual wordmark it is a **near-miss**: Barlow is narrower, rounder in the
shoulders, and lacks a width axis. A near-miss is worse than a deliberate contrast, because the
reader perceives the mismatch without being able to name it — the cover looks subtly like two
companies.

Saira is from the same foundry as Barlow (Omnibus-Type) and shares its skeleton, but is squarer,
wider, and width-variable. It relates to the wordmark without imitating it.

### 2.2 Why not set headings in the wordmark's own face

The wordmark's face is not supplied, and identifying it from raster artwork would be a guess. More
importantly, setting headings in the logo's typeface is a common and costly error: it makes every
heading compete with the identity, and it removes the hierarchy that separates *the brand* from
*the document*. The logo should be the only place that face appears.

### 2.3 Why open-licence families

Every recipient — client, printer, co-bidder, government department — can legally install and render
these fonts. Commercial foundry licences routinely prohibit exactly the embedding and redistribution
a tender document requires, and a profile that reflows on the evaluator's machine has failed before
it is read.

---

## 3. Fallback matrix

The document must render acceptably on an unremarkable corporate or government PC with no brand
fonts installed. Fallbacks are specified and tested, not left to the operating system.

| Brand font | Word fallback | Universal | Compensation |
|---|---|---|---|
| Saira | Tahoma | Arial | Tahoma is the closest squared-grotesque on a standard Windows build. Set to 98% tracking at display sizes |
| Source Sans 3 | Calibri | Verdana | Calibri runs ~4% smaller; the Safe variant compensates with a 0.5 pt size increase |
| Source Serif 4 | Georgia | Times New Roman | Georgia's larger x-height is the closer match |

### Two Word deliverables

| Variant | Fonts | Use |
|---|---|---|
| **`Auris-Profile-Brand.docx`** | Saira, Source Sans 3, Source Serif 4 — **embedded** (Options → Save → Embed fonts; "embed only characters used" **off**) | Primary distribution |
| **`Auris-Profile-Safe.docx`** | Tahoma, Calibri, Georgia; metrics adjusted so pagination is identical | Tender portals that strip embedded fonts |

Both variants **must paginate identically at 112 pages**. Verified at Stage 11, not assumed — a
pagination mismatch silently breaks every page-number cross-reference in the document.

PDF deliverables embed all fonts as subsets and are unaffected.

---

## 4. Type scale

Built on the **5 mm baseline grid** (14.17 pt). The scale is deliberately narrow: hierarchy is
carried by weight, colour, case and space rather than size.

| Style | Face | Size | Leading | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| **Cover title** | Saira SemiBold, wdth 112 | 48 pt | 51 pt | −15 | Title | White |
| **Cover descriptor** | Saira Regular, wdth 112 | 13 pt | 17 pt | +80 | UPPER | Signal Cyan |
| **Part number** | Saira Medium, wdth 112 | 13 pt | 17 pt | +120 | UPPER | Signal Cyan |
| **Part title** | Saira SemiBold, wdth 112 | 36 pt | 39.7 pt | −10 | Title | White |
| **Section title (H1)** | Saira SemiBold, wdth 100 | 22 pt | 28.3 pt | −5 | Title | Nexus Navy |
| **Standfirst** | Source Serif 4 Regular | 13 pt | 19.8 pt | 0 | Sentence | Orbit Deep |
| **Subsection (H2)** | Saira SemiBold, wdth 100 | 13 pt | 17 pt | +10 | Sentence | Orbit Deep |
| **Sub-subsection (H3)** | Saira Medium, wdth 100 | 10.5 pt | 14.17 pt | +40 | UPPER | Slate |
| **Body** | Source Sans 3 Regular | 10 pt | 14.17 pt | 0 | Sentence | Graphite |
| **Body emphasis** | Source Sans 3 SemiBold | 10 pt | 14.17 pt | 0 | Sentence | Nexus Navy |
| **Lead paragraph** | Source Sans 3 Regular | 11 pt | 17 pt | 0 | Sentence | Graphite |
| **Bulleted list** | Source Sans 3 Regular | 10 pt | 14.17 pt | 0 | Sentence | Graphite |
| **Callout body** | Source Sans 3 Regular | 10.5 pt | 17 pt | 0 | Sentence | Nexus Navy |
| **Pull-quote** | Source Serif 4 Light Italic | 20 pt | 28.3 pt | −10 | Sentence | Orbit Deep |
| **Fact figure** | Saira SemiBold, wdth 100 | 40 pt | 42.5 pt | −25 | — | Auris Cyan |
| **Fact label** | Saira Medium | 8.5 pt | 11.3 pt | +80 | UPPER | Slate |
| **Table header** | Saira SemiBold | 8.5 pt | 11.3 pt | +40 | UPPER | White on Navy |
| **Table body** | Source Sans 3 Regular | 8.5 pt | 11.3 pt | 0 | Sentence | Graphite |
| **Table figures** | Source Sans 3 Regular (tabular) | 8.5 pt | 11.3 pt | 0 | — | Graphite |
| **Caption** | Source Sans 3 Italic | 8 pt | 11.3 pt | 0 | Sentence | Slate |
| **Figure label** | Saira Medium | 8 pt | 11.3 pt | +60 | UPPER | Orbit Blue |
| **Running head** | Saira Medium | 8 pt | 11.3 pt | +100 | UPPER | Slate |
| **Folio** | Saira Medium | 9 pt | 11.3 pt | +20 | — | Nexus Navy |
| **Footnote** | Source Sans 3 Regular | 7.5 pt | 10 pt | 0 | Sentence | Slate |
| **Legal / control** | Source Sans 3 Regular | 7.5 pt | 11.3 pt | 0 | Sentence | Slate |

Body sits on the 5 mm baseline. Secondary text at 11.3 pt leading sits on the **2.5 mm
half-baseline**, so tables and captions still align at every second increment.

**Note on the figure label colour.** Stage 1 specified Auris Cyan. Changed to **Orbit Blue**: figure
labels are 8 pt, and Auris Cyan measures 3.75 : 1 on white — below the AA threshold for text at
that size. See `02_Colour-Palette.md` §3, deviation **D2**.

---

## 5. Handling the wordmark's shear

The diagonal shear is the wordmark's signature detail. It is expressed in the document **as
geometry, never as type**.

| Permitted | Prohibited |
|---|---|
| The 31° apex device as a section marker | Shearing, obliquing or false-italicising any typeface |
| Diagonal cut on the table-header terminal | Applying a skew transform to headings |
| The 3 : 5 angle in diagram connectors and card corners | Rotating type to any angle |

Faux-obliquing a typeface to imitate a logo is a recognised mark of amateur work: it breaks the
letterform's optical corrections and produces visibly distorted curves. The angle belongs to the
graphic system, specified in `01_Design-Language.md` §5.

---

## 6. Measure and setting

| Parameter | Specification |
|---|---|
| Primary measure | 7 columns = **97.5 mm** ≈ 61 characters at 10 pt — inside the 55–75 optimum |
| Sidebar measure | 4 columns = **54 mm** ≈ 34 characters — set at 9 pt to compensate |
| Alignment | **Flush left, ragged right.** Justification prohibited at this measure |
| Hyphenation | On in sidebars and tables only. Off in the primary measure. Maximum two consecutive hyphenated lines |
| Widows and orphans | Controlled. Minimum two lines at the foot or head of a column |
| Paragraph separation | 5 mm space-after. **No first-line indent** — indent and space-after together are a doubled signal |
| Rag quality | Checked manually at Stage 12. No wedge shapes or trapped white space |

---

## 7. Detail rules

| Element | Rule |
|---|---|
| Numerals | **Lining, tabular** in tables, statistics and figures. Proportional lining in running text |
| Small caps | True small caps only. Faux small caps prohibited |
| Quotation marks | Typographic `" "` and `' '`. Prime marks never used as quotes |
| Dashes | Em dash — unspaced — for parenthetical breaks. En dash spaced for ranges: `2020 – 2026` |
| Ellipsis | Single glyph `…` |
| Ampersand | Display and table headers only. Spelled "and" in body copy |
| Acronyms | Regular case, not small caps. Expanded on first use **in every section**, since any section may be extracted standalone |
| Non-breaking spaces | Between value and unit (`10 pt`), in currency (`R1 250 000`), in cross-references (`p. 65`) |
| Bullets | **2 mm apex triangle** in Auris Cyan, 4 mm hanging indent — derived from the mark. Never a disc, dash, arrow or check glyph |
| Emphasis | SemiBold weight, or Nexus Navy colour. **Never underline. Never italic for emphasis** — italic is reserved for captions, publication titles and Latin |
| Heading breaks | Manually set. No heading may break leaving a single word on the second line |

---

## 8. Word style register

Every style is a named Word style. **Direct formatting is prohibited** — it is what makes a Word
file unmaintainable and what breaks automatic contents and cross-references.

| Word style | Maps to | Outline level |
|---|---|---|
| `AN Part Title` | Part title | 1 (excluded from TOC) |
| `AN Heading 1` | Section title | 1 → `TOC 1` |
| `AN Heading 2` | Subsection | 2 → `TOC 2` |
| `AN Heading 3` | Sub-subsection | 3 (excluded) |
| `AN Standfirst` | Standfirst | Body |
| `AN Body` | Body | Body (default) |
| `AN Body Lead` | Lead paragraph | Body |
| `AN List Bullet` / `AN List Number` | Lists | Body |
| `AN Callout` | Callout body | Body |
| `AN Quote` | Pull-quote | Body |
| `AN Fact Figure` / `AN Fact Label` | Statistics panel | Body |
| `AN Table Header` / `AN Table Body` | Tables | Body |
| `AN Caption` | Captions | Caption (for `SEQ` fields) |
| `AN Footnote` | Footnotes | Footnote |
| `AN Legal` | Legal and control | Body |

Character styles: `AN Emphasis`, `AN Term`, `AN Figure Ref`, `AN Link`.

---

## 9. Localisation

| Parameter | Setting |
|---|---|
| Language | English (South Africa), `en-ZA`, set on the style — never applied ad hoc |
| Proofing | `en-ZA` dictionary plus a project custom dictionary for company and technology terms |
| Spelling | *organisation, recognise, programme, centre, licence* (n) / *license* (v), *analyse, defence, catalogue* |
| Dates | `2 August 2026`. Never numeric-only |
| Currency | `R1 250 000` · `R1,25 million` — space thousands separator, comma decimal (SI / SANS) |
| Time | 24-hour, `14:30` |
| Telephone | `+27 11 123 4567` — international format, spaced |

---

## 10. Verification at Stage 12

- [ ] No direct formatting anywhere (checked via Style Inspector)
- [ ] Every paragraph carries a named style
- [ ] Brand and Safe variants paginate identically at 112 pp
- [ ] No orphans, widows or single-word heading breaks
- [ ] Tabular figures in every table and statistics panel
- [ ] `en-ZA` set on every style, including tables, captions and footnotes
- [ ] No sheared, obliqued or rotated type anywhere in the document
- [ ] Contents and all cross-references update cleanly on `Ctrl+A`, `F9`
