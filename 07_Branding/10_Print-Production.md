# Print Production Specification
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/10_Print-Production.md`
**Stage:** 2 — Document Design System
**Status:** Draft for approval
**Primary output:** commercial sheet-fed offset lithography
**Supersedes:** all Word-first production assumptions in Stages 1 and 2

---

## 1. The production model

**Microsoft Word is the authoring and design master**, so the document remains editable and
maintainable by Auris Nexus. It is composed to professional publishing standards — the grid,
baseline, type scale, spacing and colour system are specified independently of any tool, and are
portable to InDesign or Affinity Publisher without redesign.

```
                    ┌─────────────────────────────┐
                    │   WORD master document      │  ← authoring + design
                    │   55–65 pp · A4 · design-grid │
                    └──────────────┬──────────────┘
                                   │
          ┌────────────────┬───────┴────────┬────────────────┐
          ▼                ▼                ▼                ▼
   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
   │ SCREEN PDF  │  │ TENDER PDF  │  │ PRESS PATH  │  │  .docx      │
   │  RGB tagged │  │  < 10 MB    │  │ ↓ see §1.2  │  │  editable   │
   │  accessible │  │  flattened  │  │             │  │  master     │
   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
      distribution     procurement    offset press      client edits
```

### 1.1 The binding rule

**No design decision is made because of what Word can or cannot do.** The design system is
tool-independent by construction: the 12-column grid, the 5 mm baseline, the type scale, the
spacing tokens and the CMYK-verified palette were all specified before any tool was chosen. Where
Word cannot execute something cleanly, the *production method* is adapted — never the design.

Consequence: any competent studio can rebuild this document in InDesign from the specification
alone, and the result will be identical. That is the test the system is held to.

### 1.2 What Word cannot do, and how each is handled

Stated plainly, because these are real and they determine the press path.

| Word limitation | Impact | Handling |
|---|---|---|
| **No CMYK.** Word is RGB-only; its PDF export is RGB | Cannot produce PDF/X-4 directly | Export high-quality RGB PDF → convert to FOGRA39 CMYK in **Acrobat Pro** (Preflight → Convert Colours) or hand to the printer's RIP with the profile specified |
| **No bleed setting** | Full-bleed covers and dividers would trim white | Set page size to **216 × 303 mm** (trim + 3 mm bleed) throughout; add crop and registration marks in Acrobat at export. Trim guides carried on a template layer |
| **No baseline grid** | Text drifts off-grid across columns | Already solved by design: every leading value is an exact multiple of 5 mm or 2.5 mm, and all space-before/after values come from the spacing scale. Grid alignment is arithmetic, not a tool feature |
| **No overprint control** | Black type may knock out and fringe | Set at the Acrobat/RIP stage per `§3.5` |
| **No ink-limit enforcement** | TAC could exceed 300% | Palette pre-verified — every build in §3.3 complies by construction |
| **Aggressive image downsampling on export** | Images drop below 300 dpi silently | Export via **Save as PDF → Options → ISO 19005 / "Print quality"**, or PDFMaker with downsampling **off**. Verified at preflight |
| **Poor transparency flattening** | Banding, white hairline artefacts | Already solved by design: the system uses **no live transparency**. All tints are solid builds; scrims are composited into images |

**Net position:** Word produces a design-correct, press-*intent* document. **It does not produce a
press-ready PDF/X-4 on its own** — that conversion happens downstream in Acrobat Pro, or the
document is rebuilt in InDesign for the final print run. Both routes are supported without changing
a single design decision.

### 1.3 Tooling

| Role | Primary | For final press production |
|---|---|---|
| Layout and authoring | **Microsoft Word** (2016+) | InDesign 2024+ / Affinity Publisher 2 |
| Vector artwork | Illustrator / Affinity Designer / Inkscape → SVG | Same |
| Image preparation | Photoshop / Affinity Photo / GIMP | Same |
| Colour conversion, bleed, marks, preflight | **Adobe Acrobat Pro** | callas pdfToolbox, Enfocus PitStop |

**Diagrams and tables are built once**, as native Word objects — preserving Charter principle P4 in
the master itself. The earlier dual-build cost no longer applies.

---

## 2. Page geometry for press

| Parameter | Specification |
|---|---|
| **Trim size** | 210 × 297 mm (A4 portrait) |
| **Bleed** | **3 mm** all four edges — document size 216 × 303 mm |
| **Slug** | 6 mm, foot — job name, page, colour bar, date |
| **Safety margin** | **8 mm** inside trim. No critical content, type or logo outside |
| **Spine allowance** | **10 mm** either side of the spine. No critical content, no faces, no type |
| **Registration marks** | Crop, bleed, registration, colour bars, page information |
| **Extent** | 55–65 pp text + 4 pp cover = 116 pp total, divisible by 4 |

### 2.1 Safety margin raised from 5 mm to 8 mm

Stage 1 specified 5 mm. Commercial guillotine tolerance on a sheet-fed run is typically ±1 mm, and
cumulative tolerance through folding and trimming reaches ±2–3 mm. An 8 mm safety margin absorbs
that with room to spare. At 18 mm outer margin, this costs nothing — no content sat in that zone
anyway.

### 2.2 Spine and binding

| Parameter | Specification |
|---|---|
| Binding | **Perfect bound (PUR adhesive)** |
| Why PUR | PUR lay-flat performance is materially better than EVA hotmelt at this extent, and it does not crack on a matt-laminated spine. The cost difference on a 500-unit run is small |
| Spine width | **≈ 8 mm** — 56 text leaves at 150 gsm matt coated (caliper ≈ 0.13 mm) + 300 gsm cover |
| **Spine width is confirmed by the printer** before the cover is finalised | Paper caliper varies by mill and batch; a spine designed to a calculated width and printed on different stock produces a wrapped or short spine |
| Hinge score | 6 mm from spine, front and back cover |
| Gutter | 22 mm inner margin — 4 mm more than outer, compensating for the binding shadow |

**Creep** is not applicable: creep affects saddle-stitched work, not perfect binding. No shingling
compensation is required.

---

## 3. Colour management

### 3.1 Profiles

| Purpose | Profile |
|---|---|
| **Document working space** | Coated FOGRA39 (ISO 12647-2:2004) |
| Image RGB source | Adobe RGB (1998) — wider gamut than sRGB for the CMYK conversion |
| Screen PDF | sRGB IEC61966-2.1 |
| Rendering intent | **Relative Colorimetric** with black point compensation |
| Separation | GCR medium, black start 20%, black generation medium |

### 3.2 Gamut analysis — the palette is CMYK-safe

Every brand colour was converted to CIE L\*a\*b\* and its chroma compared against achievable FOGRA39
chroma at the same lightness and hue. **The result is favourable and worth stating clearly.**

| Colour | Hex | L\* | a\* | b\* | C\* | FOGRA39 ceiling | Verdict |
|---|---|---|---|---|---|---|---|
| Nexus Navy | `#001A48` | 10.6 | 11.8 | −31.4 | 33.6 | ~40 | ✅ Safe |
| Orbit Deep | `#06488B` | 30.7 | 8.7 | −42.4 | 43.3 | ~52 | ✅ Safe |
| Orbit Blue | `#0B5E9A` | 38.6 | 0.6 | −39.0 | 39.0 | ~55 | ✅ Safe |
| Auris Cyan | `#098FB4` | 55.1 | −18.3 | −28.3 | 33.7 | ~58 | ✅ Safe — comfortable margin |
| Signal Cyan | `#00B3BF` | 66.5 | −33.1 | −16.9 | 37.2 | ~48 | ✅ Safe |
| Part ramp 2–6 | — | 22–64 | — | — | 34–42 | 45–58 | ✅ Safe |
| **Part ramp 7** | `#00CAC9` | 73.8 | −40.6 | −11.4 | **42.2** | **~42** | ⚠ **Borderline** |

**The palette survives CMYK conversion because it is composed of moderate-chroma blues and teals,
not saturated screen colours.** This is a direct benefit of deriving the system from a navy-anchored
logo rather than from a digital-first palette.

**The single exception — Part Seven, `#00CAC9`.** At L\* 73.8 it sits at the top of the ramp where
available chroma falls away, and it may print slightly duller and greener than it appears on screen.

Three options:

| Option | Effect | Recommendation |
|---|---|---|
| **Accept** | Slight flattening on the Part Seven divider and thumb tab only, on 2 pages of 55–65 | ✅ **Recommended** — negligible impact |
| Darken to `#00BDC0` | L\* 70, fully in gamut, keeps 10-point greyscale separation | Acceptable if the proof disappoints |
| Spot ink | Pantone 3252 C as a fifth colour | Not justified for two pages |

**Decision required at proof stage, not now.** Print the ramp on the contract proof and judge it on
paper — which is the only place the question can actually be settled.

### 3.3 Target CMYK builds

Approximate, pending contract proof. **Ink limit 300%; all builds comply.**

| Colour | C | M | Y | K | TAC |
|---|---|---|---|---|---|
| **Nexus Navy** — large fields | 100 | 80 | 30 | 35 | 245% |
| **Nexus Navy** — type and small elements | 100 | 74 | 28 | 61 | 262% |
| Orbit Deep | 96 | 54 | 11 | 39 | 200% |
| Orbit Blue | 93 | 44 | 9 | 34 | 181% |
| Auris Cyan | 95 | 25 | 6 | 25 | 151% |
| Signal Cyan | 100 | 11 | 5 | 21 | 137% |
| Graphite | 57 | 49 | 40 | 69 | 215% |
| Slate | 32 | 24 | 17 | 48 | 121% |
| Mist | 5 | 3 | 1 | 6 | 15% |

**Two navy builds, deliberately.** A large flat field printed with high K shows mottling, scuffing
and roller marks; the field build carries the colour in CMY with moderate K. Small elements and type
use the higher-K build for crispness. Both target the same L\*a\*b\*.

### 3.4 Black handling

| Application | Build | Reason |
|---|---|---|
| Body text, all type below 24 pt | **100 K only** | Rich black on small type causes visible registration fringing |
| Display type above 24 pt on white | 100 K, or Nexus Navy | — |
| Large black fields (none currently specified) | Rich black 60/40/40/100 | Flat 100 K prints as washed charcoal across a large area |
| Registration black `[Registration]` | **Never in artwork** | 400% ink; for crop marks only |
| Reversed type on navy | White knockout | — |

### 3.5 Overprint

| Element | Setting |
|---|---|
| Black type below 24 pt | **Overprint on** |
| Coloured type and objects | Knockout |
| Navy fields | Knockout |
| White objects | **Never overprint** — a white overprint disappears entirely. Checked at preflight |
| Hairline rules in K | Overprint on |

---

## 4. Transparency and effects

The requirement is to avoid transparency effects. This is achieved by **pre-computing every tint as
a solid colour** rather than relying on live opacity, which is the mechanism by which transparency
flattening produces banding, tonal jumps and white hairline artefacts on press.

### 4.1 Flattened tint builds — replacing all live opacity

Every percentage in the design system resolves to a solid value. **The design system no longer uses
live transparency anywhere except one place (§4.2).**

| Was specified as | Now a solid | Hex | Applied to |
|---|---|---|---|
| solid Mist panel fill | **Mist** solid | `#E3E8EC` | Callout boxes, fact panels, feature cards, containers |
| Table banding | **Mist Light** | `#F2F5F6` | Alternate table rows |
| Watermark, Mist 25% | **Mist Pale** | `#EDF0F3` | Watermark on white |
| Signal Cyan 12% on navy | **Apex Field** | `#002C56` | Cover and divider apex motif |
| White 12% on navy | **Navy Panel** | `#1F355E` | Reversed panels on divider pages |
| Slate 40% hairline | **Rule Grey** | `#BDC1C5` | Where a lighter rule is wanted |

**This corrected a real defect.** Components specified "solid Mist" as a panel fill, but Mist is
already a 91% greyscale tint — 30% of it computes to `#F7F8F9`, effectively invisible on white and
certain to disappear on press. Panels are now solid Mist. The specification was wrong; it is now
right.

### 4.2 The one permitted transparency

The **70% navy scrim over photography** (`06_Photography-and-Illustration.md` §4), used where type
overlays an image.

**It is not implemented as live transparency.** The scrim is composited into the image in Photoshop
and the image is supplied flattened, in CMYK, as a single TIFF. The layout application sees an
opaque photograph. No transparency reaches the press file.

### 4.3 Prohibited on press

- Live transparency, blend modes, opacity below 100% on any object
- Drop shadows, glows, feathering, bevels — already prohibited by design language, now also by press
- Gradients of any kind **except within the supplied logo artwork**, which must be a stepped vector blend
- Placed RGB images
- Placed images below 300 dpi at final size
- Rules below the minimum weights in §5.2
- Spot colours in the artwork unless the job is specified as 5-colour
- Overprinting white
- Fonts not embedded or not outlined

---

## 5. Print-safe typography

### 5.1 Minimum sizes on press

| Application | Minimum | Rule |
|---|---|---|
| Positive type on white | 6 pt | Legal and control text only |
| Body text | 9 pt | Below this, readability fails before the press does |
| **Reversed type (white on colour)** | **8 pt** | Ink spread closes counters; below 8 pt reversed type fills in |
| **Reversed type weight** | **Medium or heavier** | **Light and Regular weights are never reversed** — the stems close |
| Coloured type on a coloured field | **10 pt** | Two 4-colour builds knocking out of each other fringe at small sizes. Below 10 pt, reversed type is **white**, never a second colour |
| Type on photography | 10 pt, Medium or heavier | Over a composited scrim only |

**Audit against the current type scale:** all specified settings comply. The smallest reversed
setting is the table header at 8.5 pt Saira SemiBold — clear of both thresholds. The cover
descriptor at 13 pt Signal Cyan on navy is clear of the 10 pt coloured-on-coloured limit.

### 5.2 Minimum rule weights — corrected

Stages 1 and 2 specified **0.3 pt hairlines. That is below safe press minimum** and would print
broken or invisible. Corrected:

| Rule type | Was | **Now** | Reason |
|---|---|---|---|
| Hairline, single colour | 0.25 pt | **0.3 pt** | 0.25 pt = 0.088 mm, below reliable ink transfer |
| Rule in a multi-colour build | 0.25 pt | **0.5 pt** | Registration tolerance causes fringing below 0.5 pt |
| Reversed rule (white on colour) | 0.25 pt | **0.5 pt** | Ink spread closes reversed lines |
| Table row separator | 0.25 pt | **0.3 pt**, 100 K | — |
| Footer and grouping rules | 1 pt | 1 pt | Unchanged |
| Section rule | 3 pt | 3 pt | Unchanged |

**This change propagates to** `09_Components.md` (C06, C08, C14, C15, C18, C23, C24) and
`07_Diagram-Style.md` §8. Every 0.25 pt in the system becomes 0.3 pt, and every reversed or
multi-colour rule becomes 0.5 pt.

### 5.3 Other press-typography rules

| Rule | Specification |
|---|---|
| Font handling | All fonts embedded in the PDF. Outlining is a fallback, not the plan — outlined text cannot be corrected at the printer |
| Tracking on reversed type | +5 units, compensating for optical closure |
| Justification | Prohibited — unchanged from Stage 1 |
| Hyphenation across a spread | No hyphen on the last line of a recto |
| Widow and orphan control | Minimum two lines, enforced |

---

## 6. Image specification

### 6.1 Resolution requirements at final size

**300 dpi minimum at placed size**, non-negotiable. Pixel dimensions required per layout:

| Layout | Placed size | **Minimum pixels** | Position |
|---|---|---|---|
| **L1 — Full bleed, single page** | 216 × 303 mm | **2551 × 3579** | Dividers, MD portrait |
| **L1s — Full bleed, spread** | 426 × 303 mm | **5031 × 3579** | Delivery lifecycle band |
| **L2 — Band** | 170 × 90 mm | **2008 × 1063** | Section openers |
| **L3 — Half** | 83 × 110 mm | **980 × 1299** | Narrative support |
| **L4 — Quarter** | 54 × 45 mm | **638 × 531** | Service spreads |
| **L5 — Inset** | 54 × 68 mm | **638 × 803** | Case studies |
| **Executive portrait** | 54 × 68 mm | **638 × 803** | Team spread |

**Line art and logos: 1200 dpi minimum, or vector.** Never upsample. An image that does not meet
the requirement is replaced, recropped smaller, or the layout changes — it is never scaled up.

### 6.2 Image preparation

| Parameter | Specification |
|---|---|
| Working file | 16-bit Adobe RGB, layered PSD |
| Delivery format | **CMYK TIFF**, 8-bit, LZW, flattened, no alpha, no layers |
| Profile | FOGRA39 embedded |
| Sharpening | Output sharpening applied **after** resampling to final size, tuned for coated stock |
| Ink limit | 300% TAC, verified per image |
| Shadow detail | No channel below 5% — pure 0% shadows plug on press |
| Highlight detail | No channel above 95% in significant areas — 100% highlights blow out |
| Scrim compositing | Any navy scrim baked in at this stage (§4.2) |
| Naming | `img-p<page>-<slug>-cmyk.tif` |

### 6.3 The logo — now a critical path item

The supplied `aurilogo.png` is **1536 × 1024 raster with no alpha channel**. Against press
requirements:

| Requirement | Status |
|---|---|
| 300 dpi at 72 mm cover placement | ⚠ Marginal — 981 px of ink across 72 mm = 346 dpi. Passes, barely |
| Vector for crisp edges beside vector type | ❌ **Fails** — raster edges are visible against sharp type on coated stock |
| Transparency for navy cover and 7 dividers | ❌ **Fails** — cannot be knocked out |
| Gradient as a stepped vector blend | ❌ **Fails** — a raster gradient will band and posterise |
| CMYK conversion control | ❌ **Fails** — no control over how the gradient separates |

**The vector rebuild moves from "recommended" to a blocker.** The logo cannot go to press in its
current form. It appears on the final assembled profile including both covers — the two most scrutinised
surfaces in the publication.

Specification for the rebuild is `08_Logo-and-Identity.md` §1: the 3 : 5 apex slope, the 1 u modular
spacing, the five sampled colour values. Deliverables: five lockup versions × five colour variants,
as `.ai` and `.svg`, plus the gradient rebuilt as a stepped vector blend.

---

## 7. Stock and finishing

Recommendation, for confirmation with the printer.

| Component | Specification |
|---|---|
| **Text** | 150 gsm matt coated, FSC certified, high white |
| **Cover** | 300 gsm matt coated, FSC certified |
| **Cover finish** | **Matt lamination**, both sides, 1.2 mil |
| **Cover enhancement** | Spot UV on the apex symbol and the arc, front cover only |
| **Binding** | PUR perfect bound |
| **Endpapers** | None at this extent |

### Why matt, not gloss

The design system is flat, typographic and navy-dominant. Gloss lamination on a large dark field
shows every fingerprint and reflects overhead lighting into the reader's eye — actively worse in the
boardroom and committee-room settings this document is made for. Matt reads as more considered and
photographs better.

### Spot UV — the one recommended embellishment

A gloss spot UV varnish on the apex symbol and the cover arc, against a matt-laminated navy field,
produces a tactile, high-value effect visible only at an angle. It costs comparatively little,
requires no additional colour pass, and is the single most cost-effective way to signal that this is
a considered publication rather than a printed file.

**Requires:** a separate spot-UV artwork layer, 100 K, named `SpotUV`, set to overprint. Minimum
element size 2 mm; no fine detail below 0.5 mm.

### Environmental

FSC-certified stock and vegetable-based inks are specified. This is not decoration — it is directly
citable in the environmental responsibility section (6.6) and in tender responses that score
environmental criteria.

---

## 8. Output specifications

| Output | Specification |
|---|---|
| **Press** | **PDF/X-4:2010** · FOGRA39 · 3 mm bleed · crop, bleed, registration marks and colour bars · fonts embedded · 300 dpi images · TAC ≤ 300% · no transparency · no spot colours (unless 5-colour specified) · single-page, not spreads |
| **Screen** | PDF 1.7 · sRGB · 150 dpi · tagged and accessible · bookmarks from headings · live hyperlinks · fast web view |
| **Tender** | Screen variant, flattened, no interactive elements, **under 10 MB** — many procurement portals cap upload size and reject interactive PDFs |
| **Word** | `.docx`, Brand and Safe variants, per `03_Typography.md` §3 |

**Press PDF is exported as single pages, not reader spreads.** Imposition is the printer's
responsibility; supplying pre-imposed spreads prevents correct plate layout and is a common and
expensive error.

---

## 9. Preflight checklist

Run before every press submission. A failure at any point stops the submission.

**Colour**
- [ ] Document colour space is CMYK; no RGB objects remain
- [ ] No spot colours, except `SpotUV` where specified
- [ ] Total area coverage ≤ 300% on every element and image
- [ ] All type below 24 pt is 100 K, not rich black
- [ ] No registration black in artwork
- [ ] White objects do not overprint

**Geometry**
- [ ] 3 mm bleed on every bleeding element — no element stopping at trim
- [ ] No critical content inside the 8 mm safety margin
- [ ] No critical content within 10 mm of the spine
- [ ] Page count 55–65, divisible by 4
- [ ] Exported as single pages, not spreads

**Images**
- [ ] Every image ≥ 300 dpi at placed size; line art ≥ 1200 dpi
- [ ] All images CMYK with FOGRA39 embedded
- [ ] No image scaled above 100% in the layout
- [ ] All links present, current and not modified

**Type and rules**
- [ ] All fonts embedded
- [ ] No reversed type below 8 pt, and none in Light or Regular weight
- [ ] No coloured type below 10 pt on a coloured field
- [ ] No rule below 0.3 pt; no reversed or multi-colour rule below 0.5 pt

**Transparency**
- [ ] No live transparency, opacity below 100%, or blend modes anywhere
- [ ] All tints are solid builds per §4.1
- [ ] Scrims composited into images, not applied in the layout

**Document**
- [ ] Zero `To be confirmed during final production` remaining
- [ ] All cross-references resolve
- [ ] Contents matches final pagination
- [ ] Spine width confirmed against the printer's paper caliper

---

## 10. Proofing workflow

| Stage | Proof | Purpose | Sign-off |
|---|---|---|---|
| 1 | **Soft proof** — calibrated display, FOGRA39 simulation | Layout and colour review | Design |
| 2 | **Digital contract proof** — Fogra-certified, on the specified stock, with control strip | **The colour reference.** Settles the Part Seven ramp question (§3.2) | Client |
| 3 | **Imposition proof** (plotter) | Page order, pagination, folding, spine | Client |
| 4 | **Wet proof or press pass** | Optional. Recommended for runs above 1 000 | Client |

**The contract proof is the contractual colour reference, not the screen.** No colour decision in
this project is settled on a monitor — including the one open question about Part Seven.

---

## 11. What changes in the existing specification

| File | Change |
|---|---|
| `02_Colour-Palette.md` | CMYK gamut analysis added; flattened tint builds replace percentage opacity |
| `04_Grid-and-Spacing.md` | Safety margin 5 → 8 mm; spine allowance 10 mm; slug area added |
| `09_Components.md` | All 0.25 pt rules → 0.3 pt; reversed and multi-colour rules → 0.5 pt; all tint percentages → solid builds |
| `07_Diagram-Style.md` | Rule weights corrected; node fills as solid builds |
| `06_Photography-and-Illustration.md` | CMYK TIFF delivery; pixel requirements per position; scrim compositing |
| `08_Logo-and-Identity.md` | Vector rebuild escalated to blocker |
| `01_Project/06_Production-Conventions.md` | Tool chain: InDesign master, Word derivative |
| `01_Project/00_Project-Charter.md` | P4 restated — editability is delivered in the Word derivative, not the press master |
