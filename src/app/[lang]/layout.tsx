import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = getDict(lang);
  const isEn = lang === "en";

  return {
    title: d.meta.title,
    description: d.meta.description,
    keywords: d.meta.keywords,
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      type: "website",
      locale: isEn ? "en_US" : "es_MX",
      siteName: "Madeira Medical Group",
      images: [{ url: "https://madeiramedicalgroup.com/hero-photo.jpg", width: 1600, height: 950, alt: "Madeira Medical Group — Especialistas médicos en Puerto Vallarta" }],
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description, images: ["https://madeiramedicalgroup.com/hero-photo.jpg"] },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://madeiramedicalgroup.com/${lang}`,
      languages: {
        "es": "https://madeiramedicalgroup.com/es",
        "en": "https://madeiramedicalgroup.com/en",
        "x-default": "https://madeiramedicalgroup.com/es",
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <div lang={lang} suppressHydrationWarning>{children}</div>;
}
