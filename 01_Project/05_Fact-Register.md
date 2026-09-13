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
| A3 | Tagline / descriptor line | ✅ **Connecting Innovation. Delivering Impact.** | — | Resolved |
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
| B6 | Ownership structure and shareholding | `[[OWNERSHIP]]` | 🔴 | Stage 3 |
| B7 | Head office | ✅ **Johannesburg, Gauteng** — street address still required as `[[HEAD_OFFICE_ADDRESS]]` | 🟠 | Stage 9 |
| B8 | Geographic operating footprint | `[[FOOTPRINT]]` | 🟠 | Stage 3 |
| B9 | Current headcount, and split between permanent and contract | `[[HEADCOUNT]]` | 🟠 | Stage 3 |

---

## C — Services and capability

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| C1 | **Confirmed service list** | ✅ **13 services, organised into 8 families** — see `02_Information-Architecture.md` §4 | — | Resolved |
| C2 | For each service: what it actually delivers, and one real example | ✅ **Partially resolved for 3 of 8 Part Two services** — 2.2 (Stage 8B), 2.3 (Stage 8B, school-management half only), 2.5 (Stage 8A) — see correction notes below | 🔴 | Stage 4 |
| C3 | Technologies genuinely worked in — languages, frameworks, platforms, clouds, databases | ✅ **Partially resolved 2026-09-13, Stage 8A, for 2 of 10 Part Four domains** — see correction note below | 🔴 | Stage 6 |
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
| C14 | Operating model for HR & Employee Management and School Management Systems — does Auris self-operate these as its own ongoing multi-tenant/product platforms, or build and hand them over per client engagement? | `[[PLATFORM_OPERATING_MODEL]]` | 🔴 | Stage 4 (retrospective) |

> **On C4 and C7.** These two negative-space questions do more for the document's credibility than
> any other input. A profile that distinguishes what the company has done from what it can do reads
> as trustworthy; one that blurs them is detected immediately by experienced evaluators.

> **Correction (2026-09-13, Stage 8A — C2, section 2.5 only).** The `[[PROOF_WEB]]` fact-callout
> token in 2.5 Web Design and Development is resolved using evidence already established for 7.10
> Case studies — Pro Energy Solutions (Claim Verification Register CVR-038, naming consent CVR-040) —
> not new client input. This closes C2 for this one service line only.
>
> **Correction (2026-09-13, Stage 8B — C2, sections 2.2 and 2.3).** Two further `[[PROOF_*]]` tokens
> were resolved during Stage 8B's evidence-closure pass. **2.2 Custom Software Development**'s
> `[[PROOF_CUSTOM_DEV]]` token is resolved using a fully anonymised description of the real system
> investigated for Fact Register **F8** ("CIT LMS") — no client name or identifying detail is used, so
> the naming-consent question that keeps F8 excluded as a *named* case study does not arise for this
> anonymised reference; see Claim Verification Register **CVR-047**. **2.3 Enterprise Management
> Systems**'s `[[PROOF_EMS]]` token is resolved, for the school-management half of that service only,
> using evidence already established for 7.10 Case studies (Funda360 — CVR-036); see **CVR-048**. That
> resolution explicitly does **not** touch `[[PLATFORM_OPERATING_MODEL]]` or `[[PLATFORM_DEPLOYMENTS]]`
> — Funda360's own evidence is that it is built but not yet operating for any real school, which argues
> against the "we operate this platform" claim, not toward it. C2 now remains open for five of eight
> Part Two services: 2.1, 2.4, 2.6, 2.7, 2.8 (the HR & employee management half of 2.3 also remains
> open), each with its own unresolved `[[PROOF_*]]` token.

> **On C3, per client direction (2026-08-02).** Every technology and capability claim in Part Four is
> to be split into three explicit states, not resolved as one undifferentiated stack: **Technologies
> currently used** (genuinely in production), **capable of supporting** (deliverable if engaged, not
> yet proven in production here), and **planned / future roadmap** (intended, not yet built). Until
> C3/C4 resolve, all three remain open tokens per technical domain — see `02_Content/part-4/`.

> **Correction (2026-09-13, Stage 8A).** "Currently used" is resolved directly by evidence, not by
> client statement, for two domains: **4.1 Software engineering** (React, TypeScript, Vite; Vitest and
> Playwright for testing) and **4.6 Data platforms and databases** (PostgreSQL via Supabase, including
> Auth, Storage and Deno-based Edge Functions). Each technology was individually confirmed by direct
> inspection of `package.json` dependencies, config files, database migrations, and in-code usage
> across multiple real Auris-developed systems — not inferred from "commonly used together"
> association. This evidences **demonstrated implementation experience only**: it does not evidence
> commercial delivery volume, years of experience, a vendor certification, or a partner-tier status,
> none of which is claimed. The remaining eight domains (4.0 overview excepted, which cross-references
> these two), and **C4** in full, remain open. See Claim Verification Register CVR-043 through
> CVR-045.
>
> **Refinement (2026-09-13, Stage 8B).** Stage 8A's wording implied uniform tooling across all three
> referenced systems (Sebetsa, Funda360, and a confidentially-held third system). Stage 8B re-inspected
> all three directly (filesystem access to the source repositories, not available at Stage 8A) and
> found the third system runs a materially different, newer toolchain: **React 19** (not 18),
> **TypeScript 6** (not 5.6), **Vite 8** (not 5.4), **Oxlint** in place of ESLint, and **no
> Playwright/e2e suite** at all — though it does independently confirm PostgreSQL via Supabase with
> Auth and Storage (no Edge Functions found in its source). 4.1 and 4.6 are corrected to attribute each
> specific technology to the specific system(s) that actually evidence it, rather than to "the same
> systems" collectively. This is a genuine accuracy correction, not new resolution scope — C3 remains
> "partially resolved for 2 of 10 domains," now stated more precisely within those two.

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
| E1 | Company registration number (CIPC) | `[[REG_NO]]` | Stage 9 |
| E2 | Date of incorporation; company type | `[[INCORP_DATE]]` | Stage 9 |
| E3 | Directors — full names and identity-document status | `[[DIRECTORS]]` | Stage 9 |
| E4 | Income tax reference number | `[[TAX_NO]]` | Stage 9 |
| E5 | VAT registration number, if registered | `[[VAT_NO]]` | Stage 9 |
| E6 | Tax Compliance Status PIN and validity period | `[[TCS_PIN]]` | Stage 9 |
| E7 | B-BBEE level, verification agency, certificate number, expiry | `[[BBBEE_LEVEL]]` | Stage 9 |
| E8 | Black ownership and black female ownership percentages | `[[OWNERSHIP_PCT]]` | Stage 9 |
| E9 | EME / QSE status | `[[ENTERPRISE_SIZE]]` | Stage 9 |
| E10 | CSD (Central Supplier Database) registration number | `[[CSD_NO]]` | Stage 9 |
| E11 | UIF and COIDA registration and letter of good standing | `[[COIDA_NO]]` | Stage 9 |
| E12 | Professional memberships — body, number, status | `[[MEMBERSHIPS]]` | Stage 9 |
| E13 | Certifications **currently held** — ISO, CMMI, vendor | `[[CERTS_HELD]]` | Stage 9 |
| E14 | Certifications **targeted**, with realistic dates | `[[CERTS_PLANNED]]` | Stage 9 |
| E15 | Vendor and technology partnerships, with the tier actually held | `[[PARTNERS]]` | Stage 9 |
| E16 | Professional indemnity and public liability cover, with values | `[[INSURANCE]]` | Stage 9 |

> **Correction (2026-08-02, Claim Verification audit).** Sections 1.1 and 1.2 originally stated
> "registered and tax compliant" / "holds a valid Tax Compliance Status" as established fact, with
> only the PIN itself tokenized — asserting the underlying compliance status ahead of E6 resolving.
> Both were corrected to `[[TAX_COMPLIANCE_STATUS]]`, gating the qualitative claim as well as the PIN.
> See Claim Verification Register, `01_Project/07_Claim-Verification-Register.md`, CVR-003/CVR-004.

> **Correction (2026-09-13, Stage 7 re-audit against item C14).** The same failure mode recurred: six
> sections (front matter MD message, 1.1, 1.3, 1.8 §2, 1.9 §2, 2.3) stated as established fact that
> Auris "operates" or "runs" its own HR and school management platforms, distinct from client-
> commissioned, one-off builds. The only resolved fact behind this (Fact Register **C1**) confirms
> these are two of the thirteen *offered services* — it does not evidence a self-operated product
> business model. No case study, deployment record or platform register exists in this repository to
> support the stronger claim. All six locations were corrected to carry `[[PLATFORM_OPERATING_MODEL]]`
> inline. See Claim Verification Register CVR-011.
>
> **Addendum (2026-09-13, same day, following portfolio research for 7.10).** Direct inspection of the
> `funda360` source repository (a real, substantially-built school-management platform — see 7.10) found
> a pilot-deployment checklist that is entirely unexecuted, and no evidence anywhere of the platform
> running for any actual school. This evidences the "build" half of the operating-model question — Auris
> has built such a platform — but positively evidences that the "operate" half is **not yet true**: there
> is no organisation currently depending on it daily. **C14 remains open; this is not new evidence toward
> Verified, it is confirmation the claim is still premature as worded.**

---

## F — Evidence and people

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| F1 | Case studies — 2 or 3. Context, challenge, approach, measured outcome | ✅ **Partially resolved, early-drafted at Stage 7** — see below | 🟠 | Stage 9 |
| F2 | For each case study: is the client named with **written** permission, or anonymised? | ✅ **Resolved for the two case studies currently named** (Jo Jackson Dance Company, Pro Energy Solutions) — see correction note below. Remains open for any case study added later | 🔴 | Stage 9 |
| F3 | Testimonials — full text, with name, role, organisation and consent | `[[TESTIMONIALS]]` | 🟡 | Stage 9 |
| F4 | Awards or recognition, with awarding body and year | `[[AWARDS]]` | 🟡 | Stage 9 |
| F5 | Executive team — 4 to 6. Name, role, qualifications, tenure, short biography | `[[EXEC_TEAM]]` | 🟠 | Stage 9 |
| F6 | Reference clients contactable by prospective buyers | — | 🟡 | Stage 9 |
| F7 | Verifiable statistics — projects delivered, uptime achieved, clients retained. **Measured figures only** | `[[STATISTICS]]` | 🟠 | Stage 9 |
| F8 | **CIT LMS** — investigated as a candidate case study, 2026-09-13; re-inspected 2026-09-13, Stage 8B | **Excluded as a named case study, unchanged.** A real, substantially-built HR/workforce system exists in the source repository (re-confirmed at Stage 8B: employee records, attendance, leave, HR-request workflows, multi-site posting/deployment, contracts, reporting and an audit trail), but it is built for a real, named third-party client and its own seed/reference data names that client's own clients in turn. No evidence of written consent to reference either the commissioning client or its clients exists anywhere in that repository. Do not add to the profile as a *named* case study without a specific, written release covering exactly what may be named. **Stage 8B addition: a fully anonymised capability description — no client name, no sub-client name, no sector-identifying detail — was added to 2.2 Custom Software Development, on the reasoning that a naming-consent requirement governs *identification*, not the fact that Auris does this kind of work at all; see Claim Verification Register CVR-047** | 🔴 | Stage 9 |
| F9 | **"LOGIOS" / "LOGIOS OS"** — the name used on the public Auris website's portfolio page for a fourth case study, investigated 2026-09-13 | Excluded, still. No project by this exact name was found in any repository accessible to this review; the `Logistics-App` GitHub repository contains only a one-line placeholder README. **Not verified in inspected repository** — this is not the same statement as "does not exist." The owner has since confirmed a related, real product ("Logistics App," see F10); do not assume the two are the same product, and do not silently rename one to the other, until the local source or its documentation explicitly confirms "LOGIOS"/"LOGIOS OS" as an official or historical name for it | 🔴 | Stage 9 |
| F10 | **Logistics App** — an Auris Nexus-developed product, owner-confirmed 2026-09-13 | ✅ **Existence and authorship owner-confirmed.** The owner has explicitly confirmed: the Logistics App exists, was built by Auris Nexus Technologies, its source currently exists locally (not yet pushed to `Jablo-cmd/Logistics-App`, whose remote is currently near-empty), and it is intended to be published there. Per this project's evidence-priority rules, owner-confirmed information is legitimate evidence for *existence and authorship* — it is not evidence for any specific technical feature, architecture, deployment status, user count or commercial outcome, none of which is claimed. Detailed capability verification is pending the source being pushed to GitHub | 🟡 | Stage 9 |

> **On F9/F10.** The empty state of the `Logistics-App` remote repository must not be read as evidence
> that the Logistics App does not exist — it reflects only that the source has not yet been pushed
> there. Conversely, the existence of Logistics App does not retroactively verify "LOGIOS"/"LOGIOS OS"
> as its official name, or verify any of the specific case-study claims made about "LOGIOS OS" on the
> public website's portfolio page — those remain a separate, unresolved finding (see Claim
> Verification Register CVR-046) until the two are either confirmed to be the same product or shown
> to be different ones.

> **On F1, 2026-09-13.** Four case studies (Sebetsa, Funda360, Jo Jackson Dance Company, Pro Energy
> Solutions) were drafted early, in `02_Content/part-7/7-10-case-studies.md`, directly against each
> project's own source repository — code, database schema, test suites and release documentation, not
> marketing copy. No measured outcome (a user count, a performance figure, a completion date) is
> stated for any of them, because none is evidenced; each entry instead states, precisely, what was
> built and how far it has travelled toward commercial deployment. This is a genuine, partial
> resolution of F1 — not a placeholder — but it is not the final word: confirm at Stage 9 that
> deployment status hasn't changed. See Claim Verification Register CVR-035 through CVR-040.

> **Correction (2026-09-13, later the same day — F2).** The naming-consent gate on Jo Jackson Dance
> Company and Pro Energy Solutions is now resolved. **User-confirmed external evidence: the client
> (acting for Auris Nexus Technologies in this session) has personally confirmed that written consent
> exists, for both businesses, to name the client and describe the work performed.** That consent
> document is not held in this repository, and no filename, date, signatory or wording for it is
> recorded here or anywhere else in this project — inventing any of those details would itself be
> exactly the failure mode this register exists to prevent. The absence of the document *in this
> repository* is not treated as absence of consent; it is treated as an external fact supplied by the
> client, the same evidentiary status this register already gives to every other client-supplied fact
> (compare **A1**, **A3**, **C1**). This resolves the *naming* dimension only. It does **not** evidence
> financial values, project duration, client size, business outcomes, quantified results, contractual
> status or testimonials for either project — none of those is claimed in 7.10, and none should be
> added without separate evidence. See Claim Verification Register CVR-039/CVR-040.

---

## G — Governance and policy

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| G1 | Information Security Policy — exists? | — | 🟠 | Stage 8 |
| G2 | POPIA compliance status; Information Officer appointed and registered? | `[[INFO_OFFICER]]` | 🔴 | Stage 8 |
| G3 | Business continuity and disaster recovery arrangements | — | 🟠 | Stage 8 |
| G4 | Health and safety policy and appointed representative | — | 🟠 | Stage 8 |
| G5 | Environmental policy or commitments | — | 🟡 | Stage 8 |
| G6 | CSR activity — actual, not intended | — | 🟡 | Stage 8 |
| G7 | Skills development, learnerships, internships | — | 🟡 | Stage 8 |
| G8 | Risk management approach | — | 🟠 | Stage 8 |
| G9 | Code of conduct, anti-corruption and conflict-of-interest policies | — | 🟠 | Stage 8 |

---

## H — Contact and commercial

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| H1 | Switchboard, general email, website | `[[CONTACT_MAIN]]` | 🔴 | Stage 9 |
| H2 | Tender and bid desk contact | `[[TENDER_CONTACT]]` | 🔴 | Stage 9 |
| H3 | Named contacts by function — sales, delivery, support | — | 🟠 | Stage 9 |
| H4 | Banking details for supplier onboarding — **stated as available on request, never printed** | — | 🟡 | Stage 9 |
| H5 | Social and professional profiles | — | 🟡 | Stage 9 |

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
| Stage 9 | Groups E, F, H resolved |
| Stage 12 | **Zero** |

A `[[TOKEN]]` count is reported at the close of every stage from Stage 3 onward.

---

## Status at close of Stage 3

**Resolved:** A1 registered name · A3 tagline · A6 logo (rebuild commissioned) · B7 head office
(city) · C1 service list · primary markets.

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
