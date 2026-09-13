---
section: "2.3"
title: "Enterprise Management Systems"
part: "Two — Services"
pages: [30, 31]
archetype: H
words_target: 660
words_actual: 619
figures: []
tables: []
icons: ["fa-building-user"]
images: ["img-p030-platform-operations"]
tokens: ["[[TECH_STACK_EMS]]", "[[PLATFORM_DEPLOYMENTS]]", "[[PLATFORM_OPERATING_MODEL]]"]
status: draft
---

# 2.3 Enterprise Management Systems

**Layout:** Archetype H, the fixed ten-block service template.

---

## ① Service title

Enterprise Management Systems
*Services covered: HR & employee management systems · school management systems*

---

## ② Standfirst (40–55 words)

> Our HR and school management systems are platforms we operate ourselves, not products we shipped
> and moved on from. That distinction changes what a client can expect from support, because we carry
> the same consequence they do when something goes wrong.

---

## ③ Description

HR and Employee Management Systems cover the operational core of managing a workforce — records,
leave, performance, payroll-adjacent processes and the reporting a regulator or a board will ask for.
School Management Systems cover the equivalent core for an academic institution — learner records,
registration, academic administration and the reporting a department of education will ask for. Both
are built and maintained as our own platforms, configured to each client's structure rather than
built from a blank page per engagement. [[PLATFORM_OPERATING_MODEL]]

Operating these platforms ourselves — not just having built them once — means we carry the same
consequence our clients do when something breaks: a payroll-adjacent process failing is not an
abstract defect ticket to us, and neither is a school unable to register its learners. That
discipline shapes how the platforms are maintained, tested and supported, and it is the material
difference between a productised platform and a custom build licensed once and left.

---

## ④ Problems this solves

- HR or student administration is still running on spreadsheets, generic office software, or a system
  too rigid for the organisation's actual structure
- An existing HR or school platform is unsupported, end-of-life, or maintained by a vendor no longer
  responsive
- Reporting for compliance, board or departmental purposes is manually reconstructed each cycle
  because the system of record does not produce it directly
- The organisation needs a platform, not a one-off build, because the underlying process is common to
  many organisations of its type

---

## ⑤ Business benefits

- A platform already proven in operation, configured rather than built from zero
- Ongoing platform investment shared across the client base, rather than borne alone by a single
  custom build
- A vendor who operates the platform in production and therefore has direct incentive to keep it
  reliable
- Reporting structured for the compliance and governance obligations specific to HR and education
  administration

---

## ⑥ Typical deliverables

- Configuration to the organisation's structure, roles and reporting requirements
- Data migration from the prior system or manual records
- User and administrator training
- Compliance and management reporting templates
- Role-based access and audit trail configuration
- Integration with adjacent systems (payroll, SIS, finance) where required
- Change management and rollout support
- Ongoing platform support and update cycle

---

## ⑦ Technologies used

[[TECH_STACK_EMS]] — platform-specific technology detail against the confirmed stack in
`04_Technical Capabilities`, section 4.0.

---

## ⑧ Ideal client profile

An employer or educational institution whose HR or student-administration process is common enough
to be well served by a configured platform, and that values a vendor who is also the platform's daily
operator.

---

## ⑨ Expected outcomes

- Elimination of manual reconciliation between spreadsheets and the system of record
- Compliance and management reports produced directly from the platform rather than reconstructed
- Reduced administrative time spent on routine record-keeping tasks
- A support relationship with a vendor who has direct, daily operational stake in platform reliability

---

## ⑩ Industries served

Government, education, healthcare, professional services and small and medium enterprises for HR and
employee management; education specifically for school management. [[PLATFORM_DEPLOYMENTS]] — the
number of organisations currently running each platform is not yet confirmed and is not claimed here.

---

## Fact callout (lower recto)

> **Funda360** — a school management platform Auris Nexus has built, covering admissions, learner and
> staff records, attendance, homework, report cards, a parent portal and fee administration. Built and
> verified in local development, with a defined pilot-deployment process prepared for a real school —
> that pilot has not yet been executed, and no school is currently running it. Full account in 7.10.

---

## Production notes

- **Fact callout, lower recto — resolved 2026-09-13, Stage 8B, for the school-management half of this
  service only.** Previously an open `[[PROOF_EMS]]` token pending Fact Register **C2**. Resolved using
  evidence already established for 7.10 Case studies (Funda360 — Claim Verification Register CVR-036),
  not new client input. **This callout does not, and must not be read to, resolve `[[PLATFORM_OPERATING_MODEL]]`
  or `[[PLATFORM_DEPLOYMENTS]]`** — it states plainly, consistent with 7.10, that Funda360 is built but
  not yet operating for any real school, which is evidence *against* the "we operate this platform"
  claim being currently true, not evidence toward it (see Fact Register C14 addendum, CVR-011). The
  "HR & employee management systems" half of this service remains unresolved: Sebetsa (also in 7.10)
  demonstrates related employee/workforce administration capability but is scoped to multi-tenant
  contract-labour deployment across client sites, not general single-employer HR administration, and is
  not used here to avoid overstating the fit.
- **`[[PLATFORM_DEPLOYMENTS]]`** also appears in 1.1 and 1.8 with the same status — resolving it once
  updates all three per the content reuse map, `02_Information-Architecture.md` §6.
- **`[[PLATFORM_OPERATING_MODEL]]`** — added at Stage 7 audit. This is the source spread for the
  "we operate, not just built once" claim repeated at 0-06, 1.1, 1.3, 1.8 and 1.9. The confirmed
  service list (Fact Register **C1**) evidences these as offered services, not that Auris self-operates
  them as ongoing products — see Fact Register **C14**, Claim Verification Register CVR-011. Do not
  resolve this spread's standfirst or Description as settled fact ahead of that evidence.
- Image: platform operations or support desk, showing the platform in genuine use, not a generic
  office stock image.
- This is the only service spread describing our own products rather than client-commissioned work —
  keep "we operate" language distinct from "we build for you" language used elsewhere in Part Two.
