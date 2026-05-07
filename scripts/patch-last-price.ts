import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const { data } = await supabase
    .from("blog_posts")
    .select("id, content")
    .eq("slug", "edad-ortodoncista-ninos-puerto-vallarta")
    .single();

  if (!data) {
    // try by title fragment
    const { data: posts } = await supabase
      .from("blog_posts")
      .select("id, slug, content")
      .ilike("title", "%edad%ortodoncista%");
    if (!posts?.length) { console.log("Post not found"); return; }

    for (const post of posts) {
      const cleaned = post.content
        .replace(/<h[1-4][^>]*>[^<]*costo[^<]*<\/h[1-4]>/gi, "")
        .replace(/<p[^>]*>[^<]*costo[^<]*<\/p>/gi, "");
      await supabase.from("blog_posts").update({ content: cleaned }).eq("id", post.id);
      console.log("✓ Patched:", post.slug);
    }
    return;
  }

  const cleaned = data.content
    .replace(/<h[1-4][^>]*>[^<]*costo[^<]*<\/h[1-4]>/gi, "")
    .replace(/<p[^>]*>[^<]*costo[^<]*<\/p>/gi, "");
  await supabase.from("blog_posts").update({ content: cleaned }).eq("id", data.id);
  console.log("✓ Patched");
}

main();
