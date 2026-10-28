# CD STUDIO — Auditoría y plan de mejoras del portafolio web

> **Versión:** 1.0 · **Fecha:** 15 de octubre de 2026  
> **Sitio:** https://christiandariva17.github.io/Perfil_Estudiantil.github.io/  
> **Objetivo:** optimizar el portafolio existente sin reconstruirlo desde cero.  
> **Identidad:** CD STUDIO · Precision Tech Premium · «Software con precisión y visión.»  
> **Destinatario:** desarrollador del proyecto y asistentes de programación como Codex.

---

## 1. Resumen ejecutivo

El sitio ya presenta la marca CD STUDIO, seis proyectos, descripción de servicios, metodología, perfil personal, contacto y experiencias interactivas. La prioridad **no** es un rediseño total: es hacer que la marca y las capacidades técnicas se entiendan más rápido, corregir inconsistencias y respaldar los proyectos con evidencia verificable.

**Orden recomendado:**

1. Corregir inconsistencias visibles de contenido, numeración y navegación.
2. Mejorar la claridad del inicio, la jerarquía de proyectos y las llamadas a la acción.
3. Separar claramente simulaciones/experimentos de resultados técnicos reales.
4. Ampliar casos de estudio con aportes personales y capturas auténticas.
5. Validar accesibilidad, responsive, rendimiento, SEO y seguridad.
6. Preparar una entrega estable y documentada en GitHub Pages.

### Reglas que no deben romperse

- **No cambiar la identidad aprobada:** CD STUDIO, monograma **B.3**, eslogan «Software con precisión y visión.», descriptor «Software Design & Development».
- **No redibujar ni reinterpretar el monograma:** emplear el SVG maestro del Kit Maestro v1.0 aprobado. No sustituirlo por letras CSS, iconos genéricos ni un logo generado de nuevo.
- **No migrar de framework ni rehacer la aplicación** si el repositorio existente resuelve las necesidades. Primero inspeccionar el código y su build/deploy.
- Mantener proyectos, rutas públicas válidas, enlaces funcionales, metadatos y comportamiento existente salvo cambios justificados.
- **No inventar métricas, testimonios, usuarios, clientes, conversiones, latencias ni capturas.** Las demostraciones deberán indicar que son simuladas.
- No divulgar credenciales, secretos, documentos de huéspedes/clientes, información empresarial confidencial o detalles internos que permitan abusos.

---

## 2. Alcance y metodología de esta auditoría

**Se examinó contenido público** de la portada y fichas de Castillo Yarinacocha, Canales Abiertos, Pulso, Ucayali Decide 2026 y Sistema Desayunos el 15/10/2026. Las observaciones de texto/numeración y navegación se fundamentan en esas páginas; **no se ejecutaron** pruebas Lighthouse, auditoría real de teclado, lectura por lector de pantalla, cobertura de tests ni análisis del repositorio del portafolio. Por tanto, estos últimos puntos son tareas de **verificación**, no errores comprobados.

### Referencias auditadas

- Principal: https://christiandariva17.github.io/Perfil_Estudiantil.github.io/
- Castillo: https://christiandariva17.github.io/Perfil_Estudiantil.github.io/proyectos/castillo-yarinacocha.html
- Canales Abiertos: https://christiandariva17.github.io/Perfil_Estudiantil.github.io/proyectos/canales-abiertos.html
- Pulso: https://christiandariva17.github.io/Perfil_Estudiantil.github.io/proyectos/pulso.html
- Ucayali Decide: https://christiandariva17.github.io/Perfil_Estudiantil.github.io/proyectos/ucayali-decide.html
- Sistema Desayunos: https://christiandariva17.github.io/Perfil_Estudiantil.github.io/proyectos/sistema-desayunos.html
- Repositorio público de Canales Abiertos: https://github.com/ChristianDariva17/canales-abiertos

### Significado de prioridades

| Prioridad | Tipo de trabajo | Cuándo abordarlo |
|---|---|---|
| **P0** | Correcciones comprobadas / mensajes potencialmente engañosos | Antes de la siguiente publicación importante |
| **P1** | Claridad, experiencia, evidencia y rendimiento | En la primera ronda de optimización |
| **P2** | Mejora evolutiva y refinamientos | Tras estabilizar P0 y P1 |

---

## 3. Problemas confirmados y correcciones inmediatas (P0)

### 3.1. Numeración de «Canales Abiertos»

**Observación:** portada = **CASO 03**; ficha individual = **CASO 04**. Al mismo tiempo «Landing Pulso» aparece como **CASO 04**. Esto duplica un número y genera inconsistencia.

**Recomendación:** centralizar el catálogo de proyectos, generar números y metadatos desde un único objeto y evitar números duplicados incrustados en HTML.

**Secuencia actual que debe reflejarse de forma consistente, si mantienes el orden de portada:**

| N.º | Proyecto | Categoría sugerida |
|---|---|---|
| 01 | Castillo Yarinacocha | Sistema empresarial |
| 02 | Flores amarillas | Experimento interactivo 3D |
| 03 | Canales Abiertos | Plataforma multimedia |
| 04 | Landing Pulso | Diseño/comunicación de producto |
| 05 | Ucayali Decide 2026 | Aplicación informativa |
| 06 | Sistema Desayunos | Proyecto académico / gestión |

**Criterios de aceptación**

- [ ] Un número único por proyecto, tanto en portada como en la ficha.
- [ ] La descripción, el estado y la etiqueta de categoría coinciden entre vistas.
- [ ] Enlaces de los seis proyectos funcionan y llevan a la ficha correcta.
- [ ] Los identificadores no se rompen al reordenar tarjetas.

### 3.2. Español inconsistente entre páginas

**Observación:** aparecen expresiones como «podés», «querés», «recibís», «Explorá», «Recorré», «Consultá», «Revisá», «Contame» y «¿TENÉS UNA IDEA?». La marca está orientada principalmente al público peruano.

**Decisión editorial recomendada:** español de Perú, trato **de tú**, profesional y directo. Mantener vocabulario técnico cuando agregue precisión.

| Actualmente | Propuesta |
|---|---|
| podés / querés / recibís | puedes / quieres / recibes |
| explorá / recorré / consultá / revisá | explora / recorre / consulta / revisa |
| contame / tenés | cuéntame / tienes |
| «Entregas que podés probar» | «Entregas que puedes probar» |
| «¿TENÉS UNA IDEA?» | «¿TIENES UNA IDEA?» |
| «Hablemos» | Conservar, pues es neutro y claro |

Revisar acentuación, puntuación, mayúsculas, CTA y etiquetas en **todas** las fichas, menú, footer, terminal de ayuda y mensajes de error. Evitar reemplazos automáticos que afecten nombres propios o código fuente.

**Aceptación:** [ ] No quedan cambios regionales accidentales ni expresiones mezcladas en el texto visible.

### 3.3. Navegación desigual entre la portada y fichas

**Observación:** el encabezado principal usa «Proyectos», «Qué desarrollo», «Cómo trabajo», «Sobre mí», «Hablemos»; las fichas usan «Proyectos», «Qué hago», «Sobre mí», «Hablemos». El footer añade «Servicios».

**Acción:** establecer navegación consistente, con anclas/rutas comunes y sección actual indicada.

**Menú propuesto (desktop):** Inicio · Proyectos · Servicios · Proceso · Sobre mí · Contacto.  
**Menú propuesto (móvil):** versión compacta en el mismo orden.  
Las fichas de proyectos pueden incorporar un enlace secundario «← Volver a proyectos» sin cambiar el menú global.

**Aceptación:**
- [ ] Etiquetas, destinos y orden iguales en todas las páginas.
- [ ] Los enlaces a secciones de la portada funcionan desde `proyectos/*.html`.
- [ ] Enlace «Volver a proyectos» regresa a la sección correcta.
- [ ] Estado de foco y navegación con teclado visibles.

### 3.4. Etiquetas de telemetría y simulación

**Observación:** la portada presenta «WEBSOCKETS ONLINE», «latencia 12 ms», estado de sistemas, topología animada y un Playground REST/JSON que declara «simulador», pero muestra una respuesta con `uptime: 99.98%` y latencia numérica como si fuera un servicio medido.

**Acción:** separar inequívocamente *demostración visual* de *medición real*.

- Encabezar las tarjetas correspondientes con **«Demostración interactiva · Datos simulados»**.
- Etiquetar las cifras generadas como `latencia simulada`, `uptime de ejemplo` y `estado ilustrativo`, o retirarlas si no añaden valor.
- No afirmar disponibilidad de un backend o infraestructura productiva si esa medición no está conectada a datos reales y autorizados.
- Conservar simulaciones para mostrar experiencia frontend, pero ofrecer una explicación de su funcionamiento.
- Si en el futuro se conecta telemetría auténtica, definir fuente, permisos, frecuencia, timestamp y manejo de errores antes de hacer afirmaciones cuantitativas.

**Aceptación:** [ ] Un visitante sin conocimientos técnicos comprende qué datos son reales, cuáles ilustrativos y de dónde proceden.

### 3.5. Promesas comerciales a revisar

**Observación:** se ofrece reunión gratuita de 30 minutos, propuesta normalmente al siguiente día hábil y garantía de 30 días.

- Validar que estas condiciones representan la disponibilidad y los servicios reales actuales.
- Definir cuándo empieza la garantía, qué cubre, exclusiones, canal de reporte y tiempos de respuesta razonables.
- Si todavía son una propuesta comercial, sustituir promesas rígidas por texto condicionado y claro.
- Evitar «garantías» que puedan confundirse con respaldo técnico o contractual sin condiciones documentadas.

**Aceptación:** [ ] Todo compromiso visible puede cumplirse y está definido con precisión.

---

## 4. Branding oficial: respetar CD STUDIO (P1)

| Elemento | Especificación |
|---|---|
| Nombre | **CD STUDIO** |
| Monograma | **B.3 aprobado, del Kit Maestro** |
| Descriptor | Software Design & Development |
| Eslogan | Software con precisión y visión. |
| Primario | `#0F172A` |
| Acento | `#1D4ED8` |
| Secundario | `#334155` |
| Superficie clara | `#E2E8F0` |
| Blanco | `#FFFFFF` |
| Títulos y marca | Space Grotesk |
| Textos e interfaz | Inter |

### Aplicación coherente

- Utilizar el **SVG maestro real** en encabezado, favicon, avatar y pie de página.
- Ajustar escala y espaciado mediante CSS, no modificando el trazado del símbolo.
- Preparar logo horizontal para desktop y monograma legible para espacio compacto.
- Unificar radios, bordes, sombras y espaciados (escala base 4/8 px).
- No añadir dorados, neones, motivos «hacker» o efectos que compitan con la identidad Precision Tech Premium.
- Revisar la carga efectiva de Space Grotesk e Inter; incluir fallbacks y `font-display: swap` si son fuentes web.
- Comprobar contraste **en el contexto real**: azul precisión sobre azul noche puede fallar para texto pequeño; usar blanco/gris hielo cuando corresponda.

### Tokens de diseño sugeridos

```css
:root {
  --cd-navy: #0f172a;
  --cd-blue: #1d4ed8;
  --cd-steel: #334155;
  --cd-ice: #e2e8f0;
  --cd-white: #ffffff;
  --cd-space-1: 4px;
  --cd-space-2: 8px;
  --cd-space-3: 12px;
  --cd-space-4: 16px;
  --cd-space-6: 24px;
  --cd-space-8: 32px;
  --cd-radius-sm: 8px;
  --cd-radius-md: 12px;
  --cd-radius-lg: 16px;
  --cd-font-display: 'Space Grotesk', sans-serif;
  --cd-font-body: Inter, sans-serif;
}
```

Estos nombres son **referencias de implementación**, no una orden de sustituir tus tokens existentes sin comprobarlos.

---

## 5. Portada / hero: más claridad, menos competencia visual (P1)

### Mantener

- El eslogan oficial como titular de marca.
- La presentación profesional y dos CTA principales.
- El carácter tecnológico premium con el fondo azul noche.

### Cambiar o mejorar

1. Añadir una frase inmediata sobre **qué soluciones desarrollas** y para quién; no depender solo del eslogan.
2. Priorizar **«Ver proyectos»** y **«Hablemos de tu proyecto»**.
3. Reducir paneles de estado/telemetría en el primer pliegue, especialmente en móvil.
4. Mostrar el monograma correcto sin colocarlo repetidamente como decoración.
5. Si se muestra «Pucallpa», no exagerar coordenadas, precisión geográfica ni telemetría si no contribuyen al mensaje.
6. Evitar letras demasiado finas, bloques de texto largos y animaciones que retrasen la comprensión.

**Texto sugerido (editable, no promesa de servicios no confirmados):**

> **Software con precisión y visión.**  
> Desarrollo sistemas web, plataformas e integraciones digitales centradas en necesidades reales, calidad técnica y experiencia de usuario.  
> **[Explorar proyectos] [Conversemos]**

**Aceptación:** el visitante puede entender en menos de unos segundos qué hace CD STUDIO, ver sus mejores trabajos y contactar sin explorar toda la página.

---

## 6. Arquitectura de contenido y orden de secciones (P1)

**Estructura recomendada:**

1. **Inicio:** identidad, especialidad y CTA.
2. **Proyectos destacados:** sistemas reales y resultados verificables.
3. **Servicios:** soluciones y entregables concretos.
4. **Experimentos / Labs:** 3D, playground y demostraciones opcionales.
5. **Proceso:** cómo se analiza, diseña, desarrolla, prueba y entrega.
6. **Sobre mí:** capacidades, formación y visión de CD STUDIO.
7. **Contacto:** vía directa y disponibilidad real.

**Importante:** mover «Flores amarillas» a «Labs» es una **propuesta de jerarquía**, no un rechazo del proyecto. Se puede conservar en el catálogo completo con filtros «Sistemas / Web / Experimentos / Académicos».

### Reglas visuales para tarjetas

- Misma estructura: categoría → nombre → problema resuelto → stack principal → estado → enlaces.
- Etiquetas veraces: `En producción`, `Demo`, `Landing`, `Proyecto académico`, `Código privado` cuando aplique.
- No tratar una landing de producto como si validara la aplicación completa detrás de ella.
- CTA explícitos: «Ver caso», «Abrir demo», «Ver código»; no usar «Ver» sin contexto.
- Evitar estados «LIVE», «PROD» o similares si se trata de una maqueta.
- No mostrar más de 3–5 tecnologías principales por tarjeta si el resto puede consultarse en la ficha.

---

## 7. Casos de estudio: demostrar pensamiento de ingeniería (P1)

### Plantilla uniforme recomendada

1. Nombre y resumen de una línea.
2. Tipo, estado, fechas aproximadas (solo si son verificables) y responsabilidad personal.
3. Contexto del problema y usuarios.
4. Objetivos y restricciones.
5. **Mi contribución:** qué hice personalmente y qué hicieron colaboradores, si los hubo.
6. Arquitectura y stack **solo de lo comprobable/publicable**.
7. Decisiones clave y alternativas descartadas.
8. Capturas reales, anonimizadas y con permisos.
9. Pruebas, seguridad, accesibilidad y calidad.
10. Resultado verificado y próximos pasos (sin métricas inventadas).
11. Enlaces a demo, repositorio, documentación o fuentes.
12. Navegación hacia el siguiente caso.

### Castillo Yarinacocha (prioridad principal)

- Mantenerlo como proyecto líder por su complejidad operativa.
- Agregar **3–5 capturas reales**: recepción, reservas, cocina/KDS, caja y control de acceso, sin datos privados.
- Preparar un diagrama simplificado de componentes (cliente, API, base de datos, Redis y eventos) validado contra el código real.
- Explicar retos: consistencia de estados, acceso basado en roles, sincronización, continuidad de operación.
- Distinguir cuáles funcionalidades desarrollaste tú y cuál fue el trabajo de otras personas.
- **No publicar** rutas internas, credenciales, variables de entorno, topologías sensibles o datos de huéspedes.
- Considerar si conviene enlazar un portal de administración productivo desde la ficha; como mínimo verificar autenticación, rate limiting y exposición de información.
- Mantener la declaración de «en producción» solo si sigue siendo cierta.

### Canales Abiertos

- Corregir a CASO 03 en la ficha si el orden de portada se mantiene.
- Añadir captura del buscador, filtros y experiencia de reproducción.
- Explicar cómo se trata un stream fallido, restricciones regionales y fuentes legales.
- En el repositorio GitHub **agregar descripción, URL y topics**: actualmente la sección *About* pública aparece sin esos campos.
- Aclarar disponibilidad variable de señales y no atribuir derechos sobre streams de terceros.

### Pulso

- Conservar el alcance correcto: **caso de landing/comunicación de producto**, no una auditoría de la aplicación real.
- Si existen datos ilustrativos, etiquetarlos como demostración.
- Mantener explícito que **notificación recibida ≠ pago confirmado**.
- Incluir evidencia de decisiones UI/UX y componentes de la landing.
- Agregar métricas de conversión solo si se han medido correctamente.

### Ucayali Decide 2026

- Mantener fuentes oficiales, fecha de corte y carácter independiente.
- Verificar periódicamente enlaces a JNE y vigencia de información electoral.
- Añadir captura de filtros, ficha de candidatura y trazabilidad hacia la fuente.
- Evitar textos que sugieran afiliación institucional.

### Sistema Desayunos

- Identificarlo claramente como **proyecto académico**.
- Incorporar capturas de módulos y explicación de modelos de datos.
- Mostrar prácticas técnicas reales: migraciones, pruebas, análisis estático o control de inventario cuando el repositorio lo confirme.
- Facilitar instrucciones para reproducirlo localmente y declarar si no hay demo desplegada.

### Flores Amarillas

- Presentarlo como **experimento creativo con Three.js/WebGL**.
- Explicar controles, optimización y fallback de dispositivos sin WebGL.
- Ofrecer vista previa estática si el rendimiento del dispositivo no permite cargar 3D.

---

## 8. Terminal, comando rápido, animaciones y experiencias (P1)

### Terminal CLI

- Mantener la terminal como **función complementaria**, no navegación obligatoria.
- Añadir `help`/ayuda visible, errores claros y salida fácil.
- Controlar foco al abrir/cerrar, `Escape`, navegación por teclado y lectores de pantalla.
- No simular ejecución de comandos de sistema reales ni exponer información interna.
- Preferir comandos de navegación y descubrimiento (`help`, `projects`, `about`, `contact`, etc.).
- No hacer que terminal y barra de comandos compitan por el foco o aparezcan abiertos simultáneamente.

### Paleta de comandos (`⌘K` / `Ctrl+K`)

- Detectar atajos tanto en macOS como en Windows/Linux.
- Soportar flechas, Enter y Escape; mostrar estado de foco.
- No bloquear atajos predeterminados innecesariamente.
- Etiquetar campo, resultados y estado vacío correctamente.
- Asegurar que abra rutas correctas desde la portada **y** desde fichas internas.

### Telemetría / playground

- Indicar **«simulación»** persistentemente, no solo en una frase introductoria.
- Ofrecer botón **Pausar/Reanudar** realmente funcional.
- No disparar actualizaciones innecesarias cuando el elemento no es visible.
- Si hay JSON de ejemplo, describir su contrato como `mock`.
- Respetar la preferencia del sistema `prefers-reduced-motion`.

### Experiencia 3D y efectos

- Carga diferida de WebGL/Three.js cuando sea posible.
- Captura estática ligera antes de cargar la escena.
- Control visible para pausar animaciones.
- Evitar que animaciones o shaders comprometan desplazamiento, foco o batería del móvil.
- Mantener la alternativa sin animación con el mismo contenido relevante.

---

## 9. Responsive y experiencia móvil (P1, requiere pruebas)

### Matriz de prueba mínima

| Ancho | Verificar |
|---|---|
| 320 px | Menú, textos, botones y ausencia de desplazamiento horizontal |
| 375 px | Hero, tarjetas, terminal, imágenes |
| 390–430 px | Contraste, espaciados, enlaces y foco |
| 768 px | Reflujo tablet, navegación y grid |
| 1024 px | Cambio de layout e imágenes |
| 1440 px y más | Anchos máximos y buen uso del espacio |

### Pautas

- Objetivos táctiles cómodos; como mínimo comprobar criterios WCAG 2.2 para tamaños y separaciones según el contexto.
- No colocar tarjetas con texto ilegible por forzar varias columnas.
- Mantener `max-width` del contenido y longitudes de línea razonables.
- Evitar `100vw` cuando genere scroll horizontal por barras o padding.
- Usar imágenes responsivas (`srcset`/`sizes`) si hay múltiples tamaños.
- Asegurar que el menú móvil se puede abrir, cerrar y manejar con teclado.
- Verificar que terminal/playground no aparezcan antes que proyectos importantes en pantallas pequeñas.

**Aceptación:** [ ] No hay overflow horizontal ni interacción inaccesible en las resoluciones objetivo.

---

## 10. Accesibilidad (P1, requiere auditoría)

Establecer **WCAG 2.2 AA** como objetivo de evaluación, sin declarar conformidad hasta comprobarla.

- [ ] Un solo H1 descriptivo por página y jerarquía H2/H3 lógica.
- [ ] Enlace «Saltar al contenido» visible al recibir foco.
- [ ] Todos los botones, anclas, menús, terminal y modal usan teclado.
- [ ] Indicador de foco visible, no reemplazado solo por cambio de color.
- [ ] Estados de menú y controles con nombres accesibles, `aria-expanded`, `aria-controls` donde sea necesario.
- [ ] Etiquetas reales en formularios, mensajes de error asociados y validación clara.
- [ ] Contraste de texto normal ≥ 4.5:1 y grande ≥ 3:1, salvo excepciones previstas por WCAG.
- [ ] Imágenes informativas con `alt` descriptivo; decorativas con `alt=""`.
- [ ] Animaciones respetan `prefers-reduced-motion`.
- [ ] Medios 3D o efectos no ocultan la información funcional.
- [ ] Navegación por tabulador coherente y retorno de foco tras cerrar overlays.
- [ ] Revisión con axe DevTools / Lighthouse y una prueba manual de teclado; si es posible, lector de pantalla.

**Nota:** cumplir solo una puntuación Lighthouse no equivale a certificación WCAG.

---

## 11. Rendimiento y Core Web Vitals (P1, medir antes de optimizar)

**Objetivos orientativos para el percentil 75 de usuarios reales:**

| Métrica | Objetivo |
|---|---|
| LCP | ≤ 2,5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0,1 |

### Orden de optimización

1. Medir **antes** de cambiar: PageSpeed Insights, Lighthouse desktop/móvil y DevTools Performance.
2. Identificar imágenes pesadas, CSS/JS bloqueante y animaciones costosas.
3. Comprimir recursos gráficos (WebP/AVIF cuando corresponda), no usar PNG grandes para fotografías.
4. Definir dimensiones explícitas de imágenes y reservar espacio para evitar CLS.
5. Usar `loading="lazy"` para medios debajo del primer pliegue; **no** cargar diferidamente la imagen LCP si es crítica.
6. Diferir scripts no esenciales y dividir lógica pesada de 3D/terminal si la estructura lo permite.
7. Preconectar/preload de recursos **solo tras comprobar** beneficio real.
8. Minimizar animaciones continuas y operaciones de repintado frecuentes.
9. Usar fuentes con subconjuntos y pesos necesarios, respetando licencia.
10. Volver a medir y registrar antes/después.

**Aceptación:** [ ] No empeoran métricas y se documentan cambios con evidencia. No declarar puntuaciones si no se han medido.

---

## 12. SEO técnico y presentación al compartir (P1, requiere inspección de HTML)

- [ ] Título `<title>` **único** y descriptivo por página.
- [ ] Meta description específica en home y cada caso.
- [ ] `<html lang="es-PE">` si se adopta esa variante; revisar que el idioma coincida con el contenido.
- [ ] Enlace canonical absoluto correcto en GitHub Pages, incluyendo `/Perfil_Estudiantil.github.io/` hasta adoptar dominio propio.
- [ ] Open Graph y Twitter/X cards con imagen real de CD STUDIO, título y descripción por caso.
- [ ] `robots.txt`, `sitemap.xml` y navegación interna rastreable, según la arquitectura actual.
- [ ] Datos estructurados `Person` y/o `Organization` solo con campos veraces y cuando sean apropiados.
- [ ] URLs limpias, consistentes y sin redirecciones rotas.
- [ ] Favicon y social preview emplean **monograma B.3 aprobado**.
- [ ] Meta viewport y ausencia de bloqueo accidental de indexación.
- [ ] Revisar búsqueda de marca, 404 y enlaces externos.

**Ejemplo orientativo de metadata (adaptar URL absoluta e imagen realmente existente):**

```html
<title>CD STUDIO | Desarrollo de software con precisión y visión</title>
<meta name="description" content="Portafolio de CD STUDIO: sistemas web, integraciones y productos digitales desarrollados con enfoque en ingeniería y experiencia de usuario.">
<meta property="og:type" content="website">
<meta property="og:title" content="CD STUDIO | Software con precisión y visión">
<meta property="og:description" content="Conoce proyectos de software y experiencias digitales desarrolladas por CD STUDIO.">
```

No copiar metadatos idénticos en todas las fichas; personalizar según proyecto.

---

## 13. Confianza, seguridad y calidad de enlaces (P1)

- Revisar enlaces a demos, GitHub, redes y WhatsApp; si están rotos, corregir o retirar.
- En `target="_blank"` utilizar `rel="noopener noreferrer"` cuando corresponda.
- Verificar que los portales operativos enlazados (Castillo, etc.) tengan acceso protegido y no expongan datos privados.
- Asegurar que el repositorio del portafolio no contiene claves, tokens, credenciales ni información de clientes.
- No publicar rutas internas, detalles de despliegue sensibles ni secretos en case studies.
- Tratar entradas de terminal y playground como datos no confiables; evitar interpretar HTML o ejecutar código arbitrario.
- Revisar dependencias y configuración de hosting existente antes del despliegue.
- Asegurar enlaces de email con `mailto:` correcto y WhatsApp con URL válida.
- Comprobar que el texto «Código privado» no aparezca acompañado por CTA que prometa acceso a repositorio no público.

---

## 14. Conversión y contacto sin saturación (P1)

### Prioridades de CTA

1. CTA principal: **«Hablemos de tu proyecto»** (contacto directo real).
2. CTA secundario: **«Ver proyectos»**.
3. CTA contextual en casos: **«Ver demo»**, **«Ver código»**, **«Consultar solución»** según disponibilidad.

**Mejoras:**

- Usar la misma denominación para contacto en hero, footer y casos.
- Facilitar email y otra vía de contacto **sin obligar a usar una sola aplicación**.
- Formularios, si existen, deben incluir nombre, email, mensaje y política de tratamiento de datos aplicable.
- Si no hay backend de formularios, usar `mailto:` o enlace claro, no formulario decorativo que falle.
- Reducir CTAs repetidos que no aporten una decisión distinta.
- Explicar expectativas de respuesta con condiciones realistas.

**Aceptación:** [ ] Cualquier visitante puede contactar desde desktop y móvil sin errores ni pasos innecesarios.

---

## 15. GitHub y presencia profesional relacionada (P2)

- Completar *About* del repositorio `canales-abiertos`: descripción, website y topics.
- Añadir a los repositorios públicos que correspondan README con capturas, objetivo, stack, instalación y licencia.
- Mantener GitHub y web con información consistente (nombres, estados, fechas y enlaces).
- Crear/actualizar README de perfil con marca CD STUDIO y enlaces reales, sin cifras ficticias.
- Alinear banner y avatar de LinkedIn/GitHub con monograma B.3, respetando tamaños del soporte.
- Separar trabajos académicos de los servicios que se ofrecen comercialmente.
- Evaluar un dominio propio alineado a CD STUDIO; **verificar disponibilidad** antes de comprar. Mantener redirecciones/canonical al migrar.

---

## 16. Propuesta visual de componentes (sin rediseñar todo) (P2)

### Header

- Alto consistente, monograma + wordmark, estados hover/focus y menú móvil completo.
- Menú único reutilizable; no duplicar labels divergentes en seis páginas.
- Dar prioridad al CTA de contacto; terminal y búsqueda como acciones secundarias.

### Tarjeta de proyecto

- Imagen auténtica o visual relevante; proporción consistente.
- Etiqueta de tipo y estado; nombre; descripción de 1–2 líneas; tecnologías principales.
- Acciones explícitas y alineadas entre tarjetas.
- Interacciones hover sobrias; misma información disponible por teclado.

### Página de caso

- Hero de proyecto, ficha breve, problema, aporte, arquitectura, capturas, resultados verificables y enlaces.
- Índice discreto si el contenido crece; breadcrumb útil.
- Footer común y navegación «Anterior / Siguiente» si realmente ayuda.

### Footer

- Eslogan y wordmark aprobados.
- Enlaces coherentes, redes, email, copyright y estado del sitio si es verificable.

### Visualización 3D y API

- Contenedor de altura adaptable; opción de pausa y salida.
- Mensajes claros sobre demostración y fallback accesible.

---

## 17. Plan de implementación por iteraciones

### Sprint 0 — Línea base y seguridad (primero)

- [ ] Crear rama dedicada y guardar capturas previas en desktop/móvil.
- [ ] Inspeccionar estructura actual: HTML/CSS/JS/framework, compilación, rutas y despliegue.
- [ ] Registrar enlaces y assets existentes y comprobar funcionamiento.
- [ ] Correr pruebas disponibles y guardar resultados base.
- [ ] Localizar SVG B.3 del kit; confirmar que se usa en todos los lugares.

**Salida:** inventario técnico breve y respaldo de estado previo.

### Sprint 1 — Coherencia editorial P0

- [ ] Corregir números 01–06, en especial Canales Abiertos.
- [ ] Unificar español de Perú y microcopy.
- [ ] Unificar encabezado, anclas, footer y CTA.
- [ ] Etiquetar métricas y playground como simulación.
- [ ] Revisar garantías/plazos/promesas.
- [ ] Probar links desde home y casos.

**Salida:** sitio editorialmente consistente.

### Sprint 2 — UX, jerarquía y proyectos

- [ ] Reorganizar protagonismo de proyectos y labs.
- [ ] Refinar hero y servicios con casos concretos.
- [ ] Añadir «Mi contribución» en fichas.
- [ ] Incluir capturas reales anonimizadas y fuentes cuando proceda.
- [ ] Refinar tarjetas, CTA y navegación entre proyectos.

**Salida:** mejor comprensión de capacidades y pruebas de trabajo.

### Sprint 3 — Interacción, accesibilidad y móvil

- [ ] Optimizar terminal, paleta de comandos y controles de pausa.
- [ ] Validar teclado, foco, overlays, ARIA y reduced motion.
- [ ] Probar matriz de tamaños móviles/tablet/desktop.
- [ ] Corregir overflow, objetivos táctiles y contrastes.

**Salida:** interacciones accesibles y responsive estable.

### Sprint 4 — Rendimiento, SEO y publicación

- [ ] Lighthouse y PageSpeed: documentar antes/después.
- [ ] Optimizar imágenes, WebGL, fuentes y scripts.
- [ ] Verificar SEO, Open Graph, canonical y sitemap.
- [ ] Revisar links, seguridad básica y ausencia de secretos.
- [ ] Ejecutar build/tests y comprobar GitHub Pages desde URL pública.
- [ ] Registrar changelog y capturas finales.

**Salida:** publicación comprobada con evidencia técnica.

---

## 18. Matriz de aceptación general

| ID | Criterio verificable | Estado inicial |
|---|---|---|
| A01 | Numeración única y consistente en todas las fichas | Pendiente: problema confirmado |
| A02 | Español regional unificado | Pendiente: problema confirmado |
| A03 | Navegación y links iguales entre home/casos | Pendiente: problema confirmado |
| A04 | Simulaciones inequívocamente identificadas | Requiere ajuste/revisión |
| A05 | Se utilizan solo archivos oficiales del B.3 | Requiere revisión de implementación |
| A06 | Casos documentan aportes personales y evidencias reales | Mejora recomendada |
| A07 | Navegación accesible por teclado y móvil | No probado |
| A08 | Sin overflow a 320, 375, 768, 1024 y 1440 px | No probado |
| A09 | LCP / INP / CLS medidos | No probado |
| A10 | Metadata y preview sociales consistentes | No probado |
| A11 | Todos los enlaces públicos funcionan | No comprobado exhaustivamente |
| A12 | Build, tests y publicación sin regresiones | No probado |
| A13 | Información sensible ausente del sitio y repositorio | No auditado |

> No cambiar «No probado» por «Aprobado» sin evidencia (capturas, logs de test o mediciones).

---

## 19. Instrucciones maestras para Codex (copiar y pegar)

```text
OBJETIVO
Optimiza mi portafolio CD STUDIO existente publicado en:
https://christiandariva17.github.io/Perfil_Estudiantil.github.io/

CONTEXTO
Este repositorio contiene una web ya construida y publicada. NO debes reconstruirla
ni cambiar de stack por preferencia. Conserva diseño base, rutas, contenido,
funcionalidades que ya funcionan y despliegue actual.

BRANDING OBLIGATORIO
- Marca: CD STUDIO.
- Monograma: B.3 oficial del Kit Maestro v1.0; reutiliza el SVG EXACTO.
- Eslogan: Software con precisión y visión.
- Descriptor: Software Design & Development.
- Colores: #0F172A, #1D4ED8, #334155, #E2E8F0, #FFFFFF.
- Tipografías: Space Grotesk + Inter.
- Estilo: Precision Tech Premium; sobrio, elegante, accesible, profesional.

PASO 1 — DIAGNÓSTICO SIN MODIFICAR
Inspecciona el repositorio: estructura, stack, entrada principal,
componentes compartidos, páginas de proyectos, assets, scripts,
configuración de GitHub Pages y tests existentes.
Documenta qué problemas del archivo MD se confirman en el código.
No inventes rutas ni dependencias. Presenta una lista breve de archivos a modificar.

PASO 2 — IMPLEMENTACIÓN INCREMENTAL
Aplica primero P0 (numeración, español peruano, navegación, simulación,
compromisos). Luego P1 (hero, jerarquía de proyectos, casos y CTA),
seguido de accesibilidad/responsive, SEO y rendimiento.
Extrae datos repetidos a una sola fuente cuando sea compatible con el stack.
No borres proyectos, datos, enlaces públicos o interacciones sin justificación.
No inventes métricas, testimonios o pruebas.
No conviertas un componente simulado en una afirmación de servicio real.

PASO 3 — PRUEBAS Y CALIDAD
Ejecuta los comandos existentes de lint, test y build si están disponibles.
Comprueba navegación desde home y cada ficha, rutas relativas en GitHub Pages,
menú móvil, keyboard focus, overlays, links externos, accesibilidad y
funcionamiento al activar reduced motion.

PASO 4 — ENTREGA
Resume los cambios por archivo y por prioridad.
Entrega lista de pruebas realmente ejecutadas y su resultado.
Indica qué no pudiste comprobar o depende de información del propietario.
No declares éxito de métricas Lighthouse sin mediciones.
No publiques, fusiones ni cambies dominios sin autorización explícita.
No sustituyas el monograma B.3 por una reinterpretación.
```

---

## 20. Lista de revisión antes de desplegar

### Editorial
- [ ] Todo está en español peruano consistente.
- [ ] Los seis números/estados de proyectos coinciden.
- [ ] Las promesas de negocio son realizables y claras.
- [ ] Ningún elemento visual de ejemplo se presenta como medición real.

### Branding / UI
- [ ] Monograma B.3 correcto en header/favicon/social preview.
- [ ] Tipografías y paleta aprobadas.
- [ ] Diseño cómodo en móvil y desktop.
- [ ] CTA claros, no redundantes.

### Técnica
- [ ] Build y pruebas existentes pasan.
- [ ] Links y rutas funcionan en GitHub Pages (incluidas subrutas).
- [ ] Teclado, foco, reduced motion y terminal comprobados.
- [ ] Sin secretos ni datos privados expuestos.
- [ ] SEO y previews verificados en producción.
- [ ] Rendimiento medido y comparado con línea base.

### Documentación
- [ ] Registro de cambios implementados.
- [ ] Capturas de antes/después.
- [ ] Pendientes señalados de forma transparente.

---

## 21. Próximas mejoras evolutivas (solo después de P0/P1)

1. Analítica respetuosa con privacidad, solo si tiene un objetivo real y se cumple normativa aplicable.
2. Filtros por tipo/stack en proyectos, si el catálogo crece.
3. Más diagramas técnicos y artículos cortos sobre decisiones de ingeniería.
4. Versión bilingüe únicamente si hay audiencia y recursos para mantener ambas traducciones.
5. Dominio profesional con redirecciones y configuración SEO revisada.
6. Automatizar revisión de enlaces, lint/build y despliegue mediante workflow existente.
7. Preparar una página de CD STUDIO orientada a servicios cuando el estudio tenga oferta y condiciones comerciales definidas.

---

## 22. Definición de terminado (DoD)

La actualización se considera lista cuando **todas las tareas P0** están resueltas, los enlaces y las rutas publicadas funcionan, se ha validado la experiencia móvil y accesible, el monograma B.3 se mantiene fiel, los casos no publican información sensible y cualquier métrica mostrada como real cuenta con una fuente verificable. Las tareas P1/P2 pendientes deben quedar registradas sin atribuirles una finalización ficticia.

**Resultado esperado:** un portafolio que conserva la identidad y personalidad tecnológica de CD STUDIO pero comunica mejor las capacidades, demuestra trabajo auténtico y mantiene calidad técnica.

---

**CD STUDIO** · Software Design & Development  
*Software con precisión y visión.*
