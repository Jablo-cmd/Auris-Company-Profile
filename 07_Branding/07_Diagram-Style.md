# Diagram and Data Visualisation Style
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/07_Diagram-Style.md`
**Stage:** 1 — Project Planning
**Status:** Draft for approval

---

## 1. Position

Diagrams are the part of the publication that does the most persuasive work with technical readers,
and the part most often executed worst. A clear architecture diagram tells a bank's technical
evaluator more about engineering discipline than four pages of prose — and a cluttered one tells
them just as much in the other direction.

The rule for this document: **a diagram is a piece of reasoning, not an illustration of one.** If a
diagram does not carry an argument that the surrounding text cannot make as efficiently, it is
deleted.

---

## 2. The diagram vocabulary

Every diagram in the document is built from the same seven primitives. This is what makes fourteen
diagrams across seven parts read as one system.

| Primitive | Form | Meaning |
|---|---|---|
| **Node** | 8 mm rounded rectangle, 2 mm radius, or 4 mm circle | A discrete element: a phase, a component, a capability |
| **Container** | Rectangle, 1 pt Slate stroke, 2 mm radius, solid Mist fill | A grouping: a layer, a zone, a stage |
| **Link** | 1 pt orthogonal path, 2 mm corner radius | A relationship, undirected |
| **Flow** | 1 pt orthogonal path with a 3 mm solid arrowhead | A directed relationship or sequence |
| **Gate** | 6 mm diamond, Auris Cyan stroke | A decision or an approval gate |
| **Marker** | 3 mm apex triangle, Auris Cyan, point up | Emphasis; the active or current element |
| **Boundary** | 0.5 pt dashed Slate, 3 mm dash | A trust, organisational or scope boundary |

Nothing outside this vocabulary is used. Where a diagram appears to require a new primitive, the
diagram is over-scoped and must be simplified or split.

**On the marker.** The apex triangle is drawn at the governing 3 : 5 ratio (31° from vertical),
taken from the logo. It is the same form used for list bullets, section markers and timeline
milestones, so the reader meets one shape carrying one meaning — *this one* — throughout the
publication. See `01_Design-Language.md` §5.1.

---

## 3. Construction rules

| Rule | Specification |
|---|---|
| **Geometry** | Orthogonal only. Connectors run horizontally and vertically with radiused corners. **No diagonals, no curves, no bezier splines** |
| **Grid** | All nodes align to a 5 mm grid; all connectors to a 2.5 mm grid |
| **Direction** | Left to right for process; top to bottom for hierarchy and layers. Never mixed within one diagram |
| **Spacing** | Minimum 10 mm between nodes; 15 mm between containers |
| **Crossings** | Minimised. Where unavoidable, the crossing connector carries a 2 mm hop |
| **Element ceiling** | Maximum **12 primary nodes** per diagram. Beyond that, the diagram is split or abstracted to a higher level |
| **Depth** | Maximum three levels of containment |
| **Labels** | Inside nodes where they fit at 8 pt; otherwise directly below, never on a leader line |
| **Legend** | Mandatory on any diagram using more than two colours or more than one line style. Placed in the 4-column outer allocation |
| **Figure number and caption** | Mandatory on every diagram, without exception |

---

## 4. Colour in diagrams

| Element | Colour |
|---|---|
| Primary nodes | Orbit Deep fill, white label |
| Secondary nodes | solid Mist fill, Nexus Navy label |
| Active / emphasised node | Auris Cyan fill, white label |
| Containers | solid Mist fill, Slate 1 pt stroke |
| Links and flows | Slate `#5A646E` |
| Emphasised flow | Auris Cyan |
| Gates | White fill, Auris Cyan stroke |
| Boundaries | Slate, dashed |
| Labels | Graphite; white when reversed |

**Maximum four colours per diagram**, drawn from this list. Colour never carries meaning alone —
every colour-coded element is additionally distinguished by label, position or shape, so the diagram
survives greyscale reproduction (Design Language §8).

---

## 5. Typography in diagrams

| Element | Style |
|---|---|
| Diagram title | Saira SemiBold 11 pt, Nexus Navy |
| Figure label | Saira Medium 8 pt, +60 tracking, UPPER, **Orbit Blue** — `FIGURE 5.1` |
| Node label | Saira Medium 8 pt, sentence case |
| Sub-label | Source Sans 3 Regular 7 pt, Slate |
| Legend | Source Sans 3 Regular 7.5 pt, Slate |
| Caption | Source Sans 3 Italic 8 pt, Slate |
| Axis label (charts) | Source Sans 3 Regular 7.5 pt, Slate |
| Data label (charts) | Source Sans 3 Regular, tabular figures, 8 pt |

Text inside diagram nodes is exempt from the baseline grid but must be optically centred.

---

## 6. The fourteen diagrams

| Fig. | Page | Diagram | Type | Nodes |
|---|---|---|---|---|
| 1.1 | 12 | Company milestone timeline | Linear timeline | 6–8 |
| 1.2 | 16 | Business philosophy — engagement model | Three-stage flow | 3 |
| 1.3 | 22 | Operating model | Three-tier layered | 11 |
| 2.1 | 24–25 | Service taxonomy — Advise / Build / Run | Matrix + flow | 8 + 3 |
| 3.1 | 44–45 | Sector × service coverage matrix | Matrix table | 15 × 8 |
| 4.1 | 60–61 | Technology stack | Layered stack, vertical security spine | 7 layers |
| 4.2 | 72 | Capability maturity | Comparison table | — |
| 5.1 | 74–75 | Delivery lifecycle — master | Five-stage, 15-phase flow with gates | 15 + 5 gates |
| 5.2 | 79 | Test pyramid and security gate | Hierarchy | 5 |
| 5.3 | 83 | Delivery governance RACI | Matrix table | — |
| 6.1 | 86 | Excellence framework | Four-quadrant containment | 4 + 11 |
| 6.2 | 90 | Information security control layers | Concentric containment | 5 |
| 7.1 | 102 | Certification roadmap | Timeline with milestones | 5–7 |
| 7.2 | 103 | Company statistics | Statistics panel with charts | — |

**Figure 5.1 is the anchor diagram of the publication.** It occupies a full spread, is referenced by
all nine sections of Part Five, and is the single image most likely to be extracted for a tender
methodology response. It receives disproportionate design attention.

---

## 7. Charts

| Rule | Specification |
|---|---|
| Permitted types | Horizontal bar, vertical column, line, dot plot, stacked bar (maximum four segments) |
| Prohibited types | **Pie charts with more than four segments** · doughnut charts · 3-D anything · radar/spider · gauge · exploded segments · area charts with overlapping fills · dual-axis charts |
| Axes | Y-axis starts at zero on all bar and column charts, without exception. A truncated axis on a credentials document is a misrepresentation |
| Gridlines | Horizontal only, 0.3 pt Mist. No vertical gridlines, no chart border |
| Data labels | Direct on the mark. Legends only where direct labelling is impossible |
| Series limit | **Four series maximum**, using the greyscale-separated ladder below. Beyond four, the chart is wrong for the data: split it, or use direct labelling in a single colour |
| Series order | Fixed: Nexus Navy `#001A48` → Orbit Blue `#0B5E9A` → Signal Cyan `#00B3BF` → Mist `#E3E8EC`. Greyscale 11 / 36 / 63 / 91 — at least 25 points apart at every step |
| Source line | Every chart carries a source and date beneath it, at 7 pt Slate |
| Rounding | Stated. If a figure is rounded or approximate, it says so |

Charts are built as **native Word charts with live underlying data**, not pasted images, per Charter
principle P4.

---

## 8. Tables

Tables are a design component, not a data dump. Specification below is binding for all 21 tables in
the publication.

| Element | Specification |
|---|---|
| Header row | Nexus Navy fill, white Saira SemiBold 8.5 pt, +40 tracking, UPPER. Right terminal of the header rule cut at 3 : 5 |
| Body rows | White; alternate rows solid Mist where the table exceeds six rows |
| Rules | **Horizontal only.** 0.3 pt Slate between rows; 1 pt Nexus Navy above and below the table. No vertical rules |
| Cell padding | 2.5 mm vertical, 5 mm horizontal |
| Alignment | Text flush left; figures flush right; headers match their column |
| Figures | Tabular lining numerals, always |
| Empty cells | An en dash `–`, never blank. A blank cell is ambiguous between "zero", "not applicable" and "omitted" |
| Footnotes | Beneath the table at 7.5 pt Slate, marked with superscript letters, not symbols |
| Continuation | Header row repeats on every page; `(continued)` appended to the caption |
| Width | Full 12-column measure, or a stated column allocation. Never an arbitrary width |
| Caption | Above the table — `TABLE 4.1 — Technology stack by layer` |

**No vertical rules** is the highest-impact single decision in table design. Vertical rules add
visual noise while adding no information; the column structure is already carried by alignment and
spacing. Their presence is the most reliable indicator of a table designed in a word processor by
someone not thinking about it.

---

## 9. Editability

Charter principle P4 is absolute for diagrams and tables. Nothing here is delivered as a flattened
bitmap.

| Object type | Implementation | Verification |
|---|---|---|
| Process and flow diagrams | Grouped Word shapes, native connectors | Double-click edits a node |
| Layered and stack diagrams | Grouped Word shapes | Layers separable |
| Matrices | Native Word tables with applied table styles | Rows insertable |
| Timelines | Grouped shapes on a drawn axis | Milestones movable |
| Framework diagrams | SmartArt where the structure suits it; grouped shapes where SmartArt would constrain the design | Text editable via the SmartArt pane |
| Charts | Native Word charts with embedded worksheets | Data editable in place |
| Icons within diagrams | SVG, converted to shape | Recolourable |

**SmartArt policy.** SmartArt is permitted only where its native layouts genuinely fit the content —
typically simple hierarchies and cycles. It is not permitted where the design would have to be
compromised to fit a SmartArt template, and its default colour schemes and 3-D styles are never
used; every SmartArt object is recoloured to the brand theme and set to a flat style.

---

## 10. Diagram checklist

Applied to every diagram before Stage 11 assembly.

- [ ] Carries an argument the text cannot make more efficiently
- [ ] Twelve primary nodes or fewer
- [ ] Orthogonal geometry only; no diagonals or curves
- [ ] Aligned to the 5 mm grid
- [ ] Four colours or fewer, all from the palette
- [ ] Legible in greyscale
- [ ] Meaning does not depend on colour alone
- [ ] Legend present where required
- [ ] Figure number and caption present
- [ ] Fully editable as a native object
- [ ] Referenced from the body text by figure number
- [ ] Reads correctly at 100% on screen and at A4 print size
