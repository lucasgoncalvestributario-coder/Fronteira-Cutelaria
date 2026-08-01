import React from 'react';
import { WHATSAPP_URL } from '../data/cutelariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Button with Constant Glow */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento no WhatsApp"
        className="relative group p-4 rounded-full bg-stone-950 border-2 border-[#25D366] text-stone-100 shadow-[0_0_25px_rgba(37,211,102,0.8)] hover:shadow-[0_0_40px_rgba(37,211,102,1)] transition-all transform hover:scale-110 flex items-center justify-center"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <WhatsAppIcon size={28} color="#25D366" className="relative z-10 filter drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
      </a>
    </div>
  );
};

