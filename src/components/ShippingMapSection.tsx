import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, ChevronLeft, ChevronRight, ExternalLink, Maximize2, X, Sparkles } from 'lucide-react';

const STORE_PHOTOS = [
  {
    url: '/images/loja/foto-loja-1.avif',
    fallbackUrl: 'https://i.ibb.co/CspSjjhq/IMG-0806.avif',
    title: 'Loja Física & Showroom em Camboriú',
    subtitle: 'Avenida Minas Gerais, 305 - Anexo ao Posto Irmãos da Estrada, Camboriú - SC'
  },
  {
    url: '/images/loja/foto-loja-2.avif',
    fallbackUrl: 'https://i.ibb.co/VYdmrGTS/IMG-0804.avif',
    title: 'Showroom de Lâminas Especiais',
    subtitle: 'Acervo exclusivo de facas artesanais na Avenida Minas Gerais, 305'
  },
  {
    url: '/images/loja/foto-loja-3.avif',
    fallbackUrl: 'https://i.ibb.co/5hhmDGS5/IMG-0803.avif',
    title: 'Exposição & Peças Autênticas',
    subtitle: 'Lâminas forjadas e cabos nobres na Loja Física em Camboriú - SC'
  },
  {
    url: '/images/loja/foto-loja-4.avif',
    fallbackUrl: 'https://i.ibb.co/DHSrgq78/IMG-0805.avif',
    title: 'Fábrica & Cutelaria Artesanal',
    subtitle: 'Estrutura técnica, forja e atendimento presencial em Camboriú - SC'
  }
];

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Avenida+Minas+Gerais,+305,+Cambori%C3%BA+-+SC';
const MAPS_EMBED_URL = 'https://maps.google.com/maps?q=Avenida%20Minas%20Gerais%2C%20305%2C%20Cambori%C3%BA%20-%20SC&t=&z=16&ie=UTF8&iwloc=&output=embed';

export const ShippingMapSection: React.FC = () => {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Pre-cache all store photos into browser memory for instant zero-latency switching
  useEffect(() => {
    STORE_PHOTOS.forEach((photo) => {
      const img = new Image();
      img.src = photo.url;
      img.onerror = () => {
        img.src = photo.fallbackUrl;
      };
    });
  }, []);

  const prevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsLoaded(false);
    setCurrentPhotoIdx((prev) => (prev === 0 ? STORE_PHOTOS.length - 1 : prev - 1));
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsLoaded(false);
    setCurrentPhotoIdx((prev) => (prev === STORE_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isFullscreenOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenOpen(false);
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen]);

  const activePhoto = STORE_PHOTOS[currentPhotoIdx];

  return (
    <section id="loja-fisica" className="relative py-12 sm:py-20 bg-[#050505] border-t border-b border-[#ff6a0033] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="relative rounded-xl bg-[#080808] border-2 border-[#ff6a0066] p-5 sm:p-8 lg:p-10 shadow-[0_0_60px_rgba(255,106,0,0.25)] overflow-hidden">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6a0015] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e6390010] rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="mb-8 border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black text-[#ff6a00] uppercase tracking-wider text-lava-glow">
                LOJA FÍSICA E FÁBRICA EM CAMBORIÚ
              </h2>

              <p className="font-montserrat text-stone-300 text-xs sm:text-sm tracking-widest uppercase font-semibold mt-1.5 flex items-center gap-1.5">
                <MapPin size={16} className="text-[#ff6a00] shrink-0" />
                <span>Avenida Minas Gerais, 305 - Anexo ao Posto Irmãos da Estrada, Camboriú - SC</span>
              </p>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#ff6a00] text-black hover:bg-[#ff8800] font-montserrat text-xs font-black uppercase tracking-wider transition-all shrink-0 shadow-lg"
            >
              <MapPin size={16} />
              <span>Como Chegar no Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Content Grid: Photo Carousel Left + Google Maps Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Side: Store Photos Carousel (Container matches exact photo 9:16 format, 100% filled) */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center">
              <div 
                onClick={() => setIsFullscreenOpen(true)}
                className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16] rounded-xl border-2 border-[#ff6a0088] bg-stone-950 overflow-hidden group shadow-[0_0_30px_rgba(255,106,0,0.25)] cursor-pointer mx-auto"
              >
                {/* Shimmer skeleton while switching/loading */}
                {!isLoaded && (
                  <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center z-10 pointer-events-none">
                    <Sparkles className="text-[#ff6a00] animate-spin" size={24} />
                  </div>
                )}

                {/* High-Resolution Store Photo (100% filling container in exact photo format) */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhotoIdx}
                    src={activePhoto.url}
                    alt={activePhoto.title}
                    onError={(e) => {
                      e.currentTarget.src = activePhoto.fallbackUrl;
                    }}
                    onLoad={() => setIsLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Subtle gradient at bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85 pointer-events-none z-10" />

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#ff6a00] z-20" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#ff6a00] z-20" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#ff6a00] z-20" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#ff6a00] z-20" />

                {/* Fullscreen Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFullscreenOpen(true);
                  }}
                  className="absolute top-3.5 right-3.5 z-30 px-2.5 py-1.5 rounded bg-black/80 border border-[#ff6a0077] text-stone-200 hover:text-[#ff6a00] hover:bg-black font-montserrat text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg backdrop-blur-sm"
                  title="Ver foto em tela cheia"
                >
                  <Maximize2 size={13} />
                  <span className="hidden sm:inline">Ampliar</span>
                </button>

                {/* Left/Right Carousel Controls */}
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/85 border border-[#ff6a0077] text-stone-200 hover:text-[#ff6a00] hover:bg-black transition-all shadow-xl z-30"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/85 border border-[#ff6a0077] text-stone-200 hover:text-[#ff6a00] hover:bg-black transition-all shadow-xl z-30"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Photo Badge & Info */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="flex justify-between items-end gap-2 mb-1.5">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#ff6a0022] border border-[#ff6a0055] text-[#ff6a00] font-montserrat text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                      Foto {currentPhotoIdx + 1} de {STORE_PHOTOS.length}
                    </span>

                    {/* Dot indicators */}
                    <div className="flex gap-1.5 pointer-events-auto">
                      {STORE_PHOTOS.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsLoaded(false);
                            setCurrentPhotoIdx(idx);
                          }}
                          className={`h-2.5 rounded-full transition-all ${
                            currentPhotoIdx === idx
                              ? 'bg-[#ff6a00] w-6'
                              : 'bg-stone-600 hover:bg-stone-400 w-2.5'
                          }`}
                          aria-label={`Ir para foto ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-xl font-bold text-stone-100 uppercase drop-shadow-md leading-tight">
                    {activePhoto.title}
                  </h3>
                  <p className="font-montserrat text-xs text-stone-300 font-light line-clamp-2 drop-shadow-sm mt-0.5">
                    {activePhoto.subtitle}
                  </p>
                </div>
              </div>

              {/* Thumbnails Row below photo in matching 9:16 format */}
              <div className="grid grid-cols-4 gap-2.5 mt-3 w-full max-w-[360px] sm:max-w-[400px] mx-auto">
                {STORE_PHOTOS.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setIsLoaded(false);
                      setCurrentPhotoIdx(idx);
                    }}
                    className={`relative rounded-lg border overflow-hidden aspect-[9/16] transition-all ${
                      currentPhotoIdx === idx
                        ? 'border-[#ff6a00] ring-2 ring-[#ff6a00] scale-102 opacity-100 shadow-[0_0_15px_rgba(255,106,0,0.4)]'
                        : 'border-stone-800 opacity-60 hover:opacity-90 hover:border-stone-600'
                    }`}
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.src = photo.fallbackUrl;
                      }}
                      className="w-full h-full object-cover" 
                    />
                    <div className={`absolute inset-0 ${currentPhotoIdx === idx ? 'bg-transparent' : 'bg-black/30'}`} />
                    <span className="absolute bottom-1 right-1.5 font-montserrat text-[9px] font-bold text-stone-300 bg-black/70 px-1 rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Google Maps Frame & Address (7 Cols on desktop) */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between space-y-4">
              
              {/* Address Header Card */}
              <div className="p-4 sm:p-5 rounded-lg bg-stone-950 border border-[#ff6a0066] shadow-[0_0_15px_rgba(255,106,0,0.15)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-[#ff6a0022] border border-[#ff6a0055] text-[#ff6a00] shrink-0">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-base sm:text-lg font-bold text-stone-100 uppercase leading-tight">
                      Loja Física e Fábrica
                    </h4>
                    <p className="font-montserrat text-xs text-[#ff6a00] font-bold mt-0.5">
                      Avenida Minas Gerais, 305 - Anexo ao Posto Irmãos da Estrada
                    </p>
                    <p className="font-montserrat text-[11px] text-stone-300 mt-0.5">
                      Camboriú - SC • <span className="text-[#ff6a00] font-semibold">Atendimento: 09h às 12h e 13h30 às 22h</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embedded Frame */}
              <div className="relative flex-1 min-h-[420px] sm:min-h-[500px] rounded-lg border-2 border-[#ff6a0088] bg-stone-950 overflow-hidden shadow-[0_0_25px_rgba(255,106,0,0.15)] flex flex-col">
                <iframe
                  title="Localização Fronteira Cutelaria - Avenida Minas Gerais, 305"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full flex-1 filter contrast-[1.05] brightness-90"
                />

                {/* Map Overlay Footer Bar */}
                <div className="bg-stone-950 border-t border-stone-800 p-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-montserrat text-stone-300">
                    <MapPin size={16} className="text-[#ff6a00] shrink-0" />
                    <span className="font-semibold text-stone-200 text-[11px] sm:text-xs">
                      Avenida Minas Gerais, 305 • Camboriú
                    </span>
                  </div>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-stone-900 border border-[#ff6a00] text-[#ff6a00] hover:bg-[#ff6a00] hover:text-black font-montserrat text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1"
                  >
                    <span>Abrir Mapa</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lightbox / Fullscreen High-Resolution Modal */}
      <AnimatePresence>
        {isFullscreenOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreenOpen(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Top Bar with Title and Close Button */}
            <div className="w-full max-w-5xl flex items-center justify-between gap-4 mb-4 z-20">
              <div>
                <span className="font-montserrat text-xs text-[#ff6a00] uppercase tracking-widest font-bold">
                  Foto {currentPhotoIdx + 1} de {STORE_PHOTOS.length} • Loja Física em Camboriú
                </span>
                <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-stone-100 uppercase">
                  {activePhoto.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsFullscreenOpen(false)}
                className="p-2.5 rounded-full bg-stone-900 border border-[#ff6a0088] text-stone-200 hover:text-[#ff6a00] hover:bg-black transition-all shadow-xl"
                aria-label="Fechar tela cheia"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Image Display Area in exact 9:16 format filled 100% */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm sm:max-w-md w-full aspect-[9/16] flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#ff6a0088] bg-stone-950 shadow-[0_0_50px_rgba(255,106,0,0.4)]"
            >
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                onError={(e) => {
                  e.currentTarget.src = activePhoto.fallbackUrl;
                }}
                className="w-full h-full object-cover"
              />

              {/* Navigation in Modal */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 border border-[#ff6a0077] text-stone-100 hover:text-[#ff6a00] hover:bg-black transition-all shadow-2xl z-20"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 border border-[#ff6a0077] text-stone-100 hover:text-[#ff6a00] hover:bg-black transition-all shadow-2xl z-20"
                aria-label="Próxima foto"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            <p className="mt-3 text-stone-400 font-montserrat text-xs sm:text-sm text-center max-w-xl">
              {activePhoto.subtitle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
