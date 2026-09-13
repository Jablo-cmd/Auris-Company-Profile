---
section: "4.0"
title: "Technology stack"
part: "Four — Technical Capabilities"
pages: [60, 61]
archetype: F
words_target: 380
words_actual: 258
figures: ["fig-4.0-technology-stack"]
tables: []
icons: ["fa-layer-group"]
images: []
tokens: ["[[TECH_CURRENT_ALL]]", "[[TECH_CAPABLE_ALL]]", "[[TECH_PLANNED_ALL]]"]
status: draft
---

# 4.0 Technology stack

**Layout:** Archetype F, extended across the spread. Layered stack diagram dominant, framing copy in
the sidebar, verso.

---

## Copy

**Standfirst**

> Seven layers, from what a user sees to what secures everything beneath it. This page is the owner
> reference for every technology named elsewhere in this document — nothing here is claimed twice with
> a different answer.

---

### Copy

Naming a long list of technologies is easy and says little; most such lists are aspirational,
uncurated, or both. We instead organise our stack by the layer it operates at — presentation,
application, integration, data, platform, infrastructure and security — because that is how a
technology decision actually gets made: against what the layer needs to do, not against which name is
most recognisable.

Each layer in the diagram distinguishes three states, consistently, throughout this Part: technologies
**currently used** — meaning genuinely evidenced in our own implementation work, not necessarily in a
named commercial client engagement — technologies we are **capable of supporting** if a client's
requirement calls for them, and technologies on our **planned roadmap** but not yet built out.
Collapsing these three into one undifferentiated list is the most common way a technical capabilities
section overclaims, and we have deliberately structured against it. Demonstrated implementation
experience is not, on its own, evidence of commercial delivery volume, tenure or certification — where
those matter, they are addressed separately and only where independently evidenced.

The detail for each layer is set out on the following pages — software engineering and architecture
first, since they govern every layer beneath them, through to security, which is treated as a
property of every layer rather than a layer of its own.

---

## Production notes

- **Figure 4.0** — seven horizontal bands (presentation, application, integration, data, platform,
  infrastructure, security, security shown as a vertical band crossing all others rather than a
  seventh horizontal layer, to represent that it is cross-cutting). Each band carries three colour-
  coded zones for current / capable / planned. **Entirely token-driven** — see per-domain files
  4.1–4.10 for the source tokens per layer.
- This page is the **owner section** for the technology stack per the content reuse map
  (`02_Information-Architecture.md` §6); service spreads in Part Two (`[[TECH_STACK_*]]` tokens) pull
  a subset from here rather than stating their own.
- No technology name is placed on this diagram until Fact Register **C3** (🔴 critical) and **C4**
  (🟠 high) resolve. An empty, honestly labelled diagram is preferable to a populated, unverified one.
- **Corrected 2026-09-13, Stage 8A.** C3 is now partially resolved — two of ten domains (4.1 Software
  engineering; 4.6 Data platforms and databases) carry direct source-inspection evidence and are
  populated accordingly. The remaining eight domains (4.2–4.5, 4.7–4.10) and C4 in full remain open;
  do not extend the diagram's populated zones beyond what those two pages state without equivalent
  evidence.
