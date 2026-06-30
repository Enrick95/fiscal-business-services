"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const questions = [
  {
    question: "En combien de temps ma LLC est-elle créée ?",
    answer:
      "La création de votre LLC intervient généralement sous 24 à 72 heures ouvrées après réception de l'ensemble des informations nécessaires. Les délais peuvent varier selon l'État choisi.",
  },
  {
    question: "Dois-je me déplacer aux États-Unis ?",
    answer:
      "Non. Toutes les démarches sont réalisées entièrement à distance. Vous pouvez créer votre société américaine depuis la France ou tout autre pays.",
  },
  {
    question: "Pouvez-vous m'accompagner pour le compte bancaire professionnel ?",
    answer:
      "Oui. Selon la formule choisie et votre situation, nous vous accompagnons jusqu'à l'ouverture de votre compte bancaire professionnel américain.",
  },
  {
    question: "Puis-je accepter des paiements en ligne ?",
    answer:
      "Oui. Notre offre Premium inclut un accompagnement pour mettre en place les solutions de paiement adaptées à votre activité, selon votre éligibilité.",
  },
  {
    question: "Proposez-vous un suivi après la création ?",
    answer:
      "Oui. Nous restons disponibles après la création de votre société et proposons également une gestion annuelle afin de maintenir votre entreprise conforme.",
  },
  {
    question: "Quelle offre choisir ?",
    answer:
      "L'offre Standard convient à la majorité des entrepreneurs. L'offre Premium est idéale si vous souhaitez un accompagnement plus complet, notamment pour les solutions de paiement et les besoins financiers spécifiques.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Reveal>
      <section
        id="faq"
        className="relative overflow-hidden bg-[#06111f] px-6 py-28 text-white"
      >
        <div className="absolute left-[-15%] top-20 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-[-15%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Questions fréquentes
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tout ce que vous devez savoir.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              Retrouvez les réponses aux questions les plus fréquentes avant de
              lancer votre société américaine.
            </p>
          </div>

          <div className="space-y-5">
            {questions.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur transition duration-300 hover:border-[#d4af37]/40"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <span className="pr-6 text-lg font-semibold">
                    {item.question}
                  </span>

                  <div
                    className={`rounded-full bg-[#d4af37]/10 p-2 transition ${
                      open === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5 text-[#d4af37]" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-8 pb-8 pt-6 leading-8 text-white/65">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-[#d4af37]/20 bg-gradient-to-r from-[#0c1d33] to-[#081421] p-8">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10">
                <ShieldCheck className="h-8 w-8 text-[#d4af37]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Vous avez une question spécifique ?
                </h3>

                <p className="mt-2 text-white/65">
                  Nous répondons personnellement à chaque demande afin de vous
                  orienter vers la solution la plus adaptée à votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}