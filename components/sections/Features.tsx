"use client";

import Reveal from "@/components/ui/Reveal";
import {
  Building2,
  CreditCard,
  Globe,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Création de LLC américaine",
    description:
      "Constitution complète de votre société américaine avec tous les documents officiels nécessaires.",
  },
  {
    icon: CreditCard,
    title: "Compte bancaire professionnel",
    description:
      "Accompagnement jusqu'à l'ouverture de votre compte bancaire professionnel américain selon votre profil.",
  },
  {
    icon: Globe,
    title: "Paiements internationaux",
    description:
      "Configuration des solutions de paiement adaptées à votre activité afin d'encaisser des clients partout dans le monde.",
  },
  {
    icon: ShieldCheck,
    title: "Accompagnement personnalisé",
    description:
      "Nous restons à vos côtés avant, pendant et après la création de votre entreprise.",
  },
];

export default function Features() {
  return (
    <Reveal>
      <section
        id="services"
        className="relative overflow-hidden bg-[#06111f] px-6 py-28 text-white"
      >
        <div className="absolute left-[-10%] top-10 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Pourquoi nous choisir
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Bien plus qu'une création de LLC.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Nous accompagnons les entrepreneurs francophones souhaitant
              développer leur activité aux États-Unis avec une approche simple,
              professionnelle et sécurisée.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-3 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/10"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10 transition group-hover:bg-[#d4af37]">
                    <Icon className="h-8 w-8 text-[#d4af37] transition group-hover:text-[#06111f]" />
                  </div>

                  <h3 className="mb-5 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-white/65">
                    {feature.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-[#d4af37] opacity-0 transition group-hover:opacity-100">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 rounded-[2rem] border border-[#d4af37]/20 bg-gradient-to-r from-[#0c1d33] to-[#081421] p-10">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-4xl font-black text-[#d4af37]">100%</p>
                <p className="mt-2 text-white/70">
                  Accompagnement personnalisé
                </p>
              </div>

              <div>
                <p className="text-4xl font-black text-[#d4af37]">US</p>
                <p className="mt-2 text-white/70">
                  Société américaine conforme et prête à être exploitée
                </p>
              </div>

              <div>
                <p className="text-4xl font-black text-[#d4af37]">∞</p>
                <p className="mt-2 text-white/70">
                  Support avant, pendant et après la création
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}