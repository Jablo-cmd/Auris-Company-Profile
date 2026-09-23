# Layout, Grid and Spacing System
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/04_Grid-and-Spacing.md`
**Stage:** 1 — Project Planning
**Status:** Draft for approval

---

## 1. Page format

**Primary output is commercial sheet-fed offset.** Page geometry is specified to press tolerances;
full production detail in `10_Print-Production.md`.

| Parameter | Specification |
|---|---|
| Trim size | **A4 portrait — 210 × 297 mm** |
| Document size | **216 × 303 mm** including bleed |
| Bleed | **3 mm** all four edges |
| **Safety margin** | **8 mm** inside trim. No critical content, type or logo outside |
| **Spine allowance** | **10 mm** either side of the spine. No critical content, faces or type |
| Slug | 6 mm at foot — job name, page, colour bar, date |
| Binding | **PUR perfect bound.** Saddle-stitch is unsuitable publication extent is determined by final assembly |
| Spine width | ≈ 8 mm — confirmed against the printer's paper caliper before the cover is finalised |
| Extent | approximately 55–65 pages; final extent determined after assembly |
| Reading direction | Left to right, spreads read as verso–recto pairs |

**Safety margin raised from 5 mm to 8 mm.** Guillotine tolerance on a sheet-fed run is typically
±1 mm, and cumulative tolerance through folding and trimming reaches ±2–3 mm. At an 18 mm outer
margin this costs nothing — no content sat in that zone. **Creep is not applicable**: it affects
saddle-stitched work, not perfect binding.

A4 is non-negotiable for the South African market. US Letter would be rejected by print
specifications on most public-sector tenders and would misfeed on standard local equipment.

---

## 2. Margins

| Margin | Measurement | Rationale |
|---|---|---|
| Top | **20 mm** | Accommodates running head with clear separation |
| Bottom | **22 mm** | Deeper than top — the classical relationship; a page with equal top and bottom margins reads as sinking |
| Outer | **18 mm** | Thumb space; also the shoulder for marginal notes and figure labels |
| Inner (gutter) | **22 mm** | Additional 4 mm over outer to compensate for perfect-bound creep. Text is never lost in the spine |

**Live area: 170 × 255 mm.**

---

## 3. The column grid

| Parameter | Value |
|---|---|
| Columns | **12** |
| Column width | **10.5 mm** |
| Gutter | **4 mm** |
| Total | (12 × 10.5) + (11 × 4) = 126 + 44 = **170 mm** ✓ |

Twelve columns divide cleanly by 2, 3, 4 and 6, which produces every layout the document needs
without a second grid.

### Standard column allocations

| Allocation | Columns | Width | Applied to |
|---|---|---|---|
| **Full measure** | 12 | 170 mm | Tables, diagrams, full-width figures |
| **Primary text + sidebar** | 7 + 1 + 4 | 97.5 / 54 mm | The default narrative page (archetype C) |
| **Two equal** | 6 + 6 | 83 mm each | Comparison layouts |
| **Three equal** | 4 + 4 + 4 | 54 mm each | Card rows, statistics panels |
| **Four equal** | 3 + 3 + 3 + 3 | 39.5 mm each | Icon rows, contents grid, chip rows |
| **Wide + narrow** | 8 + 4 | 112 / 54 mm | Diagram with legend |
| **Offset editorial** | 2 + 10 | Indent 29 mm | Pull-quote and opening spreads |

The 7 + 4 default gives a 61-character primary measure — inside the 55–75 optimum — and a sidebar
wide enough to carry a genuine callout rather than a caption.

---

## 4. The baseline grid

| Parameter | Value |
|---|---|
| Baseline increment | **5 mm** (14.17 pt) |
| Half-baseline | **2.5 mm** (7.09 pt) — tables, captions, secondary text |
| First baseline | 20 mm from trim top |
| Lines per page | **51** (255 ÷ 5) — exact, no remainder |

Every text element locks to the baseline. Adjacent columns share baselines, so text across a spread
aligns horizontally — the single most visible signal of typographic competence, and the one most
often absent from competitor documents.

**Exceptions permitted:** display type over 20 pt, figures in statistics panels, and text inside
diagram nodes may sit optically. Everything else snaps.

---

## 5. The spacing scale

All vertical and horizontal spacing is drawn from one scale, derived from the baseline. Values
outside this scale are prohibited — arbitrary spacing is the mechanism by which a layout silently
drifts.

| Token | mm | pt | Application |
|---|---|---|---|
| `space-0` | 0 | 0 | Flush |
| `space-1` | 2.5 | 7.1 | Icon to label; inside chips; table cell padding |
| `space-2` | 5 | 14.2 | Paragraph separation; list item separation |
| `space-3` | 7.5 | 21.3 | Caption to figure; inside callout boxes |
| `space-4` | 10 | 28.3 | Subsection heading space-before |
| `space-5` | 15 | 42.5 | Between content blocks; card gutters |
| `space-6` | 20 | 56.7 | Section heading space-before; above figures |
| `space-7` | 30 | 85.0 | Major structural separation |
| `space-8` | 40 | 113.4 | Section opening drop on narrative pages |

### Applied spacing rules

| Relationship | Token |
|---|---|
| Section title → standfirst | `space-3` (7.5 mm) |
| Standfirst → body | `space-4` (10 mm) |
| Body paragraph → body paragraph | `space-2` (5 mm) |
| Body → subsection heading | `space-4` (10 mm) |
| Subsection heading → body | `space-2` (5 mm) |
| Body → figure or table | `space-6` (20 mm) |
| Figure → caption | `space-1` (2.5 mm) |
| Caption → following body | `space-6` (20 mm) |
| Card to card, horizontal | `space-5` (15 mm) |
| Callout box internal padding | `space-3` (7.5 mm) |
| Table cell padding | `space-1` vertical, `space-2` horizontal |

**The proximity principle:** space *before* a heading is always at least double the space *after* it.
This binds the heading to the content it introduces rather than letting it float between blocks. It
is a small rule with a large effect on perceived organisation.

---

## 6. Vertical zones

Every page divides into four fixed horizontal zones. Content never crosses a zone boundary except
where an archetype explicitly permits it.

```
┌──────────────────────────────────────────┐  0 mm
│  HEAD ZONE            20 mm              │  running head, section marker
├──────────────────────────────────────────┤  20 mm
│                                          │
│  CONTENT ZONE        225 mm              │  45 baselines
│                                          │
├──────────────────────────────────────────┤  245 mm
│  FOOT ZONE            30 mm              │  folio, footer rule, status line
├──────────────────────────────────────────┤  275 mm
│  TRIM MARGIN          22 mm              │
└──────────────────────────────────────────┘  297 mm
```

| Zone | Depth | Contains |
|---|---|---|
| Head | 20 mm | Running head (verso: part · recto: section), 3 mm cyan section node |
| Content | 225 mm | All body content, figures, tables, panels |
| Foot | 30 mm | 0.3 pt Slate hairline, folio outer, document status inner |

---

## 7. White space budget

Design principle D2 made measurable.

| Page type | Minimum empty area |
|---|---|
| Narrative page (C) | **32%** |
| Spread (D) | **30%** |
| Card grid (E) | **28%** |
| Diagram page (F) | **25%** |
| Table page (G) | **20%** |
| Service spread (H) | **28%** |
| Part divider (B) | **60%** |

Measured at Stage 12 by area, excluding margins. Pages that fail have content cut, never margins
reduced. This is a hard constraint, and it is the discipline that most separates a premium
publication from a competent one.

---

## 8. Bleed and full-bleed elements

| Element | Treatment |
|---|---|
| Part divider navy field | Full bleed, all four edges, 3 mm |
| Cover fields | Full bleed |
| Editorial photography (archetype K) | Bleeds outer and top/bottom; **never** into the gutter on a single page |
| Spread photography | Crosses the gutter only where no critical subject matter falls within 10 mm of the spine |
| Thumb tabs | Bleed on the outer edge only, 18 mm × 32 mm |
| Tables and diagrams | Never bleed. Always inside the live area |

---

## 9. Grid discipline: the ten checks

Verified page by page at Stage 12.

1. Every text baseline sits on a 5 mm increment
2. Every element's left edge sits on a column start
3. Every element's right edge sits on a column end
4. No spacing value falls outside the `space-0`…`space-8` scale
5. Facing pages share the same first and last baseline
6. Running heads and folios sit identically on every page of a type
7. Figures and tables align to full column allocations, never to arbitrary widths
8. Card grids use equal gutters, with no optical compensation applied to only one card
9. Nothing crosses a zone boundary except where the archetype permits
10. The white-space budget for the page type is met

---

## 10. Digital derivative

The screen PDF and any future HTML derivative inherit the same system, remapped:

| Print | Digital |
|---|---|
| 5 mm baseline | 8 px baseline |
| 10.5 mm column | 12-column fluid grid, 24 px gutter |
| 170 mm live width | 1140 px maximum content width |
| Spacing scale | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px |
| A4 spread | Single-column stack below 768 px |

The proportional relationships are preserved, so the two media read as the same publication rather
than as a document and its website.
