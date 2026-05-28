# Generacion de CV

Esta guia documenta como generar las distintas versiones del CV sin tocar el `README.md` principal del perfil de GitHub.

## Fuentes de Datos

Los datos editables estan en formato JSON Resume:

- `resume_es.json`: contenido en espanol.
- `resume_en.json`: contenido en ingles.

Antes de generar archivos, conviene validar ambos JSON:

```bash
npm run validate
```

## Carpetas de Salida

Los archivos generados no se guardan en la raiz del proyecto:

- `html/`: versiones HTML.
- `pdf/`: versiones PDF normales.
- `pdf_mobile/`: versiones PDF moviles.

Estas carpetas estan ignoradas por git porque son artefactos generados.

## Version HTML

Tema propio:

```bash
npm run html:es
npm run html:en
```

Tema Professional:

```bash
npm run html:professional:es
npm run html:professional:en
```

Tema Stack Overflow:

```bash
npm run html:stackoverflow:es
npm run html:stackoverflow:en
```

## Version PDF

Todas las versiones PDF en ambos idiomas:

```bash
npm run pdf:all
```

Tema propio:

```bash
npm run pdf:es
npm run pdf:en
```

Tema Professional:

```bash
npm run pdf:professional:es
npm run pdf:professional:en
```

Tema Stack Overflow:

```bash
npm run pdf:stackoverflow:es
npm run pdf:stackoverflow:en
```

## Version PDF Movil

La version movil usa el tema propio con viewport reducido:

```bash
npm run pdf:mobile:es
npm run pdf:mobile:en
```

## Archivos Generados Esperados

Ejemplos de nombres de salida:

- `html/resume_es.html`
- `html/resume_en.html`
- `html/resume_es_professional.html`
- `html/resume_en_professional.html`
- `html/resume_es_stackoverflow.html`
- `html/resume_en_stackoverflow.html`
- `pdf/Oscar_David_Valencia_Alvarez_CV_es.pdf`
- `pdf/Oscar_David_Valencia_Alvarez_CV_en.pdf`
- `pdf/Oscar_David_Valencia_Alvarez_CV_es_professional.pdf`
- `pdf/Oscar_David_Valencia_Alvarez_CV_en_professional.pdf`
- `pdf/Oscar_David_Valencia_Alvarez_CV_es_stackoverflow.pdf`
- `pdf/Oscar_David_Valencia_Alvarez_CV_en_stackoverflow.pdf`
- `pdf_mobile/Oscar_David_Valencia_Alvarez_CV_mobile_es.pdf`
- `pdf_mobile/Oscar_David_Valencia_Alvarez_CV_mobile_en.pdf`

## Notas Sobre el Tema Professional

El tema Professional se empaqueta antes de generar HTML o PDF:

```bash
node scripts/build-professional-theme.mjs
```

Ese comando crea `scripts/professional-theme.cjs`, que esta ignorado por git porque es un archivo generado.

El tema usa las fuentes Latin Modern ubicadas en `fonts/`. El HTML Professional debe apuntar a rutas como:

```css
url("../fonts/lmroman10-regular.otf")
```

Si el PDF Professional no respeta la fuente, primero revisa que el HTML en `html/resume_es_professional.html` este cargando bien esas rutas.

## Flujo Recomendado

Para regenerar todo lo importante en espanol:

```bash
npm run validate
npm run html:es
npm run html:professional:es
npm run html:stackoverflow:es
npm run pdf:es
npm run pdf:professional:es
npm run pdf:stackoverflow:es
npm run pdf:mobile:es
```

Para ingles, usa los comandos equivalentes terminados en `:en`.
