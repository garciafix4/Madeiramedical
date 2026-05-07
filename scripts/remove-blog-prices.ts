/**
 * Removes price-related content from all blog posts in Supabase.
 * Prices in medical blogs are delicate — this script strips:
 * - Paragraphs/sentences containing price mentions ($, MXN, USD, pesos, costo, precio, tarifa)
 * - HTML <p> tags that only contain price info
 * Run: npx tsx scripts/remove-blog-prices.ts
 */
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Patterns that indicate price/cost content
const PRICE_PATTERNS = [
  /\$\s*[\d,\.]+/gi,                          // $1,500 / $500
  /[\d,\.]+\s*(pesos|MXN|USD|dlls?|dólares)/gi, // 1500 pesos / 500 USD
  /costo[:\s]+[\d,\.$]+/gi,                    // costo: $500
  /precio[:\s]+[\d,\.$]+/gi,                  // precio: $800
  /tarifa[:\s]+[\d,\.$]+/gi,                  // tarifa: $300
  /desde\s+\$[\d,\.]+/gi,                     // desde $500
  /a partir de\s+\$[\d,\.]+/gi,               // a partir de $500
  /precio\s+(?:aproximado|referencial|orientativo)/gi,
];

function containsPrice(text: string): boolean {
  return PRICE_PATTERNS.some((p) => p.test(text));
}

function cleanHtml(html: string): string {
  // Remove full <p> blocks that contain price info
  let cleaned = html.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match, inner) => {
    const plainText = inner.replace(/<[^>]+>/g, "");
    if (containsPrice(plainText)) {
      return ""; // Remove the whole paragraph
    }
    return match;
  });

  // Remove <li> items that contain price info
  cleaned = cleaned.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (match, inner) => {
    const plainText = inner.replace(/<[^>]+>/g, "");
    if (containsPrice(plainText)) {
      return "";
    }
    return match;
  });

  // Remove sentences within paragraphs that mention prices
  // (split on . and filter sentences)
  cleaned = cleaned.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match, inner) => {
    const sentences = inner.split(/(?<=\.)\s+/);
    const filtered = sentences.filter((s: string) => {
      const plain = s.replace(/<[^>]+>/g, "");
      return !containsPrice(plain);
    });
    if (filtered.length === sentences.length) return match; // nothing changed
    const newInner = filtered.join(" ").trim();
    if (!newInner) return "";
    return match.replace(inner, newInner);
  });

  // Clean up empty <ul>/<ol> left after removing all <li>
  cleaned = cleaned.replace(/<ul[^>]*>\s*<\/ul>/gi, "");
  cleaned = cleaned.replace(/<ol[^>]*>\s*<\/ol>/gi, "");

  // Clean up excessive whitespace / double line breaks
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n").trim();

  return cleaned;
}

async function main() {
  console.log("🔍 Fetching all blog posts from Supabase...");

  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id, slug, lang, title, content");

  if (error) {
    console.error("✗ Failed to fetch posts:", error.message);
    process.exit(1);
  }

  console.log(`   Found ${posts.length} posts\n`);

  let updated = 0;
  let skipped = 0;

  for (const post of posts) {
    const originalContent = post.content || "";
    const cleanedContent = cleanHtml(originalContent);

    if (cleanedContent === originalContent) {
      skipped++;
      continue;
    }

    console.log(`  📝 Cleaning: [${post.lang}] ${post.title}`);

    const { error: updateError } = await supabase
      .from("blog_posts")
      .update({ content: cleanedContent })
      .eq("id", post.id);

    if (updateError) {
      console.error(`     ✗ Failed: ${updateError.message}`);
    } else {
      console.log(`     ✓ Updated`);
      updated++;
    }
  }

  console.log(`\n✅ Done — ${updated} posts cleaned, ${skipped} posts had no prices.`);
}

main();
