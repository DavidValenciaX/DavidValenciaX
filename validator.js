import resumeSchema from '@jsonresume/schema';
import fs from 'fs';

const resumeData = JSON.parse(fs.readFileSync('resume_es.json', 'utf8'));
resumeSchema.validate(
  resumeData,
  function (err, report) {
    if (err) {
      console.error("The resume was invalid:", err);
      return;
    }
    console.log("Resume validated successfully:", report);
  },
  function (err) {
    console.error("The resume was invalid:", err);
  }
);