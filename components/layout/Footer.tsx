import { MessageCircle, ShieldCheck } from "lucide-react";

const whatsapp =
  "https://wa.me/33661125401?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20la%20cr%C3%A9ation%20d%27une%20LLC%20am%C3%A9ricaine.";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04101c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d4af37]/10">
                <ShieldCheck className="h-6 w-6 text-[#d4af37]" />
              </div>

              <h3 className="text-2xl font-bold">
                Fiscal & Business Services
              </h3>
            </div>

            <p className="max-w-md leading-7 text-white/60">
              Accompagnement premium pour les entrepreneurs francophones dans la
              création, la structuration et la gestion de leur société
              américaine.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-6 py-3 font-bold text-[#06111f] transition hover:bg-[#e6c45a]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div>
            <h4 className="mb-5 font-bold text-white">Navigation</h4>

            <div className="space-y-3 text-white/60">
              <a href="#accueil" className="block transition hover:text-[#d4af37]">
                Accueil
              </a>
              <a href="#services" className="block transition hover:text-[#d4af37]">
                Services
              </a>
              <a href="#tarifs" className="block transition hover:text-[#d4af37]">
                Tarifs
              </a>
              <a href="#faq" className="block transition hover:text-[#d4af37]">
                FAQ
              </a>
              <a href="#contact" className="block transition hover:text-[#d4af37]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-bold text-white">Offres</h4>

            <div className="space-y-3 text-white/60">
              <a href="#tarifs" className="block transition hover:text-[#d4af37]">
                Standard — 799 €
              </a>
              <a href="#tarifs" className="block transition hover:text-[#d4af37]">
                Premium — 1 000 €
              </a>
              <a href="#tarifs" className="block transition hover:text-[#d4af37]">
                Gestion annuelle
              </a>
              <a href="#contact" className="block transition hover:text-[#d4af37]">
                Accompagnement
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-bold text-white">Contact</h4>

            <div className="space-y-3 text-white/60">
              <p>WhatsApp : +33 6 61 12 54 01</p>
              <p>contact@fiscalbusiness.co</p>
              <p>Création de LLC américaine à distance</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Fiscal & Business Services. Tous droits
            réservés.
          </p>

          <p>
            Création LLC · Compte bancaire US · Paiement en ligne · Gestion
            annuelle
          </p>
        </div>
      </div>
    </footer>
  );
}