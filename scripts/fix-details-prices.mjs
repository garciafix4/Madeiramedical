import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, "../.env.local") });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const PRICE_RE = /\$[\d,\.]+|[\d,\.]+ ?(MXN|USD|pesos|dlls?)|costo|precio|tarifa|cuánto cuesta|how much|cost guide|price|pricing/i;

function cleanContent(html) {
  // Remove <details> blocks whose <summary> or body contains price-related text
  let out = html.replace(/<details[\s\S]*?<\/details>/gi, (match) => {
    const text = match.replace(/<[^>]+>/g, " ");
    return PRICE_RE.test(text) ? "" : match;
  });

  // Also clean any remaining <summary> tags with price content
  out = out.replace(/<summary[^>]*>([\s\S]*?)<\/summary>/gi, (match, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    return PRICE_RE.test(text) ? "" : match;
  });

  return out.replace(/\n{3,}/g, "\n\n").trim();
}

const { data: posts } = await sb.from("blog_posts").select("id, slug, lang, title, content");

let updated = 0;
for (const post of posts) {
  const cleaned = cleanContent(post.content || "");
  if (cleaned === post.content) continue;

  const { error } = await sb.from("blog_posts").update({ content: cleaned }).eq("id", post.id);
  if (error) {
    console.log(`✗ ${post.slug}: ${error.message}`);
  } else {
    console.log(`✓ [${post.lang}] ${post.title}`);
    updated++;
  }
}

console.log(`\n✅ Done — ${updated} posts updated.`);
