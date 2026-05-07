// generate-blog-images-v2.js
// Phase 1: Submit all 11 missing images as tasks simultaneously
// Phase 2: Poll all tasks in parallel indefinitely until all complete
// No per-image timeout — waits as long as Kie.ai needs

const https = require("https");
const http  = require("http");
const fs    = require("fs");
const path  = require("path");

const API_KEY    = "212ca1f88ca99802e14bd68b8499693c";
const OUTPUT_DIR = path.join(__dirname, "../public/blog");
const STATE_FILE = path.join(__dirname, "../.kie-tasks.json");

const articles = [
  { filename: "armonizacion-facial.jpg",          prompt: "Elegant woman receiving professional facial harmonization treatment at a luxury medical clinic in Puerto Vallarta Mexico, hyaluronic acid filler procedure, soft clinical lighting, photorealistic" },
  { filename: "dental-implants-cost.jpg",         prompt: "Professional dentist placing a dental implant in a modern clinic in Puerto Vallarta Mexico, close-up of beautiful smile with dental work, bright clinical lighting, photorealistic" },
  { filename: "implantes-dentales-precio.jpg",    prompt: "Dental implant model and dental tools on a modern clinic table, professional dental office in Mexico, clean clinical aesthetic with warm accents, photorealistic" },
  { filename: "invisalign-process.jpg",           prompt: "Clear Invisalign aligners held in hand, transparent orthodontic braces, modern orthodontist office background, clean professional aesthetic, soft lighting, photorealistic" },
  { filename: "invisalign-vs-brackets.jpg",       prompt: "Split comparison showing clear Invisalign aligner next to traditional metal braces on dental model, orthodontic comparison, modern dental office, photorealistic" },
  { filename: "orthodontist-children.jpg",        prompt: "Happy child at orthodontist appointment, friendly pediatric dentist examining a child's smile, colorful and welcoming dental clinic, parents in background, photorealistic" },
  { filename: "botox-precio.jpg",                 prompt: "Aesthetic medicine doctor carefully administering botox injection to patient forehead, professional medical setting, soft clinical lighting, natural beauty enhancement, photorealistic" },
  { filename: "bioidentical-hrt.jpg",             prompt: "Confident mature woman in her 50s at a wellness consultation with a doctor, hormone therapy concept, natural health and vitality, modern medical office in Mexico, photorealistic" },
  { filename: "ultrasonido-3d-4d.jpg",            prompt: "Expectant mother looking at 3D ultrasound image of her baby with joyful expression, modern obstetric ultrasound equipment, warm clinical setting, beautiful pregnancy moment, photorealistic" },
  { filename: "diabetes-expat.jpg",               prompt: "Expat patient testing blood glucose with glucometer, diabetes management consultation with doctor in Puerto Vallarta Mexico, modern medical office, caring professional setting, photorealistic" },
  { filename: "nutrition-expats.jpg",             prompt: "Health-conscious expat woman consulting with nutritionist in a sunny modern clinic, healthy lifestyle concept, fresh tropical fruits, wellness consultation in Puerto Vallarta Mexico, photorealistic" },
];

function post(url, data, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const opts = { hostname: u.hostname, path: u.pathname + u.search, method: "POST", headers: { "Content-Type": "application/json", ...headers } };
    const req = https.request(opts, (res) => { let b = ""; res.on("data", d => b += d); res.on("end", () => { try { resolve(JSON.parse(b)); } catch { resolve(b); } }); });
    req.on("error", reject);
    req.write(JSON.stringify(data));
    req.end();
  });
}

function get(url, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const opts = { hostname: u.hostname, path: u.pathname + u.search, method: "GET", headers };
    const req = https.request(opts, (res) => { let b = ""; res.on("data", d => b += d); res.on("end", () => { try { resolve(JSON.parse(b)); } catch { resolve(b); } }); });
    req.on("error", reject);
    req.end();
  });
}

function downloadFile(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error("Too many redirects"));
    const proto = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, (res) => {
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

async function submitAll(pending) {
  const tasks = {};
  for (const a of pending) {
    console.log(`  → Submitting: ${a.filename}`);
    try {
      const r = await post("https://api.kie.ai/api/v1/jobs/createTask", {
        model: "nano-banana-pro", taskType: "txt2img",
        input: { prompt: a.prompt, negativePrompt: "text, watermark, logo, blurry, low quality, distorted, ugly, cartoon", width: 1280, height: 720, steps: 30 }
      }, { Authorization: `Bearer ${API_KEY}` });
      const taskId = r?.data?.taskId || r?.taskId;
      if (taskId) {
        tasks[taskId] = { filename: a.filename, status: "pending" };
        console.log(`     taskId: ${taskId}`);
      } else {
        console.error(`  ✗ No taskId: ${JSON.stringify(r).slice(0, 150)}`);
      }
    } catch (e) {
      console.error(`  ✗ Submit error ${a.filename}: ${e.message}`);
    }
    await sleep(1000);
  }
  return tasks;
}

async function pollAll(tasks) {
  const auth = { Authorization: `Bearer ${API_KEY}` };
  let remaining = Object.keys(tasks).filter(id => tasks[id].status === "pending");
  let round = 0;

  while (remaining.length > 0) {
    round++;
    process.stdout.write(`\r  [${new Date().toLocaleTimeString()}] Polling ${remaining.length} tasks (round ${round})...    `);

    for (const taskId of [...remaining]) {
      try {
        const info = await get(`https://api.kie.ai/api/v1/jobs/recordInfo?taskId=${taskId}`, auth);
        const status = info?.data?.status || info?.status;
        const images = info?.data?.output?.images || info?.output?.images || [];

        if (status === "SUCCESS" || status === "COMPLETED" || images.length > 0) {
          const imgUrl = images[0]?.url || images[0];
          const { filename } = tasks[taskId];
          const dest = path.join(OUTPUT_DIR, filename);
          process.stdout.write(`\n`);
          console.log(`  ↓ Downloading ${filename}...`);
          await downloadFile(imgUrl, dest);
          console.log(`  ✅ Saved: ${filename} (${Math.round(fs.statSync(dest).size / 1024)}KB)`);
          tasks[taskId].status = "done";
          remaining = remaining.filter(id => id !== taskId);
        } else if (status === "FAILED" || status === "ERROR") {
          process.stdout.write(`\n`);
          console.error(`  ✗ Failed: ${tasks[taskId].filename}`);
          tasks[taskId].status = "failed";
          remaining = remaining.filter(id => id !== taskId);
        }
      } catch (e) { /* ignore transient errors */ }
    }

    if (remaining.length > 0) await sleep(15000); // poll every 15s
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Determine which files are missing
  const pending = articles.filter(a => {
    const dest = path.join(OUTPUT_DIR, a.filename);
    const exists = fs.existsSync(dest) && fs.statSync(dest).size > 20000;
    if (exists) console.log(`  ✓ Already exists: ${a.filename}`);
    return !exists;
  });

  if (pending.length === 0) {
    console.log("\n✅ All images already exist!");
    return;
  }

  console.log(`\n🚀 Phase 1 — Submitting ${pending.length} tasks to Kie.ai...\n`);
  const tasks = await submitAll(pending);

  const submitted = Object.keys(tasks).length;
  if (submitted === 0) { console.error("No tasks submitted. Check API key/credits."); return; }

  console.log(`\n⏳ Phase 2 — Polling ${submitted} tasks (no timeout, waits until all complete)...\n`);
  await pollAll(tasks);

  const done  = Object.values(tasks).filter(t => t.status === "done").length;
  const failed = Object.values(tasks).filter(t => t.status === "failed").length;
  console.log(`\n✅ Done! ${done} saved, ${failed} failed.`);
}

main().catch(console.error);
