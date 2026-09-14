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
| A3 | Tagline / descriptor line | ✅ **Transforming Businesses Through Technology** (Stage 10, 2026-09-14) — owner-confirmed directly by Loyiso Ngcala, founder and Managing Director, superseding the tagline previously recorded here. **Former tagline (retired, no longer current):** "Connecting Innovation. Delivering Impact." (resolved Stage 9A and earlier; do not present as current anywhere in the profile or brand system — see CVR-043 and `01_Project/09_Stage10-Production-Methodology.md` §6 for the full change record). The brand promise, "Technology built around the way your organisation works" (§1.7), is a separate, unchanged fact and is not affected by this row. | — | Resolved |
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
| B1 | Year founded and founding circumstances | ✅ **July 2026** — owner-confirmed (Stage 9A). No further founding-circumstance narrative beyond the supplied founding story. | 🔴 | Resolved |
| B2 | Founding rationale — the problem the founders set out to address | ✅ Covered by the owner-supplied founding story (Stage 9A) — see 1.3 | 🟠 | Resolved |
| B3 | Existing vision and mission statements | ✅ Owner-supplied verbatim (Stage 9A) — see 1.4 | 🟠 | Resolved |
| B4 | Core values — 5 or 6, with what each means in practice | ✅ Owner-supplied, 6 values with practice statements (Stage 9A) — see 1.5 | 🟠 | Resolved |
| B5 | Milestones for the timeline — 6 to 8, with dates | ✅ Owner-supplied, 4 milestones, all dated 2026 (Stage 9A) — see 1.3. Fewer than the 6–8 originally scoped; timeline visual should be sized to what was actually supplied, not padded. | 🟡 | Resolved (reduced scope) |
| B6 | Ownership structure and shareholding | ✅ **100% owned** by the founder (Stage 9A) | 🔴 | Resolved |
| B7 | Head office | ✅ **140 Linden Street, Sandown, 2196, South Africa** (Stage 9A) | 🟠 | Resolved |
| B8 | Geographic operating footprint | ✅ **South Africa, with capability to support international clients/projects** (owner-confirmed, this session) — do not imply existing international clients or deployments; capability only | 🟠 | Resolved |
| B9 | Current headcount, and split between permanent and contract | ✅ **1 — the founder** (Stage 9A). No permanent/contract split applies; see Claim Verification Register on how this is presented in copy. | 🟠 | Resolved |

---

## C — Services and capability

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| C1 | **Confirmed service list** | ✅ **13 services, organised into 8 families** — see `02_Information-Architecture.md` §4 | — | Resolved |
| C2 | For each service: what it actually delivers, and one real example | — | 🔴 | Stage 4 |
| C3 | Technologies genuinely worked in — languages, frameworks, platforms, clouds, databases | `[[TECH_STACK]]` | 🔴 | Stage 6 |
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
| D8 | Delivery governance structure — escalation path, client reporting cadence | `[[REPORTING_CADENCE]]` | 🟠 | Stage 7 — Stage 9A: `[[RACI_MATRIX]]` retired (see 5.8), a Responsible/Accountable/Consulted/Informed split presumes more than one person; re-add only if genuinely staffed later |
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
| E1 | Company registration number (CIPC) | ✅ **2026/606690/07** (full registration number); CIPC enterprise-number format of the same number is **K2026606690** — the two are the same identifier, not a conflict, per owner confirmation (Stage 9A) | Resolved |
| E2 | Date of incorporation; company type | ✅ **7 July 2026** (owner-confirmed, this session), superseding the previously stated "July 2026" founding month where exactness matters. Company type: Pty Ltd, confirmed by name. | Resolved |
| E3 | Directors — full names and identity-document status | ✅ **Loyiso Ngcala**, sole director (Stage 9A); ID-document status not yet confirmed | Stage 9 (ID status only) |
| E4 | Income tax reference number | ✅ **9755014207** (Stage 9A) — a SARS-issued tax number, commissioned upon company registration (owner-confirmed, final owner-input session). This confirms Auris is **tax registered**; it does NOT confirm or imply **tax compliance status** — those are distinct facts, kept on separate rows (E4 vs. E6) deliberately, and must not be conflated in copy. | Resolved |
| E5 | VAT registration number, if registered | ✅ **Not VAT registered** (Stage 9A) — no VAT number applies; do not state a VAT number in copy | Resolved |
| E6 | Tax Compliance Status PIN and validity period | `[[TCS_PIN]]` — remains open. Having a tax number (E4) is not the same as holding a valid TCS PIN; do not state or imply TCS compliance anywhere in copy until this resolves separately. | Stage 9 |

> **Correction (2026-08-02, Claim Verification audit).** Sections 1.1 and 1.2 originally stated
> "registered and tax compliant" / "holds a valid Tax Compliance Status" as established fact, with
> only the PIN itself tokenized — asserting the underlying compliance status ahead of E6 resolving.
> Both were corrected to `[[TAX_COMPLIANCE_STATUS]]`, gating the qualitative claim as well as the PIN.
> See Claim Verification Register, `01_Project/07_Claim-Verification-Register.md`, CVR-003/CVR-004.
| E7 | B-BBEE level, verification agency, certificate number, expiry | ✅ **Level 1** confirmed by owner (Stage 9A); verification agency, certificate number and expiry not yet supplied — under 51% Black ownership entities of this size typically qualify via an EME affidavit rather than third-party verification, but which route applies here is not yet confirmed. Do not name a verification agency or certificate number until supplied. | Partial — level only |
| E8 | Black ownership and black female ownership percentages | ✅ **100% owned by the founder** (Stage 9A) resolves the ownership-percentage question at the level needed for the profile; race/gender ownership breakdown not separately stated and is not required for the EME-level claim already made | Resolved (for profile purposes) |
| E9 | EME / QSE status | ⚠️ Owner-confirmed (this session): **no known EME/QSE certificate or classification currently exists to provide.** Not invented, not inferred from turnover/headcount. `[[ENTERPRISE_SIZE]]` remains open — leave unclaimed in copy rather than assuming EME status from headcount alone. | Confirmed absent — not a gap awaiting input |
| E10 | CSD (Central Supplier Database) registration number | ⚠️ Owner-confirmed (this session): **not yet registered — registration is in progress.** Do not state or imply CSD registration is complete, and do not supply a supplier number. `[[CSD_NO]]` remains open until registration completes. | In progress |
| E11 | UIF and COIDA registration and letter of good standing | ⚠️ Owner-confirmed (this session): **not currently registered for UIF or COIDA.** Do not state or imply registration exists. Keep out of client-facing copy where not required (per owner instruction not to unnecessarily advertise this), but this register must not suggest registration where none exists. `[[COIDA_NO]]` remains open. | Confirmed absent — not a gap awaiting input |
| E12 | Professional memberships — body, number, status | `[[MEMBERSHIPS]]` | Stage 9 |
| E13 | Certifications **currently held** — ISO, CMMI, vendor | `[[CERTS_HELD]]` | Stage 9 |
| E14 | Certifications **targeted**, with realistic dates | `[[CERTS_PLANNED]]` | Stage 9 |
| E15 | Vendor and technology partnerships, with the tier actually held | `[[PARTNERS]]` | Stage 9 |
| E16 | Professional indemnity and public liability cover, with values | `[[INSURANCE]]` | Stage 9 |

---

## F — Evidence and people

| # | Item | Token | Priority | Needed by |
|---|---|---|---|---|
| F1 | Case studies — 2 or 3. Context, challenge, approach, measured outcome | `[[CASE_STUDIES]]` | 🟠 | Stage 9 |
| F2 | For each case study: is the client named with **written** permission, or anonymised? | — | 🔴 | Stage 9 |
| F3 | Testimonials — full text, with name, role, organisation and consent | `[[TESTIMONIALS]]` | 🟡 | Stage 9 |
| F4 | Awards or recognition, with awarding body and year | `[[AWARDS]]` | 🟡 | Stage 9 |
| F5 | Executive team — 4 to 6. Name, role, qualifications, tenure, short biography | `[[EXEC_TEAM]]` | 🟠 | Stage 9 |
| F6 | Reference clients contactable by prospective buyers | — | 🟡 | Stage 9 |
| F7 | Verifiable statistics — projects delivered, uptime achieved, clients retained. **Measured figures only** | `[[STATISTICS]]` | 🟠 | Stage 9 |

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

**Resolved (Stage 9A):** A1 registered name · A3 tagline · A6 logo (rebuild commissioned) ·
B1 founded year · B3/B4 vision, mission, values (owner-supplied) · B5 milestones (owner-supplied,
4 items) · B6 ownership · B7 head office (full street address) · B9 headcount · C1 service list ·
E1 registration number · E4 tax reference number · E5 VAT status (not registered) · E7 B-BBEE
level · E8 ownership percentage (resolved via 100% single-owner figure) · primary markets.

**Still open — carried into Part One copy:**

`[[FOOTPRINT]]` · `[[TCS_PIN]]` (feeds `[[TAX_COMPLIANCE_STATUS]]`) · `[[CLIENT_COUNT]]` ·
`[[SECTORS_DELIVERED]]` · `[[PLATFORM_DEPLOYMENTS]]` · `[[INCORP_DATE]]`

`[[MD_NAME]]` and `[[MD_ROLE]]` resolve directly from owner-confirmed facts: **Loyiso Ngcala**,
**Founder and Managing Director**. `[[HEADCOUNT_SPLIT]]` and `[[TEAM_STRUCTURE]]` are retired as
tokens rather than resolved — with headcount at 1, a permanent/contract split and a multi-layer
team structure do not apply; see Claim Verification Register CVR-032/CVR-033 for how 1.9 and 1.10
were rewritten to remove implied team-scale language rather than populate it with a false split.

**Highest-value next inputs**, in order of how much they unblock:

1. **E6** `[[TCS_PIN]]` — the one remaining compliance blocker on CVR-003/004/005's full closure
2. **C7** — the *delivered vs. targeted* sector split; governs the honesty of Parts Two and Three
3. **F5** executive team — blocks the 7.8 spread (now trivially: sole founder, per B9)
4. **B8** `[[FOOTPRINT]]` — geographic operating footprint, not yet supplied
5. **E9/E10/E11** — EME/QSE status, CSD number, UIF/COIDA — Stage 9 credentials group
