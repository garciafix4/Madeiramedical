import { SITE, NAV, HERO, AGENDA, LOCATION, RENTAL, DOCTORS, WHY, CONTACT, FOOTER } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

// ─── JSON-LD structured data for SEO ───────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE.name,
  description:
    "Consultorios médicos modernos en renta en Puerto Vallarta. Ubicados en Versalles, la zona con mayor densidad médica de la ciudad.",
  url: "https://madeiramedicalgroup.com/Renta-Consultorios-medicos-puerto-vallarta",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Havre #239-101",
    addressLocality: "Puerto Vallarta",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.6534",
    longitude: "-105.2372",
  },
  medicalSpecialty: DOCTORS.specialties,
};

export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen font-sans">
        {/* ── NAVIGATION ─────────────────────────────────────────── */}
        <header
          id="inicio"
          className="sticky top-0 z-50 w-full border-b border-white/10"
          style={{ backgroundColor: "#023047" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 text-white font-bold text-lg leading-tight">
              <span className="text-2xl">⚕️</span>
              <span>
                Madeira<span style={{ color: "#46b3e6" }}>Medical</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href={NAV.ctaHref}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "#046b9f" }}
            >
              {NAV.ctaLabel}
            </a>
          </div>
        </header>

        <main className="flex-1">
          {/* ── HERO ───────────────────────────────────────────────── */}
          <section
            className="relative overflow-hidden py-20 md:py-32"
            style={{
              background: "linear-gradient(135deg, #023047 0%, #046b9f 60%, #0891b2 100%)",
            }}
          >
            {/* Background decorative circles */}
            <div
              className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
              style={{ backgroundColor: "#46b3e6" }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-10"
              style={{ backgroundColor: "#023047" }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {/* Badge */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-6"
                  style={{ backgroundColor: "#046b9f", color: "#fff" }}
                >
                  🏥 {HERO.badge}
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2">
                  {HERO.headline}
                </h1>
                <p className="text-2xl md:text-3xl font-light text-white/80 mb-6">
                  {HERO.subheadline}
                </p>
                <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
                  {HERO.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={HERO.cta1.href}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-base text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#046b9f" }}
                  >
                    {HERO.cta1.label}
                  </a>
                  <a
                    href={HERO.cta2.href}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-base border-2 border-white/40 text-white hover:bg-white/10 transition-all"
                  >
                    {HERO.cta2.label}
                  </a>
                </div>

                {/* Phone */}
                <p className="mt-8 text-white/60 text-sm">
                  O llámanos:{" "}
                  <a href={`tel:${SITE.phone}`} className="text-white/90 hover:text-white underline">
                    {SITE.phone}
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* ── AGENDA CTA BAR ─────────────────────────────────────── */}
          <section id="agenda" style={{ backgroundColor: "#046b9f" }} className="py-12 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div>
                <h2 className="text-2xl font-bold">{AGENDA.headline}</h2>
                <p className="text-white/80 mt-1 max-w-lg">{AGENDA.body}</p>
              </div>
              <a
                href={AGENDA.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center px-7 py-3 rounded-lg font-semibold bg-white transition-all hover:opacity-90"
                style={{ color: "#023047" }}
              >
                {AGENDA.cta.label}
              </a>
            </div>
          </section>

          {/* ── LOCATION ──────────────────────────────────────────── */}
          <section id="ubicacion" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4"
                    style={{ backgroundColor: "#e0f2fe", color: "#023047" }}
                  >
                    {LOCATION.badge}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>
                    {LOCATION.headline}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{LOCATION.body}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {LOCATION.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: "#f0f9ff" }}>
                        <div className="text-3xl font-bold" style={{ color: "#046b9f" }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-semibold hover:underline"
                    style={{ color: "#046b9f" }}
                  >
                    📍 {SITE.address}
                  </a>
                </div>

                {/* Map embed */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96 bg-gray-100 flex items-center justify-center">
                  <iframe
                    title="Ubicación Madeira Medical Group"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-placeholder&q=${encodeURIComponent(SITE.address)}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Fallback if iframe blocked */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm pointer-events-none">
                    <span>Ver en Google Maps</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── RENTAL SECTION ────────────────────────────────────── */}
          <section
            id="renta"
            className="py-20 px-4"
            style={{ backgroundColor: "#f0f9ff" }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "#023047", color: "#fff" }}
                >
                  {RENTAL.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>
                  {RENTAL.headline}
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto text-lg">{RENTAL.body}</p>
              </div>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {RENTAL.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#023047" }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={RENTAL.cta1.href}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-base border-2 transition-all hover:opacity-80"
                  style={{ borderColor: "#023047", color: "#023047" }}
                >
                  {RENTAL.cta1.label}
                </a>
                <a
                  href={RENTAL.cta2.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-base text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#023047" }}
                >
                  {RENTAL.cta2.label}
                </a>
              </div>
            </div>
          </section>

          {/* ── DOCTORS / SPECIALTIES ─────────────────────────────── */}
          <section id="medicos" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "#e0f2fe", color: "#023047" }}
                >
                  {DOCTORS.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>
                  {DOCTORS.headline}
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">{DOCTORS.body}</p>
              </div>

              {/* Specialties tag cloud */}
              <div id="especialidades" className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {DOCTORS.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="px-4 py-2 rounded-full text-sm font-medium border"
                    style={{ borderColor: "#046b9f", color: "#046b9f", backgroundColor: "#f0f9ff" }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── WHY CHOOSE ─────────────────────────────────────────── */}
          <section
            className="py-20 px-4"
            style={{ backgroundColor: "#023047" }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "#046b9f", color: "#fff" }}
                >
                  {WHY.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {WHY.headline}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {WHY.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="font-bold text-lg text-white mb-3">{card.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTACT ────────────────────────────────────────────── */}
          <section id="contacto" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left — info */}
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4"
                    style={{ backgroundColor: "#e0f2fe", color: "#023047" }}
                  >
                    {CONTACT.badge}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#023047" }}>
                    {CONTACT.headline}
                  </h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">{CONTACT.body}</p>

                  <div className="space-y-4">
                    <a
                      href={`tel:${SITE.phone}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-700"
                    >
                      <span className="text-xl">📞</span>
                      <span>{SITE.phone}</span>
                    </a>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-700"
                    >
                      <span className="text-xl">✉️</span>
                      <span>{SITE.email}</span>
                    </a>
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl mt-0.5">📍</span>
                      <span>{SITE.address}</span>
                    </div>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      <span>💬</span>
                      Escríbenos por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Right — contact form (Client Component) */}
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        {/* ── FOOTER ───────────────────────────────────────────────── */}
        <footer style={{ backgroundColor: "#012030" }} className="text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="text-xl font-bold mb-3">
                  ⚕️ Madeira<span style={{ color: "#46b3e6" }}>Medical</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">{FOOTER.tagline}</p>
              </div>

              {/* Quick links */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide text-white/40 mb-4">
                  Navegación
                </h4>
                <ul className="space-y-2">
                  {FOOTER.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide text-white/40 mb-4">
                  Contacto
                </h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>
                    <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                      {SITE.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                      {SITE.email}
                    </a>
                  </li>
                  <li>{SITE.address}</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
              <span>{FOOTER.copyright}</span>
              <span>{FOOTER.credit}</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
