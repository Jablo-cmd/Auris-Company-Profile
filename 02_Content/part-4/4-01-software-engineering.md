---
section: "4.1"
title: "Software engineering"
part: "Four — Technical Capabilities"
pages: [62]
archetype: C
words_target: 420
words_actual: 417
figures: []
tables: []
icons: ["fa-code"]
images: []
tokens: ["[[TECH_CURRENT_ENGINEERING]]", "[[TECH_CAPABLE_ENGINEERING]]", "[[TECH_PLANNED_ENGINEERING]]", "[[CODE_QUALITY_REGIME]]"]
status: draft
---

# 4.1 Software engineering

**Standfirst**

> Language and framework choice matters less than most technical sections imply. What determines
> whether software is maintainable is the engineering discipline applied around that choice.

---

## Copy

We select languages and frameworks against the requirement — its performance profile, its team's
future maintainability needs, its integration surface — rather than defaulting to a single house
stack regardless of fit. That selection discipline is described here at the level of principle; the
specific languages and frameworks in current use, sit under the three-state distinction below rather
than as a single claimed list.

Engineering standards matter more than the tools they are enforced with. Code review before merge,
automated testing at a level proportionate to the system's risk, and version-controlled infrastructure
are baseline practice, not differentiators — we state them because their absence is a real failure
mode in this industry, not because their presence is remarkable. What we do consider worth stating
plainly is our resistance to unnecessary technical novelty: a well-understood, well-supported
technology chosen for its fit to the problem outperforms a fashionable one chosen for its resume
value, and we design engagements around the former.

**Technologies currently used:** [[TECH_CURRENT_ENGINEERING]]
**Capable of supporting:** [[TECH_CAPABLE_ENGINEERING]]
**Planned / future roadmap:** [[TECH_PLANNED_ENGINEERING]]

**Code quality regime:** [[CODE_QUALITY_REGIME]] — specific practices (review gates, test coverage
thresholds, static analysis tooling) are stated here once confirmed, rather than assumed from
industry norms.

---

## Production notes

- Per Fact Register **C3**/**C4** (both unresolved, Stage 6), no specific language or framework is
  named as "currently used" until confirmed. The three-state block above is intentionally the
  section's only technology-specific content.
- `[[CODE_QUALITY_REGIME]]` is new to this stage — not previously tracked in the Fact Register. Add
  as a Group C sub-item at next register update.
- This page governs terminology for "engineering" used elsewhere in the document — do not introduce
  "development" as a synonym per the terminology register, `06_Production-Conventions.md` §4.
