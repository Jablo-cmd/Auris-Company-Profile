---
section: "4.5"
title: "DevOps and platform engineering"
part: "Four — Technical Capabilities"
pages: [66]
archetype: C
words_target: 420
words_actual: 405
figures: []
tables: []
icons: ["fa-infinity"]
images: []
tokens: ["[[TECH_CURRENT_DEVOPS]]", "[[TECH_CAPABLE_DEVOPS]]", "[[TECH_PLANNED_DEVOPS]]"]
status: draft
---

# 4.5 DevOps and platform engineering

**Standfirst**

> A deployment that only works if one specific person remembers the right manual steps is not a
> deployment process — it is a dependency on memory. Platform engineering exists to remove that risk,
> which matters as much for a founder-led team today as it does for a larger one later.

---

## Copy

Continuous integration and deployment, infrastructure as code, and observability are practices we
apply to reduce the risk and effort of shipping change, not tooling adopted for its own sake. A
release pipeline that reliably runs the same way every time — tested, repeatable, reversible — is what
allows an engagement to ship frequently without accumulating deployment risk, which matters
particularly for the platforms we are developing as our own products, described in section 2.3.

Infrastructure as code extends the same discipline to environments themselves: an environment is
reproducible from version-controlled definition, not assembled by hand and then guarded as
irreplaceable institutional knowledge. Observability — logging, monitoring and alerting treated as a
build requirement rather than a production afterthought — is what makes the difference between a fault
detected before a client notices it and one reported to us by the client first.

**Technologies currently used:** [[TECH_CURRENT_DEVOPS]]
**Capable of supporting:** [[TECH_CAPABLE_DEVOPS]]
**Planned / future roadmap:** [[TECH_PLANNED_DEVOPS]]

---

## Production notes

- Per Fact Register **C3**/**C4**, no specific CI/CD, IaC or observability platform is named until
  confirmed.
- Stage 9A Phase 4: fixed a stale cross-reference to 1.10's old three-layer org model ("capability
  units, not individual dependency") — 1.10 was rewritten in Stage 9A and no longer describes
  redundant capability units; it now states plainly that the founder is currently the single point of
  delivery. The standfirst and copy here were adjusted so the "remove dependency on a specific
  person" argument doesn't imply that dependency has already been engineered away — the honest claim
  is that automation reduces *memory-dependency risk*, which is valuable at any team size, not that
  Auris currently has redundant staff to fall back on.
- Cross-reference to 5.6 (support and maintenance) as a live `REF` field — this page states the
  engineering practice; 5.6 states the client-facing support commitment it enables.
