import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  ArrowRight, 
  Flame,
  Maximize2
} from 'lucide-react';
import { ALBUM_PHOTOS } from '../data/modelsAlbumData';
import { PHONE_NUMBER, LOGO_URL } from '../data/cutelariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CatalogGalleryViewProps {
  onBackToHome: () => void;
}

const INITIAL_BATCH_SIZE = 16;
const NEXT_BATCH_SIZE = 12;

// Sub-component for individual thumbnail item with progressive load & placeholder
// STRICT RULE: Pure visual gallery. NO WhatsApp button on individual photos.
const KnifeThumbnailItem: React.FC<{
  photoUrl: string;
  index: number;
  onSelect: (index: number) => void;
  onImageLoaded: () => void;
}> = ({ photoUrl, index, onSelect, onImageLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(index);
        }
      }}
      className="group relative aspect-square w-full rounded-sm overflow-hidden bg-[#13100d] border border-stone-800/90 hover:border-[#ff6a00] transition-colors duration-200 cursor-pointer shadow-md select-none focus:outline-none focus:ring-1 focus:ring-[#ff6a00]"
      aria-label={`Visualizar faca artesanal #${index + 1}`}
    >
      {/* Lightweight Metallic Placeholder (visible until image loads) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#181410] via-[#100d0a] to-[#14110e] flex items-center justify-center pointer-events-none">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#ff6a0044] to-transparent animate-pulse" />
        </div>
      )}

      {/* Actual Thumbnail Image with progressive fade-in */}
      <img
        src={photoUrl}
        alt={`Faca artesanal Fronteira Cutelaria #${index + 1}`}
        loading="lazy"
        decoding="async"
        onLoad={() => {
          setIsLoaded(true);
          onImageLoaded();
        }}
        className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle vignette on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      {/* Discrete stamp index */}
      <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-sm bg-black/80 border border-stone-800 text-[9px] font-montserrat font-bold text-stone-400 group-hover:text-[#ff6a00] group-hover:border-[#ff6a0044] transition-colors pointer-events-none">
        #{String(index + 1).padStart(2, '0')}
      </span>

      {/* Hover zoom indicator */}
      <span className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-sm bg-black/80 text-stone-300 group-hover:text-[#ff6a00] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all pointer-events-none">
        <Maximize2 size={10} />
      </span>
    </div>
  );
};

export const CatalogGalleryView: React.FC<CatalogGalleryViewProps> = ({ onBackToHome }) => {
  // Batch loading state
  const [renderedCount, setRenderedCount] = useState(INITIAL_BATCH_SIZE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Initial loading notice state (Rule 2)
  const [showLoadingNotice, setShowLoadingNotice] = useState(true);
  const loadedCountRef = useRef(0);

  // Lightbox state & scroll position preservation
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const savedScrollY = useRef(0);

  // Auto-dismiss loading notice once initial photos start to render or after 3.8s
  const handleImageLoaded = useCallback(() => {
    loadedCountRef.current += 1;
    if (loadedCountRef.current >= 2) {
      setTimeout(() => {
        setShowLoadingNotice(false);
      }, 600);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingNotice(false);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  // Progressive batch loading on scroll via IntersectionObserver with anticipation margin
  useEffect(() => {
    if (renderedCount >= ALBUM_PHOTOS.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRenderedCount((prev) => Math.min(prev + NEXT_BATCH_SIZE, ALBUM_PHOTOS.length));
        }
      },
      { rootMargin: '600px 0px 600px 0px' }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, [renderedCount]);

  // Handle opening photo: preserve scroll position and push history state
  const handleOpenPhoto = useCallback((index: number) => {
    savedScrollY.current = window.scrollY;
    setLightboxIndex(index);
    setIsZoomed(false);

    // Push state for lightbox so back button on phone closes lightbox first
    try {
      window.history.pushState({ view: 'catalog', modal: 'lightbox', index }, '', '/catalogo#foto-' + (index + 1));
    } catch {
      window.location.hash = '#foto-' + (index + 1);
    }
  }, []);

  // Lightbox close handler: returns to exact scroll position
  const handleCloseLightbox = useCallback(() => {
    setIsZoomed(false);
    if (window.location.hash.startsWith('#foto-')) {
      window.history.back();
    } else {
      setLightboxIndex(null);
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY.current, behavior: 'instant' });
      });
    }
  }, []);

  // Lightbox navigation
  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const nextIndex = prev === 0 ? ALBUM_PHOTOS.length - 1 : prev - 1;
      try {
        window.history.replaceState({ view: 'catalog', modal: 'lightbox', index: nextIndex }, '', '/catalogo#foto-' + (nextIndex + 1));
      } catch {
        // no-op
      }
      return nextIndex;
    });
  }, []);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const nextIndex = prev === ALBUM_PHOTOS.length - 1 ? 0 : prev + 1;
      try {
        window.history.replaceState({ view: 'catalog', modal: 'lightbox', index: nextIndex }, '', '/catalogo#foto-' + (nextIndex + 1));
      } catch {
        // no-op
      }
      return nextIndex;
    });
  }, []);

  // Popstate handling: ensure phone back button closes lightbox first without leaving catalog
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (lightboxIndex !== null) {
        setIsZoomed(false);
        setLightboxIndex(null);
        requestAnimationFrame(() => {
          window.scrollTo({ top: savedScrollY.current, behavior: 'instant' });
        });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [lightboxIndex]);

  // Intelligent preloading: preload only adjacent 2 images (next & prev) in low priority
  useEffect(() => {
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % ALBUM_PHOTOS.length;
    const prevIdx = (lightboxIndex - 1 + ALBUM_PHOTOS.length) % ALBUM_PHOTOS.length;

    const timer = setTimeout(() => {
      const nextImg = new Image();
      nextImg.decoding = 'async';
      nextImg.src = ALBUM_PHOTOS[nextIdx].url;

      const prevImg = new Image();
      prevImg.decoding = 'async';
      prevImg.src = ALBUM_PHOTOS[prevIdx].url;
    }, 150);

    return () => clearTimeout(timer);
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  // Lock body scroll only when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Factory WhatsApp URL for the closing block only
  const whatsappFactoryUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    'Olá! Estive vendo o catálogo de modelos no site da Fronteira Cutelaria e gostaria de conversar com a fábrica sobre um modelo sob medida.'
  )}`;

  return (
    <div className="min-h-screen bg-[#090807] text-stone-200">
      
      {/* ============================================================ */}
      {/* 1. STICKY TOP BAR: BOTÃO VOLTAR AO SITE E MARCA              */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 bg-[#070605]/95 backdrop-blur-md border-b border-stone-800 shadow-2xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Botão simples e evidente: ← VOLTAR AO SITE */}
          <button
            id="btn-voltar-ao-site-top"
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-sm bg-[#161310] hover:bg-[#ff6a00] text-stone-200 hover:text-black border border-stone-700 hover:border-[#ff6a00] font-montserrat text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md group active:scale-95"
          >
            <ArrowLeft size={16} className="stroke-[3] group-hover:-translate-x-1 transition-transform" />
            <span>← VOLTAR AO SITE</span>
          </button>

          {/* Logo Oficial e Nome da Marca */}
          <div className="flex items-center gap-2.5">
            <img
              src={LOGO_URL}
              alt="Fronteira Cutelaria"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow-[0_0_8px_rgba(255,106,0,0.6)]"
            />
            <div className="flex flex-col text-left">
              <span className="font-cinzel text-xs sm:text-sm font-black text-stone-100 tracking-wider uppercase">
                Fronteira Cutelaria
              </span>
              <span className="font-montserrat text-[9px] text-[#ff6a00] uppercase tracking-widest font-bold">
                Álbum de Fábrica
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. CABEÇALHO DO ÁLBUM                                        */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-6 sm:pb-8 text-center">

        {/* Título Oficial */}
        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 uppercase tracking-tight">
          ALGUNS DOS <span className="text-[#ff6a00]">NOSSOS MODELOS</span>
        </h1>

        {/* Linha inspirada no fio de corte da lâmina */}
        <div className="flex items-center justify-center my-4 sm:my-5 gap-3">
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-stone-600 to-[#ff6a00]" />
          <div className="w-2 h-2 rotate-45 border border-[#ff6a00] bg-[#090807]" />
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-stone-600 to-[#ff6a00]" />
        </div>

        {/* Subtítulo em destaque */}
        <p className="font-cinzel text-lg sm:text-2xl text-stone-200 font-semibold italic tracking-wide">
          “Uma pequena amostra do que sai da nossa bancada.”
        </p>

        {/* Texto institucional */}
        <p className="font-montserrat text-stone-400 text-xs sm:text-base font-normal mt-2.5 max-w-xl mx-auto leading-relaxed">
          Somos fabricantes. Estes são apenas alguns dos trabalhos que já produzimos.
        </p>

        {/* ============================================================ */}
        {/* AVISO AO ABRIR O CATÁLOGO (REGRA 2)                          */}
        {/* ============================================================ */}
        <AnimatePresence>
          {showLoadingNotice && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto mt-6 px-4 py-3 rounded-sm bg-[#16120d] border border-[#ff6a0066] shadow-xl flex items-center justify-between gap-3 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-[#ff6a00] border-t-transparent rounded-full animate-spin flex-shrink-0" />
                <div>
                  <p className="font-cinzel text-xs font-black text-stone-100 uppercase tracking-wider">
                    CARREGANDO NOSSO ÁLBUM
                  </p>
                  <p className="font-montserrat text-[11px] text-stone-300 font-normal">
                    As fotos podem levar alguns segundos para carregar na primeira abertura.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowLoadingNotice(false)}
                className="text-stone-400 hover:text-stone-200 p-1 text-xs cursor-pointer"
                aria-label="Dispensar aviso"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ============================================================ */}
      {/* 3. GALERIA MOBILE-FIRST: 2 COLUNAS NO CELULAR, COMPACTA      */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
          {ALBUM_PHOTOS.slice(0, renderedCount).map((photo, index) => (
            <KnifeThumbnailItem
              key={photo.id}
              photoUrl={photo.url}
              index={index}
              onSelect={handleOpenPhoto}
              onImageLoaded={handleImageLoaded}
            />
          ))}
        </div>

        {/* Progressive scroll loading sentinel with anticipation margin */}
        {renderedCount < ALBUM_PHOTOS.length && (
          <div ref={sentinelRef} className="py-8 flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setRenderedCount((prev) => Math.min(prev + NEXT_BATCH_SIZE, ALBUM_PHOTOS.length))}
              className="px-5 py-2.5 rounded-sm bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 font-montserrat text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              Carregar mais facas ({ALBUM_PHOTOS.length - renderedCount} restantes)
            </button>
            <div className="w-5 h-5 border-2 border-stone-700 border-t-[#ff6a00] rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 4. FINAL DO CATÁLOGO: MENSAGEM DE FÁBRICA & WHATSAPP         */}
      {/* ============================================================ */}
      <div className="border-t border-stone-800/80 bg-[#060504] py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          
          <div className="space-y-2">
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#ff6a00] font-bold block">
              Cutelaria Sob Medida
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-black text-stone-100 uppercase tracking-tight">
              AQUI VOCÊ VIU APENAS UMA PARTE.
            </h2>
          </div>

          <p className="font-montserrat text-stone-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Essas são apenas algumas das facas que já produzimos. Como somos fabricantes, 
            podemos desenvolver diferentes modelos e personalizações de acordo com o que você procura.
          </p>

          <div className="pt-2">
            <a
              id="btn-fale-com-a-fabrica-catalog"
              href={whatsappFactoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-sm bg-[#ff6a00] hover:bg-[#e05e00] text-black font-montserrat text-xs sm:text-sm font-black uppercase tracking-widest shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <WhatsAppIcon size={18} color="#000" />
              <span>FALE COM A FÁBRICA</span>
              <ArrowRight size={16} className="stroke-[3]" />
            </a>

            <p className="font-montserrat text-xs sm:text-sm text-stone-400 mt-3 font-medium">
              Envie uma referência, uma ideia ou simplesmente conte o que você procura.
            </p>
          </div>

          {/* Divisória da lâmina */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-stone-800" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#ff6a00]" />
            <div className="h-[1px] w-16 bg-stone-800" />
          </div>

          {/* Encerramento da Marca */}
          <div className="space-y-2 pt-2">
            <p className="font-cinzel text-xl sm:text-3xl font-black text-stone-100 uppercase tracking-wide">
              “Você imagina. A gente fabrica.”
            </p>
            <div className="space-y-1">
              <p className="font-cinzel text-sm sm:text-base font-black text-[#ff6a00] tracking-widest uppercase">
                FRONTEIRA CUTELARIA
              </p>
              <p className="font-montserrat text-xs text-stone-400 uppercase tracking-widest font-semibold">
                Fabricação própria • Camboriú/SC
              </p>
            </div>
          </div>

          {/* Botão de retorno na base da página */}
          <div className="pt-8">
            <button
              id="btn-voltar-ao-site-bottom"
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white font-montserrat text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
            >
              <ArrowLeft size={16} className="stroke-[3]" />
              <span>← VOLTAR AO SITE</span>
            </button>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. VISUALIZAÇÃO AMPLIADA (LIGHTBOX) - PURAMENTE VISUAL        */}
      {/* STRICT: Zero WhatsApp buttons on photo inspection modal      */}
      {/* ============================================================ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Lightbox Topbar */}
            <div className="relative z-20 flex items-center justify-between px-3 sm:px-6 py-3 border-b border-stone-800 bg-black/70">
              <div className="flex items-center gap-2">
                <span className="font-montserrat text-xs sm:text-sm font-bold text-stone-200">
                  {lightboxIndex + 1}
                </span>
                <span className="text-stone-600">/</span>
                <span className="font-montserrat text-xs sm:text-sm text-stone-400">
                  {ALBUM_PHOTOS.length}
                </span>
                <span className="hidden sm:inline-block ml-3 px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[10px] font-montserrat uppercase text-[#ff6a00] font-bold tracking-wider">
                  Foto Original
                </span>
              </div>

              {/* Action buttons (Zoom + Close only) */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                  title={isZoomed ? 'Reduzir zoom' : 'Ampliar detalhes'}
                >
                  {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>

                <button
                  id="btn-close-lightbox-catalog"
                  type="button"
                  onClick={handleCloseLightbox}
                  className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                  aria-label="Fechar foto ampliada"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Lightbox Center Image */}
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              {/* Prev Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-[#ff6a00] text-stone-200 hover:text-black border border-stone-800 hover:border-[#ff6a00] transition-all transform hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* High resolution photo */}
              <div 
                className={`relative max-w-full max-h-full flex items-center justify-center overflow-auto transition-transform duration-200 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed((prev) => !prev)}
              >
                <img
                  src={ALBUM_PHOTOS[lightboxIndex].url}
                  alt={`Faca artesanal Fronteira Cutelaria #${lightboxIndex + 1}`}
                  className="max-h-[75vh] sm:max-h-[82vh] max-w-[94vw] sm:max-w-[85vw] object-contain rounded-sm shadow-2xl border border-stone-900"
                />
              </div>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-[#ff6a00] text-stone-200 hover:text-black border border-stone-800 hover:border-[#ff6a00] transition-all transform hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
                aria-label="Próxima foto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Lightbox Bottombar (pure visual navigation info) */}
            <div className="relative z-20 px-4 py-3 border-t border-stone-800 bg-black/70 flex items-center justify-between text-xs font-montserrat">
              <span className="text-stone-400 text-[11px]">
                Deslize para os lados ou use as setas (← / →). Toque na imagem para ampliar/reduzir.
              </span>

              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#ff6a00]">
                Fronteira Cutelaria
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
