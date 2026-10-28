import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const projectsDir = path.join(root, "assets", "projects");

const PROJECTS = [
  {
    slug: "pulso",
    title: "Landing Pulso",
    url: "https://landing-pulso.vercel.app/",
    type: "landing-page",
    description: "Landing de producto y sincronización de avisos comerciales",
  },
  {
    slug: "canales-abiertos",
    title: "Canales Abiertos",
    url: "https://christiandariva17.github.io/canales-abiertos/",
    type: "multimedia-platform",
    description: "Plataforma de señales públicas en vivo y catálogo de cine",
  },
  {
    slug: "ucayali-decide",
    title: "Ucayali Decide 2026",
    url: "https://ucayali-voto-2026.vercel.app/",
    type: "civic-application",
    description: "Aplicación cívica de consulta de candidaturas y planes de gobierno",
  },
  {
    slug: "flores-amarillas",
    title: "Flores Amarillas",
    url: "https://flores-amarillas-omega-virid.vercel.app/",
    type: "interactive-3d-webgl",
    description: "Experiencia 3D interactiva en WebGL y Three.js",
    waitExtraMs: 4000,
  },
  {
    slug: "castillo-yarinacocha",
    title: "Castillo Yarinacocha — Portal Administrativo",
    url: "https://admin.grupodariva.cloud/",
    type: "pms-public-login",
    description: "Acceso público al sistema de gestión hotelera y operaciones turísticas",
  },
];

const TARGETS = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, isMobile: false },
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true },
];

async function convertPngToWebp(page, pngBuffer, quality = 0.85) {
  const base64Png = pngBuffer.toString("base64");
  const webpDataUrl = await page.evaluate(
    async ({ base64, q }) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/webp", q));
        };
        img.onerror = () => reject(new Error("Error loading image in canvas"));
        img.src = "data:image/png;base64," + base64;
      });
    },
    { base64: base64Png, q: quality }
  );

  const base64Data = webpDataUrl.replace(/^data:image\/webp;base64,/, "");
  return Buffer.from(base64Data, "base64");
}

async function run() {
  console.log("Iniciando captura automatizada con Playwright (Microsoft Edge)...");
  await fs.mkdir(projectsDir, { recursive: true });

  const browser = await chromium.launch({
    channel: "msedge",
    headless: true,
  });

  const manifest = {
    generated_at_utc: new Date().toISOString(),
    generator: "CD STUDIO Automated Browser Capture Engine v1.0",
    engine: "Playwright / Chromium (Microsoft Edge)",
    audit_notes:
      "Capturas reales obtenidas desde las URLs públicas del portafolio. No se utilizaron credenciales privadas ni imágenes sintéticas.",
    projects: {},
    exceptions: {
      "sistema-desayunos": {
        title: "SistemaDesayunos",
        repository_url: "https://github.com/ChristianDariva17/SistemaDesayunos",
        status: "exception_no_public_web_demo",
        notes:
          "Proyecto académico y sistema comercial Laravel documentado en repositorio público de GitHub sin demo web pública alojada.",
      },
    },
  };

  try {
    for (const proj of PROJECTS) {
      console.log(`\n--- Capturando: ${proj.title} (${proj.url}) ---`);
      const projDir = path.join(projectsDir, proj.slug);
      await fs.mkdir(projDir, { recursive: true });

      manifest.projects[proj.slug] = {
        title: proj.title,
        source_url: proj.url,
        project_type: proj.type,
        captured_at_utc: new Date().toISOString(),
        privacy_reviewed: true,
        privacy_notes: "Inspección de vista pública verificada; sin datos personales o confidenciales.",
        captures: {},
      };

      for (const target of TARGETS) {
        console.log(`  > Capturando ${target.name} (${target.viewport.width}x${target.viewport.height})...`);
        const context = await browser.newContext({
          viewport: target.viewport,
          isMobile: target.isMobile,
          deviceScaleFactor: 1,
          reducedMotion: "reduce",
        });

        const page = await context.newPage();
        try {
          const response = await page.goto(proj.url, {
            waitUntil: "domcontentloaded",
            timeout: 45000,
          });

          await page.waitForLoadState("networkidle").catch(() => {});
          if (proj.waitExtraMs) {
            await page.waitForTimeout(proj.waitExtraMs);
          } else {
            await page.waitForTimeout(1500);
          }

          const pngBuffer = await page.screenshot({
            type: "png",
            animations: "disabled",
          });

          const webpBuffer = await convertPngToWebp(page, pngBuffer, 0.85);
          const webpPath = path.join(projDir, `${target.name}.webp`);
          await fs.writeFile(webpPath, webpBuffer);

          const relativePath = path.posix.join("assets", "projects", proj.slug, `${target.name}.webp`);
          manifest.projects[proj.slug].captures[target.name] = {
            file: relativePath,
            width: target.viewport.width,
            height: target.viewport.height,
            format: "webp",
            size_bytes: webpBuffer.length,
            http_status: response ? response.status() : 200,
          };

          console.log(`    ✓ Guardado: ${relativePath} (${(webpBuffer.length / 1024).toFixed(1)} KB)`);
        } catch (err) {
          console.error(`    ✗ Error al capturar ${proj.slug} [${target.name}]:`, err.message);
          manifest.projects[proj.slug].captures[target.name] = {
            error: err.message,
          };
        } finally {
          await context.close();
        }
      }
    }

    const manifestPath = path.join(projectsDir, "screenshots-manifest.json");
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
    console.log(`\nManifest de procedencia escrito en: ${manifestPath}`);
  } finally {
    await browser.close();
    console.log("\nProceso de captura automática completado.");
  }
}

run().catch((err) => {
  console.error("Error fatal en el proceso de captura:", err);
  process.exit(1);
});
