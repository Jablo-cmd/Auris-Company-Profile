---
section: "4.6"
title: "Data platforms and databases"
part: "Four — Technical Capabilities"
pages: [67]
archetype: C
words_target: 420
words_actual: 402
figures: []
tables: []
icons: ["fa-database"]
images: []
tokens: ["[[TECH_CURRENT_DATA]]", "[[TECH_CAPABLE_DATA]]", "[[TECH_PLANNED_DATA]]"]
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

**Technologies currently evidenced:** PostgreSQL through Supabase in Auris-built platforms.
**Capable of supporting:** relational and other data architectures selected according to the workload; no exhaustive database catalogue is claimed.
**Planned / future roadmap:** determined by product and client requirements.

---

## Production notes

- Per Fact Register **C3**/**C4**, no specific database engine or warehousing platform is named until
  confirmed.
- Cross-reference to 4.10 (BI, analytics and reporting) as a live `REF` field — this page covers where
  data is stored and modelled; 4.10 covers how it is reported on. Keep the boundary clean.
- POPIA data-handling obligations are addressed in 6.4, not here — this page is architectural, not
  compliance-focused; do not duplicate.
