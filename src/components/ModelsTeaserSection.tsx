import React from 'react';
import { Flame, ArrowRight, Sparkles, Shield, Eye } from 'lucide-react';

interface ModelsTeaserSectionProps {
  onOpenCatalog: () => void;
}

export const ModelsTeaserSection: React.FC<ModelsTeaserSectionProps> = ({ onOpenCatalog }) => {
  return (
    <section 
      id="nossos-modelos" 
      className="relative py-20 sm:py-28 bg-[#0a0806] text-stone-200 border-t border-stone-800/80 overflow-hidden"
    >
      {/* Subtle warm forge glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.08),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Subtle tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-[#ff6a0044] bg-[#ff6a0011] text-[#ff6a00] mb-5 shadow-inner">
          <Flame size={14} className="text-[#ff6a00]" />
          <span className="font-montserrat text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em]">
            Acervo da Fábrica • Fabricação Própria
          </span>
        </div>

        {/* Title */}
        <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 uppercase tracking-tight">
          NOSSOS <span className="text-[#ff6a00]">MODELOS</span>
        </h2>

        {/* Blade line divider */}
        <div className="flex items-center justify-center my-5 gap-3">
          <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-stone-600 to-[#ff6a00]" />
          <div className="w-2 h-2 rotate-45 border border-[#ff6a00] bg-[#0a0806]" />
          <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-stone-600 to-[#ff6a00]" />
        </div>

        {/* Subtitle */}
        <p className="font-cinzel text-lg sm:text-2xl text-stone-200 font-semibold italic tracking-wide max-w-2xl mx-auto">
          “Conheça alguns dos trabalhos que saem da nossa fábrica.”
        </p>

        {/* Short explanation */}
        <p className="font-montserrat text-stone-400 text-xs sm:text-sm font-normal mt-3 max-w-lg mx-auto leading-relaxed">
          Peças forjadas em nossa bancada em Camboriú/SC. Um registro visual de modelos autênticos já produzidos pela nossa cutelaria.
        </p>

        {/* Big elegant CTA Button */}
        <div className="mt-8 sm:mt-10">
          <button
            id="btn-ver-catalogo-de-facas"
            type="button"
            onClick={onOpenCatalog}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-sm bg-gradient-to-r from-[#ff6a00] via-[#ff7a1a] to-[#ff5500] text-black font-montserrat text-xs sm:text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_35px_rgba(255,106,0,0.45)] hover:shadow-[0_0_55px_rgba(255,106,0,0.75)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden border border-[#ffb380]/40"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            <Eye size={18} className="stroke-[2.5] text-black" />
            <span>VER CATÁLOGO DE FACAS</span>
            <ArrowRight size={18} className="stroke-[3] text-black group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Micro notice */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-montserrat text-stone-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]" />
            <span>Galeria com 49 fotografias reais de facas da nossa bancada</span>
          </div>
        </div>

      </div>
    </section>
  );
};
