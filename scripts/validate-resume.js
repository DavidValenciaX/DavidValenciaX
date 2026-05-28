import resumeSchema from '@jsonresume/schema';
import fs from 'fs';

const fileArg = process.argv.find(arg => arg.startsWith('--file='));
const ENV_FILE = process.env.RESUME_FILE;
const RESUME_FILE_PATH = fileArg ? fileArg.split('=')[1] : (ENV_FILE || './resume_es.json');

const resumeData = JSON.parse(fs.readFileSync(RESUME_FILE_PATH, 'utf8'));

resumeSchema.validate(
  resumeData,
  (err, report) => {
    if (err) {
      console.error(`The resume was invalid (${RESUME_FILE_PATH}):`, err);
      process.exitCode = 1;
      return;
    }

    console.log(`Resume validated successfully (${RESUME_FILE_PATH}):`, report);
  },
  err => {
    console.error(`The resume was invalid (${RESUME_FILE_PATH}):`, err);
    process.exitCode = 1;
  }
);
