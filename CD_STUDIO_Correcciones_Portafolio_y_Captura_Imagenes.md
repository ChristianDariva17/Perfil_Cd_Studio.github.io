# CD STUDIO — Plan de correcciones del portafolio e integración de capturas reales

**Versión:** 1.0  
**Fecha de preparación:** 27 de octubre de 2026  
**Sitio publicado:** https://christiandariva17.github.io/Perfil_Estudiantil.github.io/  
**Repositorio a revisar:** https://github.com/christiandariva17/Perfil_Estudiantil.github.io  
**Objetivo:** corregir las inconsistencias detectadas en la última auditoría, validar la calidad técnica e incorporar capturas **reales** de los enlaces que el propietario facilite posteriormente. **No** reconstruir la web ni modificar innecesariamente el diseño existente.

> **Importante:** las observaciones de este archivo provienen de la auditoría anterior. Antes de cambiar código, verificar cada una en el estado actual del repositorio y en la versión publicada. Si una corrección ya existe, marcarla como resuelta; no duplicarla.

---

## 1. Identidad de marca obligatoria

Respetar el branding aprobado de **CD STUDIO — Precision Tech Premium**.

| Elemento | Especificación |
| --- | --- |
| Nombre | **CD STUDIO** |
| Logotipo | Monograma **B.3 aprobado** + wordmark CD STUDIO |
| Eslogan | **Software con precisión y visión.** |
| Descriptor | Software Design & Development |
| Color principal | `#0F172A` (azul noche) |
| Acento | `#1D4ED8` (azul precisión) |
| Secundario | `#334155` (azul acero) |
| Neutro | `#E2E8F0` (gris hielo) |
| Blanco | `#FFFFFF` |
| Titulares y marca | Space Grotesk |
| Texto e interfaz | Inter |
| Identidad | Sobria, elegante, precisa, profesional, accesible |

**Reglas:**

- Tomar el monograma B.3 **directamente del Kit Maestro aprobado**, sin reinterpretarlo, redibujarlo ni sustituirlo por otro símbolo «parecido».
- Mantener sus proporciones, curvas, espacios negativos y color institucional.
- No crear nuevos logos con IA generativa ni introducir gradientes, dorados o estilos distintos.
- Antes de integrar assets, comprobar las rutas reales, formatos y versiones del kit. Si falta el vector aprobado, solicitar el archivo original; no reconstruirlo por aproximación.
- No cambiar el stack tecnológico ni las funcionalidades existentes salvo necesidad comprobada y documentada.

---

## 2. Alcance, prioridades y reglas de ejecución

### Prioridad P0 — Correcciones confirmables de consistencia

1. Unificar numeración e identificadores de proyectos, especialmente **Canales Abiertos** y **Pulso**.
2. Unificar la redacción en español de Perú (sin voseo accidental).
3. Unificar encabezados, etiquetas y destinos de navegación de inicio y páginas internas.
4. Identificar con claridad cualquier telemetría, latencia, estado o endpoint que sea demostrativo/simulado.

### Prioridad P1 — Presentación y credibilidad

5. Ordenar casos empresariales por relevancia y separar experimentos visuales (por ejemplo, Flores Amarillas) cuando corresponda.
6. Mejorar fichas de proyectos con capturas reales y aportaciones técnicas demostrables.
7. Revisar promesas comerciales y textos de servicios, manteniendo solo afirmaciones verificables.
8. Verificar el monograma B.3 y el sistema visual en todas las rutas.

### Prioridad P2 — Ingeniería y mantenimiento

9. Revisar metadatos de GitHub (`About`, descripción, topics, web) y metadatos internos del proyecto.
10. Ejecutar y documentar validaciones HTML, formato, accesibilidad, SEO, seguridad y Lighthouse CI.
11. Validar móvil, tablet, escritorio e interacciones con teclado.
12. Optimizar imágenes y preparar su captura automatizada de URLs que se entregarán posteriormente.

**Principio de implementación:** hacer cambios pequeños y comprobables; preservar código funcional, enlaces, historial, contenido auténtico y comportamiento responsive. No borrar secciones sin justificación.

---

## 3. Corrección 01 — Numeración y datos de proyectos (P0)

**Hallazgo de la auditoría previa:** Canales Abiertos figuraba como **caso 03** en portada y **caso 04** en su ficha; Pulso también se presentaba como **caso 04**. Verificar si esto aún ocurre.

### Implementación

- Identificar dónde se definen los proyectos (JSON, JS/TS, HTML, Markdown, CMS, etc.).
- Establecer una **fuente de verdad única** para ID inmutable, slug, título, categoría, orden visible, URL y estado.
- Evitar codificar manualmente el número del caso en cada página.
- Generar la numeración de manera coherente desde la colección ordenada o utilizar códigos únicos estables.
- Verificar navegación de ida y vuelta entre tarjeta, ficha y enlaces de proyectos relacionados.
- No cambiar URLs públicas si puede evitarse; si se cambia alguna, preparar la redirección o compatibilidad correspondiente.

### Aceptación

- No hay números duplicados ni contradictorios dentro de la misma serie.
- La tarjeta y la ficha de cada proyecto muestran el mismo identificador.
- Los enlaces abren el proyecto correcto, incluso tras reordenar tarjetas.

---

## 4. Corrección 02 — Español coherente y microcopy (P0)

**Hallazgo previo:** convivencia de «podés», «querés», «recibís», «Explorá», «Revisá» y «Contame» con textos de español peruano.

### Implementación

- Utilizar español peruano, profesional, natural y consistente.
- Ejemplos sugeridos: `podés → puedes`, `querés → quieres`, `recibís → recibes`, `Explorá → Explora`, `Revisá → Revisa`, `Contame → Cuéntame`.
- Corregir títulos, placeholders, `aria-label`, textos de botones, formularios, metadatos, avisos y páginas de proyectos.
- Revisar ortografía, tildes, mayúsculas y puntuación; respetar nombres de productos, tecnologías, citas y contenido legítimamente escrito en otro idioma.
- Evitar promesas absolutas, tecnicismos innecesarios y frases demasiado comerciales.

### Aceptación

- No quedan formas de voseo no intencionales.
- El tono institucional de CD STUDIO se mantiene uniforme en todas las páginas.
- Los CTA usan verbos claros: «Ver proyecto», «Explorar proyectos», «Contactar», «Conocer servicios».

---

## 5. Corrección 03 — Navegación y estructura coherentes (P0)

**Hallazgo previo:** etiquetas distintas entre inicio («Qué desarrollo», «Cómo trabajo») y fichas («Qué hago»).

### Implementación

- Definir una sola estructura de navegación y reutilizarla en todas las páginas.
- Propuesta de navegación: **Inicio · Proyectos · Servicios · Proceso · Sobre mí · Contacto**.
- Usar nombres idénticos en desktop, menú móvil, breadcrumbs y páginas internas.
- Asegurar enlaces correctos desde rutas anidadas; probar anclas y rutas relativas del despliegue en GitHub Pages.
- Incorporar estado activo de página/sección, foco visible, menú móvil accesible y retorno claro al inicio.
- Respetar `prefers-reduced-motion` y no depender de animaciones para entender la navegación.

### Aceptación

- Las mismas secciones tienen el mismo nombre en todo el sitio.
- No hay enlaces rotos, anclas sin destino ni problemas al usar «atrás».
- El menú abre, cierra y funciona por teclado en móviles y escritorio.

---

## 6. Corrección 04 — Telemetría y API Playground (P0)

**Hallazgo previo:** indicadores presentados como «en vivo» y cifras de latencia/uptime, con componentes que funcionan como simulación.

### Implementación

- Auditar cada dato mostrado: origen, frecuencia de actualización y condición real o demostrativa.
- Si no proviene de un servicio real medido, mostrar **«Demo», «Simulación» o «Datos ilustrativos»** cerca del propio indicador, no solo en el pie.
- El API Playground debe indicar claramente que **no ejecuta solicitudes reales** cuando este sea el caso.
- Evitar métricas inventadas que aparenten resultados empresariales: uptime, clientes, transacciones, latencias, proyectos entregados.
- No publicar tokens, claves, endpoints privados, datos personales ni respuestas sensibles.
- Si se implementan datos reales, mostrar fuente y última actualización; manejar estados de error, carga y desconexión.

### Aceptación

- El visitante puede distinguir inmediatamente una simulación de una métrica de producción.
- No existe una afirmación técnica no respaldada por una fuente o medición.

---

## 7. Corrección 05 — Jerarquía de proyectos y experimentos (P1)

### Implementación

- Priorizar sistemas con problemas reales, arquitectura y resultados: **Castillo Yarinacocha**, Canales Abiertos, Ucayali Decide y otros según el alcance verdadero de cada uno.
- Separar experiencias experimentales/creativas (por ejemplo, **Flores Amarillas**, 3D, animaciones) bajo una sección **Laboratorio / Experimentos** si mejora la claridad.
- No eliminar proyectos académicos: identificarlos como tales, igual que demos, prototipos y productos en operación.
- Cada tarjeta debe comunicar: nombre, problema/objetivo, rol, tecnologías principales, estado verificado y una acción única clara.
- No inventar clientes, cifras, roles, fechas ni resultados.

### Aceptación

- En los primeros segundos se entiende qué soluciones reales sabes desarrollar.
- Los experimentos siguen accesibles, pero no eclipsan los casos de ingeniería.

---

## 8. Corrección 06 — Casos de estudio con evidencia verificable (P1)

### Plantilla sugerida por proyecto

1. **Resumen:** problema y contexto.
2. **Mi rol:** responsabilidades efectivamente realizadas.
3. **Alcance:** módulos y funcionalidades verificadas.
4. **Arquitectura:** tecnologías y decisiones relevantes, sin filtrar secretos.
5. **Proceso:** retos, decisiones, validaciones y aprendizajes.
6. **Evidencia visual:** capturas reales obtenidas del enlace autorizado.
7. **Resultados:** métricas solo si existen mediciones verificables; de lo contrario, resultados cualitativos honestos.
8. **Enlaces:** demo pública, repositorio, documentación o referencias según permisos.
9. **Estado:** académico, prototipo, desarrollo, desplegado o mantenimiento, según corresponda.

### Recomendaciones por contenido

- **Castillo Yarinacocha:** aportar imágenes de módulos públicos o capturas sanitizadas, esquema de arquitectura simplificado y descripción exacta del rol personal.
- **Canales Abiertos:** coherencia de numeración, capturas reales, propósito y estado del repositorio.
- **Ucayali Decide:** mantener una aclaración de independencia respecto de organismos y actores electorales; mostrar fuentes públicas verificables.
- **Pulso:** distinguir landing, concepto, prototipo y funcionalidad real; no sugerir que una notificación simulada verifica pagos.
- **Sistema Desayunos:** marcar correctamente su condición académica si aplica.
- **Flores Amarillas:** clasificar como experimento visual/3D cuando corresponda.

---

## 9. Corrección 07 — Branding final y uso del monograma B.3 (P1)

- Comparar logo de navbar, footer, favicon, Open Graph, avatar y páginas internas contra el **SVG oficial aprobado**.
- Conservar proporciones y espacio negativo del monograma B.3.
- No usar versiones previas incorrectas ni recursos generados que cambien la geometría.
- Usar Space Grotesk para titulares/marca e Inter para UI y contenido; verificar cargas, alternativas y licencias.
- Comprobar contraste, tamaños mínimos, modo claro/oscuro y legibilidad en 16/32/48 px.
- Documentar rutas y nombres de activos maestros en el código.

---

## 10. Corrección 08 — Repositorio, SEO y metadatos (P2)

### GitHub

- Revisar la descripción del repositorio, anteriormente «Perfil estudiantil.»; actualizarla para reflejar **CD STUDIO** si sigue así.
- Revisar el nombre interno del paquete (`perfil-estudiantil-portfolio` en auditoría anterior): se puede ajustar si es seguro, sin alterar rutas de despliegue ni romper scripts.
- Completar `About`, topics relevantes, URL del sitio, README, licencia si corresponde y vista previa.
- Mantener el nombre del repositorio y la URL pública actuales si cambiarlos no aporta un beneficio claro.

### SEO y compartir enlaces

- Revisar `title`, `meta description`, `canonical`, `lang="es-PE"`, Open Graph, Twitter Cards y favicon en todas las rutas.
- Verificar `robots.txt`, `sitemap.xml`, etiquetas de encabezado y texto alternativo.
- Establecer imagen Open Graph real y consistente; evitar texto incrustado ilegible.
- Auditar indexación y URLs canónicas de GitHub Pages, especialmente rutas internas.

---

## 11. Corrección 09 — Rendimiento, accesibilidad y calidad (P2)

### Métricas y comprobaciones

- Ejecutar Lighthouse y registrar línea base **antes y después** de los cambios.
- Objetivos de Core Web Vitals: **LCP ≤ 2,5 s; INP ≤ 200 ms; CLS ≤ 0,1** (percentil 75 cuando haya datos reales disponibles).
- Probar resoluciones representativas: **320, 375, 768, 1024, 1440 px**.
- Comprobar navegación por teclado, orden de foco, Escape en overlays, etiquetas de formulario, errores y contraste WCAG 2.2 AA.
- Respetar `prefers-reduced-motion` en 3D, partículas, terminal y transiciones.
- Evitar recursos que bloqueen la carga inicial; implementar carga diferida de imágenes y módulos pesados.
- Verificar que las imágenes reservan espacio mediante `width/height` o `aspect-ratio` para evitar CLS.
- Revisar errores de consola, enlaces, rutas anidadas, HTTP y estados vacíos.
- Confirmar que CI realmente pasa: HTML validation, Prettier, scripts de calidad y Lighthouse CI si existen.
- Revisar cabeceras de seguridad posibles dentro de GitHub Pages y evitar secretos en el frontend.

### Entregable técnico

Crear `docs/qa-portafolio.md` con comando ejecutado, fecha, entorno, resultados, evidencias, problemas abiertos y enlaces al reporte; **no marcar pruebas como aprobadas sin ejecutarlas**.

---

# BLOQUE ESPECIAL — Captura automática de imágenes desde enlaces que proporcionaré

## 12. Objetivo obligatorio de la función de captura

**Cuando el propietario entregue una lista de enlaces**, la IA asistente encargada de actualizar el portafolio debe **abrir esos enlaces y obtener imágenes auténticas del contenido publicado** para utilizarlas en las fichas de proyectos, tarjetas y galerías.

**Los enlaces todavía están pendientes. NO inventarlos ni reemplazarlos por páginas similares.**

> Esta capacidad exige que el entorno de ejecución tenga navegador controlable o una herramienta autorizada de captura. Si no tiene esa capacidad, indicar qué falta y pedir las capturas al propietario; nunca afirmar que capturó imágenes si no lo hizo.

## 13. Entrada de enlaces y registro de activos

El usuario podrá suministrar enlaces en un mensaje, archivo o lista como la siguiente:

```md
## URLs para captura (PENDIENTES DE PROPORCIONAR)

| Proyecto | URL | Tipo | Vistas deseadas | Observaciones |
| --- | --- | --- | --- | --- |
| Castillo Yarinacocha | PENDIENTE | Sitio web | Home / módulos públicos | No capturar datos de huéspedes |
| Canales Abiertos | PENDIENTE | Sitio web | Home / detalle | Solo contenido público |
| Ucayali Decide | PENDIENTE | Sitio web | Home / consultas públicas | Mantener fuentes y atribución |
| Pulso | PENDIENTE | Sitio web | Landing | Aclarar si es demo |
| Otro proyecto | PENDIENTE | Sitio web o imagen | Según enlace | Sin datos confidenciales |
```

La IA debe usar **exactamente las URLs suministradas**. Si una URL conduce a una imagen directa (`.png`, `.jpg`, `.webp`...), puede descargarse o importarse respetando los derechos de uso; si conduce a una web, debe hacerse una **captura de pantalla real**.

## 14. Procedimiento para la IA con navegador

Para **cada enlace autorizado**:

1. **Validar destino:** URL HTTPS, origen esperado, proyecto correcto, disponibilidad y ausencia de redirecciones sospechosas.
2. **Abrir página:** utilizar navegador de automatización disponible (por ejemplo Playwright, Puppeteer o herramienta de navegador conectada).
3. **Esperar carga razonable:** DOM disponible, imágenes importantes cargadas, fuentes listas y cierre de skeletons; no esperar indefinidamente por animaciones o conexiones persistentes.
4. **Inspeccionar visualmente:** identificar cabecera, contenido principal, demostración del producto y, si es posible, 1–2 pantallas que representen funcionalidades reales.
5. **Privacidad primero:** no capturar nombres, correos, DNI, sesiones de usuario, reservas, pagos, credenciales, paneles privados o datos personales. No iniciar sesión ni sortear controles de acceso. Si el enlace requiere autenticación, pedir imágenes sanitizadas o acceso explícitamente autorizado.
6. **Configurar viewport:** capturar **escritorio 1440×900** y **móvil 390×844** como mínimo cuando la página sea responsive. Ajustar según el contenido sin distorsionarlo.
7. **Capturar originales:** screenshot visible del hero y, cuando aporte valor, screenshot completo (full page) con fuente y fecha de captura registradas.
8. **Capturar interacción opcional:** abrir únicamente menús/pestañas públicas y estados relevantes, sin enviar formularios que creen transacciones ni efectuar acciones destructivas.
9. **Revisar el resultado:** verificar que no esté en blanco, cortado, borroso, con spinner permanente o datos privados. Reintentar con un tiempo de espera controlado si hace falta.
10. **Crear derivados optimizados:** recortar respetando el contenido, sin deformar la interfaz ni eliminar datos importantes; exportar WebP/AVIF con JPG/PNG cuando sean apropiados.
11. **Integrar al portafolio:** vincular cada captura al proyecto correcto, documentar procedencia, añadir `alt` descriptivo y aplicar responsive images y carga diferida.
12. **Guardar evidencia:** anotar URL exacta, fecha, viewport, nombre de archivo, derechos de uso y cualquier limitación.

### No se permite

- Generar una imagen con IA y presentarla como captura de una web real.
- Inventar screenshots, métricas o elementos que la página no tiene.
- Copiar fotografías ajenas de forma indiscriminada o eliminar avisos de autoría.
- Capturar áreas privadas, información de clientes o datos sensibles.
- Cambiar el monograma B.3 al incrustar las imágenes.
- Manipular la captura para hacer que un sistema parezca tener funcionalidades que no existen.

## 15. Nombres, tamaños y estructura sugerida

```text
public/
  images/
    projects/
      castillo-yarinacocha/
        home-desktop.webp
        home-mobile.webp
        modulo-publico-desktop.webp
      canales-abiertos/
        home-desktop.webp
        home-mobile.webp
      ucayali-decide/
        home-desktop.webp
        home-mobile.webp
      pulso/
        landing-desktop.webp
        landing-mobile.webp

 docs/
  imagenes-proyectos-manifest.md
  qa-capturas.md
```

- **Originales:** conservar capturas originales en una ubicación de trabajo o carpeta de fuentes cuando la política del repositorio lo permita.
- **Tarjeta de proyecto:** derivado aproximado de `1200×750` px o relación 16:10, adaptado al componente real.
- **Detalle de proyecto:** capturas de escritorio a 1440 px y móvil a 390 px (dimensiones naturales); no ampliar artificialmente las imágenes.
- **Optimización:** preferir WebP; definir peso objetivo por recurso sin sacrificar legibilidad del texto de la interfaz (por ejemplo, intentar ≤ 250 KB para tarjetas, ajustar si el contenido lo exige).
- **Nombre de archivo:** `slug-vista-viewport.ext`, en minúsculas, sin espacios ni acentos.
- **HTML:** incluir `width`, `height`, `alt`, `loading="lazy"` y `decoding="async"` donde corresponda; la imagen LCP del hero puede necesitar prioridad en lugar de lazy loading.
- **Diseño:** `object-fit: cover` solo para miniaturas recortables; usar `contain` o tamaño natural para pantallas que necesitan mostrarse completas.

## 16. Manifest de imágenes y procedencia

Por cada asset, documentar en `docs/imagenes-proyectos-manifest.md`:

```md
| Proyecto | Archivo | URL de origen | Capturado el | Viewport | Derechos/permiso | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| Ejemplo | home-desktop.webp | URL proporcionada | YYYY-MM-DD | 1440×900 | Confirmado | Revisado |
```

**Si los enlaces aún no se han proporcionado, dejar el manifest pendiente y continuar con otras correcciones.** No crear registros ficticios.

## 17. Alternativa con automatización local (cuando esté disponible)

Si la IA tiene Playwright y permisos para navegar a los enlaces entregados, puede utilizar una estrategia equivalente a la siguiente, **adaptándola al stack y al entorno real**:

```js
// EJEMPLO DE PATRÓN — no contiene URLs ni capturas ficticias.
import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs/promises';

async function capturarProyecto({ url, slug, outputDir = 'captures' }) {
  const parsed = new URL(url);
  if (parsed.protocol !== 'https:') throw new Error('Se requiere HTTPS');
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error('Slug no válido');

  const dir = path.join(outputDir, slug);
  await fs.mkdir(dir, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  try {
    for (const config of [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'mobile', width: 390, height: 844 },
    ]) {
      const page = await browser.newPage({
        viewport: { width: config.width, height: config.height },
        deviceScaleFactor: 1,
        reducedMotion: 'reduce',
      });
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.locator('body').waitFor({ state: 'visible' });
      await page.evaluate(() => document.fonts?.ready);
      // Revisar manualmente privacidad, consentimientos, estado de carga y contenido.
      await page.screenshot({
        path: path.join(dir, `home-${config.name}.png`),
        fullPage: false,
      });
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

// Llamar SOLO con URLs exactas proporcionadas y autorizadas por el propietario.
```

**Nota:** el ejemplo no sustituye una inspección visual ni una comprobación de privacidad. Evitar `networkidle` obligatorio en webs con WebSockets o conexiones persistentes. Si el entorno no permite ejecutar este código, no simular su resultado.

## 18. Criterios de aceptación para capturas de enlaces

- [ ] Cada URL suministrada está vinculada a su proyecto correcto.
- [ ] Se capturó la página real, sin imágenes generadas artificialmente.
- [ ] Existe evidencia de al menos escritorio y móvil para páginas responsive accesibles.
- [ ] Las capturas son legibles, visualmente útiles y no exponen información privada.
- [ ] Hay archivos optimizados, nombres consistentes y tamaños adecuados.
- [ ] Todas las imágenes tienen descripción alternativa y dimensiones establecidas.
- [ ] El manifest indica URL, fecha, viewport y permisos.
- [ ] Se informan enlaces fallidos, inaccesibles o que requieren autenticación sin inventar reemplazos.

---

## 19. Plan de implementación incremental

### Sprint 1 — Consistencia (P0)

- [ ] Auditar estado actual antes de editar.
- [ ] Numeración única de proyectos.
- [ ] Español peruano unificado.
- [ ] Navegación consistente en inicio y fichas.
- [ ] Simulaciones y métricas claramente etiquetadas.
- [ ] Verificar enlaces tras cada cambio.

### Sprint 2 — Contenido y branding (P1)

- [ ] Jerarquía entre casos de negocio y experimentos.
- [ ] Fichas de casos con rol real, estado y arquitectura.
- [ ] Confirmar logo B.3 oficial en todos los puntos de contacto.
- [ ] Revisar compromisos comerciales y promesas.

### Sprint 3 — Imágenes reales desde URLs del propietario

- [ ] Esperar listado de enlaces; no inventar URLs.
- [ ] Capturar screenshots de escritorio/móvil con navegación autorizada.
- [ ] Revisar privacidad y calidad visual.
- [ ] Optimizar archivos e integrarlos en tarjetas/fichas.
- [ ] Actualizar manifest y evidencias.

### Sprint 4 — Calidad técnica (P2)

- [ ] Revisión responsive completa.
- [ ] Lighthouse y Core Web Vitals.
- [ ] Accesibilidad de teclado, lectores de pantalla y movimiento reducido.
- [ ] SEO y social cards.
- [ ] Metadatos y documentación del repositorio.
- [ ] GitHub Actions / CI verificada con resultados reales.

### Sprint 5 — Cierre y despliegue

- [ ] Comparar antes/después con capturas y reportes.
- [ ] No quedan regresiones ni enlaces rotos.
- [ ] Actualizar README y changelog.
- [ ] Publicar en GitHub Pages usando el flujo existente.
- [ ] Verificar el sitio publicado y documentar incidencias pendientes.

---

## 20. Instrucción maestra lista para Codex o cualquier IA con acceso al repositorio

> Actúa como ingeniero frontend sénior, diseñador UI/UX y especialista en accesibilidad y rendimiento. Trabajarás **sobre el portafolio existente de CD STUDIO**, sin reconstruirlo desde cero. Primero inspecciona el repositorio y la versión publicada, detecta qué observaciones de este documento siguen vigentes y evita modificar lo que ya está solucionado. Respeta la identidad oficial Precision Tech Premium, el monograma B.3 tomado del vector aprobado, Space Grotesk, Inter, la paleta institucional y el eslogan «Software con precisión y visión.»
>
> Ejecuta las correcciones P0, P1 y P2 por sprints pequeños, conservando rutas y funcionalidades. Unifica numeración, español peruano, navegación, estados simulados, jerarquía de proyectos, evidencias, metadatos, accesibilidad, responsive y rendimiento. No inventes resultados ni testimonios. Antes y después de cada sprint ejecuta las pruebas disponibles y registra resultados.
>
> **Capturas:** posteriormente proporcionaré enlaces específicos de proyectos. Cuando los reciba, utiliza exactamente esas URL, ábrelas con una herramienta de navegador autorizada y toma screenshots reales de escritorio y móvil; inspecciona calidad y privacidad, optimiza imágenes, intégralas a las fichas correspondientes y documenta su origen en un manifest. Nunca generes imágenes ficticias para reemplazar capturas, ni afirmes haber visitado URLs si no tienes navegador disponible. Para enlaces no entregados, deja una tarea pendiente. No publiques contenido privado ni omitas controles de acceso.
>
> Al terminar, entrega: resumen de cambios por archivo, capturas antes/después si están disponibles, resultados de QA y Lighthouse (con comandos y fechas), manifest de imágenes, pendientes y comprobación de la URL pública. No publiques ni modifiques la rama principal sin autorización cuando el flujo de trabajo exija revisión.

---

## 21. Definición de terminado (DoD)

- [ ] Correcciones previamente detectadas contrastadas con el estado actual.
- [ ] Inconsistencias de numeración, texto y navegación resueltas.
- [ ] Indicadores demostrativos etiquetados claramente.
- [ ] Casos de estudio claros, honestos y con evidencia autorizada.
- [ ] Branding B.3 correctamente aplicado y sin assets antiguos.
- [ ] Ninguna función o ruta existente se rompe.
- [ ] Pruebas de responsive, accesibilidad y calidad ejecutadas y registradas.
- [ ] Capturas reales integradas **solo después** de recibir los enlaces.
- [ ] README, metadatos y documentación coherentes con CD STUDIO.
- [ ] Sitio publicado comprobado al finalizar.

**CD STUDIO — Software con precisión y visión.**
