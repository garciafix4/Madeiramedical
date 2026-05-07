/**
 * Inspects blog post content to see remaining price patterns
 * Run: npx tsx scripts/check-blog-prices.ts
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
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, slug, lang, title, content");

  for (const post of posts!) {
    const content = post.content || "";
    // Find lines with any $ or price-related text
    const priceLines: string[] = [];

    // Strip HTML tags to get plain text lines
    const plainText = content.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ");
    const lines = plainText.split(/\n|\r/).map((l: string) => l.trim()).filter(Boolean);

    for (const line of lines) {
      if (/\$[\d,\.]+|[\d,\.]+\s*(MXN|USD|pesos|dlls?)|desde \$|costo|precio|tarifa/i.test(line)) {
        priceLines.push("    → " + line.substring(0, 120));
      }
    }

    if (priceLines.length > 0) {
      console.log(`\n[${post.lang}] ${post.title}`);
      priceLines.forEach(l => console.log(l));
    }
  }

  console.log("\n--- Done inspecting ---");
}

main();
