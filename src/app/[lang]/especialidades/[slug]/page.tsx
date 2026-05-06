import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOCTORS_LIST, SPECIALTIES_MAP, SITE } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  const langs = ["es", "en"];
  return langs.flatMap((lang) =>
    SPECIALTIES_MAP.map((spec) => ({ lang, slug: spec.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const spec = SPECIALTIES_MAP.find((s) => s.slug === slug);
  if (!spec) return {};

  const isEn = lang === "en";
  const headline = isEn ? spec.headlineEn : spec.headline;
  const description = isEn ? spec.descriptionEn : spec.description;
  const title = `${headline} | ${SITE.name}`;
  const url = `https://madeiramedicalgroup.com/${lang}/especialidades/${slug}`;

  return {
    title,
    description,
    keywords: spec.keywords,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: isEn ? "en_US" : "es_MX",
      siteName: SITE.name,
      images: [
        {
          url: "https://madeiramedicalgroup.com/logo.png",
          width: 800,
          height: 400,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: {
        es: `https://madeiramedicalgroup.com/es/especialidades/${slug}`,
        en: `https://madeiramedicalgroup.com/en/especialidades/${slug}`,
        "x-default": `https://madeiramedicalgroup.com/es/especialidades/${slug}`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function SpecialtyPage({ params }: Props) {
  const { lang, slug } = await params;
  const spec = SPECIALTIES_MAP.find((s) => s.slug === slug);
  if (!spec) notFound();

  const d = getDict(lang);
  const isEn = lang === "en";

  const headline = isEn ? spec.headlineEn : spec.headline;
  const specName = isEn ? spec.nameEn : spec.name;
  const description = isEn ? spec.descriptionEn : spec.description;

  // Resolve doctor objects for this specialty
  const doctors = spec.doctorSlugs
    .map((ds) => DOCTORS_LIST.find((doc) => doc.slug === ds))
    .filter((doc): doc is (typeof DOCTORS_LIST)[number] => doc !== undefined);

  // ── JSON-LD Schemas ──────────────────────────────────────────
  const jsonLdClinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
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
    medicalSpecialty: specName,
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE.name,
        item: `https://madeiramedicalgroup.com/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Specialties" : "Especialidades",
        item: `https://madeiramedicalgroup.com/${lang}#especialidades`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: headline,
        item: `https://madeiramedicalgroup.com/${lang}/especialidades/${slug}`,
      },
    ],
  };

  const whatsappMsg = isEn
    ? `Hello, I'd like to book an appointment for ${specName} at Madeira Medical Group`
    : `Hola, quiero agendar una cita de ${specName} en Madeira Medical Group`;
  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdClinic, jsonLdBreadcrumb]) }}
      />
      <WhatsAppButton />
      <Navbar d={d} />

      <div className="min-h-screen font-sans" style={{ backgroundColor: "#f0f9ff" }}>
        {/* ── HERO ──────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(135deg, #012030 0%, #023047 60%, #046b9f 100%)",
          }}
          className="pt-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            {/* Breadcrumb */}
            <nav className="text-white/40 text-xs mb-6 flex items-center justify-center gap-1.5">
              <Link href={`/${lang}`} className="hover:text-white/70 transition-colors">
                {SITE.name}
              </Link>
              <span>/</span>
              <Link
                href={`/${lang}#especialidades`}
                className="hover:text-white/70 transition-colors"
              >
                {isEn ? "Specialties" : "Especialidades"}
              </Link>
              <span>/</span>
              <span className="text-white/60">{specName}</span>
            </nav>

            {/* Badge */}
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{
                backgroundColor: "rgba(4,107,159,0.5)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {specName}
            </span>

            {/* H1 */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {headline}
            </h1>

            {/* Short description */}
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {isEn
                ? `Expert ${spec.nameEn} care at Madeira Medical Group — Puerto Vallarta's leading medical center in Versalles.`
                : `Atención especializada en ${spec.name} en Madeira Medical Group, el centro médico referente de Versalles, Puerto Vallarta.`}
            </p>

            {/* CTA */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              💬 {isEn ? "Book on WhatsApp" : "Agendar por WhatsApp"}
            </a>
          </div>

          {/* Wave */}
          <svg
            viewBox="0 0 1440 40"
            className="w-full block"
            style={{ display: "block" }}
          >
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f0f9ff" />
          </svg>
        </div>

        {/* ── DESCRIPTION ───────────────────────────────────────── */}
        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
          </div>
        </section>

        {/* ── SPECIALISTS GRID ──────────────────────────────────── */}
        {doctors.length > 0 && (
          <section className="py-10 px-4 pb-16">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-2xl font-bold mb-2 text-center"
                style={{ color: "#023047" }}
              >
                {isEn ? "Our Specialists" : "Nuestros Especialistas"}
              </h2>
              <p className="text-center text-gray-500 text-sm mb-10">
                {isEn
                  ? "Certified professionals at Madeira Medical Group, Puerto Vallarta"
                  : "Profesionales certificados en Madeira Medical Group, Puerto Vallarta"}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.slug}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
                  >
                    {/* Photo */}
                    <div className="relative w-full h-56">
                      <Image
                        src={doctor.photo}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3
                        className="font-bold text-base mb-1"
                        style={{ color: "#023047" }}
                      >
                        {doctor.name}
                      </h3>
                      <p className="text-xs mb-3" style={{ color: "#046b9f" }}>
                        {doctor.specialty}
                      </p>

                      {/* Top 3 services */}
                      {doctor.services.length > 0 && (
                        <ul className="text-xs text-gray-500 space-y-1 mb-4 flex-1">
                          {doctor.services.slice(0, 3).map((svc, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span
                                className="shrink-0 w-1.5 h-1.5 rounded-full mt-1"
                                style={{ backgroundColor: "#046b9f" }}
                              />
                              {svc}
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link
                        href={`/${lang}/medicos/${doctor.slug}`}
                        className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
                        style={{ backgroundColor: "#e0f2fe", color: "#023047" }}
                      >
                        {isEn ? "View Profile" : "Ver Perfil"} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ───────────────────────────────────────────────── */}
        {spec.faq.length > 0 && (
          <section className="py-14 px-4" style={{ backgroundColor: "#fff" }}>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl font-bold mb-8 text-center"
                style={{ color: "#023047" }}
              >
                {isEn ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
              </h2>

              <div className="space-y-3">
                {spec.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-gray-100 overflow-hidden"
                  >
                    <summary
                      className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer select-none font-semibold text-sm list-none"
                      style={{ color: "#023047" }}
                    >
                      {item.q}
                      <span
                        className="shrink-0 text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                        style={{ color: "#046b9f" }}
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA BOTTOM ────────────────────────────────────────── */}
        <section className="py-16 px-4" style={{ backgroundColor: "#023047" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {isEn
                ? `Book a ${spec.nameEn} appointment`
                : `Agenda una cita de ${spec.name}`}
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
                href={`tel:${SITE.phone.replace(/[\s\-]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              >
                📞 {SITE.phone}
              </a>
            </div>

            <div className="mt-10">
              <Link
                href={`/${lang}`}
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                ← {isEn ? "Back to home" : "Volver al inicio"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
