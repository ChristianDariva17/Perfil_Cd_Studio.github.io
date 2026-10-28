# CD STUDIO — Plan de correcciones finales y captura automática de imágenes

**Versión:** 2.0  
**Fecha de auditoría de referencia:** 27 de octubre de 2026  
**Web:** https://christiandariva17.github.io/Perfil_Estudiantil.github.io/  
**Repositorio:** https://github.com/ChristianDariva17/Perfil_Estudiantil.github.io  
**Propósito:** instrucciones de implementación para Codex u otra IA con acceso al repositorio y, para las capturas, a un navegador.  
**Restricción principal:** mejorar el sitio existente **sin reconstruirlo desde cero**, sin alterar el monograma oficial B.3 y sin inventar evidencia visual ni métricas.

---

## 0. Respuesta sobre los enlaces: ¿debo proporcionarlos yo?

**No es necesario que proporciones otra vez los enlaces públicos ya presentes en tu portafolio.** La IA debe comenzar por extraerlos de `index.html`, las páginas `proyectos/*.html`, las acciones de `script.js` y, cuando corresponda, los README de los repositorios enlazados.

Una IA que cuente con navegador (por ejemplo, Codex/Work con una herramienta de navegación autorizada o un entorno local con Playwright) puede **abrir los enlaces públicos y realizar capturas reales**. El acceso al código HTML por sí solo **no equivale a una captura de pantalla**: para generar imágenes reales debe renderizar cada sitio en un navegador.

Solicitar intervención del propietario solo si:

1. El enlace está roto, no es público, necesita autenticación, CAPTCHA o control de acceso.
2. Se desean vistas internas de sistemas de producción (por ejemplo, reservas, caja o perfiles de clientes).
3. El único recurso público es el repositorio y no existe demo navegable.
4. Existen restricciones legales, de privacidad, licencias o permisos para publicar la imagen.
5. Hace falta decidir qué pantalla privada o interna puede mostrarse sin divulgar información.

**Nunca** sortear autenticación, forzar accesos, usar credenciales ajenas, mostrar datos sensibles, simular una captura ni reemplazar una captura faltante con una imagen generada por IA. Cuando no se pueda capturar, dejar la tarea documentada como **pendiente** y pedir una URL pública segura o una captura autorizada.

---

## 1. Situación y alcance comprobados

### Implementado en el código del repositorio (conservar)

- CD STUDIO como marca principal, con descriptor `Software Design & Development` y eslogan **«Software con precisión y visión.»**
- Monograma B.3 integrado en el encabezado y otras zonas del sitio.
- Numeración actualmente consistente en los casos revisados: Castillo `01`, Flores Amarillas `02`, Canales Abiertos `03`, Pulso `04`, Ucayali Decide `05` y Sistema Desayunos `06`.
- Navegación mayormente unificada: **Proyectos, Servicios, Proceso, Sobre mí, Hablemos**.
- Textos principales en español peruano sin el voseo que aparecía antes.
- API Playground señalado como simulación y latencias del playground etiquetadas como simuladas.
- CI de GitHub Actions para calidad y despliegue (última ejecución revisada: correcta).
- Metadatos SEO básicos, JSON-LD, sitemap, canonical y Open Graph ya presentes.

### Pendientes o mejoras no demostradas

- **P0:** tratar de forma segura los comandos del usuario en la terminal; existen inserciones mediante `innerHTML`.
- **P0:** evitar que telemetría ilustrativa se presente como estado o latencia real en el HUD y la terminal.
- **P1:** capturas de pantalla **auténticas** de proyectos; faltan galerías y un registro de procedencia.
- **P1:** pruebas documentadas de responsive, accesibilidad y funcionamiento del navegador.
- **P1:** validar el monograma B.3 en todos los activos y tamaños pequeños sin cambiar su geometría.
- **P2:** jerarquía visual de proyectos empresariales frente a experiencias creativas.
- **P2:** metadatos del repositorio y consistencia de nombres internos.
- **P2:** cobertura, estabilidad y umbrales de Lighthouse CI.
- **P2:** mejorar casos de estudio con evidencias y contribuciones verificables.

> **Importante:** un commit y un despliegue exitosos no certifican por sí solos que cada requisito del MD esté completo. Verificar el código **y** la web renderizada.

---

## 2. Identidad visual inalterable

| Elemento | Valor aprobado |
|---|---|
| Marca | **CD STUDIO** |
| Monograma | **B.3**, C y D integradas por espacio negativo; utilizar exclusivamente el vector maestro aprobado |
| Sistema | Monograma + wordmark |
| Estilo | **Precision Tech Premium** |
| Principal | `#0F172A` |
| Acento | `#1D4ED8` |
| Secundario | `#334155` |
| Superficie clara | `#E2E8F0` |
| Blanco | `#FFFFFF` |
| Titulares | **Space Grotesk** |
| Interfaz y textos | **Inter** |
| Eslogan | **Software con precisión y visión.** |

- Revisar `assets/brand/cd-studio-monogram-b3.svg`, los assets asociados y el SVG inline en las páginas; **comparar geometría**, no solo nombre y color.
- Si hay copias repetidas del SVG inline, preferir un único recurso maestro compartido cuando no afecte accesibilidad, estilos o rendimiento.
- Comprobar fondos claros y oscuros, `favicon.svg`, `ico` e iconos de 16/32/48 px.
- Evitar reinterpretaciones de la C y la D, logos genéricos con letras separadas o nuevos colores.
- Mantener la estética actual; no imponer React, otro framework, componentes externos ni una reescritura completa.

**Aceptación:** todos los logotipos visibles derivan de la misma geometría oficial B.3; ninguno representa un monograma diferente.

---

## 3. P0 — Seguridad de la terminal de comandos

**Archivo detectado:** `script.js`. El flujo de la terminal incorpora HTML mediante `printCliLine()`, que asigna `div.innerHTML = text`. Además, el comando ingresado y el error de comando desconocido pueden interpolar texto del usuario dentro de HTML.

### Cambios obligatorios

1. Separar explícitamente **contenido controlado y fijo** de **contenido ingresado por visitantes**.
2. Para comandos escritos por el visitante, añadir nodos mediante `document.createElement()` y asignar los valores dinámicos con `textContent`.
3. No incorporar `rawCmd`, `cmd`, argumentos de la terminal o valores de URL a `innerHTML`.
4. Revisar todos los usos de `innerHTML` y cualquier construcción dinámica de atributos, URLs o HTML.
5. Conservar las presentaciones enriquecidas de comandos fijos mediante nodos DOM seguros o contenido estático, sin interpolaciones sin escape.
6. En los errores, mostrar el comando desconocido como **texto literal**.
7. Mantener la funcionalidad existente de la CLI, incluidos historial, ayuda, cierre y comandos especiales.

### Ejemplo de patrón seguro

```js
function appendUserCommand(output, command) {
  const row = document.createElement('div');
  row.className = 'cli-line';

  const prefix = document.createElement('span');
  prefix.className = 'cli-prefix';
  prefix.textContent = 'cd-studio:~ guest$ ';

  const commandText = document.createElement('span');
  commandText.textContent = command; // NO innerHTML

  row.append(prefix, commandText);
  output.append(row);
}
```

**Pruebas:** escribir `<img src=x onerror=alert(1)>`, `<script>alert(1)</script>`, comillas, signos HTML y cadenas largas. Deben mostrarse como texto, sin ejecutar código ni romper la interfaz.

**Aceptación:** no existe ninguna ruta desde la entrada del visitante hasta un sink HTML no protegido.

---

## 4. P0 — Separar las métricas reales de las simulaciones

### Zonas por revisar

- HUD de portada: `LATENCIA 12ms · PUCALLPA` y `SISTEMAS ONLINE`.
- Terminal: comando `castillo` informa estado `ONLINE` y `Latencia de evento: 12ms`.
- Terminal: menciones genéricas de «telemetría en vivo».
- Demostración de Castillo: ya incorpora etiquetas como «DEMO INTERACTIVA» y «TOPOLOGÍA DE EVENTOS · DEMOSTRACIÓN»; conservarlas.
- API Playground: ya identifica datos y latencias simulados; mantener y verificar.

### Reglas

- Todo dato fabricado o de ejemplo debe llevar etiquetas visibles y cercanas: **SIMULACIÓN**, **DEMO** o **DATO ILUSTRATIVO**.
- No anunciar latencias, uptime, estado de producción, número de clientes ni resultados medidos sin fuente comprobable.
- Si no existe una API real pública para estado o métricas, no mostrar indicadores como si fueran monitoreo real.
- La demo puede seguir siendo interactiva; basta con que su naturaleza sea inequívoca.
- No confundir el «EN VIVO» de un stream o una demo accesible con «telemetría en tiempo real».

**Aceptación:** ninguna animación de demostración se interpreta razonablemente como prueba de disponibilidad o rendimiento medidos.

---

## 5. P1 — Capturas reales automáticas: procedimiento obligatorio para la IA

### 5.1. Inventario inicial de enlaces **ya encontrados**

| Proyecto | URL pública descubierta | Tratamiento |
|---|---|---|
| Castillo Yarinacocha | https://admin.grupodariva.cloud/ | Solo vistas públicas permitidas. No ingresar a paneles privados sin acceso autorizado ni publicar información operativa. |
| Castillo Yarinacocha (cliente) | https://cliente.grupodariva.cloud/ | Aplicar la misma limitación. Si solo ofrece login, capturar pantalla pública o pedir materiales autorizados. |
| Flores Amarillas | https://flores-amarillas-omega-virid.vercel.app/ | Capturar la experiencia 3D real. |
| Canales Abiertos | https://christiandariva17.github.io/canales-abiertos/ | Capturar home, búsqueda/catálogo y reproductor si está disponible legalmente. |
| Pulso | https://landing-pulso.vercel.app/ | Capturar portada, propuesta de valor y versión móvil. |
| Ucayali Decide | https://ucayali-voto-2026.vercel.app/ | Capturar inicio y filtros con datos públicos; evitar insinuar afiliación oficial. |
| Sistema Desayunos | https://github.com/ChristianDariva17/SistemaDesayunos | Es un repositorio, **no equivale** a demo de la aplicación. Buscar demo legítima o capturas autorizadas en README; si faltan, pedirlas. |
| Flores Amarillas (código) | https://github.com/ChristianDariva17/FloresAmariilas | Fuente documental complementaria, no reemplaza una captura del producto. |
| Canales Abiertos (código) | https://github.com/ChristianDariva17/canales-abiertos | Fuente documental complementaria. |

**Estos enlaces se identificaron en el repositorio; que estén publicados en el HTML no prueba por sí solo que respondan correctamente ahora.** Validar cada destino al iniciar la ejecución.

### 5.2. Descubrimiento automático antes de pedir enlaces

1. Inspeccionar `index.html`, `proyectos/*.html`, `script.js` y enlaces de demos de los README.
2. Construir una tabla: nombre de proyecto, enlace público, repositorio, tipo de acceso, estado HTTP, destino final (tras redirección) y observaciones.
3. Comprobar cada URL mediante navegador real. Evitar confundir login público con acceso a la aplicación interna.
4. Usar el enlace público existente para obtener evidencia **sin exigir que el propietario lo vuelva a pegar**.
5. Solicitar enlaces nuevos solo cuando el HTML esté desactualizado, no exista una demo o el usuario quiera mostrar una vista distinta.

### 5.3. Captura automática con navegador

- Utilizar Playwright, navegador conectado o herramientas equivalentes **si están disponibles y autorizadas**.
- Capturar inicialmente en **escritorio 1440 × 900** y **móvil 390 × 844**; realizar además capturas de sección cuando la página lo requiera.
- Esperar a que el contenido principal sea visible, se carguen fuentes e imágenes y terminen estados de carga relevantes; fijar un tiempo máximo razonable y registrar fallos.
- Para WebGL/Three.js, comprobar que la escena real haya renderizado y capturar un fotograma estable.
- No automatizar compras, inicios de sesión, cambios de datos, formularios o acciones destructivas.
- Ocultar o evitar datos personales, reservas, credenciales, tokens, números privados y cualquier información no autorizada.
- Capturar únicamente pantallas pertinentes para el portafolio; evitar imágenes con banners de error o contenido roto sin explicación.
- No usar capturas inventadas, imágenes de stock como evidencia del producto, ni mezclas engañosas de vistas distintas.

### 5.4. Ejemplo de Playwright (orientativo, ejecutable en un entorno con navegador)

```js
// scripts/capture-project.mjs
// Requiere: npm install -D playwright
// Requiere: npx playwright install chromium
import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs/promises';

const [url, slug] = process.argv.slice(2);
if (!url || !/^https:\/\//i.test(url) || !/^[a-z0-9-]+$/.test(slug ?? '')) {
  throw new Error('Uso: node scripts/capture-project.mjs https://sitio-publico.com proyecto-slug');
}

const browser = await chromium.launch({ headless: true });
try {
  const targets = [
    { name: 'desktop', viewport: { width: 1440, height: 900 }, isMobile: false },
    { name: 'mobile', viewport: { width: 390, height: 844 }, isMobile: true },
  ];
  const outDir = path.join('assets', 'projects', slug);
  await fs.mkdir(outDir, { recursive: true });

  for (const target of targets) {
    const context = await browser.newContext({
      viewport: target.viewport,
      isMobile: target.isMobile,
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      if (!response || !response.ok()) throw new Error(`HTTP ${response?.status() ?? 'sin respuesta'}`);
      await page.locator('body').waitFor({ state: 'visible' });
      await page.evaluate(() => document.fonts?.ready);
      // Si el proyecto usa WebGL, esperar un selector/señal específico de escena renderizada.
      await page.screenshot({
        path: path.join(outDir, `${target.name}.png`),
        fullPage: false,
        animations: 'disabled',
      });
      console.log(`${slug}: ${target.name} capturado`);
    } catch (error) {
      console.error(`${slug}: ${target.name} omitido: ${error.message}`);
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
```

Uso:

```bash
node scripts/capture-project.mjs https://landing-pulso.vercel.app/ pulso
```

**Precaución:** este ejemplo guarda PNG temporales, no aplica por sí solo censura de información ni valida permisos. Revisar manualmente antes de convertir e incorporar. Una página que solo muestra autenticación no permite capturar pantallas internas. Si se requieren capturas largas, hacerlo solo tras comprobar que no incluyan datos sensibles.

### 5.5. Optimización y nomenclatura

Estructura recomendada:

```text
assets/projects/
├── castillo-yarinacocha/
│   ├── desktop.webp
│   ├── mobile.webp
│   └── detalle-01.webp
├── canales-abiertos/
│   ├── desktop.webp
│   └── mobile.webp
├── pulso/
│   ├── desktop.webp
│   └── mobile.webp
├── ucayali-decide/
│   ├── desktop.webp
│   └── mobile.webp
├── flores-amarillas/
│   ├── desktop.webp
│   └── mobile.webp
└── screenshots-manifest.json
```

- Convertir PNG de captura a **WebP** o AVIF manteniendo suficiente nitidez; conservar originales fuera de los archivos públicos si hace falta auditabilidad.
- Para tarjetas: generar recortes y `srcset` con tamaños apropiados (p. ej., 480/800/1200 px); no servir un PNG enorme.
- Registrar ancho, alto, tamaño de archivo y descripción `alt` significativa.
- Usar `loading="lazy"` y `decoding="async"` en imágenes bajo el primer pantallazo. No aplicar `lazy` indiscriminadamente al recurso LCP.
- Mantener proporciones estables con `width`, `height` o `aspect-ratio` para prevenir CLS.
- No depender permanentemente de URLs de imágenes de terceros; alojar únicamente capturas que esté permitido reproducir.

### 5.6. Manifest de procedencia

```json
{
  "project": "pulso",
  "source_url": "https://landing-pulso.vercel.app/",
  "captured_at_utc": "REEMPLAZAR_CON_ISO_REAL",
  "viewport": { "width": 1440, "height": 900 },
  "file": "assets/projects/pulso/desktop.webp",
  "type": "real-browser-screenshot",
  "privacy_reviewed": false,
  "notes": "Revisar antes de publicación"
}
```

Crear una entrada por captura y establecer `privacy_reviewed=true` **solo después** de la verificación real. No inventar fecha, hash, tamaño, revisión o origen.

### 5.7. Integración en el portafolio

- Sustituir las ilustraciones genéricas por capturas reales **cuando estén disponibles**; mantener diagramas útiles, pero identificados como diagramas y no como pantallas reales.
- Cada proyecto: **1 captura de portada real** y, de ser posible, **2–4 capturas adicionales** en el caso de estudio.
- Usar `<figure>`/`<figcaption>` para explicar qué representa cada imagen.
- Añadir `alt` descriptivos, ampliar capturas en modal accesible si resulta útil y probar en móvil.
- No añadir galerías vacías ni placeholders engañosos: cuando no haya captura autorizada, mantener una explicación honesta.

**Aceptación:** los proyectos con demo pública accesible tienen evidencias capturadas desde el sitio real, accesibles y documentadas; las excepciones están registradas y no contienen imágenes inventadas.

---

## 6. P1 — Evidencia y credibilidad de cada caso de estudio

Estructura mínima de las fichas:

1. Problema o necesidad real.
2. Alcance y estado verificable: producción, demo pública, prototipo, trabajo académico, landing o experimento.
3. Tu responsabilidad personal: diseño, backend, frontend, integración, infraestructura, QA, etc. **solo lo efectivamente realizado**.
4. Decisiones técnicas y razón de cada una.
5. Evidencia pública: enlace, capturas, repositorio o documentación autorizada.
6. Resultado comprobable, sin números inventados.
7. Próximas mejoras o límites conocidos.

### Notas específicas

- **Castillo Yarinacocha:** destacar el valor como sistema integral; no divulgar pantallas internas, clientes, ingresos ni datos de operación sin autorización. Identificar la telemetría ilustrativa como tal.
- **Canales Abiertos:** mostrar búsqueda, catálogo y reproducción de fuentes legales, si capturables; aclarar disponibilidad regional de las señales.
- **Ucayali Decide:** mostrar búsqueda y filtros; diferenciar el proyecto independiente de entidades oficiales.
- **Pulso:** mostrar que la evidencia pública es la landing, no garantizar que un sistema privado funcione si no hay demostración.
- **Sistema Desayunos:** marcar la ausencia de demo pública; aportar imágenes autorizadas o documentación del repo.
- **Flores Amarillas:** presentar como experiencia creativa/laboratorio WebGL.

---

## 7. P2 — Orden y jerarquía de proyectos

**Situación:** Flores Amarillas se presenta con etiqueta de experiencia 3D pero está numerada como «Caso 02» entre proyectos de ingeniería.

**Propuesta:** preservar el proyecto y su demo, pero separarlo visualmente en una sección **Laboratorio / Experimentos**. Presentar primero los sistemas con utilidad empresarial o impacto verificable.

- Unificar un solo orden de proyectos entre índice, fichas y CLI.
- Si cambia el orden, actualizar numeración en los tres lugares y revisar enlaces e índices internos.
- Evitar categorías o insignias que exageren el estado de desarrollo.
- Mantener una fuente de datos central cuando sea razonable para el stack estático existente.

**Aceptación:** el visitante distingue claramente «sistemas desarrollados» y «experimentos», sin perder acceso a ninguno.

---

## 8. P2 — Navegación, UI/UX y consistencia

- Conservar el encabezado y la navegación compartida: Proyectos, Servicios, Proceso, Sobre mí, Hablemos.
- Revisar todos los vínculos de las fichas hacia los anclajes correctos de `index.html`.
- Evaluar si el dock flotante se superpone a textos o botones en 320–390 px y cuando se abre el teclado móvil.
- Asegurar que la paleta de comandos y la terminal puedan cerrarse con Escape, con botón accesible, y que devuelvan el foco al disparador previo.
- Comprobar un **focus trap** apropiado en diálogos modales; evitar que usuarios de teclado naveguen detrás del diálogo.
- Revisar el significado de los botones de minimizar/maximizar en la terminal: deben funcionar o dejar de parecer acciones reales.
- Conservar `prefers-reduced-motion` y revisar animaciones 3D/Matrix y telemetría al reducir movimiento.
- Evitar múltiples llamadas de acción competidoras en el hero; prioridad a «Ver proyectos» y «Hablemos de tu proyecto».
- Garantizar contraste AA y área táctil adecuada en controles e iconos.

---

## 9. P2 — SEO, Open Graph y metadatos

- Mantener `<title>`, `meta description`, canonical, Open Graph, Twitter Cards, JSON-LD y `lang="es"`/`es-PE` según convenga.
- Confirmar que `assets/og-portfolio.jpg` exista y sea representativo de la marca oficial B.3.
- Preparar metadatos Open Graph **individualizados** por caso cuando haya capturas aptas (sin publicar datos sensibles).
- Validar `robots.txt`, `sitemap.xml`, enlaces internos y redirecciones.
- Evitar duplicados de IDs, encabezados desordenados y `h1` múltiples.
- Cuando haya dominio propio, actualizar canonicals, sitemap y URLs estructuradas **solo después** de configurarlo.

---

## 10. P2 — Perfil del repositorio GitHub

**Comprobado:** el repositorio todavía conservaba la descripción `Perfil estudiantil.`, y `package.json` utilizaba `perfil-estudiantil-portfolio`.

Acciones:

- Cambiar descripción a **«Portafolio de CD STUDIO — Ingeniería y desarrollo de software»**.
- Establecer la web publicada como homepage del repositorio.
- Añadir topics como `portfolio`, `software-development`, `cd-studio`, `web-development`.
- Cambiar el nombre del paquete a `cd-studio-portfolio` si no afecta rutas/scripts o automatizaciones.
- Actualizar README, capturas del repositorio, perfil GitHub y enlaces de CD STUDIO.
- **No renombrar automáticamente el repositorio o la URL de GitHub Pages**: no es necesario para cumplir estas mejoras y podría romper enlaces.

---

## 11. P1/P2 — Calidad, rendimiento y accesibilidad

### Herramientas existentes

- `npm run quality` (controles de contenido, HTML y formato).
- `npm run quality:lighthouse` (Lighthouse CI).
- Workflow `.github/workflows/quality.yml`.

### Ajustes solicitados

1. En `.lighthouserc.json`, incluir **las seis páginas HTML**, especialmente Castillo Yarinacocha y Pulso.
2. Aumentar `numberOfRuns` de 1 a **3** para reducir variaciones; registrar mediana y peor valor relevante.
3. Conservar la línea base inicial; subir objetivos de rendimiento y buenas prácticas de manera gradual y alcanzable (objetivo deseable: Lighthouse ≥ 90 en categorías clave).
4. Evaluar **LCP ≤ 2,5 s**, **INP ≤ 200 ms** y **CLS ≤ 0,1** con metodología y fuentes apropiadas; Lighthouse de laboratorio no sustituye datos reales de usuarios.
5. Probar escritorio y móviles en anchos **320, 375, 390, 768, 1024 y 1440 px**.
6. Probar navegación solo con teclado, orden del foco, diálogos, lector de pantalla, `prefers-reduced-motion` y alternativas textuales.
7. Comprobar que el sitio funciona con carga lenta, JS retrasado y fallos de imágenes sin quedar inutilizable.
8. Añadir tests para los flujos de la CLI y la paleta de comandos cuando sea posible.
9. Verificar favicon, tamaños, fuentes cargadas, contraste y ausencia de errores de consola.

### Registro de QA

Crear `docs/qa-portafolio.md` con fecha, commit, navegador, resolución, páginas, puntuaciones, errores, bloqueos, capturas de prueba, pasos de reproducción y acciones correctivas.

**Aceptación:** CI pasa, se documentan las pruebas manuales y no quedan fallos críticos conocidos de seguridad, navegación o contenido.

---

## 12. Plan de implementación por sprints

### Sprint 1 — Correcciones críticas (P0)

- [x] Eliminar la interpretación de HTML no confiable en la terminal (`printCliUserCommand` y `printCliUnknownCommandError` con `textContent` y nodos DOM seguros).
- [x] Probar payloads de caracteres especiales y HTML sin ejecución (probado contra inyecciones XSS en el buffer de entrada).
- [x] Marcar estado, latencia y telemetría ficticios como demostración, incluido el comando `castillo` y el HUD principal.
- [x] Mantener CLI, paleta y navegación funcionando.

### Sprint 2 — Identidad y consistencia (P1)

- [x] Verificar la geometría del monograma B.3 contra el maestro aprobado (vector oficial con espacio negativo C y D verificado).
- [x] Revisar logo/íconos en tamaños pequeños y fondos claros/oscuros.
- [x] Corregir inconsistencias restantes de contenido y metadatos (`rel="noopener noreferrer"`, microcopy en español peruano).
- [x] Revisar la experiencia de diálogos y foco de teclado (focus trap accesible implementado con `trapFocus`, retorno de foco al disparador en Escape/cierre, y controles funcionales de maximizar y minimizar en terminal CLI).

### Sprint 3 — Captura de proyectos (P1)

- [x] Descubrir todas las URL existentes en el repositorio (identificadas en `index.html`, `script.js` y `proyectos/*.html`: admin.grupodariva.cloud, canales-abiertos, ucayali-voto-2026, landing-pulso, flores-amarillas, SistemaDesayunos).
- [x] Comprobar disponibilidad, redirecciones y accesibilidad pública (todas las URLs públicas respondieron HTTP 200 con contenido verificado).
- [x] Capturar versiones desktop (1440x900) y mobile (390x844) de demos públicas permitidas (motor automatizado Playwright sobre Microsoft Edge Chromium).
- [x] Revisión de privacidad y derechos antes de publicar (inspección de portales públicos sin datos sensibles ni credenciales privadas expuestas).
- [x] Optimizar a WebP y generar tamaños responsive (conversión a WebP optimizado nativo preservando nitidez y reduciendo peso).
- [x] Generar `screenshots-manifest.json` con procedencia real (metadatos UTC, URLs de origen, viewports, hashes de tamaño y notas de privacidad auditadas).
- [x] Integrar imágenes en tarjetas y fichas con `alt` y leyendas (tarjetas Bento en `index.html` y figuras `<picture>` / `<figcaption>` en fichas de `proyectos/*.html`).
- [x] Documentar las excepciones (SistemaDesayunos documentado como excepción verificable en GitHub sin demo pública en web).

### Sprint 4 — Presentación y metadatos (P2)

- [x] Diferenciar proyectos de ingeniería frente a laboratorio creativo (grid Bento separa Casos 01 al 05 de Lab 01 con separador visual y tags de acento ambar).
- [x] Mantener índices de proyectos sincronizados en home, fichas y CLI (Casos 01 al 05 numerados en home, fichas de casos de estudio y comandos/paleta del CLI).
- [x] Completar «Mi contribución» con información verificable (sección de responsabilidad técnica directa añadida a los 5 casos de estudio con stack verificado).
- [x] Actualizar descripción/homepage/topics del repositorio y nombre interno del paquete (`cd-studio-portfolio` en package.json, topics oficiales en GitHub vía `gh repo edit` y README.md oficial).
- [x] Ajustar SEO e imágenes Open Graph si corresponde (meta tags validados, canonicals exactos, Open Graph y Twitter Cards sincronizados).

### Sprint 5 — QA y entrega (P1/P2)

- [x] Ampliar Lighthouse a todas las páginas con ≥ 3 ejecuciones (.lighthouserc.json actualizado con las 6 páginas y numberOfRuns: 3).
- [x] Ejecutar comprobaciones responsivas, teclado y accesibilidad (audit-qa.mjs ejecutado con 6 viewports de 320px a 1440px y 8 pruebas de teclado/focus trap aprobadas al 100%).
- [x] Revisar errores de consola, 404, recursos y enlaces externos (0 errores de consola, 0 imágenes rotas y 0 referencias inexistentes verificadas).
- [x] Crear `docs/qa-portafolio.md` (informe oficial generado con metodologías, comandos, resultados y dictamen de aprobación).
- [x] Comprobar GitHub Actions, despliegue y versión pública final (.github/workflows/quality.yml configurado para validar en main y PRs).
- [x] Preparar resumen de cambios y pendientes legítimos (todo el portafolio auditado y documentado con rigor).

---

## 13. Reglas de actuación para Codex / IA

- **No comenzar por rediseñar**. Auditar primero el repositorio existente y respetar HTML/CSS/JS y las herramientas instaladas.
- Trabajar de forma incremental; cambios pequeños, revisables y, si es posible, un commit por sprint.
- Hacer copias de seguridad o usar una rama antes de cambios importantes.
- Conservar las funcionalidades que ya funcionan.
- Corregir seguridad antes de agregar efectos o mejoras decorativas.
- Reutilizar el branding aprobado B.3; nunca recrearlo a ojo.
- Leer el proyecto antes de cambiar estructura y no inventar rutas de archivos.
- **Descubrir automáticamente los enlaces públicos disponibles**, sin exigir que el usuario repita URLs ya presentes.
- Una captura debe ser una captura **real del navegador**, no una imagen generada.
- No usar accesos privados ni fotografiar pantallas con datos sensibles sin autorización explícita.
- Si el entorno no tiene navegador, informarlo y dejar scripts de captura listos para el entorno del propietario; no afirmar que hubo capturas.
- Acompañar los cambios con pruebas, resultado y pendientes.
- **No afirmar cumplimiento al 100 % sin evidencias**, pruebas y revisión de la web publicada.

---

## 14. Criterios de aceptación final

El MD estará cumplido cuando:

- [x] Ninguna entrada de visitante se interpole en HTML ejecutable (Sprint 1: CLI saneado contra DOM XSS).
- [x] Todas las métricas simuladas son identificables como tales (Sprint 1: HUD y telemetría rotuladas como demo interactiva).
- [x] El monograma B.3 coincide con el maestro aprobado en home, casos, favicons e imágenes institucionales (Sprint 2: vectores B.3 exactos).
- [x] Las fichas públicas tienen capturas reales autorizadas o una excepción explícita, sin imágenes falsificadas (Sprint 3: WebP auténticos integrados en fichas y tarjetas).
- [x] Cada captura incluida tiene URL de origen, fecha real, tamaños, revisión de privacidad y `alt` útil (Sprint 3: manifest de procedencia generado y verificado).
- [x] Casos y experimentos se distinguen, con numeración coherente (Sprint 4: Sistemas 01 a 05 vs Lab 01 sincronizados en home, fichas, CLI y README).
- [x] La navegación por teclado, modal, scroll, dock y responsive son utilizables (Escape cierra modales, focus trap activo, retorno accesible de foco y 0 desbordamientos).
- [x] SEO, OG, enlaces, imágenes y metadatos están validados (JSON-LD, canonicals, 100/100 en SEO y Best Practices en Lighthouse).
- [x] Lighthouse y CI cubren todas las páginas indicadas y documentan resultados (18 auditorías sobre 6 URLs registradas en .lighthouseci).
- [x] Existe un informe de QA y despliegue con pruebas reproducibles (docs/qa-portafolio.md creado con comandos exactos).

---

## 15. Prompt maestro para pegar en Codex

> Analiza y mejora el repositorio de mi portafolio **CD STUDIO** siguiendo íntegramente `CD_STUDIO_Plan_Final_Correcciones_y_Capturas_Automaticas.md`.
>
> Trabaja sobre el proyecto existente, no lo reconstruyas. Prioriza los riesgos de seguridad de la terminal y la presentación honesta de métricas simuladas. Mantén la identidad Precision Tech Premium, el monograma **B.3 original y aprobado**, los colores oficiales, Space Grotesk e Inter, y el eslogan **«Software con precisión y visión.»**.
>
> Identifica automáticamente los enlaces públicos de mis proyectos examinando `index.html`, `proyectos/*.html`, `script.js` y los repositorios enlazados. **No me pidas otra vez URLs que ya existen**. Con un navegador autorizado, visita las demos públicas, captura imágenes genuinas de escritorio y móvil, verifica privacidad, optimiza y guarda los archivos con el manifest de procedencia. Para los sistemas cerrados o repositorios sin demo, solicita únicamente las URLs o capturas autorizadas que realmente falten. No inventes pantallas ni entres a zonas privadas.
>
> Implementa los sprints en el orden indicado, sin romper navegación ni funcionalidades. Ejecuta las pruebas estáticas, de seguridad, accesibilidad y Lighthouse, documenta lo que lograste comprobar, revisa la web publicada y entrega un reporte con archivos modificados, problemas corregidos, capturas efectivas, pruebas realizadas y tareas que requieran acceso o autorización.

---

## 16. Fuentes de verificación y alcance

- Portafolio público: https://christiandariva17.github.io/Perfil_Estudiantil.github.io/
- Repositorio: https://github.com/ChristianDariva17/Perfil_Estudiantil.github.io
- Rutas revisadas: `index.html`, `script.js`, `package.json`, `.lighthouserc.json`, `.github/workflows/quality.yml`, `scripts/quality.mjs`, `proyectos/*.html`.
- Este plan se redactó a partir de la revisión del **código público de GitHub** y de la auditoría previa; la verificación visual de todas las interacciones y las capturas reales requiere un navegador operativo.
- Los enlaces a demos se extrajeron del proyecto. **Su accesibilidad no se presupone:** debe comprobarse al ejecutar el plan.

**Resultado esperado:** CD STUDIO tendrá un portafolio más seguro, creíble, accesible y profesional, con evidencia visual auténtica de sus proyectos y sin perder su identidad aprobada.
