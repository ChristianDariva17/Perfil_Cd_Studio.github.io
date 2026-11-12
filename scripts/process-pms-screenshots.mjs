import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const images = [
  {
    name: "pms-dashboard.webp",
    source: "C:/Users/crist/.gemini/antigravity/brain/1f614cbf-393b-4302-bddc-2f574c206688/.user_uploaded/media_1794487300843_f90f1ac9.jpg",
  },
  {
    name: "pms-habitaciones-rack.webp",
    source: "C:/Users/crist/.gemini/antigravity/brain/1f614cbf-393b-4302-bddc-2f574c206688/.user_uploaded/media_1794487300878_1cdaef13.jpg",
  },
  {
    name: "pms-kds-cocina.webp",
    source: "C:/Users/crist/.gemini/antigravity/brain/1f614cbf-393b-4302-bddc-2f574c206688/.user_uploaded/media_1794487300879_00194f57.jpg",
  },
  {
    name: "pms-caja-turnos.webp",
    source: "C:/Users/crist/.gemini/antigravity/brain/1f614cbf-393b-4302-bddc-2f574c206688/.user_uploaded/media_1794487300849_a67448dd.jpg",
  },
  {
    name: "pms-reservas-huespedes.webp",
    source: "C:/Users/crist/.gemini/antigravity/brain/1f614cbf-393b-4302-bddc-2f574c206688/.user_uploaded/media_1794487300839_e8d5d121.jpg",
  }
];

const destDir = path.resolve("assets/projects/castillo-yarinacocha");

async function run() {
  const browser = await chromium.launch({ channel: "msedge" });
  for (const item of images) {
    const page = await browser.newPage();
    const fileUrl = `file:///${item.source.replace(/\\/g, "/")}`;
    await page.goto(fileUrl);
    const imgLocator = page.locator("img");
    await imgLocator.waitFor({ state: "visible" });

    const outPath = path.join(destDir, item.name);
    await imgLocator.screenshot({
      path: outPath,
      type: "webp",
      quality: 92
    });
    console.log(`Generated: ${outPath} (${fs.statSync(outPath).size} bytes)`);
    await page.close();
  }
  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
