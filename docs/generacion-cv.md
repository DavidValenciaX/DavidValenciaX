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
- `pdf/`: versiones PDF.

Cada estilo se genera dentro de su propia carpeta (`normal/`, `professional/` o
`stackoverflow/`) y los archivos mantienen el mismo nombre base, sin el sufijo
del estilo.

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

## Archivos Generados Esperados

Ejemplos de nombres de salida:

- `html/normal/Oscar_David_Valencia_Alvarez_CV_es.html`
- `html/normal/Oscar_David_Valencia_Alvarez_CV_en.html`
- `html/professional/Oscar_David_Valencia_Alvarez_CV_es.html`
- `html/professional/Oscar_David_Valencia_Alvarez_CV_en.html`
- `html/stackoverflow/Oscar_David_Valencia_Alvarez_CV_es.html`
- `html/stackoverflow/Oscar_David_Valencia_Alvarez_CV_en.html`
- `pdf/normal/Oscar_David_Valencia_Alvarez_CV_es.pdf`
- `pdf/normal/Oscar_David_Valencia_Alvarez_CV_en.pdf`
- `pdf/professional/Oscar_David_Valencia_Alvarez_CV_es.pdf`
- `pdf/professional/Oscar_David_Valencia_Alvarez_CV_en.pdf`
- `pdf/stackoverflow/Oscar_David_Valencia_Alvarez_CV_es.pdf`
- `pdf/stackoverflow/Oscar_David_Valencia_Alvarez_CV_en.pdf`

## Notas Sobre el Tema Professional

El tema Professional se empaqueta antes de generar HTML o PDF:

```bash
node scripts/build-professional-theme.mjs
```

Ese comando crea `scripts/professional-theme.cjs`, que esta ignorado por git porque es un archivo generado.

El tema usa las fuentes Latin Modern ubicadas en `fonts/`. El HTML Professional debe apuntar a rutas como:

```css
url("../../fonts/lmroman10-regular.otf")
```

Si el PDF Professional no respeta la fuente, primero revisa que el HTML en `html/professional/Oscar_David_Valencia_Alvarez_CV_es.html` este cargando bien las rutas `../../fonts/...`.

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
```

Para ingles, usa los comandos equivalentes terminados en `:en`.
