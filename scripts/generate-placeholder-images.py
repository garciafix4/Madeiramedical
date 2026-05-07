#!/usr/bin/env python3
"""
Generate elegant gradient placeholder images for missing blog covers.
Creates medical-themed 1280x720 JPGs with gradient backgrounds and icon overlays.
Usage: python3 scripts/generate-placeholder-images.py
"""

from PIL import Image, ImageDraw, ImageFont
import os, math

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../public/blog")
os.makedirs(OUTPUT_DIR, exist_ok=True)

W, H = 1280, 720

# Only generate if the file doesn't exist or is too small
MISSING = [
    ("armonizacion-facial.jpg",        "#023047", "#046b9f", "✦",  "Armonización Facial"),
    ("dental-implants-cost.jpg",       "#012030", "#0369a1", "◈",  "Dental Implants"),
    ("implantes-dentales-precio.jpg",  "#012030", "#046b9f", "◈",  "Implantes Dentales"),
    ("invisalign-process.jpg",         "#023047", "#0e7490", "⬡",  "Invisalign"),
    ("invisalign-vs-brackets.jpg",     "#012030", "#0284c7", "⬡",  "Ortodoncia"),
    ("orthodontist-children.jpg",      "#0c4a6e", "#0369a1", "★",  "Ortodoncista"),
    ("botox-precio.jpg",               "#1e1b4b", "#4338ca", "◉",  "Botox & Fillers"),
    ("bioidentical-hrt.jpg",           "#14532d", "#15803d", "⬤",  "Terapia Hormonal"),
    ("ultrasonido-3d-4d.jpg",          "#1e3a5f", "#1d4ed8", "◎",  "Ultrasonido 3D/4D"),
    ("diabetes-expat.jpg",             "#422006", "#b45309", "⊕",  "Diabetes Care"),
    ("nutrition-expats.jpg",           "#14532d", "#16a34a", "✿",  "Nutrición"),
]

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def lerp(a, b, t):
    return a + (b - a) * t

def make_gradient(color1, color2, overlay_color):
    """Creates a beautiful multi-layer gradient image."""
    img = Image.new('RGB', (W, H))
    c1 = hex_to_rgb(color1)
    c2 = hex_to_rgb(color2)

    # Main diagonal gradient
    pixels = []
    for y in range(H):
        for x in range(W):
            # Diagonal gradient
            t = (x / W * 0.6 + y / H * 0.4)
            r = int(lerp(c1[0], c2[0], t))
            g = int(lerp(c1[1], c2[1], t))
            b = int(lerp(c1[2], c2[2], t))
            pixels.append((r, g, b))
    img.putdata(pixels)

    draw = ImageDraw.Draw(img)

    # Subtle dot pattern
    oc = hex_to_rgb(overlay_color)
    dot_color = (min(oc[0]+40, 255), min(oc[1]+40, 255), min(oc[2]+40, 255), 20)
    for gy in range(0, H, 32):
        for gx in range(0, W, 32):
            draw.ellipse([gx-1, gy-1, gx+1, gy+1], fill=(255, 255, 255, 15))

    # Radial light effect (top-left)
    for radius in range(300, 0, -30):
        alpha = int(8 * (1 - radius/300))
        overlay = Image.new('RGBA', (W, H), (0,0,0,0))
        od = ImageDraw.Draw(overlay)
        od.ellipse([-radius//2, -radius//2, radius, radius],
                   fill=(255, 255, 255, alpha))
        img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')

    return img

def add_text_elements(img, icon, label):
    """Add elegant icon and text to the image."""
    draw = ImageDraw.Draw(img)

    # Large icon (centered slightly left)
    cx, cy = W // 3, H // 2

    # Draw large circle background
    r = 120
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(255, 255, 255, 0))

    # Semi-transparent overlay circle
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(255, 255, 255, 25))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Try to use a system font, fall back to default
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 90)
        font_label = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 38)
        font_brand = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
    except:
        font_large = ImageFont.load_default()
        font_label = ImageFont.load_default()
        font_brand = ImageFont.load_default()

    # Icon
    draw.text((cx, cy), icon, font=font_large, fill=(255, 255, 255, 200), anchor="mm")

    # Label (right side)
    lx = W * 2 // 3 + 20
    ly = H // 2 - 30

    # Subtle line accent
    draw.line([lx - 40, ly - 20, lx - 40, ly + 60], fill=(255, 255, 255, 120), width=3)

    draw.text((lx, ly), label, font=font_label, fill=(255, 255, 255), anchor="lm")

    # Brand name
    brand_y = H - 45
    draw.text((W//2, brand_y), "Madeira Medical Group · Puerto Vallarta",
              font=font_brand, fill=(255, 255, 255, 150), anchor="mm")

    return img

def generate(filename, color1, color2, icon, label, overlay="#046b9f"):
    dest = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(dest) and os.path.getsize(dest) > 20_000:
        print(f"  ✓ Already exists: {filename}")
        return

    img = make_gradient(color1, color2, overlay)
    img = add_text_elements(img, icon, label)
    img.save(dest, 'JPEG', quality=92, optimize=True)
    size = os.path.getsize(dest)
    print(f"  ✅ {filename} ({size//1024}KB)")

def main():
    print(f"\n🎨 Generating {len(MISSING)} placeholder blog covers...\n")
    for row in MISSING:
        generate(*row)
    print(f"\n✅ Done! Images saved to public/blog/")

if __name__ == "__main__":
    main()
