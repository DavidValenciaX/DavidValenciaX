import { createRequire } from 'module';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const require = createRequire(import.meta.url);

const fileArg = process.argv.find(arg => arg.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');
const OUTPUT_DIR = path.join('.', 'html', 'professional');
const PROFESSIONAL_THEME_PATH = './professional-theme.cjs';

try {
  console.log(`📖 Leyendo ${RESUME_FILE_PATH}...`);
  const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));
  const professionalTheme = require(PROFESSIONAL_THEME_PATH);

  if (typeof professionalTheme.render !== 'function') {
    throw new Error('Professional theme bundle does not expose a render function');
  }

  const baseName = path.basename(RESUME_FILE_PATH, '.json');
  const suffix = baseName.endsWith('_en') ? '_en' : (baseName.endsWith('_es') ? '_es' : '');
  const resumeFileName = `${resumeData.basics.name.replace(/\s+/g, '_')}_CV${suffix}.html`;
  const outputFilePath = path.join(OUTPUT_DIR, resumeFileName);

  console.log('🎨 Renderizando tema Professional...');
  const htmlOutput = professionalTheme.render(resumeData);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`💾 Generando archivo HTML (${outputFilePath})...`);
  writeFileSync(outputFilePath, htmlOutput, 'utf-8');

  console.log('✅ ¡HTML Professional generado exitosamente!');
  console.log(`📂 Archivo generado: ${outputFilePath}`);
} catch (error) {
  console.error('❌ Error al generar el HTML Professional:', error);
  process.exit(1);
}
