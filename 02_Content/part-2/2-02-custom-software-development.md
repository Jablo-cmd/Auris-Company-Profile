---
section: "2.2"
title: "Custom Software Development"
part: "Two — Services"
pages: [28, 29]
archetype: H
words_target: 660
words_actual: 582
figures: []
tables: []
icons: ["fa-code"]
images: ["img-p028-development-session"]
tokens: ["[[TECH_STACK_CUSTOM_DEV]]"]
status: draft
---

# 2.2 Custom Software Development

**Layout:** Archetype H, the fixed ten-block service template.

---

## ① Service title

Custom Software Development
*Service covered: custom software development*

---

## ② Standfirst (40–55 words)

> Off-the-shelf software is a compromise negotiated for someone else's business. We build the system
> that fits the process as it actually runs — not the process forced to fit the nearest available
> package.

---

## ③ Description

A packaged system is designed for the median customer of its vendor, not for any specific
organisation. Where a process is genuinely standard, that compromise is efficient and we recommend
it — configuring an existing platform is usually cheaper and faster than writing one. Custom
development earns its cost only where the process itself is the differentiator, or where no package
fits closely enough that the gap can be configured away rather than worked around.

We build applications and systems specified against the operating reality established during
discovery, not against a generic requirements template. That includes web and desktop applications,
internal tooling, data-driven systems and the software layer that sits between an organisation's
existing platforms and the processes those platforms do not natively support. Architecture,
documentation and handover are scoped as part of the build, not added afterwards.

---

## ④ Problems this solves

- No available package fits the process closely enough, and configuring around the gap costs more
  than building for it directly
- A previous off-the-shelf implementation is being worked around by staff rather than working for them
- An internal process depends on spreadsheets, email and manual reconciliation because no system was
  ever built to support it properly
- Two or more existing systems need a purpose-built layer between them that neither vendor will supply

---

## ⑤ Business benefits

- A system shaped to the process, rather than a process reshaped to fit the system
- Full ownership of source, architecture and roadmap — no vendor licensing ceiling on how the system
  can grow
- Freedom from a package vendor's release cycle and pricing changes
- A system that can be extended precisely where the business needs it extended, not only where the
  vendor's roadmap permits

---

## ⑥ Typical deliverables

- Technical requirements specification, traced to discovery findings
- Solution architecture document
- Working software, delivered in stages with acceptance criteria per stage
- Automated test suite
- Source code and repository access, transferred at handover
- Technical and user documentation
- Deployment runbook
- Post-launch support handover

---

## ⑦ Technologies used

[[TECH_STACK_CUSTOM_DEV]] — language and framework selection is made per engagement against the
confirmed stack in `04_Technical Capabilities`, section 4.0, not a fixed default.

---

## ⑧ Ideal client profile

An organisation with a process specific enough that no configurable package fits it well, or with
existing systems that need a bespoke layer between them — and the internal appetite to own that
system rather than rent one.

---

## ⑨ Expected outcomes

- Elimination of the manual workarounds a mismatched package previously required
- A system whose licensing cost does not scale with user count or usage volume
- Reduced dependence on a single vendor's roadmap and pricing decisions
- Documentation and source access sufficient for another team to maintain the system if required

---

## ⑩ Industries served

Relevant across all ten sectors we serve, with particular weight in government, financial services,
manufacturing and logistics and transport, where process-specific systems are most common.

---

## Fact callout (lower recto)

> **A workforce administration system**, built for a South African organisation whose staff are
> deployed across multiple client operational sites. The system covers employee records, attendance,
> leave requests and approvals, multi-site posting and deployment management, contracts, HR request
> workflows, reporting and a full audit trail — a bespoke build to that organisation's specific
> operating structure, not a configurable off-the-shelf product. The commissioning organisation is not
> named, consistent with the absence of a written release permitting that.

---

## Production notes

- **Fact callout, lower recto — resolved 2026-09-13, Stage 8B.** Previously an open
  `[[PROOF_CUSTOM_DEV]]` token pending Fact Register **C2**. Resolved using a fully anonymised
  description of the real system inspected for Fact Register **F8** ("CIT LMS") — Claim Verification
  Register **CVR-047**. The commissioning organisation and its own client names (confidential, found in
  the same repository's seed data) are never stated here or anywhere in this profile; only the generic
  capability description above is used, consistent with the client-naming consent rule already applied
  to 7.10 (Fact Register F2) — the difference here is that no name is used at all, so no naming consent
  is required. No financial value, user count, deployment date or commercial outcome is stated, because
  none is evidenced for a public reference of this kind.
- Image: development or code-review session, screens visible but not staged as a stock photograph.
- Distinguish clearly from 2.3 (Enterprise Management Systems) in layout review — 2.3 covers our own
  productised platforms; this page covers bespoke, single-client builds. The distinction is
  commercial (licence vs. build) as well as technical and must not blur in copy.
