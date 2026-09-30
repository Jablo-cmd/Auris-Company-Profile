# Profile Readiness Audit — Corporate Edition (Version 1.0)

**Date:** 30 September 2026
**Scope:** Whole repository, reviewed for the corporate/enterprise edition of the company profile
**Output:** `10_Output/Auris-Nexus-Company-Profile.html` → `09_PDF/Auris-Nexus-Technologies-Company-Profile-2026.pdf`

---

## 1. Starting state

- The repository is a Markdown publication project. It holds the master copy, legacy Part 1–8 drafts, fact and claim registers, a brand design system, a governance policy pack and one raster logo.
- **No finished deliverable existed.** `08_Word/` and `09_PDF/` were empty, and `10_Output/` did not exist.
- The master profile was positioned for **SMEs, medical practices and schools**. It opened its service list with **Professional Websites**, so it read more like a web and digital agency than a technology consulting company.
- Technology Consulting and Digital Transformation did not appear as service pillars in the master. AI was present, but lower down the list.
- Healthcare appeared as a lead sector with **no supporting evidence**.
- The supplied logo carries a legacy tagline, "Connecting Innovation. Delivering Impact.", which conflicts with the approved positioning line.

## 2. Strengths retained

- A strict evidence discipline: Delivered, Current capability, Available capability and Planned.
- Verified corporate facts: CIPC number, B-BBEE Level 1, CSD registration, head office, contact details.
- Real engineering evidence: Funda360, LOGIOS OS, Sebetsa, CIT and Pro Energy Solutions.
- A sound delivery lifecycle, security and POPIA wording, and an explicit statement that no certifications are claimed.
- A defined brand system: Nexus Navy #001A48, Auris Cyan #098FB4, Signal Cyan #00B3BF, Saira and Source Sans 3.

## 3. Changes made

| Area | Change |
|---|---|
| Positioning | Repositioned as a **technology consulting and digital solutions company**. The five primary pillars are Technology Consulting, Custom Software Development, Business Automation, Digital Transformation and AI Integration. Web development and the other services moved to supporting capabilities. |
| Narrative | New order: Overview → Business Challenges → Core Solutions → Supporting Capabilities → Approach → Capability → Selected Experience → Who We Work With → Why Auris Nexus → Credentials → Engage. |
| Business-first framing | New section covering eight business challenges, each written as problem → response. |
| Method | Discover → Design → Engineer → Implement → Improve, with typical outputs and delivery-management principles. |
| Sectors | Split into **"Where we have built"** (evidence-backed) and **"Organisations we are structured to support"** (target client types, labelled as such). Healthcare removed as a lead sector because there is no evidence for it. |
| Evidence | Each selected-work item now carries a visible evidence-status tag. |
| Credentials | Procurement-ready table, a banking-fraud safeguard note, and a list of documents available on request. Governance is described as "prepared", not "adopted". |
| Design | Built an 11-page A4 designed edition (HTML/CSS). It renders to PDF and is responsive on screen. Brand fonts are embedded locally. The logo was cropped to remove the legacy tagline and given a transparent background. |
| Build and QA | `tools/build-profile.cjs` renders the PDF and checks page overflow, fonts, images, console errors and horizontal overflow at 12 viewport widths. |

## 4. Remaining gaps

### Critical before sending to any corporate recipient

1. **Proofread and sign-off by the Managing Director.** Confirm every fact in the Credentials table and on the contact page.
2. **Ownership wording.** The profile says "100% South African-owned", which is the approved README fact. If a black-ownership percentage is to be stated, confirm it from the B-BBEE certificate or affidavit first. **MISSING — REQUIRES CONFIRMATION** (Fact Register E8).
3. **B-BBEE document.** Have the current certificate or sworn affidavit, and its expiry date, ready to supply on request (E7).
4. **CSD supplier number (MAAA…).** It is not recorded in the repository. Add it to the Credentials table if you want it published. **MISSING — REQUIRES CONFIRMATION** (E10).
5. **Governance adoption.** `11_Governance/Policy-Approval-Adoption-Record.md` is unsigned. Until it is signed, the profile must keep saying "prepared". Once it is signed, the wording can change to "adopted".
6. **CIT Employee & Leave Management.** Confirm whether this was built for a client (CIT) and whether that client may be named. The profile currently describes it only as "business system development".
7. **Pro Energy Solutions.** Confirm that the client is happy to be named as delivered work.

### Optional future improvements

- Tax Compliance Status PIN, VAT status, directors and date of incorporation, for procurement packs only (E2–E6).
- A vector logo rebuild (SVG/EPS, reversed and mono versions) that uses the current tagline, or no tagline.
- Real, reviewed product screenshots of Funda360, LOGIOS OS and Sebetsa (Image Register IMG-002 to IMG-004).
- Named leadership biographies (F5), attributable testimonials with written consent (F3), and professional indemnity insurance (E16).
- A Word (.docx) derivative for tender portals that require editable files.
- Short-form capability statement (1–2 pages) derived from this edition.

## 5. Things intentionally not claimed

The profile makes no claims about client counts, staff numbers, years in operation, revenue, uptime, SLAs, certifications, partnerships, awards, testimonials, enterprise deployments or telecommunications-sector experience. It also does not mention, or imply any relationship with, any prospective recipient organisation.
