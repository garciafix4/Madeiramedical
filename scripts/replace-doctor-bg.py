#!/usr/bin/env python3
"""
Replace the teal/blue background in all doctor photos with an elegant warm sand gradient.
Also generates favicons from logo.png.

Usage: python3 scripts/replace-doctor-bg.py
"""

import os, sys, shutil, struct, zlib
from PIL import Image, ImageFilter
import numpy as np

DOCTORS_DIR = os.path.join(os.path.dirname(__file__), "../public/doctors")
LOGO_PATH   = os.path.join(os.path.dirname(__file__), "../public/logo.png")
APP_DIR     = os.path.join(os.path.dirname(__file__), "../src/app")
PUBLIC_DIR  = os.path.join(os.path.dirname(__file__), "../public")

# ── Sand gradient colors (warm elegant) ──────────────────────────────────────
# Top: soft warm linen  →  Bottom: deeper warm sand
SAND_TOP    = np.array([242, 233, 218], dtype=np.float32)   # #F2E9DA
SAND_BOTTOM = np.array([215, 198, 173], dtype=np.float32)   # #D7C6AD

# ── Teal background detection thresholds ─────────────────────────────────────
# The teal is consistently around RGB(66-68, 131-134, 161-163) with some variation
TEAL_HUE_MIN = 170   # degrees
TEAL_HUE_MAX = 215
TEAL_SAT_MIN = 0.20  # minimum saturation (avoid grays)
TEAL_VAL_MIN = 0.35  # avoid very dark shadows
TEAL_VAL_MAX = 0.85  # avoid near-white areas

def rgb_to_hsv(r, g, b):
    """Per-pixel HSV conversion (arrays, 0-255 input, 0-1 output)."""
    r, g, b = r / 255.0, g / 255.0, b / 255.0
    maxc = np.maximum(np.maximum(r, g), b)
    minc = np.minimum(np.minimum(r, g), b)
    delta = maxc - minc

    v = maxc
    s = np.where(maxc != 0, delta / maxc, 0.0)

    h = np.zeros_like(r)
    mask_r = (maxc == r) & (delta != 0)
    mask_g = (maxc == g) & (delta != 0)
    mask_b = (maxc == b) & (delta != 0)
    h = np.where(mask_r, (g - b) / delta % 6, h)
    h = np.where(mask_g, (b - r) / delta + 2, h)
    h = np.where(mask_b, (r - g) / delta + 4, h)
    h = h * 60  # to degrees 0-360
    h = np.where(h < 0, h + 360, h)
    return h, s, v

def make_sand_gradient(height, width):
    """Create a warm sand gradient background (height x width x 3)."""
    t = np.linspace(0, 1, height)[:, None]  # (H,1)
    grad = SAND_TOP[None, :] * (1 - t) + SAND_BOTTOM[None, :] * t  # (H,3)
    return np.broadcast_to(grad[:, None, :], (height, width, 3)).copy().astype(np.uint8)

def build_bg_mask(arr):
    """
    Return a float mask (0.0=foreground, 1.0=background) for the teal region.
    Uses HSV range detection + edge feathering.
    """
    r, g, b = arr[:,:,0].astype(np.float32), arr[:,:,1].astype(np.float32), arr[:,:,2].astype(np.float32)
    h, s, v = rgb_to_hsv(r, g, b)

    # Hard mask: teal hue + saturation + value range
    teal_mask = (
        (h >= TEAL_HUE_MIN) & (h <= TEAL_HUE_MAX) &
        (s >= TEAL_SAT_MIN) &
        (v >= TEAL_VAL_MIN) & (v <= TEAL_VAL_MAX)
    ).astype(np.float32)

    # Feather edges: blur the mask slightly for smooth transitions
    mask_img = Image.fromarray((teal_mask * 255).astype(np.uint8), mode='L')
    mask_img = mask_img.filter(ImageFilter.GaussianBlur(radius=2))
    mask_smooth = np.array(mask_img).astype(np.float32) / 255.0

    return mask_smooth

def replace_background(img_path, backup=True):
    """Replace teal background in a single doctor photo."""
    img = Image.open(img_path).convert('RGB')
    arr = np.array(img, dtype=np.float32)
    H, W = arr.shape[:2]

    # Check if this photo even has teal background (look at corners)
    corners = [arr[5,5], arr[5,-5], arr[-5,5], arr[-5,-5]]
    avg_corner = np.mean(corners, axis=0)  # avg R,G,B of corners
    # Teal: R low, G medium-high, B high
    corner_h, corner_s, corner_v = rgb_to_hsv(
        np.array([[avg_corner[0]]]),
        np.array([[avg_corner[1]]]),
        np.array([[avg_corner[2]]])
    )
    if not (TEAL_HUE_MIN <= corner_h[0,0] <= TEAL_HUE_MAX and corner_s[0,0] >= TEAL_SAT_MIN):
        print(f"  ⏭ Skipping (no teal bg): {os.path.basename(img_path)}")
        return False

    # Build mask
    mask = build_bg_mask(arr.astype(np.uint8))  # (H,W) 0-1

    # Build sand gradient
    sand = make_sand_gradient(H, W).astype(np.float32)

    # Composite: new = sand * mask + original * (1-mask)
    mask3 = mask[:, :, None]  # (H,W,1) → broadcast to 3 channels
    result = sand * mask3 + arr * (1 - mask3)
    result = np.clip(result, 0, 255).astype(np.uint8)

    # Backup original
    if backup:
        bak = img_path.replace('.jpg', '_orig.jpg')
        if not os.path.exists(bak):
            shutil.copy2(img_path, bak)

    # Save result
    Image.fromarray(result).save(img_path, 'JPEG', quality=92)
    print(f"  ✅ {os.path.basename(img_path)}")
    return True

# ── Favicon generation ────────────────────────────────────────────────────────

def make_favicon():
    """Generate favicon.ico (multi-size) and apple-touch-icon from logo.png."""
    logo = Image.open(LOGO_PATH).convert('RGBA')

    # Add white background for favicon (logo has transparency)
    def on_white(size):
        bg = Image.new('RGBA', (size, size), (255, 255, 255, 255))
        # Add small padding
        pad = int(size * 0.08)
        inner = size - pad * 2
        resized = logo.resize((inner, inner), Image.LANCZOS)
        bg.paste(resized, (pad, pad), resized)
        return bg

    # Generate sizes for .ico
    sizes = [16, 32, 48, 64, 128, 256]
    ico_images = [on_white(s).convert('RGBA') for s in sizes]

    # Save favicon.ico (multi-size)
    ico_path = os.path.join(APP_DIR, 'favicon.ico')
    ico_images[0].save(
        ico_path,
        format='ICO',
        sizes=[(s, s) for s in sizes],
        append_images=ico_images[1:]
    )
    print(f"  ✅ favicon.ico ({', '.join(str(s) for s in sizes)}px)")

    # Save apple-touch-icon.png (180x180)
    apple = on_white(180).convert('RGB')
    apple_path = os.path.join(PUBLIC_DIR, 'apple-touch-icon.png')
    apple.save(apple_path, 'PNG')
    print(f"  ✅ apple-touch-icon.png (180px)")

    # Save favicon-32x32.png and favicon-16x16.png in public/
    for size in [16, 32]:
        img = on_white(size).convert('RGBA')
        out = os.path.join(PUBLIC_DIR, f'favicon-{size}x{size}.png')
        img.save(out, 'PNG')
        print(f"  ✅ favicon-{size}x{size}.png")


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print("\n🎨 Madeira Medical Group — Asset Processor\n")

    # 1. Favicon
    print("── Favicon ──")
    make_favicon()

    # 2. Doctor photos
    print("\n── Doctor photo backgrounds ──")
    files = sorted(f for f in os.listdir(DOCTORS_DIR) if f.endswith('.jpg') and not f.endswith('_orig.jpg'))
    changed = 0
    for f in files:
        result = replace_background(os.path.join(DOCTORS_DIR, f))
        if result:
            changed += 1

    print(f"\n✅ Done! {changed}/{len(files)} photos updated.")
    print("   Originals saved as *_orig.jpg (safe to delete after review).")

if __name__ == "__main__":
    main()
