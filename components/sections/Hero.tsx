"use client";

import Image from "next/image";
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
  Star,
  Timer,
} from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Accompagnement", text: "personnalisé" },
  { icon: LockKeyhole, title: "Paiement 100%", text: "sécurisé Stripe" },
  { icon: Headphones, title: "Support WhatsApp", text: "réactif 7j/7" },
  { icon: Timer, title: "Création rapide", text: "en quelques jours" },
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
    text: "Numéro d’identification fiscale américain",
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
    text: "WhatsApp 7j/7 par nos experts",
  },
];

const logos = [
  { src: "/logos/mercury.svg", alt: "Mercury", width: 118, height: 28 },
  { src: "/logos/stripe.svg", alt: "Stripe", width: 90, height: 28 },
  { src: "/logos/wise.svg", alt: "Wise", width: 92, height: 28 },
  { src: "/logos/kraken.svg", alt: "Kraken", width: 82, height: 28 },
  { src: "/logos/relay.svg", alt: "Relay", width: 82, height: 28 },
];

export default function Hero() {
  return (
    <Reveal>
      <section
        id="accueil"
        className="relative min-h-screen overflow-hidden bg-[#06111f] px-6 pb-10 pt-32 text-white lg:pt-36"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(59,130,246,0.14),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/60 via-[#06111f]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 h-[58%] w-full opacity-30">
          <div className="absolute bottom-0 left-[40%] h-[210px] w-[46px] bg-[#0b1625]" />
          <div className="absolute bottom-0 left-[45%] h-[285px] w-[60px] bg-[#0b1625] shadow-[0_0_40px_rgba(212,175,55,0.22)]" />
          <div className="absolute bottom-0 left-[51%] h-[235px] w-[52px] bg-[#0b1625]" />
          <div className="absolute bottom-0 left-[57%] h-[170px] w-[80px] bg-[#0b1625]" />
          <div className="absolute bottom-0 left-[64%] h-[125px] w-[95px] bg-[#0b1625]" />
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 px-4 py-2 text-sm font-bold uppercase text-[#d4af37]">
                🇺🇸 US LLC Formation & Business Consulting
              </div>

              <h1 className="max-w-[720px] text-5xl font-black leading-[1.08] tracking-tight md:text-7xl">
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

              <div className="mt-9 flex items-center gap-3">
                <div className="flex text-[#d4af37]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-[#d4af37]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-white/80">
                  Accompagnement premium, résultats concrets.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#d4af37]/40 bg-[#071321]/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl">
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
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#d4af37]/20 text-[#d4af37]">
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
                        Un expert dédié pour vous guider de A à Z sur WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="grid gap-6 md:grid-cols-[1fr_1fr_1fr_1.9fr]">
              <div className="flex items-center gap-4 border-white/10 md:border-r">
                <ShieldCheck className="h-11 w-11 text-[#d4af37]" />
                <div>
                  <p className="font-black">Paiement sécurisé</p>
                  <p className="text-sm text-white/55">par Stripe</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-white/10 md:border-r">
                <Timer className="h-11 w-11 text-[#d4af37]" />
                <div>
                  <p className="font-black">Délai moyen</p>
                  <p className="text-2xl font-black text-[#d4af37]">
                    3 à 7 jours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-white/10 md:border-r">
                <Globe2 className="h-11 w-11 text-[#d4af37]" />
                <div>
                  <p className="font-black">Disponible dans</p>
                  <p className="text-2xl font-black text-[#d4af37]">
                    50 États
                  </p>
                </div>
              </div>

              <div className="border-l border-[#d4af37]/30 pl-6">
                <p className="mb-4 text-sm font-semibold text-white/65">
                  Partenaires & outils inclus
                </p>

                <div className="flex flex-wrap items-center gap-7">
                  {logos.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="max-h-8 w-auto object-contain opacity-90 grayscale-0 transition duration-300 hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center text-sm text-white/65">
            Prêt à lancer votre activité aux États-Unis ?{" "}
            <span className="text-white/85">
              Démarrez maintenant et développez votre business à l’international.
            </span>
          </div>
        </div>
      </section>
    </Reveal>
  );
}