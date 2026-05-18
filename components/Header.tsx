"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navigationLinks, siteConfig } from "@/data/site";
import { whatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(31,26,23,0.08)] border-b border-border"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" aria-label="Início — Rô Terapia da Dor">
            <Image
              src="/images/logo.webp"
              alt="Rô Terapia da Dor"
              width={360}
              height={130}
              className="h-28 md:h-32 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.97]"
            aria-label="Agendar pelo WhatsApp"
          >
            Agendar pelo WhatsApp
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-muted hover:text-primary hover:bg-primary-soft transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="container-content py-5 flex flex-col gap-1" aria-label="Navegação mobile">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-dark hover:text-primary hover:bg-primary-soft/50 px-4 py-3 rounded-xl transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3.5 rounded-full hover:bg-primary-dark transition-all duration-200 text-sm"
              >
                Agendar Sessão
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
