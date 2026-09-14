---
section: "5.2"
title: "Analysis, architecture and UI/UX"
part: "Five — Project Delivery"
pages: [77]
archetype: C
words_target: 420
words_actual: 190
figures: []
tables: []
icons: ["fa-pen-ruler"]
images: []
tokens: []
status: draft
---

# 5.2 Analysis, architecture and UI/UX

**Standfirst**

> Phases 4–6 of the lifecycle in 5.0. The point at which a validated requirement becomes a design
> someone can actually build against.

---

## Copy

**Phase 4 — Solution analysis.** The requirements baseline from 5.1 is analysed against the technical
domains described in Part Four — what the solution needs from engineering, architecture, data,
integration and security. The gate is a solution approach the client and delivery team agree is
sufficient to design against.

**Phase 5 — Architecture definition.** Solution and, where relevant, enterprise architecture are
defined per the discipline in 4.2 — decisions recorded with their rationale, not only as a diagram.
The gate is a documented architecture decision reviewed explicitly against the requirements baseline
before build begins, per the accountability model in 1.10 — a deliberate checkpoint, not an assumption
that design flows into build unexamined.

**Phase 6 — Experience design.** User interface and experience design proceed per the discipline in
2.7 — research, wireframes, prototypes and usability testing before build, not after. The gate is a
design validated with representative users, not only signed off by the commissioning stakeholder.

Each gate in this stage is independent of the one before it: a sound architecture does not excuse a
poor experience design, and a validated design does not excuse an architecture that will not scale to
the requirement. Both are reviewed on their own merits before Build begins.

---

## Production notes

- No metric, tool or specific architectural framework is named on this page beyond what 4.2 and 2.7
  already state as tokenised — this page describes sequencing and gate logic only.
- Cross-reference to 4.2 and 2.7 as live `REF` fields — do not restate their content, per the content
  reuse map, `02_Information-Architecture.md` §6.
- **Corrected 2026-09-13, Stage 9.** This gate no longer claims independent governance review — see
  1.10's correction note (headcount confirmed at 1 employee contradicts an independent-review claim)
  and Claim Verification Register CVR-020. Keep this page's "deliberate checkpoint" framing consistent
  with 1.10 and 5.8, both corrected the same way.
