import { render } from './index.js';
import { readFileSync, writeFileSync } from 'fs';

// Constantes para archivos
const RESUME_FILE_PATH = './resume.json';
const OUTPUT_FILE_PATH = './output.html';

try {
  // Leer el archivo resume.json
  console.log('📖 Leyendo resume.json...');
  const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));
  
  // Renderizar el tema
  console.log('🎨 Renderizando tema...');
  const htmlOutput = render(resumeData);
  
  // Escribir el archivo de salida
  console.log('💾 Generando archivo HTML...');
  writeFileSync(OUTPUT_FILE_PATH, htmlOutput, 'utf-8');
  
  console.log('✅ ¡Tema generado exitosamente!');
  console.log(`📂 Archivo generado: ${OUTPUT_FILE_PATH}`);
  console.log('🌐 Abre el archivo en tu navegador para ver el resultado');
  
} catch (error) {
  console.error('❌ Error al generar el tema:', error.message);
  process.exit(1);
} 