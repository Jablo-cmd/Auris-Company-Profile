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
| Front matter / Part One | **Full — re-audited line-by-line at Stage 7 (2026-09-13); reconciled against owner-supplied strategic identity and corporate information at Stage 9 (2026-09-13)** | Original pass was targeted; the Stage 7 session read every Part One file in full against this register. Found and corrected two gaps beyond the original tax-compliance fix: (1) the "we operate our own HR/school platforms" claim, asserted as fact with no token across six locations — see CVR-011; (2) 1.10 Our operating model (Strategic Identity Hold item 7) carried no `[[TOKEN]]`/⚠ warning despite being an unapproved proposal, unlike the other six hold items — now corrected. **Stage 9 addendum:** every Part One file was re-read against owner-supplied strategic identity content and corporate facts; the independent-governance-layer claim in 1.10 was found to be actively contradicted (not merely unapproved) by the confirmed headcount, and corrected — see CVR-020/027/030 |
| Part Two — Services | **Full — line-by-line audited at Stage 8A (2026-09-13); evidence-closure pass at Stage 8B (2026-09-13)** | Every one of the ten Part Two files (2.0–2.9) was read in full against this register at Stage 8A. Found two claims not covered by the blanket per-service fact-callout gate (CVR-010) — added as CVR-041 (2.1) and CVR-042 (2.8). Stage 8B additionally closed two more `[[PROOF_*]]` tokens using evidence already available (2.2 via CVR-047, 2.3's school-management half via CVR-048), alongside 2.5's Stage 8A resolution — three of eight services now have a resolved fact callout; see the CVR-010 update above |
| Part Three — Industries | **Full — line-by-line audited at Stage 8A (2026-09-13)** | Every one of the eight Part Three files (3.0–3.7) was read in full against this register. No claim was found outside the existing blanket `[[SECTORS_DELIVERED]]` gate (CVR-013/CVR-014) — all challenge/solution/value narrative is sector-general domain knowledge, not a specific delivery claim |
| Part Four — Technical Capabilities | **Full — line-by-line audited at Stage 8A (2026-09-13)** | Every one of the twelve Part Four files (4.0–4.11) was read in full against this register. No claim was found outside the existing current/capable/planned token structure (CVR-015/016/017); the partial "currently used" resolution for 4.1 and 4.6 is recorded at CVR-043 through CVR-045 and reflected in the CVR-015 update above |
| Part Five — Project Delivery | **Full — drafted and audited together; two coverage gaps closed at the Stage 7 re-audit (2026-09-13)** | Every section was reviewed at drafting time, but 5.4 Phase 9 and 5.7 had no register row despite that — added as CVR-030 and CVR-029. Coverage is now genuinely complete for this Part |
| Part Six, Closing | **Drafted and audited together at Stage 9 (2026-09-13)** | Nine Part Six files (6.0–6.8) and the Closing section (8.1/8.2) were drafted for the first time, per Stage 7's working method of auditing at drafting time. Every substantive claim in these ten files is either a direct owner-confirmed fact already recorded in the Fact Register (Group B/E, same evidentiary tier as A1/A3), a cross-reference to an already-tracked claim (4.1/4.6 via CVR-043–045, the "single accountable founder" claim via CVR-006), or an explicit open token / "not yet confirmed" statement. No new CVR row was required — none of these ten files states an independently challengeable claim beyond what is already tracked or owner-confirmed |
| Part Seven — Credentials | **Drafted and audited together at Stage 9 (2026-09-13)**, except 7.10 (early-drafted and audited at Stage 7) | Ten further Part Seven files (7.1–7.9, 7.11) were drafted for the first time, on the same basis as the Part Six/Closing row above — no new CVR row required. A cross-document consistency risk between 7.10 and the public website's "LOGIOS OS" portfolio entry is tracked at CVR-046 |

**All seven Parts, plus the Closing section, are now drafted and audited line-by-line** as of Stage 9
— this does not mean every claim within them is *verified*; many remain **Gated** or **Unverified**
pending evidence — only that coverage of the copy against this register is complete throughout the
document. Part Six and the remainder of Part Seven were drafted and audited together at Stage 9, per
the working method used since Stage 7.

### Register tally (as of 2026-09-13, Stage 9 owner-information reconciliation)

| Status | Count | Rows |
|---|---|---|
| Verified | 16 | CVR-001, 002, 005, 006, 013, 035, 036, 037, 038, 039, 040, 043, 044, 045, 047, 048 |
| Gated (open Fact Register token) | 13 | CVR-003, 004, 010, 011, 014, 015, 016, 017, 018, 022, 024, 026, 028 |
| Unverified (no evidence, no gating token) | 12 | CVR-007, 008, 009, 012, 019, 021, 023, 025, 029, 041, 042, 046 |
| Rejected | 3 | CVR-020, 027, 030 |
| **Total** | **44** | CVR-001 through CVR-030 (30 rows), plus CVR-035 through CVR-048 (14 rows; IDs 031–034 not used) |

**On the three newly Rejected rows (CVR-020, 027, 030, corrected 2026-09-13, Stage 9).** These are
this register's first Rejected rows. They are not simply claims that stayed unproven — they are
claims that **owner-confirmed information (headcount = 1 employee, Fact Register B9) actively
contradicts.** A one-person company cannot have a delivery team and an independent governance layer
be different people; the claim was corrected in the copy (1.10, 5.2, 5.4, 5.8), not merely re-gated
or left as a proposal awaiting approval. This is the register functioning exactly as intended: a
claim, once checked against new evidence, that does not survive is corrected, and the record of that
correction is kept rather than quietly edited away.

**On the three newly Verified rows resolved by owner-confirmed corporate information (CVR-001, 005,
006).** CVR-001 (head office) and CVR-005 (SARS tax registration) are verified the same way as B7 and
E4/E5 in the Fact Register — a direct owner statement of the company's own registration facts, the
same evidentiary tier as A1/A3. CVR-006 is verified differently: not by a contract template, but
because the claim ("the same named principal is accountable throughout") is a direct logical
consequence of the confirmed headcount — with one employee, no other outcome is possible.

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

**On the three technology-evidence Verified rows (CVR-043–045, added 2026-09-13, Stage 8A).** Same
route as CVR-035–038: direct inspection of primary source (package manifests, config files, database
migrations and in-code usage across Sebetsa and Funda360), not a Fact Register token resolving. Each
verifies only the specific "currently used" sentence quoted in its own row — "demonstrated
implementation experience" — and explicitly does not verify commercial delivery volume, tenure,
certification or any client-specific arrangement, none of which those sentences claim. This resolves
Fact Register **C3** for two of ten Part Four domains only; **C4** and the remaining eight domains are
untouched by these three rows.

**On the two new Unverified rows from the Part Two line-by-line audit (CVR-041–042) and the new
cross-document flag (CVR-046, all added 2026-09-13, Stage 8A).** CVR-041 and CVR-042 are ordinary
findings of the kind this register's maintenance rule anticipates — a line-by-line read of copy not
previously fully audited surfacing individual claims narrower than an existing blanket gate. CVR-046 is
a different kind of entry: it does not challenge anything stated in this profile's own copy (7.10 makes
no "LOGIOS" claim), but flags a risk that a diligent evaluator who cross-checks this profile against the
public Auris Nexus Technologies website could encounter an unreconciled name discrepancy. It closes only
when the two are documented as the same product or the public website's claim is corrected — Stage 8B
confirmed this profile's own side of that risk is already clean (see the CVR-046 row itself).

**On the two new Verified rows from Stage 8B's evidence-closure pass (CVR-047–048).** Both follow the
same route as CVR-035–038/043–045: direct source inspection, not a Fact Register token resolving.
CVR-047 is a new evidentiary pattern for this register — an *anonymised* capability reference, where
the underlying system and its commissioning client are real and directly inspected, but no name or
identifying detail is used in the copy at all, so the naming-consent question this register otherwise
tracks (CVR-039/040) does not arise. CVR-048 reuses CVR-036's existing evidence at a second location
(2.3) and is deliberately worded to avoid resolving the separate, still-open CVR-011 (Platform
Operating Model) claim — reusing evidence for one narrow claim must not be read as resolving a broader,
unrelated claim the same project happens to also be relevant to.

**Read this tally carefully: "Gated" is not "safe" and "Unverified" is not "worse than Gated" in
severity — both mean the underlying fact is not yet evidenced.** The distinction is only about
whether the copy already discloses that (Gated, via a visible token) or currently reads as settled
fact with nothing on the page to signal otherwise (Unverified). Every High-risk row in either category
— CVR-003/004 (Tax Compliance Status specifically — the underlying registration, CVR-005, resolved at
Stage 9), CVR-010 (per-service proof points), CVR-011 (platform operating model), CVR-014 (sector
delivery), CVR-015/016/017 (technology, cloud partner, certifications), CVR-023 (mandatory security
gate), CVR-026 (support model), CVR-028 (SLA figures) — must be resolved with genuine evidence before
this document is presented as procurement-ready. None of them may be closed by drafting judgement
alone. (CVR-001/005/006, resolved by owner-confirmed corporate information, and CVR-039/040,
client-naming consent for the two named case-study businesses, closed 2026-09-13 on user-confirmed
external evidence — see above. CVR-020/027/030 closed the opposite way: Rejected, not Verified — see
the note above.)

---

## 6. Register

| Claim ID | Section | Claim text | Required supporting evidence | Evidence owner | Status | Risk | Date verified |
|---|---|---|---|---|---|---|---|
| CVR-001 | Front matter, MD message | "We are a South African company, based in Johannesburg" | CIPC registration extract; lease or property record for head office | Auris Nexus Technologies | **Verified — owner-confirmed, Stage 9.** Full address (140 Linden Street, Sandown, 2196) supplied — Fact Register **B7** | Medium | 2026-09-13 |
| CVR-002 | 1.1 Executive summary | "Auris Nexus Technologies... provides thirteen services across three connected disciplines" | Confirmed service list (already resolved, Fact Register C1) | Auris Nexus Technologies | Verified | Low | 2026-08-02 |
| CVR-003 | 1.1 Executive summary | Tax compliance status (originally stated as fact; corrected to `[[TAX_COMPLIANCE_STATUS]]`) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) — **still open at Stage 9.** A tax reference number is now confirmed (CVR-005), but per explicit owner direction a TCS PIN/validity is a distinct fact and is not inferred from it | High | — |
| CVR-004 | 1.2 Company overview | Tax compliance status (same correction as CVR-003) | Current SARS Tax Compliance Status PIN and validity | Finance / company secretary | Gated ([[TAX_COMPLIANCE_STATUS]], Fact Register E6) — still open at Stage 9, same basis as CVR-003 | High | — |
| CVR-005 | 1.2 Company overview | "The company is registered with the South African Revenue Service" | Income tax reference number / SARS registration confirmation | Finance / company secretary | **Verified — owner-confirmed, Stage 9.** Tax reference number 9755014207 supplied — Fact Register **E4**. Verifies registration only, not compliance status (CVR-003/004 remain open) | High | 2026-09-13 |
| CVR-006 | 1.9 Competitive advantages #6 (moved from 1.5 Core values, Accountability, removed at Stage 9) | "The same named principal is accountable from discovery through to support" | Standard contract template or engagement letter showing this clause, or the confirmed headcount making the claim a logical necessity | Auris Nexus Technologies (legal/commercial) | **Verified 2026-09-13, Stage 9 — by confirmed headcount, not a contract template.** The original 1.5 wording ("does not change without your agreement") was removed when the core-values set changed to the owner's six approved values, which do not include this operational test — see Fact Register B4 correction note. The substantively identical claim survives at 1.9 and is now a direct, checkable consequence of the confirmed headcount of 1 employee (Fact Register B9): with one person in the company, the same principal necessarily handles every engagement start to finish. No contract-template evidence is required for a claim that follows necessarily from headcount | Medium | 2026-09-13 |
| CVR-007 | 1.8 §5 / 1.9 §5 (moved from 1.5 Core values, Continuity, removed at Stage 9) | "Documentation, source access and knowledge transfer are contractual deliverables with acceptance criteria" | Standard contract template showing these clauses and acceptance criteria | Auris Nexus Technologies (legal/commercial) | Unverified — no longer blocked on strategic hold (Core Values are now owner-approved, Fact Register B4), but no contract template evidencing this specific clause has been produced. The 1.5 wording this row originally tracked was removed when the values set changed; the same substantive claim survives in 1.8 and 1.9 and is retracked here | Medium | — |
| CVR-008 | 1.8 Why Auris Nexus | "We are directly reachable, locally accountable and in the same time zone" | Organisational structure confirming no offshore approval layer | Auris Nexus Technologies | Unverified | Low | — |
| CVR-009 | 1.9 Competitive advantages #4 | "We forgo the cost advantage of offshore delivery" | Delivery location/staffing record | Auris Nexus Technologies | Unverified | Low | — |
| CVR-010 | 2.1–2.8 (all service spreads) | "Fact callout" proof point per service | A real, named or anonymised delivered example per service | Delivery leadership | Gated ([[PROOF_*]] per service, Fact Register C2) — **partially resolved for 3 of 8 services**: 2.5 Web Design and Development (Stage 8A, Pro Energy Solutions; CVR-038/CVR-040), 2.2 Custom Software Development (Stage 8B, anonymised; CVR-047), and 2.3 Enterprise Management Systems (Stage 8B, school-management half only; CVR-048). Remains Gated for 2.1, 2.4, 2.6, 2.7, 2.8, and for the HR & employee management half of 2.3, each with its own open `[[PROOF_*]]` token | High | — |
| CVR-011 | Front matter (MD message); 1.1; 1.3; 1.8 §2; 1.9 §2; **2.3 Enterprise Management Systems** (source spread) | "We operate our own HR and school management platforms" / "platforms we operate ourselves, not products we shipped and moved on from" — recurs in six locations, none previously tokenized | Evidence Auris independently operates and maintains at least one live HR or school-management platform instance as of a stated date (admin-console record, deployment/hosting register, or a consented case study) — distinguished from evidence that these are merely *offered* as buildable services | Product/platform owner | **Gated** (`[[PLATFORM_OPERATING_MODEL]]`, Fact Register **C14**) — corrected from Unverified at the 2026-09-13 Stage 7 re-audit, same failure mode as CVR-003/004: Fact Register **C1** confirms these are 2 of the 13 offered services, not that Auris self-operates them as ongoing products. **Not to be marked Verified merely because C1 is resolved** — C1 does not evidence the operating-model claim. Wording should remain as drafted (it reads as intent/positioning once tokenized) rather than being deleted; do not restate as settled fact anywhere else pending C14 | High | — |
| CVR-012 | 2.9 Engagement models | Five named commercial models genuinely offered | Sample contracts or rate cards evidencing each of the five models in actual use | Commercial/finance | Unverified | Medium | — |
| CVR-013 | 3.0–3.6 (all industry sections) | Sector challenge/solution/value narrative, general | None required — written as domain knowledge, not a delivery claim | — | Verified as non-claim | Low | 2026-08-02 |
| CVR-014 | 3.1–3.6 (all industry sections) | Blanket delivery-experience gate | Client references or case studies per sector, once consented | Delivery leadership | Gated ([[SECTORS_DELIVERED]], Fact Register C7) | High | — |
| CVR-015 | 4.0–4.10 (all technical domains) | Current/capable/planned technology claims | Confirmed technology inventory per domain | Engineering leadership | Gated ([[TECH_CURRENT_*]] etc., Fact Register C3/C4) — **partially resolved 2026-09-13, Stage 8A, for the "currently used" state only, in 2 of 10 domains** (4.1 Software engineering; 4.6 Data platforms and databases — see CVR-043 through CVR-045). "Capable of supporting" and "planned / future roadmap" remain Gated in all ten domains; "currently used" remains Gated in the remaining eight (4.0, 4.2–4.5, 4.7–4.10); Fact Register **C4** remains open in full | High | — |
| CVR-016 | 4.3 Cloud and infrastructure | Hyperscaler partner-tier status | Partner-tier certificate or portal confirmation from the hyperscaler | Engineering leadership | Gated ([[CLOUD_PARTNER_STATUS]], Fact Register C10) | High | — |
| CVR-017 | 4.4 Cybersecurity | Security certifications held | Certificate and current validity | Engineering/compliance leadership | Gated ([[CERTS_HELD]], Fact Register C13/E13) | High | — |
| CVR-018 | 5.0 Delivery lifecycle | Methodology applied per engagement (agile/waterfall/hybrid) | Sample project plans evidencing methodology variance across engagements | Delivery leadership | Gated ([[DELIVERY_METHODOLOGY]], Fact Register D1) | Medium | — |
| CVR-019 | 5.1 Discovery | "We engage the people who will use the system, not only the people who commissioned it" | A discovery report or workshop attendee list from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-020 | 5.2 Analysis, architecture, UI/UX | ~~Architecture reviewed by a governance layer independent of the authoring team~~ — claim removed 2026-09-13, Stage 9 | Confirmed headcount (Fact Register B9) | Delivery leadership | **Rejected — corrected 2026-09-13, Stage 9, not merely re-gated.** The owner-confirmed headcount of 1 employee (Fact Register B9) directly contradicts an independent-review claim: a one-person company cannot have the authoring team and an independent reviewer be different people. The claim has been removed from 5.2's copy and replaced with an accurate "deliberate checkpoint" description that does not assert independence. Same underlying claim as CVR-027 and CVR-030, corrected together | Medium | 2026-09-13 |
| CVR-021 | 5.3 Development | Iterative delivery as the default approach | Sprint or iteration record from a real engagement | Delivery leadership | Unverified | Medium | — |
| CVR-022 | 5.3 Development | Project management framework / certifications held by staff | Certificate register per named staff member | HR / delivery leadership | Gated ([[PM_FRAMEWORK_CERTS]], Fact Register D2) | Medium | — |
| CVR-023 | 5.4 Testing, QA, security testing | "Security testing is a mandatory gate before deployment" | Deployment checklist or gate-sign-off template showing the gate as mandatory | Engineering leadership | Unverified | High | — |
| CVR-024 | 5.4 Testing, QA, security testing | Test pyramid detail and coverage targets | Test coverage report or CI configuration | Engineering leadership | Gated ([[TEST_PYRAMID_DETAIL]]) | Medium | — |
| CVR-030 | 5.4 Testing, QA, security testing — Phase 9 | ~~"Independent review, distinct from the development team per the governance principle in 1.10"~~ — claim removed 2026-09-13, Stage 9 | Confirmed headcount (Fact Register B9) | Delivery leadership | **Rejected — corrected 2026-09-13, Stage 9, not merely re-gated.** Same basis as CVR-020: the confirmed 1-employee headcount directly contradicts an independent-reviewer claim. Phase 9's copy is corrected to describe a dedicated QA phase in the same person's process, not a handover to an independent reviewer. Same underlying claim as CVR-020 and CVR-027, corrected together | Medium | 2026-09-13 |
| CVR-025 | 5.5 Deployment and training | Deployment planned with explicit rollback path | Deployment runbook template showing rollback procedure | Engineering leadership | Unverified | Medium | — |
| CVR-026 | 5.6 Support and maintenance | Support model, hours of cover, escalation path | Support policy document or SLA schedule | Support leadership | Gated ([[SUPPORT_MODEL]] etc., Fact Register D3) | High | — |
| CVR-029 | 5.7 Continuous improvement | "Periodic service review examines what the system is actually doing in production... usage patterns, support ticket themes, performance against the service level framework" as an established practice | A service-review report or template from a real engagement | Delivery leadership | Unverified. **Added at the 2026-09-13 Stage 7 re-audit — this section had no register entry despite the Part Five coverage table describing "every section reviewed at drafting time."** | Medium | — |
| CVR-027 | 5.8 Delivery governance | ~~"Every engagement carries a governance layer distinct from the delivery team executing it"~~ — claim removed 2026-09-13, Stage 9 | Confirmed headcount (Fact Register B9) | Auris Nexus Technologies leadership | **Rejected — corrected 2026-09-13, Stage 9.** Strategic Identity Hold item 7 (the Operating Capability Structure) is now owner-approved — but as a **five-capability-area structure**, not the three-layer structure this claim depended on. The approval that arrived is not an approval of independent governance; it replaces that proposal with a different one, and the owner-confirmed headcount of 1 employee (Fact Register B9) directly contradicts the original independent-governance claim regardless. 5.8's copy is corrected to describe direct, undistributed accountability at the company's current size, with formal independent review stated as an intended future step, not a current fact. Same underlying claim as CVR-020 and CVR-030, corrected together | Medium | 2026-09-13 |
| CVR-028 | 5.9 Service level framework | Severity, response, restoration, availability targets | Standard SLA schedule or sample signed SLA | Commercial/support leadership | Gated ([[SLA_*]] tokens, Fact Register D4) | High | — |
| CVR-035 | 7.10 Case studies — Sebetsa | Feature list (org hierarchy, sites/clients/contracts, scheduling, availability, leave, attendance, RBAC, tenant-scoped audit log) and "in active development... not yet in commercial deployment" | Direct inspection of `github.com/Jablo-cmd/sebetsa` — source code, 46 database migrations, RLS policies, audit-log implementation, 54 e2e test specs | Delivery leadership | **Verified against source repository** — every listed feature corresponds to an existing table/migration/feature folder inspected 2026-09-13; no commercial-deployment claim is made, consistent with the evidence (no client/tenant data beyond an unbuilt planning TODO) | Medium | 2026-09-13 |
| CVR-036 | 7.10 Case studies — Funda360 | Feature list (admissions, learner/staff records, attendance, homework, report cards, parent portal, fees) and "built and verified in local development... pilot has not yet been executed" | Direct inspection of `github.com/Jablo-cmd/funda360`, specifically `docs/product/FUNDA360-CURRENT-STATE.md` (2026-08-28, verified-baseline audit) and `docs/FUNDA360_PILOT_DEPLOYMENT_CHECKLIST.md` (entirely unchecked) | Delivery leadership | **Verified against source repository.** Note: the repository's own ~19 elaborate "PRD/BRS/SDD"-style documents are explicitly flagged by its own current-state audit as aspirational LLM-generated output describing features that do not exist — none of those documents were used as evidence here, only the code, schema, tests and the current-state audit itself | Medium | 2026-09-13 |
| CVR-037 | 7.10 Case studies — Jo Jackson Dance Company | "feature-complete and production-ready, live at the studio's own domain, with final photography still pending" | Direct inspection of `github.com/Jablo-cmd/jjdcmain-01`, specifically `RELEASE-REPORT-v1.0.0.md` (live Playwright smoke test, axe-core WCAG scan, Lighthouse audit across 9 pages) and `docs/CLIENT-CHECKLIST.md` | Delivery leadership | **Verified against source repository** | Medium | 2026-09-13 |
| CVR-038 | 7.10 Case studies — Pro Energy Solutions | "eleven-page site... responsive... technical SEO foundation... performance-conscious build practices... completed and live" | Direct inspection of `github.com/Jablo-cmd/pro-energy-soltuions` — 11 HTML pages, 10 CSS `@media` blocks, viewport meta tag, sitemap.xml/robots.txt, Open Graph/Twitter Card tags, `loading="lazy"` and explicit width/height on images | Delivery leadership | **Verified against source repository.** "Live" is evidenced by a working Netlify deployment referenced in its own sitemap; a custom domain is configured (`CNAME`) but not independently confirmed as the serving domain | Medium | 2026-09-13 |
| CVR-039 | 7.10 Case studies — client naming (Jo Jackson Dance Company) | The business is named directly in the profile | A written release permitting the *company profile* specifically to name the client | Auris Nexus Technologies (commercial/legal) | **Verified — user-confirmed external evidence.** Corrected 2026-09-13: the client has personally confirmed written consent exists for naming and describing the work. The consent document itself is not held in this repository and no filename/date/signatory is recorded — see Fact Register F2 correction note. This verifies *naming permission only*, not any outcome, duration or financial claim (none is made) | High | 2026-09-13 |
| CVR-040 | 7.10 Case studies — client naming (Pro Energy Solutions) | The business is named directly in the profile | A written release permitting the *company profile* specifically to name the client | Auris Nexus Technologies (commercial/legal) | **Verified — user-confirmed external evidence.** Same basis and same-day correction as CVR-039 — see Fact Register F2 correction note. Verifies *naming permission only* | High | 2026-09-13 |
| CVR-041 | 2.1 ICT Advisory and Digital Transformation — Business benefits | "An independent advisory voice — not tied to downstream build revenue — on whether a proposed system is the right answer" | Evidence that advisory engagements are genuinely separable, commercially or organisationally, from build engagements (e.g. distinct engagement terms, or a stated policy against advisory recommendations being incentive-linked to downstream build work) | Auris Nexus Technologies (commercial/delivery leadership) | Unverified. Added at the 2026-09-13 Stage 8A line-by-line audit of Part Two — this specific structural claim is narrower than, and not covered by, the blanket 2.1 fact-callout gate at CVR-010 | Medium | — |
| CVR-042 | 2.8 Cloud, Integration and Managed Support — Business benefits | "Continued accountability from the team with the deepest knowledge of the system, rather than a handover to an unfamiliar support desk" | Evidence of an actual support-continuity practice — e.g. a policy, or a sample engagement, showing the original delivery team remains the client's support point of contact after go-live | Auris Nexus Technologies (delivery/support leadership) | Unverified. Added at the 2026-09-13 Stage 8A line-by-line audit of Part Two — distinct from, and not covered by, the blanket 2.8 fact-callout gate at CVR-010 | Medium | — |
| CVR-043 | 4.1 Software engineering — "Technologies currently used" | "demonstrated implementation experience with React, TypeScript and Vite... React 18, TypeScript 5.6 and Vite 5.4 in Sebetsa and Funda360, and React 19, TypeScript 6 and Vite 8 in a further Auris-built system held confidentially..." | Direct inspection of `package.json` dependencies and config files (`vite.config.ts`, `tailwind.config.ts`) and in-code framework usage in all three repositories | Engineering leadership | **Verified against source repository.** Confirmed 2026-09-13, Stage 8A; **corrected 2026-09-13, Stage 8B** — the Stage 8A wording attributed "React 18" uniformly to all three systems, but direct re-inspection (filesystem access to all three repositories, not available at Stage 8A) found the third system runs React 19/TypeScript 6/Vite 8, a different major-version generation. The claim text is corrected to attribute each version accurately. Still deliberately scoped to demonstrated implementation experience only — no commercial delivery volume, years of experience or vendor certification is claimed | Medium | 2026-09-13 (corrected 2026-09-13) |
| CVR-044 | 4.1 Software engineering — "Code quality regime" | "Sebetsa and Funda360 both evidence... Vitest... Playwright... ESLint and Prettier. The confidentially-held third system evidences... Vitest with React Testing Library... and Oxlint in place of ESLint" | Direct inspection of `vitest.config.ts`, `playwright.config.ts`, and lint/format configuration files in all three repositories | Engineering leadership | **Verified against source repository.** Confirmed 2026-09-13, Stage 8A; **corrected 2026-09-13, Stage 8B** — the Stage 8A wording attributed Playwright and ESLint uniformly to "the same systems referenced above," but direct re-inspection found the third system has no `@playwright/test` dependency and no e2e suite, and uses Oxlint (not ESLint). The claim is corrected to attribute each tool to the specific system(s) that evidence it. "Specific coverage-threshold policy and merge review-gate configuration are not evidenced in any of the three" remains accurate and unclaimed | Medium | 2026-09-13 (corrected 2026-09-13) |
| CVR-045 | 4.6 Data platforms and databases — "Technologies currently used" | "PostgreSQL... via Supabase, evidenced independently across three Auris-developed systems. Two of them... additionally evidence... Deno. A third... evidences... Auth and... Storage, but no Edge Functions..." | Direct inspection of database migration files, in-code usage (`supabase.storage.from()`, `auth.uid()`) and Edge Function source (or its absence) across all three Auris-developed systems | Engineering leadership | **Verified against source repository.** Confirmed 2026-09-13, Stage 8A for Sebetsa/Funda360; **extended 2026-09-13, Stage 8B** to the confidentially-held third system, independently confirming PostgreSQL via Supabase with Auth (`auth.uid()`, 10 files) and Storage (3 in-code call sites), but no `supabase/functions` directory found — Deno/Edge-Function usage is correctly not claimed for this third system. Explicitly scoped to demonstrated implementation experience — no managed-hosting arrangement, uptime commitment, or client-specific database choice is claimed | Medium | 2026-09-13 (extended 2026-09-13) |
| CVR-046 | 7.10 Case studies (Logistics App) vs. public Auris Nexus Technologies website | The public website's portfolio page names a case study "LOGIOS" / "LOGIOS OS"; this profile instead evidences a real, owner-confirmed product named "Logistics App" (Fact Register F10), with no documentary confirmation that the two names refer to the same product | Either (a) the local Logistics App source or its own documentation explicitly confirming "LOGIOS"/"LOGIOS OS" as an official or historical name for it, or (b) confirmation that the two are separate products — followed by correction of whichever public-facing claim is then unsupported | Auris Nexus Technologies (product/marketing) | **Unverified — flagged as a cross-document consistency risk, not gated by an internal token.** Added 2026-09-13, Stage 8A. **Reconciled 2026-09-13, Stage 8B:** re-checked repo-wide — this profile's own copy uses only "Logistics App," nowhere "LOGIOS"/"LOGIOS OS" (confirmed by grep across all Markdown files); the `Jablo-cmd/Logistics-App` remote itself still contains only a one-line placeholder README with no name evidence either way. **This profile's own terminology is therefore already safe and requires no change.** The row stays open because the residual action — reconciling or correcting the public website's "LOGIOS OS" naming — is outside this repository's scope (`Jablo-cmd/Auris-Nexus-Technologies` was not modified, per this task's instruction) and can only close once that site is corrected or the two names are documented as the same product | Medium | — |
| CVR-047 | 2.2 Custom Software Development — Fact callout | "A workforce administration system, built for a South African organisation whose staff are deployed across multiple client operational sites... employee records, attendance, leave requests and approvals, multi-site posting and deployment management, contracts, HR request workflows, reporting and a full audit trail" | Direct inspection of the source repository investigated for Fact Register F8 (`src/features/`: attendance, employees, leave, hr-requests, postings, contracts, reports, documents, audit) | Auris Nexus Technologies (delivery leadership) | **Verified against source repository, added 2026-09-13, Stage 8B.** Every capability named is a feature folder confirmed present in the repository. No client name, sub-client name, or sector-identifying detail is used — the repository's seed data independently confirms a real, named third-party commissioning client and several of its own named sub-clients, none of which appear anywhere in this profile. Naming consent (Fact Register F2's standard) does not apply here because no name is used at all | Medium | 2026-09-13 |
| CVR-048 | 2.3 Enterprise Management Systems — Fact callout (school-management half only) | "Funda360 — a school management platform Auris Nexus has built... Built and verified in local development... that pilot has not yet been executed, and no school is currently running it" | Direct inspection of `github.com/Jablo-cmd/funda360`, same evidence basis as CVR-036 | Auris Nexus Technologies (delivery leadership) | **Verified against source repository, added 2026-09-13, Stage 8B**, reusing CVR-036's evidence for a second location. Explicitly does not verify `[[PLATFORM_OPERATING_MODEL]]` or `[[PLATFORM_DEPLOYMENTS]]` (CVR-011) — the callout states Funda360 is not yet operating for any school, which is evidence against that broader claim, not toward it. The "HR & employee management" half of 2.3 remains unresolved | Medium | 2026-09-13 |

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
