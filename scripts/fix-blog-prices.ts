/**
 * Nuclear cleanup: removes ALL price-related content from blog posts.
 * Handles: <p>, <li>, <td>/<tr>, <h2>/<h3>, standalone sentences.
 * Run: npx tsx scripts/fix-blog-prices.ts
 */
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function hasPrice(html: string): boolean {
  const text = html.replace(/<[^>]+>/g, " ");
  return /\$[\d,\.]+|[\d,\.]+ ?(MXN|USD|pesos|dlls?)|\bcosto\b|\bprecios?\b|\btarifa\b|\bcuánto cuesta\b|\bhow much\b|\bcost guide\b|\bprice\b|\bpricing\b/i.test(text);
}

function cleanHtml(html: string): string {
  let out = html;

  // 1. Remove entire <table> blocks that contain prices
  out = out.replace(/<table[\s\S]*?<\/table>/gi, (match) => {
    return hasPrice(match) ? "" : match;
  });

  // 2. Remove <tr> rows that contain prices (in case table itself was kept)
  out = out.replace(/<tr[\s\S]*?<\/tr>/gi, (match) => {
    return hasPrice(match) ? "" : match;
  });

  // 3. Remove <h1>/<h2>/<h3>/<h4> headings that are about prices
  out = out.replace(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi, (match, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    if (/precio|costo|tarifa|cuánto cuesta|cost|price|pricing/i.test(text)) return "";
    return match;
  });

  // 4. Remove <p> blocks containing prices
  out = out.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match) => {
    return hasPrice(match) ? "" : match;
  });

  // 5. Remove <li> items containing prices
  out = out.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (match) => {
    return hasPrice(match) ? "" : match;
  });

  // 6. Remove empty <ul>/<ol> left behind
  out = out.replace(/<ul[^>]*>\s*<\/ul>/gi, "");
  out = out.replace(/<ol[^>]*>\s*<\/ol>/gi, "");

  // 7. Remove empty <tbody>/<thead>
  out = out.replace(/<tbody[^>]*>\s*<\/tbody>/gi, "");
  out = out.replace(/<thead[^>]*>\s*<\/thead>/gi, "");

  // 8. Collapse multiple blank lines
  out = out.replace(/(\n\s*){3,}/g, "\n\n").trim();

  return out;
}

async function main() {
  console.log("🔍 Fetching all blog posts...");
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id, slug, lang, title, content");

  if (error) { console.error(error.message); process.exit(1); }

  let updated = 0;
  let clean = 0;

  for (const post of posts!) {
    const original = post.content || "";
    // Run multiple passes until stable
    let cleaned = original;
    for (let i = 0; i < 5; i++) {
      const pass = cleanHtml(cleaned);
      if (pass === cleaned) break;
      cleaned = pass;
    }

    if (cleaned === original) { clean++; continue; }

    const { error: err } = await supabase
      .from("blog_posts")
      .update({ content: cleaned })
      .eq("id", post.id);

    if (err) {
      console.log(`  ✗ [${post.lang}] ${post.title}: ${err.message}`);
    } else {
      console.log(`  ✓ [${post.lang}] ${post.title}`);
      updated++;
    }
  }

  console.log(`\n✅ Done — ${updated} updated, ${clean} already clean.`);
}

main();
