"use client";

import { Menu, MessageCircle, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const whatsapp =
  "https://wa.me/33661125401?text=Bonjour%2C%20je%20souhaite%20%C3%AAtre%20accompagn%C3%A9%20pour%20la%20cr%C3%A9ation%20d%27une%20LLC%20am%C3%A9ricaine.";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06111f]/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#accueil" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 shadow-lg shadow-[#d4af37]/10">
            <ShieldCheck className="h-6 w-6 text-[#d4af37]" />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Fiscal & Business
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Services
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/65 transition hover:text-[#d4af37]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-[#d4af37]/70 hover:text-[#d4af37]"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="#tarifs"
            className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#f7d878] px-6 py-3 text-sm font-black text-[#06111f] shadow-xl shadow-[#d4af37]/20 transition hover:scale-105"
          >
            Créer ma LLC
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white transition hover:border-[#d4af37]/50 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#06111f] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-white/80 transition hover:text-[#d4af37]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href="#tarifs"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#f7d878] px-6 py-3 text-center text-sm font-black text-[#06111f]"
            >
              Créer ma LLC
            </a>
          </div>
        </div>
      )}
    </header>
  );
}