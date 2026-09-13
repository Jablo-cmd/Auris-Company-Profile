---
section: "2.8"
title: "Cloud, Integration and Managed Support"
part: "Two — Services"
pages: [40, 41]
archetype: H
words_target: 660
words_actual: 525
figures: []
tables: []
icons: ["fa-cloud-arrow-up"]
images: ["img-p040-operations-monitoring"]
tokens: ["[[TECH_STACK_CLOUD]]", "[[PROOF_CLOUD]]", "[[SLA_TERMS]]"]
status: draft
---

# 2.8 Cloud, Integration and Managed Support

**Layout:** Archetype H, the fixed ten-block service template.

---

## ① Service title

Cloud, Integration and Managed Support
*Services covered: cloud solutions · API integration · website maintenance & support*

---

## ② Standfirst (40–55 words)

> A system's real character shows itself after go-live, not at handover. This family covers what
> keeps it running, connected to everything else it needs to talk to, and improving rather than slowly
> decaying — for as long as the organisation depends on it.

---

## ③ Description

Cloud Solutions covers hosting, migration and infrastructure design — moving systems to appropriate
cloud infrastructure, sizing it correctly against actual load rather than worst-case guesswork, and
architecting for the availability the system genuinely requires rather than a default maximum that
costs more than the risk justifies. API Integration covers the connective work between systems that
were not built to talk to each other natively — the layer that turns a set of separate platforms into
one coherent operating environment.

Website Maintenance and Support extends the same "day after handover" discipline to sites we and
others have built: security patching, content updates, performance monitoring, and the ordinary
upkeep that determines whether a site remains reliable a year after launch rather than degrading
quietly. Across all three services, the common thread is that we remain accountable after go-live,
because a system's real behaviour under sustained production load is where most of its actual cost
and risk resides.

---

## ④ Problems this solves

- Existing infrastructure is oversized, undersized, or costed without reference to actual usage
  patterns
- Systems that should share data are manually reconciled because no integration layer connects them
- A website or system has no active maintenance arrangement and is quietly degrading — unpatched,
  outdated, slower than it should be
- The organisation lacks the internal capacity to operate infrastructure or integrations it depends on
  daily

---

## ⑤ Business benefits

- Infrastructure costed and sized against genuine usage, not worst-case assumption
- Systems that share data automatically, removing manual reconciliation and its associated error
- A maintained system that remains secure and performant well past its launch date
- Continued accountability from the team with the deepest knowledge of the system, rather than a
  handover to an unfamiliar support desk

---

## ⑥ Typical deliverables

- Cloud infrastructure assessment and migration plan
- Infrastructure provisioning and configuration, sized to actual load
- API and integration design and build between specified systems
- Monitoring, alerting and backup configuration
- Scheduled maintenance and security patching cycle
- Incident response, against agreed severity and response targets
- Performance reporting cadence
- Annual infrastructure and cost review

---

## ⑦ Technologies used

[[TECH_STACK_CLOUD]] — hyperscaler, integration platform and monitoring tooling against the confirmed
stack in `04_Technical Capabilities`, section 4.0.

---

## ⑧ Ideal client profile

An organisation running live systems that need to stay connected, available and current — whether
newly migrated to the cloud, integrating existing platforms, or maintaining a site or system built by
us or by a prior vendor.

---

## ⑨ Expected outcomes

- Infrastructure cost aligned to genuine usage rather than static over-provisioning
- Elimination of manual data reconciliation between integrated systems
- Reduced incidence of preventable downtime through active monitoring and maintenance
- A support relationship carried by the team with direct knowledge of the system's history

---

## ⑩ Industries served

Relevant across all ten sectors we serve — operational continuity is close to a universal requirement
for any organisation running production systems.

---

## Production notes

- **Fact callout, lower recto:** [[PROOF_CLOUD]] — real delivered example, per Fact Register **C2**
  (🔴 critical, unresolved). Left open.
- **`[[SLA_TERMS]]`** — specific response and restoration targets belong to the Service Level
  Framework, section 5.9, and are cross-referenced here rather than restated, per the content reuse
  map (`02_Information-Architecture.md` §6). Do not invent numbers on this page.
- Image: operations dashboard or monitoring session, genuine data visible (or plausibly redacted),
  not a generic server-room stock image.
- This spread compresses three named services into one ten-block template — confirm at layout that
  each service still reads as distinctly named within the description and deliverables blocks.
