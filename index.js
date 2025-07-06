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
    }
    
    .contact-item:hover {
      color: ${COLORS.ACCENT};
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
    email && `<a href="mailto:${email}" class="contact-item">${email}</a>`,
    phone && `<span class="contact-item">${phone}</span>`,
    location && `<span class="contact-item">${location.city}, ${location.region}, ${location.countryCode}</span>`
  ].filter(Boolean);
  
  const profileLinks = profiles?.map(profile => 
    `<a href="${profile.url}" class="contact-item" target="_blank" rel="noopener noreferrer">${profile.network}</a>`
  ).join('') || '';
  
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