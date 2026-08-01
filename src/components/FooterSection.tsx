import React from 'react';
import { Flame, Instagram, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { LOGO_URL, WHATSAPP_URL, INSTAGRAM_URL, LOCATION_TEXT } from '../data/cutelariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-[#020202] text-stone-300 pt-16 pb-12 border-t border-[#ff6a0033] overflow-hidden">
      
      {/* Footer Ambient Lava Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Fronteira Cutelaria" className="w-16 h-16 sm:w-20 sm:h-20 object-contain filter drop-shadow-[0_0_12px_rgba(255,106,0,0.7)]" />
              <div>
                <h3 className="font-cinzel text-xl font-bold text-stone-100 uppercase tracking-widest">
                  Fronteira Cutelaria
                </h3>
                <span className="font-montserrat text-xs text-[#ff6a00] uppercase font-semibold tracking-wider">
                  Facas Artesanais Forjadas à Mão
                </span>
              </div>
            </div>

            <p className="font-montserrat text-xs text-stone-400 font-light max-w-sm leading-relaxed">
              Cutelaria artesanal em Camboriú, Santa Catarina. Produção autoral em Aço Inox 420C, Carbono 1070 e Disco de Arado com cabos nobres exóticos.
            </p>

            <div className="flex items-center gap-2 font-montserrat text-xs text-stone-300 pt-2">
              <MapPin size={16} className="text-[#ff6a00]" />
              <span>{LOCATION_TEXT}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-stone-100 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 font-montserrat text-xs text-stone-400">
              <li><a href="#sobre" className="hover:text-[#ff6a00] transition-colors">O Fundador & História</a></li>
              <li><a href="#galeria" className="hover:text-[#ff6a00] transition-colors">Galeria de Peças</a></li>
              <li><a href="#materiais" className="hover:text-[#ff6a00] transition-colors">Aço & Cabos Exóticos</a></li>
              <li><a href="#faq" className="hover:text-[#ff6a00] transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-stone-100 uppercase tracking-wider">
              Atendimento Direto
            </h4>
            <div className="space-y-2.5 font-montserrat text-xs">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone-200 hover:text-[#25D366] transition-colors p-3 rounded bg-stone-900 border border-[#25D366] font-semibold shadow-[0_0_15px_rgba(37,211,102,0.2)]"
              >
                <WhatsAppIcon size={18} color="#25D366" />
                <span>Falar direto com a loja</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-[#ff6a00] transition-colors p-2.5 rounded bg-stone-900 border border-stone-800"
              >
                <Instagram size={16} className="text-[#ff6a00]" />
                <span>Instagram: @fronteiracutelaria</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-montserrat text-stone-500 gap-4">
          <p>© 2026 Fronteira Cutelaria. Todos os direitos reservados. Camboriú - SC.</p>
          <p className="flex items-center gap-1">
            <span>Facas Artesanais Feitas para Durar Gerações</span>
            <Flame size={14} className="text-[#ff6a00]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
