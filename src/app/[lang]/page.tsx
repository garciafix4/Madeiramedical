import Image from "next/image";
import { getDict, SPECIALTIES } from "@/lib/i18n";
import { SITE } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = getDict(lang);
  const specialties = SPECIALTIES.map((s) => (lang === "en" ? s.en : s.es));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE.name,
    description: d.meta.description,
    url: `https://madeiramedicalgroup.com/${lang}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Havre #239-101",
      addressLocality: "Puerto Vallarta",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    medicalSpecialty: specialties,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhatsAppButton />
      <Navbar d={d} />

      <div className="flex flex-col min-h-screen font-sans">
        <main className="flex-1 pt-16">

          {/* ── HERO ───────────────────────────────────────────────── */}
          <section
            className="relative overflow-hidden py-24 md:py-40 hero-pattern diagonal-bottom"
            style={{ background: "linear-gradient(135deg, #012030 0%, #023047 40%, #046b9f 100%)" }}
          >
            <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-10 animate-pulse" style={{ backgroundColor: "#46b3e6" }} />
            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full opacity-[0.07] animate-pulse" style={{ backgroundColor: "#0891b2", animationDelay: "1.5s" }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <AnimatedSection delay={0.1}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-white/20" style={{ backgroundColor: "rgba(4,107,159,0.5)", color: "#fff", backdropFilter: "blur(8px)" }}>
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {d.hero.badge}
                  </span>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-3 gradient-text">{d.hero.headline}</h1>
                  <p className="text-2xl md:text-3xl font-light text-white/70 mb-6 tracking-wide">{d.hero.subheadline}</p>
                </AnimatedSection>

                <AnimatedSection delay={0.35}>
                  <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">{d.hero.body}</p>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={d.hero.cta1.href} className="btn-gradient inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-base text-white">
                      {d.hero.cta1.label}
                    </a>
                    <a href={d.hero.cta2.href} className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-base border border-white/25 text-white hover:bg-white/10 transition-all hover:border-white/50" style={{ backdropFilter: "blur(8px)" }}>
                      {d.hero.cta2.label}
                    </a>
                  </div>
                  <p className="mt-6 text-white/50 text-sm">
                    <a href={`tel:${SITE.phone}`} className="text-white/80 hover:text-white underline">{SITE.phone}</a>
                  </p>
                </AnimatedSection>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 60" className="w-full" style={{ display: "block" }}>
                <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
              </svg>
            </div>
          </section>

          {/* ── AGENDA CTA ─────────────────────────────────────────── */}
          <section id="agenda" style={{ backgroundColor: "#046b9f" }} className="py-12 px-4">
            <AnimatedSection>
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                <div>
                  <h2 className="text-2xl font-bold">{d.agenda.headline}</h2>
                  <p className="text-white/80 mt-1 max-w-lg">{d.agenda.body}</p>
                </div>
                <a href={d.agenda.cta.href} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center px-7 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#023047", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                  {d.agenda.cta.label}
                </a>
              </div>
            </AnimatedSection>
          </section>

          {/* ── LOCATION ───────────────────────────────────────────── */}
          <section id="ubicacion" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <AnimatedSection direction="left">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "#e0f2fe", color: "#023047" }}>
                      {d.location.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>{d.location.headline}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{d.location.body}</p>
                  </AnimatedSection>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {d.location.stats.map((stat) => (
                      <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                  </div>

                  <AnimatedSection delay={0.3}>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: "#046b9f" }}>
                      📍 {SITE.address}
                    </a>
                  </AnimatedSection>
                </div>

                <AnimatedSection direction="right">
                  <div className="rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96 bg-gray-100">
                    <iframe
                      title="Ubicación Madeira Medical Group"
                      src={SITE.mapsEmbed}
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── RENTAL ─────────────────────────────────────────────── */}
          <section id="renta" className="py-24 px-4" style={{ backgroundColor: "#f0f9ff" }}>
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "#023047", color: "#fff" }}>
                  {d.rental.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>{d.rental.headline}</h2>
                <p className="text-gray-600 max-w-xl mx-auto text-lg">{d.rental.body}</p>
              </AnimatedSection>

              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {d.rental.features.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: "#023047" }}>{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <AnimatedSection className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={d.rental.cta1.href} className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-base border-2 transition-all hover:scale-105" style={{ borderColor: "#023047", color: "#023047" }}>
                  {d.rental.cta1.label}
                </a>
                <a href={d.rental.cta2.href} target="_blank" rel="noopener noreferrer" className="btn-gradient inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-base text-white">
                  {d.rental.cta2.label}
                </a>
              </AnimatedSection>
            </div>
          </section>

          {/* ── DOCTORS ────────────────────────────────────────────── */}
          <section id="medicos" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "#e0f2fe", color: "#023047" }}>
                  {d.doctors.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>{d.doctors.headline}</h2>
                <p className="text-gray-500 max-w-xl mx-auto">{d.doctors.body}</p>
              </AnimatedSection>

              <StaggerContainer id="especialidades" className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {specialties.map((spec) => (
                  <StaggerItem key={spec}>
                    <span className="px-4 py-2 rounded-full text-sm font-medium border cursor-default transition-all hover:scale-105 hover:shadow-md" style={{ borderColor: "#046b9f", color: "#046b9f", backgroundColor: "#f0f9ff" }}>
                      {spec}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* ── WHY CHOOSE ─────────────────────────────────────────── */}
          <section className="py-24 px-4 diagonal-top" style={{ backgroundColor: "#023047" }}>
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "#046b9f", color: "#fff" }}>
                  {d.why.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{d.why.headline}</h2>
              </AnimatedSection>

              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {d.why.cards.map((card) => (
                  <StaggerItem key={card.title}>
                    <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full cursor-default">
                      <div className="text-4xl mb-4">{card.icon}</div>
                      <h3 className="font-bold text-lg text-white mb-3">{card.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* ── CONTACT ────────────────────────────────────────────── */}
          <section id="contacto" className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <AnimatedSection direction="left">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "#e0f2fe", color: "#023047" }}>
                    {d.contact.badge}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>{d.contact.headline}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">{d.contact.body}</p>

                  <div className="space-y-4">
                    <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors">
                      <span className="text-xl">📞</span><span>{SITE.phone}</span>
                    </a>
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors">
                      <span className="text-xl">✉️</span><span>{SITE.email}</span>
                    </a>
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl mt-0.5">📍</span><span>{SITE.address}</span>
                    </div>
                    <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-lg" style={{ backgroundColor: "#25D366" }}>
                      <span>💬</span> {d.contact.whatsapp}
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right">
                  <ContactForm d={d} specialties={specialties} />
                </AnimatedSection>
              </div>
            </div>
          </section>
        </main>

        {/* ── FOOTER ─────────────────────────────────────────────── */}
        <footer style={{ backgroundColor: "#012030" }} className="text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div>
                <Image src="/logo.png" alt="Madeira Medical Group" width={140} height={70} className="h-12 w-auto brightness-0 invert mb-3" />
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">{d.footer.tagline}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide text-white/40 mb-4">{d.footer.nav}</h4>
                <ul className="space-y-2">
                  {d.footer.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide text-white/40 mb-4">{d.footer.contactTitle}</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">{SITE.phone}</a></li>
                  <li><a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a></li>
                  <li>{SITE.address}</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
              <span>{d.footer.copyright}</span>
              <span>{d.footer.credit}</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
