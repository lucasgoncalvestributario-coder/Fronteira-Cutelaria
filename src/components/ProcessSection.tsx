import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Thermometer, ShieldCheck, ArrowDown, ChevronRight, Award } from 'lucide-react';
import { PROCESS_STEPS } from '../data/cutelariaData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // Step 3 (Forjamento) active by default

  return (
    <section id="processo" className="relative py-24 bg-dark-wood border-t border-b border-[#ff6a0033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm border border-[#ff6a0044] bg-[#ff6a0011] mb-4">
            <Flame size={14} className="text-[#ff6a00]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#ff6a00] font-semibold">
              Da Matéria-Prima à Perfeição
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-100 uppercase tracking-tight mb-4">
            Processo de <span className="text-[#ff6a00] text-lava-glow">Fabricação</span>
          </h2>

          <p className="font-montserrat text-stone-400 text-sm sm:text-base font-light">
            Conheça a jornada de transformação do aço incandescente em uma obra de arte funcional. 8 etapas rigorosas de cutelaria tradicional.
          </p>
        </div>

        {/* Interactive Steps Bar (Horizontal scroll on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto gap-2.5 pb-3 mb-6 sm:mb-12 no-scrollbar sm:grid sm:grid-cols-4 lg:grid-cols-8 sm:gap-3 snap-x">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 sm:p-3 rounded border text-center transition-all duration-300 flex flex-col items-center justify-center shrink-0 min-w-[100px] sm:min-w-0 snap-start ${
                activeStep === idx
                  ? 'bg-gradient-to-b from-[#ff6a0033] to-stone-900 border-[#ff6a00] text-stone-100 shadow-[0_0_20px_rgba(255,106,0,0.4)] scale-102 z-10'
                  : 'bg-stone-950/80 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
              }`}
            >
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full font-cinzel text-xs font-bold flex items-center justify-center mb-1.5 sm:mb-2 border ${
                activeStep === idx
                  ? 'bg-[#ff6a00] text-black border-[#ff6a00]'
                  : 'bg-stone-900 border-stone-700 text-stone-300'
              }`}>
                0{step.number}
              </div>

              <span className="font-cinzel text-[10px] sm:text-[11px] font-bold uppercase line-clamp-1">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Step Active Spotlight Box */}
        {PROCESS_STEPS[activeStep] && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded bg-brushed-metal border border-[#ff6a0066] p-4 sm:p-8 shadow-[0_0_40px_rgba(255,106,0,0.2)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Image Showcase */}
              <div className="lg:col-span-6 relative rounded overflow-hidden border border-stone-800 h-52 sm:h-80 md:h-96">
                <img
                  src={PROCESS_STEPS[activeStep].image}
                  alt={PROCESS_STEPS[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded bg-black/85 border border-[#ff6a0055] text-[#ff6a00] font-montserrat text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Thermometer size={14} />
                  <span>{PROCESS_STEPS[activeStep].temperature}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded bg-[#ff6a0022] border border-[#ff6a0055] text-[#ff6a00] font-cinzel text-[10px] sm:text-xs font-bold">
                    Etapa 0{PROCESS_STEPS[activeStep].number} de 08
                  </span>
                  <span className="font-montserrat text-[11px] sm:text-xs text-stone-400 uppercase tracking-widest">
                    {PROCESS_STEPS[activeStep].subtitle}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-stone-100 uppercase">
                  {PROCESS_STEPS[activeStep].title}
                </h3>

                <p className="font-montserrat text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {PROCESS_STEPS[activeStep].description}
                </p>

                <div className="pt-3 border-t border-stone-800 space-y-2">
                  <span className="font-montserrat text-[11px] sm:text-xs font-bold text-stone-200 uppercase">
                    Procedimentos Técnicos da Etapa:
                  </span>
                  <div className="space-y-1.5">
                    {PROCESS_STEPS[activeStep].details.map((dt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-montserrat text-stone-300">
                        <ShieldCheck size={14} className="text-[#ff6a00] shrink-0" />
                        <span>{dt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Navigation Controls */}
                <div className="flex justify-between items-center gap-3 pt-3">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3.5 py-2 rounded bg-stone-900 border border-stone-700 text-stone-300 hover:text-stone-100 disabled:opacity-30 font-montserrat text-xs uppercase font-bold"
                  >
                    Anterior
                  </button>

                  <span className="font-montserrat text-xs text-stone-400 font-semibold">
                    {activeStep + 1} / {PROCESS_STEPS.length}
                  </span>

                  <button
                    disabled={activeStep === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                    className="px-3.5 py-2 rounded bg-[#ff6a00] text-black font-montserrat text-xs font-bold uppercase tracking-wider hover:bg-[#ff8800] disabled:opacity-30 inline-flex items-center gap-1 shadow-[0_0_15px_rgba(255,106,0,0.4)]"
                  >
                    <span>Próxima</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
