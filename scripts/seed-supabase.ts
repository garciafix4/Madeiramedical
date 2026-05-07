/**
 * MADEIRA MEDICAL GROUP — Supabase Seed Script
 *
 * Migrates all hardcoded content + images to Supabase.
 * Run with: npx tsx scripts/seed-supabase.ts
 *
 * Prerequisites:
 *   1. Run the schema SQL in Supabase SQL editor (supabase/schema.sql)
 *   2. Create the 'madeira-media' storage bucket (public: true)
 *   3. Configure .env.local with SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load .env.local
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const BUCKET = "madeira-media";
const BASE_URL = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}`;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ─── Data imports ─────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { DOCTORS_LIST, SITE, HERO, AGENDA, LOCATION, RENTAL, SPECIALTIES_MAP } = require("../src/lib/content");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { BLOG_POSTS } = require("../src/lib/blog");

// ─── Image URL map ─────────────────────────────────────────────
const imageUrlMap: Record<string, string> = {};

async function uploadImage(localPath: string, storagePath: string): Promise<string | null> {
  const fullPath = path.join(process.cwd(), "public", localPath);

  if (!fs.existsSync(fullPath)) {
    console.warn(`  ⚠ Image not found: ${localPath}`);
    return null;
  }

  // Check if already uploaded
  const { data: existing } = await supabase.storage.from(BUCKET).list(path.dirname(storagePath));
  const filename = path.basename(storagePath);
  if (existing?.find((f) => f.name === filename)) {
    const url = `${BASE_URL}/${storagePath}`;
    console.log(`  ✓ Already exists: ${storagePath}`);
    return url;
  }

  const fileBuffer = fs.readFileSync(fullPath);
  const ext = path.extname(localPath).toLowerCase();
  const contentType = ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg";

  const { error } = await supabase.storage.from(BUCKET).upload(storagePath, fileBuffer, { contentType, upsert: true });

  if (error) {
    console.warn(`  ⚠ Upload failed for ${localPath}: ${error.message}`);
    return null;
  }

  const url = `${BASE_URL}/${storagePath}`;
  console.log(`  ✓ Uploaded: ${storagePath}`);
  return url;
}

async function uploadAllImages() {
  console.log("\n📸 Phase 1: Uploading images to Supabase Storage...");

  // Doctor photos
  const doctorFiles = fs.readdirSync(path.join(process.cwd(), "public/doctors")).filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i));
  for (const file of doctorFiles) {
    const localPath = `/doctors/${file}`;
    const storagePath = `doctors/${file}`;
    const url = await uploadImage(localPath, storagePath);
    if (url) imageUrlMap[localPath] = url;
  }

  // Blog images
  const blogDir = path.join(process.cwd(), "public/blog");
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i));
    for (const file of blogFiles) {
      const localPath = `/blog/${file}`;
      const storagePath = `blog/${file}`;
      const url = await uploadImage(localPath, storagePath);
      if (url) imageUrlMap[localPath] = url;
    }
  }

  // Site images
  for (const [file, storageName] of [["logo.png", "site/logo.png"], ["hero-photo.jpg", "site/hero-photo.jpg"]] as const) {
    const localPath = `/${file}`;
    const url = await uploadImage(localPath, storageName);
    if (url) imageUrlMap[localPath] = url;
  }

  console.log(`\n  Total images mapped: ${Object.keys(imageUrlMap).length}`);
}

function resolveImage(path: string | null | undefined): string | null {
  if (!path) return null;
  return imageUrlMap[path] ?? path;
}

async function seedDoctors() {
  console.log("\n👨‍⚕️ Seeding doctors...");

  const rows = DOCTORS_LIST.map((d: Record<string, unknown>) => ({
    slug: d.slug,
    name: d.name,
    specialty: d.specialty,
    phone: d.phone ?? "",
    photo: resolveImage(d.photo as string),
    services: d.services ?? [],
    lang: "es",
    active: true,
  }));

  const { error } = await supabase.from("doctors").upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`  ✓ ${rows.length} doctors seeded`);
}

async function seedBlogPosts() {
  console.log("\n📝 Seeding blog posts...");

  const rows = BLOG_POSTS.map((p: Record<string, unknown>) => ({
    slug: p.slug,
    lang: p.lang,
    title: p.title,
    description: p.description ?? "",
    published_at: p.publishedAt ?? null,
    doctor_slug: p.doctorSlug ?? null,
    specialty_slug: p.specialtySlug ?? null,
    keywords: p.keywords ?? [],
    cover_image: resolveImage(p.coverImage as string),
    content: p.content ?? "",
    published: true,
  }));

  const { error } = await supabase.from("blog_posts").upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`  ✓ ${rows.length} blog posts seeded`);
}

async function seedSpecialties() {
  console.log("\n⭐ Seeding specialties...");

  const rows = SPECIALTIES_MAP.map((s: Record<string, unknown>) => ({
    slug: s.slug,
    name: s.name,
    name_en: s.nameEn ?? null,
    headline: s.headline ?? null,
    headline_en: s.headlineEn ?? null,
    description: s.description ?? null,
    description_en: s.descriptionEn ?? null,
    keywords: s.keywords ?? [],
    doctor_slugs: s.doctorSlugs ?? [],
    faq: s.faq ?? [],
    active: true,
  }));

  const { error } = await supabase.from("specialties").upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.log(`  ✓ ${rows.length} specialties seeded`);
}

async function seedSiteConfig() {
  console.log("\n⚙️  Seeding site config...");

  const configs = [
    { key: "SITE", value: SITE },
    { key: "HERO", value: HERO },
    { key: "AGENDA", value: AGENDA },
    { key: "LOCATION", value: LOCATION },
    { key: "RENTAL", value: RENTAL },
  ];

  for (const cfg of configs) {
    const { error } = await supabase.from("site_config").upsert(cfg, { onConflict: "key" });
    if (error) throw error;
    console.log(`  ✓ ${cfg.key} config seeded`);
  }
}

async function main() {
  console.log("🚀 Starting Madeira Medical Group seed...");
  console.log(`   Supabase: ${SUPABASE_URL}`);

  try {
    await uploadAllImages();
    await seedDoctors();
    await seedBlogPosts();
    await seedSpecialties();
    await seedSiteConfig();
    console.log("\n✅ Seed complete!");
  } catch (err) {
    console.error("\n❌ Seed failed:", err);
    process.exit(1);
  }
}

main();
