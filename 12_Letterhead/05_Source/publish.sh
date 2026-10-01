#!/usr/bin/env bash
# Rebuild every letterhead deliverable and place it in the 12_Letterhead folders.
#   ./publish.sh            (requires node + docx, python3, LibreOffice Writer)
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$HERE")"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

python3 "$HERE/build_logo_assets.py"
"$HERE/render.sh" "$TMP"
python3 "$HERE/embed_fonts.py" --dotx "$TMP/dotx" \
  "$TMP/docx/AurisNexus_Letterhead_Standard.docx" "$TMP/docx/AurisNexus_Letterhead_Formal-Procurement.docx" >/dev/null

W="$ROOT/01_Word-Templates"; P="$ROOT/02_PDF"; S="$ROOT/03_Sample-Letters"
mkdir -p "$W" "$P" "$S"
cp "$TMP"/docx/AurisNexus_Letterhead_Standard.docx "$TMP"/docx/AurisNexus_Letterhead_Formal-Procurement.docx "$W/"
cp "$TMP"/dotx/*.dotx "$W/"
cp "$TMP"/docx/*Blank-Stationery.docx "$W/"
cp "$TMP"/pdf/AurisNexus_Letterhead_Standard_Blank-Stationery.pdf "$P/AurisNexus_Letterhead_Standard.pdf"
cp "$TMP"/pdf/AurisNexus_Letterhead_Formal-Procurement_Blank-Stationery.pdf "$P/AurisNexus_Letterhead_Formal-Procurement.pdf"
cp "$TMP"/pdf/AurisNexus_Sample_*.pdf "$P/"
cp "$TMP"/docx/AurisNexus_Sample_*.docx "$S/"
echo "Published to $ROOT"
