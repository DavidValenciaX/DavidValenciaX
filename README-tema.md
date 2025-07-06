# Tema Minimal Clean para JSON Resume

Un tema minimalista y elegante para JSON Resume que genera hojas de vida profesionales con un diseño limpio y moderno.

## ✨ Características

- **Diseño minimalista**: Interfaz limpia y profesional
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **CSS inline**: Todos los estilos están incluidos, sin dependencias externas
- **Tipografía moderna**: Usa fuentes del sistema para mejor rendimiento
- **Paleta de colores profesional**: Esquema de colores coherente y accesible
- **Estructura modular**: Código organizado siguiendo principios de clean code

## 🚀 Instalación

### Como módulo NPM (recomendado)

```bash
npm install jsonresume-theme-minimal-clean
```

### Desde código fuente

```bash
git clone https://github.com/DavidValenciaX/jsonresume-theme-minimal-clean.git
cd jsonresume-theme-minimal-clean
npm install
```

## 📖 Uso

### Con resume-cli

```bash
# Instalar resume-cli globalmente
npm install -g resume-cli

# Generar CV usando el tema
resume export CV.html --theme minimal-clean
```

### Programáticamente

```javascript
import { render } from 'jsonresume-theme-minimal-clean';
import fs from 'fs';

// Cargar datos del CV
const resumeData = JSON.parse(fs.readFileSync('resume.json', 'utf-8'));

// Renderizar HTML
const html = render(resumeData);

// Guardar archivo
fs.writeFileSync('mi-cv.html', html);
```

### Prueba local

```bash
# Clonar este repositorio
git clone https://github.com/DavidValenciaX/jsonresume-theme-minimal-clean.git
cd jsonresume-theme-minimal-clean

# Asegúrate de tener un archivo resume.json en la raíz
# Ejecutar prueba
npm test
```

Esto generará un archivo `test-output.html` que puedes abrir en tu navegador.

## 🎨 Personalización

El tema está diseñado para ser fácilmente personalizable. Puedes modificar las constantes al inicio del archivo `index.js`:

```javascript
const COLORS = {
  PRIMARY: '#2c3e50',      // Color principal (títulos)
  SECONDARY: '#34495e',    // Color secundario
  TEXT: '#333333',         // Color del texto
  LIGHT_TEXT: '#666666',   // Color del texto secundario
  BORDER: '#e1e8ed',       // Color de bordes
  BACKGROUND: '#ffffff',   // Color de fondo
  ACCENT: '#3498db'        // Color de acento (enlaces, destacados)
};

const SPACING = {
  SMALL: '0.5rem',
  MEDIUM: '1rem',
  LARGE: '1.5rem',
  XL: '2rem'
};
```

## 📋 Formato del resume.json

El tema soporta el esquema estándar de JSON Resume. Secciones incluidas:

- ✅ **basics**: Información personal y contacto
- ✅ **education**: Educación y estudios
- ✅ **certificates**: Certificaciones
- ✅ **skills**: Habilidades técnicas
- ✅ **projects**: Proyectos realizados
- ✅ **languages**: Idiomas
- ⚠️ **work**: Experiencia laboral (próximamente)
- ⚠️ **volunteer**: Trabajo voluntario (próximamente)

## 🛠️ Desarrollo

### Estructura del proyecto

```
jsonresume-theme-minimal-clean/
├── index.js          # Función principal del tema
├── package.json      # Configuración NPM
├── test.js          # Script de prueba
├── resume.json      # Datos de ejemplo
└── README.md        # Documentación
```

### Principios de diseño

El código sigue principios de clean code:

- **Separación de responsabilidades**: Cada función tiene una responsabilidad específica
- **Constantes nombradas**: No hay valores hardcodeados
- **Funciones puras**: Sin efectos secundarios
- **Nombres descriptivos**: Variables y funciones con nombres claros
- **Modularidad**: Estructura organizada y mantenible

### Ejecutar pruebas

```bash
npm test
```

## 📄 Licencia

MIT License - ver archivo LICENSE para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Contacto

Oscar David Valencia Alvarez - [davidvalencia0526@gmail.com](mailto:davidvalencia0526@gmail.com)

Proyecto: [https://github.com/DavidValenciaX/jsonresume-theme-minimal-clean](https://github.com/DavidValenciaX/jsonresume-theme-minimal-clean) 