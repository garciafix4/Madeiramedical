import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env.local") });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

const { data } = await sb.from("blog_posts").select("id,content").ilike("title", "%edad%ortod%");
if (data?.length) {
  const post = data[0];
  const idx = post.content.toLowerCase().indexOf("costo");
  console.log("ID:", post.id);
  console.log("RAW:", JSON.stringify(post.content.substring(Math.max(0, idx - 80), idx + 250)));
}
