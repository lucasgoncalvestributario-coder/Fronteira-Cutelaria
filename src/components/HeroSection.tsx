import React from 'react';
import { motion } from 'motion/react';
import { Flame, Swords, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { LOGO_URL, WHATSAPP_URL } from '../data/cutelariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Background Image / Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=90"
          alt="Forja de Facas Artesanais em Camboriú"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter brightness-75 contrast-125"
        />
        {/* Dark Vignette & Fire Glow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/90" />
        <div className="absolute inset-0 bg-radial from-[#ff6a0022] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff6a0044] bg-stone-950/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,106,0,0.2)]"
        >
          <MapPin size={14} className="text-[#ff6a00]" />
          <span className="font-montserrat text-xs uppercase tracking-widest text-stone-300">
            Camboriú - SC
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-ping ml-1" />
        </motion.div>

        {/* Central Logo Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mb-6 group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e63900] to-[#ffaa00] opacity-35 blur-3xl group-hover:opacity-65 transition duration-700 pointer-events-none" />
          <img
            src={LOGO_URL}
            alt="Logo Fronteira Cutelaria"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain filter drop-shadow-[0_0_35px_rgba(255,106,0,0.95)] transform group-hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Brand Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-100 uppercase leading-none mb-4"
        >
          Fábrica de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] via-[#ff6a00] to-[#ffaa00] text-lava-glow">
            Facas Artesanais
          </span>
        </motion.h1>

        {/* Emotional Subtitle Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-montserrat text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-4"
        >
          Cada faca é produzida artesanalmente com precisão, tradição e materiais de alta qualidade para quem exige excelência. Peças com alma criadas para durar gerações.
        </motion.p>

        {/* Highlight Quote Seal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-8 text-stone-400 font-montserrat text-xs uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#ff6a00]" />
            <span>100% Forjada à Mão</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#ff6a00]" />
            <span>Garantia Vitalícia de Forja</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
