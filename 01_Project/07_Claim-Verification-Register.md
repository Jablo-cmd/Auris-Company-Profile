# Claim Verification Register
## Auris Nexus Technologies (Pty) Ltd — Corporate Profile

**Document:** `01_Project/07_Claim-Verification-Register.md`
**Stage:** Introduced at Stage 7 — Project Delivery; maintained for the remainder of the project
**Status:** Open — coverage in progress

---

## 1. Purpose

The Fact Register (`05_Fact-Register.md`) tracks **unresolved inputs** — facts the company has not
yet supplied, each carried as an explicit `[[TOKEN]]`. This register tracks something related but
distinct: **every statement in the drafted copy that a procurement committee, legal reviewer,
auditor, enterprise client or government evaluator could reasonably challenge**, whether or not it
is currently tokenized.

The distinction matters because a `[[TOKEN]]` is self-evidently unresolved — no reviewer is misled by
it. The risk this register exists to catch is the opposite case: a sentence that reads as established
fact, was not flagged as a token, and turns out not to be evidenced. The tax-compliance line
originally in 1.1 and 1.2 (**CVR-003, CVR-004** below) is exactly this failure mode, caught by the
first audit pass — see the correction note against Fact Register **E6**.

**The objective:** every significant statement in the final company profile is traceable to
documentary evidence before publication, or is explicitly marked as not yet evidenced.

---

## 2. How this register relates to the Fact Register

| | Fact Register | Claim Verification Register |
|---|---|---|
| Tracks | Facts not yet supplied by the client | Statements in the copy that need evidence, tokenized or not |
| Unit | One input item (a name, a number, a policy) | One claim, traced to its exact location in the copy |
| Resolved when | The client supplies the fact | The stated evidence is produced and checked against the claim |
| Owner | Client (the company) | Evidence Owner, per claim — see §4 |

A claim built directly on an open Fact Register token (e.g. "founded in `[[FOUNDED_YEAR]]`") is
recorded here as **Status: Gated** rather than duplicating a verification workflow the Fact Register
already runs. This register earns its keep on the other case: claims **not** behind a token that are
nonetheless unverified.

---

## 3. Verification status values

| Status | Meaning |
|---|---|
| **Gated** | Claim depends directly on an open Fact Register token; resolves when that token resolves |
| **Unverified** | Claim is stated as fact in the copy but no supporting evidence has been produced or checked |
| **Pending evidence** | Evidence has been requested from the client and not yet received |
| **Verified** | Evidence has been produced and checked against the exact claim text |
| **Rejected** | The claim was checked and found unsupported; copy must be corrected before this closes |

---

## 4. Risk rating

| Rating | Basis |
|---|---|
| **High** | Independently checkable by a hostile or diligent evaluator (registration numbers, certifications, partner status, compliance claims, uptime/response commitments); consequence of a false claim includes disqualification or reputational/legal exposure |
| **Medium** | Plausible and consistent with the business, but states a specific organisational practice, process or structure that should be demonstrable on request |
| **Low** | Philosophy, approach or positioning language — defensible as the company's stated intent even without a document to point to, but recorded for completeness |

---

## 5. Coverage status

**This register is not yet exhaustive.** Coverage to date:

| Part | Coverage | Notes |
|---|---|---|
| Front matter / Part One | **Full — Stage 9A audit** | All 11 files reviewed line-by-line. Found and corrected: the tax-compliance gap (CVR-003/004, first pass), and in Stage 9A: an unmarked unapproved section (1.10), an unsupported specific contract claim (CVR-032), unregistered procurement-mechanism claims (CVR-030), a platform-deployment overclaim (CVR-011), and multiple team-size implications inconsistent with a 1-employee company (CVR-031 and others) |
| Part Two — Services | **Full — Stage 9A Phase 2 audit** | All 10 files read line-by-line. Major finding: 2.3 presented Funda360/Sebetsa as commercially operating platforms (CVR-036, High risk, resolved). Also found and fixed: an unevidenced "most engagements cross stages" pattern claim (2.0), a self-contradictory advisory-independence claim given Auris also sells build services (2.1, CVR-037), and team-plural language in 2.8 missed by the earlier sweep. Files 2.2, 2.4, 2.5, 2.6, 2.7, 2.9 read in full and found already consistent with the evidence boundaries — no changes required. |
| Part Three — Industries | **Full — Stage 9A Phase 3 audit** | All 8 files read line-by-line. No changes required — every sector spread already correctly separates general domain/regulatory knowledge (Verified as non-claim, CVR-013) from delivery-history claims (blanket-gated, CVR-014); no file asserts sector-specific delivery outside that gate, and 3.7's procurement-route table describes routes generally available in the market rather than Auris's current standing, consistent with the CVR-030 treatment applied to similar language in Part One/Two. |
| Part Four — Technical Capabilities | **Full — Stage 9A Phase 4 audit** | All 12 files read line-by-line. This Part was already the most rigorously self-gated in the document (three-state current/capable/planned structure, explicit "no certification claimed without evidence" instructions throughout, an intentionally unpopulated maturity table). Found and fixed one issue: 4.5 carried two stale cross-references to claims corrected earlier in this audit (2.3's old "we operate these platforms" wording, and 1.10's old three-layer org model) — new CVR-038. No other files required changes. |
| Part Five — Project Delivery | Full — drafted and audited together; 5.8 re-audited and rewritten in Stage 9A | Every section reviewed at drafting time; 5.8's governance-independence claim was found unsupportable once the 1-employee fact was confirmed and has been rewritten — see CVR-027/CVR-034 |
| Parts Six, Seven, Closing | Not yet drafted | Will be audited at drafting time, per Stage 7's working method going forward |

A full line-by-line audit of Parts Two–Four remains an open task. It is not required before Stage 8
opens, but must close before Stage 12 (quality audit) sign-off. Stage 9A completed Part One's share
of that work; Parts Two–Four have not been started beyond the existing targeted passes.

---

## 6. Register

| Claim ID | Section | Claim text | Required supporting evidence | Evidence owner | Status | Risk | Date verified |
|---|---|---|---|---|---|---|---|
| CVR-001 | Front matter, MD message | "We are a South African company, based in Johannesburg" | Owner-confirmed head office address (Stage 9A); CIPC registration extract or lease record not yet on file | Auris Nexus Technologies | Verified (owner-confirmed) — documentary corroboration (CIPC extract/lease) still not on file; a hostile evaluator could still request it | Medium | 2026-09-14 |
| CVR-002 | 1.1 Executive summary | "Auris Nexus Technologies... provides thirteen services across three connected disciplines" | Confirmed service list (already resolved, Fact Register C1) | Auris Nexus Technologies | Verified | Low | 2026-08-02 |
| CVR-003 | 1.1 Executive summary | Tax compliance status (originally stated as fact; corrected to `[[TAX_COMPLIANCE_STATUS]]`) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) | High | — |
| CVR-004 | 1.2 Company overview | Tax compliance status (same correction as CVR-003) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) | High | — |
| CVR-005 | 1.2 Company overview | "The company is registered with the South African Revenue Service" | Income tax reference number 9755014207, owner-confirmed (Stage 9A) | Finance / company secretary | Verified (owner-confirmed) | High | 2026-09-14 |
| CVR-006 | *(formerly 1.5 Core values)* | "One named principal is answerable for your engagement... They do not change without your agreement" | — | — | Rejected — clause removed from 1.5 in the Stage 9A values rewrite (owner-supplied values have no equivalent claim). A structurally different, lower-risk statement now appears in 1.8/1.9 — see **CVR-031**, not a continuation of this row. | Medium | 2026-09-14 |
| CVR-007 | *(formerly 1.5 Core values)* | "Documentation, source access and knowledge handover are contractual deliverables with acceptance criteria" | — | — | Rejected — clause removed from 1.5 in the Stage 9A values rewrite. Restated, reframed versions in 1.8 item 5 and 1.9 card 5 are tracked separately — see **CVR-029**. | Medium | 2026-09-14 |
| CVR-008 | 1.8 Why Auris Nexus | "We are directly reachable, locally accountable and in the same time zone" | Organisational structure confirming no offshore approval layer | Auris Nexus Technologies | Unverified | Low | — |
| CVR-009 | 1.9 Competitive advantages #4 | "We forgo the cost advantage of offshore delivery" | Delivery location/staffing record | Auris Nexus Technologies | Unverified | Low | — |
| CVR-010 | 2.1–2.8 (all service spreads) | "Fact callout" proof point per service | A real, named or anonymised delivered example per service | Delivery leadership | Gated ([[PROOF_*]] per service, Fact Register C2) | High | — |
| CVR-011 | Front matter (MD message); 1.3 Our story; 2.3 Enterprise Management Systems; 1.8 item 2 | *Original:* "We operate our own HR and school management platforms" / "Operating software other organisations depend on daily" (implied active commercial operation, all four locations — the 1.3 instance was missed in the first Stage 9A pass and found on this session's consistency re-check). *Corrected (Stage 9A, all three locations):* Auris Nexus is developing proprietary platforms — Funda360 (school management, pilot-stage) and Sebetsa Operations (workforce/operations, in development) — not yet in commercial deployment. | Owner confirmation of platform existence and development/pilot stage (Stage 9A); does not require deployment evidence since deployment is no longer claimed | Product/platform owner | Verified (owner-confirmed: existence and stage only; commercial deployment is explicitly NOT claimed) | Medium *(downgraded from High — the unevidenced deployment claim that carried the risk has been removed)* | 2026-09-14 |
| CVR-012 | 2.9 Engagement models | Five named commercial models genuinely offered | Sample contracts or rate cards evidencing each of the five models in actual use | Commercial/finance | Unverified | Medium | — |
| CVR-013 | 3.0–3.6 (all industry sections) | Sector challenge/solution/value narrative, general | None required — written as domain knowledge, not a delivery claim | — | Verified as non-claim | Low | 2026-08-02 |
| CVR-014 | 3.1–3.6 (all industry sections) | Blanket delivery-experience gate | Client references or case studies per sector, once consented | Delivery leadership | Gated ([[SECTORS_DELIVERED]], Fact Register C7) | High | — |
| CVR-015 | 4.0–4.10 (all technical domains) | Current/capable/planned technology claims | Confirmed technology inventory per domain | Engineering leadership | Gated ([[TECH_CURRENT_*]] etc., Fact Register C3/C4) | High | — |
| CVR-016 | 4.3 Cloud and infrastructure | Hyperscaler partner-tier status | Partner-tier certificate or portal confirmation from the hyperscaler | Engineering leadership | Gated ([[CLOUD_PARTNER_STATUS]], Fact Register C10) | High | — |
| CVR-017 | 4.4 Cybersecurity | Security certifications held | Certificate and current validity | Engineering/compliance leadership | Gated ([[CERTS_HELD]], Fact Register C13/E13) | High | — |
| CVR-018 | 5.0 Delivery lifecycle | Methodology applied per engagement (agile/waterfall/hybrid) | Sample project plans evidencing methodology variance across engagements | Delivery leadership | Gated ([[DELIVERY_METHODOLOGY]], Fact Register D1) | Medium | — |
| CVR-019 | 5.1 Discovery | "We engage the people who will use the system, not only the people who commissioned it" | A discovery report or workshop attendee list from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-020 | 5.2 Analysis, architecture, UI/UX | Architecture reviewed by a governance layer independent of the authoring team | Governance/review sign-off record from a real engagement | Delivery leadership | Unverified — **see CVR-027**, same underlying claim; both depend on the 5.8 resolution below | Medium | — |
| CVR-021 | 5.3 Development | Iterative delivery as the default approach | Sprint or iteration record from a real engagement | Delivery leadership | Unverified — content itself already hedges this as a stated preference, not a universal claim (see 5.3 production notes) | Medium | — |
| CVR-022 | 5.3 Development | Project management framework / certifications held by staff | Certificate register per named staff member | HR / delivery leadership | Gated ([[PM_FRAMEWORK_CERTS]], Fact Register D2) | Medium | — |
| CVR-023 | 5.4 Testing, QA, security testing | "Security testing is a mandatory gate before deployment" | Deployment checklist or gate-sign-off template showing the gate as mandatory | Engineering leadership | Unverified | High | — |
| CVR-024 | 5.4 Testing, QA, security testing | Test pyramid detail and coverage targets | Test coverage report or CI configuration | Engineering leadership | Gated ([[TEST_PYRAMID_DETAIL]]) | Medium | — |
| CVR-025 | 5.5 Deployment and training | Deployment planned with explicit rollback path | Deployment runbook template showing rollback procedure | Engineering leadership | Unverified | Medium | — |
| CVR-026 | 5.6 Support and maintenance | Support model, hours of cover, escalation path | Support policy document or SLA schedule | Support leadership | Gated ([[SUPPORT_MODEL]] etc., Fact Register D3) | High | — |
| CVR-027 | 5.8 Delivery governance | "Every engagement carries a governance layer distinct from the delivery team executing it" | Organisational chart or governance policy showing independent reporting line | Auris Nexus Technologies leadership | **Rejected as written — see Part Five 5.8 resolution below and CVR-034.** Not supportable for a 1-employee company; 1.10's equivalent claim was removed in the same pass (Stage 9A). | Medium → High *(risk raised — this is now a known, not merely suspected, unsupported claim)* | 2026-09-14 |
| CVR-028 | 5.9 Service level framework | Severity, response, restoration, availability targets | Standard SLA schedule or sample signed SLA | Commercial/support leadership | Gated ([[SLA_*]] tokens, Fact Register D4) | High | — |
| CVR-029 | Front matter (MD message); 1.8 item 5; 1.9 card 5 | "Documentation, source access and knowledge transfer" treated as something agreed upfront / "an operating principle," not an asserted existing contractual clause (reframed, Stage 9A, in all three locations) | None required at principle/positioning level (Level 4); would require a contract template if re-asserted as an existing clause | Auris Nexus Technologies | Verified as positioning language — the stronger contractual-fact version this replaces is exactly what CVR-006/007 rejected | Low | 2026-09-14 |
| CVR-030 | 1.1, 1.2, 1.9 card 4 | Procurement-mechanism language, reframed (Stage 9A) from "able to contract through open tender, quotation, panel appointment and framework agreement" / SITA procurement, to "positioned to participate in applicable South African procurement processes... subject to the requirements of the procuring organisation"; SITA reference removed entirely | None required at capability/positioning level; would require evidence of an actual panel, framework or SITA listing if ever re-asserted as current status | Auris Nexus Technologies | Verified as positioning language | Low *(downgraded from Medium — the checkable "currently appointed" implication has been removed)* | 2026-09-14 |
| CVR-031 | Front matter (MD message); 1.8 item 3; 1.9 cards 3 and 6 | Restated senior-engagement/continuity claims, de-pluralized ("the person" not "senior people" / "the people") and reframed as direct, structural consequences of a 1-employee company, rather than a policy choice made by a larger firm | Fact Register B9 (headcount: 1, owner-confirmed) | Auris Nexus Technologies | Verified (owner-confirmed via B9) | Low | 2026-09-14 |
| CVR-032 | *(formerly 1.10 Operating model)* | "The principal... does not change without the client's agreement. This is stated in our contracts, not merely in our proposals" | — | — | Rejected — removed from 1.10 in the Stage 9A rewrite. No contract evidence exists to support "stated in our contracts"; not restated elsewhere. | High *(this was the single strongest unsupported claim found in Part One — a specific, checkable assertion about contract content)* | 2026-09-14 |
| CVR-033 | 1.10 Operating model | Five-area capability structure (Digital Experience & Web Development; Custom Software Development; Business Systems & Automation; Data & Technology Platforms; AI & Emerging Technology Integration), presented explicitly as capability areas, not departments or teams | Owner-confirmed (Stage 9A) | Auris Nexus Technologies | Verified (owner-confirmed) | Low | 2026-09-14 |
| CVR-037 | 2.1 ICT Advisory, business benefits | "An advisory recommendation assessed on its own merits, independent of which vendor — including Auris itself where we also offer the relevant build service — ends up delivering it" (reframed, this session, from "an independent advisory voice — not tied to downstream build revenue") | None required as a stated intent/approach; the original wording asserted a financial independence (no stake in the build outcome) that is not accurate given Auris offers both advisory and build services under one roof (see 1.9 card 1) | Auris Nexus Technologies | Verified as reframed positioning language — the original was a claim a diligent evaluator could reasonably flag as inconsistent with the company's own stated full-span model | Low *(downgraded — the misleading financial-independence framing was the risk, and it's now removed)* | 2026-09-14 |
| CVR-036 | 2.3 Enterprise Management Systems (whole page) | *Original:* standfirst, description, benefits and ideal-client-profile all asserted Funda360/Sebetsa were in active client operation ("platforms we operate ourselves," "already proven in operation," "vendor who operates the platform in production," "daily operator"). *Corrected (Stage 9A Phase 2):* rewritten throughout to describe genuine platform-building work at pilot/development stage without asserting deployment. Notably, this page's own ⑩ Industries Served section already correctly stated deployment numbers were unconfirmed and not claimed — the rest of the page contradicted its own gate before this correction. | Owner confirmation of platform stage (Stage 9A) | Product/platform owner | Verified (owner-confirmed: development/pilot stage only; commercial operation explicitly not claimed) | High *(this was the largest single overclaim found across Parts One–Two — an entire service page describing a not-yet-deployed product as if it were in daily production use)* | 2026-09-14 |
| CVR-035 | 1.10 Operating model, "Partner network" | "Where a client's requirement exceeds what the company holds internally, Auris Nexus is positioned to contract specialist capacity... No specific partner arrangements are named here" | None required — deliberately written as forward-looking capability (Level 4), not a claim of an active partner network | Auris Nexus Technologies | Verified as capability/positioning language — Option B per Stage 9A continuation Task 5. If any specific partner is later named and engaged, that instance would need its own evidence (declared scope, accountability retained) before being asserted as a current fact. | Low | 2026-09-14 |
| CVR-038 | 4.5 DevOps and platform engineering | *Original:* "reduce dependency on that person," cross-referenced to 1.10's old "capability units, not individual dependency" framing — implied the company had already engineered away key-person dependency through team structure. *Corrected (Stage 9A Phase 4):* reframed as reducing *memory-dependency risk* through automation, valuable "as much for a founder-led team today as ... a larger one later," and the stale cross-reference to 1.10's old (now-removed) three-layer model was dropped. Also fixed a second stale reference to 2.3's old "platforms we operate ourselves" wording in the same file. | Fact Register B9 (headcount: 1) | Auris Nexus Technologies | Verified (owner-confirmed via B9) — the underlying engineering practice claim (CI/CD, IaC discipline) remains gated on `[[TECH_CURRENT_DEVOPS]]` per Fact Register C3/C4, unaffected by this fix | Low | 2026-09-14 |
| CVR-039 | 1.2 Company overview, "Location and reach" | "We operate in South Africa, with the capability to support international clients and projects where a requirement calls for it" (new, final owner-input session, replacing "We deliver nationally") | Owner-confirmed (Fact Register B8) — capability statement; no international client or deployment is claimed | Auris Nexus Technologies | Verified (owner-confirmed) — capability language deliberately, per explicit owner instruction not to imply existing international clients | Low | 2026-09-14 |
| CVR-040 | 1.3 Our story | "Both platforms are Auris-originated: Funda360 and Sebetsa Operations were conceived and built as our own proprietary products, not commissioned by a client and later retained as our own" (resolves PLATFORM_ORIGIN, previously tracked as genuinely open) | Owner-confirmed, final owner-input session | Auris Nexus Technologies | Verified (owner-confirmed) | Low | 2026-09-14 |
| CVR-041 | 1.2 Company overview; 1.3 Our story (milestone) | Incorporation date updated from "July 2026" to the exact "7 July 2026" in the two locations where exactness matters (formal legal-status statement, dated milestone entry); narrative prose elsewhere in 1.1/1.3 deliberately kept at month-level as authorial style, not an inconsistency | Owner-confirmed (Fact Register E2), final owner-input session | Auris Nexus Technologies | Verified (owner-confirmed) | Low | 2026-09-14 |
| CVR-042 | 1.1, 1.2 (Tax wording, re-confirmed) | "The company is registered with the South African Revenue Service" / "We are a SARS-issued tax number holder" kept strictly separate from "Tax compliance status: [[TAX_COMPLIANCE_STATUS]]" — re-confirmed, final owner-input session, that having a tax number (E4, resolved) is not conflated with TCS compliance (E6, still gated) anywhere in copy | Fact Register E4 (resolved) / E6 (gated) | Finance / company secretary (for E6 only) | Split status: the registration claim is Verified (owner-confirmed); the compliance claim remains Gated ([[TAX_COMPLIANCE_STATUS]], E6) — recorded as one row since the risk being tracked is exactly the boundary between the two, not either claim alone | High (for the still-gated TCS component) | 2026-09-14 |
| CVR-034 | 5.8 Delivery governance (rewrite) | *Continuation (this session):* softened from an asserted current practice ("every gate... is checked against a written checklist") to a stated operating principle/commitment ("the operating principle is this... that is the standard this section commits to... produced and agreed per engagement, not asserted as an existing universal template here"). Independent review "contracted from a named specialist" where warranted; organisationally independent governance stated as an intended future layer. | None required at principle/commitment level (Level 4) for the checklist-discipline statement as now worded; a checklist/acceptance-criteria template from a real engagement would still be needed if this is ever restated as demonstrated historical practice rather than a forward commitment | Auris Nexus Technologies | Verified as positioning/principle language — downgraded from Unverified because the claim itself was reframed (Task 3, this session), not because the wording was merely softened while the underlying assertion stayed the same. The "intended future layer" framing needs no further evidence, being explicitly forward-looking. | Low *(downgraded from Medium)* | 2026-09-14 |
| CVR-043 | 1.7 Corporate identity and brand promise ("The tagline"); front cover; MD message; brand system (`07_Branding/08_Logo-and-Identity.md`, `02_Colour-Palette.md`, `09_Components.md`) | "Transforming Businesses Through Technology" adopted as the current Auris Nexus tagline, replacing "Connecting Innovation. Delivering Impact." (Fact Register A3). The brand promise, "Technology built around the way your organisation works" (§1.7), is unchanged and is a separate claim from the tagline. | Owner-confirmed directly by Loyiso Ngcala, founder and Managing Director, Stage 10 | Auris Nexus Technologies | Verified (owner-confirmed) — this is a brand-authority decision, not a third-party-verifiable fact; no CIPC, SARS, customer, partner or trademark-registry evidence is implied or required for a company's own tagline. The existing raster logo asset (`03_Images/aurilogo.png`) still has the former tagline baked into its pixels — a derived, cropped variant without the tagline (`aurilogo-no-tagline.png`) is used wherever the mark appears without commissioning new artwork; see `09_Stage10-Production-Methodology.md` §6 for the honest limitation this leaves open (no new primary-lockup artwork with the new tagline exists yet). | Low | 2026-09-14 |

---

## 7. Maintenance rule

Every new content file, from this stage forward, is reviewed against this register **at drafting
time**, not retrofitted afterward — the working method used for Part Five. A claim is added here
whenever copy states something an evaluator could ask to see evidence for, regardless of whether it
is also tokenized. Entries are never deleted, only resolved: a claim found unsupported is corrected
in the copy (as with CVR-003/004) and the register keeps the record of that correction.

This register closes — meaning every row reaches **Verified** or the underlying claim is removed from
the copy — before Stage 12 (quality audit) sign-off, per
`06_Production-Conventions.md` §9's stage close-out format.
