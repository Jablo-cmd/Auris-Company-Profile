---
section: "7.10"
title: "Case studies"
part: "Seven — Credentials"
pages: [107]
archetype: K
words_target: 500
words_actual: 504
figures: []
tables: []
icons: ["fa-folder-open"]
images: []
tokens: []
status: draft — early-drafted ahead of Stage 9, see production notes
---

# 7.10 Case studies

**Standfirst**

> Five examples of what we have actually built, described at the depth an evaluator can verify —
> what exists, what it does, and precisely how far each has reached toward commercial use, stated
> plainly rather than rounded up.

---

## Copy

**Sebetsa Operations — multi-tenant workforce and operations platform.** Organisations that deploy
staff across multiple client sites — security, cleaning, facilities and similar contract-labour
sectors — need one system for organisational structure, scheduling and compliance instead of
spreadsheets held together by one person's memory. Sebetsa models this directly: regions, clients,
contracts and sites; departments, positions and teams; employee-to-site assignment; shift scheduling
against declared availability; leave and attendance with approval workflows; incident, compliance,
asset and training records. Role-based access is enforced twice — once in application code, once as
PostgreSQL row-level security scoped to the organisation — so a front-end bug cannot expose another
tenant's data, and every privileged change writes to an append-only audit log that ordinary users
cannot alter. **Status:** an Auris-developed platform currently under active development — substantially
built and covered by an automated test suite, not yet in commercial deployment for a paying client.

**Funda360 — multi-tenant school management platform.** Covers admissions, learner and staff records,
attendance, homework, report cards, a parent portal and fee administration, with the same tenant-isolation
and role-based-access discipline as Sebetsa applied to twenty-six tables. **Status:** a substantial
Auris-developed platform, built and verified in local development — automated tests, linting and
type-checks passing — with a defined pilot-deployment process prepared for a real school. That pilot
has not yet been executed against a hosted environment: no school is currently running it.

**Jo Jackson Dance Company — website design and development.** Auris Nexus Technologies designed and
developed the studio's website — home, about, programmes, timetable, gallery, contact and three legal
pages — giving it a clean, responsive platform to present its identity and information to its
audience. The build was taken through a structured release-quality process ahead of launch rather than
relying on visual inspection alone: automated browser-based smoke testing, an accessibility scan and
performance and quality checks, with defects found and closed before release. **Status:**
production-ready, with final content dependent on client-supplied material.

**Pro Energy Solutions — digital presence and corporate website.** Auris Nexus Technologies developed
a corporate website giving this energy and technical-services business a structured, professional
digital presence. The site presents its service and capability areas — including system design,
storage, consulting, maintenance and renewable-energy solutions — alongside company information, FAQs,
contact functionality and a showcase of completed work. It is responsive across device sizes and
includes a technical SEO foundation (metadata and social-sharing configuration, an XML sitemap and
robots.txt) plus practical performance measures such as lazy-loaded imagery and explicit image
dimensions. **Status:** completed and live.

**Logistics App — logistics and business operations application.** An Auris Nexus-developed logistics
and business operations application designed to support structured logistics workflows and operational
management. The product is currently being developed, with implementation evidence maintained in the
Auris Nexus development environment. Detailed technical capabilities and deployment status remain
subject to repository verification.

---

## Production notes

- **This section was drafted ahead of Stage 9** (Credentials, currently "Not started" per
  `06_Production-Conventions.md` §1), on the same basis Stages 4–7 used: it depends only on directly
  verified facts, not on any open Fact Register token from Groups E–H. Confirm at Stage 9 that this
  early draft still reflects the deployment status of each project — Sebetsa and Funda360 in
  particular are active builds whose status will change.
- **Evidence basis**, checked directly against each project's own repository on 2026-09-13 (code,
  database migrations, test suites and release documentation — not marketing copy): `sebetsa`,
  `funda360`, `jjdcmain-01`, `pro-energy-soltuions` (all `github.com/Jablo-cmd/`). No claim above
  states more than what direct inspection supports; see the Claim Verification Register entries
  CVR-035 through CVR-040 for the exact claim-to-evidence mapping.
- **Logistics App — evidence basis, added 2026-09-13, Stage 8A.** This entry rests on a different
  evidence route than the four above: not direct repository inspection (the `Jablo-cmd/Logistics-App`
  remote is currently near-empty), but owner-confirmed existence and authorship — see Fact Register
  **F10**. Per this project's evidence-priority rules, owner confirmation is legitimate evidence for
  *existence and authorship only*; the wording above deliberately states nothing about specific
  features, architecture, user counts or commercial outcome, none of which is evidenced yet. **Audit
  note:** Logistics App is an Auris Nexus-developed product whose source currently exists locally but
  has not yet been pushed to the corresponding GitHub repository. The empty remote repository therefore
  cannot be used as evidence that the product does not exist. Detailed technical capability verification
  is pending repository publication.
- **Do not rename this entry "LOGIOS" or "LOGIOS OS."** That name appears only on the public Auris
  Nexus Technologies website's portfolio page, investigated and found unconfirmed as a name for this
  or any other product — see Fact Register **F9** and Claim Verification Register **CVR-046**. Treat
  the two as separate, unreconciled facts until the local source or its documentation explicitly
  confirms otherwise.
- **Client naming — Jo Jackson Dance Company and Pro Energy Solutions.** Both are real, named,
  publicly-operating businesses with their own live public websites. **Corrected 2026-09-13:** the
  client has personally confirmed that written consent exists, for both, to name the client and
  describe the work performed. That consent document is not held in this repository — no filename,
  date, signatory or wording for it is recorded anywhere in this project, and none should be invented.
  See Fact Register **F2**'s correction note and Claim Verification Register **CVR-039/CVR-040**. This
  covers naming and description only; no outcome, duration, financial or contractual claim is made for
  either project, and none should be added without separate evidence.
- **Two candidate projects were investigated and remain excluded** — see Fact Register **F8** (CIT
  LMS) and **F9** ("LOGIOS"/"LOGIOS OS" by that specific name) for the full reasoning. Do not add
  either without the conditions those items describe being met first. **Logistics App (added
  2026-09-13, Stage 8A) is not a resolution of F9** — it is a separate, real, owner-confirmed product
  (Fact Register F10) added on its own evidence; do not treat its inclusion as retroactively verifying
  the "LOGIOS"/"LOGIOS OS" name or any claim made about it on the public website.
- **Word count and page allocation.** Recounted directly (not estimated) following the Logistics App
  addition on 2026-09-13, Stage 8A, per the same methodology used for the Part Five and Part Two–Four
  corrections this stage: **504 words**, up from 455. This remains within the archetype K band
  (400–650) and the existing single-page allocation (p. 107) in `02_Information-Architecture.md` — no
  pagination change is required, but confirm at layout that five entries still fit legibly on one page
  at this length.
- **Do not** state a specific number of sites, employees, learners or users for either platform, a
  completion date, or a client count — none of that is evidenced. Do not imply either platform is
  "live" for a client; both are explicitly pre-commercial.
