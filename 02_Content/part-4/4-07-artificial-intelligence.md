---
section: "4.7"
title: "Artificial intelligence"
part: "Four — Technical Capabilities"
pages: [68]
archetype: C
words_target: 420
words_actual: 204
figures: []
tables: []
icons: ["fa-brain"]
images: []
tokens: ["[[TECH_CURRENT_AI]]", "[[TECH_CAPABLE_AI]]", "[[TECH_PLANNED_AI]]", "[[AI_GOVERNANCE_POLICY]]"]
status: draft
---

# 4.7 Artificial intelligence

**Standfirst**

> Applied carelessly, artificial intelligence produces confident, wrong answers at scale. We treat
> that risk as the starting design constraint, not an edge case handled after deployment.

---

## Copy

Applied artificial intelligence — document intelligence, forecasting, and pattern detection within
defined, bounded problems — has genuine value where the problem is well specified and the cost of an
occasional wrong output is tolerable and detectable. It has no place where an error is silent,
irreversible, or falls on someone who cannot contest it, and we scope engagements to keep AI capability
within the first category deliberately.

Our responsible-use position, in brief: a system's AI-generated output is never presented to an end
user as unreviewable fact where the underlying model's confidence cannot be evidenced; human review
remains in the loop wherever a decision has material consequence for a person; and where AI is
proposed for a use case, we state its failure modes in the proposal alongside its benefit, not only
its benefit. This is a governance philosophy we hold regardless of which specific technology
implements it, and the specific technologies in current use are stated below rather than implied by
the philosophy alone.

**Technologies currently used:** [[TECH_CURRENT_AI]]
**Capable of supporting:** [[TECH_CAPABLE_AI]]
**Planned / future roadmap:** [[TECH_PLANNED_AI]]
**Responsible-use / governance policy:** [[AI_GOVERNANCE_POLICY]] — a documented policy, once it
exists, is referenced here rather than the philosophy paragraph above being treated as the policy
itself.

---

## Production notes

- This is a fast-moving, credibility-sensitive domain — per the client's evidence standard, no
  specific AI vendor, model or deployment is named until confirmed, and no maturity or accuracy claim
  ("high accuracy", "enterprise-grade AI") is used without a measurable basis.
- The responsible-use paragraph is a defensible *philosophy* statement and does not itself require a
  Fact Register entry — but `[[AI_GOVERNANCE_POLICY]]` should be added as a Group C sub-item if a
  formal written policy is later confirmed to exist.
- Keep this page's claims narrower than 4.10 (BI, analytics and reporting) — AI here means applied
  model-based inference; 4.10 means conventional reporting and dashboarding. Do not let AI language
  drift into 4.10 to inflate either section.
