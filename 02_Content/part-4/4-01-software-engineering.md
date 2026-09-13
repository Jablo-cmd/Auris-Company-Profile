---
section: "4.1"
title: "Software engineering"
part: "Four — Technical Capabilities"
pages: [62]
archetype: C
words_target: 420
words_actual: 297
figures: []
tables: []
icons: ["fa-code"]
images: []
tokens: ["[[TECH_CAPABLE_ENGINEERING]]", "[[TECH_PLANNED_ENGINEERING]]"]
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

**Technologies currently used:** demonstrated implementation experience with React 18, TypeScript and
Vite for front-end application development, evidenced directly in the source code of multiple
Auris-developed systems (Sebetsa, Funda360, and a further Auris-built system held confidentially
pending client naming consent). This is genuine, inspectable implementation experience — it is not, by
itself, evidence of commercial client-delivery volume, a specific years-of-experience figure, or a
vendor certification, none of which is claimed here.
**Capable of supporting:** [[TECH_CAPABLE_ENGINEERING]]
**Planned / future roadmap:** [[TECH_PLANNED_ENGINEERING]]

**Code quality regime:** automated testing is a genuine, evidenced practice rather than an assumed
norm — unit and component testing via Vitest, and end-to-end browser testing via Playwright, both
confirmed directly in the same systems referenced above, alongside ESLint and Prettier for static
analysis and formatting. Specific coverage-threshold policy and merge review-gate configuration are
not evidenced and remain unconfirmed.

---

## Production notes

- **Corrected 2026-09-13, Stage 8A.** Fact Register **C3** is now partially resolved for this domain
  by direct source-code inspection (React 18, TypeScript, Vite; Vitest and Playwright for testing) —
  see the correction note against C3 and Claim Verification Register CVR-043/CVR-044. **C4** (technologies
  *not* worked in) remains entirely open — this page names only what is evidenced, not a complete or
  exclusive list, and `[[TECH_CAPABLE_ENGINEERING]]`/`[[TECH_PLANNED_ENGINEERING]]` remain open tokens.
- Do not read "currently used" here as commercial delivery evidence — it is demonstrated implementation
  experience in Auris-developed products, not proof of client-project volume, tenure or certification.
  Those remain separate, unresolved claims (see Fact Register B9, E13, F7).
- This page governs terminology for "engineering" used elsewhere in the document — do not introduce
  "development" as a synonym per the terminology register, `06_Production-Conventions.md` §4.
