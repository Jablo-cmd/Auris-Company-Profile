# Design Language
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/01_Design-Language.md`
**Stage:** 2 — Document Design System
**Status:** Draft for approval
**Governs:** every visual decision in the publication and all derivative collateral

---

## 1. The idea

### Ascent and Orbit

The logo states the company's proposition in two forms, and the design language takes both directly
from it.

**The apex** — a solid navy triangle rising at a constant 3 : 5 slope. Stable, weighted, directional.
It is the *ascent*: capability, rigour, upward trajectory. In the system it becomes **structure** —
the angle that governs section markers, bullets, card corners, thumb tabs and diagram geometry.

**The orbit** — an arc sweeping around the apex, cyan resolving into navy. It is the *nexus*: the
connective act that binds things together, which is the company's name and its tagline
("Connecting innovation. Delivering impact."). In the system it becomes **navigation** — the colour
ramp that runs across the seven parts, and the single arc device that appears on covers and dividers.

The two ideas resolve into one working principle: **quiet surfaces, precise connections.** The pages
are calm and generous; the marks that carry meaning are exact.

---

## 2. Why this, and not the category default

Corporate profiles in this sector overwhelmingly borrow from advertising: gradients, diagonal photo
crops, floating devices, exclamatory headline sizes. The result reads as persuasion, which is
precisely the register that makes a procurement reviewer defensive.

This document instead adopts the visual grammar of technical documentation — a strict grid, keylines
that behave like a drawing legend, generous white space, and diagrams drawn with the discipline of an
engineering schematic. The intended impression is **precise, calm and expensive**: a document made by
people who are careful.

That is not an aesthetic preference. Care is the one attribute all nine audiences are actually
shopping for, and this document is the only sample of the company's work most of them will see
before deciding.

---

## 3. Principles

**D1 — The grid is not negotiable.**
Every element aligns to the 12-column grid and the 5 mm baseline. Optical adjustment is permitted;
arbitrary placement is not. Consistency of alignment reads as competence even to readers who cannot
name what they are seeing.

**D2 — White space is a statement of confidence.**
Minimum 28% of every content page remains empty. Dense pages read as a company trying to appear
larger than it is. Where content will not fit, content is cut — never the margins.

**D3 — One accent, used sparingly.**
Auris Cyan appears on no more than 10% of any page's area. An accent used everywhere is not an
accent; it is a second background. Cyan marks *what matters*: wayfinding, the key figure, the active
node in a diagram.

**D4 — Hierarchy through space and weight, not size.**
The type scale is deliberately narrow. Levels are distinguished by weight, colour, case and the space
around them. Large type is a blunt instrument and a mid-market tell.

**D5 — Rules and keylines carry structure.**
Hairlines (0.3 pt) separate; medium rules (1 pt) group; heavy rules (3 pt cyan) mark section
openings. Boxes are used only for genuine containment. Decorative boxes are prohibited.

**D6 — Nothing is decorative.**
Every mark on every page answers to a function. If an element cannot state its function it is
deleted. This single rule removes most of what makes competitor profiles look cheap.

**D7 — Degrade gracefully.**
The document must survive greyscale printing, monochrome photocopying and a recipient without brand
fonts. Every part colour carries a distinct greyscale value at 10-point separation; no meaning is
conveyed by colour alone; fallback fonts are specified and tested. Tender packs are routinely
photocopied.

**D8 — Design the compliance content.**
Governance, security and compliance sections receive the same design investment as services. Most
profiles relegate them to grey appendices. Designing them signals a company unembarrassed by
scrutiny — a genuine differentiator with bank and public-sector readers.

**D9 — The logo is the authority.**
Colour, angle and proportion derive from the mark. Where the system needs something the mark does
not supply, the addition is documented with its rationale in the relevant specification, not made
silently.

---

## 4. The system at a glance

| Dimension | Decision | Derived from |
|---|---|---|
| Format | A4 portrait, 210 × 297 mm | Market requirement |
| Grid | 12 columns, 4 mm gutter, 5 mm baseline | — |
| **Governing angle** | **31° from vertical (3 : 5)** | Measured apex slope |
| **Modular unit** | `u` = cap height of `NEXUS` | Lockup construction |
| Palette | Nexus Navy · Auris Cyan · orbit ramp | Sampled from the mark |
| Type | Saira · Source Sans 3 · Source Serif 4 | Matched to the wordmark |
| Icons | Font Awesome 6 Sharp Regular | Squared terminals of the wordmark |
| Photography | Documentary, natural light, unposed | — |
| Illustration | Geometric line-work, no figures | — |
| Diagrams | Orthogonal, schematic, legend-driven, editable | — |
| Surface | Matte, flat. No gradients, shadows or bevels outside the logo | — |

---

## 5. The derived motifs

Two devices, both taken from the mark. **Nothing else is used.** The lattice motif proposed at
Stage 1 is deleted — it was invented before the logo was available, and the mark supplies better
devices of its own.

### 5.1 The Apex — the structural device

The mark's flanks hold a measured, constant slope of **dx/dy = 0.600**, exactly **3 : 5**, or
**31.0° from vertical**. Both flanks match; the apex angle is 61.9°.

For construction the angle is expressed as the **3 : 5 ratio** — exactly drawable in Word,
Illustrator and any CAD-derived tool, predictable on the 5 mm grid, and visually identical to the
measured 30.96°.

| Scale | Application | Specification |
|---|---|---|
| **Micro** | List bullets | 2 mm apex triangle, Auris Cyan, 4 mm hanging indent |
| **Micro** | Section marker | 3 mm apex triangle preceding every section title |
| **Meso** | Card and callout corner | Top-left corner cut on the 3 : 5 angle, 4 mm leg |
| **Meso** | Table header terminal | Right terminal of the header rule cut at 31° |
| **Meso** | Thumb tabs | 18 × 32 mm tab, leading edge cut at 31° |
| **Macro** | Part divider | Apex silhouette at 40% page height, Apex Field `#002C56` (solid) on navy |

### 5.2 The Orbit — the navigational device

The arc that binds the apex. It appears in two forms and no others.

| Form | Application | Specification |
|---|---|---|
| **The ramp** | Part colour coding | Seven steps resampled from the orbit gradient at 10-point greyscale intervals — see `02_Colour-Palette.md` §5 |
| **The arc** | Cover, back cover, part dividers | A single arc segment, 1.5 pt, Signal Cyan, radius ≥ 180 mm so it reads as near-straight — never a full circle, never concentric |

**Rules of use.** Neither motif is rotated off its specified angle, gradient-filled, applied over
photography, or animated in digital derivatives. Both appear on **structural pages only** — covers,
dividers, card corners, section markers. On narrative pages the grid does that work, and the motifs
stay away.

### 5.3 What the mark does not license

The logo contains a gradient. **The document system is flat.** Rationale is in
`02_Colour-Palette.md` §3, deviation **D3**: gradients band on offset press, render inconsistently
across Word versions, and photocopy as muddy bands. The logo keeps its gradient; nothing else has one.

---

## 6. Prohibited treatments

Each is a recognised marker of a lower-tier document.

- Gradients of any kind outside the logo artwork itself
- Drop shadows, bevels, glows, embossing, reflections
- **Shearing, obliquing or false-italicising type** to imitate the wordmark's diagonal cuts
- Rotated or skewed text and images; diagonal photo crops
- Three-dimensional charts; pie charts above four segments; exploded segments
- Stock photography of handshakes, jigsaw pieces, ascending arrows, glowing brains, circuit-board
  globes, businesspeople pointing at screens, hands touching floating interfaces
- "Corporate Memphis" flat-illustration figures
- Text over busy photography without a solid panel or 70% scrim
- Centred body copy; justified text with unmanaged rivers
- More than two typefaces on a page, or any face outside the specified three
- Full-page borders and decorative frames
- Applying the apex motif at any angle other than 3 : 5
- Diagonal `DRAFT` or `CONFIDENTIAL` watermarks across content pages — status belongs in the
  document control block, not scrawled over the design

---

## 7. Corporate watermark

A restrained mark, not an overlay.

- **Form:** the apex symbol alone, 40 mm, Mist Pale `#EDF0F3` (solid) opacity
- **Position:** lower outer corner, 18 mm from trim, behind the folio
- **Applied to:** part dividers and the capability statement spread only
- **Never applied to:** narrative pages, tables, diagrams, or anywhere it would sit behind body copy

---

## 8. Greyscale and accessibility behaviour

| Colour | Greyscale | Distinguishable in mono |
|---|---|---|
| Nexus Navy | 11% | Yes — near black |
| Orbit Deep | 28% | Yes |
| Orbit Blue | 36% | Yes |
| Slate | 39% | Yes |
| Auris Cyan | 52% | Yes |
| Signal Cyan | 63% | Yes |
| Mist | 91% | Yes |

**The separation rule applies to colours used together to encode meaning** — part coding, chart
series, diagram states. Those sets are constructed to hold at least 10 greyscale points of
separation, and the four-series chart ladder holds 25 points or more. Colours that happen to sit
close in greyscale (Orbit Blue at 36% and Slate at 39%) are never used to distinguish one thing from
another; they occupy different roles — structural accent and secondary text — and are separated by
size and weight.

No chart, diagram or table uses colour as its only differentiator. Every coloured element is
additionally distinguished by label, position, weight, icon or pattern.

Per-pairing contrast ratios: `02_Colour-Palette.md` §4.

---

## 9. Governance

The design system is **frozen at the close of Stage 2**. After that:

- Changes require explicit change control and a stated rationale
- Any change to a component applies retroactively to every page already built
- The files in `07_Branding/` are the single source of truth. Where a built page and the
  specification disagree, **the specification is correct and the page is wrong**
- The only event that reopens the palette or the governing angle is a change to the logo itself

This discipline is the difference between a design system and a set of preferences.
