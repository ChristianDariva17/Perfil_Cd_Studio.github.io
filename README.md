# CD STUDIO — Portafolio Profesional

> **Software con precisión y visión.**  
> Portafolio de ingeniería de software, arquitectura de sistemas y aplicaciones digitales creado por Christian Dariva en Pucallpa, Perú.

[![Quality CI](https://github.com/ChristianDariva17/Perfil_Estudiantil.github.io/actions/workflows/quality.yml/badge.svg)](https://github.com/ChristianDariva17/Perfil_Estudiantil.github.io/actions/workflows/quality.yml)
[![Web](https://img.shields.io/badge/Web-christiandariva17.github.io-1d4ed8?style=flat&logo=github)](https://christiandariva17.github.io/Perfil_Estudiantil.github.io/)
[![Brand](https://img.shields.io/badge/Brand-CD%20STUDIO%20B.3-0f172a?style=flat)](https://christiandariva17.github.io/Perfil_Estudiantil.github.io/)

---

## 🌐 Despliegue en Producción

- **Sitio Web Oficial:** [https://christiandariva17.github.io/Perfil_Estudiantil.github.io/](https://christiandariva17.github.io/Perfil_Estudiantil.github.io/)
- **Contacto Profesional:** [cristiandariva8@gmail.com](mailto:cristiandariva8@gmail.com) · [LinkedIn](https://www.linkedin.com/in/christiandarivasoria/)

---

## 🏛️ Identidad y Principios Técnicos

CD STUDIO combina la rigurosidad técnica de sistemas empresariales con una experiencia visual de vanguardia (_Precision Tech Premium_):

1. **Arquitectura Nativa:** 100% Vanilla HTML5 semántico, CSS3 modular con variables personalizadas y JavaScript moderno (ES6+), sin sobrecarga innecesaria de frameworks.
2. **Identidad B.3 Oficial:** Monograma corporativo con corte geométrico y espacio negativo C-D verificado contra el kit maestro.
3. **Evidencias Auténticas:** Cero métricas ficticias y cero capturas sintéticas; todas las imágenes provienen de capturas reales de navegador con trazabilidad en [`assets/projects/screenshots-manifest.json`](assets/projects/screenshots-manifest.json).
4. **Seguridad y Accesibilidad:** Conforme a WCAG 2.2 AA, navegación completa por teclado, trampas de foco en diálogos modales, soporte para `prefers-reduced-motion` y prevención estricta de DOM XSS.

---

## 💼 Directorio de Proyectos

### Sistemas de Software & Ingeniería

|  Caso  | Proyecto                 | Especialidad                        | Stack Tecnológico                                                   | Estado Verificable                                                                       |
| :----: | :----------------------- | :---------------------------------- | :------------------------------------------------------------------ | :--------------------------------------------------------------------------------------- |
| **01** | **Castillo Yarinacocha** | PMS & ERP Hotelero Integral         | Node.js, TS, PostgreSQL, Redis TLS, WebSockets, Docker, Hardware ZK | En producción real ([admin.grupodariva.cloud](https://admin.grupodariva.cloud/))         |
| **02** | **Canales Abiertos**     | Streaming & Multimedia Pública      | JavaScript ES6+, hls.js, M3U, GitHub Pages                          | Demo en vivo ([canales-abiertos](https://christiandariva17.github.io/canales-abiertos/)) |
| **03** | **Landing Pulso**        | Producto Digital & Conversión       | UX/UI, JavaScript, Vercel                                           | Demo en vivo ([landing-pulso](https://landing-pulso.vercel.app/))                        |
| **04** | **Ucayali Decide 2026**  | Plataforma Cívica de Datos Abiertos | JavaScript nativo, APIs públicas del JNE                            | Demo en vivo ([ucayali-voto-2026](https://ucayali-voto-2026.vercel.app/))                |
| **05** | **SistemaDesayunos**     | Gestión Comercial & Operaciones     | Laravel 12, PHP, MySQL, Blade, Vite                                 | Repositorio auditado ([GitHub](https://github.com/ChristianDariva17/SistemaDesayunos))   |

### Laboratorio Creativo & Gráficos 3D

| Identificador | Proyecto             | Especialidad                     | Stack Tecnológico                       | Demostración                                                                  |
| :-----------: | :------------------- | :------------------------------- | :-------------------------------------- | :---------------------------------------------------------------------------- |
|  **LAB 01**   | **Flores Amarillas** | Jardín Procedural Interactivo 3D | Three.js, WebGL, Shader Arts, Web Audio | Demo interactiva ([Vercel](https://flores-amarillas-omega-virid.vercel.app/)) |

---

## 🛠️ Herramientas de Calidad y Verificación

El proyecto cuenta con un pipeline automatizado de calidad:

```bash
# Ejecutar suite completa de validación (Contenido, HTML y formato)
npm run quality

# Validar estándares HTML5
npm run quality:html

# Verificar formato con Prettier
npm run quality:format

# Ejecutar auditoría Lighthouse CI
npm run quality:lighthouse

# Capturar pantallas de proyectos en tiempo real (Playwright + Edge)
node scripts/capture-all-projects.mjs
```

---

## 📄 Licencia

© 2026 Christian Dariva · **CD STUDIO**. Todos los derechos reservados.
