#!/usr/bin/env node
// Renders the company profile to PDF and runs layout QA.
// Usage: node tools/build-profile.cjs [--qa] [--shots <dir>]
const path = require('path');
const fs = require('fs');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(path.join(process.execPath, '../../lib/node_modules/playwright'))); }

const root = path.resolve(__dirname, '..');
const src = path.join(root, '10_Output', 'Auris-Nexus-Company-Profile.html');
const pdfOut = path.join(root, '09_PDF', 'Auris-Nexus-Technologies-Company-Profile-2026.pdf');
const args = process.argv.slice(2);
const qa = args.includes('--qa');
const shotsDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
const launchOpts = fs.existsSync('/opt/pw-browsers/chromium') && !process.env.PLAYWRIGHT_BROWSERS_PATH
  ? { executablePath: '/opt/pw-browsers/chromium' } : {};

(async () => {
  const browser = await chromium.launch(launchOpts);
  const problems = [];
  const url = 'file://' + src;

  // ---- PDF ----
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  page.on('console', m => { if (m.type() === 'error') problems.push('console: ' + m.text()); });
  page.on('pageerror', e => problems.push('pageerror: ' + e.message));
  page.on('requestfailed', r => problems.push('requestfailed: ' + r.url()));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(() => document.fonts.ready);
  const fontsOk = await page.evaluate(() => ['Saira', 'Source Sans 3'].map(f => [f, document.fonts.check(`16px "${f}"`)]));
  fontsOk.forEach(([f, ok]) => { if (!ok) problems.push('font not loaded: ' + f); });
  const overflow = await page.evaluate(() => [...document.querySelectorAll('.page')].map((el, i) => {
    const content = el.querySelector('.content') || el;
    const over = el.scrollHeight - el.clientHeight;
    const cOver = content.scrollHeight - content.clientHeight;
    return { page: i + 1, over, cOver };
  }).filter(p => p.over > 1 || p.cOver > 1));
  overflow.forEach(o => problems.push(`print page ${o.page} overflows by ${Math.max(o.over, o.cOver)}px`));
  const brokenImgs = await page.evaluate(() => [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src));
  brokenImgs.forEach(s => problems.push('broken image: ' + s));
  fs.mkdirSync(path.dirname(pdfOut), { recursive: true });
  await page.pdf({ path: pdfOut, format: 'A4', printBackground: true, preferCSSPageSize: true });
  if (shotsDir) {
    fs.mkdirSync(shotsDir, { recursive: true });
    const pages = await page.$$('.page');
    for (let i = 0; i < pages.length; i++) await pages[i].screenshot({ path: path.join(shotsDir, `print-${String(i + 1).padStart(2, '0')}.png`) });
  }
  const pageCount = await page.evaluate(() => document.querySelectorAll('.page').length);
  await page.close();
  console.log(`PDF written: ${path.relative(root, pdfOut)} (${pageCount} pages)`);

  // ---- Responsive QA ----
  if (qa) {
    const widths = [320, 360, 375, 390, 412, 430, 768, 820, 1024, 1280, 1440, 1920];
    for (const w of widths) {
      const p = await browser.newPage({ viewport: { width: w, height: 900 } });
      await p.goto(url, { waitUntil: 'networkidle' });
      await p.evaluate(() => document.fonts.ready);
      const r = await p.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const docW = document.documentElement.scrollWidth;
        const offenders = [];
        document.querySelectorAll('.page *').forEach(el => {
          const b = el.getBoundingClientRect();
          if (b.width && (b.right > vw + 1 || b.left < -1) && getComputedStyle(el).position !== 'absolute')
            offenders.push(`${el.tagName.toLowerCase()}.${el.className}`.slice(0, 60) + ` [${Math.round(b.left)}..${Math.round(b.right)}]`);
        });
        const clipped = [...document.querySelectorAll('.page')].filter(el => getComputedStyle(el).overflow === 'hidden' && el.scrollHeight > el.clientHeight + 1).length;
        const tiny = [...document.querySelectorAll('p,li,dd,dt,td,th,span,h3,h4')].filter(el => el.offsetParent && el.textContent.trim() && parseFloat(getComputedStyle(el).fontSize) < 9).length;
        return { vw, docW, offenders: [...new Set(offenders)].slice(0, 8), clipped, tiny };
      });
      const ok = r.docW <= r.vw && r.offenders.length === 0 && r.clipped === 0;
      console.log(`${w}px: ${ok ? 'OK' : 'FAIL'} scrollWidth=${r.docW} clippedPages=${r.clipped} textUnder9px=${r.tiny}${r.offenders.length ? ' offenders=' + r.offenders.join(' | ') : ''}`);
      if (!ok) problems.push(`responsive failure at ${w}px`);
      if (shotsDir && [375, 768, 1440].includes(w)) await p.screenshot({ path: path.join(shotsDir, `screen-${w}.png`), fullPage: true });
      await p.close();
    }
  }
  await browser.close();
  if (problems.length) { console.error('PROBLEMS:\n- ' + [...new Set(problems)].join('\n- ')); process.exit(1); }
  console.log('QA: no problems found');
})();
