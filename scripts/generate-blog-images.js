// generate-blog-images.js
// Generates cover images for all Madeira Medical Group blog articles via Kie.ai
// Usage: node scripts/generate-blog-images.js

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const API_KEY = "212ca1f88ca99802e14bd68b8499693c";
const OUTPUT_DIR = path.join(__dirname, "../public/blog");

const articles = [
  {
    filename: "armonizacion-facial.jpg",
    prompt: "Elegant woman receiving professional facial harmonization treatment at a luxury medical clinic in Puerto Vallarta Mexico, hyaluronic acid filler procedure, soft clinical lighting, high-end aesthetic medicine setting, warm skin tones, photorealistic",
  },
  {
    filename: "english-speaking-gynecologist.jpg",
    prompt: "Friendly female OB-GYN doctor consulting with a smiling patient in a modern medical office in Mexico, professional women's health clinic, warm natural light, trust and care atmosphere, photorealistic",
  },
  {
    filename: "healthcare-retirees.jpg",
    prompt: "Happy senior couple meeting with a compassionate doctor in a modern medical clinic in Puerto Vallarta Mexico, geriatric care, tropical setting visible through window, warm professional atmosphere, photorealistic",
  },
  {
    filename: "dental-implants-cost.jpg",
    prompt: "Professional dentist placing a dental implant in a modern clinic in Puerto Vallarta Mexico, close-up of beautiful smile with dental work, bright clinical lighting, high-tech dental equipment, photorealistic",
  },
  {
    filename: "all-on-4-implants.jpg",
    prompt: "Beautiful full-arch dental restoration result, All-on-4 dental implants, patient smiling with perfect white teeth in a modern dental office, before and after transformation concept, photorealistic",
  },
  {
    filename: "implantes-dentales-precio.jpg",
    prompt: "Dental implant model and dental tools on a modern clinic table, professional dental office in Mexico, clean clinical aesthetic with warm accents, photorealistic",
  },
  {
    filename: "smile-design.jpg",
    prompt: "Close-up of a beautiful perfect smile with porcelain veneers, cosmetic dentistry smile makeover, brilliant white teeth, elegant luxury dental clinic background, photorealistic",
  },
  {
    filename: "invisalign-process.jpg",
    prompt: "Clear Invisalign aligners held in hand, transparent orthodontic braces, modern orthodontist office background, clean professional aesthetic, soft lighting, photorealistic",
  },
  {
    filename: "invisalign-vs-brackets.jpg",
    prompt: "Split comparison showing clear Invisalign aligner next to traditional metal braces on dental model, orthodontic comparison, modern dental office, clean clinical setting, photorealistic",
  },
  {
    filename: "orthodontist-children.jpg",
    prompt: "Happy child at orthodontist appointment, friendly pediatric dentist examining a child's smile, colorful and welcoming dental clinic, parents in background, photorealistic",
  },
  {
    filename: "facial-harmonization-expat.jpg",
    prompt: "Professional aesthetic medicine doctor performing facial harmonization procedure with dermal filler on a patient, modern medical clinic in Mexico, natural results, clinical setting with warm lighting, photorealistic",
  },
  {
    filename: "botox-precio.jpg",
    prompt: "Aesthetic medicine doctor carefully administering botox injection to patient forehead, professional medical setting, soft clinical lighting, natural beauty enhancement concept, photorealistic",
  },
  {
    filename: "botox-fillers-expats.jpg",
    prompt: "Beautiful natural-looking anti-aging results, woman after non-surgical facial treatment with fillers, radiant skin, modern aesthetic clinic in Puerto Vallarta backdrop, photorealistic",
  },
  {
    filename: "exosomas-terapia.jpg",
    prompt: "Regenerative medicine laboratory with modern scientific equipment, exosome therapy concept, glowing cellular regeneration visualization, futuristic medical technology, photorealistic",
  },
  {
    filename: "bioidentical-hrt.jpg",
    prompt: "Confident mature woman in her 50s at a wellness consultation with a doctor, hormone therapy concept, natural health and vitality, modern medical office in Mexico, photorealistic",
  },
  {
    filename: "ultrasonido-3d-4d.jpg",
    prompt: "Expectant mother looking at 3D/4D ultrasound image of her baby with joyful expression, modern obstetric ultrasound equipment, warm clinical setting, beautiful pregnancy moment, photorealistic",
  },
  {
    filename: "menopause-treatment.jpg",
    prompt: "Elegant woman in her 50s discussing health with a caring gynecologist in a modern medical office, menopause wellness consultation, warm professional environment, photorealistic",
  },
  {
    filename: "hipotiroidismo.jpg",
    prompt: "Medical illustration concept of thyroid gland health, endocrinologist consultation with patient, modern medical clinic in Mexico, professional and reassuring atmosphere, photorealistic",
  },
  {
    filename: "diabetes-expat.jpg",
    prompt: "Expat patient testing blood glucose with glucometer, diabetes management consultation with doctor in Puerto Vallarta Mexico, modern medical office, caring professional setting, photorealistic",
  },
  {
    filename: "endocrinologia-pediatrica.jpg",
    prompt: "Friendly pediatric endocrinologist examining a child with caring expression, modern children's medical clinic, parent present, warm colorful clinical environment, photorealistic",
  },
  {
    filename: "geriatra-adulto-mayor.jpg",
    prompt: "Compassionate geriatrician doctor doing a health assessment with an elderly patient, senior care medical consultation, warm and professional clinic in Puerto Vallarta Mexico, photorealistic",
  },
  {
    filename: "nutriologo-consulta.jpg",
    prompt: "Nutritionist consultation session with healthy food items and InBody body composition scanner, modern nutrition clinic, professional dietary planning, fresh vegetables and fruit on desk, photorealistic",
  },
  {
    filename: "nutrition-expats.jpg",
    prompt: "Health-conscious expat woman consulting with nutritionist in a sunny modern clinic, healthy lifestyle concept, fresh tropical fruits, wellness consultation in Puerto Vallarta Mexico, photorealistic",
  },
  {
    filename: "therapist-english.jpg",
    prompt: "Warm therapy session between psychologist and patient in a comfortable private office, mental health consultation, soft natural lighting, cozy and safe therapeutic environment, photorealistic",
  },
  {
    filename: "blood-tests.jpg",
    prompt: "Clinical laboratory technician processing blood samples in a modern medical lab in Mexico, laboratory test tubes and analysis equipment, clean professional clinical setting, photorealistic",
  },
  {
    filename: "tummy-tuck-lipo.jpg",
    prompt: "Professional plastic surgeon consultation, body contouring concept with medical illustration, modern surgical clinic in Puerto Vallarta Mexico, professional and reassuring medical setting, photorealistic",
  },
  {
    filename: "bichectomia.jpg",
    prompt: "Beautiful face with defined cheekbones and facial contouring result, aesthetic medicine bichectomy concept, elegant woman showing sculpted facial features, modern aesthetic clinic, photorealistic",
  },
];

function post(url, data, headers) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
    };
    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (d) => (body += d));
      res.on("end", () => { try { resolve(JSON.parse(body)); } catch { resolve(body); } });
    });
    req.on("error", reject);
    req.write(JSON.stringify(data));
    req.end();
  });
}

function get(url, headers) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = { hostname: urlObj.hostname, path: urlObj.pathname + urlObj.search, method: "GET", headers };
    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (d) => (body += d));
      res.on("end", () => { try { resolve(JSON.parse(body)); } catch { resolve(body); } });
    });
    req.on("error", reject);
    req.end();
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { fs.unlinkSync(dest); reject(err); });
  });
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function generateImage(article) {
  const dest = path.join(OUTPUT_DIR, article.filename);
  if (fs.existsSync(dest)) {
    console.log(`  ✓ Already exists: ${article.filename}`);
    return true;
  }

  console.log(`  → Creating task: ${article.filename}`);
  const taskRes = await post(
    "https://api.kie.ai/api/v1/jobs/createTask",
    {
      model: "nano-banana-pro",
      taskType: "txt2img",
      input: {
        prompt: article.prompt,
        negativePrompt: "text, watermark, logo, blurry, low quality, distorted, ugly, cartoon",
        width: 1280,
        height: 720,
        steps: 30,
      },
    },
    { Authorization: `Bearer ${API_KEY}` }
  );

  const taskId = taskRes?.data?.taskId || taskRes?.taskId;
  if (!taskId) {
    console.error(`  ✗ No taskId for ${article.filename}:`, JSON.stringify(taskRes).slice(0, 200));
    return false;
  }

  console.log(`  ⏳ Polling taskId ${taskId}...`);
  for (let i = 0; i < 40; i++) {
    await sleep(8000);
    const info = await get(
      `https://api.kie.ai/api/v1/jobs/recordInfo?taskId=${taskId}`,
      { Authorization: `Bearer ${API_KEY}` }
    );
    const status = info?.data?.status || info?.status;
    const images = info?.data?.output?.images || info?.output?.images || [];
    if (status === "SUCCESS" || status === "COMPLETED" || images.length > 0) {
      const imgUrl = images[0]?.url || images[0];
      if (imgUrl) {
        console.log(`  ↓ Downloading ${article.filename}...`);
        await downloadFile(imgUrl, dest);
        console.log(`  ✅ Saved: ${article.filename}`);
        return true;
      }
    }
    if (status === "FAILED" || status === "ERROR") {
      console.error(`  ✗ Task failed: ${article.filename}`);
      return false;
    }
    process.stdout.write(".");
  }
  console.error(`  ✗ Timeout: ${article.filename}`);
  return false;
}

async function main() {
  console.log(`\n🎨 Generating ${articles.length} blog cover images via Kie.ai...\n`);
  // Process in batches of 4 to avoid rate limiting
  for (let i = 0; i < articles.length; i += 4) {
    const batch = articles.slice(i, i + 4);
    console.log(`\n📦 Batch ${Math.floor(i/4)+1}/${Math.ceil(articles.length/4)}: ${batch.map(a => a.filename).join(", ")}`);
    await Promise.all(batch.map(generateImage));
  }
  console.log("\n✅ Done! All images saved to public/blog/");
}

main().catch(console.error);
