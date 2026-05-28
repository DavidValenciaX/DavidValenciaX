import { render } from '../index.js';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const fileArg = process.argv.find(arg => arg.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');
const OUTPUT_DIR = './html';

const baseName = path.basename(RESUME_FILE_PATH, '.json');
const suffix = baseName.endsWith('_en') ? '_en' : (baseName.endsWith('_es') ? '_es' : '');
const outputFilePath = path.join(OUTPUT_DIR, `resume${suffix || ''}.html`);

try {
  console.log(`📖 Leyendo ${RESUME_FILE_PATH}...`);
  const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

  console.log('🎨 Renderizando tema propio...');
  const htmlOutput = render(resumeData);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`💾 Generando archivo HTML (${outputFilePath})...`);
  writeFileSync(outputFilePath, htmlOutput, 'utf-8');

  console.log('✅ ¡HTML generado exitosamente!');
  console.log(`📂 Archivo generado: ${outputFilePath}`);
} catch (error) {
  console.error('❌ Error al generar el HTML:', error.message);
  process.exit(1);
}
