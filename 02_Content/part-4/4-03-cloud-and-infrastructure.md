---
section: "4.3"
title: "Cloud and infrastructure"
part: "Four — Technical Capabilities"
pages: [64]
archetype: C
words_target: 420
words_actual: 174
figures: []
tables: []
icons: ["fa-cloud"]
images: []
tokens: ["[[TECH_CURRENT_CLOUD]]", "[[TECH_CAPABLE_CLOUD]]", "[[TECH_PLANNED_CLOUD]]", "[[CLOUD_PARTNER_STATUS]]"]
status: draft
---

# 4.3 Cloud and infrastructure

**Standfirst**

> The right infrastructure decision is the smallest one that meets the requirement, not the most
> capable one available. Over-provisioning is as much a design failure as under-provisioning.

---

## Copy

Cloud and infrastructure work spans hyperscaler platforms, hybrid arrangements where an organisation
needs to keep specific workloads on-premises or in-country, and migration from legacy infrastructure
into a cloud-appropriate architecture. We size infrastructure against genuine, measured load — as
stated in section 2.8 — rather than a conservative multiple applied by default, because the cost of
permanent over-provisioning compounds every month, while the cost of a well-designed scaling response
to real growth does not.

Hybrid and multi-cloud decisions are made against specific constraints — data residency, regulatory
requirement, latency, existing sunk investment — rather than treated as a default architecture. Where
a client has a regulatory or sovereignty requirement, particularly in the public sector and financial
services contexts described in Part Three, infrastructure design accounts for that requirement from
the outset rather than retrofitting it after a generic cloud-first recommendation.

**Technologies currently used:** [[TECH_CURRENT_CLOUD]]
**Capable of supporting:** [[TECH_CAPABLE_CLOUD]]
**Planned / future roadmap:** [[TECH_PLANNED_CLOUD]]
**Hyperscaler partner status:** [[CLOUD_PARTNER_STATUS]] — any formal partner-tier relationship is
stated here once confirmed; none is implied in the absence of confirmation.

---

## Production notes

- Per Fact Register **C3**/**C4**, no specific hyperscaler (AWS, Azure, Google Cloud, or a local
  provider) is named as a primary platform until confirmed. `[[CLOUD_PARTNER_STATUS]]` in particular
  must not be populated without documentary evidence — a partner-tier claim is independently
  verifiable by a procurement evaluator and a false one is a credibility failure with no recovery.
- Data residency and sovereignty language anticipates POPIA and public-sector requirements addressed
  more fully in 6.4 — do not duplicate that section's compliance detail here; cross-reference instead.
