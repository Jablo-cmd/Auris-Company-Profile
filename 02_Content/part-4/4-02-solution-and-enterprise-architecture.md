---
section: "4.2"
title: "Solution and enterprise architecture"
part: "Four — Technical Capabilities"
pages: [63]
archetype: C
words_target: 420
words_actual: 411
figures: []
tables: []
icons: ["fa-drafting-compass"]
images: []
tokens: ["[[ARCHITECTURE_FRAMEWORKS]]", "[[TECH_CAPABLE_ARCHITECTURE]]"]
status: draft
---

# 4.2 Solution and enterprise architecture

**Standfirst**

> Architecture decided at the point of building the first feature is not architecture — it is
> accumulated accident. We separate the two deliberately, on every engagement large enough to warrant
> it.

---

## Copy

Solution architecture addresses a single system: how it is structured, what patterns govern its
internal design, and how it will scale and evolve within its own boundary. Enterprise architecture
addresses the layer above that — how an organisation's systems, data and integrations relate to each
other as a whole, so that a decision made for one system does not silently constrain or contradict
another. We treat these as related but distinct disciplines, and we scope which one an engagement
actually needs rather than defaulting to the heavier of the two.

Where formal frameworks are relevant to an engagement — TOGAF-aligned enterprise architecture practice
being the most common in this market — we apply them because they are useful for the specific
governance or scale the client requires, not because a framework badge is expected in a proposal.
Architecture documentation is treated as a deliverable in its own right: a decision record, not only a
diagram, so that a decision's rationale survives staff turnover on both sides of the engagement.

**Frameworks and standards applied:** [[ARCHITECTURE_FRAMEWORKS]]
**Capable of supporting:** [[TECH_CAPABLE_ARCHITECTURE]]

---

## Production notes

- Per Fact Register **C3**/**C4**, no specific framework (TOGAF, ArchiMate or otherwise) is claimed as
  actively certified or practised until confirmed — the paragraph above states the *posture*, and the
  token states the *specifics*.
- Do not claim TOGAF certification for any individual or the firm without a confirmed credential —
  this belongs to Part Seven, Professional memberships (7.5), not here, and only if genuinely held.
- Keep this page's scope distinct from 4.9 (Integration and APIs) — this page is structural/decision
  discipline; 4.9 is the technical mechanics of connecting systems.
