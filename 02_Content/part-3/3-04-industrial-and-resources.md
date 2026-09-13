---
section: "3.4"
title: "Industrial and resources"
part: "Three — Industries"
pages: [52, 53]
archetype: D
words_target: 800
words_actual: 441
figures: []
tables: []
icons: ["fa-gem", "fa-industry", "fa-helmet-safety"]
images: ["img-p052-industrial"]
tokens: ["[[SECTORS_DELIVERED]]"]
status: draft
---

# 3.4 Industrial and resources

**Layout:** Archetype D, narrative spread. Three industries, each with the fixed Challenges ·
Solutions · Business value · Technology opportunities structure.

---

## Copy

**Standfirst**

> Mining, manufacturing and construction share a boundary most software vendors are not built to
> cross: the point where operational technology on the plant floor has to talk to information
> technology in the office.

---

### Regulatory context

Mining operations carry Mine Health and Safety Act obligations that shape what plant-floor systems
must monitor and report, independent of any commercial requirement. Across all three industries,
operational technology — sensors, control systems, plant telemetry — was historically built and
governed separately from information technology, and the systems that succeed here are the ones
designed for that convergence rather than treating it as an integration afterthought.

---

### Mining

**Challenges.** Plant telemetry and safety-critical monitoring systems that must satisfy MHSA
compliance requirements, not only operational ones. OT and IT historically siloed, with limited data
flow between plant floor and management systems. Remote and harsh-environment site conditions that
constrain standard IT infrastructure assumptions.

**Solutions.** Telemetry and monitoring systems designed against MHSA reporting obligations from the
outset. Data integration layers that bring plant-floor telemetry into management reporting without
requiring OT systems to be replaced.

**Business value.** Improved safety-compliance reporting accuracy. Better-informed operational
decisions from consolidated plant and management data. Reduced risk from OT/IT data silos masking
operational issues.

**Technology opportunities.** Safety and compliance monitoring systems. OT/IT data integration.
Remote-site infrastructure design.

---

### Manufacturing

**Challenges.** Production systems that do not share data cleanly with planning, procurement or
finance systems. Quality and traceability requirements increasing across customer and regulatory
expectation. Legacy plant systems with long replacement cycles relative to software's typical
lifecycle.

**Solutions.** Integration layers connecting production, planning and finance systems without forcing
premature plant-system replacement. Traceability and quality reporting built to extract data from
existing systems rather than requiring new ones.

**Business value.** Reduced planning error from disconnected production and demand data. Improved
traceability response time when a quality issue requires tracing. Extended useful life of existing
plant investment through targeted integration rather than replacement.

**Technology opportunities.** Production-to-enterprise system integration. Quality and traceability
reporting. Business process automation across production-adjacent administrative workflows.

---

### Construction

**Challenges.** Project and site data fragmented across contractors, subcontractors and head office,
typically reconciled manually. Site conditions and connectivity that constrain standard software
assumptions. Compliance and safety documentation requirements that increase with project scale and
regulatory scrutiny.

**Solutions.** Field-capable systems designed for intermittent connectivity, per the same discipline
applied in mobile application development (§2.6). Project and site data consolidation across
contractor boundaries into a single reporting view.

**Business value.** Reduced reconciliation effort between site and head office. Improved visibility of
project status across multiple contractors. More defensible compliance documentation under audit or
dispute.

**Technology opportunities.** Field data capture and site management systems. Project and contractor
data integration. Compliance and safety documentation systems.

---

## Production notes

- **`[[SECTORS_DELIVERED]]`** — sector-general context and approach only; a specific delivery claim
  in mining, manufacturing or construction requires this token to resolve, per Fact Register **C7**
  (🔴 critical).
- Image: industrial operational context — plant floor or site in genuine (not staged) operation,
  appropriate PPE visible.
- MHSA (Mine Health and Safety Act) and OT/IT are spelled out on first use per the terminology
  register.
