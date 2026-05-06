import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, getPostsByLang } from "@/lib/blog";
import { DOCTORS_LIST, SPECIALTIES_MAP, SITE } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = { params: Promise<{ lang: string }> };

export async function generateStaticParams() {
  const langs = [...new Set(BLOG_POSTS.map((p) => p.lang))];
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn ? `Health Blog | ${SITE.name}` : `Blog de Salud | ${SITE.name}`;
  const description = isEn
    ? "Expert health articles from the specialist doctors at Madeira Medical Group in Puerto Vallarta. Topics: dental implants, Invisalign, plastic surgery, gynecology, and more."
    : "Artículos de salud escritos por los especialistas de Madeira Medical Group en Puerto Vallarta. Temas: implantes dentales, Invisalign, cirugía plástica, ginecología y más.";
  const url = `https://madeiramedicalgroup.com/${lang}/blog`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { es: "https://madeiramedicalgroup.com/es/blog", en: "https://madeiramedicalgroup.com/en/blog" },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE.name,
      locale: isEn ? "en_US" : "es_MX",
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  const d = getDict(lang);
  const isEn = lang === "en";
  const posts = getPostsByLang(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: isEn ? "Madeira Medical Group Health Blog" : "Blog de Salud Madeira Medical Group",
    url: `https://madeiramedicalgroup.com/${lang}/blog`,
    publisher: {
      "@type": "MedicalOrganization",
      name: SITE.name,
      url: `https://madeiramedicalgroup.com/${lang}`,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      url: `https://madeiramedicalgroup.com/${lang}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatsAppButton />
      <Navbar d={d} />

      <div className="min-h-screen font-sans bg-white">

        {/* ── HERO ──────────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(135deg, #012030 0%, #023047 60%, #046b9f 100%)" }} className="pt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-semibold">
              {isEn ? "Health & Wellness" : "Salud y Bienestar"}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {isEn ? "Health Blog" : "Blog de Salud"}
            </h1>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              {isEn
                ? "Expert articles written by our specialist physicians at Madeira Medical Group."
                : "Artículos especializados escritos por los médicos de Madeira Medical Group."}
            </p>
          </div>
          <svg viewBox="0 0 1440 30" className="w-full block" style={{ display: "block" }}>
            <path d="M0,15 C360,30 1080,0 1440,15 L1440,30 L0,30 Z" fill="white" />
          </svg>
        </div>

        {/* ── POSTS GRID ────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          {posts.length === 0 ? (
            <p className="text-center text-gray-400 py-20">
              {isEn ? "No articles yet. Check back soon!" : "Próximamente nuevos artículos."}
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const doctor = post.doctorSlug ? DOCTORS_LIST.find((d) => d.slug === post.doctorSlug) : null;
                const specialty = post.specialtySlug ? SPECIALTIES_MAP.find((s) => s.slug === post.specialtySlug) : null;

                return (
                  <Link
                    key={post.slug}
                    href={`/${lang}/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    {/* Cover image */}
                    <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#023047" }}>
                          <span className="text-white/30 text-4xl">+</span>
                        </div>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5">
                      {specialty && (
                        <span className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#046b9f" }}>
                          {isEn ? specialty.nameEn : specialty.name}
                        </span>
                      )}
                      <h2 className="font-bold text-base leading-snug mb-2 group-hover:text-[#046b9f] transition-colors" style={{ color: "#023047" }}>
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          {doctor && (
                            <p className="text-xs font-medium" style={{ color: "#023047" }}>{doctor.name}</p>
                          )}
                          <p className="text-xs text-gray-400">
                            {new Date(post.publishedAt).toLocaleDateString(isEn ? "en-US" : "es-MX", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <span className="text-xs font-semibold" style={{ color: "#046b9f" }}>
                          {isEn ? "Read →" : "Leer →"}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-16 px-4" style={{ backgroundColor: "#023047" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {isEn ? "Ready to book an appointment?" : "¿Listo para agendar una consulta?"}
            </h2>
            <p className="text-white/60 text-sm mb-8">
              {isEn
                ? "Our specialists are available Monday–Saturday in Versalles, Puerto Vallarta."
                : "Nuestros especialistas te esperan de lunes a sábado en Versalles, Puerto Vallarta."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(isEn ? "Hello, I'd like to book an appointment at Madeira Medical Group" : "Hola, me gustaría agendar una cita en Madeira Medical Group")}`}
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
              <Link href={`/${lang}`} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                ← {isEn ? "Back to home" : "Volver al inicio"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
