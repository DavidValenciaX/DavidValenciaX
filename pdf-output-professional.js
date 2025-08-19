import { render } from './professional-theme.js';
import { readFileSync } from 'fs';
import puppeteer from 'puppeteer';
import path from 'path';

const RESUME_FILE_PATH = './resume.json';

const readFontAsBase64 = (filePath) => {
  try {
    return readFileSync(filePath, 'base64');
  } catch (error) {
    console.warn(`⚠️  Advertencia: No se pudo encontrar el archivo de fuente en ${filePath}. La fuente no será incrustada.`);
    return null;
  }
};

const generatePdf = async () => {
  try {
    console.log('📖 Leyendo resume.json para CV profesional...');
    const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

    const pdfFileName = `${resumeData.basics.name.replace(/ /g, '_')}_CV_professional.pdf`;
    const pdfOutputPath = path.resolve(process.cwd(), pdfFileName);

    console.log('🎨 Renderizando tema profesional...');
    
    // Leer fuentes y codificarlas en Base64
    const fonts = {
      regularWoff2: readFontAsBase64('./fonts/latin-modern-regular.woff2'),
      regularOtf: readFontAsBase64('./fonts/lmroman10-regular.otf'),
      boldOtf: readFontAsBase64('./fonts/lmroman10-bold.otf')
    };

    const htmlContent = render(resumeData, fonts);

    console.log('🚀 Iniciando Puppeteer para CV profesional...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    console.log('📄 Estableciendo contenido HTML profesional...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    console.log('📄 Generando PDF profesional...');
    await page.pdf({
      path: pdfOutputPath,
      format: 'Letter',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });

    console.log('✅ ¡PDF profesional generado exitosamente!');
    console.log(`📂 Archivo generado en: ${pdfOutputPath}`);

    await browser.close();
  } catch (error) {
    console.error('❌ Error al generar el PDF profesional:', error);
    process.exit(1);
  }
};

generatePdf();
