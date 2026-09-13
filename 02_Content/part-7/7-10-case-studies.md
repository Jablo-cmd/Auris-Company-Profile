---
section: "7.10"
title: "Case studies"
part: "Seven — Credentials"
pages: [107]
archetype: K
words_target: 500
words_actual: 455
figures: []
tables: []
icons: ["fa-folder-open"]
images: []
tokens: []
status: draft — early-drafted ahead of Stage 9, see production notes
---

# 7.10 Case studies

**Standfirst**

> Four examples of what we have actually built, described at the depth an evaluator can verify —
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
- **Client naming — Jo Jackson Dance Company and Pro Energy Solutions.** Both are real, named,
  publicly-operating businesses with their own live public websites. **Corrected 2026-09-13:** the
  client has personally confirmed that written consent exists, for both, to name the client and
  describe the work performed. That consent document is not held in this repository — no filename,
  date, signatory or wording for it is recorded anywhere in this project, and none should be invented.
  See Fact Register **F2**'s correction note and Claim Verification Register **CVR-039/CVR-040**. This
  covers naming and description only; no outcome, duration, financial or contractual claim is made for
  either project, and none should be added without separate evidence.
- **Two candidate projects were investigated and deliberately excluded** — see Fact Register **F8**
  and **F9** for the full reasoning. Do not add either without the conditions those items describe
  being met first.
- **Word count and page allocation.** At 455 words this sits within the archetype K band (400–650) and
  the existing single-page allocation (p. 107) in `02_Information-Architecture.md` — no pagination
  change was required. Word count verified by direct recount of the Standfirst and Copy text, not
  estimated, per the correction applied to Part Five at the 2026-09-13 Stage 7 re-audit.
- **Do not** state a specific number of sites, employees, learners or users for either platform, a
  completion date, or a client count — none of that is evidenced. Do not imply either platform is
  "live" for a client; both are explicitly pre-commercial.
