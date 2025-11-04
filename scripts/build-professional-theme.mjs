import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

// Find theme entry, preferring scoped, then unscoped
const candidateScoped = 'node_modules/@jsonresume/jsonresume-theme-professional/src/index.js';
const candidateUnscoped = 'node_modules/jsonresume-theme-professional/src/index.js';
const defaultEntry = fs.existsSync(candidateScoped) ? candidateScoped : candidateUnscoped;

const entry = process.env.npm_config_entry || defaultEntry;
const outFile = process.env.npm_config_outfile || 'build/jsonresume-theme-professional/index.cjs';

if (!fs.existsSync(entry)) {
  console.error('Cannot find professional theme entry. Ensure it is installed.');
  process.exit(1);
}

const outDir = path.dirname(outFile);
fs.mkdirSync(outDir, { recursive: true });

// Copy fonts from the theme's assets to the build directory
const copyFonts = () => {
  // The theme's assets/fonts directory is relative to its src/index.js entry point
  const sourceFontsDir = path.resolve(path.dirname(entry), '../assets/fonts');
  const destFontsDir = path.join(outDir, 'fonts');

  if (fs.existsSync(sourceFontsDir)) {
    if (!fs.existsSync(destFontsDir)) {
      fs.mkdirSync(destFontsDir, { recursive: true });
    }
    fs.readdirSync(sourceFontsDir).forEach(file => {
      const srcFile = path.join(sourceFontsDir, file);
      const destFile = path.join(destFontsDir, file);
      fs.copyFileSync(srcFile, destFile);
    });
    console.log('Successfully copied fonts.');
  } else {
    console.warn(`Fonts directory not found in theme package. Looked in: ${sourceFontsDir}`);
  }
};

copyFonts();

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

// Patch the bundled file to use relative font paths
try {
  let content = fs.readFileSync(outFile, 'utf-8');
  // This regex replaces absolute font paths like "/fonts/..." with relative ones "fonts/..."
  content = content.replace(/"\/fonts\//g, '"fonts/');
  fs.writeFileSync(outFile, content, 'utf-8');
  console.log('Successfully patched font paths in the theme.');
} catch (error) {
  console.error('Error patching font paths:', error);
}

console.log(`Built professional theme to ${outFile}`);