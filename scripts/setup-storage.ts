/**
 * Creates the 'madeira-media' Supabase Storage bucket.
 * Run: npx tsx scripts/setup-storage.ts
 */
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  console.log("🪣  Creating storage bucket 'madeira-media'...");

  const { data: existing } = await supabase.storage.getBucket("madeira-media");
  if (existing) {
    console.log("  ✓ Bucket already exists");
    return;
  }

  const { error } = await supabase.storage.createBucket("madeira-media", {
    public: true,
    allowedMimeTypes: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
    fileSizeLimit: 5242880, // 5MB
  });

  if (error) {
    console.error("  ✗ Failed:", error.message);
    process.exit(1);
  }

  console.log("  ✓ Bucket created successfully!");
}

main();
