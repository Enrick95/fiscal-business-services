"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsapp =
    "https://wa.me/33661125401?text=Bonjour%20Fiscal%20%26%20Business%20Services,%20je%20souhaite%20créer%20une%20LLC%20américaine.";

  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/40"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:block">
        WhatsApp
      </span>
    </a>
  );
}