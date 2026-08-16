import React from 'react';
import { motion } from 'motion/react';
import { Flame, ExternalLink, BookOpen, ArrowUpRight, Smartphone, CheckCircle2 } from 'lucide-react';
import { CATALOG_URL, WHATSAPP_CUSTOM_QUOTE_URL, LOGO_URL } from '../data/cutelariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const GallerySection: React.FC = () => {
  const WHATSAPP_ORDER_LINK = WHATSAPP_CUSTOM_QUOTE_URL('Olá! Gostaria de tirar dúvidas sobre o catálogo e encomendar uma faca sob medida.');

  return (
    <section id="catalogo" className="relative py-16 sm:py-24 bg-[#050505] border-t border-b border-[#ff6a0022] scroll-mt-20">
      {/* Invisible anchor for backward compatibility with #galeria */}
      <div id="galeria" className="absolute -top-24 left-0 w-full h-1 pointer-events-none" />

      {/* Ambient Forge Glow */}
      <div className="absolute inset-0 bg-brushed-metal opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff6a0020] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#e6390018] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff6a0044] bg-[#ff6a0011] mb-4">
            <Flame size={14} className="text-[#ff6a00] animate-pulse" />
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#ff6a00] font-bold">
              Catálogo Oficial Interativo
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 uppercase tracking-tight mb-4">
            Catálogo Completo de <span className="text-[#ff6a00] text-lava-glow">Facas Artesanais</span>
          </h2>

          <p className="font-montserrat text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Acesse nosso catálogo digital online para conferir todas as peças disponíveis, modelos sob medida, fotos em alta resolução e valores atualizados.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent mx-auto mt-5" />
        </div>

        {/* MAIN INTERACTIVE CATALOG SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-[#140a04] via-[#0d0d0d] to-[#060606] border-2 border-[#ff6a0088] p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(255,106,0,0.35)] hover:shadow-[0_0_90px_rgba(255,106,0,0.55)] transition-all duration-500 overflow-hidden"
        >
          {/* Card Top Right Ambient Watermark */}
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#ff6a0025] rounded-full blur-3xl pointer-events-none" />

          {/* Quick Online Badge for Fast Mobile Users */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-stone-800/80">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
              </span>
              <span className="font-montserrat text-xs sm:text-sm font-bold text-stone-200 uppercase tracking-wider">
                Catálogo Online Disponível • Acesso Imediato
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-stone-700 text-stone-300 font-montserrat text-[11px] font-medium">
              <Smartphone size={14} className="text-[#ff6a00]" />
              <span>Otimizado para Celular & Desktop</span>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Giant Glowing Clickable Catalog Logo Emblem */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <a
                href={CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Catálogo Oficial da Fronteira Cutelaria"
                className="group/emblem relative w-full max-w-[360px] sm:max-w-[420px] aspect-square rounded-2xl bg-gradient-to-b from-[#1c0f06] via-[#0f0904] to-black border-2 border-[#ff6a00] p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-[0_0_50px_rgba(255,106,0,0.5)] hover:shadow-[0_0_90px_rgba(255,106,0,0.85)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Intense Pulsing Glow Backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6a0030] via-transparent to-[#ff6a0020] opacity-80 group-hover/emblem:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.35)_0%,transparent_70%)] animate-pulse" />

                {/* Top Badge Inside Card */}
                <div className="relative z-10 w-full flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-[#ff6a0088] text-[#ff6a00] font-montserrat text-[11px] font-bold uppercase tracking-wider shadow-md">
                    <BookOpen size={13} />
                    <span>Catálogo Oficial</span>
                  </div>
                  <div className="p-2 rounded-full bg-[#ff6a00] text-black shadow-[0_0_15px_rgba(255,106,0,0.8)] group-hover/emblem:scale-110 transition-transform">
                    <ExternalLink size={16} />
                  </div>
                </div>

                {/* Giant Glowing Logo Filling the Center */}
                <div className="relative z-10 w-full flex-1 flex items-center justify-center my-2 p-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                      filter: [
                        'drop-shadow(0 0 25px rgba(255,106,0,0.85)) brightness(1)',
                        'drop-shadow(0 0 45px rgba(255,106,0,1)) brightness(1.15)',
                        'drop-shadow(0 0 25px rgba(255,106,0,0.85)) brightness(1)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={LOGO_URL}
                      alt="Logo Fronteira Cutelaria"
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                      referrerPolicy="no-referrer"
                      className="w-full h-full max-h-[220px] sm:max-h-[260px] object-contain filter drop-shadow-[0_0_35px_rgba(255,106,0,0.95)] group-hover/emblem:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>

                {/* Bottom Callout Bar inside Emblem */}
                <div className="relative z-10 w-full pt-3 border-t border-[#ff6a0055] flex flex-col items-center">
                  <span className="font-cinzel text-base sm:text-lg font-black text-stone-100 uppercase tracking-widest group-hover/emblem:text-[#ff6a00] transition-colors flex items-center gap-1.5">
                    <span>Clique para Abrir o Catálogo</span>
                    <ArrowUpRight size={18} className="text-[#ff6a00]" />
                  </span>
                  <span className="font-montserrat text-[11px] text-stone-400 font-mono mt-0.5">
                    catalogofronteiracutelaria.netlify.app
                  </span>
                </div>
              </a>
            </div>

            {/* Right: Explanatory Content & Fast Action Direction */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div>
                <span className="font-montserrat text-xs font-black tracking-[0.2em] text-[#ff6a00] uppercase block mb-1">
                  Direcionamento Rápido
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-100 uppercase leading-tight">
                  Descubra Nossas Lâminas em Poucos Cliques
                </h3>
              </div>

              <p className="font-montserrat text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                Nosso catálogo reúne a coleção completa de modelos forjados pela <strong className="text-stone-100 font-semibold">Fronteira Cutelaria</strong>. Navegue pelas linhas de churrasco, campeira e colecionador, visualize fotos detalhadas da empunhadura e solicite sua peça diretamente.
              </p>

              {/* Highlights Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/60 border border-stone-800 text-left">
                  <CheckCircle2 size={16} className="text-[#ff6a00] shrink-0" />
                  <span className="font-montserrat text-xs text-stone-300 font-medium">Fotos em alta definição</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/60 border border-stone-800 text-left">
                  <CheckCircle2 size={16} className="text-[#ff6a00] shrink-0" />
                  <span className="font-montserrat text-xs text-stone-300 font-medium">Valores e especificações</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/60 border border-stone-800 text-left">
                  <CheckCircle2 size={16} className="text-[#ff6a00] shrink-0" />
                  <span className="font-montserrat text-xs text-stone-300 font-medium">Peças a pronta-entrega</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/60 border border-stone-800 text-left">
                  <CheckCircle2 size={16} className="text-[#ff6a00] shrink-0" />
                  <span className="font-montserrat text-xs text-stone-300 font-medium">Projetos sob encomenda</span>
                </div>
              </div>

              {/* ACTION BUTTONS (MOBILE-FIRST PROMINENT CLICK TARGETS) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                {/* Direct Main Link Button */}
                <a
                  href={CATALOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metallic-sheen flex-1 min-h-[52px] px-6 py-4 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#e65c00] text-black font-montserrat text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_0_30px_rgba(255,106,0,0.6)] hover:shadow-[0_0_45px_rgba(255,106,0,0.9)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <BookOpen size={18} />
                  <span>Acessar Catálogo Completo</span>
                  <ArrowUpRight size={18} />
                </a>

                {/* Direct WhatsApp Quote Button */}
                <a
                  href={WHATSAPP_ORDER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[52px] px-5 py-4 rounded-xl bg-black/90 hover:bg-[#25D366]/10 text-stone-200 hover:text-[#25D366] border border-[#25D366] font-montserrat text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <WhatsAppIcon size={18} color="#25D366" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
