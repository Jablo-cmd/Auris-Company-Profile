# Component Design System
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/09_Components.md`
**Stage:** 2 — Document Design System
**Status:** Draft for approval · **freezes on approval**

Twenty-four components cover the final assembled profile. Every one is specified to the millimetre against the
12-column grid and the 5 mm baseline. Nothing in the publication is improvised.

**Reference dimensions.** Column 10.5 mm · gutter 4 mm · live area 170 × 255 mm · baseline 5 mm ·
half-baseline 2.5 mm · spacing scale `space-1` 2.5 mm to `space-8` 40 mm · governing angle 3 : 5
(31° from vertical).

### Press constraints binding on every component

Primary output is commercial sheet-fed offset. Full specification in `10_Print-Production.md`.

| Constraint | Value |
|---|---|
| Minimum rule, single colour | **0.3 pt** |
| Minimum rule, multi-colour build or reversed | **0.5 pt** |
| Minimum reversed type | **8 pt, Medium or heavier.** Light and Regular are never reversed |
| Minimum coloured type on a coloured field | **10 pt.** Below this, reversed type is white, never a second colour |
| Tints | **Solid builds only.** No live transparency anywhere — see `02_Colour-Palette.md` §7 |
| Type below 24 pt | 100 K, never rich black |
| Safety margin | 8 mm inside trim; 10 mm either side of the spine |

---

## Component index

| Code | Component | Archetype | First use |
|---|---|---|---|
| C01 | Front cover | A | p. 1 |
| C02 | Part divider | B | p. 9 |
| C03 | Section header | all | p. 10 |
| C04 | Subsection header | all | p. 10 |
| C05 | Standfirst | all | p. 10 |
| C06 | Callout box | C, D | p. 11 |
| C07 | Quote box | K | p. 6 |
| C08 | Fact box | I | p. 8 |
| C09 | Feature card | E | p. 14 |
| C10 | Service card | H | p. 26 |
| C11 | Technology chip | H, C | p. 27 |
| C12 | Process diagram | F | p. 22 |
| C13 | Timeline | F | p. 12 |
| C14 | Table | G | p. 42 |
| C15 | Statistics panel | I | p. 103 |
| C16 | Image layouts | K | p. 6 |
| C17 | Running header | all | p. 10 |
| C18 | Footer and folio | all | p. 10 |
| C19 | Watermark | B, I | p. 9 |
| C20 | Back cover | A | p. 55–65 |
| C21 | Thumb tab | B | p. 9 |
| C22 | Contents block | I | p. 4 |
| C23 | Portrait card | J | p. 104 |
| C24 | Logo tile | J | p. 106 |

---

## C01 — Front cover

Full-bleed Nexus Navy. The single most scrutinised surface in the document.

```
┌═══════════════════════════════════════┐ ← bleed 3 mm
│                                       │
│                                       │   Navy field #001A48, full bleed
│              ╱▲╲                      │
│         [ LOGO 72 mm ]                │ ← primary stacked, REVERSED
│          centred on x                 │   top of logo at 74 mm
│                                       │   clear space 2u all sides
│                                       │
│  ─────────────────────────────────    │ ← 1.5 pt Signal Cyan arc
│                                       │   radius 180 mm, apex-tangent
│                                       │
│  CORPORATE PROFILE                    │ ← Saira SemiBold 48 pt, white
│                                       │   baseline 196 mm, flush left col 1
│  Connecting innovation.               │ ← Saira Regular 13 pt, +80
│  Delivering impact.                   │   Signal Cyan, UPPER
│                                       │
│                                       │
│  EDITION 1 · 2026                     │ ← Saira Medium 9 pt, +120, Mist
└═══════════════════════════════════════┘   baseline 272 mm
```

| Parameter | Specification |
|---|---|
| Ground | Nexus Navy `#001A48`, full bleed 3 mm |
| Apex motif | Apex silhouette, Apex Field `#002C56` (solid), 40% page height, anchored lower right, bleeding right and bottom edges |
| Logo | Primary stacked, **reversed**, 72 mm wide, horizontally centred, top edge at 74 mm |
| Arc | Single segment, 1.5 pt Signal Cyan, radius 180 mm, spanning columns 1–12, at 168 mm |
| Title | `CORPORATE PROFILE` — Saira SemiBold 48 pt, white, tracking −15, flush left to column 1 |
| Descriptor | The tagline, Saira Regular 13 pt, tracking +80, UPPER, Signal Cyan |
| Edition | Saira Medium 9 pt, tracking +120, Mist, baseline 272 mm |
| Folio | Suppressed |

**Prohibited on the cover:** photography, more than one arc, any gradient other than within the
logo artwork, and any additional text beyond the four elements above.

---

## C02 — Part divider

Seven instances. Each carries its part colour, thumb tab and local contents.

```
┌═══════════════════════════════════════┐
│                                    ▓  │ ← thumb tab, outer bleed
│  PART THREE                        ▓  │   Saira Medium 13 pt +120
│                                    ▓  │   Signal Cyan
│  ▲ INDUSTRIES                         │ ← Saira SemiBold 36 pt, white
│  ───────────────────                  │   3 pt Signal Cyan rule, 60 mm
│                                       │
│  Standfirst, 40–55 words, setting     │ ← Source Serif 4, 13 pt, Mist
│  out what this part covers and for    │   measure: 7 columns
│  whom.                                │
│                                       │
│                                       │
│  IN THIS PART                         │ ← Saira Medium 8 pt +100, Slate
│  3.0  Sector coverage            44   │ ← local contents
│  3.1  Public sector              46   │   Saira Regular 10 pt, Mist
│  3.2  Knowledge and human …      48   │   figures tabular, flush right
│  …                                    │
│                              ╱▲╲      │ ← watermark C19, 40 mm, Mist 25%
└═══════════════════════════════════════┘
```

| Parameter | Specification |
|---|---|
| Ground | Part colour from the ramp, full bleed |
| Part number | Saira Medium 13 pt, +120, UPPER, Signal Cyan, baseline 40 mm |
| Part title | Saira SemiBold 36 pt, white, preceded by a 6 mm apex marker |
| Rule | 3 pt Signal Cyan, 60 mm, `space-3` below the title. Reversed on a colour field — minimum 0.5 pt applies, comfortably met |
| Standfirst | Source Serif 4 Regular 13 pt / 19.8 pt, Mist, 7-column measure |
| Local contents | Section number, title, folio. Saira Regular 10 pt, Mist, tabular figures flush right at column 12 |
| Symbol | Reversed apex symbol, 14 mm, upper right, clear space 1u |
| White space | Minimum 60% |
| Folio | Suppressed |

Parts Four to Seven use their ramp colour as the **field with reversed type**; those steps fall
below the text threshold on white.

---

## C03 — Section header

Opens every section. The most repeated component in the document — 78 instances.

```
    ▲  4.4                                    ← apex marker 3 mm, Auris Cyan
                                                 number Saira Medium 10.5 pt
                                                 +40, UPPER, Slate
    Cybersecurity                             ← Saira SemiBold 22 pt / 28.3 pt
    ────────────────────────                     Nexus Navy, tracking −5
                                              ← 3 pt Auris Cyan rule, 40 mm
    Standfirst sets the section in two
    sentences and is written to be read
    on its own.                               ← Source Serif 4 13 pt, Orbit Deep
```

| Element | Specification |
|---|---|
| Apex marker | 3 mm apex triangle, Auris Cyan, at column 1, aligned to the number's cap height |
| Section number | Saira Medium 10.5 pt, +40, UPPER, Slate, 4 mm right of the marker |
| Title | Saira SemiBold 22 pt / 28.3 pt, Nexus Navy, tracking −5 |
| Rule | 3 pt Auris Cyan, 40 mm, `space-2` below the title baseline |
| Standfirst | `space-3` below the rule. See C05 |
| Drop | Section opens at `space-8` (40 mm) from the head zone on narrative pages |
| Space after | `space-4` (10 mm) to first body paragraph |

**Word:** `AN Heading 1`. Rule is a paragraph bottom border on a 0 pt spacer paragraph, not a drawn
shape — so it reflows with the heading.

---

## C04 — Subsection header

| Level | Specification |
|---|---|
| **H2** | Saira SemiBold 13 pt / 17 pt, +10, Orbit Deep. `space-4` before, `space-2` after |
| **H3** | Saira Medium 10.5 pt / 14.17 pt, +40, UPPER, Slate. `space-3` before, `space-1` after |

No rule, no marker, no numbering shown. Per the proximity principle, space *before* is at least
double the space *after*, binding the heading to the content it introduces.

**Word:** `AN Heading 2`, `AN Heading 3`. Both carry `keep with next`.

---

## C05 — Standfirst

One or two sentences, 25–45 words, opening every section. Written so the section can be read cold —
this is what makes sections extractable.

| Parameter | Specification |
|---|---|
| Face | Source Serif 4 Regular 13 pt / 19.8 pt |
| Colour | Orbit Deep `#06488B` |
| Measure | 7 columns (97.5 mm) |
| Space after | `space-4` (10 mm) |

The serif is deliberate: it marks the standfirst as a different kind of voice from the body without
using size or colour, and it is the only place a serif appears outside the three editorial positions.

---

## C06 — Callout box

Three variants, one geometry. Sits in the 4-column sidebar or spans 7 columns inline.

```
╱────────────────────────────┐  ← top-left corner cut on the 3:5 angle, 4 mm leg
│                            │
│ ⓘ  KEY POINT               │  ← icon 6 mm + Saira Medium 8 pt +80 UPPER
│                            │
│ Body text, 40–70 words,    │  ← Source Sans 3 10.5 pt / 17 pt
│ Nexus Navy, sitting on     │     Nexus Navy
│ the baseline grid.         │
│                            │
└────────────────────────────┘
  ↑ 1 pt left keyline in the variant colour, full height
```

| Variant | Left keyline | Icon | Fill | Use |
|---|---|---|---|---|
| **Note** | Auris Cyan | `fa-circle-info` | solid Mist | Supporting context |
| **Key point** | Nexus Navy | `fa-key` | solid Mist | The argument of the section |
| **Caution** | Caution `#8F5300` | `fa-triangle-exclamation` | White, 1 pt full border | Limitation, dependency, exclusion |

| Parameter | Specification |
|---|---|
| Corner | Top-left cut at 3 : 5, 4 mm leg. All other corners square |
| Keyline | 1 pt, left edge, full height |
| Padding | `space-3` (7.5 mm) all sides |
| Width | 4 columns (54 mm) sidebar, or 7 columns (97.5 mm) inline |
| Body | 40–70 words. Beyond 70, it is body copy in a box, which defeats the purpose |

**Word:** single-cell table with borders and shading; corner cut as a grouped shape anchored to the
paragraph. Style `AN Callout`.

---

## C07 — Quote box

For the Managing Director's message, case studies and testimonials. Three instances only —
the scarcity is what gives it weight.

```
  ❝                                       ← fa-quote-left, 12 mm, Mist
                                             positioned at column 1, behind
    The measure of an ICT partner is
    what happens after the system
    goes live.                            ← Source Serif 4 Light Italic
                                             20 pt / 28.3 pt, Orbit Deep
    ───                                      offset to column 3 (2-col indent)
    NAME, ROLE                            ← 12 mm Auris Cyan rule, 1 pt
    Organisation                          ← Saira Medium 8.5 pt +80 UPPER
                                             Slate; org in Source Sans 3 8.5 pt
```

| Parameter | Specification |
|---|---|
| Measure | 8 columns, indented 2 columns from text left |
| Quote mark | `fa-quote-left`, 12 mm, Mist, behind the text, top-left |
| Attribution | Mandatory. **An unattributed quotation is not used** — see `01_Publication-Strategy.md` §7 |
| Space | `space-6` (20 mm) before and after |

---

## C08 — Fact box

The mandatory-returnable panel. Highest information density in the document, and the page a
procurement officer reaches first.

```
┌───────────────────────────────────────────────────┐  solid Mist field
│                                                   │  full 12-column width
│  COMPANY AT A GLANCE                              │  Saira SemiBold 13 pt
│  ═══════════════════════════════════════════      │  1 pt Nexus Navy rule
│                                                   │
│  REGISTERED NAME        REGISTRATION NO.          │  labels: Saira Medium
│  Auris Nexus …          To be confirmed during final production                │  8.5 pt +80 UPPER Slate
│                                                   │
│  ─────────────────      ─────────────────         │  values: Source Sans 3
│                                                   │  10 pt Graphite, tabular
│  B-BBEE LEVEL           TAX STATUS                │
│  To be confirmed during final production        To be confirmed during final production            │  hairline 0.3 pt Slate
│                                                   │  between rows
└───────────────────────────────────────────────────┘
```

| Parameter | Specification |
|---|---|
| Grid | 3 columns of 4 grid-columns each, 15 mm gutters |
| Label | Saira Medium 8.5 pt, +80, UPPER, Slate |
| Value | Source Sans 3 Regular 10 pt, Graphite, **tabular figures** |
| Row separator | 0.3 pt Slate hairline, full cell width |
| Padding | `space-5` (15 mm) field padding, `space-2` (5 mm) between rows |
| Unknowns | Rendered as the visible `To be confirmed during final production` until resolved. Never left blank, never guessed |

---

## C09 — Feature card

Values, competitive advantages, benefits. Used in 2 × 3 and 3 × 2 grids.

```
╱──────────────────┐   ← 3:5 corner cut, 4 mm
│                  │
│   ◆              │   ← icon 12 mm, Auris Cyan
│                  │      space-3 below
│   Precision      │   ← Saira SemiBold 13 pt, Nexus Navy
│                  │
│   One or two     │   ← Source Sans 3 9 pt / 12.5 pt
│   sentences,     │      Graphite, 55–75 words
│   55–75 words.   │
│                  │
│   ────           │   ← 1 pt Auris Cyan, 12 mm
│   How you will   │   ← Source Sans 3 Italic 8 pt, Slate
│   see this       │      THE OPERATIONAL TEST
└──────────────────┘
```

| Parameter | Specification |
|---|---|
| Width | 4 columns (54 mm) in a 3-up grid; 6 columns (83 mm) in a 2-up |
| Height | Equalised across the row. Never ragged |
| Fill | White with 0.3 pt Mist border, or solid Mist with no border. Consistent within a grid |
| Gutter | `space-5` (15 mm) horizontal and vertical |
| Corner | Top-left cut at 3 : 5 |

**The operational test line is mandatory on value cards.** A value without an observable behaviour
is decoration; the line is what converts "Integrity" from a poster into a commitment.

---

## C10 — Service card

The fixed ten-block spread template, applied identically to all eight services. This is the single
most important consistency decision in the publication: it makes services comparable, prevents the
strongest from being over-written and the weakest from being under-specified, and means a reader who
has read one spread can navigate all eight.

```
VERSO (even)                        │  RECTO (odd)
                                    │
▲ 2.4                               │  TYPICAL DELIVERABLES        ⑥
Service name                    ①   │  ▲ item                          
────────────                        │  ▲ item          (6–8, checklist)
                                    │
Standfirst, 40–55 words         ②   │  TECHNOLOGIES USED           ⑦
                                    │  [chip][chip][chip]  ← C11
Description, two paragraphs,    ③   │
Layer 3 detail                      │  IDEAL CLIENT                ⑧
                                    │  2–3 sentences
PROBLEMS THIS SOLVES            ④   │
▲ pain statement                    │  EXPECTED OUTCOMES           ⑨
▲ pain statement (3–4)              │  ▲ measurable outcome (3–4)
                                    │
BUSINESS BENEFITS               ⑤   │  INDUSTRIES SERVED           ⑩
▲ benefit (4)                       │  [icon row → cross-ref Part 3]
                                    │
┌────────────────┐                  │  ╱──────────────────┐
│ image, 1/4 pp  │                  │  │ fact callout C06 │
└────────────────┘                  │  └──────────────────┘
```

| Block | Words | Style |
|---|---|---|
| ① Title | — | C03 section header |
| ② Standfirst | 40–55 | C05 |
| ③ Description | 160–200 | `AN Body` |
| ④ Problems solved | 60–80 | H3 + bulleted, 3–4 items |
| ⑤ Business benefits | 70–90 | H3 + bulleted, 4 items |
| ⑥ Deliverables | 40–60 | H3 + checklist, 6–8 items |
| ⑦ Technologies | — | C11 chip row |
| ⑧ Ideal client | 50–70 | `AN Body` |
| ⑨ Expected outcomes | 60–80 | H3 + bulleted, measurable |
| ⑩ Industries | — | Icon row, 6 mm, cross-referenced to Part Three |

**Total 620–720 words per spread.** Block positions are fixed. A service with less to say gets
shorter blocks, never a rearranged layout.

---

## C11 — Technology chip

Compact label for named technologies. Prevents technology lists becoming grey paragraphs.

| Parameter | Specification |
|---|---|
| Height | 7 mm |
| Padding | `space-1` (2.5 mm) vertical, 4 mm horizontal |
| Corner | 1 mm radius, all corners. **No angle cut at this scale** — the 3 : 5 cut is illegible below 10 mm |
| Fill | solid Mist |
| Border | None |
| Type | Source Sans 3 Regular 8 pt, Orbit Deep |
| Spacing | 2.5 mm between chips, 2.5 mm between rows |
| Maximum | 12 chips per row group. Beyond that, the list is a table |

---

## C12 — Process diagram

Governed by `07_Diagram-Style.md`. Component-level specification here.

| Parameter | Specification |
|---|---|
| Node | 8 mm rounded rectangle, 2 mm radius, or 4 mm circle |
| Node fill | Orbit Deep, white label. Active node: Auris Cyan |
| Container | 1 pt Slate, 2 mm radius, solid Mist |
| Connector | 1 pt Slate, orthogonal, 2 mm corner radius, 3 mm arrowhead |
| Gate | 6 mm diamond, white fill, Auris Cyan 1 pt stroke |
| Spacing | 10 mm between nodes, 15 mm between containers |
| Direction | Left→right for process, top→bottom for hierarchy. Never mixed |
| Ceiling | 12 primary nodes |
| Legend | Mandatory above two colours or one line style. 4-column outer allocation |
| Label | `FIGURE 5.1` — Saira Medium 8 pt, +60, UPPER, Orbit Blue |

---

## C13 — Timeline

```
   2019          2021          2023          2025
    ▲             ▲             ▲             ▲     ← 4 mm apex markers
════╪═════════════╪═════════════╪═════════════╪══   ← 1 pt Slate axis
    │             │             │             │
  Founded      Milestone     Milestone     Milestone
  40 words     40 words      40 words      40 words
```

| Parameter | Specification |
|---|---|
| Axis | 1 pt Slate, full 12-column width |
| Marker | 4 mm apex triangle, Auris Cyan, point up, sitting on the axis |
| Year | Saira SemiBold 11 pt, Nexus Navy, above the marker |
| Text | Source Sans 3 8.5 pt / 11.3 pt, Graphite, below, max 40 words |
| Spacing | Equal intervals. **The axis is not to scale** — and the caption says so |
| Maximum | 8 milestones |

---

## C14 — Table

Twenty-one instances. Full specification in `07_Diagram-Style.md` §8; component summary here.

| Element | Specification |
|---|---|
| Header row | Nexus Navy fill, white Saira SemiBold 8.5 pt, +40, UPPER. Right terminal of the header cut at 3 : 5 |
| Body | White; alternate rows **Mist Light** `#F2F5F6` where the table exceeds six rows |
| Rules | **Horizontal only.** 0.3 pt Slate between rows; 1 pt Nexus Navy above and below |
| Padding | 2.5 mm vertical, 5 mm horizontal |
| Alignment | Text flush left, figures flush right, headers match their column |
| Figures | Tabular lining, always |
| Empty cells | En dash `–`, never blank |
| Caption | Above — `TABLE 4.1 — Technology stack by layer` |
| Continuation | Header repeats on every page; `(continued)` appended |

**No vertical rules.** They add noise and no information; column structure is already carried by
alignment. Their presence is the most reliable indicator of a table nobody thought about.

---

## C15 — Statistics panel

```
   ┌─────────────┬─────────────┬─────────────┐
   │             │             │             │
   │    140      │    99,8     │     12      │  ← Saira SemiBold 40 pt
   │             │      %      │             │     Auris Cyan, tabular
   │  PROJECTS   │  UPTIME     │   SECTORS   │  ← Saira Medium 8.5 pt
   │  DELIVERED  │  ACHIEVED   │   SERVED    │     +80 UPPER Slate
   │             │             │             │
   │  Method     │  Method     │  Method     │  ← Source Sans 3 7.5 pt
   └─────────────┴─────────────┴─────────────┘     Slate — how measured
```

| Parameter | Specification |
|---|---|
| Grid | 3 or 4 equal cells, 4 grid-columns each |
| Figure | Saira SemiBold 40 pt, Auris Cyan, tabular, tracking −25 |
| Unit | 60% of figure size, baseline-aligned |
| Label | Saira Medium 8.5 pt, +80, UPPER, Slate |
| **Method line** | Source Sans 3 7.5 pt, Slate. **Mandatory** |
| Separator | 0.3 pt Slate vertical hairline between cells — the one permitted vertical rule in the system |
| Method line | Never omitted, never reversed below 8 pt |

**The method line is not optional.** A figure without its basis is a claim a sceptical evaluator will
discount entirely. "Projects delivered" means nothing; "Completed projects, 2019–2026, internal
records" is evidence.

---

## C16 — Image layouts

Five permitted layouts. No others.

| Layout | Specification | Use |
|---|---|---|
| **L1 — Full bleed** | Bleeds all edges except the gutter | Part dividers, MD message verso |
| **L2 — Band** | Full 12-column width, 60–90 mm deep, no bleed | Section openers |
| **L3 — Half** | 6 columns, aligned to column start | Narrative support |
| **L4 — Quarter** | 4 columns, 45 mm deep | Service spreads |
| **L5 — Inset** | 4 columns in the sidebar allocation | Case studies |

| Rule | Specification |
|---|---|
| Corners | Square. **No rounded corners on any image** |
| Borders | None. Images sit on white or bleed |
| Gutter | Single-page images never bleed into the spine |
| Caption | Where the image carries information. Decorative images are uncaptioned — and if it is decorative, question its presence |
| Alt text | Mandatory on every image |

---

## C17 — Running header

| Element | Specification |
|---|---|
| Verso | Part name — Saira Medium 8 pt, +100, UPPER, Slate, flush left column 1 |
| Recto | Section title — same style, flush right column 12 |
| Marker | 3 mm apex, part colour, 4 mm from the text on the outer side |
| Baseline | 14 mm from trim top |
| Suppressed on | Covers, part dividers |

Verso and recto differ so an open spread self-locates. A generic running head repeated on both sides
is a wasted navigation opportunity.

---

## C18 — Footer and page numbering

```
─────────────────────────────────────────────────────  ← 0.3 pt Slate hairline
Auris Nexus Technologies · Corporate Profile 2026   42
↑ Saira Regular 7.5 pt, Slate, flush left            ↑ Saira Medium 9 pt
                                                        Nexus Navy, +20
                                                        flush OUTER
```

| Parameter | Specification |
|---|---|
| Rule | 0.3 pt Slate, full 12-column width, at 249 mm |
| Status line | Saira Regular 7.5 pt, Slate, flush **inner** |
| Folio | Saira Medium 9 pt, +20, Nexus Navy, flush **outer**, baseline 258 mm |
| Numbering | Continuous arabic from p. 1 |
| Suppressed on | pp. 1, 2, 111, 55–65 and all part dividers |

Folio flush **outer**, not centred: a thumbing reader sees the outer edge first. Centred folios are a
word-processor default, not a design decision.

---

## C19 — Watermark

| Parameter | Specification |
|---|---|
| Form | Apex symbol alone |
| Size | 40 mm |
| Colour | Mist Pale `#EDF0F3` (solid) |
| Position | Lower outer corner, 18 mm from trim, behind the folio |
| Applied to | Part dividers and the capability statement spread **only** |
| Never | Narrative pages, tables, diagrams, or behind body copy |

---

## C20 — Back cover

```
┌═══════════════════════════════════════┐
│                                       │  Navy field, full bleed
│                                       │
│          [ LOGO 54 mm ]               │  standard stacked, reversed
│                                       │  centred, top at 60 mm
│                                       │
│  ─────────────────────────────────    │  1.5 pt Signal Cyan arc
│                                       │
│  Connecting innovation.               │  Saira Regular 13 pt +80
│  Delivering impact.                   │  UPPER, Signal Cyan
│                                       │
│                                       │
│  Auris Nexus Technologies (Pty) Ltd   │  Source Sans 3 8.5 pt, Mist
│  Registration 2026/606690/07              │
│  Johannesburg, Gauteng                      │
│  +27 …  ·  …@…  ·  www…               │
│                                       │
│  © 2026. Edition 1.                   │  Source Sans 3 7.5 pt, Slate
└═══════════════════════════════════════┘
```

**Banking details never appear**, here or anywhere in the document. They are stated as available on
request through a verified channel — see `01_Project/05_Fact-Register.md`, item H4.

---

## C21 — Thumb tab

| Parameter | Specification |
|---|---|
| Size | 18 mm wide × 32 mm deep, bleeding the outer edge |
| Leading edge | Cut at 3 : 5 (31°) |
| Fill | Part colour |
| Type | Part number, Saira Medium 8 pt, +100, white, rotated 90° — **the one permitted type rotation**, because a tab is read with the book turned |
| Position | Seven vertical positions, 32 mm apart, from 60 mm |
| Applied to | Part dividers only |

Seven stepped positions make the printed block edge navigable — a cheap detail that reads as
considerable expense.

---

## C22 — Contents block

| Parameter | Specification |
|---|---|
| Structure | Seven part blocks across four columns, not one running list |
| Part head | 4 mm part-colour bar + part name, Saira SemiBold 11 pt, Nexus Navy |
| Entry | Section number (Slate) · title (Graphite) · folio (Slate, tabular, flush right in a 10.5 mm column) |
| **Leader dots** | **None.** A typewriter artefact; reads as dated |
| Word | `TOC` field, Heading 1–2, styled `TOC 1` / `TOC 2`. Generated, never typed |

---

## C23 — Portrait card

| Parameter | Specification |
|---|---|
| Image | 4 columns wide, 4 : 5 portrait, square corners, consistent crop at the same eye-line |
| Name | Saira SemiBold 11 pt, Nexus Navy |
| Role | Saira Medium 8 pt, +80, UPPER, Auris Cyan |
| Qualifications | Source Sans 3 8 pt, Slate |
| Biography | Source Sans 3 8.5 pt / 11.3 pt, Graphite, 40–55 words |
| Rule | 1 pt Auris Cyan, 12 mm, between role and biography |
| Grid | 3 × 2 across the spread, `space-5` gutters, heights equalised |

---

## C24 — Logo tile

For partners and alliances. The component most likely to cause a compliance problem.

| Parameter | Specification |
|---|---|
| Tile | 4 columns × 24 mm, white, 0.3 pt Mist border |
| Logo | Optically sized to equal visual weight — **not** scaled to equal width |
| Treatment | Partner logos at full colour, per the partner's own brand rules |
| **Tier label** | Saira Medium 7.5 pt, +80, UPPER, Slate, beneath each tile. **Mandatory** |
| Clear space | Per the partner's guidelines, or 0.5× logo height, whichever is greater |

**The tier label is mandatory.** A partner logo without its tier implies a relationship that may not
exist, which is a misrepresentation in a procurement document. If the tier is "Registered", it says
Registered.

---

## Word implementation summary

| Component | Word mechanism |
|---|---|
| C01, C02, C20 | Section-break pages, shape-filled backgrounds, anchored text frames |
| C03–C05 | Paragraph styles with borders; no drawn objects |
| C06, C08 | Single-cell tables with shading + anchored corner shape |
| C07 | Indented paragraph style + anchored icon |
| C09, C23, C24 | Borderless table grid, one cell per card |
| C10 | Two-page layout built from C03, C05, C06, C11 |
| C11 | Inline single-cell tables, or character-styled runs with shading |
| C12, C13 | Grouped native shapes with connectors |
| C14 | Native Word tables, custom table styles |
| C15 | Borderless table + `AN Fact Figure` / `AN Fact Label` styles |
| C16 | Inline or anchored pictures, square wrap, alt text |
| C17, C18 | Header/footer per Word section, `PAGE` field |
| C19 | Header-anchored shape, behind text |
| C21 | Header-anchored shape, rotated text frame |
| C22 | `TOC` field in a four-column layout |

---

## Build order for Stage 11

Components are built into the Word template in dependency order:

1. Page setup, margins, grid guides, Word sections
2. Theme (`Auris-Nexus.thmx`) and colour slots
3. Paragraph and character styles (C03–C05)
4. Headers, footers, folios (C17, C18)
5. Table styles (C14) → dependent: C06, C08, C09, C15, C23, C24
6. Shape components (C12, C13, C19, C21)
7. Cover and divider masters (C01, C02, C20)
8. Composite templates (C10)

---

## Component QA checklist

Applied to every instance at Stage 12.

- [ ] Aligned to the 12-column grid and 5 mm baseline
- [ ] All spacing drawn from the `space-1`…`space-8` scale
- [ ] All colours drawn from the palette, referenced by theme slot
- [ ] All type carries a named `AN` style; no direct formatting
- [ ] Every angle cut is 3 : 5, never approximated
- [ ] Legible in greyscale
- [ ] No meaning carried by colour alone
- [ ] Diagrams and tables editable as native objects
- [ ] Alt text present on every visual element
- [ ] Card and cell heights equalised within every grid
- [ ] White-space budget met for the page type
