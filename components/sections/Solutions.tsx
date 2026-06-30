"use client";

import Reveal from "@/components/ui/Reveal";
import {
  BadgeCheck,
  Building2,
  CreditCard,
  Landmark,
  Wallet,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    name: "Stripe",
    icon: CreditCard,
    title: "Paiements en ligne",
    description:
      "Configuration et accompagnement pour accepter les paiements selon votre activité et votre éligibilité.",
  },
  {
    name: "Mercury",
    icon: Landmark,
    title: "Banque professionnelle",
    description:
      "Accompagnement dans les démarches d'ouverture d'un compte professionnel américain.",
  },
  {
    name: "Relay",
    icon: Building2,
    title: "Compte bancaire Business",
    description:
      "Solution bancaire adaptée aux entreprises américaines selon votre profil.",
  },
  {
    name: "Wise Business",
    icon: Wallet,
    title: "Paiements internationaux",
    description:
      "Configuration des paiements internationaux et gestion multi-devises.",
  },
  {
    name: "Payoneer",
    icon: CreditCard,
    title: "Réception de paiements",
    description:
      "Accompagnement pour recevoir des paiements de clients internationaux.",
  },
  {
    name: "Slash",
    icon: BadgeCheck,
    title: "Solutions financières",
    description:
      "Orientation vers des solutions adaptées à vos besoins professionnels.",
  },
];

export default function Solutions() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-[#071321] px-6 py-28 text-white">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
        <div className="absolute right-[-10%] bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Solutions accompagnées
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Des solutions reconnues pour développer votre activité.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Nous accompagnons nos clients dans la mise en place de solutions
              professionnelles adaptées à leur activité et à leur éligibilité.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.name}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/10"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10 transition group-hover:bg-[#d4af37]">
                    <Icon className="h-8 w-8 text-[#d4af37] transition group-hover:text-[#06111f]" />
                  </div>

                  <div className="mb-2 text-2xl font-bold">
                    {solution.name}
                  </div>

                  <div className="mb-5 text-[#d4af37] font-semibold">
                    {solution.title}
                  </div>

                  <p className="leading-7 text-white/65">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#d4af37]/20 bg-gradient-to-r from-[#0c1d33] to-[#081421] p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  Une solution adaptée à votre activité.
                </h3>

                <p className="mt-3 max-w-3xl text-white/65 leading-7">
                  Chaque plateforme applique ses propres critères
                  d'acceptation. Nous analysons votre projet afin de vous
                  orienter vers les solutions les plus adaptées à votre activité
                  et à votre profil.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 font-bold text-[#06111f] transition hover:bg-[#e6c45a]"
              >
                Étudier mon projet
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}