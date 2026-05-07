// generate-blog-images-dalle.js
// Generates 11 missing blog cover images using DALL-E 3
// Usage: node scripts/generate-blog-images-dalle.js

const https = require("https");
const http  = require("http");
const fs    = require("fs");
const path  = require("path");

const API_KEY    = process.env.OPENAI_API_KEY || "";
const OUTPUT_DIR = path.join(__dirname, "../public/blog");

const articles = [
  { filename: "armonizacion-facial.jpg",         prompt: "Elegant woman receiving professional facial harmonization treatment at a luxury medical clinic in Puerto Vallarta Mexico, hyaluronic acid filler procedure, soft clinical lighting, high-end aesthetic medicine setting, warm skin tones, photorealistic, wide landscape shot" },
  { filename: "dental-implants-cost.jpg",         prompt: "Professional dentist placing a dental implant in a modern clinic in Puerto Vallarta Mexico, close-up of beautiful smile with dental work, bright clinical lighting, high-tech dental equipment, photorealistic, wide landscape shot" },
  { filename: "implantes-dentales-precio.jpg",    prompt: "Dental implant titanium model and dental tools on a modern clinic table in Mexico, professional dental office, clean clinical aesthetic with warm light accents, photorealistic, wide landscape shot" },
  { filename: "invisalign-process.jpg",           prompt: "Clear Invisalign aligners held gently in hands, transparent orthodontic braces, modern orthodontist office background, clean professional aesthetic, soft studio lighting, photorealistic, wide landscape shot" },
  { filename: "invisalign-vs-brackets.jpg",       prompt: "Split comparison showing clear Invisalign aligner next to traditional metal braces on a dental model, orthodontic comparison, modern dental office background, clean clinical setting, photorealistic, wide landscape shot" },
  { filename: "orthodontist-children.jpg",        prompt: "Happy child smiling at orthodontist appointment, friendly pediatric dentist examining a child with colorful braces, welcoming dental clinic, parents visible in background, warm colors, photorealistic, wide landscape shot" },
  { filename: "botox-precio.jpg",                 prompt: "Aesthetic medicine doctor carefully administering botox injection to a patient forehead in a professional medical setting in Mexico, soft clinical lighting, natural beauty enhancement concept, photorealistic, wide landscape shot" },
  { filename: "bioidentical-hrt.jpg",             prompt: "Confident mature woman in her 50s at a wellness consultation with a compassionate doctor, bioidentical hormone therapy concept, natural health and vitality, modern medical office in Puerto Vallarta Mexico, photorealistic, wide landscape shot" },
  { filename: "ultrasonido-3d-4d.jpg",            prompt: "Expectant mother looking with joy at a 3D ultrasound image of her baby, modern obstetric ultrasound equipment, warm clinical setting in Mexico, beautiful intimate pregnancy moment, photorealistic, wide landscape shot" },
  { filename: "diabetes-expat.jpg",               prompt: "Expat patient testing blood glucose with glucometer at a diabetes management consultation with doctor in Puerto Vallarta Mexico, modern medical office, caring professional setting, photorealistic, wide landscape shot" },
  { filename: "nutrition-expats.jpg",             prompt: "Health-conscious expat woman consulting with a nutritionist in a sunny modern clinic in Puerto Vallarta Mexico, healthy lifestyle concept, fresh colorful tropical fruits on desk, wellness consultation, photorealistic, wide landscape shot" },
];

function dalleRequest(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ model: "dall-e-3", prompt, n: 1, size: "1792x1024", quality: "standard", response_format: "url" });
    const options = {
      hostname: "api.openai.com",
      path: "/v1/images/generations",
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}`, "Content-Length": Buffer.byteLength(body) }
    };
    const req = https.request(options, (res) => {
      let b = "";
      res.on("data", d => b += d);
      res.on("end", () => { try { resolve(JSON.parse(b)); } catch { resolve(b); } });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
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

  console.log(`  → Generating: ${article.filename}...`);
  try {
    const res = await dalleRequest(article.prompt);
    const imgUrl = res?.data?.[0]?.url;
    if (!imgUrl) {
      console.error(`  ✗ No URL: ${JSON.stringify(res).slice(0, 200)}`);
      return false;
    }
    await downloadFile(imgUrl, dest);
    const size = fs.statSync(dest).size;
    console.log(`  ✅ ${article.filename} (${Math.round(size/1024)}KB)`);
    return true;
  } catch(e) {
    console.error(`  ✗ ${article.filename}: ${e.message}`);
    return false;
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`\n🎨 Generating ${articles.length} images with DALL-E 3...\n`);

  let ok = 0;
  for (const article of articles) {
    const result = await generate(article);
    if (result) ok++;
    await sleep(1500); // rate limit pause
  }

  console.log(`\n✅ Done! ${ok}/${articles.length} images saved to public/blog/`);
}

main().catch(console.error);
