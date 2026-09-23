# Fact Register and Content Inputs
## Auris Nexus Technologies (Pty) Ltd — Corporate Profile

**Document:** `01_Project/05_Fact-Register.md`
**Stage:** 1 — Project Planning
**Status:** Open — awaiting client input

---

## Why this register exists

This publication is destined for regulated procurement. Under Charter principle **P2**, no
registration number, compliance status, certification, client name, testimonial, award or statistic
will be invented, estimated or illustrated with a plausible-looking specimen. A fabricated credential
in a tender document is not an embellishment — it is grounds for disqualification and, under the
Public Finance Management Act and the Preferential Procurement Policy Framework Act regulations,
potential restriction from future bidding.

Every unknown fact is therefore carried as an explicit token in the form `[[TOKEN_NAME]]`. Tokens
are visible in every draft, are counted at each stage gate, and must resolve to zero before Stage 12
sign-off. A draft that reads cleanly because unknowns were guessed is worse than useless.

**Sections are written to be complete and credible without the facts they are waiting for**, so
drafting proceeds in parallel with fact collection. Nothing below blocks Stage 2.

---

## How to complete this register

Reply with the item reference and the value — for example `A1: Auris Nexus Technologies (Pty) Ltd`.
Partial responses are useful; supply what is available now and the rest as it arrives. Where a fact
does not exist yet (a certification not held, a case study without consent), say so — that is a
valid and useful answer, and it changes how the section is written rather than leaving it hollow.

| Priority | Meaning |
|---|---|
| 🔴 **Critical** | The document cannot be published without it |
| 🟠 **High** | A section will be visibly incomplete without it |
| 🟡 **Standard** | Improves the section; a credible alternative treatment exists |

---

## A — Identity and brand

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| A1 | Full registered name | ✅ **Auris Nexus Technologies** | — | Resolved |
| A2 | Trading name, if different | `[[TRADING_NAME]]` | 🟡 | Stage 3 |
| A3 | Tagline / descriptor line | ✅ **Transforming Businesses Through Technology** | — | Resolved |
| A4 | Meaning intended by "Auris Nexus" — confirm or correct the *listen / connect* derivation used in §1.7 | `[[NAME_MEANING]]` | 🟠 | Stage 3 |
| A5 | Does a brand or identity manual exist? | — | 🟠 | Stage 2 |
| A6 | Logo files (SVG or AI preferred) and existing brand colour values | `[[BRAND_COLOURS]]` | 🔴 | Stage 2 |
| A7 | Font Awesome Pro licence — hold, acquire, or use Free tier? | — | 🟡 | Stage 2 |

> **Note on A6.** If fixed brand colours exist, they replace Nexus Navy and Auris Cyan in
> `07_Branding/02_Colour-Palette.md` only. Every downstream file references colours by name, so this
> is a single-file change that propagates through the whole system.

---

## B — Company foundation

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| B1 | Year founded and founding circumstances | `[[FOUNDED_YEAR]]` | 🔴 | Stage 3 |
| B2 | Founding rationale — the problem the founders set out to address | — | 🟠 | Stage 3 |
| B3 | Existing vision and mission statements | `[[VISION]]` `[[MISSION]]` | 🟠 | Stage 3 |
| B4 | Core values — 5 or 6, with what each means in practice | `[[VALUES]]` | 🟠 | Stage 3 |
| B5 | Milestones for the timeline — 6 to 8, with dates | — | 🟡 | Stage 3 |
| B6 | Ownership structure and shareholding | ✅ **100% owned by Loyiso Ngcala** | — | Resolved |
| B7 | Head office | ✅ **Johannesburg, Gauteng** — street address still required as `[[HEAD_OFFICE_ADDRESS]]` | 🟠 | current credentials review |
| B8 | Geographic operating footprint | `[[FOOTPRINT]]` | 🟠 | Stage 3 |
| B9 | Current headcount, and split between permanent and contract | `[[HEADCOUNT]]` | 🟠 | Stage 3 |

---

## C — Services and capability

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| C1 | **Confirmed service list** | ✅ **13 services, organised into 8 families** — see `02_Information-Architecture.md` §4 | — | Resolved |
| C2 | For each service: what it actually delivers, and one real example | — | 🔴 | Stage 4 |
| C3 | Technologies genuinely worked in — languages, frameworks, platforms, clouds, databases | ⚠ **Confirmed in current Auris-built platforms: React 18, TypeScript, Vite, Tailwind CSS, Supabase/PostgreSQL, Supabase Edge Functions (Deno), Git/GitHub and GitHub Pages. Full current/capable/planned inventory still to be finalised.** | Stage 6 |
| C4 | Technologies **not** worked in, so the document does not overclaim | — | 🟠 | Stage 6 |
| C5 | Engagement models offered — fixed price, T&M, managed service, retainer | — | 🟠 | Stage 4 |
| C6 | Typical project size and duration | — | 🟡 | Stage 4 |
| C7 | Sectors with genuine delivery experience, **distinguished from sectors targeted** | 10 primary markets confirmed; the *experience vs. target* split is still open | 🔴 | Stage 5 |
| C8 | Code quality regime — review gates, test coverage thresholds, static analysis tooling | `[[CODE_QUALITY_REGIME]]` | 🟡 | Stage 6 |
| C9 | Architecture frameworks and standards genuinely applied (e.g. TOGAF, ArchiMate) | `[[ARCHITECTURE_FRAMEWORKS]]` | 🟡 | Stage 6 |
| C10 | Cloud hyperscaler partner-tier status, if any — **must be documentary, independently verifiable** | `[[CLOUD_PARTNER_STATUS]]` | 🟠 | Stage 6 |
| C11 | Security testing regime and incident response process | `[[SECURITY_TESTING_REGIME]]` `[[INCIDENT_RESPONSE_PROCESS]]` | 🟠 | Stage 6 |
| C12 | AI responsible-use / governance policy, if formally documented | `[[AI_GOVERNANCE_POLICY]]` | 🟡 | Stage 6 |
| C13 | Genuine, differentiated self-assessment of capability maturity per technical domain (4.1–4.10) — **not uniformly favourable ratings** | `[[CAPABILITY_MATURITY_RATINGS]]` | 🟡 | Stage 6 |

> **On C4 and C7.** These two negative-space questions do more for the document's credibility than
> any other input. A profile that distinguishes what the company has done from what it can do reads
> as trustworthy; one that blurs them is detected immediately by experienced evaluators.

> **On C3, per client direction (2026-08-02).** Every technology and capability claim in Part Four is
> to be split into three explicit states, not resolved as one undifferentiated stack: **Technologies
> currently used** (genuinely in production), **capable of supporting** (deliverable if engaged, not
> yet proven in production here), and **planned / future roadmap** (intended, not yet built). Until
> C3/C4 resolve, all three remain open tokens per technical domain — see `02_Content/part-4/`.

---

## D — Delivery and operations

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| D1 | Delivery methodology in practice — agile, waterfall, hybrid | — | 🟠 | Stage 7 |
| D2 | Project management framework and any certifications held by staff | — | 🟠 | Stage 7 |
| D3 | Support model, hours of cover, escalation path | — | 🟠 | Stage 7 |
| D4 | Standard SLA terms — severity definitions, response and restoration targets | `[[SLA_TERMS]]` | 🟠 | Stage 7 |
| D5 | Quality management approach and any internal standards | — | 🟡 | Stage 8 |
| D6 | Tooling — project, source control, CI, ticketing, monitoring | — | 🟡 | Stage 7 |
| D7 | Definition of done / quality gate criteria by engagement type | `[[DEFINITION_OF_DONE]]` | 🟡 | Stage 7 |
| D8 | Delivery governance structure — RACI, escalation path, client reporting cadence | `[[RACI_MATRIX]]` `[[REPORTING_CADENCE]]` | 🟠 | Stage 7 |
| D9 | Continuous improvement / service review cadence | `[[REVIEW_CADENCE]]` | 🟡 | Stage 7 |
| D10 | Operational metrics, if genuinely tracked — MTTR, defect rate, deployment frequency | `[[MTTR_TARGET]]` `[[DEFECT_RATE_TARGET]]` `[[DEPLOYMENT_FREQUENCY]]` | 🟡 | Stage 7 |

> **On D4 and D10, per client direction (2026-08-02).** No uptime commitment, response time,
> restoration target or operational metric is stated anywhere in the document — including the Service
> Level Framework table, 5.9 — until formally approved. An empty, honestly labelled table is
> preferable to a populated, unverified one.

---

## E — Credentials and compliance 🔴

Every item in this group is critical. These are the mandatory returnables that determine tender
eligibility, and each must be transcribed from the source document rather than recalled.

| # | Item | Token | Needed by |
|---|---|---|---|
| E1 | Company registration number (CIPC) | ✅ **2026/606690/07** | — | Resolved |
| E2 | Date of incorporation; company type | `[[INCORP_DATE]]` | current credentials review |
| E3 | Directors — full names and identity-document status | `[[DIRECTORS]]` | current credentials review |
| E4 | Income tax reference number | ⚠ **9755014207 — held in company records; do not publish in public repository** | — | Resolved privately |
| E5 | VAT registration number, if registered | `[[VAT_NO]]` | current credentials review |
| E6 | Tax Compliance Status PIN and validity period | `[[TCS_PIN]]` | current credentials review |

> **Correction (2026-08-02, Claim Verification audit).** Sections 1.1 and 1.2 originally stated
> "registered and tax compliant" / "holds a valid Tax Compliance Status" as established fact, with
> only the PIN itself tokenized — asserting the underlying compliance status ahead of E6 resolving.
> Both were corrected to `[[TAX_COMPLIANCE_STATUS]]`, gating the qualitative claim as well as the PIN.
> See Claim Verification Register, `01_Project/07_Claim-Verification-Register.md`, CVR-003/CVR-004.
| E7 | B-BBEE level, verification agency, certificate number, expiry | ⚠ **Level 1 confirmed; verification agency, certificate number and expiry still to be captured from certificate** | current credentials review |
| E8 | Black ownership and black female ownership percentages | `[[OWNERSHIP_PCT]]` | current credentials review |
| E9 | EME / QSE status | `[[ENTERPRISE_SIZE]]` | current credentials review |
| E10 | CSD (Central Supplier Database) registration number | ⚠ **CSD registration confirmed; CSD registration number still to be captured from the company's records** | current credentials review |
| E11 | UIF and COIDA registration and letter of good standing | ⚠ **No COIDA registration currently held**; UIF status not yet confirmed | current credentials review |
| E12 | Professional memberships — body, number, status | ✅ **None currently held** | — | Resolved |
| E13 | Certifications **currently held** — ISO, CMMI, vendor | ✅ **None currently held** | — | Resolved |
| E14 | Certifications **targeted**, with realistic dates | `[[CERTS_PLANNED]]` | current credentials review |
| E15 | Vendor and technology partnerships, with the tier actually held | `[[PARTNERS]]` | current credentials review |
| E16 | Professional indemnity and public liability cover, with values | `[[INSURANCE]]` — values still required | current credentials review |

---

## F — Evidence and people

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| F1 | Case studies — 2 or 3. Context, challenge, approach, measured outcome | ⚠ **Three evidence-based Auris project studies drafted (Funda360, Sebetsa, CIT Employee & Leave Management System); measured business outcomes are intentionally not claimed until separately evidenced** | 🟠 | current credentials review |
| F2 | For each case study: is the client named with **written** permission, or anonymised? | — | 🔴 | current credentials review |
| F3 | Testimonials — full text, with name, role, organisation and consent | ⚠ **Two testimonials supplied; first fully attributed to Jo Anne Hand, Owner and Director, Jo Jackson Dance Co and Promotions. Second testimonial text supplied but attribution/consent details are incomplete.** | current credentials review |
| F4 | Awards or recognition, with awarding body and year | `[[AWARDS]]` | 🟡 | current credentials review |
| F5 | Executive team — 4 to 6. Name, role, qualifications, tenure, short biography | `[[EXEC_TEAM]]` | 🟠 | current credentials review |
| F6 | Reference clients contactable by prospective buyers | — | 🟡 | current credentials review |
| F7 | Verifiable statistics — projects delivered, uptime achieved, clients retained. **Measured figures only** | `[[STATISTICS]]` | 🟠 | current credentials review |

---

## G — Governance and policy

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| G1 | Information Security Policy — exists? | ⚠ **AUR-POL-002 drafted; pending Managing Director approval** | 🟠 | Stage 8 |
| G2 | POPIA compliance status; Information Officer appointed and registered? | `[[INFO_OFFICER]]` | 🔴 | Stage 8 |
| G3 | Business continuity and disaster recovery arrangements | ⚠ **AUR-POL-007 drafted; pending Managing Director approval** | 🟠 | Stage 8 |
| G4 | Health and safety policy and appointed representative | ⚠ **AUR-POL-004 drafted; pending Managing Director approval; representative not separately recorded** | 🟠 | Stage 8 |
| G5 | Environmental policy or commitments | — | 🟡 | Stage 8 |
| G6 | CSR activity — actual, not intended | — | 🟡 | Stage 8 |
| G7 | Skills development, learnerships, internships | — | 🟡 | Stage 8 |
| G8 | Risk management approach | — | 🟠 | Stage 8 |
| G9 | Code of conduct, anti-corruption and conflict-of-interest policies | ⚠ **AUR-POL-006, AUR-POL-008 and AUR-POL-010 drafted; pending Managing Director approval** | 🟠 | Stage 8 |

---

## H — Contact and commercial

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| H1 | Switchboard, general email, website | ⚠ **General email: **info@aurisnexus.co.za** · Website: aurisnexus.co.za; switchboard/telephone not yet recorded in the profile fact base** | 🔴 | current credentials review |
| H2 | Tender and bid desk contact | ⚠ **Use **info@aurisnexus.co.za** as the tender/business contact unless a dedicated tender contact is later designated** | 🔴 | current credentials review |
| H3 | Named contacts by function — sales, delivery, support | — | 🟠 | current credentials review |
| H4 | Banking details for supplier onboarding — **stated as available on request, never printed** | — | 🟡 | current credentials review |
| H5 | Social and professional profiles | — | 🟡 | current credentials review |

> **On H4.** Banking details are never printed in a company profile. The document states that they
> are available on request, on the company's letterhead, through a verified channel. Printed
> banking details in a widely circulated PDF are the primary vector for supplier-payment redirection
> fraud, which is currently one of the most costly frauds affecting South African procurement.

---

## Token status

| Stage gate | Tokens permitted |
|---|---|
| Stage 2 | All open |
| Stage 3 | Group A and B resolved |
| Stage 4 | Group C resolved |
| Stage 7 | Group D resolved |
| Stage 8 | Group G resolved |
| current credentials review | Groups E, F, H resolved |
| Stage 12 | **Zero** |

A `[[TOKEN]]` count is reported at the close of every stage from Stage 3 onward.

---

## Status at close of Stage 3

**Resolved:** A1 registered name · A3 tagline · A6 logo (rebuild commissioned) · B7 head office
(city) · C1 service list · primary markets · E10 CSD registration (number still to be captured).

**Open tokens carried into Part One copy — 14:**

`[[FOUNDED_YEAR]]` · `[[MD_NAME]]` · `[[MD_ROLE]]` · `[[HEADCOUNT]]` · `[[HEADCOUNT_SPLIT]]` ·
`[[OWNERSHIP]]` · `[[BBBEE_LEVEL]]` · `[[REG_NO]]` · `[[HEAD_OFFICE_ADDRESS]]` ·
`[[MILESTONES]]` · `[[CLIENT_COUNT]]` · `[[SECTORS_DELIVERED]]` · `[[PLATFORM_DEPLOYMENTS]]` ·
`[[TEAM_STRUCTURE]]`

**Highest-value next inputs**, in order of how much they unblock:

1. **B1** `[[FOUNDED_YEAR]]` — blocks 1.3 Our Story and the milestone timeline entirely
2. **C7** — the *delivered vs. targeted* sector split; governs the honesty of Parts Two and Three
3. **B9** `[[HEADCOUNT]]` — appears in five separate sections
4. **F5** executive team — blocks the 7.8 spread
5. **E7** `[[BBBEE_LEVEL]]` — a mandatory tender returnable
6. **B3/B4** — approve or amend the proposed vision, mission and values in `02_Content/part-1/`


## Consolidated-profile rule — 2026-09-23

The current profile uses evidence classes: **Delivered**, **Current capability**, **Available capability**, and **Planned**. Missing documentary credentials remain unclaimed. The public profile does not publish tax numbers, personal identity information, private PINs or unverified compliance status.
