#!/usr/bin/env node
// Renders each locale's page with a real browser (so it goes through the
// same print stylesheet as `window.print()`) and saves it as a static PDF
// under public/, where Astro picks it up like any other static asset.
//
// Requires the dev server running (`astro dev --background`) and a local
// Chrome/Chromium install. Run whenever CV content in `cv.ts` or `copy.ts`
// changes, then commit the regenerated PDF(s).

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const devServer = process.env.DEV_SERVER_URL ?? 'http://localhost:4321';
const locales = { ca: '/', en: '/en/', es: '/es/' };

const chromeCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].filter(Boolean);

const chrome = chromeCandidates.find((path) => existsSync(path));
if (!chrome) {
  console.error('No Chrome/Chromium install found. Set CHROME_PATH to override.');
  process.exit(1);
}

try {
  execFileSync('curl', ['-fsS', '-o', '/dev/null', devServer], { stdio: 'ignore' });
} catch {
  console.error(`Dev server not reachable at ${devServer}. Start it first: astro dev --background`);
  process.exit(1);
}

for (const [locale, path] of Object.entries(locales)) {
  const outDir = join(root, 'public', path);
  const outFile = join(outDir, 'cv.pdf');
  mkdirSync(outDir, { recursive: true });

  // A fresh profile dir per run keeps this from touching the user's real
  // Chrome profile (signed-in accounts, extensions). Each locale gets its
  // own, since reusing one across sequential launches makes Chrome wait on
  // its single-instance profile lock.
  const profileDir = mkdtempSync(join(tmpdir(), 'cv-pdf-chrome-'));

  const startedAt = Date.now();

  try {
    execFileSync(
      chrome,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        `--user-data-dir=${profileDir}`,
        '--no-first-run',
        // A brand-new profile otherwise makes Chrome phone home (component
        // update, Safe Browsing lists, GCM registration...) before it will
        // render anything, which can hang for minutes on a restricted network.
        '--disable-background-networking',
        '--disable-sync',
        '--disable-component-update',
        '--disable-default-apps',
        '--disable-client-side-phishing-detection',
        '--disable-domain-reliability',
        '--no-default-browser-check',
        '--metrics-recording-only',
        `--print-to-pdf=${outFile}`,
        '--no-pdf-header-footer',
        `${devServer}${path}`,
      ],
      { timeout: 30_000 },
    );
  } catch (err) {
    // print-to-pdf writes its output and then exits, but on some machines a
    // bundled Google Updater/Keystone helper keeps the Chrome process alive
    // past that point. Treat a fresh, non-empty file as success rather than
    // waiting on an exit that may never come.
    const wroteFreshFile = existsSync(outFile) && statSync(outFile).mtimeMs >= startedAt;
    if (!wroteFreshFile) throw err;
  }

  console.log(`Wrote public${path}cv.pdf (${locale})`);
}
