import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Flame, ShieldCheck, MapPin } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../data/cutelariaData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden border-t border-stone-800">
      {/* Background Hero Knife Banner */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=2000&q=90"
          alt="Faca Artesanal de Luxo Fronteira Cutelaria"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-50 contrast-150 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-radial from-[#ff6a0033] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-sm bg-black/80 border-2 border-[#ff6a00] shadow-[0_0_60px_rgba(255,106,0,0.35)] backdrop-blur-md"
        >
          <div className="flex justify-center mb-6">
            <img src={LOGO_URL} alt="Fronteira Cutelaria" loading="eager" decoding="sync" fetchPriority="high" referrerPolicy="no-referrer" className="w-28 h-28 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_0_25px_rgba(255,106,0,0.9)]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 uppercase tracking-tight mb-4">
            Sua Próxima Faca Artesanal <br />
            <span className="text-[#ff6a00] text-lava-glow">Começa Aqui</span>
          </h2>

          <p className="font-montserrat text-stone-300 text-sm sm:text-lg max-w-xl mx-auto mb-8 font-light">
            Entre em contato direto com a forja, tire suas dúvidas com o cuteleiro e solicite seu orçamento personalizado sem compromisso.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-sheen inline-flex items-center justify-center gap-3 px-10 py-5 rounded-sm bg-gradient-to-r from-[#e63900] via-[#ff6a00] to-[#ffaa00] font-montserrat text-base sm:text-lg font-bold uppercase tracking-widest text-black shadow-[0_0_40px_rgba(255,106,0,0.8)] hover:shadow-[0_0_60px_rgba(255,106,0,1)] transition-all transform hover:-translate-y-1"
          >
            <MessageSquare size={24} className="fill-black" />
            <span>💬 Falar no WhatsApp</span>
          </a>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap justify-center gap-6 font-montserrat text-xs text-stone-400 uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#ff6a00]" /> Camboriú - SC</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#ff6a00]" /> Garantia Vitalícia</span>
            <span className="flex items-center gap-1.5"><Flame size={14} className="text-[#ff6a00]" /> Forjada à Mão</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
