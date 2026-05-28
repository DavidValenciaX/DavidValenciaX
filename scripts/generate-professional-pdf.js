import { createRequire } from 'module';
import { mkdirSync, readFileSync } from 'fs';
import puppeteer from 'puppeteer';
import path from 'path';
import { pathToFileURL } from 'url';

const require = createRequire(import.meta.url);

const fileArg = process.argv.find(arg => arg.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');
const OUTPUT_DIR = './pdf';
const PROFESSIONAL_THEME_PATH = './professional-theme.cjs';

const generatePdf = async () => {
  try {
    console.log(`📖 Leyendo ${RESUME_FILE_PATH}...`);
    const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));
    const professionalTheme = require(PROFESSIONAL_THEME_PATH);

    if (typeof professionalTheme.render !== 'function') {
      throw new Error('Professional theme bundle does not expose a render function');
    }

    const baseName = path.basename(RESUME_FILE_PATH, '.json');
    const suffix = baseName.endsWith('_en') ? '_en' : (baseName.endsWith('_es') ? '_es' : '');
    const pdfFileName = `${resumeData.basics.name.replace(/ /g, '_')}_CV${suffix}_professional.pdf`;
    const pdfOutputPath = path.resolve(process.cwd(), OUTPUT_DIR, pdfFileName);

    mkdirSync(OUTPUT_DIR, { recursive: true });

    console.log('🎨 Renderizando tema Professional...');
    const htmlBaseUrl = pathToFileURL(path.resolve(process.cwd(), 'html') + path.sep).href;
    const htmlContent = professionalTheme
      .render(resumeData)
      .replace('<head>', `<head><base href="${htmlBaseUrl}">`);

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
    await page.evaluateHandle('document.fonts.ready');

    console.log('🖨️  Emulando media para impresión...');
    await page.emulateMediaType('print');

    console.log('📄 Generando PDF Professional...');
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

    console.log('✅ ¡PDF Professional generado exitosamente!');
    console.log(`📂 Archivo generado en: ${pdfOutputPath}`);

    await browser.close();
  } catch (error) {
    console.error('❌ Error al generar el PDF Professional:', error);
    process.exit(1);
  }
};

generatePdf();
