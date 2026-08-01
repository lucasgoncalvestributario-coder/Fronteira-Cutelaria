import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Flame, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/cutelariaData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-24 bg-dark-wood border-t border-b border-[#ff6a0033]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm border border-[#ff6a0044] bg-[#ff6a0011] mb-4">
            <Flame size={14} className="text-[#ff6a00]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#ff6a00] font-semibold">
              Reconhecimento dos Nossos Clientes
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-100 uppercase tracking-tight mb-4">
            Depoimentos & <span className="text-[#ff6a00] text-lava-glow">Avaliações 5 Estrelas</span>
          </h2>

          <p className="font-montserrat text-stone-400 text-sm sm:text-base font-light">
            Veja o que dizem churrasqueiros, colecionadores e amantes da boa cutelaria de todo o Brasil sobre nossas facas artesanais.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-sm bg-brushed-metal border-2 border-[#ff6a0044] p-8 sm:p-12 shadow-[0_0_40px_rgba(255,106,0,0.15)]">
          <Quote size={48} className="absolute top-6 right-6 text-[#ff6a0020]" />

          <motion.div
            key={TESTIMONIALS[currentIndex].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 text-[#ff6a00]">
              {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#ff6a00]" />
              ))}
            </div>

            <p className="font-playfair text-lg sm:text-2xl text-stone-200 italic leading-relaxed">
              "{TESTIMONIALS[currentIndex].comment}"
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-stone-800">
              <img
                src={TESTIMONIALS[currentIndex].avatar}
                alt={TESTIMONIALS[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#ff6a00]"
              />
              <div>
                <h4 className="font-cinzel text-base font-bold text-stone-100 uppercase">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <span className="font-montserrat text-xs text-[#ff6a00] block">
                  {TESTIMONIALS[currentIndex].city} - {TESTIMONIALS[currentIndex].state} • Comprador Verificado
                </span>
                <span className="font-montserrat text-[11px] text-stone-500 block">
                  Peça adquirida: {TESTIMONIALS[currentIndex].knifeBought}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Carousel Arrows */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-stone-800/60">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    currentIndex === idx ? 'bg-[#ff6a00] w-8' : 'bg-stone-800 hover:bg-stone-600'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-sm bg-stone-900 border border-stone-700 text-stone-300 hover:text-[#ff6a00] hover:border-[#ff6a00] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-sm bg-stone-900 border border-stone-700 text-stone-300 hover:text-[#ff6a00] hover:border-[#ff6a00] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
