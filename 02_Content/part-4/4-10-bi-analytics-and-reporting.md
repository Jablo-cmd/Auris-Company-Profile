---
section: "4.10"
title: "Business intelligence, analytics and reporting"
part: "Four — Technical Capabilities"
pages: [71]
archetype: C
words_target: 420
words_actual: 168
figures: []
tables: []
icons: ["fa-chart-line"]
images: []
tokens: ["[[TECH_CURRENT_BI]]", "[[TECH_CAPABLE_BI]]", "[[TECH_PLANNED_BI]]"]
status: draft
---

# 4.10 Business intelligence, analytics and reporting

**Standfirst**

> A dashboard nobody trusts is worse than no dashboard, because it produces confident decisions on
> bad information. Reporting is only as good as the data model it draws from, described in 4.6.

---

## Copy

Business intelligence, analytics and reporting turn the data held across an organisation's systems
into something a decision-maker can actually use — executive dashboards for strategic oversight,
self-service reporting for operational teams who should not need to file a request for every new
report, and scheduled or automated reporting for compliance and governance obligations addressed
throughout Part Three's sector sections.

The discipline that matters most here is trust in the number, not the sophistication of its
presentation. A report is only as reliable as the data model underlying it, and we build the reporting
layer after the data platform work in 4.6 is sound, not as a cosmetic layer applied over an unreliable
source. Self-service capability is scoped deliberately — giving operational users the ability to
build their own reports reduces bottleneck on a central team, but only where the underlying data model
is clean enough that self-service does not produce contradictory numbers across the organisation.

**Technologies currently used:** [[TECH_CURRENT_BI]]
**Capable of supporting:** [[TECH_CAPABLE_BI]]
**Planned / future roadmap:** [[TECH_PLANNED_BI]]

---

## Production notes

- Per Fact Register **C3**/**C4**, no specific BI or reporting platform is named until confirmed.
- Cross-reference to 4.6 (data platforms and databases) as a live `REF` field — this page's opening
  argument depends on that section and should not be edited independently of it.
- Distinguish from 4.7 (AI) — this page is conventional reporting and dashboarding; AI-driven
  forecasting or inference belongs in 4.7, referenced here only if a specific engagement genuinely
  combines both.
