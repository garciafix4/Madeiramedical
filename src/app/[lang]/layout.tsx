import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

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
    },
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
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  return <div lang={lang}>{children}</div>;
}
