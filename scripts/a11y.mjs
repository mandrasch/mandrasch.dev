import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { AxeBuilder } from '@axe-core/playwright';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/ueber-mich',
  '/projekte',
  '/schreiben',
  '/lesen',
  '/green-coding',
  '/klimagerechtigkeit',
  '/absurditaet-des-lebens',
  '/blog',
];

const IMPACT_THRESHOLD = ['serious', 'critical'];

if (!existsSync(join(root, 'dist'))) {
  console.error('No dist/ found. Run `npm run build` before `npm run a11y`.');
  process.exit(1);
}

function startServer() {
  const bin = join(root, 'node_modules', '.bin', 'astro');
  return spawn(bin, ['preview', '--port', String(PORT)], {
    cwd: root,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Server did not start at ${url}`);
}

async function main() {
  const server = startServer();

  try {
    await waitForServer(`${BASE}/`);

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    let failed = false;
    let violationCount = 0;

    for (const route of ROUTES) {
      for (const mode of ['light', 'dark']) {
        await page.goto(`${BASE}${route}`, { waitUntil: 'load' });
        await page.addStyleTag({
          content: '*, *::before, *::after { transition: none !important; }',
        });
        await page.evaluate((dark) => {
          document.documentElement.classList.toggle('dark', dark);
        }, mode === 'dark');
        await page.waitForTimeout(100);

        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();

        const violations = results.violations.filter((v) =>
          IMPACT_THRESHOLD.includes(v.impact)
        );

        if (violations.length > 0) {
          failed = true;
          for (const violation of violations) {
            violationCount += 1;
            console.log(`\n[${mode}] ${route} — ${violation.impact} — ${violation.id}: ${violation.help}`);
            for (const node of violation.nodes) {
              console.log(`    ${node.target.join(' ')}`);
              console.log(`    ${(node.failureSummary ?? '').split('\n')[0]}`);
            }
          }
        } else {
          console.log(`[${mode}] ${route} — OK`);
        }
      }
    }

    await browser.close();

    if (failed) {
      console.error(`\nAccessibility check FAILED with ${violationCount} violation(s).`);
      process.exitCode = 1;
    } else {
      console.log('\nAccessibility check passed.');
    }
  } finally {
    server.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
