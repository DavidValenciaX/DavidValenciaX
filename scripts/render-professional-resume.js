import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const professionalTheme = require('./professional-theme.cjs');
const dateFields = new Set(['startDate', 'endDate', 'date', 'releaseDate']);

const normalizeMonthDates = (value) => {
  if (Array.isArray(value)) {
    return value.map(normalizeMonthDates);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => {
      if (dateFields.has(key) && typeof item === 'string' && /^\d{4}-\d{2}$/.test(item)) {
        // The theme uses local time; a mid-month date prevents a UTC offset from
        // showing the previous month.
        return [key, `${item}-15`];
      }
      return [key, normalizeMonthDates(item)];
    }));
  }

  return value;
};

const printStyles = `<style>
  @media print {
    h2, h2 + hr { break-after: avoid; page-break-after: avoid; }
    h2 + hr + div > div { break-inside: avoid; page-break-inside: avoid; }
  }
</style>`;

export const renderProfessionalResume = (resumeData) => {
  if (typeof professionalTheme.render !== 'function') {
    throw new Error('Professional theme bundle does not expose a render function');
  }

  const html = professionalTheme.render(normalizeMonthDates(resumeData));
  if (!html.includes('</head>')) {
    throw new Error('Professional theme output is missing the document head');
  }
  return html.replace('</head>', `${printStyles}</head>`);
};
