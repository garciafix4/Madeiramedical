import { createServerSupabase } from "@/lib/supabase";

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  phone: string;
  photo: string;
  services: string[];
  lang: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export type DoctorInput = Omit<Doctor, "id" | "created_at" | "updated_at">;

export async function getAllDoctors(): Promise<Doctor[]> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("active", true)
    .order("name");
  if (error) throw error;
  return data ?? [];
}

export async function getAllDoctorsAdmin(): Promise<Doctor[]> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .order("name");
  if (error) throw error;
  return data ?? [];
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data;
}

export async function getDoctorById(id: string): Promise<Doctor | null> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

export async function createDoctor(input: DoctorInput): Promise<Doctor> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("doctors")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateDoctor(id: string, input: Partial<DoctorInput>): Promise<Doctor> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("doctors")
    .update(input)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteDoctor(id: string): Promise<void> {
  const supabase = createServerSupabase();
  const { error } = await supabase.from("doctors").delete().eq("id", id);
  if (error) throw error;
}
