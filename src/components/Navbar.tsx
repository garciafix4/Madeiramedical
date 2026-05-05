"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Dict } from "@/lib/i18n/es";

interface Props {
  d: Dict;
}

export function Navbar({ d }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <a href="#inicio" className="flex items-center">
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
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: lang switcher + CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language switcher */}
          <a
            href={d.nav.langHref}
            className="text-sm text-white/60 hover:text-white transition-colors border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg"
          >
            {d.nav.langSwitch}
          </a>
          <a
            href={d.nav.ctaHref}
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
                href={link.href}
                className="text-white/80 hover:text-white text-sm py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <a
                href={d.nav.langHref}
                className="flex-1 text-center py-2 rounded-lg border border-white/20 text-white/70 text-sm"
              >
                {d.nav.langSwitch}
              </a>
              <a
                href={d.nav.ctaHref}
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
