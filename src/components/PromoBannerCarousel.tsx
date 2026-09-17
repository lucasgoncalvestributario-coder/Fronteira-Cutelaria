import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PHONE_NUMBER } from '../data/cutelariaData';
import { PromoBanner } from '../types';

export const PROMO_BANNERS: PromoBanner[] = [
  {
    id: 'cartao-presente',
    title: 'Cartão Presente Fronteira Cutelaria',
    subtitle: 'Presenteie com facas artesanais forjadas à mão e tradição',
    imageUrl: '/banners/cartao_presente_1920.webp',
    imageWebp2560: '/banners/cartao_presente_2560.webp',
    imageWebp1920: '/banners/cartao_presente_1920.webp',
    imageWebp960: '/banners/cartao_presente_960.webp',
    imageJpg1920: '/banners/cartao_presente_1920.jpg',
    imageJpg960: '/banners/cartao_presente_960.jpg',
    originalUrl: 'https://i.ibb.co/20PKKFdF/Gemini-Generated-Image-sg0r9jsg0r9jsg0r.jpg',
    ctaText: 'Garantir Cartão Presente',
    whatsappMessage: 'Olá! Vim pelo site da Fronteira Cutelaria e gostaria de saber mais sobre o Cartão Presente.',
  },
  {
    id: 'facas-artesanais-materiais',
    title: 'Facas Artesanais & Diferentes Materiais',
    subtitle: 'Aço Inox 420C, Carbono 1070 e Cabos Nobres Exclusivos',
    imageUrl: '/banners/facas_materiais_1920.webp',
    imageWebp2560: '/banners/facas_materiais_2560.webp',
    imageWebp1920: '/banners/facas_materiais_1920.webp',
    imageWebp960: '/banners/facas_materiais_960.webp',
    imageJpg1920: '/banners/facas_materiais_1920.jpg',
    imageJpg960: '/banners/facas_materiais_960.jpg',
    originalUrl: 'https://i.ibb.co/G4LjjMsB/Gemini-Generated-Image-4a3ajd4a3ajd4a3a.jpg',
    ctaText: 'Conhecer Modelos e Aços',
    whatsappMessage: 'Olá! Vim pelo site da Fronteira Cutelaria e gostaria de conhecer os modelos de facas artesanais e materiais.',
  },
  {
    id: 'fabricacao-propria',
    title: 'Fabricação Própria em Camboriú - SC',
    subtitle: 'Cutelaria Artesanal e Facas Feitas à Mão sob Medida',
    imageUrl: '/banners/fabricacao_propria_1920.webp',
    imageWebp2560: '/banners/fabricacao_propria_2560.webp',
    imageWebp1920: '/banners/fabricacao_propria_1920.webp',
    imageWebp960: '/banners/fabricacao_propria_960.webp',
    imageJpg1920: '/banners/fabricacao_propria_1920.jpg',
    imageJpg960: '/banners/fabricacao_propria_960.jpg',
    originalUrl: 'https://i.ibb.co/fVnyDRc4/Gemini-Generated-Image-ssaq4sssaq4sssaq.jpg',
    ctaText: 'Encomendar Faca Sob Medida',
    whatsappMessage: 'Olá! Vim pelo site da Fronteira Cutelaria e gostaria de encomendar uma faca de fabricação própria sob medida.',
  },
];

const AUTO_PLAY_INTERVAL = 5500; // 5.5 segundos (entre 5 e 6 segundos conforme especificado)

export const PromoBannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  // Touch gesture coordinates
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchDeltaX = useRef<number>(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all high-resolution banner images for instant transitions without flicker
  useEffect(() => {
    PROMO_BANNERS.forEach((banner) => {
      const imgDesktop = new Image();
      imgDesktop.src = banner.imageWebp1920;
      const imgMobile = new Image();
      imgMobile.src = banner.imageWebp960;
    });
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROMO_BANNERS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROMO_BANNERS.length) % PROMO_BANNERS.length);
  }, []);

  const handleSelect = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    markUserInteraction();
  };

  const markUserInteraction = () => {
    setIsInteracting(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    // Resume auto-rotation 4s after the user finishes interacting
    resumeTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 4000);
  };

  // Automatic slide rotation
  useEffect(() => {
    if (isPaused || isInteracting) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, isInteracting, handleNext]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDeltaX.current = 0;
    setIsPaused(true);
    markUserInteraction();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    touchDeltaX.current = currentX - touchStartX.current;
    const deltaY = currentY - touchStartY.current;

    // If horizontal swipe is predominant, mark interaction
    if (Math.abs(touchDeltaX.current) > Math.abs(deltaY)) {
      markUserInteraction();
    }
  };

  const onTouchEnd = () => {
    const threshold = 40; // minimum 40px swipe threshold
    if (touchDeltaX.current < -threshold) {
      handleNext();
    } else if (touchDeltaX.current > threshold) {
      handlePrev();
    }
    setIsPaused(false);
    markUserInteraction();
  };

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
      markUserInteraction();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
      markUserInteraction();
    }
  };

  const activeBanner = PROMO_BANNERS[currentIndex];
  const activeWhatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(activeBanner.whatsappMessage)}`;

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      className="relative w-full py-3 sm:py-5 px-2 sm:px-4 lg:px-6 select-none"
      aria-label="Carrossel de Banners Promocionais"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="region"
      aria-roledescription="carousel"
    >
      {/* Maximum width container keeping horizontal panoramic proportions without stretching */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Main Banner Frame with Aspect Ratio 640/205 (Zero CLS Layout Stability) */}
        <div
          className="relative w-full aspect-[640/208] sm:aspect-[640/205] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0c0806] border border-[#ff770055] hover:border-[#ff990099] shadow-[0_12px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(255,106,0,0.18)] transition-all duration-300"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Ambient Warm Underglow */}
          <div className="pointer-events-none absolute -inset-1.5 bg-gradient-to-r from-[#e63900]/30 via-[#ff6a00]/22 to-[#ffaa00]/30 blur-2xl -z-10" />

          {/* Animated Slide Container */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeBanner.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative w-full h-full"
            >
              <a
                href={activeWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
                title={`${activeBanner.title} - Clique para falar conosco no WhatsApp`}
              >
                {/* High-Resolution Responsive Banner Artwork */}
                <picture className="w-full h-full block">
                  {/* Modern WebP with high-DPI retina srcset */}
                  <source
                    type="image/webp"
                    srcSet={`
                      ${activeBanner.imageWebp960} 960w,
                      ${activeBanner.imageWebp1920} 1920w,
                      ${activeBanner.imageWebp2560} 2560w
                    `}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
                  />
                  {/* High-Quality JPEG Fallback */}
                  <source
                    type="image/jpeg"
                    srcSet={`
                      ${activeBanner.imageJpg960} 960w,
                      ${activeBanner.imageJpg1920} 1920w
                    `}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
                  />
                  {/* High-Density Rendered Image */}
                  <img
                    src={activeBanner.imageWebp1920}
                    alt={activeBanner.title}
                    width={1920}
                    height={606}
                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain sm:object-cover filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 group-hover:scale-[1.015]"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                    }}
                  />
                </picture>

                {/* Subtle Edge Vignette to visually marry the art to the dark theme */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Left Navigation Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
              markUserInteraction();
            }}
            className="hidden sm:flex absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-black/75 hover:bg-[#ff6a00] text-stone-200 hover:text-black border border-[#ff6a0055] hover:border-[#ff6a00] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            aria-label="Banner anterior"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Desktop Right Navigation Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
              markUserInteraction();
            }}
            className="hidden sm:flex absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-black/75 hover:bg-[#ff6a00] text-stone-200 hover:text-black border border-[#ff6a0055] hover:border-[#ff6a00] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            aria-label="Próximo banner"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Position Indicators - Apenas os pontos para indicar os banners */}
        <div className="flex items-center justify-center mt-3 sm:mt-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/80 border border-stone-800/90 shadow-lg backdrop-blur-sm">
            {PROMO_BANNERS.map((banner, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff6a00] ${
                    isActive
                      ? 'w-3 h-3 bg-gradient-to-r from-[#ff3300] via-[#ff6a00] to-[#ffaa00] shadow-[0_0_12px_rgba(255,106,0,0.95)] scale-110'
                      : 'w-2.5 h-2.5 bg-stone-600 hover:bg-stone-400 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Ir para o banner ${idx + 1}: ${banner.title}`}
                  aria-current={isActive ? 'true' : 'false'}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
