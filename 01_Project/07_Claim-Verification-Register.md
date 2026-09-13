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
| Front matter / Part One | **Full — re-audited line-by-line at Stage 7 (2026-09-13)** | Original pass was targeted; this session read every Part One file in full against this register. Found and corrected two gaps beyond the original tax-compliance fix: (1) the "we operate our own HR/school platforms" claim, asserted as fact with no token across six locations — see CVR-011; (2) 1.10 Our operating model (Strategic Identity Hold item 7) carried no `[[TOKEN]]`/⚠ warning despite being an unapproved proposal, unlike the other six hold items — now corrected |
| Part Two — Services | Partial — targeted audit | Focused on the "fact callout" and outcome claims |
| Part Three — Industries | Partial — targeted audit | Focused on claims outside the blanket `[[SECTORS_DELIVERED]]` gate |
| Part Four — Technical Capabilities | Partial — targeted audit | Focused on claims outside the current/capable/planned token structure |
| Part Five — Project Delivery | **Full — drafted and audited together; two coverage gaps closed at the Stage 7 re-audit (2026-09-13)** | Every section was reviewed at drafting time, but 5.4 Phase 9 and 5.7 had no register row despite that — added as CVR-030 and CVR-029. Coverage is now genuinely complete for this Part |
| Part Six, Closing | Not yet drafted | Will be audited at drafting time, per Stage 7's working method going forward |
| Part Seven — Credentials | Not yet drafted, **except 7.10 Case studies (early-drafted and audited together, 2026-09-13)** | Every other Part Seven section remains open; 7.10 was drafted ahead of schedule against verified evidence — see Fact Register F1 note |

A full line-by-line audit of Parts Two–Four remains an open task, distinct from targeted sampling.
It is not required before Stage 8 opens, but must close before Stage 12 (quality audit) sign-off.
Part One and Part Five are now both fully audited line-by-line (the latter since drafting, the former
since the Stage 7 re-audit); this does not mean every claim within them is *verified* — most remain
**Gated** or **Unverified** pending evidence — only that coverage of the copy against this register is
complete for those two parts.

### Register tally (as of 2026-09-13, Stage 7 re-audit)

| Status | Count | Rows |
|---|---|---|
| Verified | 8 | CVR-002, 013, 035, 036, 037, 038, 039, 040 |
| Gated (open Fact Register token) | 15 | CVR-001, 003, 004, 005, 010, 011, 014, 015, 016, 017, 018, 022, 024, 026, 028 |
| Unverified (no evidence, no gating token) | 13 | CVR-006, 007, 008, 009, 012, 019, 020, 021, 023, 025, 027, 029, 030 |
| Rejected | 0 | — |
| **Total** | **36** | CVR-001 through CVR-030 (30 rows), plus CVR-035 through CVR-040 (6 rows; IDs 031–034 not used) |

**On the four source-inspection Verified rows (CVR-035–038, added 2026-09-13).** These are verified
by a different route than CVR-002/013: not because a Fact Register item resolved, but because this
reviewer directly inspected the primary source (the actual code, database schema, tests and release
documentation of each named project) and confirmed the drafted claim text does not exceed what that
inspection showed. This is evidence, not drafting judgement — but it is evidence of a build's current
state, which can change; re-verify before Stage 12 if either Sebetsa or Funda360's deployment status
has moved on.

**On the two client-naming Verified rows (CVR-039–040, added 2026-09-13, same day).** These are
verified by a third, distinct route: neither an inspected document nor an open token resolving, but a
direct confirmation from the client that written consent exists, recorded per Fact Register F2's
correction note without inventing the underlying document's details. This verifies *naming permission
only* — it does not, and must not be read to, verify any commercial outcome, duration, financial value
or testimonial for either project, none of which is claimed in the copy.

**Read this tally carefully: "Gated" is not "safe" and "Unverified" is not "worse than Gated" in
severity — both mean the underlying fact is not yet evidenced.** The distinction is only about
whether the copy already discloses that (Gated, via a visible token) or currently reads as settled
fact with nothing on the page to signal otherwise (Unverified). Every High-risk row in either category
— CVR-003/004/005 (tax and SARS registration), CVR-010 (per-service proof points), CVR-011 (platform
operating model), CVR-014 (sector delivery), CVR-015/016/017 (technology, cloud partner, certifications),
CVR-023 (mandatory security gate), CVR-026 (support model), CVR-028 (SLA figures) — must be resolved
with genuine evidence before this document is presented as procurement-ready. None of them may be
closed by drafting judgement alone. (CVR-039/040, client-naming consent for the two named case-study
businesses, closed 2026-09-13 on user-confirmed external evidence — see above.)

---

## 6. Register

| Claim ID | Section | Claim text | Required supporting evidence | Evidence owner | Status | Risk | Date verified |
|---|---|---|---|---|---|---|---|
| CVR-001 | Front matter, MD message | "We are a South African company, based in Johannesburg" | CIPC registration extract; lease or property record for head office | Auris Nexus Technologies | Gated ([[HEAD_OFFICE_ADDRESS]]) | Medium | — |
| CVR-002 | 1.1 Executive summary | "Auris Nexus Technologies... provides thirteen services across three connected disciplines" | Confirmed service list (already resolved, Fact Register C1) | Auris Nexus Technologies | Verified | Low | 2026-08-02 |
| CVR-003 | 1.1 Executive summary | Tax compliance status (originally stated as fact; corrected to `[[TAX_COMPLIANCE_STATUS]]`) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) | High | — |
| CVR-004 | 1.2 Company overview | Tax compliance status (same correction as CVR-003) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) | High | — |
| CVR-005 | 1.2 Company overview | "The company is registered with the South African Revenue Service" | Income tax reference number / SARS registration confirmation | Finance / company secretary | Gated ([[TAX_NO]], E4) | High | — |
| CVR-006 | 1.5 Core values, Accountability | "One named principal is answerable for your engagement... They do not change without your agreement" | Standard contract template or engagement letter showing this clause | Auris Nexus Technologies (legal/commercial) | Unverified — also blocked on strategic hold (Core Values unapproved) | Medium | — |
| CVR-007 | 1.5 Core values, Continuity | "Documentation, source access and knowledge handover are contractual deliverables with acceptance criteria" | Standard contract template showing these clauses and acceptance criteria | Auris Nexus Technologies (legal/commercial) | Unverified — also blocked on strategic hold | Medium | — |
| CVR-008 | 1.8 Why Auris Nexus | "We are directly reachable, locally accountable and in the same time zone" | Organisational structure confirming no offshore approval layer | Auris Nexus Technologies | Unverified | Low | — |
| CVR-009 | 1.9 Competitive advantages #4 | "We forgo the cost advantage of offshore delivery" | Delivery location/staffing record | Auris Nexus Technologies | Unverified | Low | — |
| CVR-010 | 2.1–2.8 (all service spreads) | "Fact callout" proof point per service | A real, named or anonymised delivered example per service | Delivery leadership | Gated ([[PROOF_*]] per service, Fact Register C2) | High | — |
| CVR-011 | Front matter (MD message); 1.1; 1.3; 1.8 §2; 1.9 §2; **2.3 Enterprise Management Systems** (source spread) | "We operate our own HR and school management platforms" / "platforms we operate ourselves, not products we shipped and moved on from" — recurs in six locations, none previously tokenized | Evidence Auris independently operates and maintains at least one live HR or school-management platform instance as of a stated date (admin-console record, deployment/hosting register, or a consented case study) — distinguished from evidence that these are merely *offered* as buildable services | Product/platform owner | **Gated** (`[[PLATFORM_OPERATING_MODEL]]`, Fact Register **C14**) — corrected from Unverified at the 2026-09-13 Stage 7 re-audit, same failure mode as CVR-003/004: Fact Register **C1** confirms these are 2 of the 13 offered services, not that Auris self-operates them as ongoing products. **Not to be marked Verified merely because C1 is resolved** — C1 does not evidence the operating-model claim. Wording should remain as drafted (it reads as intent/positioning once tokenized) rather than being deleted; do not restate as settled fact anywhere else pending C14 | High | — |
| CVR-012 | 2.9 Engagement models | Five named commercial models genuinely offered | Sample contracts or rate cards evidencing each of the five models in actual use | Commercial/finance | Unverified | Medium | — |
| CVR-013 | 3.0–3.6 (all industry sections) | Sector challenge/solution/value narrative, general | None required — written as domain knowledge, not a delivery claim | — | Verified as non-claim | Low | 2026-08-02 |
| CVR-014 | 3.1–3.6 (all industry sections) | Blanket delivery-experience gate | Client references or case studies per sector, once consented | Delivery leadership | Gated ([[SECTORS_DELIVERED]], Fact Register C7) | High | — |
| CVR-015 | 4.0–4.10 (all technical domains) | Current/capable/planned technology claims | Confirmed technology inventory per domain | Engineering leadership | Gated ([[TECH_CURRENT_*]] etc., Fact Register C3/C4) | High | — |
| CVR-016 | 4.3 Cloud and infrastructure | Hyperscaler partner-tier status | Partner-tier certificate or portal confirmation from the hyperscaler | Engineering leadership | Gated ([[CLOUD_PARTNER_STATUS]], Fact Register C10) | High | — |
| CVR-017 | 4.4 Cybersecurity | Security certifications held | Certificate and current validity | Engineering/compliance leadership | Gated ([[CERTS_HELD]], Fact Register C13/E13) | High | — |
| CVR-018 | 5.0 Delivery lifecycle | Methodology applied per engagement (agile/waterfall/hybrid) | Sample project plans evidencing methodology variance across engagements | Delivery leadership | Gated ([[DELIVERY_METHODOLOGY]], Fact Register D1) | Medium | — |
| CVR-019 | 5.1 Discovery | "We engage the people who will use the system, not only the people who commissioned it" | A discovery report or workshop attendee list from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-020 | 5.2 Analysis, architecture, UI/UX | Architecture reviewed by a governance layer independent of the authoring team | Governance/review sign-off record from a real engagement | Delivery leadership | Unverified — **also depends on Operating Capability Structure** (Strategic Identity Hold item 7, `02_Content/part-1/1-10-operating-model.md`); same underlying independence claim as CVR-027 and CVR-030. Do not mark Verified while 1.10 remains an unapproved proposal | Medium | — |
| CVR-021 | 5.3 Development | Iterative delivery as the default approach | Sprint or iteration record from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-022 | 5.3 Development | Project management framework / certifications held by staff | Certificate register per named staff member | HR / delivery leadership | Gated ([[PM_FRAMEWORK_CERTS]], Fact Register D2) | Medium | — |
| CVR-023 | 5.4 Testing, QA, security testing | "Security testing is a mandatory gate before deployment" | Deployment checklist or gate-sign-off template showing the gate as mandatory | Engineering leadership | Unverified | High | — |
| CVR-024 | 5.4 Testing, QA, security testing | Test pyramid detail and coverage targets | Test coverage report or CI configuration | Engineering leadership | Gated ([[TEST_PYRAMID_DETAIL]]) | Medium | — |
| CVR-030 | 5.4 Testing, QA, security testing — Phase 9 | "Independent review, distinct from the development team per the governance principle in 1.10" | Governance/review sign-off record from a real engagement | Delivery leadership | Unverified — **also depends on Operating Capability Structure** (Strategic Identity Hold item 7); same underlying claim as CVR-020 and CVR-027. Added at the 2026-09-13 Stage 7 re-audit — this claim had no register entry despite Part Five's "Full" coverage status | Medium | — |
| CVR-025 | 5.5 Deployment and training | Deployment planned with explicit rollback path | Deployment runbook template showing rollback procedure | Engineering leadership | Unverified | Medium | — |
| CVR-026 | 5.6 Support and maintenance | Support model, hours of cover, escalation path | Support policy document or SLA schedule | Support leadership | Gated ([[SUPPORT_MODEL]] etc., Fact Register D3) | High | — |
| CVR-029 | 5.7 Continuous improvement | "Periodic service review examines what the system is actually doing in production... usage patterns, support ticket themes, performance against the service level framework" as an established practice | A service-review report or template from a real engagement | Delivery leadership | Unverified. **Added at the 2026-09-13 Stage 7 re-audit — this section had no register entry despite the Part Five coverage table describing "every section reviewed at drafting time."** | Medium | — |
| CVR-027 | 5.8 Delivery governance | "Every engagement carries a governance layer distinct from the delivery team executing it" | Organisational chart or governance policy showing independent reporting line | Auris Nexus Technologies leadership | **Unverified — depends on Operating Capability Structure**, `02_Content/part-1/1-10-operating-model.md`, Strategic Identity Hold item 7 (client direction 2026-08-02; not approved, drafted for collaborative development). **Re-checked at the 2026-09-13 Stage 7 re-audit: the dependency is correctly represented but was previously under-evidenced — 1.10 itself carried no `[[TOKEN]]`/⚠ warning marking it unapproved, unlike the other six hold items.** This has been corrected (1.10 now carries `[[OPERATING_MODEL_APPROVED]]` and an explicit hold notice). **This claim remains Unverified and must not be marked Verified until both (a) the Operating Capability Structure is approved at the Brand Strategy Workshop and (b) documentary evidence of the independent reporting line is produced** — approval of the structure alone evidences intent, not the review record itself. Same underlying claim as CVR-020 and CVR-030 | Medium | — |
| CVR-028 | 5.9 Service level framework | Severity, response, restoration, availability targets | Standard SLA schedule or sample signed SLA | Commercial/support leadership | Gated ([[SLA_*]] tokens, Fact Register D4) | High | — |
| CVR-035 | 7.10 Case studies — Sebetsa | Feature list (org hierarchy, sites/clients/contracts, scheduling, availability, leave, attendance, RBAC, tenant-scoped audit log) and "in active development... not yet in commercial deployment" | Direct inspection of `github.com/Jablo-cmd/sebetsa` — source code, 46 database migrations, RLS policies, audit-log implementation, 54 e2e test specs | Delivery leadership | **Verified against source repository** — every listed feature corresponds to an existing table/migration/feature folder inspected 2026-09-13; no commercial-deployment claim is made, consistent with the evidence (no client/tenant data beyond an unbuilt planning TODO) | Medium | 2026-09-13 |
| CVR-036 | 7.10 Case studies — Funda360 | Feature list (admissions, learner/staff records, attendance, homework, report cards, parent portal, fees) and "built and verified in local development... pilot has not yet been executed" | Direct inspection of `github.com/Jablo-cmd/funda360`, specifically `docs/product/FUNDA360-CURRENT-STATE.md` (2026-08-28, verified-baseline audit) and `docs/FUNDA360_PILOT_DEPLOYMENT_CHECKLIST.md` (entirely unchecked) | Delivery leadership | **Verified against source repository.** Note: the repository's own ~19 elaborate "PRD/BRS/SDD"-style documents are explicitly flagged by its own current-state audit as aspirational LLM-generated output describing features that do not exist — none of those documents were used as evidence here, only the code, schema, tests and the current-state audit itself | Medium | 2026-09-13 |
| CVR-037 | 7.10 Case studies — Jo Jackson Dance Company | "feature-complete and production-ready, live at the studio's own domain, with final photography still pending" | Direct inspection of `github.com/Jablo-cmd/jjdcmain-01`, specifically `RELEASE-REPORT-v1.0.0.md` (live Playwright smoke test, axe-core WCAG scan, Lighthouse audit across 9 pages) and `docs/CLIENT-CHECKLIST.md` | Delivery leadership | **Verified against source repository** | Medium | 2026-09-13 |
| CVR-038 | 7.10 Case studies — Pro Energy Solutions | "eleven-page site... responsive... technical SEO foundation... performance-conscious build practices... completed and live" | Direct inspection of `github.com/Jablo-cmd/pro-energy-soltuions` — 11 HTML pages, 10 CSS `@media` blocks, viewport meta tag, sitemap.xml/robots.txt, Open Graph/Twitter Card tags, `loading="lazy"` and explicit width/height on images | Delivery leadership | **Verified against source repository.** "Live" is evidenced by a working Netlify deployment referenced in its own sitemap; a custom domain is configured (`CNAME`) but not independently confirmed as the serving domain | Medium | 2026-09-13 |
| CVR-039 | 7.10 Case studies — client naming (Jo Jackson Dance Company) | The business is named directly in the profile | A written release permitting the *company profile* specifically to name the client | Auris Nexus Technologies (commercial/legal) | **Verified — user-confirmed external evidence.** Corrected 2026-09-13: the client has personally confirmed written consent exists for naming and describing the work. The consent document itself is not held in this repository and no filename/date/signatory is recorded — see Fact Register F2 correction note. This verifies *naming permission only*, not any outcome, duration or financial claim (none is made) | High | 2026-09-13 |
| CVR-040 | 7.10 Case studies — client naming (Pro Energy Solutions) | The business is named directly in the profile | A written release permitting the *company profile* specifically to name the client | Auris Nexus Technologies (commercial/legal) | **Verified — user-confirmed external evidence.** Same basis and same-day correction as CVR-039 — see Fact Register F2 correction note. Verifies *naming permission only* | High | 2026-09-13 |

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
