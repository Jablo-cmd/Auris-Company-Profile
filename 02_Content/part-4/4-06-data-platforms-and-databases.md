---
section: "4.6"
title: "Data platforms and databases"
part: "Four — Technical Capabilities"
pages: [67]
archetype: C
words_target: 420
words_actual: 290
figures: []
tables: []
icons: ["fa-database"]
images: []
tokens: ["[[TECH_CAPABLE_DATA]]", "[[TECH_PLANNED_DATA]]"]
status: draft
---

# 4.6 Data platforms and databases

**Standfirst**

> The database is usually the last thing to be replaced and the first thing to constrain everything
> built on top of it. We select and model data storage for a twenty-year horizon, not the current
> release.

---

## Copy

Data platform selection spans relational databases for transactional systems, non-relational stores
where the access pattern genuinely calls for one, and data warehousing or lakehouse architecture where
an organisation needs to analyse data across systems rather than operate within any single one. The
choice is made against the actual read and write pattern, consistency requirement, and expected data
growth — not against which option is most fashionable to include in a proposal.

Data modelling discipline matters more over a system's life than the storage engine choice itself. A
poorly modelled schema on a well-chosen database will still accumulate the same technical debt a
well-modelled schema on a lesser database avoids, because the model is what every future feature has
to work with or around. We treat modelling as a deliverable reviewed on its own merits, not an
implicit byproduct of development.

**Technologies currently used:** demonstrated implementation experience with PostgreSQL as the primary
relational data store, accessed through Supabase, evidenced independently across three Auris-developed
systems. Two of them (Sebetsa, Funda360) additionally evidence Supabase-based authentication (session
and identity handling), file storage, and serverless Edge Functions running on Deno. A third,
confidentially-held system evidences PostgreSQL, Supabase authentication and Supabase file storage, but
no Edge Functions were found in its source — its serverless-function usage is not claimed. This reflects
genuine, source-inspectable implementation experience across multiple Auris-developed systems; it does
not evidence a specific managed-hosting arrangement, an uptime commitment, or a database engine choice
for any particular client engagement.
**Capable of supporting:** [[TECH_CAPABLE_DATA]]
**Planned / future roadmap:** [[TECH_PLANNED_DATA]]

---

## Production notes

- **Corrected 2026-09-13, Stage 8A; extended 2026-09-13, Stage 8B.** Fact Register **C3** is now
  partially resolved for this domain by direct source-code and database-migration inspection
  (PostgreSQL via Supabase). Stage 8A evidenced this in Sebetsa and Funda360, including Auth, Storage
  and Deno-based Edge Functions. Stage 8B extended the same inspection to the confidentially-held third
  system referenced in 4.1 — it independently confirms PostgreSQL via Supabase with Auth and Storage,
  but no Edge Functions were found in its source, so Deno usage is claimed only for the two systems
  that evidence it. See the correction note against C3 and Claim Verification Register CVR-045. **C4**
  (technologies *not* worked in) remains open; no warehousing/lakehouse platform is evidenced either
  way, and `[[TECH_CAPABLE_DATA]]`/`[[TECH_PLANNED_DATA]]` remain open.
- Cross-reference to 4.10 (BI, analytics and reporting) as a live `REF` field — this page covers where
  data is stored and modelled; 4.10 covers how it is reported on. Keep the boundary clean.
- POPIA data-handling obligations are addressed in 6.4, not here — this page is architectural, not
  compliance-focused; do not duplicate.
