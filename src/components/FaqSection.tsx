import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Flame } from 'lucide-react';
import { FAQS } from '../data/cutelariaData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-[#0c0907] via-[#150f0b] to-[#0c0907] border-t border-[#ff6a0026] overflow-hidden">
      {/* Soft Warm Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(255,106,0,0.10),transparent_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-100 uppercase tracking-tight mb-4 drop-shadow-sm">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] via-[#ff7a00] to-[#ffb700] text-lava-glow">Frequentes</span>
          </h2>

          <p className="font-montserrat text-stone-300 text-sm sm:text-base font-normal leading-relaxed">
            Respostas diretas sobre manutenção, tipos de aço, personalização, prazos de entrega e nossa garantia de fábrica.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-[#18120e]/95 border border-[#ff6a0029] overflow-hidden transition-all duration-300 hover:border-[#ff6a0077] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_25px_rgba(255,106,0,0.12)]"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="font-cinzel text-sm sm:text-base font-bold text-stone-200 uppercase tracking-wide">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#ff7700] transition-transform duration-300 shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 font-montserrat text-xs sm:text-sm text-stone-400 font-light leading-relaxed border-t border-stone-800/80 mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
