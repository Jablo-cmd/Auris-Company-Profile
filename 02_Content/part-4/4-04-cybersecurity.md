---
section: "4.4"
title: "Cybersecurity"
part: "Four — Technical Capabilities"
pages: [65]
archetype: C
words_target: 420
words_actual: 414
figures: []
tables: []
icons: ["fa-shield-halved"]
images: []
tokens: ["[[TECH_CURRENT_SECURITY]]", "[[TECH_CAPABLE_SECURITY]]", "[[SECURITY_TESTING_REGIME]]", "[[INCIDENT_RESPONSE_PROCESS]]", "[[CERTS_HELD]]"]
status: draft
---

# 4.4 Cybersecurity

**Standfirst**

> A security posture stated without evidence is indistinguishable from no posture at all. Everything
> on this page that cannot yet be evidenced is marked as such, deliberately.

---

## Copy

Security is treated as a property of every layer in section 4.0, not a bolt-on control layer applied
at the end of a build. Defensive design begins at architecture — access control, data classification
and threat modelling considered alongside functional requirements, not after them — and continues
through testing and into how an incident, if one occurs, is actually handled.

We distinguish deliberately between security as a design discipline, which governs how we build
regardless of a specific client's testing requirements, and security as a verified, evidenced
capability — specific controls implemented, specific testing regimes run, specific certifications
held. The former is a statement of approach and is made here directly. The latter is stated only
where it can be evidenced, per the high-assurance standard applied throughout this Part and reinforced
further in Part Six.

**Technologies and controls currently used:** [[TECH_CURRENT_SECURITY]]
**Capable of supporting:** [[TECH_CAPABLE_SECURITY]]
**Security testing regime:** [[SECURITY_TESTING_REGIME]] — penetration testing cadence, tooling and
provider, once confirmed
**Incident response process:** [[INCIDENT_RESPONSE_PROCESS]]
**Certifications held:** [[CERTS_HELD]] — no security certification (ISO 27001 or otherwise) is
implied until documentary evidence is supplied; this token is intentionally left visible rather than
populated with an unverified claim

---

## Production notes

- This is a **high-assurance section** per the client's explicit instruction — the strictest evidence
  standard in the document applies here and is reinforced at 6.4 (POPIA and information security).
  No control, certification or testing claim is stated as fact without verification.
- `[[CERTS_HELD]]` deliberately duplicates the token used in Part Seven's credentials register — see
  the content reuse map, `02_Information-Architecture.md` §6, for the owner-section rule once C-level
  certification facts are confirmed.
- Cross-reference to 6.2 (risk management and business continuity) and 6.4 (POPIA and information
  security) as live `REF` fields — this page states engineering-level security discipline; Part Six
  states organisational governance and compliance posture. Neither repeats the other.
