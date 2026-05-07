import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, "../.env.local") });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const { data } = await sb.from("blog_posts").select("id,content").ilike("title", "%edad%ortod%");
if (data?.length) {
  const post = data[0];
  const idx = post.content.toLowerCase().indexOf("costo");
  console.log("ID:", post.id);
  console.log("RAW:", JSON.stringify(post.content.substring(Math.max(0, idx - 80), idx + 300)));
}
