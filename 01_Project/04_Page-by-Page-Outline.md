# Page-by-Page Outline
## Auris Nexus Technologies (Pty) Ltd — Corporate Profile · 112 pp · A4 portrait

**Document:** `01_Project/04_Page-by-Page-Outline.md`
**Stage:** 1 — Project Planning
**Status:** Draft for approval

This is the production blueprint. Every page is assigned a layout archetype, a content payload, its
visual assets and its Font Awesome icon mappings. No page in the publication is improvised.

---

## 1. Layout archetypes

Eleven archetypes cover all 112 pages. Restricting the document to a fixed set of layouts is what
produces rhythm; a document with a different layout on every page reads as chaotic regardless of how
good each page is individually. Grid references are to the 12-column system defined in
`07_Branding/04_Grid-and-Spacing.md`.

| Code | Archetype | Columns used | Applied to |
|---|---|---|---|
| **A** | Full-bleed cover | 12 (bleed) | Front cover, back cover |
| **B** | Part divider | 12 (bleed), navy field | 7 part dividers |
| **C** | Narrative single | 7 text + 4 sidebar + 1 margin | Most one-page sections |
| **D** | Narrative spread | 7+4 verso, 7+4 recto | Two-page narrative sections |
| **E** | Card grid | 12 → 2×2, 3×2 or 3×3 cards | Values, services overview, advantages |
| **F** | Diagram page | 12, diagram in 9, legend in 3 | Process, architecture, lifecycle |
| **G** | Table page | 12 full-width table | Comparison, statistics, SLA |
| **H** | Service spread | Fixed 10-block template | 2.1–2.8 |
| **I** | Fact panel | 12, tinted field, 3-column data | At a glance, capability statement |
| **J** | Portrait grid | 12 → 2×3 or 3×2 portrait cards | Executive team, partners |
| **K** | Editorial image | Full-bleed image + inset text panel | MD message, case studies, part openers |

---

## 2. Front matter — pp. 1–8

| Page | Section | Archetype | Payload | Visual | Icons |
|---|---|---|---|---|---|
| 1 | **Front cover** | A | Logo (primary stacked, reversed, 72 mm) · `CORPORATE PROFILE` · tagline · `EDITION 1 · 2026` | Full-bleed Nexus Navy; apex silhouette in Apex Field `#002C56` (solid), lower right, bleeding two edges; single 1.5 pt cyan arc. No photograph. Full spec: `07_Branding/09_Components.md` C01 | — |
| 2 | **Inside front cover** | C | Legal notice · confidentiality statement · document control table · edition, revision, date, owner · copyright | Flat Paper ground, hairline rules only | `fa-circle-info` |
| 3 | **How to use this document** | C | Three-layer reading model explained · reader-routing table · navigation key (colour coding, thumb index, cross-references) | Small key diagram showing a schematic spread with callouts | `fa-book-open`, `fa-compass` |
| 4–5 | **Contents** | I | Part-coded four-column contents grid · reader-routing sidebar on p.5 | Seven part colour bars | Part icons (see §7) |
| 6–7 | **Managing Director's message** | K | 550–650 words, signed · portrait · signature block · pull-quote | Environmental portrait of MD, verso, full-bleed to gutter; text panel on recto | `fa-quote-left` |
| 8 | **Company at a glance** | I | Registered name · registration number · VAT · tax status · B-BBEE level · founded · head office · footprint · sectors · employees · service lines · contact | Tinted Mist field, 3-column data grid, hairline separators | `fa-building`, `fa-id-card`, `fa-location-dot` |

---

## 3. Part One — The Company — pp. 9–22

| Page | Section | Archetype | Payload | Visual | Icons |
|---|---|---|---|---|---|
| 9 | Part divider | B | `PART ONE` · `THE COMPANY` · part contents · standfirst | Navy field, cyan rule, thumb tab position 1 | `fa-building-columns` |
| 10 | 1.1 Executive summary | C | The entire document in one page: who, what, for whom, why, proof. Written last | Three inline stat figures | `fa-file-lines` |
| 11 | 1.2 Company overview | C | Legal form, ownership, structure, footprint, scale, operating regions | Small SA map with office markers | `fa-sitemap` |
| 12 | 1.3 Our story | C | Founding rationale, trajectory, milestones | Horizontal milestone timeline, lower third | `fa-timeline` |
| 13 | 1.4 Vision and mission | C | Vision statement · mission statement · the distinction made explicit | Two-panel split, cyan keyline | `fa-eye`, `fa-bullseye` |
| 14–15 | 1.5 Core values | E | Five to six values. Each: name · one-line definition · **operational test** ("how you will see this in our work") | 2×3 card grid across the spread | One per value (see §7) |
| 16 | 1.6 Business philosophy | C | How the company thinks about client problems; the position on partnership vs. supply | Simple three-stage schematic | `fa-lightbulb` |
| 17 | 1.7 Corporate identity and brand promise | C | Name derivation (*auris* — to listen; *nexus* — to connect) · mark meaning · the single promise | Wordmark construction diagram, clear-space rules | `fa-fingerprint` |
| 18–19 | 1.8 Why Auris Nexus Technologies | D | Six differentiators, each with its evidence mechanism. No unsupported superlatives | Comparison figure: conventional supplier vs. this engagement model | `fa-circle-check` |
| 20–21 | 1.9 Competitive advantages | E | Structural advantages — senior-only delivery, principal access, sector fluency, integration depth, local presence, transparent commercials | 2×3 card grid | Per advantage |
| 22 | 1.10 Our operating model | F | How the business actually runs: capability units, delivery pods, governance layer, partner network | Operating-model diagram, three tiers | `fa-diagram-project` |

---

## 4. Part Two — Services — pp. 23–42

### The service spread template (archetype H)

Every service spread carries the identical ten blocks in the identical positions. This is the single
most important consistency decision in the document: it makes services comparable, prevents the
strongest service from being over-written and the weakest from being under-specified, and it means a
reader who has read one service spread can navigate all eight.

```
VERSO (even page)                          RECTO (odd page)
┌────────────────────────────┐             ┌────────────────────────────┐
│ ① Service title + number   │             │ ⑥ Typical deliverables     │
│ ② Standfirst (40–55 words) │             │    (checklist, 6–8 items)  │
│                            │             │                            │
│ ③ Description              │             │ ⑦ Technologies used        │
│    (2 paragraphs, Layer 3) │             │    (chip row, from 4.0)    │
│                            │             │                            │
│ ④ Problems this solves     │             │ ⑧ Ideal client profile     │
│    (3–4 pain statements)   │             │                            │
│                            │             │ ⑨ Expected outcomes        │
│ ⑤ Business benefits        │             │    (measurable, 3–4)       │
│    (4 benefit statements)  │             │                            │
│                            │             │ ⑩ Industries served        │
│ [service icon, large]      │             │    (icon row, links to P3) │
└────────────────────────────┘             └────────────────────────────┘
      supporting image, lower verso              fact callout, lower recto
```

| Page | Section | Payload note |
|---|---|---|
| 23 | Part divider | Thumb tab position 2 |
| 24–25 | 2.0 Service portfolio | Service taxonomy diagram: all eight services mapped against the client value chain (Advise → Build → Run). Establishes that the portfolio is a system, not a list |
| 26–27 | 2.1 ICT Advisory and Digital Transformation | Template H |
| 28–29 | 2.2 Custom Software Development | Template H |
| 30–31 | 2.3 Enterprise Management Systems | Template H |
| 32–33 | 2.4 Business Process Automation | Template H |
| 34–35 | 2.5 Web Design and Development | Template H |
| 36–37 | 2.6 Mobile Application Development | Template H |
| 38–39 | 2.7 Experience Design | Template H |
| 40–41 | 2.8 Cloud, Integration and Managed Support | Template H |
| 42 | 2.9 Engagement models | Fixed-price · time and materials · managed service · retained advisory · outcome-based. Table with risk allocation, suitability and typical duration per model |

> **Confirmed at Stage 3.** Thirteen services organised into eight families — see
> `02_Information-Architecture.md` §4, Part Two. Every service is named on its family spread.

---

## 5. Part Three — Industries — pp. 43–58

Each cluster spread carries the same four-part structure per industry: **Challenges · Solutions ·
Business value · Technology opportunities**, so every one of the fifteen mandated industries is
addressed in full.

| Page | Section | Archetype | Payload | Icons |
|---|---|---|---|---|
| 43 | Part divider | B | Thumb tab position 3 | `fa-layer-group` |
| 44–45 | 3.0 Sector coverage | F | Fifteen-sector map: sectors × service lines matrix showing where the company operates and at what depth | — |
| 46–47 | 3.1 Public sector | D | Government · municipalities · SOEs. Regulatory context: PFMA, MFMA, SITA procurement, Treasury regulations | `fa-landmark`, `fa-city`, `fa-building-flag` |
| 48–49 | 3.2 Knowledge and human services | D | Education · healthcare. Context: student systems, research computing, POPIA in clinical data, NHI readiness | `fa-graduation-cap`, `fa-hospital` |
| 50–51 | 3.3 Financial services | D | Banking · insurance. Context: SARB, FSCA, FAIS, core system modernisation, fraud analytics | `fa-building-columns`, `fa-umbrella` |
| 52–53 | 3.4 Industrial and resources | D | Mining · manufacturing · construction. Context: OT/IT convergence, MHSA compliance, plant telemetry | `fa-gem`, `fa-industry`, `fa-helmet-safety` |
| 54–55 | 3.5 Commerce and movement | D | Retail · logistics · transport. Context: omnichannel, fleet telematics, warehouse systems | `fa-cart-shopping`, `fa-truck-fast`, `fa-route` |
| 56–57 | 3.6 Property, security and professional services | D | Property · security · professional services · SMEs | `fa-house-chimney`, `fa-user-shield`, `fa-briefcase`, `fa-store` |
| 58 | 3.7 Sector engagement and procurement routes | G | Table: how the company can be contracted per sector — open tender, RFQ, panel, transversal contract, direct appointment, framework | `fa-file-signature` |

---

## 6. Parts Four to Seven and Closing

### Part Four — Technical Capabilities — pp. 59–72

| Page | Section | Archetype | Payload | Icons |
|---|---|---|---|---|
| 59 | Part divider | B | Thumb tab 4 | `fa-microchip` |
| 60–61 | 4.0 Technology stack | F | Layered stack diagram: presentation → application → integration → data → platform → infrastructure → security (vertical). Named technologies at each layer | — |
| 62 | 4.1 Software engineering | C | Languages, frameworks, engineering standards, code quality regime | `fa-code` |
| 63 | 4.2 Architecture | C | Solution, enterprise, integration architecture; TOGAF/ArchiMate posture | `fa-drafting-compass` |
| 64 | 4.3 Cloud and infrastructure | C | Hyperscaler positions, hybrid, migration patterns, landing zones | `fa-cloud` |
| 65 | 4.4 Cybersecurity | C | Defensive posture, controls, testing, incident response | `fa-shield-halved` |
| 66 | 4.5 DevOps and platform engineering | C | CI/CD, IaC, observability, release engineering | `fa-infinity` |
| 67 | 4.6 Data platforms and databases | C | RDBMS, NoSQL, warehousing, lakehouse, modelling | `fa-database` |
| 68 | 4.7 Artificial intelligence | C | Applied AI, document intelligence, forecasting, responsible-use position | `fa-brain` |
| 69 | 4.8 Automation | C | RPA, workflow, process orchestration | `fa-gears` |
| 70 | 4.9 Integration and APIs | C | API design, ESB/iPaaS, event streaming, legacy interfacing | `fa-plug-circle-bolt` |
| 71 | 4.10 BI, analytics and reporting | C | Reporting layer, self-service BI, executive dashboards | `fa-chart-line` |
| 72 | 4.11 Capability comparison | G | Two editable tables: capability maturity by domain; technology selection criteria by scenario | `fa-table-list` |

### Part Five — Project Delivery — pp. 73–84

| Page | Section | Archetype | Payload | Icons |
|---|---|---|---|---|
| 73 | Part divider | B | Thumb tab 5 | `fa-diagram-project` |
| 74–75 | 5.0 Delivery lifecycle | F | **Master diagram** spanning the spread: 15 phases in 5 stages, with gates, artefacts and roles. Every later section references it | — |
| 76 | 5.1 Discovery, requirements, planning | C | Phases 1–3, inputs/outputs/gate criteria | `fa-magnifying-glass-chart` |
| 77 | 5.2 Analysis, architecture, UI/UX | C | Phases 4–6 | `fa-pen-ruler` |
| 78 | 5.3 Development | C | Phase 7, sprint model, definition of done | `fa-code-branch` |
| 79 | 5.4 Testing, QA, security testing | C | Phases 8–10, test pyramid, security gate | `fa-vial-circle-check` |
| 80 | 5.5 Deployment and training | C | Phases 11–12, cutover, change management | `fa-rocket` |
| 81 | 5.6 Support and maintenance | C | Phases 13–14, support tiers | `fa-headset` |
| 82 | 5.7 Continuous improvement | C | Phase 15, service review cadence | `fa-arrows-rotate` |
| 83 | 5.8 Delivery governance | F | RACI matrix, escalation path, reporting cadence | `fa-scale-balanced` |
| 84 | 5.9 Service level framework | G | Editable SLA table: severity, response, restoration, availability, reporting | `fa-stopwatch` |

### Part Six — Business Excellence — pp. 85–94

| Page | Section | Archetype | Icons |
|---|---|---|---|
| 85 | Part divider | B | `fa-award` |
| 86 | 6.0 Excellence framework | F | `fa-sitemap` |
| 87 | 6.1 Quality management | C | `fa-circle-check` |
| 88 | 6.2 Risk and business continuity | C | `fa-triangle-exclamation` |
| 89 | 6.3 Governance and compliance | C | `fa-gavel` |
| 90 | 6.4 POPIA and information security | C | `fa-lock` |
| 91 | 6.5 Occupational health and safety | C | `fa-helmet-safety` |
| 92 | 6.6 Environmental responsibility | C | `fa-leaf` |
| 93 | 6.7 CSR and transformation | C | `fa-handshake-angle` |
| 94 | 6.8 Innovation | C | `fa-lightbulb` |

### Part Seven — Credentials — pp. 95–108

| Page | Section | Archetype | Payload | Icons |
|---|---|---|---|---|
| 95 | Part divider | B | Thumb tab 7 | `fa-certificate` |
| 96–97 | 7.1 Capability statement | I | The single most-extracted spread. Self-contained: who, what, sectors, credentials, contact. Designed to work as a standalone 2-pager | `fa-file-shield` |
| 98 | 7.2 Registration and legal status | C | Registered name, number, form, directors, CIPC status | `fa-id-card` |
| 99 | 7.3 Tax compliance | C | Tax number, compliance status, VAT, PIN validity | `fa-receipt` |
| 100 | 7.4 B-BBEE and transformation | C | Level, scorecard elements, ownership, validity, verification agency | `fa-chart-pie` |
| 101 | 7.5 Professional memberships | C | Bodies, membership numbers, status | `fa-users-line` |
| 102 | 7.6 Certification roadmap | F | **Future-tense, explicitly labelled.** ISO 27001, ISO 9001, CMMI targets with dates | `fa-road` |
| 103 | 7.7 Company statistics | I | Statistics panel — only measured figures | `fa-chart-simple` |
| 104–105 | 7.8 Executive team | J | 4–6 leaders: portrait, role, qualifications, tenure, 40-word biography | `fa-user-tie` |
| 106 | 7.9 Partners and alliances | J | Partner logos with tier stated; no implied relationships | `fa-handshake` |
| 107 | 7.10 Case studies | K | 5 studies (drafted 2026-09-13, Logistics App added at Stage 8A, see `02_Content/part-7/7-10-case-studies.md`): what was built and how far it has reached toward commercial use. Client naming confirmed by user-supplied external consent, recorded in the Fact and Claim Verification Registers | `fa-folder-open` |
| 108 | 7.11 Client recognition | C | Testimonials (attributed or omitted) and awards. Placeholder-marked until supplied | `fa-comment-dots` |

### Closing — pp. 109–112

| Page | Section | Archetype | Payload |
|---|---|---|---|
| 109 | 8.1 How to engage us | C | Contracting routes, supplier onboarding, vendor number process, response times, proposal turnaround |
| 110 | 8.2 Contact directory | I | Head office, regional offices, switchboard, tender desk, key contacts by function |
| 111 | Inside back cover | C | Document control, revision history, disclaimer, confidentiality, prepared-by |
| 112 | Back cover | A | Wordmark, registered name and number, contact block, single-line brand promise. Navy field |

---

## 7. Icon register — Font Awesome 6

All icons are drawn from **Font Awesome 6 Pro, Sharp Regular** weight, at a uniform 1.5 px stroke,
rendered in Auris Cyan or reversed white. Free-tier equivalents (`Free Solid`) are listed for
production environments without a Pro licence.

| Use | FA6 Pro Sharp Regular | Free fallback |
|---|---|---|
| Part 1 — Company | `fa-building-columns` | `fa-building` |
| Part 2 — Services | `fa-grid-2-plus` | `fa-th-large` |
| Part 3 — Industries | `fa-layer-group` | `fa-layer-group` |
| Part 4 — Technical | `fa-microchip` | `fa-microchip` |
| Part 5 — Delivery | `fa-diagram-project` | `fa-project-diagram` |
| Part 6 — Excellence | `fa-award` | `fa-award` |
| Part 7 — Credentials | `fa-certificate` | `fa-certificate` |

Full icon register — approximately 90 icons across services, industries, values, capabilities and
components — is compiled at Stage 2 into `04_Icons/icon-register.md`. Icon style rules are specified
in `07_Branding/05_Iconography.md`.

---

## 8. Photography plan

Sixteen photographic positions across 112 pages. Deliberately restrained: photography is used where
it carries meaning, not as page filler. Full art direction in
`07_Branding/06_Photography-and-Illustration.md`; shot list issued at Stage 10.

| # | Page | Subject | Treatment |
|---|---|---|---|
| 1 | 6–7 | Managing Director, environmental portrait | Full-bleed verso |
| 2 | 12 | Founding-era or office establishing shot | Half-page |
| 3 | 18–19 | Team in working session, unposed | Full-bleed band |
| 4 | 23 | Part 2 divider texture | Navy duotone |
| 5–12 | 26–41 | One per service spread — the work, not the technology | Quarter-page, lower verso |
| 13 | 43 | Part 3 divider — South African built environment | Navy duotone |
| 14 | 74–75 | Delivery team at a planning wall | Background band, 15% overlay |
| 15 | 104–105 | Executive portraits × 4–6 | Consistent studio treatment |
| 16 | 107 | Case study context imagery | Inset |

---

## 9. Editable-object register

Per Charter principle P4, nothing a client may need to update is delivered as a flattened image.

| Object | Page | Word implementation |
|---|---|---|
| Operating model | 22 | Grouped shapes, native |
| Service taxonomy | 24–25 | Grouped shapes, native |
| Sector × service matrix | 44–45 | Native Word table, styled |
| Technology stack | 60–61 | Grouped shapes, native |
| Capability maturity | 72 | Native table |
| Technology selection criteria | 72 | Native table |
| Delivery lifecycle | 74–75 | Grouped shapes, native |
| RACI matrix | 83 | Native table |
| SLA framework | 84 | Native table |
| Excellence framework | 86 | SmartArt or grouped shapes |
| Certification roadmap | 102 | Grouped shapes on a time axis |
| Statistics panel | 103 | Native text frames + native charts |
| Milestone timeline | 12 | Grouped shapes |

---

## 10. Open items carried to later stages

| Item | Resolved at | Blocking |
|---|---|---|
| Confirmed service list (8 slots provisioned) | Fact Register C1 | Stage 4 |
| Confirmed value set (5–6 slots provisioned) | Fact Register B4 | Stage 3 |
| Executive team composition (4–6 slots) | Fact Register E1 | Stage 9 |
| Case study availability and consent | Fact Register F1 | Stage 9 |
| Partner tiers held | Fact Register E4 | Stage 9 |
| Final pagination lock | Stage 11 | — |
