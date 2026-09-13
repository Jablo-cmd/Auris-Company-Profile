# Project Handover Brief
## Auris Nexus Technologies (Pty) Ltd — Corporate Profile

**Document:** `01_Project/08_Project-Handover-Brief.md`
**Status:** Client-issued checkpoint, recorded verbatim in substance (2026-08-02)
**Purpose:** A single, self-contained brief that lets anyone — a new session, a colleague, an
auditor — pick up this project cold and understand the non-negotiable rules, current progress, and
quality bar, without reconstructing them from the working history.

This document does not supersede `00_Project-Charter.md`, `05_Fact-Register.md`,
`06_Production-Conventions.md` or `07_Claim-Verification-Register.md` — it summarises and
cross-references them. Where a discrepancy exists between this brief and one of those documents,
see §7 below for how it is reconciled.

---

## 1. Project status

A long-term, agency-grade company profile and corporate identity project for Auris Nexus
Technologies (Pty) Ltd. The objective is a publication comparable to work from leading international
branding agencies, not a typical company brochure.

**Final deliverables:** premium printed company profile · digital PDF · Microsoft Word master ·
print-ready PDF · offset-print production files · corporate design system · tender-ready
documentation · brand standards · full evidence traceability.

---

## 2. Non-negotiable project rules

These rules override everything else, including convenience, schedule pressure, or a section
reading better without them.

1. **Never invent facts.** Unconfirmed information becomes a visible `[[TOKEN]]`, recorded in the
   Fact Register. Assumptions are never presented as facts.
2. **The Fact Register is the single source of truth.** Every fact gap exposed by drafting gets a
   new, ID'd, risk-classified item, tagged to the stage that needs it. It evolves continuously.
3. **The Claim Verification Register runs alongside it.** Every statement challengeable in
   procurement, audit, legal review, due diligence or enterprise vendor onboarding gets an entry:
   Claim ID, section reference, exact claim, required evidence, evidence owner, verification status,
   risk rating, verification date. Nothing leaves draft status until claims are evidenced.
4. **Strategic Identity Hold.** Vision, Mission, Core Values, Brand Promise, Founding Story, Company
   Milestones and Operating Structure remain intentionally tokenized until developed collaboratively
   with the client at the Brand Strategy Workshop. Never invent or finalise them.
5. **Print-first philosophy.** Design for CMYK-safe colour, offset printing, bleed, crop marks, safe
   margins, professional typography, 300 dpi imagery, print-safe contrast, binding gutter, premium
   stock. The Word version is derived from the print design, never the reverse.
6. **The design system (Stage 2) is frozen.** No component changes without explicit approval —
   altering it after Stage 2 invalidates downstream work built against it.
7. **Logo and colour.** Brand colours are sampled from the supplied artwork, not chosen: Nexus Navy
   `#001A48`, Auris Cyan `#098FB4`, Signal Cyan `#00B3BF`. The governing geometric angle, 3:5 (31°),
   governs section markers, bullets, component angles, tables, diagrams and navigation devices
   throughout.
8. **Production recommendation.** The existing logo is raster only. Before final publication,
   commission a vector rebuild: SVG, AI, EPS, monochrome, reversed, transparent, horizontal lock-up,
   favicon, social avatar.

---

## 3. Progress to date

| Stage | Content | Extent | Status |
|---|---|---|---|
| 1 | Planning | — | ✅ Completed, approved |
| 2 | Brand identity, design language, typography, colour system, components, grid, spacing, production rules | ~20 000 words | ✅ Completed, approved and frozen |
| 3 | Part One — The Company | ~7 700 words | ✅ Draft complete. Strategic items intentionally held |
| 4 | Part Two — Services | ~4 400 words (corrected 2026-09-13, Stage 8A; previously misstated as ~5 700 — see README.md ‡ note) | ✅ No fabricated client examples; all proof points tokenized |
| 5 | Part Three — Industries | ~2 700 words (corrected 2026-09-13, Stage 8A; previously misstated as ~5 100) | ✅ Sector knowledge only; no false delivery claims; delivered-sector claims tokenized |
| 6 | Part Four — Technical Capabilities | ~2 000 words (corrected 2026-09-13, Stage 8A; previously misstated as ~4 600) | ✅ Three-tier Current/Capable/Planned model applied; no certifications, cloud partnerships or technology claims invented; Fact Register items C8–C13 added |
| 7 | Part Five — Project Delivery | ~1 700 words (corrected 2026-09-13; previously misstated as ~3 600 — see below) | ✅ Lifecycle, discovery, planning, architecture, development, testing, deployment, support, continuous improvement, governance, SLA framework. No PMO/ITIL/DevSecOps/ISO system implied; every operational metric tokenized; SLA table intentionally unpopulated |

**Quality improvement introduced this stage:** the Claim Verification Register was created. Its audit
depth differs by part and this brief states it precisely, because the two are not interchangeable:
**Part Five was audited claim-by-claim at drafting time** (every section reviewed as it was written);
Parts One–Four originally received only a targeted pass. **Corrected 2026-09-13, Stage 8A: Parts Two,
Three and Four have since each been read and audited line-by-line in full** — see the Stage 8A note
below and the Claim Verification Register's own §5 coverage table for the detail. No part of the
document remains on a targeted-only pass as of this correction.

**2026-09-13 Stage 7 re-audit.** This project's own rule — never treat the previous audit as
self-certifying — was applied against the register itself. Part One was re-read line-by-line in full
(upgrading its coverage from targeted to full). The original tax-compliance fix was confirmed still
correct and complete; beyond that, one further unsupported claim and two register/documentation gaps
were found and corrected:

1. **Tax compliance (original finding, confirmed still correctly fixed).** 1.1 and 1.2 originally
   stated tax compliance as established fact; both are `[[TAX_COMPLIANCE_STATUS]]`-gated. Re-checked
   across the whole repository at this re-audit — no duplicate or contradictory assertion remains
   anywhere else.
2. **"We operate our own HR/school platforms" (new finding).** This claim was stated as fact, with no
   token, in six locations (MD message, 1.1, 1.3, 1.8, 1.9, 2.3) — see Claim Verification Register
   **CVR-011**. The only resolved fact behind it, Fact Register **C1**, confirms these are two of the
   thirteen *offered services*; it does not evidence that Auris self-operates them as ongoing
   products. All six locations now carry `[[PLATFORM_OPERATING_MODEL]]` (Fact Register **C14**). This
   is the register's second-highest-risk open item after the SLA and security-certification tokens.
3. **1.10 Our operating model carried no strategic-hold marking.** It is Strategic Identity Hold item
   7 per §2 rule 4 below, yet — unlike the other six hold items — its file had no `[[TOKEN]]`/⚠
   warning disclosing that it is an unapproved proposal. Corrected: it now carries
   `[[OPERATING_MODEL_APPROVED]]` and the same warning treatment as 1.4/1.5/1.7. This matters because
   5.2, 5.4 (Phase 9) and 5.8 all state an "independent governance layer" as a structural fact that
   traces back to this same unapproved page — see CVR-020, CVR-027, CVR-030.
4. **Two Part Five sections had no Claim Verification Register row** (5.4 Phase 9's independent-review
   claim, and 5.7's service-review claim) despite the coverage table describing Part Five as fully
   audited. Added as CVR-030 and CVR-029. Part Five's coverage is now genuinely complete.

None of these four items required inventing a fact — each was closed by tokenizing an unsupported
assertion or by adding a missing register row, consistent with this project's evidence-first method.
**The underlying facts themselves remain unresolved; only the disclosure in the copy was corrected.**

**2026-09-13, Stage 8A — line-by-line audit of Parts Two–Four completed.** Every file in Parts Two
(2.0–2.9), Three (3.0–3.7) and Four (4.0–4.11) was read in full against the Claim Verification
Register, closing the item flagged in the paragraph above. Findings:

1. **Part Three: no new gap.** Every claim in all eight files is sector-general context, already
   covered by the blanket `[[SECTORS_DELIVERED]]` gate (CVR-013/CVR-014). No specific delivery claim
   was found outside that gate.
2. **Part Four: no new gap**, beyond the technology-evidence resolution addressed separately below.
   Every claim in all twelve files sits within the existing current/capable/planned token structure
   (CVR-015/016/017).
3. **Part Two: two claims found outside the existing per-service fact-callout gate (CVR-010)** — added
   as **CVR-041** (2.1, "an independent advisory voice — not tied to downstream build revenue") and
   **CVR-042** (2.8, "continued accountability... rather than a handover to an unfamiliar support
   desk"). Both are Unverified, Medium risk — ordinary business-benefit claims of the same kind as the
   pre-existing CVR-006/007/009, not evidenced and not yet tokenized.
4. **Technology evidence populated for 2 of 10 Part Four domains.** Fact Register **C3** — previously
   entirely open — is now partially resolved for **4.1 Software engineering** and **4.6 Data platforms
   and databases** by direct source-code, config-file and database-migration inspection across the
   Sebetsa and Funda360 repositories (React 18/TypeScript/Vite/Vitest/Playwright for 4.1; PostgreSQL via
   Supabase, including Auth, Storage and Deno Edge Functions, for 4.6). Recorded as **CVR-043** through
   **CVR-045**, all Verified. This evidences demonstrated implementation experience only — not
   commercial delivery volume, certification, or partner-tier status, none of which is claimed. **C4**
   and the remaining eight domains remain entirely open.
5. **`[[PROOF_WEB]]` resolved for 2.5 Web Design and Development only.** Using evidence already
   established for 7.10 Case studies (Pro Energy Solutions), not new client input. This closes Fact
   Register **C2** for this one service line; C2 remains open for the other seven.
6. **Logistics App added to 7.10 as a fifth case study**, on owner-confirmed evidence (Fact Register
   **F10**) — a different, lower evidentiary tier than the direct source-inspection evidence behind the
   other four entries, used deliberately narrowly (existence and authorship only). A cross-document
   consistency risk between this entry and the public website's "LOGIOS OS" portfolio page is tracked
   at **CVR-046** and remains open.

None of these six items required inventing a fact. The Claim Verification Register now stands at
**42 rows: 11 Verified, 15 Gated, 16 Unverified, 0 Rejected** — see §8 below, which restates the
verification-completeness assessment against these corrected figures.

**Current word count:** approximately **16 900** words drafted — revised down twice since the
original ~24 500 figure: first to ~23 200 (Part Five's word-count correction, plus the 7.10 addition),
then to ~16 900 at Stage 8A once the same bookkeeping error was confirmed and corrected across all 30
files in Parts Two, Three and Four. See `README.md`'s †/‡ notes and `06_Production-Conventions.md` for
the related open item: most sections in Parts Two–Five now measure below their archetype's binding
word band, expected to close as Group C/D tokens resolve rather than by padding.

---

## 4. Next stage

**Stage 8 — Business Excellence.** High-assurance section; extreme care required. Never imply ISO
certification, POPIA compliance, Information Officer appointment, governance framework, security
programme, policies, risk framework, CSR programme, business continuity, disaster recovery, or
environmental policy unless documentary evidence exists. Professional practice may be described only
as **recommended practice**, never presented as existing organisational capability, until verified.

---

## 5. Remaining stages

| Stage | Deliverable |
|---|---|
| 8 | Business Excellence |
| 9 | Credentials |
| 10 | Closing Matter |
| 11 | Word Production |
| 12 | Quality Assurance |
| 13 | Final Print Production |

See §7 for how this list reconciles with the stage table in `06_Production-Conventions.md` §1.

---

## 6. Client preferences and final quality target

**Preferences:** agency-quality work · long-form documentation · no shortcuts · no fabricated
marketing language · every claim traceable · procurement-grade writing · corporate tone · premium
typography · professional publishing standards · documentation that withstands audit and enterprise
due diligence.

**Final quality target:** the finished publication must be fit to be submitted with government
tenders, presented to banks, used for enterprise procurement, given to listed companies, printed as
a premium perfect-bound book, and stand alongside work from top international branding agencies. No
compromises in quality are acceptable.

---

## 7. Reconciliation with `06_Production-Conventions.md`

This brief's remaining-stage list (§5) is more granular in places than the original Stage 1 stage
table in `06_Production-Conventions.md` §1: it names **Closing Matter** as its own stage (the
front-matter-equivalent closing pages, 109–112, not separately broken out in the original table) and
splits the original **Stage 11 — Assembly** into **Word Production** and **Final Print Production**,
with **Quality Assurance** (originally Stage 12) sitting between them rather than last.

Both documents agree on Stages 1–9. Given `06_Production-Conventions.md` is itself a Stage 1
deliverable, it is not silently rewritten to match — this brief is recorded as the client's more
current statement of the remaining sequence, and `06_Production-Conventions.md` §1 carries a
cross-reference note to this section rather than a rewritten table. Confirm before Stage 11 whether
Word Production and Final Print Production should formally become distinct Word-master gates, or
whether this is descriptive shorthand for the same Stage 11 Assembly work.

---

## 8. Stage 7 verification status (2026-09-13 re-audit)

Three separate questions are easy to collapse into one and must not be: whether the Stage 7
*documents* are complete, whether the *claims* in the profile are verified, and whether the profile as
a whole is ready to hand to a procurement evaluator. They are answered separately here.

**A. Stage 7 documentation completeness — COMPLETE.** All ten Part Five sections (5.0–5.9) exist,
are internally consistent (numbering, cross-references, front matter), and are covered by the Claim
Verification Register with no gaps remaining as of this re-audit. The register itself, the Fact
Register, this brief and `06_Production-Conventions.md` are cross-consistent after the corrections
listed in §3 above.

**B. Claim verification completeness — INCOMPLETE, and not close.** *(Figures below corrected
2026-09-13, Stage 8A — the original re-audit figures immediately below this note read "Of 30 rows...
2 Verified... 13 Unverified"; that was superseded first by the same-day addition of CVR-035–040
[36 rows, 8 Verified] and now by the Stage 8A line-by-line audit of Parts Two–Four.)* Of **42 rows** in
the Claim Verification Register: **11 Verified**, **15 Gated** (openly disclosed as unresolved via a
Fact Register token), **16 Unverified** (stated as fact in the copy, no token, no evidence yet). Zero
Rejected. The highest-risk open items — none of which may be presented to an evaluator as settled —
are unchanged in substance from the original re-audit and remain:

- **CVR-011 (High)** — the HR/school platform operating-model claim (six locations).
- **CVR-023 (High)** — "security testing is a mandatory gate before deployment."
- **CVR-010 (High)** — per-service proof points — now partially resolved for 2.5 only (Pro Energy
  Solutions); the other seven services remain fully Gated.
- **CVR-014, CVR-016, CVR-017, CVR-026, CVR-028 (all High)** — sector delivery experience, cloud
  partner-tier status, security certifications, support model, and SLA figures — all Gated on Fact
  Register items not yet supplied.
- **CVR-015 (High)** — technology inventory — now partially resolved for the "currently used" state in
  2 of 10 domains (4.1, 4.6 — see CVR-043–045); "capable of supporting," "planned," and all of Fact
  Register **C4** remain fully open, as does "currently used" for the remaining eight domains.
- **CVR-003/004/005 (High)** — tax compliance and SARS registration — Gated, not fabricated, but
  unresolved.
- **CVR-020, CVR-027, CVR-030 (Medium, but structurally significant)** — the independent-governance-
  layer claim repeated in 5.2, 5.4 and 5.8, all tracing to the Operating Capability Structure (1.10),
  which is under Strategic Identity Hold and not approved.
- **CVR-041, CVR-042 (Medium, new at Stage 8A)** — two business-benefit claims in 2.1 and 2.8 found
  during the Part Two line-by-line audit, not previously carried by any register row.
- **CVR-046 (Medium, new at Stage 8A)** — an unresolved naming discrepancy between this profile's
  Logistics App case study and "LOGIOS OS" as named on the public Auris Nexus Technologies website.

**C. Overall profile readiness for procurement/evaluator use — NOT READY.** The Strategic Identity
Hold (rule 4 above) alone means Part One cannot be frozen, and the 16 Unverified and 15 Gated claims
above (corrected 2026-09-13, Stage 8A) mean the document as it stands must not be represented to a
client, bank or tender panel as a finished, evidenced account of the company. It is ready as a
**structured draft awaiting fact input** — exactly what Stages 1–7 were scoped to produce — not as a
submission-ready credential.

**Do not, under any circumstance before these close:** state that Auris holds a specific B-BBEE
level, tax compliance status, security or quality certification, cloud partner tier, or SLA
commitment; state that any named sector has genuine prior delivery experience; state that the HR/school
platforms are self-operated products rather than offered services; or state that the operating model,
vision, mission, values, brand promise, founding story or milestones are approved rather than proposed.
