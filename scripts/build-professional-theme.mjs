import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

// Find theme entry, preferring scoped, then unscoped
const candidateScoped = 'node_modules/@jsonresume/jsonresume-theme-professional/src/index.js';
const candidateUnscoped = 'node_modules/jsonresume-theme-professional/src/index.js';
const defaultEntry = fs.existsSync(candidateScoped) ? candidateScoped : candidateUnscoped;

const entry = process.env.npm_config_entry || defaultEntry;
const outFile = process.env.npm_config_outfile || 'scripts/professional-theme.cjs';

if (!fs.existsSync(entry)) {
  console.error('Cannot find professional theme entry. Ensure it is installed.');
  process.exit(1);
}

const outDir = path.dirname(outFile);
fs.mkdirSync(outDir, { recursive: true });

await build({
  entryPoints: [entry],
  outfile: outFile,
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: ['node18'],
  loader: { '.js': 'jsx' },
  jsx: 'automatic',
  jsxImportSource: 'react'
});

// Patch the bundled file to resolve fonts from the repo-level fonts/ folder.
// Generated HTML lives in html/, so "../fonts/..." points to the right place.
try {
  let content = fs.readFileSync(outFile, 'utf-8');
  content = content
    .replace(/"\/fonts\//g, '"../fonts/')
    .replace(/"fonts\//g, '"../fonts/')
    .replace(/lmsans10-regular\.otf/g, 'lmroman10-regular.otf')
    .replace(/lmsans10-bold\.otf/g, 'lmroman10-bold.otf')
    .replace(/lmsans10-italic\.otf/g, 'lmroman10-italic.otf');
  fs.writeFileSync(outFile, content, 'utf-8');
  console.log('Successfully patched professional theme font paths.');
} catch (error) {
  console.error('Error patching font paths:', error);
}

console.log(`Built professional theme to ${outFile}`);