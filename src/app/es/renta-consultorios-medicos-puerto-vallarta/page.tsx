import type { Metadata } from "next";
import Image from "next/image";
import { es } from "@/lib/i18n/es";
import { SITE } from "@/lib/content";
import { SPECIALTIES } from "@/lib/i18n";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Renta Consultorios Médicos Puerto Vallarta | Madeira Medical Group",
  description: "Renta tu consultorio médico en Puerto Vallarta en la zona con mayor densidad médica. Recepcionistas bilingües incluidas. Gestión de agendas profesional.",
  keywords: [
    "renta consultorios médicos Puerto Vallarta",
    "consultorio en renta Puerto Vallarta",
    "renta consultorio médico Versalles",
    "consultorio médico Puerto Vallarta precio",
    "Madeira Medical Group renta",
    "consultorio médico Jalisco renta",
  ],
  openGraph: {
    title: "Renta Consultorios Médicos Puerto Vallarta | Madeira Medical Group",
    description: "Consultorios modernos en la zona con mayor densidad médica de Puerto Vallarta. Recepcionistas bilingües e infraestructura incluidas.",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://madeiramedicalgroup.com/es/renta-consultorios-medicos-puerto-vallarta",
    languages: {
      "en": "https://madeiramedicalgroup.com/en/medical-office-rental-puerto-vallarta",
      "es": "https://madeiramedicalgroup.com/es/renta-consultorios-medicos-puerto-vallarta",
    },
  },
};

const d = es;
const specialties = SPECIALTIES.map((s) => s.es);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Madeira Medical Group",
  description: "Consultorios médicos en renta en Puerto Vallarta. Secretaria incluida, infraestructura completa, zona de alto tráfico médico.",
  url: "https://madeiramedicalgroup.com/es/renta-consultorios-medicos-puerto-vallarta",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Havre #239-101",
    addressLocality: "Puerto Vallarta",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  geo: { "@type": "GeoCoordinates", latitude: "20.6370772", longitude: "-105.2286648" },
  medicalSpecialty: specialties,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Renta de Consultorios Médicos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renta de Consultorio Médico",
          description: "Consultorio médico moderno con recepcionistas bilingües incluidas en Puerto Vallarta.",
        },
      },
    ],
  },
};

export default function RentaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatsAppButton />
      <Navbar d={d} />

      <div className="flex flex-col min-h-screen font-sans">
        <main className="flex-1 pt-20">

          {/* Hero */}
          <section className="relative overflow-hidden py-24 md:py-36 hero-pattern" style={{ background: "linear-gradient(135deg, #012030 0%, #023047 40%, #046b9f 100%)" }}>
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 animate-pulse" style={{ backgroundColor: "#46b3e6" }} />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <AnimatedSection delay={0.1}>
                  <div className="flex items-center gap-2 mb-4">
                    <a href="/es" className="text-white/50 hover:text-white text-sm transition-colors">Inicio</a>
                    <span className="text-white/30">/</span>
                    <span className="text-white/80 text-sm">Renta Consultorios</span>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20" style={{ backgroundColor: "rgba(4,107,159,0.5)", color: "#fff", backdropFilter: "blur(8px)" }}>
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Consultorios disponibles
                  </span>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 gradient-text">
                    Renta Consultorios Médicos en Puerto Vallarta
                  </h1>
                  <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
                    Espacios médicos modernos en Versalles, la zona con mayor densidad de pacientes de Puerto Vallarta. Todo incluido desde el primer día.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:3221483531" className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base text-white">
                      📞 Agendar ahora
                    </a>
                    <a href="#features" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-base border border-white/25 text-white hover:bg-white/10 transition-all">
                      Ver qué incluye
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 60" className="w-full" style={{ display: "block" }}>
                <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
              </svg>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>
                  Todo lo que incluye tu consultorio
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">Sin sorpresas. Sin costos ocultos. Enfócate en tus pacientes.</p>
              </AnimatedSection>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {d.rental.features.map((f) => (
                  <StaggerItem key={f.title}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100">
                      <div className="text-3xl mb-3">{f.icon}</div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: "#023047" }}>{f.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <AnimatedSection className="text-center">
                <a href="https://wa.me/523221483531?text=Hola,%20quiero%20rentar%20un%20consultorio%20en%20Madeira%20Medical%20Group." target="_blank" rel="noopener noreferrer" className="btn-gradient inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg text-white">
                  💬 Quiero rentar un consultorio
                </a>
              </AnimatedSection>
            </div>
          </section>

          {/* Location */}
          <section className="py-24 px-4" style={{ backgroundColor: "#f0f9ff" }}>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "#e0f2fe", color: "#023047" }}>Ubicación</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>Versalles, Puerto Vallarta</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{d.location.body}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: "#046b9f" }}>
                    📍 {SITE.address}
                  </a>
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <div className="rounded-2xl overflow-hidden shadow-2xl h-80">
                    <iframe title="Ubicación" src={SITE.mapsEmbed} className="w-full h-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Specialties */}
          <section className="py-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold mb-4" style={{ color: "#023047" }}>Especialidades disponibles</h2>
                <p className="text-gray-500 mb-10">Consultorios para médicos de cualquier especialidad</p>
              </AnimatedSection>
              <StaggerContainer className="flex flex-wrap gap-3 justify-center">
                {specialties.map((s) => (
                  <StaggerItem key={s}>
                    <span className="px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: "#046b9f", color: "#046b9f", backgroundColor: "#f0f9ff" }}>{s}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* CTA final */}
          <section className="py-24 px-4 diagonal-top" style={{ backgroundColor: "#023047" }}>
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para rentar tu consultorio?</h2>
              <p className="text-white/60 text-lg mb-8">Contáctanos hoy — disponibilidad limitada.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`https://wa.me/${SITE.whatsapp}?text=Hola,%20quiero%20información%20sobre%20renta%20de%20consultorio%20en%20Puerto%20Vallarta.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105" style={{ backgroundColor: "#25D366" }}>
                  💬 WhatsApp
                </a>
                <a href={`tel:${SITE.phone}`} className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white">
                  📞 {SITE.phone}
                </a>
              </div>
            </AnimatedSection>
          </section>
        </main>

        <footer style={{ backgroundColor: "#012030" }} className="text-white py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <Image src="/logo.png" alt="Madeira Medical Group" width={140} height={70} className="h-10 w-auto brightness-0 invert" />
            <p className="text-white/40 text-xs">{d.footer.copyright}</p>
            <a href="/es" className="text-white/60 hover:text-white text-sm transition-colors">← Volver al inicio</a>
          </div>
        </footer>
      </div>
    </>
  );
}
