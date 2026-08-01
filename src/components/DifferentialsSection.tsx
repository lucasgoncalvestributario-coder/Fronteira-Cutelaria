import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Flame, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { DIFFERENTIALS, LOGO_URL } from '../data/cutelariaData';

export const DifferentialsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm border border-[#ff6a0044] bg-[#ff6a0011] mb-4">
            <Flame size={14} className="text-[#ff6a00]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#ff6a00] font-semibold">
              Compromisso com a Excelência
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-100 uppercase tracking-tight mb-4">
            Diferenciais & <span className="text-[#ff6a00] text-lava-glow">Por Que Escolher</span>
          </h2>

          <p className="font-montserrat text-stone-400 text-sm sm:text-base font-light">
            Não vendemos apenas ferramentas de corte. Entregamos o orgulho de possuir uma joia forjada artesanalmente com procedência garantida.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {DIFFERENTIALS.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-5 rounded-sm bg-brushed-metal border border-stone-800 hover:border-[#ff6a00aa] transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,106,0,0.2)] flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-full bg-black/60 border border-[#ff6a0044] w-fit text-[#ff6a00] mb-4 group-hover:border-[#ff6a00] group-hover:scale-110 transition-all">
                  <CheckCircle2 size={20} />
                </div>

                <h3 className="font-cinzel text-sm font-bold text-stone-100 uppercase mb-2 group-hover:text-[#ff6a00] transition-colors">
                  {diff.title}
                </h3>

                <p className="font-montserrat text-xs text-stone-400 font-light leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
