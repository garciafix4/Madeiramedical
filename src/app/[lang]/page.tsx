import Image from "next/image";
import Link from "next/link";
import { getDict, SPECIALTIES } from "@/lib/i18n";
import { SITE, DOCTORS_LIST } from "@/lib/content";
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
        <main className="flex-1 pt-20">

          {/* ── HERO ───────────────────────────────────────────────── */}
          <section
            className="relative overflow-hidden hero-pattern diagonal-bottom"
            style={{ background: "linear-gradient(135deg, #012030 0%, #023047 50%, #046b9f 100%)", minHeight: "calc(100vh - 80px)" }}
          >
            {/* Background blobs */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.06] animate-pulse" style={{ backgroundColor: "#46b3e6" }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">

                {/* Left — text content */}
                <div>
                  <AnimatedSection delay={0.1}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-white/20" style={{ backgroundColor: "rgba(4,107,159,0.5)", color: "#fff", backdropFilter: "blur(8px)" }}>
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      {d.hero.badge}
                    </span>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2}>
                    {/* Brand name small */}
                    <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-3">{d.hero.headline} · {d.hero.subheadline}</p>
                    {/* Slogan — main headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6 text-white">
                      {d.hero.slogan.split(". ").map((sentence, i, arr) => (
                        <span key={i} className={`block ${i === arr.length - 1 ? "gradient-text" : ""}`}>
                          {sentence}{i < arr.length - 1 ? "." : ""}
                        </span>
                      ))}
                    </h1>
                  </AnimatedSection>

                  <AnimatedSection delay={0.35}>
                    <p className="text-lg text-white/60 mb-10 leading-relaxed">{d.hero.body}</p>
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
                    <p className="mt-6 text-white/40 text-sm">
                      <a href={`tel:${SITE.phone}`} className="text-white/70 hover:text-white transition-colors underline">{SITE.phone}</a>
                    </p>
                  </AnimatedSection>
                </div>

                {/* Right — photo */}
                <AnimatedSection direction="right" delay={0.3} className="relative hidden lg:block">
                  {/* Decorative ring */}
                  <div className="absolute -inset-4 rounded-3xl opacity-20 blur-xl" style={{ background: "linear-gradient(135deg, #46b3e6, #046b9f)" }} />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                    <Image
                      src="/hero-photo.jpg"
                      alt="Médico especialista en Madeira Medical Group Puerto Vallarta"
                      width={1600}
                      height={950}
                      className="w-full h-auto object-cover"
                      priority
                      quality={85}
                    />
                    {/* Subtle overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(2,48,71,0.6), transparent)" }} />
                    {/* Floating badge */}
                    <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
                      <span className="text-2xl">⚕️</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{d.hero.headline}</p>
                        <p className="text-white/60 text-xs">{d.hero.subheadline}</p>
                      </div>
                    </div>
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

              {/* Specialty tags */}
              <StaggerContainer id="especialidades" className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto mb-16">
                {specialties.map((spec) => (
                  <StaggerItem key={spec}>
                    <span className="px-4 py-2 rounded-full text-sm font-medium border cursor-default transition-all hover:scale-105 hover:shadow-md" style={{ borderColor: "#046b9f", color: "#046b9f", backgroundColor: "#f0f9ff" }}>
                      {spec}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Doctor cards grid */}
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {DOCTORS_LIST.map((doctor) => (
                  <StaggerItem key={doctor.slug}>
                    <Link href={`/${lang}/medicos/${doctor.slug}`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 h-full flex flex-col">
                      {/* Photo */}
                      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                        <Image
                          src={doctor.photo}
                          alt={doctor.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      {/* Info */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-bold text-base leading-tight mb-1" style={{ color: "#023047" }}>{doctor.name}</h3>
                        <p className="text-xs font-semibold mb-3" style={{ color: "#046b9f" }}>{doctor.specialty}</p>
                        {doctor.services.length > 0 && (
                          <ul className="text-xs text-gray-500 space-y-1 mb-4 flex-1">
                            {doctor.services.slice(0, 4).map((s) => (
                              <li key={s} className="flex items-start gap-1.5">
                                <span className="mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#046b9f", marginTop: "5px" }} />
                                {s}
                              </li>
                            ))}
                            {doctor.services.length > 4 && (
                              <li className="text-gray-400 italic">+{doctor.services.length - 4} más…</li>
                            )}
                          </ul>
                        )}
                        <span
                          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-semibold transition-all group-hover:opacity-90"
                          style={{ backgroundColor: "#023047", color: "#fff" }}
                        >
                          Ver perfil →
                        </span>
                      </div>
                    </Link>
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
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "#e0f2fe", color: "#023047" }}>
                  {d.contact.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>{d.contact.headline}</h2>
                <p className="text-gray-500 mb-10 leading-relaxed">{d.contact.body}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "#25D366" }}>
                    💬 {d.contact.whatsapp}
                  </a>
                  <a href={`tel:${SITE.phone}`} className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg">
                    📞 {SITE.phone}
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                    <span>✉️</span><span>{SITE.email}</span>
                  </a>
                  <span className="hidden sm:block text-gray-200">|</span>
                  <span className="flex items-center gap-2">
                    <span>📍</span><span>{SITE.address}</span>
                  </span>
                </div>
              </AnimatedSection>
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
