import Reveal from "@/components/ui/Reveal";
import { Quote, Star, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Julien M.",
    role: "E-commerce",
    text: "Accompagnement sérieux et très clair. La création de ma LLC s’est faite rapidement, avec un vrai suivi à chaque étape.",
  },
  {
    name: "Sarah B.",
    role: "Freelance digitale",
    text: "J’avais besoin d’une structure professionnelle pour facturer à l’international. Tout a été expliqué simplement et sans stress.",
  },
  {
    name: "Karim D.",
    role: "Consultant",
    text: "Service réactif, professionnel et rassurant. J’ai été accompagné jusqu’à l’activation de ma société et de mes solutions.",
  },
];

export default function Testimonials() {
  return (
    <Reveal>
      <section
  id="avis"
  className="relative overflow-hidden bg-[#06111f] px-6 py-28 text-white"
>
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Avis clients
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Des entrepreneurs accompagnés avec sérieux.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Nos clients recherchent une solution fiable, claire et
              professionnelle pour structurer leur activité aux États-Unis.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-300 hover:-translate-y-3 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/10"
              >
                <Quote className="absolute right-8 top-8 h-10 w-10 text-[#d4af37]/20 transition group-hover:text-[#d4af37]/40" />

                <div className="mb-7 flex gap-1 text-[#d4af37]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="min-h-[150px] leading-8 text-white/75">
                  “{item.text}”
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10 text-sm font-black text-[#d4af37]">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm text-white/45">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-6 py-4 text-center text-sm text-white/70">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#d4af37]" />
            Chaque dossier est traité avec confidentialité, précision et
            accompagnement personnalisé.
          </div>
        </div>
      </section>
    </Reveal>
  );
}