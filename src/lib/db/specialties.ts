import { createServerSupabase } from "@/lib/supabase";

export interface FAQ {
  q: string;
  a: string;
}

export interface Specialty {
  id: string;
  slug: string;
  name: string;
  name_en: string | null;
  headline: string | null;
  headline_en: string | null;
  description: string | null;
  description_en: string | null;
  keywords: string[];
  doctor_slugs: string[];
  faq: FAQ[];
  active: boolean;
  created_at: string;
  updated_at: string;
}

export type SpecialtyInput = Omit<Specialty, "id" | "created_at" | "updated_at">;

export async function getAllSpecialties(): Promise<Specialty[]> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("specialties")
    .select("*")
    .eq("active", true)
    .order("name");
  if (error) throw error;
  return data ?? [];
}

export async function getAllSpecialtiesAdmin(): Promise<Specialty[]> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("specialties")
    .select("*")
    .order("name");
  if (error) throw error;
  return data ?? [];
}

export async function getSpecialtyBySlug(slug: string): Promise<Specialty | null> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("specialties")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data;
}

export async function getSpecialtyById(id: string): Promise<Specialty | null> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("specialties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

export async function createSpecialty(input: SpecialtyInput): Promise<Specialty> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("specialties")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateSpecialty(id: string, input: Partial<SpecialtyInput>): Promise<Specialty> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("specialties")
    .update(input)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteSpecialty(id: string): Promise<void> {
  const supabase = createServerSupabase();
  const { error } = await supabase.from("specialties").delete().eq("id", id);
  if (error) throw error;
}
