import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const STORE_PHOTOS = [
  {
    url: 'https://i.ibb.co/gMY0tzWc/Chat-GPT-Image-25-de-jul-de-2026-15-25-50.png',
    title: 'Loja Física e Fábrica em Camboriú',
    subtitle: 'Avenida Minas Gerais, 305 - Anexo ao Posto Ipiranga, Camboriú - SC'
  },
  {
    url: 'https://i.ibb.co/HLGC3xyy/79270716-F7-C8-4614-8-CDE-709-E190-FAD4-E.jpg',
    title: 'Showroom de Lâminas Especiais',
    subtitle: 'Acervo exclusivo de facas artesanais na Avenida Minas Gerais, 305'
  },
  {
    url: 'https://i.ibb.co/5gTHzj11/E3-F771-C4-DA9-C-45-C4-8167-557-AD2-D8-A72-C.jpg',
    title: 'Exposição & Experiência',
    subtitle: 'Peças em destaque com detalhes de forja na Loja Física em Camboriú - SC'
  },
  {
    url: 'https://i.ibb.co/S4tmn6hG/62-E1265-A-6-AED-4751-93-BA-B2-F1-C9-B42-A06.jpg',
    title: 'Fábrica & Forjaria Artesanal',
    subtitle: 'Estrutura técnica para tratamento térmico na Avenida Minas Gerais, 305'
  }
];

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Avenida+Minas+Gerais,+305,+Cambori%C3%BA+-+SC';
const MAPS_EMBED_URL = 'https://maps.google.com/maps?q=Avenida%20Minas%20Gerais%2C%20305%2C%20Cambori%C3%BA%20-%20SC&t=&z=16&ie=UTF8&iwloc=&output=embed';

export const ShippingMapSection: React.FC = () => {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  const prevPhoto = () => {
    setCurrentPhotoIdx((prev) => (prev === 0 ? STORE_PHOTOS.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentPhotoIdx((prev) => (prev === STORE_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-12 sm:py-20 bg-[#050505] border-t border-b border-[#ff6a0033] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="relative rounded-xl bg-[#080808] border-2 border-[#ff6a0066] p-5 sm:p-8 lg:p-10 shadow-[0_0_60px_rgba(255,106,0,0.25)] overflow-hidden">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6a0015] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e6390010] rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="mb-8 border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6a00] animate-pulse" />
                <span className="font-montserrat text-xs uppercase tracking-widest text-[#ff6a00] font-bold">
                  Loja Física & Fábrica em Camboriú - SC
                </span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black text-[#ff6a00] uppercase tracking-wider text-lava-glow">
                LOJA FÍSICA E FÁBRICA EM CAMBORIÚ
              </h2>

              <p className="font-montserrat text-stone-300 text-xs sm:text-sm tracking-widest uppercase font-semibold mt-1.5 flex items-center gap-1.5">
                <MapPin size={16} className="text-[#ff6a00] shrink-0" />
                <span>Avenida Minas Gerais, 305 - Anexo ao Posto Ipiranga, Camboriú - SC</span>
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
            
            {/* Left Side: Store Photos Carousel (7 Cols on desktop) */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
              <div className="relative flex-1 min-h-[320px] sm:min-h-[420px] rounded-lg border-2 border-[#ff6a0088] bg-stone-950 overflow-hidden group shadow-[0_0_30px_rgba(255,106,0,0.2)]">
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhotoIdx}
                    src={STORE_PHOTOS[currentPhotoIdx].url}
                    alt={STORE_PHOTOS[currentPhotoIdx].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85" />

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#ff6a00]" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#ff6a00]" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#ff6a00]" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#ff6a00]" />

                {/* Left/Right Carousel Controls */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 border border-[#ff6a0055] text-stone-200 hover:text-[#ff6a00] hover:bg-black transition-all shadow-lg z-10"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 border border-[#ff6a0055] text-stone-200 hover:text-[#ff6a00] hover:bg-black transition-all shadow-lg z-10"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Photo Badge & Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex justify-between items-end gap-2 mb-1.5">
                    <span className="inline-block px-3 py-1 rounded bg-[#ff6a0022] border border-[#ff6a0055] text-[#ff6a00] font-montserrat text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                      Foto {currentPhotoIdx + 1} de {STORE_PHOTOS.length} • Camboriú - SC
                    </span>

                    {/* Dot indicators */}
                    <div className="flex gap-1.5">
                      {STORE_PHOTOS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPhotoIdx(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentPhotoIdx === idx
                              ? 'bg-[#ff6a00] w-6'
                              : 'bg-stone-600 hover:bg-stone-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-stone-100 uppercase">
                    {STORE_PHOTOS[currentPhotoIdx].title}
                  </h3>
                  <p className="font-montserrat text-xs sm:text-sm text-stone-300 font-light line-clamp-2">
                    {STORE_PHOTOS[currentPhotoIdx].subtitle}
                  </p>
                </div>
              </div>

              {/* Thumbnails Row below photo */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {STORE_PHOTOS.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhotoIdx(idx)}
                    className={`relative rounded border overflow-hidden h-16 sm:h-20 transition-all ${
                      currentPhotoIdx === idx
                        ? 'border-[#ff6a00] ring-1 ring-[#ff6a00] scale-102 opacity-100'
                        : 'border-stone-800 opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Google Maps Frame & Address (5-6 Cols on desktop) */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between space-y-4">
              
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
                      Avenida Minas Gerais, 305 - Anexo ao Posto Ipiranga
                    </p>
                    <p className="font-montserrat text-[11px] text-stone-400">
                      Camboriú - SC
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embedded Frame */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[350px] rounded-lg border-2 border-[#ff6a0088] bg-stone-950 overflow-hidden shadow-[0_0_25px_rgba(255,106,0,0.15)] flex flex-col">
                <iframe
                  title="Localização Fronteira Cutelaria - Avenida Minas Gerais, 305"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '280px' }}
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
    </section>
  );
};
