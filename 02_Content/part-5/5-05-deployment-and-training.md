---
section: "5.5"
title: "Deployment and training"
part: "Five — Project Delivery"
pages: [80]
archetype: C
words_target: 420
words_actual: 398
figures: []
tables: []
icons: ["fa-rocket"]
images: []
tokens: ["[[DEPLOYMENT_FREQUENCY]]", "[[CHANGE_MANAGEMENT_PROCESS]]"]
status: draft
---

# 5.5 Deployment and training

**Standfirst**

> Phases 11–12 of the lifecycle in 5.0. A system that works in staging and fails at cutover has not
> been deployed — it has been almost deployed, which for the people depending on it is the same as not
> at all.

---

## Copy

**Phase 11 — Deployment and cutover.** Deployment is planned as its own activity with an explicit
rollback path, not assumed to succeed because testing in 5.4 passed. Cutover from a legacy system, where
one exists, is sequenced to minimise the window in which neither system is fully authoritative — the
period a data-integrity failure is most likely to occur unnoticed.

**Phase 12 — Training and change management.** Training is planned for the people who will actually
use the system daily, not only for a train-the-trainer representative who may not transfer the
knowledge completely. Change management addresses the organisational adjustment a new system requires
— revised processes, updated roles, communication to affected staff — because a technically successful
deployment that nobody adopts has not achieved its purpose, per the philosophy stated in 1.6.

The gate for this stage is a system live in production, with the people who depend on it trained and
the rollback path stood down only once stability is confirmed.

**Deployment frequency and cadence:** [[DEPLOYMENT_FREQUENCY]] — stated once measured, not assumed
**Change management process detail:** [[CHANGE_MANAGEMENT_PROCESS]]

---

## Production notes

- Per Fact Register **D1**/**D6**, no specific deployment tooling, release cadence, or "continuous
  deployment" claim is made without confirmation — the phase description states discipline
  (rollback planning, phased cutover), which does not require that input.
- Cross-reference to 4.5 (DevOps and platform engineering) as a live `REF` field for the technical
  deployment mechanics — this page is the delivery-phase framing, not the tooling detail.
- Training language should stay consistent with 2.7's usability argument — training compensates for
  what design could not anticipate, not a substitute for usable design.
