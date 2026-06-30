"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ShieldCheck,
  FileText,
  Globe2,
  MessageCircle,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Accompagnement personnalisé",
    text: "Chaque projet est étudié individuellement afin de proposer la solution la plus adaptée à votre activité.",
  },
  {
    icon: FileText,
    title: "Documents officiels",
    text: "Votre société est créée avec les documents officiels nécessaires pour démarrer votre activité sereinement.",
  },
  {
    icon: Globe2,
    title: "100 % à distance",
    text: "Toutes les démarches peuvent être réalisées sans déplacement, où que vous soyez.",
  },
  {
    icon: MessageCircle,
    title: "Support réactif",
    text: "Nous restons disponibles avant, pendant et après la création de votre LLC.",
  },
];

export default function Trust() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-[#071321] px-6 py-28 text-white">
        <div className="absolute left-[-15%] top-10 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
        <div className="absolute right-[-15%] bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Pourquoi nous faire confiance
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Un partenaire fiable pour votre développement.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Notre objectif est de simplifier la création de votre société
              américaine tout en vous offrant un accompagnement professionnel à
              chaque étape.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10">
                    <Icon className="h-8 w-8 text-[#d4af37]" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="leading-8 text-white/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 rounded-[2rem] border border-[#d4af37]/20 bg-gradient-to-r from-[#0c1d33] to-[#081421] p-10 text-center">
            <h3 className="text-3xl font-bold">
              Votre projet mérite un accompagnement professionnel.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
              Nous mettons l'accent sur la transparence, la réactivité et un
              accompagnement personnalisé afin que vous puissiez créer votre
              société américaine en toute confiance.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}