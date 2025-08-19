// Constantes de estilo para ATS
const COLORS = {
  TEXT: '#000000',
  BACKGROUND: '#ffffff',
};

const FONTS = {
  PRIMARY: '"LatinModern", "Courier New", monospace',
};

const SPACING = {
  SMALL: '0.25rem',
  MEDIUM: '0.5rem',
  LARGE: '1rem',
};

// Estilos CSS inline para ATS
const getCssStyles = (fonts) => `
  <style>
    /* Declaraciones de fuentes LatinModern */
    ${fonts.regularWoff2 ? `
    @font-face {
      font-family: 'LatinModern';
      src: url(data:font/woff2;base64,${fonts.regularWoff2}) format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }` : ''}

    ${fonts.boldOtf ? `
    @font-face {
      font-family: 'LatinModern';
      src: url(data:font/otf;base64,${fonts.boldOtf}) format('opentype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }` : ''}

    /* Fallback para navegadores que no soporten WOFF2 */
    ${fonts.regularOtf ? `
    @font-face {
      font-family: 'LatinModern';
      src: url(data:font/otf;base64,${fonts.regularOtf}) format('opentype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }` : ''}
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${FONTS.PRIMARY};
      color: ${COLORS.TEXT};
      background-color: ${COLORS.BACKGROUND};
    }
    
    body {
      line-height: 1.4;
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.5in;
      font-size: 11pt;
    }
    
    h1 { font-size: 22pt; margin-bottom: ${SPACING.MEDIUM}; }
    h2 { font-size: 16pt; margin-top: ${SPACING.LARGE}; margin-bottom: ${SPACING.MEDIUM}; border-bottom: 1px solid ${COLORS.TEXT}; padding-bottom: ${SPACING.SMALL}; }
    h3 { font-size: 12pt; font-weight: bold; margin-bottom: ${SPACING.SMALL}; }
    p { margin-bottom: ${SPACING.MEDIUM}; }
    ul { padding-left: ${SPACING.LARGE}; margin-bottom: ${SPACING.MEDIUM}; }
    li { margin-bottom: ${SPACING.SMALL}; }
    a { color: ${COLORS.TEXT}; text-decoration: none; }

    .header { text-align: center; margin-bottom: ${SPACING.LARGE}; }
    .contact-info { display: flex; justify-content: center; gap: ${SPACING.LARGE}; flex-wrap: wrap; margin-top: ${SPACING.MEDIUM}; }
    .contact-item { font-size: 10pt; }
    
    .section { margin-bottom: ${SPACING.MEDIUM}; }
    .item { margin-bottom: ${SPACING.MEDIUM}; }
    .item-title { font-size: 12pt; font-weight: bold; }
    .item-subtitle { font-style: italic; }
    .item-date { font-size: 10pt; color: #333; }
    
    .skills-grid { columns: 2; gap: ${SPACING.LARGE}; }
    .skill-category-name { font-weight: bold; margin-bottom: ${SPACING.SMALL}; }
    .summary { white-space: pre-wrap; text-align: justify; }
  </style>
`;

// Utilidades de formato (pueden ser las mismas)
const formatDate = (dateString) => {
  if (!dateString) return 'Presente';
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', timeZone: 'UTC' };
  return date.toLocaleDateString('es-ES', options);
};

const formatDateRange = (startDate, endDate) => {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const formatTextWithLineBreaks = (text) => {
    if (!text) return '';
    return text;
};

// Funciones de renderizado simplificadas
const renderHeader = (basics) => {
  if (!basics) return '';
  const { name, label, email, phone, location, profiles } = basics;

  const contactItems = [
    email && `<a href="mailto:${email}" class="contact-item">${email}</a>`,
    phone && `<span class="contact-item">${phone}</span>`,
    location && `<span class="contact-item">${location.city}, ${location.region}, ${location.countryCode}</span>`
  ].filter(Boolean).join(' | ');

  const profileLinks = profiles?.map(profile => 
    `<a href="${profile.url}" class="contact-item" target="_blank" rel="noopener noreferrer">${profile.url}</a>`
  ).join(' | ') || '';

  return `
    <header class="header">
      <h1>${name || ''}</h1>
      <p>${label || ''}</p>
      <div class="contact-info">
        ${contactItems}
        ${profileLinks ? ` | ${profileLinks}` : ''}
      </div>
    </header>
  `;
};

const renderSummary = (summary) => {
  if (!summary) return '';
  return `<section class="section summary"><p>${formatTextWithLineBreaks(summary)}</p></section>`;
};

const renderWork = (work) => {
    if (!work || work.length === 0) return '';
    const workItems = work.map(job => `
        <div class="item">
            <h3 class="item-title">${job.position || ''}</h3>
            <div class="item-subtitle">${job.name || ''} | ${job.location || ''}</div>
            <div class="item-date">${formatDateRange(job.startDate, job.endDate)}</div>
            ${job.description ? `<p>${formatTextWithLineBreaks(job.description)}</p>` : ''}
            ${job.highlights && job.highlights.length > 0 ? `
                <ul>
                    ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');
    return `<section class="section"><h2>Experiencia Laboral</h2>${workItems}</section>`;
};

const renderEducation = (education) => {
    if (!education || education.length === 0) return '';
    const educationItems = education.map(edu => `
        <div class="item">
            <h3 class="item-title">${edu.institution || ''}</h3>
            <div class="item-subtitle">${edu.studyType || ''} en ${edu.area || ''}</div>
            <div class="item-date">${formatDateRange(edu.startDate, edu.endDate)}</div>
        </div>
    `).join('');
    return `<section class="section"><h2>Educación</h2>${educationItems}</section>`;
};

const renderProjects = (projects) => {
    if (!projects || projects.length === 0) return '';
    const projectItems = projects.map(project => `
        <div class="item">
            <h3 class="item-title">${project.name || ''} ${project.url ? `| <a href="${project.url}">Link</a>` : ''}</h3>
            <p>${formatTextWithLineBreaks(project.description || '')}</p>
            ${project.highlights && project.highlights.length > 0 ? `
                <ul>
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');
    return `<section class="section"><h2>Proyectos</h2>${projectItems}</section>`;
};

const renderSkills = (skills) => {
    if (!skills || skills.length === 0) return '';
    const skillCategories = skills.map(skill => `
        <div class="skill-category">
            <p class="skill-category-name">${skill.name || ''}</p>
            <p>${skill.keywords?.join(', ') || ''}</p>
        </div>
    `).join('');
    return `<section class="section"><h2>Habilidades Técnicas</h2><div class="skills-grid">${skillCategories}</div></section>`;
};

const renderPublications = (publications) => {
    if (!publications || publications.length === 0) return '';
    const publicationItems = publications.map(pub => `
        <div class="item">
            <h3 class="item-title">${pub.name || ''} ${pub.url ? `| <a href="${pub.url}">Link</a>` : ''}</h3>
            <div class="item-subtitle">${pub.publisher || ''} | ${formatDate(pub.releaseDate)}</div>
            <p>${formatTextWithLineBreaks(pub.summary)}</p>
        </div>
    `).join('');
    return `<section class="section"><h2>Publicaciones</h2>${publicationItems}</section>`;
};

const renderCertificates = (certificates) => {
    if (!certificates || certificates.length === 0) return '';
    const certificateItems = certificates.map(cert => `
        <div class="item">
            <h3 class="item-title">${cert.name || ''}</h3>
            <div class="item-subtitle">${cert.issuer || ''} | ${formatDate(cert.date)}</div>
        </div>
    `).join('');
    return `<section class="section"><h2>Certificaciones</h2>${certificateItems}</section>`;
};

const renderLanguages = (languages) => {
    if (!languages || languages.length === 0) return '';
    const languageItems = languages.map(lang => `${lang.language || ''} (${lang.fluency || ''})`).join(' | ');
    return `<section class="section"><h2>Idiomas</h2><p>${languageItems}</p></section>`;
};

// Función principal de renderizado profesional
const render = (resume, fonts = {}) => {
    if (!resume) throw new Error('Resume data is required');
    const { basics, work, education, certificates, skills, projects, languages, publications } = resume;
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>${basics?.name || 'CV'} - ${basics?.label || ''}</title>
            ${getCssStyles(fonts)}
        </head>
        <body>
            ${renderHeader(basics)}
            ${renderSummary(basics?.summary)}
            ${renderWork(work)}
            ${renderEducation(education)}
            ${renderProjects(projects)}
            ${renderPublications(publications)}
            ${renderSkills(skills)}
            ${renderCertificates(certificates)}
            ${renderLanguages(languages)}
        </body>
        </html>
    `;
};

export { render };
