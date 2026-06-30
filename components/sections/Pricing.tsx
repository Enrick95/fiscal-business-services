import { ArrowRight, Check, Crown, ShieldCheck } from "lucide-react";

const whatsappUrl =
  "https://wa.me/33661125401?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20la%20cr%C3%A9ation%20d%27une%20LLC%20am%C3%A9ricaine.";

const plans = [
  {
    title: "Standard",
    price: "799 €",
    priceNote: "Paiement unique",
    idealFor: "Parfait pour lancer votre société américaine sereinement.",
    description:
      "Création de votre société américaine avec un accompagnement complet jusqu'à sa mise en activité.",
    features: [
      "Création LLC américaine",
      "Documents officiels",
      "Compte bancaire professionnel US",
      "Accompagnement complet jusqu’à activation",
    ],
    featured: false,
    badge: "Pour bien démarrer",
  },
  {
    title: "Premium",
    price: "1 000 €",
    priceNote: "Paiement unique",
    idealFor:
      "Idéal pour les entrepreneurs qui souhaitent développer leur activité à l'international.",
    description:
      "Création de votre société et mise en place d'un écosystème financier professionnel adapté au développement de votre activité.",
    features: [
      "Tout ce qui est inclus dans Standard",
      "Écosystème financier professionnel",
      "Solutions de paiement internationales",
      "Accompagnement sur les plateformes adaptées à votre activité",
      "Possibilité de comptes professionnels complémentaires",
      "Suivi prioritaire et accompagnement personnalisé",
    ],
    featured: true,
    badge: "La solution la plus complète",
  },
  {
    title: "Gestion annuelle",
    price: "À partir de 80 €/an",
    priceNote: "Suivi annuel",
    idealFor: "Pour garder votre société conforme dans le temps.",
    description:
      "Nous assurons le suivi administratif de votre société afin qu'elle reste conforme à ses obligations.",
    features: [
      "Suivi administratif",
      "Renouvellement annuel",
      "Rappels des échéances",
      "Support selon vos besoins",
    ],
    featured: false,
    badge: "Conformité",
  },
];

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative overflow-hidden bg-[#06111f] px-6 py-28 text-white"
    >
      <div className="absolute left-[-15%] top-20 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-[-15%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Tarifs
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Des offres claires pour lancer votre société aux États-Unis
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/65">
            Choisissez l’accompagnement adapté à votre projet. Chaque offre est
            pensée pour vous guider avec sérieux, transparence et efficacité.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-[2rem] border p-8 shadow-2xl transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-[#d4af37]/70 bg-gradient-to-b from-[#d4af37] to-[#b99124] text-black shadow-[#d4af37]/20 lg:scale-105"
                  : "border-white/10 bg-white/[0.04] text-white shadow-black/20 backdrop-blur"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-bold text-white shadow-xl">
                  <Crown className="h-4 w-4 text-[#d4af37]" />
                  La solution la plus complète
                </div>
              )}

              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                  plan.featured
                    ? "bg-black/10 text-black"
                    : "bg-[#d4af37]/10 text-[#d4af37]"
                }`}
              >
                <ShieldCheck className="h-4 w-4" />
                {plan.badge}
              </div>

              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <div className="mt-5">
                <p className="text-5xl font-black tracking-tight">
                  {plan.price}
                </p>
                <p
                  className={`mt-2 text-sm font-semibold ${
                    plan.featured ? "text-black/60" : "text-white/45"
                  }`}
                >
                  {plan.priceNote}
                </p>
              </div>

              <p
                className={`mt-5 text-sm font-semibold ${
                  plan.featured ? "text-black/70" : "text-[#d4af37]"
                }`}
              >
                {plan.idealFor}
              </p>

              <p
                className={`mt-5 min-h-[112px] leading-relaxed ${
                  plan.featured ? "text-black/75" : "text-white/65"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <div
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-black text-[#d4af37]"
                          : "bg-[#d4af37]/15"
                      }`}
                    >
                      <Check className="h-4 w-4 text-[#d4af37]" />
                    </div>

                    <span
                      className={
                        plan.featured ? "text-black/85" : "text-white/75"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-center font-bold transition ${
                  plan.featured
                    ? "bg-black text-white hover:bg-[#111]"
                    : "bg-[#d4af37] text-black hover:bg-[#e6c45a]"
                }`}
              >
                Commencer mon accompagnement
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-white/45">
          Les tarifs peuvent varier selon la complexité du dossier, les besoins
          bancaires, les solutions de paiement demandées et les exigences de
          conformité.
        </p>
      </div>
    </section>
  );
}