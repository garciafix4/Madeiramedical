"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Dict } from "@/lib/i18n/es";

interface Props {
  d: Dict;
}

export function Navbar({ d }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect if we're on the homepage (e.g. /es or /en)
  const isHome = /^\/(es|en)\/?$/.test(pathname);

  // Prefix anchor links with the home path when not on homepage
  const homeBase = pathname.startsWith("/en") ? "/en" : "/es";
  function resolveHref(href: string) {
    if (href.startsWith("#") && !isHome) return homeBase;
    return href;
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20"
      style={{
        backgroundColor: scrolled ? "#023047" : "rgba(2,48,71,0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
      id="inicio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href={resolveHref("#inicio")} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Madeira Medical Group"
            width={180}
            height={90}
            className="h-16 w-auto brightness-0 invert"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {d.nav.links.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: lang switcher + CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language toggle pill */}
          <a
            href={d.nav.langHref}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <span>{d.nav.langHref === "/en" ? "🇺🇸" : "🇲🇽"}</span>
            <span>{d.nav.langSwitch}</span>
          </a>
          <a
            href={resolveHref(d.nav.ctaHref)}
            target={d.nav.ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={d.nav.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="btn-gradient inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-white"
          >
            {d.nav.ctaLabel}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-white/10"
          style={{ backgroundColor: "#023047" }}
        >
          <nav className="flex flex-col px-4 py-4 gap-4">
            {d.nav.links.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                className="text-white/80 hover:text-white text-sm py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <a
                href={d.nav.langHref}
                className="flex-1 text-center py-2 rounded-lg border border-white/25 text-white text-sm font-medium flex items-center justify-center gap-1.5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <span>{d.nav.langHref === "/en" ? "🇺🇸" : "🇲🇽"}</span>
                <span>{d.nav.langSwitch}</span>
              </a>
              <a
                href={resolveHref(d.nav.ctaHref)}
                target={d.nav.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={d.nav.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-gradient flex-1 text-center py-2 rounded-lg font-semibold text-white text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {d.nav.ctaLabel}
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
