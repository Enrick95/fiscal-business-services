"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  Clock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const whatsapp =
  "https://wa.me/33661125401?text=Bonjour%2C%20je%20souhaite%20%C3%AAtre%20accompagn%C3%A9%20pour%20la%20cr%C3%A9ation%20d%27une%20LLC%20am%C3%A9ricaine.";

const benefits = [
  "Analyse de votre projet",
  "Orientation vers la meilleure formule",
  "Accompagnement clair et confidentiel",
];

export default function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#06111f] px-6 py-28 text-white"
      >
        <div className="absolute left-[-15%] top-20 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-[-15%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Contact
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
              Prêt à lancer votre LLC américaine ?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Échangez avec nous sur votre projet afin de choisir la structure,
              l’offre et l’accompagnement les plus adaptés à votre situation.
            </p>

            <div className="mt-10 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4af37]/10">
                    <ShieldCheck className="h-4 w-4 text-[#d4af37]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 font-bold text-[#06111f] transition hover:bg-[#e6c45a]"
              >
                <MessageCircle className="h-5 w-5" />
                Discuter sur WhatsApp
              </a>

              <a
                href="#tarifs"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:border-[#d4af37]/60 hover:bg-white/[0.04]"
              >
                Voir les offres
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <Clock className="mb-3 h-6 w-6 text-[#d4af37]" />
                <p className="font-bold">Réponse rapide</p>
                <p className="mt-1 text-sm text-white/50">
                  Contact direct par WhatsApp.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <Mail className="mb-3 h-6 w-6 text-[#d4af37]" />
                <p className="font-bold">Suivi personnalisé</p>
                <p className="mt-1 text-sm text-white/50">
                  Chaque dossier est étudié selon votre profil.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10">
                <Sparkles className="h-7 w-7 text-[#d4af37]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Demande d’accompagnement</h3>
                <p className="mt-1 text-sm text-white/50">
                  Formulaire visuel, contact final via WhatsApp.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]/60"
                placeholder="Nom complet"
              />

              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]/60"
                placeholder="Email"
              />

              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]/60"
                placeholder="Téléphone"
              />

              <select className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition focus:border-[#d4af37]/60">
                <option className="text-black">Standard — 799 €</option>
                <option className="text-black">Premium — 1 000 €</option>
                <option className="text-black">Gestion annuelle</option>
                <option className="text-black">Je ne sais pas encore</option>
              </select>

              <textarea
                className="min-h-36 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]/60"
                placeholder="Décrivez rapidement votre projet"
              />

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 font-bold text-[#06111f] transition hover:bg-[#e6c45a]"
              >
                Envoyer ma demande
                <ArrowRight className="h-5 w-5" />
              </a>

              <p className="text-center text-xs leading-relaxed text-white/40">
                En cliquant, vous serez redirigé vers WhatsApp afin de finaliser
                votre demande directement avec notre équipe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}