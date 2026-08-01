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
    <section id="faq" className="relative py-24 bg-[#050505] border-t border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm border border-[#ff6a0044] bg-[#ff6a0011] mb-4">
            <HelpCircle size={14} className="text-[#ff6a00]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#ff6a00] font-semibold">
              Tire Suas Dúvidas
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-100 uppercase tracking-tight mb-4">
            Perguntas <span className="text-[#ff6a00] text-lava-glow">Frequentes</span>
          </h2>

          <p className="font-montserrat text-stone-400 text-sm sm:text-base font-light">
            Respostas diretas sobre manutenção, tipos de aço, personalização, prazos de entrega e nossa garantia vitalícia de forja.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-sm bg-brushed-metal border border-stone-800 overflow-hidden transition-all duration-300 hover:border-[#ff6a0066]"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="font-cinzel text-sm sm:text-base font-bold text-stone-200 uppercase">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#ff6a00] transition-transform duration-300 shrink-0 ${
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
