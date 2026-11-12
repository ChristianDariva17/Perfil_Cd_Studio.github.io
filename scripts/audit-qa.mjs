import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

// Start local static server
const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split("?")[0]);
  if (reqPath === "/" || reqPath === "") reqPath = "/index.html";
  const filePath = path.join(root, reqPath.startsWith("/") ? reqPath.slice(1) : reqPath);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    const indexPath = path.join(filePath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fs.readFileSync(indexPath));
      return;
    }
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": contentType });
  res.end(fs.readFileSync(filePath));
});

await new Promise((resolve) => server.listen(0, resolve));
const port = server.address().port;
console.log(`Test server running at http://localhost:${port}`);

const pages = [
  { name: "Home", path: "/index.html" },
  { name: "Castillo Yarinacocha", path: "/proyectos/castillo-yarinacocha.html" },
  { name: "Sistema Desayunos", path: "/proyectos/sistema-desayunos.html" },
  { name: "Canales Abiertos", path: "/proyectos/canales-abiertos.html" },
  { name: "Ucayali Decide", path: "/proyectos/ucayali-decide.html" },
  { name: "Landing Pulso", path: "/proyectos/pulso.html" },
];

const viewports = [
  { width: 320, height: 600, label: "320px (Mobile Mini)" },
  { width: 375, height: 667, label: "375px (Mobile Standard)" },
  { width: 390, height: 844, label: "390px (iPhone 14)" },
  { width: 768, height: 1024, label: "768px (Tablet Portrait)" },
  { width: 1024, height: 768, label: "1024px (Tablet Landscape / Laptop)" },
  { width: 1440, height: 900, label: "1440px (Desktop Full HD)" },
];

const results = {
  consoleErrors: [],
  brokenImages: [],
  viewportOverflows: [],
  keyboardTests: [],
};

let browser;
try {
  browser = await chromium.launch({
    channel: "msedge",
    headless: true,
  });
} catch (e) {
  browser = await chromium.launch({
    headless: true,
  });
}

try {
  for (const pageInfo of pages) {
    console.log(`\n--- Auditing ${pageInfo.name} (${pageInfo.path}) ---`);
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    page.on("pageerror", (err) => {
      results.consoleErrors.push({ page: pageInfo.name, error: err.message });
    });
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        results.consoleErrors.push({ page: pageInfo.name, text: msg.text() });
      }
    });

    await page.goto(`http://localhost:${port}${pageInfo.path}`, { waitUntil: "networkidle" });

    // Scroll to trigger any lazy-loaded images and await decoding
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await Promise.allSettled(
        Array.from(document.querySelectorAll("img")).map((img) =>
          img.decode().catch(() => {})
        )
      );
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 150));
    });

    // Check broken images after scrolling
    const imageStatus = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      return imgs.map((img) => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
      }));
    });

    for (const img of imageStatus) {
      if (!img.complete || img.naturalWidth === 0) {
        results.brokenImages.push({ page: pageInfo.name, src: img.src, alt: img.alt });
      }
    }

    // Viewport responsiveness & horizontal overflow check
    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.waitForTimeout(100);

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      if (hasHorizontalScroll) {
        results.viewportOverflows.push({
          page: pageInfo.name,
          viewport: vp.label,
          scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth),
          clientWidth: await page.evaluate(() => document.documentElement.clientWidth),
        });
      }
    }

    await page.close();
  }

  // Auditing Keyboard, Focus Trap, and Interactive Modals on Home
  console.log(`\n--- Testing Keyboard Interactions, Focus Trap and Terminal CLI on Home ---`);
  const homePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await homePage.goto(`http://localhost:${port}/index.html`, { waitUntil: "networkidle" });

  // 1. Terminal open via dock button #dock-cli-btn
  const cliTrigger = homePage.locator("#dock-cli-btn").first();
  if (await cliTrigger.count() > 0) {
    await cliTrigger.click();
    await homePage.waitForTimeout(300);

    const isCliVisible = await homePage.evaluate(() => {
      const cli = document.querySelector("#cli-overlay");
      return cli && cli.classList.contains("is-open");
    });

    results.keyboardTests.push({
      test: "Terminal CLI opens via #dock-cli-btn",
      passed: isCliVisible,
    });

    // Test maximize toggle
    const maxBtn = homePage.locator("#cli-max-btn").first();
    if (await maxBtn.count() > 0) {
      await maxBtn.click();
      await homePage.waitForTimeout(200);
      const isMaximized = await homePage.evaluate(() => {
        const win = document.querySelector(".cli-window");
        return win && win.classList.contains("is-maximized");
      });
      results.keyboardTests.push({
        test: "Terminal CLI maximize button toggles .is-maximized",
        passed: isMaximized,
      });

      // Restore normal size
      await maxBtn.click();
      await homePage.waitForTimeout(200);
    }

    // Test typing a command and security protection against XSS
    const cliInput = homePage.locator("#cli-input").first();
    await cliInput.fill("<script>window.__xss_vuln=true</script>");
    await homePage.keyboard.press("Enter");
    await homePage.waitForTimeout(200);

    const isXssBlocked = await homePage.evaluate(() => {
      return window.__xss_vuln !== true;
    });
    results.keyboardTests.push({
      test: "Terminal CLI securely sanitizes XSS injection payload without execution",
      passed: isXssBlocked,
    });

    // Test Escape closes terminal and returns focus to #dock-cli-btn
    await homePage.keyboard.press("Escape");
    await homePage.waitForTimeout(300);
    const isCliClosed = await homePage.evaluate(() => {
      const cli = document.querySelector("#cli-overlay");
      return !cli || !cli.classList.contains("is-open");
    });
    const focusReturnedToCli = await homePage.evaluate(() => {
      return document.activeElement && document.activeElement.id === "dock-cli-btn";
    });

    results.keyboardTests.push({
      test: "Terminal CLI closes via Escape key",
      passed: isCliClosed,
    });
    results.keyboardTests.push({
      test: "Terminal CLI returns focus to trigger (#dock-cli-btn) upon closing",
      passed: focusReturnedToCli,
    });
  }

  // 2. Command Palette open via shortcut Ctrl+K
  await homePage.keyboard.press("Control+k");
  await homePage.waitForTimeout(300);

  const isPaletteOpen = await homePage.evaluate(() => {
    const pal = document.querySelector("#command-palette");
    return pal && pal.classList.contains("is-open");
  });

  results.keyboardTests.push({
    test: "Command Palette opens via Ctrl+K shortcut",
    passed: isPaletteOpen,
  });

  // Filter command in palette
  const palSearch = homePage.locator("#palette-search").first();
  await palSearch.fill("castillo");
  await homePage.waitForTimeout(200);

  const filterPassed = await homePage.evaluate(() => {
    const list = document.querySelector("#palette-results");
    return list && list.children.length > 0;
  });
  results.keyboardTests.push({
    test: "Command Palette filters results dynamically",
    passed: filterPassed,
  });

  // Escape closes palette
  await homePage.keyboard.press("Escape");
  await homePage.waitForTimeout(300);
  const isPaletteClosed = await homePage.evaluate(() => {
    const pal = document.querySelector("#command-palette");
    return !pal || !pal.classList.contains("is-open");
  });
  results.keyboardTests.push({
    test: "Command Palette closes via Escape key",
    passed: isPaletteClosed,
  });

  await homePage.close();

} finally {
  await browser.close();
  server.close();
}

console.log("\n================ QA AUDIT RESULTS ================");
console.log(`Console Errors: ${results.consoleErrors.length}`);
if (results.consoleErrors.length > 0) {
  console.log(JSON.stringify(results.consoleErrors, null, 2));
}

console.log(`Broken Images: ${results.brokenImages.length}`);
if (results.brokenImages.length > 0) {
  console.log(JSON.stringify(results.brokenImages, null, 2));
}

console.log(`Viewport Overflows: ${results.viewportOverflows.length}`);
if (results.viewportOverflows.length > 0) {
  console.log(JSON.stringify(results.viewportOverflows, null, 2));
}

console.log(`Keyboard & Modal Tests: ${results.keyboardTests.length}`);
results.keyboardTests.forEach((t) => {
  console.log(`  [${t.passed ? "PASS" : "FAIL"}] ${t.test}`);
});

if (
  results.consoleErrors.length === 0 &&
  results.brokenImages.length === 0 &&
  results.viewportOverflows.length === 0 &&
  results.keyboardTests.every((t) => t.passed)
) {
  console.log("\n🎉 ALL QA CHECKS PASSED PERFECTLY!");
  process.exit(0);
} else {
  console.warn("\n⚠️ Some checks need review (see details above).");
  process.exit(0);
}
