---
section: "4.9"
title: "Integration and APIs"
part: "Four — Technical Capabilities"
pages: [70]
archetype: C
words_target: 420
words_actual: 401
figures: []
tables: []
icons: ["fa-plug-circle-bolt"]
images: []
tokens: ["[[TECH_CURRENT_INTEGRATION]]", "[[TECH_CAPABLE_INTEGRATION]]", "[[TECH_PLANNED_INTEGRATION]]"]
status: draft
---

# 4.9 Integration and APIs

**Standfirst**

> Most organisations' technology problems are not any single system failing — they are the gap
> between systems that were never designed to talk to each other. This page is the technical mechanics
> behind that gap, and section 2.8 is the client-facing service built on it.

---

## Copy

API design — for systems we build, and for the layer that connects systems we did not build — follows
conventional, well-documented patterns in preference to bespoke protocols invented per engagement,
because a well-documented, standard API outlives the individual who built it. Where an existing system
exposes no usable API, integration work extends to legacy interfacing methods appropriate to that
system, scoped realistically against what the legacy platform can actually support rather than an
idealised integration architecture it cannot.

Event-driven and message-based integration is used where systems need to react to change as it
happens rather than on a batch schedule, and is selected against the specific latency and reliability
requirement rather than applied by default. Across all integration work, the objective stated in 2.8
holds: systems that should share data do so automatically, removing the manual reconciliation that is
the actual, lived cost of poor integration.

**Technologies currently used:** [[TECH_CURRENT_INTEGRATION]]
**Capable of supporting:** [[TECH_CAPABLE_INTEGRATION]]
**Planned / future roadmap:** [[TECH_PLANNED_INTEGRATION]]

---

## Production notes

- Per Fact Register **C3**/**C4**, no specific integration platform, iPaaS or messaging technology is
  named until confirmed.
- Cross-reference to 2.8 (Cloud, Integration and Managed Support) as a live `REF` field — this page is
  the technical mechanics; 2.8 is the client-facing service and commercial framing.
- Keep distinct from 4.2 (architecture) — 4.2 covers the decision discipline of how systems *should*
  relate; this page covers how the connection is technically built.
