---
section: "3.2"
title: "Knowledge and human services"
part: "Three — Industries"
pages: [48, 49]
archetype: D
words_target: 800
words_actual: 359
figures: []
tables: []
icons: ["fa-graduation-cap", "fa-hospital"]
images: ["img-p048-education-healthcare"]
tokens: ["[[SECTORS_DELIVERED]]"]
status: draft
---

# 3.2 Knowledge and human services

**Layout:** Archetype D, narrative spread. Two industries, each with the fixed Challenges · Solutions
· Business value · Technology opportunities structure.

---

## Copy

**Standfirst**

> Education and healthcare share a characteristic no other sectors in this document do as sharply:
> the people affected by a system failure — a learner, a patient — are rarely the people who chose the
> software.

---

### Regulatory context

Both sectors handle information that is personal in the fullest sense POPIA contemplates, and
education carries additional obligations toward minors specifically. Healthcare systems increasingly
need to anticipate National Health Insurance readiness even where implementation timelines remain
uncertain nationally. We treat both as environments where privacy design is not a compliance checkbox
appended late, but a constraint present from the first architecture decision.

---

### Education

**Challenges.** Student and academic administration still dependent on manual processes or systems
too rigid for the institution's actual structure. Reporting obligations to a department of education
reconstructed manually each cycle. Research computing needs that differ substantially from
administrative computing needs, often served poorly by the same infrastructure.

**Solutions.** School and student management platforms configured to the institution's real academic
structure, not a generic template. Reporting built to produce departmental submissions directly from
the system of record.

**Business value.** Reduced administrative burden on academic staff, redirecting time toward teaching
and research. Defensible, auditable learner and academic records. Reduced risk of non-compliance in
handling minors' personal information.

**Technology opportunities.** Student and school management platforms. Learning-adjacent
administrative systems. Research computing infrastructure, scoped separately from administrative
systems where institutional scale warrants it.

---

### Healthcare

**Challenges.** Clinical and patient data held to a materially higher confidentiality standard than
most operational data, under POPIA and professional regulatory obligation together. Legacy systems
in many facilities predating current interoperability expectations. Uncertainty in planning technology
investment against NHI's eventual requirements.

**Solutions.** Systems architected with clinical data governance as a first-order design constraint,
not an add-on control layer. Interoperability considered from the outset, so systems are not
NHI-readiness liabilities by default.

**Business value.** Reduced clinical and administrative risk from data handling failures. Improved
continuity of patient information across a care pathway. Technology investment that does not need to
be substantially rebuilt as NHI implementation clarifies.

**Technology opportunities.** Patient and clinical administration systems. Secure health data
integration between facilities and systems. Reporting and analytics that respect clinical data
governance requirements throughout.

---

## Production notes

- **`[[SECTORS_DELIVERED]]`** — sector-general context and approach only; a specific delivery claim
  in education or healthcare requires this token to resolve, per Fact Register **C7** (🔴 critical).
- Image: education or healthcare administrative context — a records or admissions desk in genuine
  use, not a clinical treatment scene, which would misrepresent the nature of the work (systems, not
  clinical practice).
- NHI is spelled out (National Health Insurance) on first use per the terminology register.
