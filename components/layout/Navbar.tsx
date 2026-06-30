"use client";

import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Avantages", href: "#avantages" },
  { label: "Process", href: "#process" },
  { label: "Solutions", href: "#solutions" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#06111f]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-6 lg:px-10">
        <a href="#accueil" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/50 bg-[#d4af37]/10">
            <ShieldCheck className="h-8 w-8 text-[#d4af37]" />
          </div>

          <div>
            <p className="text-2xl font-black uppercase tracking-[0.22em] text-white">
              Fiscal
            </p>
            <p className="text-sm font-bold uppercase tracking-[0.45em] text-[#d4af37]">
              Business
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-base font-medium transition ${
                index === 0 ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {index === 0 && (
                <span className="absolute -bottom-4 left-0 h-0.5 w-full bg-[#d4af37]" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#tarifs"
          className="hidden items-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f8df8a] px-8 py-4 font-black text-[#06111f] shadow-2xl shadow-[#d4af37]/20 transition hover:-translate-y-1 lg:flex"
        >
          Créer ma LLC
          <ArrowRight className="h-5 w-5" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white lg:hidden"
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
                className="text-base font-semibold text-white/80"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#tarifs"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f8df8a] px-6 py-4 text-center font-black text-[#06111f]"
            >
              Créer ma LLC
            </a>
          </div>
        </div>
      )}
    </header>
  );
}