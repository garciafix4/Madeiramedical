import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDoctorBySlug, getAllDoctors } from "@/lib/db/doctors";
import { getAllSpecialties } from "@/lib/db/specialties";
import { getSiteConfig } from "@/lib/db/config";
import { SITE as SITE_FALLBACK, DOCTORS_LIST as DOCTORS_FALLBACK } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const revalidate = 3600;

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  const doctorsFromDb = await getAllDoctors().catch(() => []);
  const doctors = doctorsFromDb.length > 0 ? doctorsFromDb : DOCTORS_FALLBACK;
  const langs = ["es", "en"];
  return langs.flatMap((lang) => doctors.map((doctor) => ({ lang, slug: doctor.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const doctor = await getDoctorBySlug(slug);
  if (!doctor) return {};

  const isEn = lang === "en";
  const title = isEn
    ? `${doctor.name} — ${doctor.specialty} | Madeira Medical Group Puerto Vallarta`
    : `${doctor.name} — ${doctor.specialty} | Madeira Medical Group Puerto Vallarta`;

  const description = isEn
    ? `${doctor.name}, specialist in ${doctor.specialty} at Madeira Medical Group, Puerto Vallarta. ${doctor.services.slice(0, 3).join(", ")}. Call ${doctor.phone}.`
    : `${doctor.name}, especialista en ${doctor.specialty} en Madeira Medical Group, Puerto Vallarta. ${doctor.services.slice(0, 3).join(", ")}. Tel: ${doctor.phone}.`;

  const url = `https://madeiramedicalgroup.com/${lang}/medicos/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      locale: isEn ? "en_US" : "es_MX",
      siteName: "Madeira Medical Group",
      images: [
        {
          url: `https://madeiramedicalgroup.com${doctor.photo}`,
          width: 800,
          height: 800,
          alt: doctor.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://madeiramedicalgroup.com${doctor.photo}`],
    },
    alternates: {
      canonical: url,
      languages: {
        es: `https://madeiramedicalgroup.com/es/medicos/${slug}`,
        en: `https://madeiramedicalgroup.com/en/medicos/${slug}`,
        "x-default": `https://madeiramedicalgroup.com/es/medicos/${slug}`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function DoctorPage({ params }: Props) {
  const { lang, slug } = await params;
  const [doctor, SPECIALTIES_MAP, siteConfig] = await Promise.all([
    getDoctorBySlug(slug),
    getAllSpecialties().catch(() => []),
    getSiteConfig("SITE").catch(() => null),
  ]);
  if (!doctor) notFound();
  const SITE = { ...SITE_FALLBACK, ...(siteConfig ?? {}) };

  const d = getDict(lang);
  const isEn = lang === "en";

  // ── JSON-LD Schema: Physician ──────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: `${doctor.specialty}${doctor.services.length ? ". " + doctor.services.join(", ") : ""}`,
    image: `https://madeiramedicalgroup.com${doctor.photo}`,
    telephone: doctor.phone,
    url: `https://madeiramedicalgroup.com/${lang}/medicos/${slug}`,
    medicalSpecialty: doctor.specialty,
    ...(doctor.services.length > 0 && {
      availableService: doctor.services.map((s) => ({
        "@type": "MedicalTherapy",
        name: s,
      })),
    }),
    memberOf: {
      "@type": "MedicalOrganization",
      name: SITE.name,
      url: `https://madeiramedicalgroup.com/${lang}`,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Havre #239-101",
        addressLocality: "Puerto Vallarta",
        addressRegion: "Jalisco",
        postalCode: "48310",
        addressCountry: "MX",
      },
    },
    worksFor: {
      "@type": "MedicalClinic",
      name: SITE.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Havre #239-101",
        addressLocality: "Puerto Vallarta",
        addressRegion: "Jalisco",
        postalCode: "48310",
        addressCountry: "MX",
      },
    },
    // BreadcrumbList for rich results
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Madeira Medical Group",
          item: `https://madeiramedicalgroup.com/${lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: isEn ? "Doctors" : "Médicos",
          item: `https://madeiramedicalgroup.com/${lang}#medicos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: doctor.name,
          item: `https://madeiramedicalgroup.com/${lang}/medicos/${slug}`,
        },
      ],
    },
  };

  const whatsappMsg = isEn
    ? `Hello, I'd like to book an appointment with ${doctor.name}`
    : `Hola, quiero agendar una cita con ${doctor.name}`;

  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;
  const phoneClean = doctor.phone.replace(/[\s\-]/g, "");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhatsAppButton />
      <Navbar d={d} />

      <div className="min-h-screen font-sans" style={{ backgroundColor: "#f0f9ff" }}>
        {/* ── HERO ──────────────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(135deg, #012030 0%, #023047 60%, #046b9f 100%)" }} className="pt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Photo */}
              <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Info */}
              <div>
                {/* Breadcrumb */}
                <nav className="text-white/40 text-xs mb-4 flex items-center gap-1.5">
                  <Link href={`/${lang}`} className="hover:text-white/70 transition-colors">
                    {SITE.name}
                  </Link>
                  <span>/</span>
                  <Link href={`/${lang}#medicos`} className="hover:text-white/70 transition-colors">
                    {isEn ? "Doctors" : "Médicos"}
                  </Link>
                  <span>/</span>
                  <span className="text-white/60">{doctor.name}</span>
                </nav>

                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ backgroundColor: "rgba(4,107,159,0.5)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  {doctor.specialty}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {doctor.name}
                </h1>

                <p className="text-white/60 text-sm mb-2 flex items-center gap-2">
                  📍 {SITE.address}
                </p>

                {/* Specialty hub links */}
                {(() => {
                  const doctorSpecs = SPECIALTIES_MAP.filter((spec) =>
                    spec.doctor_slugs.includes(slug)
                  );
                  if (doctorSpecs.length === 0) return null;
                  return (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {doctorSpecs.map((spec) => (
                        <Link
                          key={spec.slug}
                          href={`/${lang}/especialidades/${spec.slug}`}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all hover:opacity-80"
                          style={{
                            backgroundColor: "rgba(4,107,159,0.3)",
                            color: "#e0f2fe",
                            border: "1px solid rgba(255,255,255,0.15)",
                          }}
                        >
                          {isEn ? spec.name_en : spec.name}
                        </Link>
                      ))}
                    </div>
                  );
                })()}

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                    style={{ backgroundColor: "#25D366", color: "#fff" }}
                  >
                    💬 {isEn ? "Book on WhatsApp" : "Agendar por WhatsApp"}
                  </a>
                  <a
                    href={`tel:${phoneClean}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/10"
                    style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
                  >
                    📞 {doctor.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Wave */}
          <svg viewBox="0 0 1440 40" className="w-full block" style={{ display: "block" }}>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f0f9ff" />
          </svg>
        </div>

        {/* ── SERVICES ──────────────────────────────────────────── */}
        {doctor.services.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#023047" }}>
                {isEn ? "Services" : "Servicios"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {doctor.services.map((service, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl px-5 py-4 shadow-sm flex items-start gap-3"
                  >
                    <span
                      className="mt-1 shrink-0 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#046b9f", marginTop: "7px" }}
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── LOCATION ──────────────────────────────────────────── */}
        <section className="py-10 px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-3xl">📍</div>
              <div className="flex-1">
                <p className="font-semibold text-sm mb-0.5" style={{ color: "#023047" }}>
                  {isEn ? "Location" : "Ubicación"}
                </p>
                <p className="text-gray-500 text-sm">{SITE.address}</p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-80"
                style={{ backgroundColor: "#e0f2fe", color: "#023047" }}
              >
                {isEn ? "View on Maps" : "Ver en Maps"}
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA BOTTOM ────────────────────────────────────────── */}
        <section className="py-16 px-4" style={{ backgroundColor: "#023047" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {isEn
                ? `Book an appointment with ${doctor.name}`
                : `Agenda una cita con ${doctor.name}`}
            </h2>
            <p className="text-white/60 text-sm mb-8">
              {isEn
                ? "We are located in the heart of Versalles, Puerto Vallarta's top medical district."
                : "Estamos en el corazón de Versalles, la zona médica más importante de Puerto Vallarta."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                💬 WhatsApp
              </a>
              <a
                href={`tel:${phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              >
                📞 {doctor.phone}
              </a>
            </div>

            <div className="mt-10">
              <Link
                href={`/${lang}#medicos`}
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                ← {isEn ? "Back to all doctors" : "Ver todos los médicos"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
