-- ============================================================
-- MADEIRA MEDICAL GROUP — SUPABASE SCHEMA
-- Run this in the Supabase SQL editor
-- ============================================================

-- Doctors
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  specialty text NOT NULL,
  phone text,
  photo text,
  services text[] DEFAULT '{}',
  lang text DEFAULT 'es',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  lang text NOT NULL CHECK (lang IN ('es', 'en')),
  title text NOT NULL,
  description text,
  published_at date,
  doctor_slug text,
  specialty_slug text,
  keywords text[] DEFAULT '{}',
  cover_image text,
  content text,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Specialties
CREATE TABLE IF NOT EXISTS specialties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  name_en text,
  headline text,
  headline_en text,
  description text,
  description_en text,
  keywords text[] DEFAULT '{}',
  doctor_slugs text[] DEFAULT '{}',
  faq jsonb DEFAULT '[]',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Site Config (key/value store)
CREATE TABLE IF NOT EXISTS site_config (
  key text PRIMARY KEY,
  value jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER doctors_updated_at BEFORE UPDATE ON doctors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER specialties_updated_at BEFORE UPDATE ON specialties
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER site_config_updated_at BEFORE UPDATE ON site_config
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
