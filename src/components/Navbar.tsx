import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Volume2, VolumeX, ShieldCheck, Instagram } from 'lucide-react';
import { LOGO_URL, WHATSAPP_URL, INSTAGRAM_URL } from '../data/cutelariaData';
import { soundFX } from '../utils/soundEffects';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    soundFX.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      soundFX.playBladeSheen();
    }
  };

  const navLinks = [
    { name: 'O Fundador', href: '#sobre' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Materiais', href: '#materiais' },
    { name: 'Cuidados', href: '#cuidados' },
    { name: 'Instagram', href: INSTAGRAM_URL, external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#ff6a0033] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="Fronteira Cutelaria"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_0_12px_rgba(255,106,0,0.8)] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-stone-100 group-hover:text-[#ff6a00] transition-colors uppercase">
              Fronteira
            </span>
            <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#ff6a00] uppercase font-semibold">
              Cutelaria
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="font-montserrat text-xs uppercase tracking-widest text-stone-300 hover:text-[#ff6a00] transition-colors relative py-1 flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff6a00] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.external && <Instagram size={14} className="text-[#ff6a00]" />}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA & Sound Control */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Silenciar Áudio da Forja' : 'Ativar Efeitos de Áudio da Forja'}
            className="p-2 rounded-full border border-stone-800 bg-stone-900/80 text-stone-400 hover:text-[#ff6a00] hover:border-[#ff6a0055] transition-all"
          >
            {soundEnabled ? <Volume2 size={18} className="text-[#ff6a00] animate-pulse" /> : <VolumeX size={18} />}
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-sheen relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-stone-900 border border-[#25D366] font-montserrat text-xs font-bold uppercase tracking-wider text-stone-100 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:bg-[#25D366]/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon size={18} color="#25D366" />
            <span>Falar direto com a loja</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 rounded-full border border-stone-800 bg-stone-900 text-stone-300"
          >
            {soundEnabled ? <Volume2 size={18} className="text-[#ff6a00]" /> : <VolumeX size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-md border border-stone-800 bg-stone-900 text-stone-200 hover:text-[#ff6a00]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 border-b border-[#ff6a0044] px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="font-montserrat text-sm uppercase tracking-wider text-stone-200 hover:text-[#ff6a00] py-2 border-b border-stone-800 flex items-center gap-2"
              >
                {link.external && <Instagram size={16} className="text-[#ff6a00]" />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-stone-900 border border-[#25D366] font-montserrat text-xs font-bold uppercase tracking-wider text-stone-100 shadow-[0_0_20px_rgba(37,211,102,0.4)]"
            >
              <WhatsAppIcon size={18} color="#25D366" />
              <span>Falar direto com a loja</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
