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
| Front matter / Part One | Partial — targeted audit | Focused on claims not already carried by an open token; found and corrected one gap (tax compliance, CVR-003/004) |
| Part Two — Services | Partial — targeted audit | Focused on the "fact callout" and outcome claims |
| Part Three — Industries | Partial — targeted audit | Focused on claims outside the blanket `[[SECTORS_DELIVERED]]` gate |
| Part Four — Technical Capabilities | Partial — targeted audit | Focused on claims outside the current/capable/planned token structure |
| Part Five — Project Delivery | Full — drafted and audited together | Every section reviewed at drafting time |
| Parts Six, Seven, Closing | Not yet drafted | Will be audited at drafting time, per Stage 7's working method going forward |

A full line-by-line audit of Parts One–Four remains an open task, distinct from targeted sampling.
It is not required before Stage 8 opens, but must close before Stage 12 (quality audit) sign-off.

---

## 6. Register

| Claim ID | Section | Claim text | Required supporting evidence | Evidence owner | Status | Risk | Date verified |
|---|---|---|---|---|---|---|---|
| CVR-001 | Front matter, MD message | "We are a South African company, based in Johannesburg" | CIPC registration extract; lease or property record for head office | Auris Nexus Technologies | Gated ([[HEAD_OFFICE_ADDRESS]]) | Medium | — |
| CVR-002 | 1.1 Executive summary | "Auris Nexus Technologies... provides the current consolidated solution architecture" | Confirmed service list (already resolved, Fact Register C1) | Auris Nexus Technologies | Verified | Low | 2026-08-02 |
| CVR-003 | 1.1 Executive summary | Tax compliance status (originally stated as fact; corrected to `[[TAX_COMPLIANCE_STATUS]]`) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) | High | — |
| CVR-004 | 1.2 Company overview | Tax compliance status (same correction as CVR-003) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) | High | — |
| CVR-005 | 1.2 Company overview | "The company is registered with the South African Revenue Service" | Income tax reference number / SARS registration confirmation | Finance / company secretary | Gated ([[TAX_NO]], E4) | High | — |
| CVR-006 | 1.5 Core values, Accountability | "One named principal is answerable for your engagement... They do not change without your agreement" | Standard contract template or engagement letter showing this clause | Auris Nexus Technologies (legal/commercial) | Unverified — also blocked on strategic hold (Core Values unapproved) | Medium | — |
| CVR-007 | 1.5 Core values, Continuity | "Documentation, source access and knowledge handover are contractual deliverables with acceptance criteria" | Standard contract template showing these clauses and acceptance criteria | Auris Nexus Technologies (legal/commercial) | Unverified — also blocked on strategic hold | Medium | — |
| CVR-008 | 1.8 Why Auris Nexus | "We are directly reachable, locally accountable and in the same time zone" | Organisational structure confirming no offshore approval layer | Auris Nexus Technologies | Unverified | Low | — |
| CVR-009 | 1.9 Competitive advantages #4 | "We forgo the cost advantage of offshore delivery" | Delivery location/staffing record | Auris Nexus Technologies | Unverified | Low | — |
| CVR-010 | 2.1–2.8 (all service spreads) | "Fact callout" proof point per service | A real, named or anonymised delivered example per service | Delivery leadership | Gated ([[PROOF_*]] per service, Fact Register C2) | High | — |
| CVR-011 | legacy Enterprise Management Systems section | "We operate our own HR and school management platforms" | Evidence the platforms exist and are in active operation (screenshot, deployment record) | Product/platform owner | Unverified | High | — |
| CVR-012 | 2.9 Engagement models | Current engagement models in the consolidated master profile genuinely offered | Sample contracts or rate cards evidencing each of the five models in actual use | Commercial/finance | Unverified | Medium | — |
| CVR-013 | 3.0–3.6 (all industry sections) | Sector challenge/solution/value narrative, general | None required — written as domain knowledge, not a delivery claim | — | Verified as non-claim | Low | 2026-08-02 |
| CVR-014 | 3.1–3.6 (all industry sections) | Blanket delivery-experience gate | Client references or case studies per sector, once consented | Delivery leadership | Gated ([[SECTORS_DELIVERED]], Fact Register C7) | High | — |
| CVR-015 | 4.0–4.10 (all technical domains) | Current/capable/planned technology claims | Confirmed technology inventory per domain | Engineering leadership | Gated ([[TECH_CURRENT_*]] etc., Fact Register C3/C4) | High | — |
| CVR-016 | 4.3 Cloud and infrastructure | Hyperscaler partner-tier status | Partner-tier certificate or portal confirmation from the hyperscaler | Engineering leadership | Gated ([[CLOUD_PARTNER_STATUS]], Fact Register C10) | High | — |
| CVR-017 | 4.4 Cybersecurity | Security certifications held | Certificate and current validity | Engineering/compliance leadership | Gated ([[CERTS_HELD]], Fact Register C13/E13) | High | — |
| CVR-018 | 5.0 Delivery lifecycle | Methodology applied per engagement (agile/waterfall/hybrid) | Sample project plans evidencing methodology variance across engagements | Delivery leadership | Gated ([[DELIVERY_METHODOLOGY]], Fact Register D1) | Medium | — |
| CVR-019 | 5.1 Discovery | "We engage the people who will use the system, not only the people who commissioned it" | A discovery report or workshop attendee list from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-020 | 5.2 Analysis, architecture, UI/UX | Architecture reviewed by a governance layer independent of the authoring team | Governance/review sign-off record from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-021 | 5.3 Development | Iterative delivery as the default approach | Sprint or iteration record from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-022 | 5.3 Development | Project management framework / certifications held by staff | Certificate register per named staff member | HR / delivery leadership | Gated ([[PM_FRAMEWORK_CERTS]], Fact Register D2) | Medium | — |
| CVR-023 | 5.4 Testing, QA, security testing | "Security testing is a mandatory gate before deployment" | Deployment checklist or gate-sign-off template showing the gate as mandatory | Engineering leadership | Unverified | High | — |
| CVR-024 | 5.4 Testing, QA, security testing | Test pyramid detail and coverage targets | Test coverage report or CI configuration | Engineering leadership | Gated ([[TEST_PYRAMID_DETAIL]]) | Medium | — |
| CVR-025 | 5.5 Deployment and training | Deployment planned with explicit rollback path | Deployment runbook template showing rollback procedure | Engineering leadership | Unverified | Medium | — |
| CVR-026 | 5.6 Support and maintenance | Support model, hours of cover, escalation path | Support policy document or SLA schedule | Support leadership | Gated ([[SUPPORT_MODEL]] etc., Fact Register D3) | High | — |
| CVR-027 | 5.8 Delivery governance | "Every engagement carries a governance layer distinct from the delivery team executing it" | Organisational chart or governance policy showing independent reporting line | Auris Nexus Technologies leadership | Unverified — also depends on Operating Capability Structure (strategic hold, item 7) | Medium | — |
| CVR-028 | 5.9 Service level framework | Severity, response, restoration, availability targets | Standard SLA schedule or sample signed SLA | Commercial/support leadership | Gated ([[SLA_*]] tokens, Fact Register D4) | High | — |

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


## Reconciliation note — 2026-09-23

The former token-driven Parts 1–5 draft set has been superseded. Verification items tied solely to retired sections are historical controls and must not block the consolidated publication. Current publication claims are governed by the master profile, Fact Register and selected-work evidence. No unresolved token may appear in the final Word/PDF output.
