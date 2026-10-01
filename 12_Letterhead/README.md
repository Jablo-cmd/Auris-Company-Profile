# Auris Nexus Technologies — Corporate Letterhead System

Editable Microsoft Word letterheads and print/digital PDFs for Auris Nexus Technologies (Pty) Ltd.
The letterheads use the identity defined in `07_Branding/`, which is the same identity used by the company profile. They use the supplied logo (`03_Images/aurilogo.png`), the colours sampled from it, and the profile typefaces (Saira for display text, Source Sans 3 for body text).

## Contents

| Folder | File | Use |
|---|---|---|
| `01_Word-Templates/` | `AurisNexus_Letterhead_Standard.docx` / `.dotx` | **Version A: Standard Corporate.** Client letters, introductions, proposals, quotations, general correspondence |
| | `AurisNexus_Letterhead_Formal-Procurement.docx` / `.dotx` | **Version B: Formal / Procurement.** Tenders, RFQ responses, bid clarifications, supplier onboarding, declarations, government and institutional correspondence |
| | `*_Blank-Stationery.docx` | The header and footer with an empty body, for pasting existing content into |
| `02_PDF/` | `AurisNexus_Letterhead_Standard.pdf`, `AurisNexus_Letterhead_Formal-Procurement.pdf` | Blank two-page stationery (first page and continuation page). Use it as a background in systems that accept a PDF letterhead, or print it as stationery |
| | `AurisNexus_Sample_*.pdf` | Rendered test letters (**Version C: Digital**, see below) |
| `03_Sample-Letters/` | `AurisNexus_Sample_Standard_Supplier-Introduction-Letter.docx` | Letter introducing the company to a procurement department, filled with realistic content |
| | `AurisNexus_Sample_Formal_Bid-Clarification-Letter.docx` | Bid clarification letter with a numbered structure, reference panel and tables |
| `04_Brand-Assets/logo/` | `an-logo-*.png` | Transparent derivatives of the supplied logo: horizontal lockup (full colour, mono navy, mono black), symbol, and stacked lockup without tagline |
| | `an-logo-*-onwhite.png` | Opaque copies (flattened on white) used inside the Word and PDF letterheads, so no transparency reaches a printer |
| `04_Brand-Assets/fonts/` | `Saira-*.ttf`, `SourceSans3-*.ttf` | Brand fonts (SIL Open Font License) |
| `05_Source/` | Build scripts | Regenerate everything with `./05_Source/publish.sh` |

The signatory in the templates and samples is **Loyiso Ngcala, Managing Director**; no personal contact details are included. The sample letters exist to test the layout. Placeholders in square brackets (`[Organisation Name]`, `[Tender / RFQ reference]`) are deliberate. The samples contain no client names, tender numbers, awards or certifications.

## The three versions

**A. Standard Corporate.** The header carries the horizontal logo lockup, the legal name, *Technology Consulting & Digital Solutions* and the tagline *Transforming Businesses Through Technology*. Below it sits a navy hairline with a short Auris Cyan accent. Continuation pages are numbered.

**B. Formal / Procurement.** This version is more restrained:
- The header shows only the legal name, the registration number and the B-BBEE level. There is no tagline and no cyan accent; the rule is a single navy hairline.
- A ruled reference panel holds *Our ref / Your ref / Date / Enquiries*.
- **Every page is numbered "Page x of y"**, as most tender rules require.
- The continuation header repeats *Our ref*, so separated pages can be matched back to the letter.

It has no colour fills or decoration and photocopies cleanly in greyscale. Company information in its header and footer is set near-black (Graphite) at 8 pt, rather than grey at 7.5 pt, so the registration number, address and contact details survive repeated photocopying.

The Formal version deliberately carries no tagline, no cyan accent and no credentials beyond the CIPC registration number and B-BBEE Level 1. CSD registration is not shown; add it only once documentary evidence is held and the company information is intentionally updated.

**C. Digital.** This is the PDF export of A or B. It is not a separate Word file. The PDFs are PDF/A-2b (archival) and tagged, with all fonts embedded and lossless images. The telephone number, email address and website in the footer are live links. In print, the links look the same as the surrounding text.

## Page structure

| | First page | Continuation pages |
|---|---|---|
| Header | Full logo lockup (56 mm) and company block, brand rule | 8.5 mm symbol, legal name, hairline |
| Footer | Legal name, registration number, B-BBEE Level 1, address, T/E/W (Formal also shows Page x of y) | One line: legal name, registration number, page x of y |

- **Page:** A4 portrait, 210 × 297 mm.
- **Margins:** 20 mm left and right, 36 mm top, 32 mm bottom.
- **Header and footer distance:** header 12 mm from the top edge, footer 10 mm from the bottom edge. Every element sits well inside the non-printable zone of office printers.
- The first and continuation pages are one Word section with *Different First Page* turned on. Typed text flows onto continuation pages automatically and never runs into the header or footer.

## Using the templates

1. **Fonts.** The Word files embed Saira and Source Sans 3, so the documents display correctly on machines without those fonts. On machines that will author letters regularly, install the fonts from `04_Brand-Assets/fonts/` (right-click → *Install for all users*). To keep fonts embedded when you save, use *File → Options → Save → Embed fonts in the file*, and leave *Embed only the characters used* unticked.
2. **Templates.** Double-clicking a `.dotx` opens a new, untitled letter and leaves the master unchanged. To make a template appear under *File → New → Personal*, copy it into your Word templates folder.
3. **Styles.** Use the built-in styles rather than manual formatting:

   | Style | Purpose |
   |---|---|
   | `Letter Date` | Date, with a right-aligned *Our ref* |
   | `Recipient Name` / `Recipient Address` | Recipient block |
   | `Salutation` | Greeting |
   | `Subject Line` | Subject, in capitals in Saira |
   | `Normal` | Body text, Source Sans 3 10.5 pt |
   | `Heading 1` / `Heading 2` | Section headings |
   | `List Bullet` / `List Number` | Lists |
   | `Closing` | Sign-off line |
   | `Signature Space` | 17 mm space for a wet signature |
   | `Signature Name` / `Signature Title` | Signatory details |
   | `Enclosure` | Enclosures line |
   | `Table Text` / `Table Label` | Tables |

4. **Signature block.** It is set to keep with the paragraph before it, so a signature never ends up alone on a page. When you replace the final paragraph, keep *Format → Paragraph → Keep with next* turned on for it.
5. **Editing contact details.** Edit them in the header and footer (double-click the header or footer). The first page and the continuation pages have separate headers and footers, so update both.

## Company information used

Only verified details appear:
- Auris Nexus Technologies (Pty) Ltd
- CIPC Registration No. 2026/606690/07
- B-BBEE Level 1
- 140 Linden Road, Sandown, Sandton, Gauteng, South Africa
- 063 122 6552
- info@aurisnexus.co.za
- aurisnexus.co.za
- *Transforming Businesses Through Technology*

No other registration numbers, accreditations, memberships or banking details are included.

## Logo note

The horizontal lockup is built from the supplied artwork itself, not redrawn. It follows the construction in `07_Branding/08_Logo-and-Identity.md` §2.1: the symbol is 3u high and set 0.75u from the wordmark stack, which is centred on the symbol. The white ground was removed so the logo sits cleanly on paper.

At the 56 mm header width the logo is placed at about 1270 ppi, and the PDF export keeps it at full resolution (image downsampling is turned off). That is still a raster: the master is a raster file (identity gaps G1 to G7). Once the recommended vector rebuild of the mark exists, replace the PNGs in `04_Brand-Assets/logo/` and run `05_Source/publish.sh`. Every document will pick up the new artwork.

## Rebuilding

The build needs Node.js with `docx`, Python 3 with `numpy` and `Pillow`, and LibreOffice Writer.

```bash
./12_Letterhead/05_Source/publish.sh                  # rebuild every deliverable
AN_QA=1 ./12_Letterhead/05_Source/render.sh /tmp/qa   # also build 6-page stress-test documents
```

## Production QA (final pass)

| Check | Result |
|---|---|
| Page size and margins | A4, 11906 × 16838 twips (Word's own A4 definition; the PDF reads 210.01 × 297.00 mm). Margins 20 / 20 / 36 / 32 mm, header 12 mm and footer 10 mm from the page edge, all confirmed in the document XML |
| Word compatibility | Saved in Word 2013+ layout mode (not Compatibility Mode). Different first page on. Fonts embedded with regular, bold and italic faces. All `.docx` files pass OOXML schema validation |
| PDF/A | All PDFs pass **veraPDF PDF/A-2b** validation. Tagged, output intent present, every font embedded, no soft masks or transparency groups |
| Glyphs and clipping | Every character is present in the embedded fonts. No text outside the side margins, and no body text in the header or footer zones |
| Page numbering and continuation | "Page x of y" is correct on every page, including a 6-page stress test (`AN_QA=1`). The continuation header and footer appear from page 2, and table header rows repeat |
| Links | Telephone (`tel:+27631226552`), email and website links are live in every PDF |
| Print | Simulated at 100% scale (600 dpi): greyscale laser, a first-generation photocopy and a copy of a copy. All legal and contact information stays legible |
| Content | No `[Full Name]` placeholder remains. No CSD, VAT, tax, banking or certification claims |

**Limitations:**
- The renders were made with LibreOffice; Microsoft Word itself was not available in the build environment. Open both templates once in Word on a Windows or Mac machine before roll-out to confirm pagination. Word's line breaking can differ by a line or so from LibreOffice.
- On fax-grade (around 200 dpi) or very light copies, the 8 pt regular footer text degrades before the semibold company name does. Body text at 10.5 pt behaves the same way.
