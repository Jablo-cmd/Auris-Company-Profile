---
section: "5.6"
title: "Support and maintenance"
part: "Five — Project Delivery"
pages: [81]
archetype: C
words_target: 420
words_actual: 160
figures: []
tables: []
icons: ["fa-headset"]
images: []
tokens: ["[[SUPPORT_MODEL]]", "[[SUPPORT_HOURS]]", "[[ESCALATION_PATH]]", "[[MTTR_TARGET]]"]
status: draft
---

# 5.6 Support and maintenance

**Standfirst**

> Phases 13–14 of the lifecycle in 5.0. The brand promise in 1.7 is tested here more than anywhere
> else in the lifecycle — production character shows up in the incident nobody planned for, not in the
> plan.

---

## Copy

**Phase 13 — Support.** A defined period of heightened support immediately following deployment
addresses issues that only surface under genuine production load and real users, distinct from
steady-state maintenance. Issues are triaged by severity, so that a critical fault and a cosmetic one
do not compete for the same response.

**Phase 14 — Maintenance.** Ongoing maintenance covers patching, monitoring response and the routine
upkeep described in 2.8, sustained for as long as the client depends on the system — the continuity
commitment described in 1.5 and 1.8 made operational.

Severity tiers, response commitments and escalation are stated precisely in the service level
framework, 5.9, rather than described qualitatively here — a support commitment that cannot be
checked against a stated number is not a commitment an evaluator can hold us to.

**Support model and tiers:** [[SUPPORT_MODEL]]
**Hours of cover:** [[SUPPORT_HOURS]] — no "24/7" or business-hours claim is made without
confirmation
**Escalation path:** [[ESCALATION_PATH]]
**Mean time to resolution, by severity:** [[MTTR_TARGET]]

---

## Production notes

- Per Fact Register **D3** (🟠, unresolved), no specific support model, coverage hours or escalation
  structure is described as established fact. Do not imply a formal ITIL-aligned service desk,
  ticketing SLA, or 24/7 operations centre exists unless confirmed.
- All severity, response and resolution specifics are the property of 5.9 — this page states *that*
  triage and escalation exist as a discipline, 5.9 states the *numbers*. Do not duplicate numbers
  here if they are later confirmed; cross-reference instead.
- Cross-reference to 2.8 (Cloud, Integration and Managed Support) as a live `REF` field.
