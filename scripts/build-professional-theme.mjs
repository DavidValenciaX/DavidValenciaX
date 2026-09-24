import { transform } from 'esbuild';
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

// Generated HTML lives in html/professional/, so "../../fonts/..." reaches fonts/.
const patchFontPaths = (content) => content
    .replace(/"\/fonts\//g, '"../../fonts/')
    .replace(/"fonts\//g, '"../../fonts/')
    .replace(/lmsans10-regular\.otf/g, 'lmroman10-regular.otf')
    .replace(/lmsans10-bold\.otf/g, 'lmroman10-bold.otf')
    .replace(/lmsans10-italic\.otf/g, 'lmroman10-italic.otf');

// Compile each theme file separately. Node resolves the installed dependencies at
// runtime, so generation does not depend on esbuild traversing parent directories.
const buildTheme = async () => {
  const runtimeDir = path.resolve('build', 'professional-theme-runtime');
  const sourceDir = path.dirname(path.resolve(entry));

  const compileDirectory = async (source, destination) => {
    fs.mkdirSync(destination, { recursive: true });

    for (const item of fs.readdirSync(source, { withFileTypes: true })) {
      const sourcePath = path.join(source, item.name);
      const destinationPath = path.join(destination, item.name);

      if (item.isDirectory()) {
        await compileDirectory(sourcePath, destinationPath);
      } else if (item.isFile() && item.name.endsWith('.js')) {
        const content = patchFontPaths(fs.readFileSync(sourcePath, 'utf-8'));
        const result = await transform(content, {
          loader: 'jsx',
          format: 'cjs',
          target: 'node18',
          jsx: 'automatic',
          jsxImportSource: 'react'
        });
        fs.writeFileSync(destinationPath, result.code, 'utf-8');
      }
    }
  };

  await compileDirectory(sourceDir, runtimeDir);
  fs.writeFileSync(path.join(runtimeDir, 'package.json'), '{"type":"commonjs"}\n');

  const runtimeEntry = path.join(runtimeDir, 'index.js');
  const requirePath = path.relative(path.dirname(path.resolve(outFile)), runtimeEntry).replace(/\\/g, '/');
  fs.writeFileSync(outFile, `module.exports = require(${JSON.stringify(requirePath)});\n`, 'utf-8');
};

await buildTheme();

console.log(`Built professional theme to ${outFile}`);
