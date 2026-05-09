import type { MetadataRoute } from "next";
import { DOCTORS_LIST, SPECIALTIES_MAP } from "@/lib/content";
import { BLOG_POSTS } from "@/lib/blog";

const BASE_URL = "https://madeiramedicalgroup.com";
const LANGS = ["es", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = LANGS.flatMap((lang) => [
    { url: `${BASE_URL}/${lang}`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/${lang}/blog`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
  ]);

  const doctorPages = LANGS.flatMap((lang) =>
    DOCTORS_LIST.map((doctor) => ({
      url: `${BASE_URL}/${lang}/medicos/${doctor.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const specialtyPages = LANGS.flatMap((lang) =>
    SPECIALTIES_MAP.map((spec) => ({
      url: `${BASE_URL}/${lang}/especialidades/${spec.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/${post.lang}/blog/${post.slug}`,
    lastModified: post.publishedAt ?? now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const rentalPages = [
    { url: `${BASE_URL}/es/renta-consultorios-medicos-puerto-vallarta`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/en/medical-office-rental-puerto-vallarta`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return [...staticPages, ...doctorPages, ...specialtyPages, ...blogPages, ...rentalPages];
}
