import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const whatsappNumber = "5511978783723";
  const whatsappMsg = encodeURIComponent("Olá! Vim pelo site e gostaria de agendar uma avaliação.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full bg-green-400 opacity-70 animate-ping -z-10"></span>
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Agende uma Avaliação!
        {/* Tooltip arrow */}
        <span className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
      </span>
    </a>
  );
};