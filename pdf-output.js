import { render } from './index.js';
import { readFileSync } from 'fs';
import puppeteer from 'puppeteer';
import path from 'path';

const RESUME_FILE_PATH = './resume.json';

const generatePdf = async () => {
  try {
    console.log('📖 Leyendo resume.json...');
    const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

    const pdfFileName = `${resumeData.basics.name.replace(/ /g, '_')}_CV.pdf`;
    const pdfOutputPath = path.resolve(process.cwd(), pdfFileName);

    console.log('🎨 Renderizando tema...');
    const htmlContent = render(resumeData);

    console.log('🚀 Iniciando Puppeteer...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Configurar viewport para optimizar el renderizado
    await page.setViewport({
      width: 816,  // Ancho Letter en píxeles (8.5in a 96 DPI)
      height: 1056, // Alto Letter en píxeles (11in a 96 DPI)
      deviceScaleFactor: 1
    });

    console.log('📄 Estableciendo contenido HTML...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    console.log('🖨️  Emulando media para impresión...');
    await page.emulateMediaType('print');

    console.log('📄 Generando PDF...');
    await page.pdf({
      path: pdfOutputPath,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      },
      scale: 1 // Escala ajustada para reflejar tamaño real en Letter
    });

    console.log('✅ ¡PDF generado exitosamente!');
    console.log(`📂 Archivo generado en: ${pdfOutputPath}`);

    await browser.close();
  } catch (error) {
    console.error('❌ Error al generar el PDF:', error);
    process.exit(1);
  }
};

generatePdf(); 