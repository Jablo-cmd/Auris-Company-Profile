---
section: "5.4"
title: "Testing, quality assurance and security testing"
part: "Five — Project Delivery"
pages: [79]
archetype: C
words_target: 420
words_actual: 172
figures: []
tables: []
icons: ["fa-vial-circle-check"]
images: []
tokens: ["[[TEST_PYRAMID_DETAIL]]", "[[SECURITY_TESTING_REGIME]]", "[[DEFECT_RATE_TARGET]]"]
status: draft
---

# 5.4 Testing, quality assurance and security testing

**Standfirst**

> Phases 8–10 of the lifecycle in 5.0. A system is not complete when it satisfies its specification —
> it is complete when it has been shown to survive contact with real conditions, per the brand promise
> stated in 1.7.

---

## Copy

**Phase 8 — Functional testing.** Automated and manual testing verify the system against the
requirements baseline from 5.1, structured as a test pyramid — proportionally more automated unit and
integration tests than manual end-to-end tests, because the former catch regressions continuously and
the latter cannot scale to do so. The gate is functional acceptance against the agreed criteria.

**Phase 9 — Quality assurance.** Independent review, distinct from the development team per the
governance principle in 1.10, checks the system against non-functional requirements — performance,
usability, accessibility — not only functional correctness.

**Phase 10 — Security testing.** Security testing is a mandatory gate before deployment, not an
optional hardening step applied if time permits, consistent with the design discipline described in
4.4. No system proceeds to Phase 11 without this gate passed.

**Test pyramid detail and specific coverage targets:** [[TEST_PYRAMID_DETAIL]]
**Security testing regime:** [[SECURITY_TESTING_REGIME]] — cross-referenced from 4.4; resolved once,
not restated with different detail here
**Defect rate target or historical measure:** [[DEFECT_RATE_TARGET]] — no defect rate is claimed
without a measured basis

---

## Production notes

- Per Fact Register **D1**/**D6** and the security tokens carried from 4.4, no specific testing tool,
  coverage percentage, or defect-rate statistic is stated as fact.
- Do not imply a DevSecOps pipeline, a specific penetration-testing provider, or continuous automated
  security scanning is in place unless confirmed — the phase description states that security testing
  is *mandatory as a gate*, which is a policy statement, not a claim about tooling maturity.
- `[[SECURITY_TESTING_REGIME]]` must resolve identically here and in 4.4 — one owner, cross-referenced,
  per the content reuse map.
