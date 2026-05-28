import { mkdirSync, readFileSync } from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { render } from 'jsonresume-theme-stackoverflow';

const fileArg = process.argv.find(arg => arg.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');
const OUTPUT_DIR = './pdf';

const generatePdf = async () => {
  try {
    console.log(`📖 Leyendo ${RESUME_FILE_PATH}...`);
    const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

    const baseName = path.basename(RESUME_FILE_PATH, '.json');
    const suffix = baseName.endsWith('_en') ? '_en' : (baseName.endsWith('_es') ? '_es' : '');
    const language = suffix === '_es' ? 'es' : 'en';
    const pdfFileName = `${resumeData.basics.name.replace(/ /g, '_')}_CV${suffix}_stackoverflow.pdf`;
    const pdfOutputPath = path.resolve(process.cwd(), OUTPUT_DIR, pdfFileName);

    mkdirSync(OUTPUT_DIR, { recursive: true });

    console.log('🎨 Renderizando tema Stack Overflow...');
    const htmlContent = render(resumeData, { language });

    console.log('🚀 Iniciando Puppeteer...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 816,
      height: 1056,
      deviceScaleFactor: 1
    });

    console.log('📄 Estableciendo contenido HTML...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    console.log('🖨️  Emulando media para impresión...');
    await page.emulateMediaType('print');

    console.log('📄 Generando PDF Stack Overflow...');
    await page.pdf({
      path: pdfOutputPath,
      format: 'Letter',
      printBackground: true,
      displayHeaderFooter: false,
      margin: {
        top: '0.8cm',
        right: '0.8cm',
        bottom: '0.8cm',
        left: '0.8cm'
      }
    });

    console.log('✅ ¡PDF Stack Overflow generado exitosamente!');
    console.log(`📂 Archivo generado en: ${pdfOutputPath}`);

    await browser.close();
  } catch (error) {
    console.error('❌ Error al generar el PDF Stack Overflow:', error);
    process.exit(1);
  }
};

generatePdf();
