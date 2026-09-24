import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import puppeteer from 'puppeteer';
import path from 'path';
import { pathToFileURL } from 'url';
import { renderProfessionalResume } from './render-professional-resume.js';

const fileArg = process.argv.find(arg => arg.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');
const OUTPUT_DIR = path.join('.', 'pdf', 'professional');
const HTML_OUTPUT_DIR = path.join('.', 'html', 'professional');

const generatePdf = async () => {
  try {
    console.log(`📖 Leyendo ${RESUME_FILE_PATH}...`);
    const resumeData = JSON.parse(readFileSync(RESUME_FILE_PATH, 'utf-8'));

    const baseName = path.basename(RESUME_FILE_PATH, '.json');
    const suffix = baseName.endsWith('_en') ? '_en' : (baseName.endsWith('_es') ? '_es' : '');
    const resumeFileBase = `${resumeData.basics.name.replace(/\s+/g, '_')}_CV${suffix}`;
    const htmlFileName = `${resumeFileBase}.html`;
    const pdfFileName = `${resumeFileBase}.pdf`;
    const htmlOutputPath = path.resolve(process.cwd(), HTML_OUTPUT_DIR, htmlFileName);
    const pdfOutputPath = path.resolve(process.cwd(), OUTPUT_DIR, pdfFileName);

    mkdirSync(HTML_OUTPUT_DIR, { recursive: true });
    mkdirSync(OUTPUT_DIR, { recursive: true });

    console.log('🎨 Renderizando tema Professional...');
    const htmlContent = renderProfessionalResume(resumeData);
    writeFileSync(htmlOutputPath, htmlContent, 'utf-8');

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

    console.log('📄 Abriendo HTML Professional generado...');
    await page.goto(pathToFileURL(htmlOutputPath).href, { waitUntil: 'networkidle0' });

    console.log('🖨️  Emulando media para impresión...');
    await page.emulateMediaType('print');
    await page.evaluate(async () => {
      await document.fonts.ready;

      if (!document.fonts.check('12px LatinModern')) {
        throw new Error('LatinModern font was not loaded before PDF generation');
      }
    });

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
