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

> A deployment that requires a specific person to be available is not a deployment process — it is a
> dependency on that person. Platform engineering exists to remove that dependency.

---

## Copy

Continuous integration and deployment, infrastructure as code, and observability are practices we
apply to reduce the risk and effort of shipping change, not tooling adopted for its own sake. A
release pipeline that reliably runs the same way every time — tested, repeatable, reversible — is what
allows an engagement to ship frequently without accumulating deployment risk, which matters
particularly for the platforms described in section 2.3.

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
- This page's "reduce dependency on a specific person" framing connects directly to 1.10's operating
  model (capability units, not individual dependency) — keep the argument consistent if either is
  edited.
- Cross-reference to 5.6 (support and maintenance) as a live `REF` field — this page states the
  engineering practice; 5.6 states the client-facing support commitment it enables.
