import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, X, ZoomIn, ShieldCheck, ArrowLeft, Sparkles, Hammer, Award } from 'lucide-react';
import { GALLERY_ITEMS, WHATSAPP_CUSTOM_QUOTE_URL } from '../data/cutelariaData';
import { GalleryItem } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

export const GallerySection: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const EXACT_WHATSAPP_LINK = 'https://wa.me/554797708366?text=Ol%C3%A1,%20vim%20pelo%20site%20da%20Fronteira%20Cutelaria%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20uma%20faca%20sob%20medida.';

  // Different layout card configurations to create a youthful, dynamic bento catalog
  // Card 0: Featured Hero (Large 2-column or 12-col span)
  // Card 1: Sleek Tall Card
  // Card 2: Medium Dark Phosphated Card
  // Card 3: Modern Hybrid Card
  // Card 4: Detailed Engraved Card
  const getItemBentoClass = (index: number) => {
    switch (index) {
      case 0:
        return 'lg:col-span-8 lg:row-span-2 bg-gradient-to-br from-[#120a04] via-[#0d0d0d] to-[#050505] border-2 border-[#ff6a0088] shadow-[0_0_45px_rgba(255,106,0,0.25)]';
      case 1:
        return 'lg:col-span-4 lg:row-span-2 bg-gradient-to-b from-[#0f0f0f] via-[#0a0a0a] to-[#040404] border border-[#ff6a0044]';
      case 2:
        return 'lg:col-span-4 bg-[#0c0c0c] border border-stone-800 hover:border-[#ff6a00aa]';
      case 3:
        return 'lg:col-span-4 bg-[#0c0c0c] border border-stone-800 hover:border-[#ff6a00aa]';
      case 4:
        return 'lg:col-span-4 bg-[#0c0c0c] border border-stone-800 hover:border-[#ff6a00aa]';
      default:
        return 'lg:col-span-4 bg-[#0c0c0c] border border-stone-800 hover:border-[#ff6a00aa]';
    }
  };

  return (
    <section id="galeria" className="relative py-16 sm:py-28 bg-[#050505] border-t border-b border-[#ff6a0022]">
      {/* Background Subtle Sparks & Ambient Glow */}
      <div className="absolute inset-0 bg-brushed-metal opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ff6a0010] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#e6390010] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff6a0044] bg-[#ff6a0011] mb-4">
            <Flame size={14} className="text-[#ff6a00] animate-pulse" />
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#ff6a00] font-bold">
              Mini Catálogo de Referência
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 uppercase tracking-tight mb-4">
            Modelos de <span className="text-[#ff6a00] text-lava-glow">Cutelaria Artesanal</span>
          </h2>

          <p className="font-montserrat text-stone-300 text-xs sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Abaixo estão alguns dos nossos modelos de referência. <strong className="text-[#ff6a00] font-semibold">Não fabricamos apenas estes</strong> — criamos o seu projeto exclusivo sob medida com o tipo de aço, cabo e gravação que você desejar!
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent mx-auto mt-5" />
        </div>

        {/* Dynamic Bento Grid - Unified Mini Catalog without side scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const isHero = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_35px_rgba(255,106,0,0.3)] transition-all duration-300 flex flex-col justify-between ${getItemBentoClass(index)}`}
              >
                {/* Main Content Clickable for Lightbox */}
                <div 
                  onClick={() => setLightboxItem(item)}
                  className="cursor-pointer flex flex-col h-full justify-between"
                >
                  {/* Top Image Container */}
                  <div className={`relative w-full overflow-hidden group/img ${isHero ? 'h-64 sm:h-80 lg:h-96' : 'h-56 sm:h-64'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition duration-700 filter brightness-95 group-hover/img:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/50" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded bg-black/80 border border-[#ff6a0066] text-[#ff6a00] font-montserrat text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        {isHero ? '🔥 Modelo Mais Pedido' : item.categoryLabel}
                      </span>

                      <div className="p-1.5 sm:p-2 rounded-full bg-black/80 text-stone-200 group-hover/img:text-[#ff6a00] border border-stone-700/80 backdrop-blur-sm transition-all flex items-center gap-1 text-[10px] font-montserrat uppercase font-bold">
                        <ZoomIn size={14} />
                        <span className="hidden sm:inline">Ampliar Foto</span>
                      </div>
                    </div>

                    {/* Image Bottom Overlay Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className={`font-cinzel font-bold text-stone-100 uppercase leading-tight ${isHero ? 'text-xl sm:text-3xl' : 'text-base sm:text-lg'}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Specs Body */}
                  <div className={`p-4 sm:p-6 space-y-3 bg-[#0d0d0d] flex-1 flex flex-col justify-between`}>
                    <p className="font-montserrat text-xs sm:text-sm text-stone-300 font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Key Technical Specifications Chips */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-montserrat">
                      <div className="p-2 rounded bg-stone-950 border border-stone-800">
                        <span className="text-stone-400 block text-[9px] uppercase font-bold">Aço Forjado</span>
                        <strong className="text-[#ff6a00] truncate block">{item.steel}</strong>
                      </div>

                      <div className="p-2 rounded bg-stone-950 border border-stone-800">
                        <span className="text-stone-400 block text-[9px] uppercase font-bold">Lâmina</span>
                        <strong className="text-stone-200 truncate block">{item.bladeLength}</strong>
                      </div>
                    </div>

                    {/* Handle Detail */}
                    <div className="p-2.5 rounded bg-stone-950/80 border border-stone-800/80 flex items-center justify-between text-xs font-montserrat">
                      <span className="text-stone-400 font-medium">Cabo Artesanal:</span>
                      <strong className="text-stone-200 text-right truncate max-w-[160px] sm:max-w-[220px] ml-2">
                        {item.handle}
                      </strong>
                    </div>

                    {/* Differentials Bullet List */}
                    <div className="space-y-1.5 pt-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {item.details.slice(0, isHero ? 4 : 2).map((dt, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] font-montserrat text-stone-300">
                            <ShieldCheck size={13} className="text-[#ff6a00] shrink-0" />
                            <span className="truncate">{dt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CUSTOM ORDER BANNER AT THE BOTTOM OF CATÁLOGO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-stone-950 via-[#120a04] to-stone-950 border-2 border-[#ff6a0088] shadow-[0_0_50px_rgba(255,106,0,0.25)] relative overflow-hidden"
        >
          {/* Flame Ambient Effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6a0015] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6a0022] border border-[#ff6a0055] text-[#ff6a00] font-montserrat text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} />
                <span>Projeto Sob Medida Exclusivo</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-stone-100 uppercase tracking-tight">
                Quer um Modelo Diferente ou Personalizado?
              </h3>

              <p className="font-montserrat text-stone-300 text-xs sm:text-base font-light leading-relaxed">
                Além destes modelos de referência, fabricamos facas sob medida para churrasco, caça, pesca e colecionadores. Escolha o aço, cabo e gravação a laser com seu nome ou marca!
              </p>
            </div>

            <a
              href={EXACT_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-sheen shrink-0 px-6 py-4 rounded-lg bg-[#25D366] text-stone-950 hover:bg-[#1eb854] font-montserrat text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-2.5"
            >
              <WhatsAppIcon size={22} color="currentColor" />
              <span>Solicitar Faca Sob Medida</span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal (Enlarged Photo View) */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0a0a0a] rounded-xl border-2 border-[#ff6a00] p-4 sm:p-6 shadow-[0_0_60px_rgba(255,106,0,0.4)] my-auto max-h-[92vh] overflow-y-auto"
            >
              {/* Header Close & Voltar Buttons */}
              <div className="flex justify-between items-center pb-3 mb-4 border-b border-stone-800">
                <button
                  onClick={() => setLightboxItem(null)}
                  className="px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-300 hover:text-[#ff6a00] hover:border-[#ff6a00] transition-colors font-montserrat text-xs uppercase font-bold flex items-center gap-1.5"
                >
                  <ArrowLeft size={16} />
                  <span>Voltar ao Catálogo</span>
                </button>

                <button
                  onClick={() => setLightboxItem(null)}
                  className="p-1.5 rounded-full bg-stone-900 border border-stone-700 text-stone-300 hover:text-[#ff6a00] hover:border-[#ff6a00] transition-colors"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Modal Large Image */}
                <div className="relative h-64 sm:h-80 md:h-[380px] rounded-lg overflow-hidden border border-stone-800 bg-black flex items-center justify-center">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Details */}
                <div className="space-y-3 sm:space-y-4">
                  <span className="px-2.5 py-1 rounded bg-[#ff6a0022] border border-[#ff6a0055] text-[#ff6a00] font-montserrat text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                    {lightboxItem.categoryLabel}
                  </span>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-100 uppercase">
                    {lightboxItem.title}
                  </h3>

                  <p className="font-montserrat text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {lightboxItem.description}
                  </p>

                  <div className="space-y-1.5 bg-stone-900/80 p-3 sm:p-4 rounded border border-stone-800 text-xs font-montserrat text-stone-300">
                    <div><strong className="text-stone-100">Tipo de Aço:</strong> {lightboxItem.steel}</div>
                    <div><strong className="text-stone-100">Cabo:</strong> {lightboxItem.handle}</div>
                    <div><strong className="text-stone-100">Tamanho da Lâmina:</strong> {lightboxItem.bladeLength}</div>
                  </div>

                  <div className="space-y-1">
                    <span className="font-montserrat text-xs font-bold text-stone-200 uppercase">Diferenciais da Peça:</span>
                    <ul className="space-y-1 text-xs font-montserrat text-stone-400">
                      {lightboxItem.details.map((dt, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ShieldCheck size={14} className="text-[#ff6a00] shrink-0" />
                          <span>{dt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={WHATSAPP_CUSTOM_QUOTE_URL(`Olá Vani! Vi o modelo "${lightboxItem.title}" no Mini Catálogo do site e gostaria de solicitar um orçamento.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full metallic-sheen flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#25D366] text-stone-950 font-montserrat text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] transition-all mt-3"
                  >
                    <WhatsAppIcon size={18} color="currentColor" />
                    <span>Solicitar Orçamento no WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
