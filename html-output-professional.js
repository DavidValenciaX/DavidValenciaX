import theme from 'jsonresume-theme-professional';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

// Obtener archivo desde argumento CLI o variable de entorno
const fileArg = process.argv.find(a => a.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');

// Determinar nombre de salida según el archivo de entrada
const baseName = path.basename(RESUME_FILE_PATH, '.json');
const suffix = baseName.endsWith('_en') ? '_en' : (baseName.endsWith('_es') ? '_es' : '');
const OUTPUT_FILE_PATH = `./resume${suffix || ''}_professional.html`;

try {
  console.log(`📖 Leyendo ${RESUME_FILE_PATH}...`);
  const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

  console.log('🎨 Renderizando tema professional (@jsonresume)...');
  const htmlOutput = theme.render(resumeData);

  console.log(`💾 Generando archivo HTML (${OUTPUT_FILE_PATH})...`);
  writeFileSync(OUTPUT_FILE_PATH, htmlOutput, 'utf-8');

  console.log('✅ ¡Tema professional generado exitosamente!');
  console.log(`📂 Archivo generado: ${OUTPUT_FILE_PATH}`);
  console.log('🌐 Abre el archivo en tu navegador para ver el resultado');

} catch (error) {
  console.error('❌ Error al generar el tema professional:', error.message);
  process.exit(1);
}