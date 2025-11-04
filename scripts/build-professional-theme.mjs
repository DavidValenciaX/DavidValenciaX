import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const candidateScoped = path.resolve(__dirname, '../node_modules/@jsonresume/jsonresume-theme-professional/src/index.js');
const candidateUnscoped = path.resolve(__dirname, '../node_modules/jsonresume-theme-professional/src/index.js');
const entry = fs.existsSync(candidateScoped) ? candidateScoped : candidateUnscoped;

if (!fs.existsSync(entry)) {
  console.error('Cannot find professional theme entry. Ensure it is installed.');
  process.exit(1);
}

const outDir = path.resolve(__dirname, '../build/jsonresume-theme-professional');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'index.cjs');

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

console.log(`Built professional theme to ${outFile}`);