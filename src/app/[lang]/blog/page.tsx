import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/db/blog";
import { getAllDoctors } from "@/lib/db/doctors";
import { getAllSpecialties } from "@/lib/db/specialties";
import { getSiteConfig } from "@/lib/db/config";
import { SITE as SITE_FALLBACK } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const revalidate = 3600;

type Props = { params: Promise<{ lang: string }> };

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const siteConfig = await getSiteConfig("SITE").catch(() => null);
  const siteName = (siteConfig?.name as string) ?? SITE_FALLBACK.name;
  const title = isEn ? `Health Blog | ${siteName}` : `Blog de Salud | ${siteName}`;
  const description = isEn
    ? "Expert health articles from the specialist doctors at Madeira Medical Group in Puerto Vallarta. Dental implants, Invisalign, plastic surgery, gynecology, and more."
    : "Artículos de salud escritos por los especialistas de Madeira Medical Group en Puerto Vallarta. Implantes dentales, Invisalign, cirugía plástica, ginecología y más.";
  const url = `https://madeiramedicalgroup.com/${lang}/blog`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { es: "https://madeiramedicalgroup.com/es/blog", en: "https://madeiramedicalgroup.com/en/blog" },
    },
    openGraph: { title, description, url, type: "website", siteName, locale: isEn ? "en_US" : "es_MX" },
    robots: { index: true, follow: true },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  const d = getDict(lang);
  const isEn = lang === "en";
  const [posts, DOCTORS_LIST, SPECIALTIES_MAP, siteConfig] = await Promise.all([
    getAllPosts(lang).catch(() => []),
    getAllDoctors().catch(() => []),
    getAllSpecialties().catch(() => []),
    getSiteConfig("SITE").catch(() => null),
  ]);
  const SITE = { ...(siteConfig ?? SITE_FALLBACK), ...SITE_FALLBACK, ...(siteConfig ?? {}) };

  // Split into featured (first 1) + rest
  const [featured, ...rest] = posts;

  return (
    <>
      <WhatsAppButton />
      <Navbar d={d} />

      <div className="min-h-screen font-sans bg-white">

        {/* ── HERO ──────────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(135deg, #012030 0%, #023047 60%, #046b9f 100%)" }} className="pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
              {isEn ? "Health & Wellness" : "Salud y Bienestar"}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {isEn ? "Health Blog" : "Blog de Salud"}
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
              {isEn
                ? "Expert articles by our certified physicians at Madeira Medical Group, Versalles, Puerto Vallarta."
                : "Artículos especializados escritos por los médicos certificados de Madeira Medical Group, Versalles, Puerto Vallarta."}
            </p>
          </div>
          <svg viewBox="0 0 1440 40" className="w-full block" style={{ display: "block" }}>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

          {posts.length === 0 ? (
            <p className="text-center text-gray-400 py-20">
              {isEn ? "No articles yet. Check back soon!" : "Próximamente nuevos artículos."}
            </p>
          ) : (
            <>
              {/* ── FEATURED POST ──────────────────────────────── */}
              {featured && (() => {
                const doctor = featured.doctor_slug ? DOCTORS_LIST.find((d) => d.slug === featured.doctor_slug) : null;
                const specialty = featured.specialty_slug ? SPECIALTIES_MAP.find((s) => s.slug === featured.specialty_slug) : null;
                return (
                  <Link href={`/${lang}/blog/${featured.slug}`} className="group block mb-14">
                    <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
                        {featured.cover_image ? (
                          <Image
                            src={featured.cover_image}
                            alt={featured.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#023047,#046b9f)" }}>
                            <span className="text-white/20 text-7xl">⚕️</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                        {specialty && (
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "rgba(4,107,159,0.85)", backdropFilter: "blur(8px)" }}>
                            {isEn ? specialty.name_en : specialty.name}
                          </span>
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex flex-col justify-center p-8 md:p-10" style={{ backgroundColor: "#f8fbff" }}>
                        <span className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#046b9f" }}>
                          {isEn ? "Featured Article" : "Artículo Destacado"}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-[#046b9f] transition-colors" style={{ color: "#023047" }}>
                          {featured.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                          {featured.description}
                        </p>
                        <div className="flex items-center gap-3 mb-6">
                          {doctor && (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-white shadow">
                              <Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="40px" />
                            </div>
                          )}
                          <div>
                            {doctor && <p className="text-xs font-semibold" style={{ color: "#023047" }}>{doctor.name}</p>}
                            <p className="text-xs text-gray-400">
                              {new Date(featured.published_at).toLocaleDateString(isEn ? "en-US" : "es-MX", { year: "numeric", month: "long", day: "numeric" })}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#046b9f" }}>
                          {isEn ? "Read article" : "Leer artículo"} →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })()}

              {/* ── GRID ────────────────────────────────────────── */}
              {rest.length > 0 && (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => {
                    const doctor = post.doctor_slug ? DOCTORS_LIST.find((d) => d.slug === post.doctor_slug) : null;
                    const specialty = post.specialty_slug ? SPECIALTIES_MAP.find((s) => s.slug === post.specialty_slug) : null;
                    return (
                      <Link
                        key={post.slug}
                        href={`/${lang}/blog/${post.slug}`}
                        className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Cover */}
                        <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
                          {post.cover_image ? (
                            <Image
                              src={post.cover_image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#023047,#046b9f)" }}>
                              <span className="text-white/20 text-5xl">⚕️</span>
                            </div>
                          )}
                          {specialty && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "rgba(4,107,159,0.85)", backdropFilter: "blur(8px)" }}>
                              {isEn ? specialty.name_en : specialty.name}
                            </span>
                          )}
                        </div>

                        {/* Body */}
                        <div className="flex flex-col flex-1 p-5">
                          <h2 className="font-bold text-base leading-snug mb-2 group-hover:text-[#046b9f] transition-colors line-clamp-2" style={{ color: "#023047" }}>
                            {post.title}
                          </h2>
                          <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
                            {post.description}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              {doctor && (
                                <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 ring-1 ring-gray-200">
                                  <Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="28px" />
                                </div>
                              )}
                              <p className="text-xs text-gray-400">
                                {new Date(post.published_at).toLocaleDateString(isEn ? "en-US" : "es-MX", { month: "short", day: "numeric", year: "numeric" })}
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
            </>
          )}
        </div>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-16 px-4" style={{ background: "linear-gradient(135deg,#012030,#023047)" }}>
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
