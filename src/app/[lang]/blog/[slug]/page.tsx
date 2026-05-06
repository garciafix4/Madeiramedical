import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { DOCTORS_LIST, SPECIALTIES_MAP, SITE } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ lang: post.lang, slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug, lang);
  if (!post) return {};

  const url = `https://madeiramedicalgroup.com/${lang}/blog/${slug}`;
  const image = post.coverImage
    ? `https://madeiramedicalgroup.com${post.coverImage}`
    : "https://madeiramedicalgroup.com/logo.png";

  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.description,
    keywords: post.keywords,
    authors: post.doctorSlug
      ? [{ name: DOCTORS_LIST.find((d) => d.slug === post.doctorSlug)?.name ?? SITE.name }]
      : [{ name: SITE.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      locale: post.lang === "en" ? "en_US" : "es_MX",
      siteName: SITE.name,
      publishedTime: post.publishedAt,
      images: [{ url: image, width: 800, height: 800, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
    alternates: {
      canonical: url,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = getPost(slug, lang);
  if (!post) notFound();

  const d = getDict(lang);
  const isEn = lang === "en";

  const doctor = post.doctorSlug ? DOCTORS_LIST.find((d) => d.slug === post.doctorSlug) : null;
  const specialty = post.specialtySlug ? SPECIALTIES_MAP.find((s) => s.slug === post.specialtySlug) : null;

  const whatsappMsg = isEn
    ? `Hello, I read your article "${post.title}" and would like to book an appointment`
    : `Hola, leí el artículo "${post.title}" y me gustaría agendar una cita`;

  // JSON-LD: Article + optional Physician authorship
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      url: `https://madeiramedicalgroup.com/${lang}/blog/${slug}`,
      image: post.coverImage ? `https://madeiramedicalgroup.com${post.coverImage}` : undefined,
      publisher: {
        "@type": "MedicalOrganization",
        name: SITE.name,
        url: `https://madeiramedicalgroup.com/${lang}`,
      },
      ...(doctor && {
        author: {
          "@type": "Physician",
          name: doctor.name,
          medicalSpecialty: doctor.specialty,
          url: `https://madeiramedicalgroup.com/${lang}/medicos/${doctor.slug}`,
        },
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: `https://madeiramedicalgroup.com/${lang}` },
        { "@type": "ListItem", position: 2, name: isEn ? "Blog" : "Blog", item: `https://madeiramedicalgroup.com/${lang}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://madeiramedicalgroup.com/${lang}/blog/${slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatsAppButton />
      <Navbar d={d} />

      <div className="min-h-screen font-sans bg-white">

        {/* ── HERO ──────────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(135deg, #012030 0%, #023047 60%, #046b9f 100%)" }} className="pt-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
            {/* Breadcrumb */}
            <nav className="text-white/40 text-xs mb-5 flex items-center gap-1.5 flex-wrap">
              <Link href={`/${lang}`} className="hover:text-white/70 transition-colors">{SITE.name}</Link>
              <span>/</span>
              <Link href={`/${lang}/blog`} className="hover:text-white/70 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/60 truncate max-w-[200px]">{post.title}</span>
            </nav>

            {specialty && (
              <Link
                href={`/${lang}/especialidades/${specialty.slug}`}
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(4,107,159,0.5)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {isEn ? specialty.nameEn : specialty.name}
              </Link>
            )}

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-white/60 text-sm">
              {new Date(post.publishedAt).toLocaleDateString(isEn ? "en-US" : "es-MX", { year: "numeric", month: "long", day: "numeric" })}
              {doctor && <> · <Link href={`/${lang}/medicos/${doctor.slug}`} className="text-white/70 hover:text-white transition-colors">{doctor.name}</Link></>}
            </p>
          </div>

          {/* Cover image */}
          {post.coverImage && (
            <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-0">
              <div className="relative w-full rounded-t-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/7" }}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          )}

          <svg viewBox="0 0 1440 30" className="w-full block" style={{ display: "block" }}>
            <path d="M0,15 C360,30 1080,0 1440,15 L1440,30 L0,30 Z" fill="white" />
          </svg>
        </div>

        {/* ── CONTENT ───────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div
            className="prose prose-lg max-w-none"
            style={{
              "--tw-prose-headings": "#023047",
              "--tw-prose-body": "#374151",
              "--tw-prose-links": "#046b9f",
            } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* ── DOCTOR CARD ───────────────────────────────────── */}
        {doctor && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
            <div className="rounded-2xl p-6 flex items-start gap-5 border" style={{ backgroundColor: "#f0f9ff", borderColor: "#bae6fd" }}>
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="80px" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#046b9f" }}>
                  {isEn ? "About the author" : "Sobre el autor"}
                </p>
                <h3 className="font-bold text-base mb-0.5" style={{ color: "#023047" }}>{doctor.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{doctor.specialty}</p>
                <Link
                  href={`/${lang}/medicos/${doctor.slug}`}
                  className="text-xs font-semibold hover:underline"
                  style={{ color: "#046b9f" }}
                >
                  {isEn ? "View full profile →" : "Ver perfil completo →"}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-16 px-4" style={{ backgroundColor: "#023047" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {isEn ? "Have questions? Book a consultation" : "¿Tienes dudas? Agenda una consulta"}
            </h2>
            <p className="text-white/60 text-sm mb-8">
              {isEn
                ? "Our team at Madeira Medical Group is ready to help you. Located in Versalles, Puerto Vallarta."
                : "Nuestro equipo en Madeira Medical Group está listo para atenderte. Versalles, Puerto Vallarta."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                💬 WhatsApp
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              >
                📞 {SITE.phone}
              </a>
            </div>
            <div className="mt-8">
              <Link href={`/${lang}/blog`} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                ← {isEn ? "Back to blog" : "Volver al blog"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
