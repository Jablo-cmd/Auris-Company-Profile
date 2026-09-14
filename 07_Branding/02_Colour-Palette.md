# Colour Palette
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/02_Colour-Palette.md`
**Stage:** 2 — Document Design System
**Status:** Draft for approval
**Derived from:** `03_Images/aurilogo.png` — see `08_Logo-and-Identity.md` §1.3

---

## 1. Method

Every colour in this system is **sampled from the logo**, not chosen. Values were extracted by
pixel analysis of the supplied artwork, taking the flat, non-gradient applications as authoritative
because gradient areas give a range rather than a value:

| Sampled from | Pixels at modal value | Yields |
|---|---|---|
| `AURIS` wordmark — the largest flat area in the mark | 3 541 | **Nexus Navy** `#001A48` |
| `NEXUS` wordmark | 17 | **Auris Cyan** `#098FB4` |
| `IMPACT.` in the former tagline (retired Stage 10, see below), and the orbit peak | 3 | **Signal Cyan** `#00B3BF` |
| Orbit gradient, midpoint | — | **Orbit Blue** `#0B5E9A` |
| Orbit gradient, shoulder | — | **Orbit Deep** `#06488B` |

> **Stage 10 note.** The tagline "Connecting innovation. Delivering impact." — and with it the
> specific word `IMPACT.` sampled above — was retired by owner confirmation in favour of
> "Transforming Businesses Through Technology" (Fact Register A3, CVR-043). Signal Cyan `#00B3BF`
> itself is unaffected: it was cross-sampled from two independent sources in the artwork, the
> tagline word and the orbit peak, and the orbit-peak sample alone still supports the same value.
> No letter- or word-specific accent treatment is assigned within the new tagline here — that was a
> property read directly off existing artwork for the old wording, and no artwork exists yet for the
> new one (`08_Logo-and-Identity.md` gap G8). Assigning an accent word now, with nothing sampled to
> base it on, would be inventing a design decision rather than recording one; that choice belongs to
> whoever produces the new tagline-bearing lockup.

Nexus Navy accounts for **41% of all non-white pixels** in the mark. It is unambiguously the primary.

---

## 2. Core palette

### Primary — from the mark

| Name | Hex | RGB | CMYK | Pantone (nearest) | Role |
|---|---|---|---|---|---|
| **Nexus Navy** | `#001A48` | 0, 26, 72 | 100, 87, 40, 42 | 282 C | The brand. Covers, dividers, headings, primary structure |
| **Auris Cyan** | `#098FB4` | 9, 143, 180 | 82, 27, 20, 0 | 7690 C | The accent. Wayfinding, section markers, key figures, active diagram nodes |

### Extended — from the orbit gradient

The mark's orbit runs a continuous cyan-to-navy blend. Sampling it gives three further values that
are already part of the identity, so the palette extends without inventing anything.

| Name | Hex | RGB | CMYK | Role |
|---|---|---|---|---|
| **Orbit Deep** | `#06488B` | 6, 72, 139 | 96, 74, 15, 2 | Secondary structure, subheadings, diagram fills |
| **Orbit Blue** | `#0B5E9A` | 11, 94, 154 | 91, 62, 14, 1 | **The text-safe accent** — see §4.2 |
| **Signal Cyan** | `#00B3BF` | 0, 179, 191 | 74, 5, 26, 0 | Highlight on navy grounds only; reversed logo orbit |

### Neutrals

Cool-neutral, tuned to sit with the navy. A warm grey against `#001A48` reads as dirty.

| Name | Hex | RGB | Role |
|---|---|---|---|
| **Graphite** | `#22282F` | 34, 40, 47 | Body copy on light grounds |
| **Slate** | `#5A646E` | 90, 100, 110 | Secondary text, captions, folios, table rules |
| **Mist** | `#E3E8EC` | 227, 232, 236 | Panel fills, table banding, watermark |
| **Paper** | `#F6F8FA` | 246, 248, 250 | Page ground where a tint is required |
| **White** | `#FFFFFF` | 255, 255, 255 | Primary page ground, reversed type |

### Functional — charts, status, diagram states

Not in the logo, and necessarily so: status colour must be conventional to be understood. These are
**functional signals, not brand colours**, and are never used decoratively.

| Name | Hex | Contrast on white | Role |
|---|---|---|---|
| **Verified** | `#17703F` | 6.13 : 1 | Compliant, complete, held |
| **Caution** | `#8F5300` | 6.17 : 1 | Attention, in progress, planned |
| **Critical** | `#A81F16` | 7.31 : 1 | Risk, non-conformance, exception |

All three pass AA at every text size. Their greyscale values fall within 4 points of each other, so
**a functional colour is always accompanied by an icon and a text label** — never used alone.

---

## 3. Documented deviations from the logo

Per your instruction, the logo governs unless there is a compelling accessibility or
print-production reason. Three adjustments were required. Each is recorded with its rationale.

### D1 — Meridian Gold removed

**Stage 1 proposed a gold accent. It is deleted.**
There is no gold in the mark. The logo is navy and cyan-blue, and introducing a third hue family
would be decoration imposed on the identity rather than derived from it. The warmth that gold was
carrying is instead supplied by the **cool-to-warm progression across the part ramp** (§5), which
comes from the mark's own gradient.

*Consequence:* Part Six and Part Seven colour coding is re-derived. `Gold Ink` is deleted from the
system.

### D2 — Auris Cyan restricted from body text

**Measured: `#098FB4` on white = 3.75 : 1.** WCAG AA requires 4.5 : 1 for normal text.

The brand cyan is **unchanged** — it remains exactly as sampled, for the logo, headings above
18.7 pt, section markers, rules, icons and diagram elements, all of which need only 3 : 1.

For small text requiring the accent, the system uses **Orbit Blue `#0B5E9A` at 6.81 : 1**, which is
sampled from the logo's own gradient. Nothing is invented, and the two sit adjacent on the orbit, so
they read as one family.

*This is the deviation you anticipated, and it resolved better than expected: the accessible sibling
was already inside the mark.*

### D3 — Gradients confined to the logo

The mark contains a gradient. The **document system is flat.**

Rationale is production, not taste. A cyan-to-blue gradient banding across an A4 field on offset
press is visible and cheap-looking; the same gradient in Word renders differently across versions
and print drivers; and gradients photocopy as muddy bands, which matters because tender packs are
routinely photocopied.

**The logo keeps its gradient. Nothing else in the document has one.** Where a transition is needed,
the system steps discretely through the part ramp — which reads as deliberate rather than as a
failed blend.

---

## 4. Contrast and accessibility

Measured WCAG 2.1 ratios, computed from the sampled values rather than estimated.

### 4.1 Full matrix

| Foreground | On white | On Nexus Navy | Greyscale | Verdict |
|---|---|---|---|---|
| **Nexus Navy** `#001A48` | **16.92 : 1** | — | 11% | AAA — all sizes |
| **Orbit Deep** `#06488B` | **9.10 : 1** | 1.86 : 1 | 28% | AAA on white |
| **Orbit Blue** `#0B5E9A` | **6.81 : 1** | 2.48 : 1 | 36% | AA all sizes on white |
| **Auris Cyan** `#098FB4` | 3.75 : 1 | **4.51 : 1** | 52% | ⚠ Large text ≥ 18.7 pt + graphics on white · AA all sizes **on navy** |
| **Signal Cyan** `#00B3BF` | 2.56 : 1 | **6.61 : 1** | 63% | ⚠ Navy grounds only |
| **Graphite** `#22282F` | **14.87 : 1** | 1.14 : 1 | 15% | AAA — body copy standard |
| **Slate** `#5A646E` | **6.03 : 1** | 2.81 : 1 | 39% | AA all sizes |
| **Mist** `#E3E8EC` | 1.23 : 1 | **13.71 : 1** | 91% | Reversed use only |
| **White** | — | **16.92 : 1** | 100% | AAA reversed |

### 4.2 Binding rules

1. **Body copy is Graphite on white, or white on Nexus Navy. No exceptions.**
2. **Auris Cyan never carries body text on white.** Where an accent colour must be read at body
   size, use **Orbit Blue**.
3. **Signal Cyan is a navy-ground colour only.** At 2.56 : 1 on white it fails even for graphics.
4. No information is carried by colour alone — every coloured element is also distinguished by
   label, position, weight or icon.
5. Ratios are re-verified against the built pages at Stage 12, not assumed from this table.

---

## 5. Part colour coding

The seven part colours are **resampled from the logo's orbit gradient** at intervals chosen to give
exactly **10 greyscale points of separation** between adjacent parts. The document's navigation
system is therefore literally the logo's own gradient, unrolled across 112 pages.

| Part | Name | Hex | On white | On navy | Greyscale |
|---|---|---|---|---|---|
| **One** — The Company | Navy | `#001A48` | 16.92 : 1 | — | 11% |
| **Two** — Services | Orbit 2 | `#03346F` | 12.18 : 1 | 1.39 : 1 | 21% |
| **Three** — Industries | Orbit 3 | `#085091` | 8.18 : 1 | 2.07 : 1 | 31% |
| **Four** — Technical | Orbit 4 | `#0A6FA3` | 5.50 : 1 | 3.07 : 1 | 41% |
| **Five** — Delivery | Auris Cyan | `#098DB3` | 3.84 : 1 | 4.41 : 1 | 51% |
| **Six** — Excellence | Orbit 6 | `#05ABC1` | 2.76 : 1 | 6.12 : 1 | 61% |
| **Seven** — Credentials | Orbit 7 | `#00CAC9` | 2.04 : 1 | 8.29 : 1 | 71% |

Part Five lands on `#098DB3`, within two units of the sampled brand cyan `#098FB4` — the brand
accent falls naturally at the centre of the ramp. The block edge of a printed copy shows a clean
navy-to-aqua progression front to back, and it survives greyscale photocopying at every step.

**Parts Four to Seven use their colour as a field with reversed type**, never as type on white,
since those steps fall below the text threshold.

---

## 6. Proportion

| Share | Group | Application |
|---|---|---|
| **60%** | White / Paper | The ground. White space is the dominant material |
| **25%** | Nexus Navy / Orbit Deep / Graphite | Type, structure, fields |
| **10%** | Slate / Mist | Secondary information, panels, rules |
| **5%** | Auris Cyan / Signal Cyan | Signal only |

**Hard ceiling: Auris Cyan on no more than 10% of any page's area.** Covers and part dividers are
the sole exception, where navy inverts to become the ground.

---

## 7. Tint ladder — solid builds, no live opacity

Because commercial offset is the primary output, **the system uses no live transparency**. Every
tint is pre-computed as a solid colour. Live opacity is the mechanism by which transparency
flattening produces banding, tonal jumps and white hairline artefacts on press.

| Name | Hex | CMYK | Replaces | Applied to |
|---|---|---|---|---|
| **Mist** | `#E3E8EC` | 5 / 3 / 1 / 6 | "solid Mist" | Callout boxes, fact panels, feature cards, diagram containers |
| **Mist Light** | `#F2F5F6` | 3 / 1 / 1 / 3 | Table banding | Alternate table rows |
| **Mist Pale** | `#EDF0F3` | 4 / 2 / 1 / 4 | "Mist 25%" | Watermark on white |
| **Apex Field** | `#002C56` | 100 / 78 / 33 / 25 | "Signal Cyan 12% on navy" | Cover and divider apex motif |
| **Navy Panel** | `#1F355E` | 92 / 74 / 32 / 20 | "White 12% on navy" | Reversed panels on divider pages |
| **Rule Grey** | `#BDC1C5` | 26 / 18 / 15 / 0 | "Slate 40%" | Light rules |

**This corrected a real defect.** Stage 2 components specified "solid Mist" as a panel fill — but Mist
is already a 91% greyscale tint, so 30% of it computes to `#F7F8F9`: effectively invisible on white
and certain to disappear on press. **Panels are now solid Mist.** The original specification was
wrong; this is right.

Arbitrary tint values remain prohibited. A new tint requires a new named entry in this table, with
its CMYK build — which is what prevents a six-colour palette silently becoming thirty.

---

## 8. Chart palette

Charts are limited to **four series**, using the four ramp steps with the widest greyscale
separation — 25 points or more between each.

| Order | Colour | Greyscale |
|---|---|---|
| 1 | Nexus Navy `#001A48` | 11% |
| 2 | Orbit Blue `#0B5E9A` | 36% |
| 3 | Signal Cyan `#00B3BF` | 63% |
| 4 | Mist `#E3E8EC` | 91% |

Beyond four series, the chart is wrong for the data: split it, or use direct labelling with a single
colour. Fixed order, so every chart in the document agrees.

---

## 9. Print production

Commercial sheet-fed offset is the **primary** output medium. Full specification in
`10_Print-Production.md`; colour summary here.

### 9.1 The palette is CMYK-safe

Every colour was converted to CIE L\*a\*b\* and its chroma tested against achievable FOGRA39 chroma
at the same lightness and hue.

| Colour | L\* | C\* | FOGRA39 ceiling | Verdict |
|---|---|---|---|---|
| Nexus Navy | 10.6 | 33.6 | ~40 | ✅ Safe |
| Orbit Deep | 30.7 | 43.3 | ~52 | ✅ Safe |
| Orbit Blue | 38.6 | 39.0 | ~55 | ✅ Safe |
| Auris Cyan | 55.1 | 33.7 | ~58 | ✅ Safe — comfortable margin |
| Signal Cyan | 66.5 | 37.2 | ~48 | ✅ Safe |
| **Part ramp 7** `#00CAC9` | 73.8 | **42.2** | **~42** | ⚠ **Borderline** |

**The palette survives CMYK conversion because it is built from moderate-chroma blues and teals, not
saturated screen colours** — a direct benefit of deriving it from a navy-anchored logo rather than a
digital-first palette.

The one exception is the lightest ramp step, used on two pages. Options and the recommendation are
in `10_Print-Production.md` §3.2; the decision is taken **at contract proof**, on paper, not now.

### 9.2 Target CMYK builds

| Colour | C | M | Y | K | TAC |
|---|---|---|---|---|---|
| **Nexus Navy** — large fields | 100 | 80 | 30 | 35 | 245% |
| **Nexus Navy** — type, small elements | 100 | 74 | 28 | 61 | 262% |
| Orbit Deep | 96 | 54 | 11 | 39 | 200% |
| Orbit Blue | 93 | 44 | 9 | 34 | 181% |
| Auris Cyan | 95 | 25 | 6 | 25 | 151% |
| Signal Cyan | 100 | 11 | 5 | 21 | 137% |
| Graphite | 57 | 49 | 40 | 69 | 215% |
| Slate | 32 | 24 | 17 | 48 | 121% |
| Mist | 5 | 3 | 1 | 6 | 15% |

**Two navy builds, deliberately.** A large flat field carrying high K shows mottling, scuffing and
roller marks; the field build carries the colour in CMY with moderate K. Type uses the higher-K
build for crispness. Both target the same L\*a\*b\*.

| Parameter | Specification |
|---|---|
| Profile | **FOGRA39 (ISO Coated v2)** offset · **sRGB IEC61966-2.1** screen |
| Total ink coverage | Maximum **300%** — every build above complies |
| Type below 24 pt | **100 K only.** Rich black on small type fringes on registration |
| Overprint | Black type overprints; coloured objects and navy fields knock out; **white never overprints** |
| Spot option | Nexus Navy → Pantone 282 C · Auris Cyan → Pantone 7690 C, for 5-colour runs only |
| Logo gradient | Must be supplied as a **stepped vector blend**. See `08_Logo-and-Identity.md` §8 |

---

## 10. Office application

| Context | Specification |
|---|---|
| Theme file | `Auris-Nexus.thmx` — installs the palette so all styles, charts and SmartArt inherit brand colours |
| Theme slots | Text/Background dark 1 = Nexus Navy · Accent 1 = Auris Cyan · Accent 2 = Orbit Deep · Accent 3 = Orbit Blue · Accent 4 = Signal Cyan · Accent 5 = Slate · Accent 6 = Mist |
| Hyperlinks | Orbit Blue `#0B5E9A`, underlined. Not Office default blue |
| Table styles | Header Nexus Navy, white type; banding solid Mist; rules Slate hairline |

---

## 11. Change control

This palette is **frozen at the close of Stage 2**.

The only event that reopens it is a change to the logo itself. Every other file in the system
references colours **by name** — `Nexus Navy`, `Auris Cyan` — never by hex value, so a future
identity revision is a single-file edit that propagates through the whole publication.
