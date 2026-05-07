#!/usr/bin/env python3
"""
Generate 11 missing blog cover images using Google Imagen 3 (free tier).
Usage: python3 scripts/generate-blog-images-gemini.py
"""

import urllib.request, urllib.error, json, base64, os, time

API_KEY    = "AIzaSyAIz6BvlZj91At1J_fPwdtROEhMGJhNqNU"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../public/blog")
ENDPOINT   = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key={API_KEY}"

ARTICLES = [
    ("armonizacion-facial.jpg",       "Elegant woman receiving professional facial harmonization treatment at a luxury medical clinic in Puerto Vallarta Mexico, hyaluronic acid filler procedure, soft clinical lighting, photorealistic, 16:9"),
    ("dental-implants-cost.jpg",      "Professional dentist placing a dental implant in a modern clinic in Puerto Vallarta Mexico, beautiful smile with dental work, bright clinical lighting, photorealistic, 16:9"),
    ("implantes-dentales-precio.jpg", "Dental implant titanium model and dental tools on a modern clinic table in Mexico, professional dental office, clean clinical aesthetic, warm light, photorealistic, 16:9"),
    ("invisalign-process.jpg",        "Clear Invisalign aligners held in hands, transparent orthodontic braces, modern orthodontist office background, clean professional aesthetic, soft lighting, photorealistic, 16:9"),
    ("invisalign-vs-brackets.jpg",    "Clear Invisalign aligner next to traditional metal braces on dental model, orthodontic comparison, modern dental office, clean clinical setting, photorealistic, 16:9"),
    ("orthodontist-children.jpg",     "Happy child smiling at orthodontist appointment, friendly pediatric dentist examining child, welcoming dental clinic, warm colors, photorealistic, 16:9"),
    ("botox-precio.jpg",              "Aesthetic medicine doctor administering botox injection to patient forehead in professional medical setting Mexico, soft clinical lighting, natural beauty enhancement, photorealistic, 16:9"),
    ("bioidentical-hrt.jpg",          "Confident mature woman in her 50s at wellness consultation with compassionate doctor, hormone therapy concept, natural health and vitality, modern medical office Puerto Vallarta Mexico, photorealistic, 16:9"),
    ("ultrasonido-3d-4d.jpg",         "Expectant mother looking joyfully at 3D ultrasound image of baby, modern obstetric ultrasound equipment, warm clinical setting Mexico, beautiful intimate pregnancy moment, photorealistic, 16:9"),
    ("diabetes-expat.jpg",            "Expat patient testing blood glucose with glucometer at diabetes management consultation with doctor in Puerto Vallarta Mexico, modern medical office, caring professional setting, photorealistic, 16:9"),
    ("nutrition-expats.jpg",          "Health-conscious expat woman consulting with nutritionist in sunny modern clinic Puerto Vallarta Mexico, healthy lifestyle, fresh colorful tropical fruits on desk, photorealistic, 16:9"),
]

HEADERS = {"Content-Type": "application/json"}

def generate(filename, prompt):
    dest = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(dest) and os.path.getsize(dest) > 20_000:
        print(f"  ✓ Already exists: {filename}")
        return True

    print(f"  → Generating: {filename}...")
    body = json.dumps({
        "instances": [{"prompt": prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": "16:9",
            "safetyFilterLevel": "block_some",
            "personGeneration": "allow_adult"
        }
    }).encode()

    try:
        req = urllib.request.Request(ENDPOINT, data=body, headers=HEADERS, method="POST")
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read())

        b64 = data["predictions"][0].get("bytesBase64Encoded")
        if not b64:
            print(f"  ✗ No image data: {str(data)[:200]}")
            return False

        img_bytes = base64.b64decode(b64)
        with open(dest, "wb") as f:
            f.write(img_bytes)
        print(f"  ✅ {filename} ({len(img_bytes)//1024}KB)")
        return True

    except urllib.error.HTTPError as e:
        body_err = e.read().decode()[:300]
        print(f"  ✗ HTTP {e.code}: {body_err}")
        return False
    except Exception as e:
        print(f"  ✗ {filename}: {e}")
        return False

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"\n🎨 Generating {len(ARTICLES)} images with Imagen 3...\n")
    ok = 0
    for filename, prompt in ARTICLES:
        if generate(filename, prompt):
            ok += 1
        time.sleep(1)
    print(f"\n✅ Done! {ok}/{len(ARTICLES)} images saved.")

if __name__ == "__main__":
    main()
