"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CreditCard,
  Landmark,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const trustItems = [
  "Création LLC",
  "Documents officiels",
  "Compte bancaire US",
  "Paiement en ligne",
];

export default function Hero() {
  return (
    <Reveal>
      <section
        id="accueil"
        className="relative overflow-hidden bg-[#06111f] px-6 pb-28 pt-36 text-white"
      >
        <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-[#d4af37]/20 blur-[150px]" />
        <div className="absolute right-[-10%] top-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm font-bold text-[#d4af37]">
              <Sparkles size={16} />
              US LLC Formation & Business Consulting
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Votre entreprise américaine commence{" "}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f8df8a] bg-clip-text text-transparent">
                ici.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Création de LLC américaine, ouverture de compte bancaire
              professionnel, solutions de paiement et accompagnement complet de
              A à Z.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/85"
                >
                  <BadgeCheck size={18} className="text-[#d4af37]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#tarifs"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f8df8a] px-8 py-4 font-black text-[#06111f] shadow-2xl shadow-[#d4af37]/20 transition hover:scale-105"
              >
                Créer ma LLC
                <ArrowRight size={19} />
              </a>

              <a
                href="https://wa.me/33661125401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 font-black text-white transition hover:border-[#d4af37]/70 hover:text-[#d4af37]"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[2rem] border border-[#d4af37]/20 bg-[#09182a] p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                      US Company
                    </p>
                    <h3 className="mt-3 text-4xl font-black">FBS LLC</h3>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#d4af37]/15 text-[#d4af37]">
                    <Building2 size={30} />
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-black to-[#1a2333] p-6 shadow-xl">
                  <div className="flex justify-between">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
                      Business Card
                    </p>
                    <CreditCard className="text-[#d4af37]" />
                  </div>

                  <p className="mt-14 text-2xl font-black tracking-[0.25em]">
                    **** **** **** 2026
                  </p>

                  <div className="mt-8 flex justify-between text-sm text-white/55">
                    <span>Fiscal & Business</span>
                    <span>US Banking</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <Landmark className="text-[#d4af37]" />
                  <div>
                    <p className="font-black">Compte bancaire US</p>
                    <p className="text-sm text-white/50">
                      Mise en place professionnelle
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#d4af37] to-[#f8df8a] p-6 text-[#06111f]">
                  <p className="text-sm font-black uppercase tracking-[0.3em]">
                    Formule Premium
                  </p>
                  <p className="mt-2 text-5xl font-black">1 000 €</p>
                  <p className="mt-2 font-bold">
                    LLC + Banque + Paiement + suivi prioritaire
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-8 rounded-3xl border border-white/10 bg-[#071827] px-6 py-5 shadow-2xl">
              <p className="text-sm text-white/55">Gestion annuelle</p>
              <p className="text-3xl font-black text-[#d4af37]">80€/an</p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}