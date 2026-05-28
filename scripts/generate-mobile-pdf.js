import { render } from '../index.js';
import { mkdirSync, readFileSync } from 'fs';
import puppeteer from 'puppeteer';
import path from 'path';

const fileArg = process.argv.find(arg => arg.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');
const OUTPUT_DIR = './pdf_mobile';

const generatePdf = async () => {
  try {
    console.log(`📖 Leyendo ${RESUME_FILE_PATH}...`);
    const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

    const baseName = path.basename(RESUME_FILE_PATH, '.json');
    const suffix = baseName.endsWith('_en') ? '_en' : (baseName.endsWith('_es') ? '_es' : '');
    const pdfFileName = `${resumeData.basics.name.replace(/ /g, '_')}_CV_mobile${suffix}.pdf`;
    const pdfOutputPath = path.resolve(process.cwd(), OUTPUT_DIR, pdfFileName);

    mkdirSync(OUTPUT_DIR, { recursive: true });

    console.log('🎨 Renderizando tema propio...');
    const htmlContent = render(resumeData);

    console.log('🚀 Iniciando Puppeteer...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 500,
      height: 800,
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 2
    });

    console.log('📄 Estableciendo contenido HTML...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    console.log('📄 Generando PDF para móvil...');
    await page.pdf({
      path: pdfOutputPath,
      width: '500px',
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
