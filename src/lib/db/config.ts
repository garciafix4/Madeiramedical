import { createServerSupabase } from "@/lib/supabase";

export interface SiteConfigRecord {
  key: string;
  value: Record<string, unknown>;
  updated_at: string;
}

export async function getAllConfig(): Promise<Record<string, unknown>> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase.from("site_config").select("*");
  if (error) throw error;
  const result: Record<string, unknown> = {};
  for (const row of data ?? []) {
    result[row.key] = row.value;
  }
  return result;
}

export async function getSiteConfig(key: string): Promise<Record<string, unknown> | null> {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("site_config")
    .select("value")
    .eq("key", key)
    .single();
  if (error) return null;
  return data?.value ?? null;
}

export async function updateConfig(key: string, value: Record<string, unknown>): Promise<void> {
  const supabase = createServerSupabase();
  const { error } = await supabase
    .from("site_config")
    .upsert({ key, value }, { onConflict: "key" });
  if (error) throw error;
}
