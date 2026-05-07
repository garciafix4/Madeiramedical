// download-blog-images.js
// Downloads themed medical stock photos for Madeira Medical Group blog
// Uses loremflickr.com (reliable, keyword-based, no API key needed)
// Usage: node scripts/download-blog-images.js

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "../public/blog");

const articles = [
  { filename: "armonizacion-facial.jpg",           keywords: "facial,aesthetic,beauty,skincare" },
  { filename: "english-speaking-gynecologist.jpg", keywords: "doctor,woman,medical,consultation" },
  { filename: "healthcare-retirees.jpg",            keywords: "senior,doctor,healthcare,elderly" },
  { filename: "dental-implants-cost.jpg",           keywords: "dentist,dental,teeth,clinic" },
  { filename: "all-on-4-implants.jpg",              keywords: "dentist,smile,teeth,dental" },
  { filename: "implantes-dentales-precio.jpg",      keywords: "dental,clinic,teeth,implant" },
  { filename: "smile-design.jpg",                   keywords: "smile,teeth,beauty,white" },
  { filename: "invisalign-process.jpg",             keywords: "orthodontics,dental,teeth,clear" },
  { filename: "invisalign-vs-brackets.jpg",         keywords: "orthodontics,braces,dental,teeth" },
  { filename: "orthodontist-children.jpg",          keywords: "child,dentist,pediatric,clinic" },
  { filename: "facial-harmonization-expat.jpg",     keywords: "aesthetic,medicine,beauty,clinic" },
  { filename: "botox-precio.jpg",                   keywords: "beauty,skincare,aesthetic,woman" },
  { filename: "botox-fillers-expats.jpg",           keywords: "skincare,beauty,woman,radiant" },
  { filename: "exosomas-terapia.jpg",               keywords: "laboratory,science,medicine,research" },
  { filename: "bioidentical-hrt.jpg",               keywords: "wellness,woman,health,consultation" },
  { filename: "ultrasonido-3d-4d.jpg",              keywords: "pregnancy,ultrasound,mother,baby" },
  { filename: "menopause-treatment.jpg",            keywords: "woman,doctor,consultation,health" },
  { filename: "hipotiroidismo.jpg",                 keywords: "medical,doctor,health,clinic" },
  { filename: "diabetes-expat.jpg",                 keywords: "diabetes,medical,health,blood" },
  { filename: "endocrinologia-pediatrica.jpg",      keywords: "child,doctor,pediatric,health" },
  { filename: "geriatra-adulto-mayor.jpg",          keywords: "elderly,senior,doctor,care" },
  { filename: "nutriologo-consulta.jpg",            keywords: "nutrition,healthy,food,diet" },
  { filename: "nutrition-expats.jpg",               keywords: "healthy,food,wellness,diet" },
  { filename: "therapist-english.jpg",              keywords: "therapy,psychology,consultation,office" },
  { filename: "blood-tests.jpg",                    keywords: "laboratory,blood,medical,test" },
  { filename: "tummy-tuck-lipo.jpg",                keywords: "surgery,medical,clinic,plastic" },
  { filename: "bichectomia.jpg",                    keywords: "face,beauty,aesthetic,woman" },
];

function downloadFile(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 8) return reject(new Error("Too many redirects"));
    const proto = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    const req = proto.get(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible)" } }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode)) {
        file.close();
        try { fs.unlinkSync(dest); } catch {}
        return downloadFile(res.headers.location, dest, redirects + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        try { fs.unlinkSync(dest); } catch {}
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    });
    req.on("error", (err) => {
      try { fs.unlinkSync(dest); } catch {}
      reject(err);
    });
  });
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function downloadImage(article, index) {
  const dest = path.join(OUTPUT_DIR, article.filename);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 20000) {
    console.log(`  ✓ Already exists: ${article.filename}`);
    return true;
  }

  // loremflickr serves real CC-licensed photos by keyword, always returns 200
  // Lock=index ensures each article gets a unique consistent photo
  const url = `https://loremflickr.com/1280/720/${article.keywords}?lock=${index + 100}`;

  try {
    await downloadFile(url, dest);
    const size = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
    if (size < 10000) {
      try { fs.unlinkSync(dest); } catch {}
      console.error(`  ✗ Too small: ${article.filename}`);
      return false;
    }
    console.log(`  ✅ ${article.filename} (${Math.round(size / 1024)}KB)`);
    return true;
  } catch (e) {
    console.error(`  ✗ ${article.filename}: ${e.message}`);
    return false;
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`\n📸 Downloading ${articles.length} blog cover images...\n`);

  let ok = 0;
  for (let i = 0; i < articles.length; i++) {
    const result = await downloadImage(articles[i], i);
    if (result) ok++;
    await sleep(400);
  }

  console.log(`\n✅ Done! ${ok}/${articles.length} images in public/blog/`);
}

main().catch(console.error);
