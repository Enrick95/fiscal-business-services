"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  Building2,
  FileText,
  CreditCard,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Prise de contact",
    text: "Nous échangeons sur votre projet afin de comprendre votre activité et vous orienter vers la formule la plus adaptée.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Création de votre LLC",
    text: "Nous préparons et déposons votre société américaine avec tous les documents officiels nécessaires.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Compte bancaire & paiements",
    text: "Nous vous accompagnons dans l'ouverture de votre compte bancaire professionnel et la mise en place des solutions de paiement selon vos besoins.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Votre activité démarre",
    text: "Votre entreprise est prête à facturer, recevoir des paiements et développer son activité à l'international.",
  },
];

export default function Process() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-[#06111f] px-6 py-28 text-white">
        <div className="absolute left-[-15%] top-10 h-[450px] w-[450px] rounded-full bg-[#d4af37]/10 blur-[170px]" />
        <div className="absolute right-[-15%] bottom-0 h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[190px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Notre méthode
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Votre LLC en 4 étapes.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Un accompagnement simple, transparent et structuré pour créer votre
              entreprise américaine en toute sérénité.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent lg:block" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      <span className="text-6xl font-black text-[#d4af37]/20">
                        {step.number}
                      </span>

                      <h3 className="mt-3 text-3xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-5 leading-8 text-white/65">
                        {step.text}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <div className="group flex h-36 w-36 items-center justify-center rounded-[2rem] border border-[#d4af37]/20 bg-white/[0.04] backdrop-blur transition duration-300 hover:scale-105 hover:border-[#d4af37]">
                        <Icon className="h-14 w-14 text-[#d4af37]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 rounded-[2rem] border border-[#d4af37]/20 bg-gradient-to-r from-[#0c1d33] to-[#081421] p-10 text-center">
            <h3 className="text-3xl font-bold">
              Une méthode pensée pour vous faire gagner du temps.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
              Nous prenons en charge les démarches administratives afin que vous
              puissiez vous concentrer sur le développement de votre activité.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 font-bold text-[#06111f] transition hover:bg-[#e6c45a]"
            >
              Commencer mon projet
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}