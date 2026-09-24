import { render } from 'jsonresume-theme-stackoverflow';

const dateFields = new Set(['startDate', 'endDate', 'date', 'releaseDate']);

const normalizeMonthDates = (value) => {
  if (Array.isArray(value)) return value.map(normalizeMonthDates);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => {
      if (dateFields.has(key) && typeof item === 'string' && /^\d{4}-\d{2}$/.test(item)) {
        return [key, `${item}-15`];
      }
      return [key, normalizeMonthDates(item)];
    }));
  }
  return value;
};

const printStyles = `<style>
  @media print {
    section.section:has(> #projects) > header { break-after: avoid; page-break-after: avoid; }
    #projects > .timeline-item { break-inside: avoid; page-break-inside: avoid; }
  }
</style>`;

export const renderStackOverflowResume = (resumeData, language) => {
  const html = render(normalizeMonthDates(resumeData), { language });
  if (!html.includes('</head>')) throw new Error('Stack Overflow theme output is missing the document head');
  return html.replace('</head>', `${printStyles}</head>`);
};
