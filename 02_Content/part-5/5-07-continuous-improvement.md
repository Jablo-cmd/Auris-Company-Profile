---
section: "5.7"
title: "Continuous improvement"
part: "Five — Project Delivery"
pages: [82]
archetype: C
words_target: 420
words_actual: 166
figures: []
tables: []
icons: ["fa-arrows-rotate"]
images: []
tokens: ["[[REVIEW_CADENCE]]"]
status: draft
---

# 5.7 Continuous improvement

**Standfirst**

> Phase 15 of the lifecycle in 5.0, and the phase that turns a delivered system back into an input for
> the next decision, rather than treating go-live as the end of the relationship.

---

## Copy

**Phase 15 — Service review.** A system's requirements are not static, and a lifecycle that ends at
deployment implicitly assumes they are. Periodic service review examines what the system is actually
doing in production against what it was built to do — usage patterns, support ticket themes,
performance against the service level framework in 5.9 — and turns that examination into a
recommendation, not just a report.

This is the phase in which the restraint principle from 1.5 and 1.6 is applied in reverse: as much
attention goes into identifying what should be simplified or removed as into what should be added.
Complexity accumulated during Build (5.3–5.4) is a legitimate candidate for review here, not something
reviewed only when it becomes a visible problem.

The output of this phase feeds back into Phase 1 of the next cycle where further work is warranted,
closing the lifecycle loop shown in 5.0.

**Review cadence:** [[REVIEW_CADENCE]] — stated once agreed per engagement, not asserted as a fixed
universal schedule

---

## Production notes

- Per Fact Register **D3**/**D6** (unresolved), no specific review cadence, reporting tool or
  dashboard is named until confirmed.
- Do not imply a formal continuous-improvement certification (e.g. a specific quality-management
  standard) is held — that belongs to 6.1 and Part Seven, and only if genuinely held.
- Keep the "restraint applied in reverse" argument consistent with 1.5 (Restraint) and 1.6 (prefer
  subtraction) — this page is their operational expression at the end of the lifecycle.
