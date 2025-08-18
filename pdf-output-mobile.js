import { render } from './index.js';
import { readFileSync } from 'fs';
import puppeteer from 'puppeteer';
import path from 'path';

const RESUME_FILE_PATH = './resume.json';

const generatePdf = async () => {
  try {
    console.log('📖 Leyendo resume.json...');
    const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

    const pdfFileName = `${resumeData.basics.name.replace(/ /g, '_')}_CV_mobile.pdf`;
    const pdfOutputPath = path.resolve(process.cwd(), pdfFileName);

    console.log('🎨 Renderizando tema...');
    const htmlContent = render(resumeData);

    console.log('🚀 Iniciando Puppeteer...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Configurar viewport para un dispositivo móvil para activar los estilos responsivos
    await page.setViewport({
      width: 500, // Ancho para activar estilos responsivos
      height: 800, // Altura inicial, se ajustará al contenido
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 2 // Simula un DPI alto de móvil
    });

    console.log('📄 Estableciendo contenido HTML...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // No emulamos 'print' para usar los estilos responsivos del media query `@media (max-width: 600px)`

    console.log('📄 Generando PDF para móvil...');
    await page.pdf({
      path: pdfOutputPath,
      width: '500px', // Ancho del PDF
      printBackground: true,
      displayHeaderFooter: false,
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm'
      }
    });

    console.log('✅ ¡PDF para móvil generado exitosamente!');
    console.log(`📂 Archivo generado en: ${pdfOutputPath}`);

    await browser.close();
  } catch (error) {
    console.error('❌ Error al generar el PDF para móvil:', error);
    process.exit(1);
  }
};

generatePdf();
