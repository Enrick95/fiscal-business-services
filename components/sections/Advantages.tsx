"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CreditCard,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const advantages = [
  {
    icon: BadgeDollarSign,
    title: "Fiscalité potentiellement optimisée",
    description:
      "Selon votre résidence fiscale, votre activité et votre structure, une LLC peut bénéficier d'une fiscalité très avantageuse, pouvant aller jusqu'à une absence d'imposition aux États-Unis dans certains cas.",
  },
  {
    icon: Globe2,
    title: "Développement international",
    description:
      "Une société américaine facilite le développement de votre activité auprès de clients, plateformes et partenaires à l'international.",
  },
  {
    icon: CreditCard,
    title: "Accès aux solutions financières",
    description:
      "Stripe, Mercury, Relay, Wise Business, Payoneer, Kraken... Une LLC peut ouvrir l'accès à un écosystème professionnel reconnu mondialement.",
  },
  {
    icon: ShieldCheck,
    title: "Protection du patrimoine",
    description:
      "La LLC permet généralement de distinguer le patrimoine personnel de celui de l'entreprise, selon les règles applicables.",
  },
  {
    icon: Zap,
    title: "Création rapide",
    description:
      "La création peut être réalisée rapidement selon l'État choisi, les délais administratifs et la conformité du dossier.",
  },
  {
    icon: Building2,
    title: "Image professionnelle",
    description:
      "Une société américaine peut renforcer votre crédibilité auprès de clients, prestataires, banques et plateformes internationales.",
  },
];

export default function Advantages() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-[#071321] px-6 py-28 text-white">
        <div className="absolute left-[-12%] top-10 h-[460px] w-[460px] rounded-full bg-[#d4af37]/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-12%] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-[190px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Avantages LLC
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Pourquoi créer une LLC américaine ?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              La LLC est une structure flexible et reconnue qui permet à de
              nombreux entrepreneurs de développer leur activité avec une image
              internationale, un accès à des solutions professionnelles et une
              fiscalité potentiellement avantageuse.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;

              return (
                <div
                  key={advantage.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/10"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10 transition group-hover:bg-[#d4af37]">
                    <Icon className="h-8 w-8 text-[#d4af37] transition group-hover:text-[#06111f]" />
                  </div>

                  <h3 className="text-2xl font-bold">{advantage.title}</h3>

                  <p className="mt-5 leading-7 text-white/65">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-gradient-to-r from-[#0c1d33] to-[#081421] p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  Une analyse adaptée avant chaque création.
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-white/65">
                  Les avantages fiscaux et juridiques d'une LLC dépendent de
                  votre pays de résidence, de votre activité, de vos clients, de
                  vos revenus et de votre situation personnelle. Nous vous
                  accompagnons pour choisir une structure cohérente avec votre
                  projet.
                </p>
              </div>

              <a
                href="#tarifs"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 font-bold text-[#06111f] transition hover:bg-[#e6c45a]"
              >
                Voir les offres
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}