import { createServerSupabase } from "@/lib/supabase";

export interface BlogPost {
  id: string;
  slug: string;
  lang: "es" | "en";
  title: string;
  description: string;
  published_at: string;
  doctor_slug: string | null;
  specialty_slug: string | null;
  keywords: string[];
  cover_image: string | null;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export type BlogPostInput = Omit<BlogPost, "id" | "created_at" | "updated_at">;

export async function getAllPosts(lang?: string): Promise<BlogPost[]> {
  const supabase = createServerSupabase();
  let query = supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (lang) query = query.eq("lang", lang);
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function getAllPostsAdmin(): Promise<BlogPost[]> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function getPostBySlug(slug: string, lang?: string): Promise<BlogPost | null> {
  const supabase = createServerSupabase();
  let query = supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug);
  if (lang) query = query.eq("lang", lang);
  const { data, error } = await query.single();
  if (error) return null;
  return data;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

export async function createPost(input: BlogPostInput): Promise<BlogPost> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updatePost(id: string, input: Partial<BlogPostInput>): Promise<BlogPost> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .update(input)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deletePost(id: string): Promise<void> {
  const supabase = createServerSupabase();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw error;
}
