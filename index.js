// Constantes de estilo
const COLORS = {
  PRIMARY: '#2c3e50',
  SECONDARY: '#34495e',
  TEXT: '#333333',
  LIGHT_TEXT: '#666666',
  BORDER: '#e1e8ed',
  BACKGROUND: '#ffffff',
  ACCENT: '#3498db'
};

const FONTS = {
  PRIMARY: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  MONOSPACE: '"JetBrains Mono", "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace'
};

const SPACING = {
  SMALL: '0.5rem',
  MEDIUM: '1rem',
  LARGE: '1.5rem',
  XL: '2rem'
};

// Iconos SVG
const ICONS = {
  EMAIL: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  PHONE: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44818 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44754 2.85669 2.63460 2.65162C2.82167 2.44655 3.04881 2.28271 3.30277 2.17052C3.55674 2.05833 3.83044 2.00026 4.11 2H7.11C7.59531 1.99522 8.06709 2.16708 8.43684 2.48353C8.80659 2.79999 9.04201 3.23945 9.11 3.72C9.23662 4.68007 9.47144 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.1981 21.5265 15.5759C21.8437 15.9536 22.0122 16.4313 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  LOCATION: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  GITHUB: `<svg width="16" height="16" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
  </svg>`,
  
  LINKEDIN: `<svg width="16" height="16" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg"><path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" fill="currentColor"/></svg>`
};

// Función para obtener el icono apropiado
const getIcon = (type) => {
  return ICONS[type.toUpperCase()] || '';
};

// Estilos CSS inline
const CSS_STYLES = `
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: ${FONTS.PRIMARY};
      line-height: 1.6;
      color: ${COLORS.TEXT};
      background-color: ${COLORS.BACKGROUND};
      max-width: 800px;
      margin: 0 auto;
      padding: ${SPACING.XL};
    }
    
    .header {
      text-align: center;
      border-bottom: 2px solid ${COLORS.BORDER};
      padding-bottom: ${SPACING.LARGE};
      margin-bottom: ${SPACING.XL};
    }
    
    .profile-image {
      width: 120px;
      height: 120px;
      min-width: 120px;
      min-height: 120px;
      max-width: 120px;
      max-height: 120px;
      border-radius: 25%;
      object-fit: cover;
      object-position: center;
      border: 3px solid ${COLORS.BORDER};
      margin-bottom: ${SPACING.MEDIUM};
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease;
      background-color: #f8f9fa;
      image-rendering: auto;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: pixelated;
    }
    
    .profile-image:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .name {
      font-size: 2.5rem;
      color: ${COLORS.PRIMARY};
      font-weight: 300;
      margin-bottom: ${SPACING.SMALL};
    }
    
    .label {
      font-size: 1.2rem;
      color: ${COLORS.SECONDARY};
      margin-bottom: ${SPACING.MEDIUM};
    }
    
    .contact-info {
      display: flex;
      justify-content: center;
      gap: ${SPACING.LARGE};
      flex-wrap: wrap;
      margin-bottom: ${SPACING.MEDIUM};
    }
    
    .contact-item {
      color: ${COLORS.LIGHT_TEXT};
      text-decoration: none;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.2s ease;
    }
    
    .contact-item svg {
      color: ${COLORS.ACCENT};
      transition: color 0.2s ease;
    }
    
    .contact-item:hover {
      color: ${COLORS.ACCENT};
    }
    
    .contact-item:hover svg {
      color: ${COLORS.PRIMARY};
    }
    
    .summary {
      text-align: justify;
      margin: ${SPACING.LARGE} 0;
      padding: ${SPACING.MEDIUM};
      background-color: #f8f9fa;
      border-left: 4px solid ${COLORS.ACCENT};
      border-radius: 4px;
    }
    
    .section {
      margin-bottom: ${SPACING.XL};
    }
    
    .section-title {
      font-size: 1.4rem;
      color: ${COLORS.PRIMARY};
      border-bottom: 1px solid ${COLORS.BORDER};
      padding-bottom: ${SPACING.SMALL};
      margin-bottom: ${SPACING.MEDIUM};
      font-weight: 600;
    }
    
    .item {
      margin-bottom: ${SPACING.MEDIUM};
      padding-bottom: ${SPACING.MEDIUM};
      border-bottom: 1px solid #f0f0f0;
    }
    
    .item:last-child {
      border-bottom: none;
    }
    
    .item-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${COLORS.SECONDARY};
      margin-bottom: ${SPACING.SMALL};
    }
    
    .item-subtitle {
      color: ${COLORS.LIGHT_TEXT};
      font-size: 0.9rem;
      margin-bottom: ${SPACING.SMALL};
    }
    
    .item-date {
      font-size: 0.85rem;
      color: ${COLORS.LIGHT_TEXT};
      font-style: italic;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: ${SPACING.MEDIUM};
    }
    
    .skill-category {
      background-color: #f8f9fa;
      padding: ${SPACING.MEDIUM};
      border-radius: 6px;
      border-left: 3px solid ${COLORS.ACCENT};
    }
    
    .skill-category-name {
      font-weight: 600;
      color: ${COLORS.SECONDARY};
      margin-bottom: ${SPACING.SMALL};
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: ${SPACING.SMALL};
    }
    
    .skill-tag {
      background-color: ${COLORS.ACCENT};
      color: white;
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.8rem;
    }
    
    .projects-grid {
      display: grid;
      gap: ${SPACING.MEDIUM};
    }
    
    .project-card {
      background-color: #f8f9fa;
      padding: ${SPACING.MEDIUM};
      border-radius: 8px;
      border-left: 4px solid ${COLORS.ACCENT};
    }
    
    .project-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${COLORS.PRIMARY};
      margin-bottom: ${SPACING.SMALL};
    }
    
    .project-description {
      margin-bottom: ${SPACING.SMALL};
      text-align: justify;
    }
    
    .project-highlights {
      list-style: none;
      margin: ${SPACING.SMALL} 0;
    }
    
    .project-highlights li {
      position: relative;
      padding-left: ${SPACING.MEDIUM};
      margin-bottom: 0.3rem;
    }
    
    .project-highlights li:before {
      content: "▸";
      position: absolute;
      left: 0;
      color: ${COLORS.ACCENT};
      font-weight: bold;
    }
    
    .project-link {
      color: ${COLORS.ACCENT};
      text-decoration: none;
      font-weight: 500;
    }
    
    .project-link:hover {
      text-decoration: underline;
    }
    
    .languages {
      display: flex;
      gap: ${SPACING.LARGE};
      justify-content: center;
    }
    
    .language {
      text-align: center;
    }
    
    .language-name {
      font-weight: 600;
      color: ${COLORS.SECONDARY};
    }
    
    .language-fluency {
      font-size: 0.9rem;
      color: ${COLORS.LIGHT_TEXT};
    }
    
    @media (max-width: 600px) {
      body {
        padding: ${SPACING.MEDIUM};
      }
      
      .profile-image {
        width: 100px;
        height: 100px;
        min-width: 100px;
        min-height: 100px;
        max-width: 100px;
        max-height: 100px;
      }
      
      .name {
        font-size: 2rem;
      }
      
      .contact-info {
        flex-direction: column;
        gap: ${SPACING.SMALL};
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
      
      .languages {
        flex-direction: column;
        gap: ${SPACING.SMALL};
      }
    }

    @media print {
      body {
        max-width: 100%;
        margin: 0;
        padding: 1.5cm;
        font-size: 10pt;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        background-color: ${COLORS.BACKGROUND};
      }

      .header, .item, .section-title {
        border-color: #e1e8ed !important;
      }

      .profile-image, .profile-image:hover {
        box-shadow: none !important;
        border: 3px solid #e1e8ed !important;
        transform: none !important;
      }

      .summary, .skill-category, .project-card {
        background-color: #f8f9fa !important;
        border-left-color: ${COLORS.ACCENT} !important;
      }

      .skill-tag {
        background-color: ${COLORS.ACCENT} !important;
        color: white !important;
      }

      a {
        text-decoration: none;
      }
      
      .contact-item:hover, .project-link:hover {
        text-decoration: none !important;
      }

      .project-link, .contact-item {
        color: ${COLORS.LIGHT_TEXT} !important;
      }

      .contact-item svg {
        color: ${COLORS.ACCENT} !important;
      }
      
      .project-link {
        color: ${COLORS.ACCENT} !important;
      }
    }
  </style>
`;

// Utilidades para formateo de fechas
const formatDate = (dateString) => {
  if (!dateString) return 'Presente';
  
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('es-ES', options);
};

const formatDateRange = (startDate, endDate) => {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const formatTextWithLineBreaks = (text) => {
  if (!text) return '';
  return text.replace(/\n/g, '<br>');
};

// Funciones para renderizar secciones específicas
const renderHeader = (basics) => {
  if (!basics) return '';
  
  const { name, label, email, phone, location, profiles, image } = basics;
  
  const contactItems = [
    email && `<a href="mailto:${email}" class="contact-item">${getIcon('EMAIL')}${email}</a>`,
    phone && `<span class="contact-item">${getIcon('PHONE')}${phone}</span>`,
    location && `<span class="contact-item">${getIcon('LOCATION')}${location.city}, ${location.region}, ${location.countryCode}</span>`
  ].filter(Boolean);
  
  const profileLinks = profiles?.map(profile => {
    const networkLower = profile.network.toLowerCase();
    let iconType = '';
    
    if (networkLower.includes('github')) {
      iconType = 'GITHUB';
    } else if (networkLower.includes('linkedin')) {
      iconType = 'LINKEDIN';
    }
    
    return `<a href="${profile.url}" class="contact-item" target="_blank" rel="noopener noreferrer">${getIcon(iconType)}${profile.network}</a>`;
  }).join('') || '';
  
  const profileImage = image ? `
    <img 
      src="${image}" 
      alt="Foto de perfil de ${name || 'Usuario'}"
      class="profile-image"
      loading="lazy"
      decoding="async"
      width="120"
      height="120"
      onload="this.style.opacity=1"
      onerror="this.style.display='none'"
      style="opacity:0;transition:opacity 0.3s ease"
    />
  ` : '';
  
  return `
    <header class="header">
      ${profileImage}
      <h1 class="name">${name || ''}</h1>
      <div class="label">${label || ''}</div>
      <div class="contact-info">
        ${contactItems.join('')}
        ${profileLinks}
      </div>
    </header>
  `;
};

const renderSummary = (summary) => {
  if (!summary) return '';
  
  return `
    <div class="summary">
      ${formatTextWithLineBreaks(summary)}
    </div>
  `;
};

const renderEducation = (education) => {
  if (!education || education.length === 0) return '';
  
  const educationItems = education.map(edu => `
    <div class="item">
      <div class="item-title">${edu.institution || ''}</div>
      <div class="item-subtitle">${edu.studyType || ''} en ${edu.area || ''}</div>
      <div class="item-date">${formatDateRange(edu.startDate, edu.endDate)}</div>
    </div>
  `).join('');
  
  return `
    <section class="section">
      <h2 class="section-title">Educación</h2>
      ${educationItems}
    </section>
  `;
};

const renderCertificates = (certificates) => {
  if (!certificates || certificates.length === 0) return '';
  
  const certificateItems = certificates.map(cert => `
    <div class="item">
      <div class="item-title">${cert.name || ''}</div>
      <div class="item-subtitle">${cert.issuer || ''}</div>
      <div class="item-date">${formatDate(cert.date)}</div>
    </div>
  `).join('');
  
  return `
    <section class="section">
      <h2 class="section-title">Certificaciones</h2>
      ${certificateItems}
    </section>
  `;
};

const renderSkills = (skills) => {
  if (!skills || skills.length === 0) return '';
  
  const skillCategories = skills.map(skill => `
    <div class="skill-category">
      <div class="skill-category-name">${skill.name || ''}</div>
      <div class="skill-tags">
        ${skill.keywords?.map(keyword => `<span class="skill-tag">${keyword}</span>`).join('') || ''}
      </div>
    </div>
  `).join('');
  
  return `
    <section class="section">
      <h2 class="section-title">Habilidades Técnicas</h2>
      <div class="skills-grid">
        ${skillCategories}
      </div>
    </section>
  `;
};

const renderProjects = (projects) => {
  if (!projects || projects.length === 0) return '';
  
  const projectItems = projects.map(project => `
    <div class="project-card">
      <div class="project-name">${project.name || ''}</div>
      <div class="project-description">${formatTextWithLineBreaks(project.description || '')}</div>
      ${project.highlights && project.highlights.length > 0 ? `
        <ul class="project-highlights">
          ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
      ` : ''}
      ${project.url ? `<a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">Ver proyecto</a>` : ''}
    </div>
  `).join('');
  
  return `
    <section class="section">
      <h2 class="section-title">Proyectos</h2>
      <div class="projects-grid">
        ${projectItems}
      </div>
    </section>
  `;
};

const renderLanguages = (languages) => {
  if (!languages || languages.length === 0) return '';
  
  const languageItems = languages.map(lang => `
    <div class="language">
      <div class="language-name">${lang.language || ''}</div>
      <div class="language-fluency">${lang.fluency || ''}</div>
    </div>
  `).join('');
  
  return `
    <section class="section">
      <h2 class="section-title">Idiomas</h2>
      <div class="languages">
        ${languageItems}
      </div>
    </section>
  `;
};

// Función principal de renderizado
const render = (resume) => {
  if (!resume) {
    throw new Error('Resume data is required');
  }
  
  const {
    basics,
    education,
    certificates,
    skills,
    projects,
    languages
  } = resume;
  
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${basics?.name || 'CV'} - ${basics?.label || ''}</title>
      ${CSS_STYLES}
    </head>
    <body>
      ${renderHeader(basics)}
      ${renderSummary(basics?.summary)}
      ${renderEducation(education)}
      ${renderProjects(projects)}
      ${renderSkills(skills)}
      ${renderCertificates(certificates)}
      ${renderLanguages(languages)}
    </body>
    </html>
  `;
};

export { render }; 