---
section: "4.8"
title: "Automation"
part: "Four — Technical Capabilities"
pages: [69]
archetype: C
words_target: 420
words_actual: 396
figures: []
tables: []
icons: ["fa-gears"]
images: []
tokens: ["[[TECH_CURRENT_AUTOMATION]]", "[[TECH_CAPABLE_AUTOMATION]]", "[[TECH_PLANNED_AUTOMATION]]"]
status: draft
---

# 4.8 Automation

**Standfirst**

> This page states the technical mechanics behind section 2.4's automation service — the tooling
> layer, not the client-facing argument for why sequencing matters, which belongs there.

---

## Copy

Robotic process automation, workflow orchestration and process automation platforms are selected
against the specific automation requirement — volume, complexity, exception frequency, and whether
the process interacts with systems that expose a proper API or only a user interface. Where an API
exists, we integrate against it directly in preference to UI-level automation, because interface-level
automation is inherently more fragile and breaks when the underlying system changes without notice.

Orchestration across multiple automated steps is designed with explicit exception handling, per the
argument made in 2.4 — an automated process that cannot recognise when it has encountered a case it
should not resolve alone is a liability, not a capability. Monitoring and audit trail for automated
processes are treated as a build requirement, consistent with the observability discipline described
in 4.5.

**Technologies currently evidenced:** application workflows and Supabase Edge Functions using Deno in Auris-built platforms; specific RPA products are not claimed.
**Capable of supporting:** API-driven workflow and business-process automation selected against the client's systems and process requirements.
**Planned / future roadmap:** determined per product and engagement requirements.

---

## Production notes

- Per Fact Register **C3**/**C4**, no specific RPA or orchestration platform is named until confirmed.
- Cross-reference to 2.4 (Business Process Automation) as a live `REF` field — do not restate 2.4's
  business case here; this page is the technical mechanics only.
- Keep distinct from 4.9 (Integration and APIs) — automation here means process execution;
  integration in 4.9 means system-to-system data exchange. The two frequently combine in practice but
  are described separately for clarity.
