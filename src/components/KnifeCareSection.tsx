import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Droplets, Sparkles, Feather, Archive } from 'lucide-react';

export const KnifeCareSection: React.FC = () => {
  const careTips = [
    {
      icon: <Droplets className="text-[#ff6a00]" size={24} />,
      title: 'Limpeza & Secagem Imediata',
      desc: 'Após o uso, lave sua faca artesanal com detergente neutro e esponja macia. Seque imediatamente com pano limpo e seco. Nunca deixe de molho na pia.'
    },
    {
      icon: <ShieldAlert className="text-[#ff6a00]" size={24} />,
      title: 'Proteção contra Oxidação (Aço Carbono)',
      desc: 'Para lâminas em Aço Carbono 1070 e Disco de Arado, aplique 2 a 3 gotas de óleo mineral alimentício ou vaselina líquida na lâmina antes de guardar.'
    },
    {
      icon: <Feather className="text-[#ff6a00]" size={24} />,
      title: 'Manutenção do Fio',
      desc: 'Reassente o fio periodicamente com uma chaira lisa de cerâmica ou cromo. Para afiações completas, utilize pedras de água de grãos finos (1000/4000).'
    },
    {
      icon: <Archive className="text-[#ff6a00]" size={24} />,
      title: 'Armazenamento Correto',
      desc: 'Guarde sua faca em local seco e arejado. Evite guardar lâminas em Aço Carbono dentro de bainhas de couro por longos períodos sem óleo protetor.'
    }
  ];

  return (
    <section id="cuidados" className="relative py-24 bg-gradient-to-b from-[#0c0907] via-[#140e0a] to-[#0c0907] border-t border-b border-[#ff6a0026] overflow-hidden">
      {/* Soft Ambient Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,106,0,0.12),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-stone-100 uppercase tracking-tight mb-4 drop-shadow-sm">
            Cuidados & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] via-[#ff7a00] to-[#ffb700] text-lava-glow">Conservação</span>
          </h2>

          <p className="font-montserrat text-stone-300 text-sm sm:text-base font-normal leading-relaxed">
            Sua faca artesanal foi projetada para durar a vida toda. Siga este guia prático para manter a lâmina com corte cirúrgico e brilho constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careTips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-[#17120e]/95 border border-[#ff6a0029] hover:border-[#ff6a0088] shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_30px_rgba(255,106,0,0.18)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="p-3.5 rounded-full bg-gradient-to-br from-[#24170e] to-[#120a06] border border-[#ff6a0044] shadow-[0_0_15px_rgba(255,106,0,0.2)] w-fit mb-4">
                {tip.icon}
              </div>

              <h3 className="font-cinzel text-base font-bold text-stone-100 uppercase mb-2">
                {tip.title}
              </h3>

              <p className="font-montserrat text-xs text-stone-300 font-normal leading-relaxed">
                {tip.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
