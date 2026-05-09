import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/db/blog";
import { getAllDoctors } from "@/lib/db/doctors";
import { getAllSpecialties } from "@/lib/db/specialties";
import { getSiteConfig } from "@/lib/db/config";
import { SITE as SITE_FALLBACK, DOCTORS_LIST as DOCTORS_FALLBACK, SPECIALTIES_MAP as SPECIALTIES_FALLBACK } from "@/lib/content";
import { BLOG_POSTS as BLOG_FALLBACK, getPost as getPostFallback } from "@/lib/blog";
import { getDict } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const revalidate = 3600;

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  const postsFromDb = await getAllPosts().catch(() => []);
  const posts = postsFromDb.length > 0 ? postsFromDb : BLOG_FALLBACK;
  return posts.map((post) => ({ lang: post.lang, slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const [post, siteConfig, doctors] = await Promise.all([
    getPostBySlug(slug, lang),
    getSiteConfig("SITE").catch(() => null),
    getAllDoctors().catch(() => []),
  ]);
  if (!post) return {};

  const SITE = { ...SITE_FALLBACK, ...(siteConfig ?? {}) };
  const url = `https://madeiramedicalgroup.com/${lang}/blog/${slug}`;
  const image = post.cover_image ?? "https://madeiramedicalgroup.com/logo.png";

  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.description,
    keywords: post.keywords,
    authors: post.doctor_slug
      ? [{ name: doctors.find((d) => d.slug === post.doctor_slug)?.name ?? SITE.name }]
      : [{ name: SITE.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      locale: post.lang === "en" ? "en_US" : "es_MX",
      siteName: SITE.name,
      publishedTime: post.published_at,
      images: [{ url: image, width: 1280, height: 720, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const [postFromDb, doctorsFromDb, specialtiesFromDb, allPostsFromDb, siteConfig] = await Promise.all([
    getPostBySlug(slug, lang),
    getAllDoctors().catch(() => []),
    getAllSpecialties().catch(() => []),
    getAllPosts(lang).catch(() => []),
    getSiteConfig("SITE").catch(() => null),
  ]);
  const DOCTORS_LIST = doctorsFromDb.length > 0 ? doctorsFromDb : DOCTORS_FALLBACK;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SPECIALTIES_MAP: any[] = specialtiesFromDb.length > 0 ? specialtiesFromDb : SPECIALTIES_FALLBACK.map(s => ({ ...s, name_en: s.nameEn, doctor_slugs: s.doctorSlugs }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const post: any = postFromDb ?? (() => {
    const fb = getPostFallback(slug, lang);
    if (!fb) return null;
    return { ...fb, cover_image: fb.coverImage, doctor_slug: fb.doctorSlug, specialty_slug: fb.specialtySlug, published_at: fb.publishedAt };
  })();
  if (!post) notFound();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allPosts: any[] = allPostsFromDb.length > 0 ? allPostsFromDb : BLOG_FALLBACK.filter(p => p.lang === lang).map(p => ({ ...p, cover_image: p.coverImage, doctor_slug: p.doctorSlug, specialty_slug: p.specialtySlug }));

  const SITE = { ...SITE_FALLBACK, ...(siteConfig ?? {}) };
  const d = getDict(lang);
  const isEn = lang === "en";

  const doctor = post.doctor_slug ? DOCTORS_LIST.find((d) => d.slug === post.doctor_slug) : null;
  const specialty = post.specialty_slug ? SPECIALTIES_MAP.find((s) => s.slug === post.specialty_slug) : null;

  // Related posts (same specialty or lang, exclude current)
  const related = allPosts.filter(
    (p) => p.slug !== slug && p.lang === lang && (p.specialty_slug === post.specialty_slug || p.doctor_slug === post.doctor_slug)
  ).slice(0, 3);

  const whatsappMsg = isEn
    ? `Hello, I read your article "${post.title}" and would like to book an appointment`
    : `Hola, leí el artículo "${post.title}" y me gustaría agendar una cita`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: post.title,
      description: post.description,
      datePublished: post.published_at,
      url: `https://madeiramedicalgroup.com/${lang}/blog/${slug}`,
      image: post.cover_image ? `https://madeiramedicalgroup.com${post.cover_image}` : undefined,
      publisher: { "@type": "MedicalOrganization", name: SITE.name, url: `https://madeiramedicalgroup.com/${lang}` },
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
        { "@type": "ListItem", position: 2, name: "Blog", item: `https://madeiramedicalgroup.com/${lang}/blog` },
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

            {/* Breadcrumb */}
            <nav className="text-white/40 text-xs mb-6 flex items-center gap-1.5 flex-wrap">
              <Link href={`/${lang}`} className="hover:text-white/70 transition-colors">{SITE.name}</Link>
              <span>/</span>
              <Link href={`/${lang}/blog`} className="hover:text-white/70 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/60 truncate max-w-[220px]">{post.title}</span>
            </nav>

            {specialty && (
              <Link
                href={`/${lang}/especialidades/${specialty.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5 transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(4,107,159,0.5)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                {isEn ? specialty.name_en : specialty.name}
              </Link>
            )}

            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>

            <p className="text-white/60 text-sm mb-8 leading-relaxed max-w-2xl">
              {post.description}
            </p>

            {/* Author row */}
            {doctor ? (
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/20 shrink-0">
                  <Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="44px" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{doctor.name}</p>
                  <p className="text-white/50 text-xs">
                    {doctor.specialty} · {new Date(post.published_at).toLocaleDateString(isEn ? "en-US" : "es-MX", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-white/50 text-xs">
                {new Date(post.published_at).toLocaleDateString(isEn ? "en-US" : "es-MX", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            )}
          </div>

          {/* Cover image full-width */}
          {post.cover_image && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="relative w-full rounded-t-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/7" }}>
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          )}

          <svg viewBox="0 0 1440 40" className="w-full block" style={{ display: "block", marginTop: post.cover_image ? 0 : undefined }}>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>

        {/* ── LAYOUT: article + sidebar ─────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">

            {/* ── ARTICLE CONTENT ─────────────────────────── */}
            <article>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* ── DOCTOR CARD (inline) ─────────────────────── */}
              {doctor && (
                <div className="mt-12 rounded-2xl p-6 flex items-start gap-5 border" style={{ backgroundColor: "#f0f9ff", borderColor: "#bae6fd" }}>
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 ring-2 ring-white shadow">
                    <Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="80px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#046b9f" }}>
                      {isEn ? "Written by" : "Escrito por"}
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
              )}

              {/* ── RELATED POSTS ───────────────────────────── */}
              {related.length > 0 && (
                <div className="mt-14">
                  <h3 className="text-lg font-bold mb-6" style={{ color: "#023047" }}>
                    {isEn ? "Related Articles" : "Artículos relacionados"}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {related.map((rel) => (
                      <Link key={rel.slug} href={`/${lang}/blog/${rel.slug}`} className="group block rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
                          {rel.cover_image ? (
                            <Image src={rel.cover_image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="200px" />
                          ) : (
                            <div className="w-full h-full" style={{ background: "linear-gradient(135deg,#023047,#046b9f)" }} />
                          )}
                        </div>
                        <div className="p-3">
                          <p className="text-xs font-bold leading-snug group-hover:text-[#046b9f] transition-colors line-clamp-2" style={{ color: "#023047" }}>
                            {rel.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* ── SIDEBAR ─────────────────────────────────── */}
            <aside className="hidden lg:block space-y-6">

              {/* WhatsApp CTA */}
              <div className="rounded-2xl p-6 text-white sticky top-24" style={{ background: "linear-gradient(135deg,#023047,#046b9f)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/60">
                  {isEn ? "Book an appointment" : "Agendar consulta"}
                </p>
                <p className="text-sm font-semibold mb-1">
                  {isEn ? "Questions about this article?" : "¿Tienes dudas sobre este artículo?"}
                </p>
                <p className="text-xs text-white/60 mb-5">
                  {isEn ? "Our specialists are ready to help you." : "Nuestros especialistas están listos para ayudarte."}
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  💬 WhatsApp
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium mt-2 border border-white/20 hover:bg-white/10 transition-colors"
                  style={{ color: "#fff" }}
                >
                  📞 {SITE.phone}
                </a>
              </div>

              {/* Doctor card (sidebar) */}
              {doctor && (
                <div className="rounded-2xl p-5 border" style={{ backgroundColor: "#f8fbff", borderColor: "#e0f2fe" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#046b9f" }}>
                    {isEn ? "About the author" : "Sobre el autor"}
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                      <Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="56px" />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "#023047" }}>{doctor.name}</p>
                      <p className="text-xs text-gray-500">{doctor.specialty}</p>
                    </div>
                  </div>
                  <Link href={`/${lang}/medicos/${doctor.slug}`} className="block text-center text-xs font-semibold py-2 rounded-lg hover:opacity-80 transition-opacity" style={{ backgroundColor: "#e0f2fe", color: "#023047" }}>
                    {isEn ? "View profile" : "Ver perfil"}
                  </Link>
                </div>
              )}

              {/* Specialty link */}
              {specialty && (
                <div className="rounded-2xl p-5 border border-gray-100" style={{ backgroundColor: "#f8fbff" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-gray-400">
                    {isEn ? "Specialty" : "Especialidad"}
                  </p>
                  <Link
                    href={`/${lang}/especialidades/${specialty.slug}`}
                    className="flex items-center justify-between text-sm font-semibold hover:underline"
                    style={{ color: "#046b9f" }}
                  >
                    <span>{isEn ? specialty.name_en : specialty.name}</span>
                    <span>→</span>
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* ── BOTTOM CTA ────────────────────────────────────── */}
        <section className="py-16 px-4" style={{ background: "linear-gradient(135deg,#012030,#023047)" }}>
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
                target="_blank" rel="noopener noreferrer"
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
