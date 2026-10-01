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
| `04_Brand-Assets/fonts/` | `Saira-*.ttf`, `SourceSans3-*.ttf` | Brand fonts (SIL Open Font License) |
| `05_Source/` | Build scripts | Regenerate everything with `./05_Source/publish.sh` |

The sample letters exist to test the layout. Placeholders in square brackets (`[Organisation Name]`, `[Tender / RFQ reference]`, `[Full Name]`) are deliberate. The samples contain no client names, tender numbers, awards or certifications.

## The three versions

**A. Standard Corporate.** The header carries the horizontal logo lockup, the legal name, *Technology Consulting & Digital Solutions* and the tagline *Transforming Businesses Through Technology*. Below it sits a navy hairline with a short Auris Cyan accent. Continuation pages are numbered.

**B. Formal / Procurement.** This version is more restrained:
- The header shows only the legal name, the registration number and the B-BBEE level. There is no tagline and no cyan accent; the rule is a single navy hairline.
- A ruled reference panel holds *Our ref / Your ref / Date / Enquiries*.
- **Every page is numbered "Page x of y"**, as most tender rules require.
- The continuation header repeats *Our ref*, so separated pages can be matched back to the letter.

It has no colour fills or decoration and photocopies cleanly in greyscale.

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

At the 56 mm header width the logo prints at over 600 ppi. That figure is a raster resolution: the master is still a raster file (identity gaps G1 to G7). Once the recommended vector rebuild of the mark exists, replace the PNGs in `04_Brand-Assets/logo/` and run `05_Source/publish.sh`. Every document will pick up the new artwork.

## Rebuilding

The build needs Node.js with `docx`, Python 3 with `numpy` and `Pillow`, and LibreOffice Writer.

```bash
./12_Letterhead/05_Source/publish.sh                  # rebuild every deliverable
AN_QA=1 ./12_Letterhead/05_Source/render.sh /tmp/qa   # also build 6-page stress-test documents
```

**Quality checks performed:**
- All documents render to A4 (210.0 × 297.0 mm).
- All fonts embed and are used without substitution, also when the brand fonts are *not* installed on the machine.
- The `.docx` files pass schema validation.
- A 6-page stress test showed no header or footer collisions, repeated table headers on new pages, and correct "Page x of y".
- The signature block stays with its final paragraph.
- The logo stays sharp at 600 dpi.
