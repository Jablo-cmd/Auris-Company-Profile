# Logo and Corporate Identity System
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/08_Logo-and-Identity.md`
**Stage:** 2 — Document Design System
**Status:** Draft for approval · **authoritative source for all brand decisions**
**Source asset:** `03_Images/aurilogo.png` — 1536 × 1024 px, RGB, no alpha channel

> **Stage 10 note (2026-09-14).** The tagline baked into this raster —
> "Connecting innovation. Delivering impact." — was retired by explicit owner confirmation
> (Loyiso Ngcala); the current tagline is **"Transforming Businesses Through Technology"**
> (Fact Register A3, CVR-043). `aurilogo.png` itself was not edited and still shows the former
> tagline in its pixels. A cropped derivative, `03_Images/aurilogo-no-tagline.png`, removes only
> that text band — nothing was added or redrawn — and approximates the **Standard stacked, no
> tagline** version already specified in §2 below. No artwork carrying the new tagline exists;
> see the new gap **G8** in §8.

---

## 1. Analysis of the supplied mark

The logo is the authority for this brand system. Everything in the design system is derived from
measurements taken from the supplied file rather than from preference. Measurements below are in
source-file pixels; ratios are what carry forward.

### 1.1 Composition

The lockup is a **stacked, five-element vertical composition**:

| Element | Band (y) | Height | In modular units |
|---|---|---|---|
| Symbol — the apex mark with orbit | 59 – 496 | 437 px | 9.3 u |
| `AURIS` — primary wordmark | 547 – 690 | 143 px | 3.0 u |
| `NEXUS` — secondary wordmark, rule-flanked | 737 – 784 | 47 px | **1.0 u (the base unit)** |
| `TECHNOLOGIES` — descriptor | 824 – 854 | 30 px | 0.64 u |
| `Connecting innovation. Delivering impact.` — **former tagline, retired Stage 10 (§1.4)** | 897 – 916 | 19 px | 0.40 u |

Total ink area: **981 × 858 px**, aspect ratio **1.143 : 1** — near-square, marginally landscape.

Inter-element gaps measure 51 / 47 / 40 / 43 px — consistent at approximately **1 u**. The
composition is therefore already built on a modular system, and the design system adopts that unit
rather than imposing a different one.

**The base unit `u` is defined as the cap height of `NEXUS`.** All identity spacing derives from it.

### 1.2 Geometry of the symbol

The symbol is a stylised **A**: a solid navy apex intersected by an orbital arc that sweeps from
lower-left, around the right flank, and terminates at the apex's upper right.

Measured across scanlines y = 110 to y = 430, both flanks hold a constant slope:

```
dx / dy  =  0.600  =  3 : 5   →   31.0° from vertical
apex angle  =  61.9°
```

The 3 : 5 slope is exact and consistent across the full height of the mark. **This is the single
most important geometric finding in the analysis**, and it becomes the governing angle of the entire
design system (see `01_Design-Language.md` §5).

For construction the angle is normalised to **31°** and expressed as the 3 : 5 rise-over-run ratio,
which is exactly drawable in Word, Illustrator and any CAD-derived tool, snaps predictably to the
5 mm grid, and is visually indistinguishable from the measured 30.96°.

### 1.3 Colour construction

The mark uses a **navy solid** plus a **cyan-to-blue gradient** running along the orbit. Sampling the
flat, non-gradient applications — the `AURIS` wordmark and the `NEXUS` and `IMPACT.` settings — gives
the authoritative brand values. Full analysis in `02_Colour-Palette.md`.

| Role | Sampled from | Value |
|---|---|---|
| Primary navy | `AURIS` wordmark (largest flat area, 3 541 modal pixels) | `#001A48` |
| Brand cyan | `NEXUS` wordmark | `#098FB4` |
| Highlight cyan | `IMPACT.` and orbit peak | `#00B3BF` |
| Orbit mid-blue | Gradient midpoint | `#0B5E9A` |
| Orbit deep blue | Gradient shoulder | `#06488B` |

### 1.4 Verbal identity found in the mark

The supplied file's tagline band reads:

> **Former tagline (retired, Stage 10): "Connecting innovation. Delivering impact."**

This is a measurement of what the raster currently shows, not a statement of current brand fact. It
originally closed Fact Register item **A3**, at Stage 2, from this same file. That resolution has
since been superseded: the current tagline is **"Transforming Businesses Through Technology"**,
owner-confirmed at Stage 10 (Fact Register A3, CVR-043) — no artwork sampling exists for it, because
no artwork containing it exists yet (§8, gap **G8**). The *nexus / connection* reading assumed at
Stage 1 (item **A4**) is unaffected — it is confirmed by the orbit motif itself, independent of
either tagline.

---

## 2. Logo versions

Five versions are required. **Only the primary is currently held**; the remaining four must be
produced before Stage 11 (see §8).

| # | Version | Composition | Use |
|---|---|---|---|
| **1** | **Primary stacked** | Symbol + AURIS + NEXUS + TECHNOLOGIES + tagline | Front cover, back cover, capability statement — **the only held copy of this version carries the retired tagline (§1.4); not usable as-is until re-rendered with the current tagline (G8)** |
| **2** | **Standard stacked** | Symbol + AURIS + NEXUS + TECHNOLOGIES, no tagline | Part dividers, section openers, letterhead — **`03_Images/aurilogo-no-tagline.png` is a cropped-only derivative of the held raster approximating this version; not a produced/vector version of it** |
| **3** | **Horizontal lockup** | Symbol left, wordmark stack right | Document headers, footers, email signature, narrow formats |
| **4** | **Symbol only** | Apex mark alone | Favicon, watermark, folio mark, thumb tabs, social avatar |
| **5** | **Wordmark only** | AURIS NEXUS TECHNOLOGIES, no symbol | Partner walls, co-branded lockups, tight horizontal spaces |

### 2.1 Horizontal lockup construction

Not supplied; specified here for production.

```
┌──────────┐
│          │   AURIS                    ← cap height = 1.5 u
│  SYMBOL  │   ─── NEXUS ───            ← cap height = 0.5 u
│   3 u    │   TECHNOLOGIES             ← cap height = 0.32 u
└──────────┘
     ↑
   symbol height = 3 u; symbol right edge to wordmark left edge = 0.75 u
   wordmark stack is optically centred on the symbol's vertical midpoint
```

---

## 3. Colour variants

| Variant | Symbol | Wordmark | Applied on |
|---|---|---|---|
| **Full colour** | Navy apex, gradient orbit | Navy / cyan as supplied | White and Paper grounds only |
| **Reversed** | White apex, cyan orbit `#00B3BF` | White, with `NEXUS` in `#00B3BF` | Navy grounds — covers, dividers, back cover |
| **Mono navy** | Solid `#001A48` throughout | Solid `#001A48` | Single-colour print, faxed and photocopied tender packs |
| **Mono white** | Solid white | Solid white | Photography, dark imagery, embossing |
| **Mono black** | 100% K | 100% K | Legal filings, statutory forms, stamps |

**Reversed variant — production note.** The gradient orbit must not be reversed by simple inversion.
On navy, the orbit is redrawn as a flat `#00B3BF`, which measures **6.61 : 1** against the navy
ground and reads cleanly. An inverted gradient would collapse into the navy field at its dark end
and lose the arc entirely.

---

## 4. Clear space

**Minimum clear space on all four sides = 1 u**, where `u` is the cap height of `NEXUS` in the
applied lockup.

```
        ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
        │            1u               │
        │      ┌───────────────┐      │
        │  1u  │   THE LOGO    │  1u  │
        │      └───────────────┘      │
        │            1u               │
        └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
```

Within this zone: no type, no rule, no image edge, no page trim, no other mark. On the front cover
the clear space is increased to **2 u** — the cover is the one place where the identity should have
room that is obviously deliberate.

---

## 5. Minimum sizes

Governed by the legibility of the smallest element in each lockup, verified at 300 dpi and on a
150 dpi office laser printer.

| Version | Minimum width | Limiting element |
|---|---|---|
| Primary stacked (with tagline) | **45 mm** | Tagline at 19/858 of lockup height ≈ 1 mm cap |
| Standard stacked | **30 mm** | `TECHNOLOGIES` descriptor |
| Horizontal lockup | **35 mm** | `TECHNOLOGIES` descriptor |
| Symbol only | **8 mm** | Orbit stroke weight |
| Wordmark only | **28 mm** | `TECHNOLOGIES` descriptor |

**Below 45 mm the primary lockup must not be used** — the tagline becomes an unreadable grey smear,
which damages the identity more than omitting it. Use the standard stacked version instead. This is
the most commonly violated rule in any identity system and it is the reason version 2 exists.

### 5.1 Applied sizes in this publication

| Placement | Version | Width |
|---|---|---|
| Front cover | Primary stacked, reversed | 72 mm |
| Back cover | Standard stacked, reversed | 54 mm |
| Part dividers | Symbol only, reversed | 14 mm |
| Page footer, recto | Horizontal lockup, mono navy | 35 mm |
| Capability statement (p. 96) | Standard stacked, full colour | 48 mm |
| Watermark | Symbol only, Mist 25% | 40 mm |

---

## 6. Misuse

Each rule below exists because the supplied artwork makes the corresponding error easy to commit.

| # | Prohibited | Why |
|---|---|---|
| M1 | Stretching or condensing on one axis | The 3 : 5 apex slope is the identity's structural signature; distorting it destroys the geometry every other element in the system is derived from |
| M2 | Rotating the mark | The apex is a gravitational form. Rotated, it reads as an arbitrary triangle |
| M3 | Recolouring outside the specified variants | Particularly: no single-colour cyan version — the navy carries the mark's weight |
| M4 | Re-creating the gradient by hand | The orbit gradient is fixed. It is never re-angled, re-ramped or extended |
| M5 | Applying effects — shadow, glow, bevel, outline, reflection | Prohibited system-wide; see `01_Design-Language.md` §6 |
| M6 | Placing on a busy or mid-tone photograph without a scrim | Contrast falls below legibility; see §7 |
| M7 | Placing on any brand colour other than white, Paper or Nexus Navy | Cyan and blue grounds collapse the orbit into the field |
| M8 | Reconstructing the lockup — moving, rescaling or respacing elements | The 1 u modular relationships are part of the mark |
| M9 | Using the tagline as free-standing text set in a document typeface | It is artwork within the lockup, not a sentence |
| M10 | Boxing, framing or setting the mark in a coloured badge | Prohibited system-wide |
| M11 | Using the primary lockup below 45 mm | Tagline illegibility; see §5 |
| M12 | Adding a strapline, division name or partner mark inside the clear space | Use a co-branding lockup with a 1 u divider rule outside the clear space |

---

## 7. Placement on imagery

| Ground | Treatment |
|---|---|
| Light image, luminance > 70% | Full-colour logo permitted, subject to a measured 4.5 : 1 against the local area |
| Mid-tone image | **Navy scrim at 70%**, then reversed logo |
| Dark image, luminance < 30% | Reversed logo, no scrim, if contrast is verified |
| Busy or high-detail image | Solid navy panel behind the logo. Never a partial or feathered scrim |

Contrast is measured against the darkest and lightest points within the logo's clear-space zone, not
against the image average. An average is not a guarantee.

---

## 8. Production gaps in the supplied asset

Stated plainly, because these affect print quality and must be resolved before Stage 11. None of
them blocks Stage 2 design work.

| # | Gap | Impact | Priority |
|---|---|---|---|
| **G1** | **No vector artwork.** Supplied as a 1536 × 1024 raster | At 300 dpi the file supports a maximum clean placement of ~130 mm. The 72 mm cover placement is within tolerance, but the mark cannot be scaled beyond that, and press output will show soft edges against sharp vector type set alongside it | 🔴 Critical |
| **G2** | **No transparency.** File is RGB with a white background, no alpha | Cannot be placed on the navy cover or divider fields as supplied. A knock-out version is required for every reversed placement in this publication | 🔴 Critical |
| **G3** | **No reversed version** | Required for cover, back cover and all seven dividers | 🔴 Critical |
| **G4** | **No mono version** | Required for photocopied and faxed tender packs, which is a routine occurrence in public-sector procurement | 🟠 High |
| **G5** | **No horizontal lockup** | Required for the running footer | 🟠 High |
| **G6** | **Gradient banding risk.** A cyan-to-blue gradient across a 72 mm cover placement will band on offset press unless supplied as vector with a properly stepped blend | Visible stepping on the cover — the most scrutinised surface in the document | 🟠 High |
| **G7** | **Slight off-white ground.** Background samples at `#FEFEFE`, not pure white | Produces a faint visible panel edge when placed on a pure-white page | 🟡 Standard |
| **G8** | **Tagline baked into the raster is now retired.** The only held lockup with a tagline (§2, version 1) shows "Connecting innovation. Delivering impact.", superseded Stage 10 by "Transforming Businesses Through Technology" (Fact Register A3, CVR-043). No artwork exists with the current tagline; the interim `aurilogo-no-tagline.png` (§1.4, §2) only removes the outdated text, it does not add the new one | Version 1 of the lockup cannot be used on the cover or back cover until re-rendered; every other placement uses version 2 (no tagline) or the symbol/wordmark alone, which this gap does not affect | 🔴 Critical |

### Recommended resolution

Commission a **vector rebuild** of the mark — one designer, roughly half a day. It resolves G1
through G7 in a single pass and yields all five versions in §2 and all five colour variants in §3.
The measurements in §1 of this document are the specification for that rebuild: the 3 : 5 apex
slope, the 1 u modular spacing, and the five sampled colour values. **G8 rides along with this
rebuild** — the brief to the designer must specify the current tagline, "Transforming Businesses
Through Technology", for the tagline-bearing version (§2, version 1), not the retired wording
measured in §1.1/§1.4.

Until the rebuild is delivered, Stage 2 design proceeds against these measurements, and the raster is
used for internal drafts only.

### One further recommendation

Before the mark appears on tender documents, run a **CIPC company-name and trade-mark search** at
CIPC and, if the mark will be used beyond South Africa, a WIPO Global Brand Database check. This is
standard practice for any identity going onto procurement documents; establishing clear title before
the mark is in wide circulation is materially cheaper than establishing it afterwards.

---

## 9. Identity governance

| Rule | Detail |
|---|---|
| Single source | Master artwork lives in `07_Branding/logo/`. No other copy is authoritative |
| No redraws | The mark is never re-created, traced or "cleaned up" for a single application |
| Naming | `an-logo-<version>-<variant>.svg` — e.g. `an-logo-stacked-reversed.svg` |
| Formats per version | SVG (master), EPS (press), PNG at 4× with alpha (office), ICO (favicon) |
| Change control | Any change to the mark invalidates this file, `02_Colour-Palette.md` and every derived motif. It is a Stage 1 decision, not a production one |
