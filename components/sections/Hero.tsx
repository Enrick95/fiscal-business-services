"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CreditCard,
  FileText,
  Headphones,
  Landmark,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Accompagnement",
    text: "personnalisé",
  },
  {
    icon: LockKeyhole,
    title: "Paiement 100%",
    text: "sécurisé Stripe",
  },
  {
    icon: Headphones,
    title: "Support WhatsApp",
    text: "réactif",
  },
  {
    icon: Timer,
    title: "Création rapide",
    text: "selon les délais",
  },
];

const included = [
  {
    icon: Landmark,
    title: "Création de LLC",
    text: "Société enregistrée aux États-Unis",
  },
  {
    icon: BadgeCheck,
    title: "EIN (IRS)",
    text: "Numéro d'identification fiscale américain",
  },
  {
    icon: Building2,
    title: "Compte bancaire US",
    text: "Ouverture selon votre profil",
  },
  {
    icon: CreditCard,
    title: "Solutions de paiement",
    text: "Stripe, Wise Business, Payoneer...",
  },
  {
    icon: FileText,
    title: "Documents officiels",
    text: "Articles of Organization, Operating Agreement...",
  },
  {
    icon: MessageCircle,
    title: "Support & accompagnement",
    text: "Suivi personnalisé sur WhatsApp",
  },
];

const partners = ["Mercury", "Stripe", "Wise", "Kraken", "Relay"];

export default function Hero() {
  return (
    <Reveal>
      <section
        id="accueil"
        className="relative overflow-hidden bg-[#06111f] px-6 pb-24 pt-36 text-white"
      >
        <div className="absolute left-[-12%] top-20 h-[520px] w-[520px] rounded-full bg-[#d4af37]/20 blur-[170px]" />
        <div className="absolute right-[-12%] top-0 h-[620px] w-[620px] rounded-full bg-blue-500/10 blur-[190px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[340px] bg-gradient-to-t from-[#06111f] to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm font-bold text-[#d4af37]">
                <Sparkles size={16} />
                US LLC Formation & Business Consulting
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Votre entreprise américaine,{" "}
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f8df8a] bg-clip-text text-transparent">
                  notre expertise.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Création de LLC américaine, ouverture de compte bancaire
                professionnel, solutions de paiement et accompagnement complet
                de A à Z.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="border-white/10 sm:border-r sm:last:border-r-0"
                    >
                      <Icon className="mb-3 h-7 w-7 text-[#d4af37]" />
                      <p className="text-sm font-bold">{benefit.title}</p>
                      <p className="mt-1 text-sm text-white/55">
                        {benefit.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#tarifs"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f8df8a] px-8 py-4 font-black text-[#06111f] shadow-2xl shadow-[#d4af37]/20 transition hover:-translate-y-1"
                >
                  Créer ma LLC
                  <ArrowRight size={19} className="transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://wa.me/33661125401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-8 py-4 font-black text-white transition hover:border-[#d4af37]/70 hover:text-[#d4af37]"
                >
                  <MessageCircle size={19} />
                  Nous écrire sur WhatsApp
                </a>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex text-[#d4af37]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5 fill-[#d4af37]"
                      />
                    ))}
                  </div>

                  <p className="font-bold">
                    Accompagnement premium pour entrepreneurs ambitieux
                  </p>
                </div>

                <p className="mt-2 text-sm text-white/55">
                  Une expérience claire, structurée et professionnelle pour
                  lancer votre société américaine.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-[#d4af37]/25 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                <div className="rounded-[2rem] border border-white/10 bg-[#09182a]/90 p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#d4af37]">
                    Tout inclus
                  </p>

                  <h2 className="mt-4 text-4xl font-black">
                    Votre LLC de A à Z
                  </h2>

                  <div className="mt-8 space-y-0">
                    {included.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="flex items-center gap-5 border-b border-white/10 py-5 last:border-b-0"
                        >
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 text-[#d4af37]">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div className="flex-1">
                            <p className="font-black">{item.title}</p>
                            <p className="mt-1 text-sm text-white/55">
                              {item.text}
                            </p>
                          </div>

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37]">
                            <BadgeCheck className="h-5 w-5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 rounded-3xl border border-[#d4af37]/30 bg-[#d4af37]/10 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37]/15 text-[#d4af37]">
                        <ShieldCheck className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-xl font-black">
                          Accompagnement premium
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/60">
                          Un suivi personnalisé pour structurer votre projet,
                          choisir les bonnes solutions et démarrer dans les
                          meilleures conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-[#071827]/95 p-5 shadow-2xl backdrop-blur">
                <p className="mb-4 text-sm font-semibold text-white/55">
                  Partenaires & outils accompagnés
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {partners.map((partner) => (
                    <span
                      key={partner}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/75"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur md:grid-cols-4">
            <div className="flex items-center gap-4 border-white/10 md:border-r">
              <ShieldCheck className="h-9 w-9 text-[#d4af37]" />
              <div>
                <p className="font-black">Paiement sécurisé</p>
                <p className="text-sm text-white/55">via Stripe Checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-white/10 md:border-r">
              <Timer className="h-9 w-9 text-[#d4af37]" />
              <div>
                <p className="font-black">Délai moyen</p>
                <p className="text-sm text-white/55">selon l’État choisi</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-white/10 md:border-r">
              <Landmark className="h-9 w-9 text-[#d4af37]" />
              <div>
                <p className="font-black">50 États US</p>
                <p className="text-sm text-white/55">selon votre stratégie</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Headphones className="h-9 w-9 text-[#d4af37]" />
              <div>
                <p className="font-black">Support dédié</p>
                <p className="text-sm text-white/55">accompagnement humain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}