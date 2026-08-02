# Iconography
## Auris Nexus Technologies — Publication Design System

**Document:** `07_Branding/05_Iconography.md`
**Stage:** 1 — Project Planning
**Status:** Draft for approval

---

## 1. Library and weight

| Parameter | Specification |
|---|---|
| Library | **Font Awesome 6 Pro** |
| Style | **Sharp Regular** |
| Free-tier fallback | **Font Awesome 6 Free — Solid** |
| Stroke weight | Uniform, equivalent to 1.5 px at 24 px — never mixed |
| Fill | Outline only in Sharp Regular; the Free Solid fallback is filled |
| Corners | Sharp. The Sharp sub-family is chosen deliberately: rounded icons read as consumer software, sharp icons read as infrastructure |

**Why Sharp Regular.** The `AURIS` wordmark is monolinear with flat, squared terminals and diagonal
cuts (see `08_Logo-and-Identity.md` §1). Font Awesome Sharp Regular shares exactly those
characteristics — uniform stroke, square terminals, geometric construction — so icons, headings and
the logo appear drawn by the same hand. Rounded or Duotone styles break that relationship
immediately, and read as consumer software rather than infrastructure.

### Licensing note

Font Awesome 6 Pro requires a commercial licence for redistribution in a published document. Two
routes are acceptable:

1. Acquire a Font Awesome Pro licence (annual, per-project) and use Sharp Regular throughout.
2. Use **Font Awesome 6 Free (Solid)** — no licence cost, permissible under CC BY 4.0 with
   attribution in the document control block.

Every icon specified in this project carries a Free-tier equivalent, so the design system is
functional under either route. Decision required at Fact Register item **A7**.

---

## 2. Sizes

Only four sizes. Arbitrary icon sizing is the fastest way to make a document look assembled rather
than designed.

| Size | Dimension | Application |
|---|---|---|
| **XL** | 24 mm | Service spread hero icon; part divider mark |
| **L** | 12 mm | Card headers, section markers, capability tiles |
| **M** | 6 mm | Inline with subsection headings, table row markers, industry rows |
| **S** | 3 mm | Inline references, chip prefixes. *Bullets use the 2 mm apex triangle, not an icon* |

Icons are always placed on a 2.5 mm sub-grid and optically centred against their accompanying type —
mathematical centring reads as low by roughly 0.4 mm at these sizes and must be corrected by eye.

---

## 3. Colour

| Context | Icon colour | Ground |
|---|---|---|
| Default, on light | **Auris Cyan** `#098FB4` | White / Paper |
| On navy fields | **White** or **Signal Cyan** `#00B3BF` | Nexus Navy |
| Within tinted panels | **Orbit Deep** `#06488B` | solid Mist |
| De-emphasised / not held | **Slate** `#5A646E` | White |

Auris Cyan measures 3.75 : 1 against white, which clears the WCAG threshold for **graphical objects**
(3 : 1) though not for body text. Icons are graphical objects, so the brand cyan is used at full
strength — no darkened variant is required here. The text restriction applies only to type; see
`02_Colour-Palette.md` §4.

**Single colour only.** No two-tone icons, no gradients, no icons inside coloured circles or
rounded squares — the "icon in a coloured badge" pattern is a template marker and is prohibited.

The Slate treatment is functional, not decorative: on the certification roadmap (p. 102) and the
capability comparison (p. 72), Slate distinguishes *planned* capability from *held* capability at a
glance, supporting the honesty requirement in Charter principle P3.

---

## 4. Construction rules

| Rule | Detail |
|---|---|
| Optical volume | All icons occupy visually equivalent area. `fa-cloud` is optically wider than `fa-lock`; scale to match perceived weight, not bounding box |
| Alignment | Icon baseline aligns to the cap height of adjacent type, not to the type baseline |
| Clear space | Minimum equal to 25% of icon width on all sides |
| Rotation | Prohibited. Icons are never rotated, flipped or mirrored |
| Combination | Prohibited. Icons are never layered, stacked or overlapped to invent new symbols |
| Substitution | If no suitable icon exists, no icon is used. An approximate icon is worse than none |
| Text replacement | Icons never replace text in a heading or label. They accompany it |

---

## 5. Semantic register

Icon meaning is fixed across the document. One concept, one icon, everywhere — a reader who learns
`fa-shield-halved` means security on p. 65 must find the same icon meaning the same thing on p. 90.

### Part markers

| Part | FA6 Pro Sharp Regular | Free Solid fallback |
|---|---|---|
| One — The Company | `fa-building-columns` | `fa-building` |
| Two — Services | `fa-grid-2-plus` | `fa-table-cells-large` |
| Three — Industries | `fa-layer-group` | `fa-layer-group` |
| Four — Technical Capabilities | `fa-microchip` | `fa-microchip` |
| Five — Project Delivery | `fa-diagram-project` | `fa-diagram-project` |
| Six — Business Excellence | `fa-award` | `fa-award` |
| Seven — Credentials | `fa-certificate` | `fa-certificate` |

### Technical capability (Part Four)

| Capability | Icon |
|---|---|
| Software engineering | `fa-code` |
| Architecture | `fa-compass-drafting` |
| Cloud and infrastructure | `fa-cloud` |
| Cybersecurity | `fa-shield-halved` |
| DevOps and platform engineering | `fa-infinity` |
| Data platforms and databases | `fa-database` |
| Artificial intelligence | `fa-brain-circuit` (free: `fa-brain`) |
| Automation | `fa-gears` |
| Integration and APIs | `fa-plug-circle-bolt` (free: `fa-plug`) |
| Business intelligence and analytics | `fa-chart-line` |
| Reporting | `fa-file-chart-column` (free: `fa-chart-column`) |
| Networks | `fa-network-wired` |

### Industry (Part Three)

| Industry | Icon |
|---|---|
| Government | `fa-landmark` |
| Municipalities | `fa-city` |
| State-owned enterprises | `fa-building-flag` (free: `fa-flag`) |
| Education | `fa-graduation-cap` |
| Healthcare | `fa-hospital` |
| Banking | `fa-building-columns` |
| Insurance | `fa-umbrella` |
| Retail | `fa-cart-shopping` |
| Manufacturing | `fa-industry` |
| Construction | `fa-helmet-safety` |
| Mining | `fa-gem` |
| Security | `fa-user-shield` |
| Property | `fa-house-chimney` |
| Logistics | `fa-truck-fast` |
| Transport | `fa-route` |
| SMEs | `fa-store` |
| Professional services | `fa-briefcase` |

### Delivery (Part Five)

| Phase | Icon |
|---|---|
| Discovery | `fa-magnifying-glass-chart` |
| Requirements | `fa-list-check` |
| Planning | `fa-calendar-days` |
| Analysis | `fa-chart-network` (free: `fa-diagram-project`) |
| Architecture | `fa-compass-drafting` |
| UI/UX | `fa-pen-ruler` |
| Development | `fa-code-branch` |
| Testing | `fa-vial` |
| Quality assurance | `fa-clipboard-check` |
| Security testing | `fa-bug-slash` |
| Deployment | `fa-rocket` |
| Training | `fa-chalkboard-user` |
| Support | `fa-headset` |
| Maintenance | `fa-screwdriver-wrench` |
| Continuous improvement | `fa-arrows-rotate` |

### Business excellence (Part Six)

| Domain | Icon |
|---|---|
| Quality management | `fa-circle-check` |
| Risk management | `fa-triangle-exclamation` |
| Governance | `fa-gavel` |
| Compliance | `fa-scale-balanced` |
| Health and safety | `fa-helmet-safety` |
| POPIA | `fa-user-lock` |
| Information security | `fa-lock` |
| Business continuity | `fa-tower-broadcast` |
| Environmental responsibility | `fa-leaf` |
| Corporate social responsibility | `fa-handshake-angle` |
| Innovation | `fa-lightbulb` |

### Credentials (Part Seven) and components

| Item | Icon |
|---|---|
| Registration | `fa-id-card` |
| Tax compliance | `fa-receipt` |
| B-BBEE | `fa-chart-pie` |
| Memberships | `fa-users-line` |
| Certification roadmap | `fa-road` |
| Statistics | `fa-chart-simple` |
| Executive team | `fa-user-tie` |
| Partners | `fa-handshake` |
| Case studies | `fa-folder-open` |
| Testimonials | `fa-comment-dots` |
| Callout — note | `fa-circle-info` |
| Callout — key point | `fa-key` |
| Callout — caution | `fa-triangle-exclamation` |
| Quote mark | `fa-quote-left` |
| Contact | `fa-location-dot`, `fa-phone`, `fa-envelope`, `fa-globe` |

Full compiled register, with page references and export filenames, is produced at Stage 2 into
`04_Icons/icon-register.md`.

---

## 6. Production and editability

Charter principle P4 applies to icons.

| Requirement | Implementation |
|---|---|
| Format | **SVG**, single path where possible, no embedded raster |
| Colour method | `fill="currentColor"` so colour is set by the host style, not baked into the file |
| Word placement | Inserted as SVG (Word 2016+ supports native SVG and converts to editable shapes via *Graphics Format → Convert to Shape*) |
| Naming | `an-icon-<domain>-<name>.svg` — e.g. `an-icon-tech-cybersecurity.svg` |
| Storage | `04_Icons/svg/` with a flat manifest in `04_Icons/icon-register.md` |
| Fallback | A PNG at 4× is exported alongside each SVG for any tool that cannot place vectors |

---

## 7. Prohibited

- Emoji, anywhere, in any context
- Clip art, Office stock illustrations, or Microsoft 365 icon library assets
- Icons from any library other than the specified Font Awesome family
- Mixing Sharp with Classic, Rounded, Duotone or Thin styles
- Skeuomorphic icons — floppy disks, filing cabinets, three-dimensional servers
- Flag icons used as language or country indicators
- Icons carrying meaning that is not also stated in text
- Animated or interactive icons in the PDF derivative
