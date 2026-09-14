---
section: "6.4"
title: "POPIA and information security"
part: "Six — Business Excellence"
pages: [90]
archetype: C
words_target: 420
words_actual: 211
figures: []
tables: []
icons: ["fa-lock"]
images: []
tokens: ["[[INFO_OFFICER]]"]
status: draft — first drafted at Stage 9
---

# 6.4 POPIA and information security

**Standfirst**

> Two distinct claims are easy to blur — data-handling design in the systems we build, and the
> company's own formal compliance posture as a data processor. This page keeps them separate.

---

## Copy

**Design discipline, genuinely evidenced.** Every multi-tenant Auris-developed system described in
Part Four is built with tenant isolation as an architectural property, not an afterthought — PostgreSQL
row-level security enforced at the database layer, confirmed directly in source across the systems
inspected for 4.6, so that a mistake in application code cannot expose one tenant's data to another.
Section 3.1–3.2's treatment of POPIA obligations in the public sector, education and healthcare
reflects this same design-first posture applied to sector context.

**Formal compliance status, not yet confirmed.** Whether Auris Nexus has appointed and registered an
Information Officer with the Information Regulator, as POPIA requires of every responsible party, is
not yet confirmed. **Information Officer appointment and registration:** [[INFO_OFFICER]]. A documented
Information Security Policy, separate from the engineering practices described above, is similarly not
yet confirmed. Neither is claimed here in the absence of that confirmation.

These are genuinely different questions — a well-designed system and a registered Information Officer
are both required for full POPIA readiness, and this profile does not let evidence of the first
substitute for evidence of the second.

---

## Production notes

- **First drafted 2026-09-13, Stage 9.** This is a high-assurance section, consistent with the
  standard already applied to 4.4 (Cybersecurity) — no control, appointment or policy is stated as fact
  without verification.
- Cross-reference to 4.4 and 4.6 as live `REF` fields for the design-discipline evidence; do not restate
  it independently.
- `[[INFO_OFFICER]]` must not be resolved by inference from the company's small size ("a one-person
  company would not need one") — POPIA's Information Officer requirement applies regardless of size,
  and Regulator registration is either confirmed or it is not. See Fact Register **G2**.
