#!/usr/bin/env bash
# Build all letterhead documents, embed fonts, derive .dotx, export PDFs.
#   ./render.sh <outDir>
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="${1:-$HERE/build}"
mkdir -p "$OUT/docx" "$OUT/pdf" "$OUT/dotx"
NODE_PATH="${NODE_PATH:-$(npm root -g)}" node "$HERE/build_letterhead.js" "$OUT/docx"
python3 "$HERE/embed_fonts.py" "$OUT"/docx/*.docx
# PDF/A-2b, tagged, fonts embedded, lossless images: suitable for email, portals and archive.
FILTER='pdf:writer_pdf_Export:{"SelectPdfVersion":{"type":"long","value":"2"},"UseTaggedPDF":{"type":"boolean","value":"true"},"UseLosslessCompression":{"type":"boolean","value":"true"},"ExportBookmarks":{"type":"boolean","value":"true"}}'
soffice --headless --convert-to "$FILTER" --outdir "$OUT/pdf" "$OUT"/docx/*.docx >/dev/null 2>&1
