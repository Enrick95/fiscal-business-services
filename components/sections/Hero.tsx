"use client";

import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CreditCard,
  FileText,
  Globe2,
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
  { icon: ShieldCheck, title: "Accompagnement", text: "personnalisé" },
  { icon: LockKeyhole, title: "Paiement 100%", text: "sécurisé Stripe" },
  { icon: Headphones, title: "Support WhatsApp", text: "réactif" },
  { icon: Timer, title: "Création rapide", text: "selon les délais" },
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
    text: "Ouverture avec Mercury ou autre partenaire",
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
    text: "WhatsApp par nos experts",
  },
];

const partners = ["Mercury", "Stripe", "Wise", "Kraken", "Relay"];

export default function Hero() {
  return (
    <Reveal>
      <section
        id="accueil"
        className="relative min-h-screen overflow-hidden bg-[#06111f] px-6 pb-14 pt-32 text-white lg:pt-36"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.16),transparent_26%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#06111f] via-[#06111f]/70 to-transparent" />

        <div className="absolute bottom-0 left-0 h-[55%] w-full opacity-25">
          <div className="absolute bottom-0 left-0 h-full w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent),radial-gradient(circle_at_10%_30%,rgba(212,175,55,0.25),transparent_18%)]" />
          <div className="absolute bottom-0 left-[42%] h-[210px] w-[44px] bg-[#0b1625] shadow-[0_0_35px_rgba(212,175,55,0.18)]" />
          <div className="absolute bottom-0 left-[47%] h-[290px] w-[58px] bg-[#0b1625] shadow-[0_0_35px_rgba(212,175,55,0.18)]" />
          <div className="absolute bottom-0 left-[53%] h-[250px] w-[50px] bg-[#0b1625] shadow-[0_0_35px_rgba(212,175,55,0.18)]" />
          <div className="absolute bottom-0 left-[60%] h-[180px] w-[72px] bg-[#0b1625]" />
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 px-4 py-2 text-sm font-bold uppercase text-[#d4af37]">
                🇺🇸 US LLC Formation & Business Consulting
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight md:text-7xl">
                Votre entreprise américaine,{" "}
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f8df8a] bg-clip-text text-transparent">
                  notre expertise.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Création de LLC américaine, ouverture de compte bancaire
                professionnel, solutions de paiement et accompagnement complet
                de A à Z.
              </p>

              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="border-white/10 md:border-r md:last:border-r-0"
                    >
                      <Icon className="mb-3 h-8 w-8 text-[#d4af37]" />
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
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f8df8a] px-9 py-4 font-black text-[#06111f] shadow-2xl shadow-[#d4af37]/20 transition hover:-translate-y-1"
                >
                  Créer ma LLC
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://wa.me/33661125401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-8 py-4 font-black text-white transition hover:border-[#d4af37]/70 hover:text-[#d4af37]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Nous écrire sur WhatsApp
                </a>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex text-[#d4af37]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-[#d4af37]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-white/80">
                  Un accompagnement premium, structuré et professionnel.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#d4af37]/35 bg-[#071321]/80 p-7 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.45em] text-[#d4af37]">
                  Tout inclus
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Votre LLC de A à Z
                </h2>

                <div className="mt-7">
                  {included.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-5 border-b border-white/10 py-4 last:border-b-0"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/20 text-[#d4af37]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="flex-1">
                          <p className="font-black">{item.title}</p>
                          <p className="mt-1 text-sm text-white/55">
                            {item.text}
                          </p>
                        </div>

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/50 text-[#d4af37]">
                          <BadgeCheck className="h-5 w-5" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-3xl border border-[#d4af37]/35 bg-[#d4af37]/10 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37]/15 text-[#d4af37]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xl font-black">
                        Accompagnement premium
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        Un expert dédié pour vous guider étape par étape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-[#071827]/95 p-5 shadow-2xl backdrop-blur">
                <p className="mb-4 text-sm font-semibold text-white/55">
                  Partenaires & outils inclus
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {partners.map((partner) => (
                    <span
                      key={partner}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/75"
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
              <ShieldCheck className="h-10 w-10 text-[#d4af37]" />
              <div>
                <p className="font-black">Paiement sécurisé</p>
                <p className="text-sm text-white/55">par Stripe Checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-white/10 md:border-r">
              <Timer className="h-10 w-10 text-[#d4af37]" />
              <div>
                <p className="font-black">Délai moyen</p>
                <p className="text-sm text-white/55">selon l’État choisi</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-white/10 md:border-r">
              <Globe2 className="h-10 w-10 text-[#d4af37]" />
              <div>
                <p className="font-black">50 États US</p>
                <p className="text-sm text-white/55">selon votre stratégie</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Headphones className="h-10 w-10 text-[#d4af37]" />
              <div>
                <p className="font-black">Support dédié</p>
                <p className="text-sm text-white/55">accompagnement humain</p>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center text-sm text-white/60">
            Prêt à lancer votre activité aux États-Unis ?{" "}
            <span className="text-white">
              Démarrez maintenant et développez votre business à l’international.
            </span>
          </div>
        </div>
      </section>
    </Reveal>
  );
}