import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Flame, ChevronRight, Sparkles } from 'lucide-react';
import { STEELS_DATA, HANDLES_DATA, WHATSAPP_CUSTOM_QUOTE_URL } from '../data/cutelariaData';

export const MaterialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'steel' | 'handle'>('steel');

  return (
    <section id="materiais" className="relative py-20 sm:py-24 bg-gradient-to-b from-[#ff6a00] via-[#f25e00] to-[#e65200] border-t-2 border-b-2 border-black text-stone-950">
      {/* Background Subtle Flame Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-black bg-black text-[#ff6a00] mb-4 shadow-lg">
            <Flame size={16} className="text-[#ff6a00] animate-pulse" />
            <span className="font-montserrat text-xs uppercase tracking-widest font-black">
              Matéria-prima de Excelência
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-black uppercase tracking-tight mb-4 drop-shadow-sm">
            A Nobreza dos Materiais
          </h2>

          <p className="font-montserrat text-stone-950 text-sm sm:text-base font-bold leading-relaxed max-w-2xl mx-auto">
            Da escolha do aço de alta pureza até os cabos exóticos em madeira nobre, chifre e osso. Matérias-primas rigorosamente selecionadas para garantir beleza e performance extrema.
          </p>

          {/* Tab Selection */}
          <div className="flex justify-center mt-8 gap-3">
            <button
              onClick={() => setActiveTab('steel')}
              className={`px-6 py-3 rounded font-montserrat text-xs uppercase tracking-widest font-black transition-all border-2 ${
                activeTab === 'steel'
                  ? 'bg-black text-white border-black shadow-2xl scale-105'
                  : 'bg-black/20 text-black border-black/60 hover:bg-black/30'
              }`}
            >
              Tipos de Aço
            </button>

            <button
              onClick={() => setActiveTab('handle')}
              className={`px-6 py-3 rounded font-montserrat text-xs uppercase tracking-widest font-black transition-all border-2 ${
                activeTab === 'handle'
                  ? 'bg-black text-white border-black shadow-2xl scale-105'
                  : 'bg-black/20 text-black border-black/60 hover:bg-black/30'
              }`}
            >
              Cabos Nobres & Exóticos
            </button>
          </div>
        </div>

        {/* Tab Content: Steels */}
        {activeTab === 'steel' && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {STEELS_DATA.map((steel) => (
              <motion.div
                key={steel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-lg bg-black border-2 border-black hover:border-yellow-400 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative aspect-square sm:aspect-auto sm:h-72 w-full overflow-hidden">
                    <img
                      src={steel.image}
                      alt={steel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                    
                    {steel.badge && (
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-1 rounded bg-[#ff6a00] border border-black text-black font-montserrat text-[9px] sm:text-[11px] font-black uppercase tracking-wider shadow-md">
                        {steel.badge}
                      </span>
                    )}

                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-4">
                      <h3 className="font-cinzel text-xs sm:text-xl font-black text-stone-100 uppercase line-clamp-1 group-hover:text-[#ff6a00] transition-colors leading-tight">
                        {steel.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-3 sm:p-5 space-y-2 sm:space-y-4 bg-black">
                    <p className="font-montserrat text-[11px] sm:text-xs text-stone-300 leading-relaxed font-medium line-clamp-2">
                      {steel.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1 sm:space-y-1.5 pt-1.5 sm:pt-2 border-t border-stone-800">
                      <span className="font-montserrat text-[10px] sm:text-[11px] font-extrabold text-[#ff6a00] uppercase tracking-wide block mb-0.5">
                        Características:
                      </span>
                      {steel.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1 text-[10px] sm:text-[11px] font-montserrat text-stone-200 font-medium">
                          <ShieldCheck size={12} className="text-[#ff6a00] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab Content: Handles */}
        {activeTab === 'handle' && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {HANDLES_DATA.map((handle) => (
              <motion.div
                key={handle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-lg bg-black border-2 border-black hover:border-yellow-400 transition-all overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square sm:aspect-auto sm:h-72 w-full overflow-hidden">
                    <img
                      src={handle.image}
                      alt={handle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                    
                    {handle.badge && (
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#ff6a00] border border-black text-black font-montserrat text-[8px] sm:text-[10px] font-black uppercase tracking-wider shadow-md">
                        {handle.badge}
                      </span>
                    )}

                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-4">
                      <h3 className="font-cinzel text-xs sm:text-xl font-black text-stone-100 uppercase line-clamp-1 group-hover:text-[#ff6a00] transition-colors leading-tight">
                        {handle.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-5 space-y-2 sm:space-y-3 bg-black">
                    <p className="font-montserrat text-[11px] sm:text-xs text-stone-300 font-medium leading-relaxed line-clamp-3">
                      {handle.description}
                    </p>

                    {handle.features && handle.features.length > 0 && (
                      <div className="space-y-1 pt-1.5 border-t border-stone-800">
                        {handle.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-[10px] sm:text-[11px] font-montserrat text-stone-200 font-medium">
                            <Sparkles size={11} className="text-[#ff6a00] shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
