---
section: "2.6"
title: "Mobile Application Development"
part: "Two — Services"
pages: [36, 37]
archetype: H
words_target: 660
words_actual: 457
figures: []
tables: []
icons: ["fa-mobile-screen"]
images: ["img-p036-mobile-testing"]
tokens: ["[[TECH_STACK_MOBILE]]", "[[PROOF_MOBILE]]"]
status: draft
---

# 2.6 Mobile Application Development

**Layout:** Archetype H, the fixed ten-block service template.

---

## ① Service title

Mobile Application Development
*Service covered: mobile application development*

---

## ② Standfirst (40–55 words)

> A mobile application is used in fragments of attention, offline as often as online, on devices the
> organisation does not control. We design and build for those conditions specifically, not as a
> smaller version of the desktop system.

---

## ③ Description

Mobile applications are not a scaled-down website or a thin client to an existing system — they are
used differently: in short sessions, frequently without reliable connectivity, on hardware the
organisation neither owns nor standardises. A build that ignores those conditions produces an
application that works in a demonstration and fails in the field, which is the specific failure mode
this service exists to prevent.

We build for native platforms or cross-platform frameworks depending on the requirement — offline
data capture for field teams, customer-facing service applications, or internal tools for staff who
are rarely at a desk. Architecture decisions are made against the actual usage pattern: connectivity
assumptions, device diversity, offline-first data handling, and the update and distribution mechanism
the organisation can realistically sustain.

---

## ④ Problems this solves

- Field staff currently rely on paper forms or manual reconciliation because no mobile tool supports
  their work
- An existing application was built without accounting for intermittent connectivity and fails in the
  conditions it is actually used in
- Customer-facing services are only available through channels that assume desk-based, connected
  access
- An organisation needs a mobile presence but has no internal capability to build or maintain one

---

## ⑤ Business benefits

- Field and mobile workers supported by a tool designed for their actual working conditions
- Reduced reliance on paper-based capture and its associated transcription error and delay
- A customer or citizen-facing channel available where and when it is actually used
- An application architecture that degrades gracefully under poor connectivity rather than failing

---

## ⑥ Typical deliverables

- Platform and framework recommendation, matched to usage pattern and budget
- UX design for mobile-specific interaction patterns
- Offline-first data architecture where connectivity cannot be assumed
- Native or cross-platform application build
- App store or enterprise distribution setup
- Device and network-condition testing
- Analytics and crash reporting configuration
- Post-launch support and update cycle

---

## ⑦ Technologies used

[[TECH_STACK_MOBILE]] — platform and framework selection against the confirmed stack in
`04_Technical Capabilities`, section 4.0.

---

## ⑧ Ideal client profile

An organisation with field staff, mobile-first customers, or a service that needs to function
reliably without assuming continuous connectivity or desk-based access.

---

## ⑨ Expected outcomes

- Reduced dependence on paper-based or manual field data capture
- Reliable application performance in genuine, intermittent-connectivity field conditions
- Faster data availability from field to office, without manual reconciliation
- A distribution and update mechanism the organisation can sustain without external dependency

---

## ⑩ Industries served

Particularly relevant in logistics and transport, security, property management, healthcare and
government field services, though applicable wherever mobile or field-based work exists.

---

## Production notes

- **Fact callout, lower recto:** [[PROOF_MOBILE]] — real delivered example, per Fact Register **C2**
  (🔴 critical, unresolved). Left open.
- Image: device-in-hand field testing or usability session, genuine hardware, not a generic app-store
  screenshot montage.
- Offline-first framing is the section's specific argument — do not let it soften into generic
  "we build iOS and Android apps" language.
