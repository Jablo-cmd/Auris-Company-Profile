# PDF production build — blocked in this environment

Phase 5 of the Stage 10 brief calls for a PDF alongside the DOCX. It was not produced in
this pass, and this is a documented environment limitation, not a decision to skip it.

**What was tried:** converting `08_Word/Auris-Nexus-Company-Profile-Stage10-Draft.docx` to
PDF via headless LibreOffice (`soffice --headless --convert-to pdf`), including the
socket-shim workaround for sandboxed environments described in the `docx` skill.

**What happened:** LibreOffice fails to load *any* input file in this container, including
a one-paragraph test `.docx` created fresh with the same toolchain and a plain `.txt` file —
`soffice.bin` exits with code 81 before reaching the conversion step. This was confirmed
with the sandbox restriction lifted as well, so it is not a permissions issue this session
can route around; it is a broken or incompatible LibreOffice install in this specific
container.

**What this does *not* mean:** it is not evidence of a problem with the generated `.docx`
itself. The file independently passed full OOXML schema validation
(`scripts/office/validate.py` from the `docx` skill — "All validations PASSED!") and its
content was verified directly via `python-docx` (correct section count, zero raw token
leaks, correct heading hierarchy — see the Stage 10 build QA log).

**Next step:** convert `08_Word/Auris-Nexus-Company-Profile-Stage10-Draft.docx` to PDF from
a working environment — a desktop copy of Word or LibreOffice, or a Claude Code session
running in a container where `soffice` functions. No change to the source Markdown or the
DOCX generator is required for this.
