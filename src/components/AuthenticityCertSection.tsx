import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import { LOGO_URL } from '../data/cutelariaData';

export const AuthenticityCertSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-dark-wood border-t border-b border-[#ff6a0033]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff6a0011] border border-[#ff6a0044] text-[#ff6a00] font-montserrat text-xs uppercase font-bold tracking-widest mb-3">
            <Award size={14} />
            <span>Garantia de Autenticidade</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-100 uppercase">
            Certificado Oficial de <span className="text-[#ff6a00]">Procedência</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mt-2">
            Todas as facas da Fronteira Cutelaria acompanham Certificado de Autenticidade individual numerado e assinado à mão pelo Cuteleiro.
          </p>
        </div>

        {/* Certificate Mock Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto rounded-sm bg-[#080808] border-2 border-[#ff6a00a1] p-6 sm:p-10 shadow-[0_0_50px_rgba(255,106,0,0.25)] overflow-hidden"
        >
          {/* Certificate Watermark Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <img src={LOGO_URL} alt="Watermark" className="w-96 h-96 object-contain" />
          </div>

          {/* Certificate Inner Border */}
          <div className="border border-stone-800 p-6 sm:p-8 rounded relative z-10 bg-black/40 backdrop-blur-xs">
            
            <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-stone-800 gap-4">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="Fronteira Cutelaria" className="w-14 h-14 object-contain" />
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-stone-100 uppercase tracking-widest">
                    Certificado de Autenticidade
                  </h3>
                  <span className="font-montserrat text-[10px] text-[#ff6a00] uppercase tracking-widest font-semibold">
                    Fronteira Cutelaria • Camboriú SC
                  </span>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded bg-black border border-[#ff6a0066] text-[#ff6a00] font-mono text-xs font-bold tracking-wider">
                SÉRIE Nº FC-2026-0894
              </div>
            </div>

            <div className="py-6 space-y-4 text-center font-montserrat text-xs text-stone-300">
              <p className="italic font-playfair text-sm text-stone-200">
                "Atestamos que esta faca foi produzida artesanalmente no fogo e na bigorna na oficina da Fronteira Cutelaria em Camboriú, Santa Catarina, cumprindo rigorosos padrões de tratamento térmico e acerto de fio."
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-left border-t border-stone-800/80 font-mono text-[11px]">
                <div>
                  <span className="text-stone-500 block">Têmpera:</span>
                  <span className="text-stone-200 font-bold">59 HRC Rockwell</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Aço Utilizado:</span>
                  <span className="text-stone-200 font-bold">1070 / Inox 420C</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Data da Forja:</span>
                  <span className="text-stone-200 font-bold">Julho / 2026</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Garantia:</span>
                  <span className="text-[#ff6a00] font-bold">Vitalícia de Forja</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-stone-800 gap-4">
              <div className="flex items-center gap-2 text-xs font-montserrat text-stone-400">
                <CheckCircle size={16} className="text-[#ff6a00]" />
                <span>Selo Holográfico de Inspeção Aplicado</span>
              </div>

              <div className="text-center sm:text-right">
                <div className="font-playfair text-base italic font-bold text-stone-100">
                  Cutelaria Vani
                </div>
                <span className="font-montserrat text-[10px] text-stone-500 uppercase tracking-widest block">
                  Mestre Cuteleiro Responsável
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
