import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/33661125401?text=Bonjour%20%F0%9F%91%8B%0AJe%20viens%20de%20r%C3%A9gler%20mon%20offre%20sur%20fiscalbusiness.co.%0AJe%20suis%20pr%C3%AAt%20%C3%A0%20commencer%20la%20cr%C3%A9ation%20de%20ma%20LLC.";

const steps = [
  {
    icon: BadgeCheck,
    title: "Paiement confirmé",
    text: "Votre commande a bien été prise en compte.",
  },
  {
    icon: MessageCircle,
    title: "Contact WhatsApp",
    text: "Envoyez-nous le message pré-rempli pour ouvrir votre dossier.",
  },
  {
    icon: FileText,
    title: "Collecte des informations",
    text: "Nous vous guiderons pour récupérer les éléments nécessaires.",
  },
  {
    icon: ShieldCheck,
    title: "Lancement de votre LLC",
    text: "Notre équipe démarre votre accompagnement étape par étape.",
  },
];

export default function MerciPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06111f] px-6 py-24 text-white">
      <div className="absolute left-[-15%] top-10 h-[480px] w-[480px] rounded-full bg-[#d4af37]/20 blur-[170px]" />
      <div className="absolute bottom-[-20%] right-[-15%] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-[190px]" />

      <section className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
          <div className="rounded-[2rem] border border-white/10 bg-black/20 px-6 py-16 text-center md:px-12 md:py-20">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-2xl shadow-[#d4af37]/25">
              <CheckCircle2 className="h-12 w-12" />
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <Sparkles className="h-4 w-4" />
              Commande validée
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Merci pour votre confiance
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/65">
              Votre paiement a bien été pris en compte. Vous pouvez maintenant
              passer à l’étape suivante : nous contacter sur WhatsApp afin de
              démarrer officiellement votre accompagnement.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-10 flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-[#d4af37] px-8 py-5 text-lg font-black text-black shadow-2xl shadow-[#d4af37]/20 transition hover:-translate-y-1 hover:bg-[#e6c45a]"
            >
              Continuer sur WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>

            <p className="mt-5 text-sm text-white/45">
              Le message WhatsApp est déjà pré-rempli pour accélérer le
              traitement de votre dossier.
            </p>
          </div>

          <div className="grid gap-5 px-2 py-8 md:grid-cols-4 md:px-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                    <step.icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-black text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="font-bold">{step.title}</h2>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[#d4af37]/20 bg-[#d4af37]/10 p-6 text-center md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Fiscal Business Services
            </p>

            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/65">
              Notre objectif est de vous accompagner avec sérieux, clarté et
              efficacité dans la création de votre société américaine.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/55 transition hover:text-white"
            >
              Retourner à l’accueil
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}