// generate-blog-images-kieai.js
// Generates 11 missing blog cover images using Kie.ai (nano-banana-pro)
// Usage: node scripts/generate-blog-images-kieai.js

const https = require("https");
const http  = require("http");
const fs    = require("fs");
const path  = require("path");
const { randomUUID } = require("crypto");

const API_KEY    = "212ca1f88ca99802e14bd68b8499693c";
const OUTPUT_DIR = path.join(__dirname, "../public/blog");

const articles = [
  { filename: "armonizacion-facial.jpg",         prompt: "Elegant woman receiving professional facial harmonization treatment at a luxury medical clinic in Puerto Vallarta Mexico, hyaluronic acid filler procedure, soft clinical lighting, high-end aesthetic medicine setting, warm skin tones, photorealistic, wide landscape shot" },
  { filename: "dental-implants-cost.jpg",         prompt: "Professional dentist placing a dental implant in a modern clinic in Puerto Vallarta Mexico, close-up of beautiful smile with dental work, bright clinical lighting, high-tech dental equipment, photorealistic, wide landscape shot" },
  { filename: "implantes-dentales-precio.jpg",    prompt: "Dental implant titanium model and dental tools on a modern clinic table in Mexico, professional dental office, clean clinical aesthetic with warm light accents, photorealistic, wide landscape shot" },
  { filename: "invisalign-process.jpg",           prompt: "Clear Invisalign aligners held gently in hands, transparent orthodontic braces, modern orthodontist office background, clean professional aesthetic, soft studio lighting, photorealistic, wide landscape shot" },
  { filename: "invisalign-vs-brackets.jpg",       prompt: "Split comparison showing clear Invisalign aligner next to traditional metal braces on a dental model, orthodontic comparison, modern dental office background, clean clinical setting, photorealistic, wide landscape shot" },
  { filename: "orthodontist-children.jpg",        prompt: "Happy child smiling at orthodontist appointment, friendly pediatric dentist examining a child with colorful braces, welcoming dental clinic, warm colors, photorealistic, wide landscape shot" },
  { filename: "botox-precio.jpg",                 prompt: "Aesthetic medicine doctor carefully administering botox injection to a patient forehead in a professional medical setting in Mexico, soft clinical lighting, natural beauty enhancement concept, photorealistic, wide landscape shot" },
  { filename: "bioidentical-hrt.jpg",             prompt: "Confident mature woman in her 50s at a wellness consultation with a compassionate doctor, bioidentical hormone therapy concept, natural health and vitality, modern medical office in Puerto Vallarta Mexico, photorealistic, wide landscape shot" },
  { filename: "ultrasonido-3d-4d.jpg",            prompt: "Expectant mother looking with joy at a 3D ultrasound image of her baby, modern obstetric ultrasound equipment, warm clinical setting in Mexico, beautiful intimate pregnancy moment, photorealistic, wide landscape shot" },
  { filename: "diabetes-expat.jpg",               prompt: "Expat patient testing blood glucose with glucometer at a diabetes management consultation with doctor in Puerto Vallarta Mexico, modern medical office, caring professional setting, photorealistic, wide landscape shot" },
  { filename: "nutrition-expats.jpg",             prompt: "Health-conscious expat woman consulting with a nutritionist in a sunny modern clinic in Puerto Vallarta Mexico, healthy lifestyle concept, fresh colorful tropical fruits on desk, wellness consultation, photorealistic, wide landscape shot" },
];

function apiPost(endpoint, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const options = {
      hostname: "api.kie.ai",
      path: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Length": Buffer.byteLength(data),
      }
    };
    const req = https.request(options, (res) => {
      let b = "";
      res.on("data", d => b += d);
      res.on("end", () => { try { resolve(JSON.parse(b)); } catch { resolve(b); } });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

function apiGet(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.kie.ai",
      path: endpoint,
      method: "GET",
      headers: { "Authorization": `Bearer ${API_KEY}` }
    };
    https.get({ ...options }, (res) => {
      let b = "";
      res.on("data", d => b += d);
      res.on("end", () => { try { resolve(JSON.parse(b)); } catch { resolve(b); } });
    }).on("error", reject);
  });
}

function downloadFile(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error("Too many redirects"));
    const proto = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if ([301, 302, 307].includes(res.statusCode)) {
        file.close(); try { fs.unlinkSync(dest); } catch {}
        return downloadFile(res.headers.location, dest, redirects + 1).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { try { fs.unlinkSync(dest); } catch {}; reject(err); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function generate(article) {
  const dest = path.join(OUTPUT_DIR, article.filename);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 20000) {
    console.log(`  ✓ Already exists: ${article.filename}`);
    return true;
  }

  console.log(`  → Submitting: ${article.filename}...`);
  const taskUUID = randomUUID();
  const createRes = await apiPost("/api/v1/jobs/createTask", {
    model: "nano-banana-pro",
    taskUUID,
    input: {
      prompt: article.prompt,
      width: 1792,
      height: 1008,
    }
  });

  if (createRes.code !== 200) {
    console.error(`  ✗ Create failed: ${JSON.stringify(createRes).slice(0, 200)}`);
    return false;
  }

  const taskId = createRes.data.taskId;
  console.log(`    taskId: ${taskId}`);

  // Poll until done — up to 10 minutes
  for (let i = 0; i < 120; i++) {
    await sleep(5000);
    const info = await apiGet(`/api/v1/jobs/recordInfo?taskId=${taskId}`);
    const state = info?.data?.state;
    let outputUrl = info?.data?.output?.[0]?.url || info?.data?.resultUrl || info?.data?.imageUrl;

    // Parse resultJson if present
    if (!outputUrl && info?.data?.resultJson) {
      try {
        const rj = JSON.parse(info.data.resultJson);
        outputUrl = rj?.resultUrls?.[0] || rj?.url;
      } catch {}
    }

    if (outputUrl) {
      console.log(`    Downloading...`);
      await downloadFile(outputUrl, dest);
      const size = fs.statSync(dest).size;
      console.log(`  ✅ ${article.filename} (${Math.round(size / 1024)}KB)`);
      return true;
    }

    if (state === "failed" || state === "error") {
      console.error(`  ✗ Task failed: ${JSON.stringify(info).slice(0, 300)}`);
      return false;
    }

    if (i % 6 === 0) console.log(`    Waiting... (${i * 5}s, state: ${state})`);
  }

  console.error(`  ✗ Timed out after 10 min: ${article.filename}`);
  return false;
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const missing = articles.filter(a => {
    const dest = path.join(OUTPUT_DIR, a.filename);
    return !fs.existsSync(dest) || fs.statSync(dest).size <= 20000;
  });

  console.log(`\n🎨 Generating ${missing.length} missing images with Kie.ai (nano-banana-pro)...\n`);

  let ok = 0;
  for (const article of missing) {
    const result = await generate(article);
    if (result) ok++;
    await sleep(2000);
  }

  console.log(`\n✅ Done! ${ok}/${missing.length} images saved to public/blog/`);
}

main().catch(console.error);
