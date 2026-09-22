import React, { useState, useEffect } from 'react';
import { ForgeLoader } from './components/ForgeLoader';
import { EmbersCanvas } from './components/EmbersCanvas';
import { Navbar } from './components/Navbar';
import { PromoBannerCarousel } from './components/PromoBannerCarousel';
import { BrandTicker } from './components/BrandTicker';
import { HeroSection } from './components/HeroSection';
import { MaterialsSection } from './components/MaterialsSection';
import { ModelsTeaserSection } from './components/ModelsTeaserSection';
import { CatalogGalleryView } from './components/CatalogGalleryView';
import { KnifeCareSection } from './components/KnifeCareSection';
import { ShippingMapSection } from './components/ShippingMapSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { GuidedChatbot } from './components/GuidedChatbot';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isCatalogOpen, setIsCatalogOpen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.location.pathname.startsWith('/catalogo') || window.location.hash === '#catalogo';
  });

  // Handle browser back/forward buttons (popstate)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const isCatalog = 
        window.location.pathname.startsWith('/catalogo') || 
        window.location.hash === '#catalogo' ||
        e.state?.view === 'catalog';

      setIsCatalogOpen(isCatalog);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenCatalog = () => {
    try {
      window.history.pushState({ view: 'catalog' }, '', '/catalogo');
    } catch {
      window.location.hash = '#catalogo';
    }
    setIsCatalogOpen(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    if (window.location.pathname.startsWith('/catalogo') || window.location.hash === '#catalogo') {
      try {
        window.history.back();
      } catch {
        // Fallback
      }
    }
    
    // Always guarantee return to home state smoothly
    setTimeout(() => {
      if (window.location.pathname.startsWith('/catalogo') || window.location.hash === '#catalogo') {
        try {
          window.history.replaceState({ view: 'home' }, '', '/');
        } catch {
          window.location.hash = '';
        }
      }
      setIsCatalogOpen(false);
      const teaserEl = document.getElementById('nossos-modelos');
      if (teaserEl) {
        teaserEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 40);
  };

  return (
    <div className="relative bg-[#0c0907] text-stone-200 min-h-screen font-montserrat selection:bg-[#ff6a00] selection:text-black overflow-x-hidden">
      {/* Soft Ambient Warm Light & Color Bloom across page layers */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top carousel soft ember glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.14),rgba(255,170,0,0.05)_50%,transparent_75%)] blur-2xl" />
        {/* Mid-page warm glow */}
        <div className="absolute top-[45%] -left-48 w-[700px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,120,0,0.08),rgba(215,60,0,0.03)_55%,transparent_75%)] blur-3xl" />
        <div className="absolute top-[55%] -right-48 w-[700px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,160,0,0.07),rgba(255,106,0,0.03)_55%,transparent_75%)] blur-3xl" />
        {/* Lower page soft illumination */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.10),transparent_70%)] blur-3xl" />
      </div>

      {/* 1. Opening Cinematic Forge Loading Screen */}
      {loading && <ForgeLoader onComplete={() => setLoading(false)} />}

      {/* 2. Interactive Background Flame Sparks & Embers Canvas */}
      <EmbersCanvas density="medium" />

      {/* DEDICATED CATALOG VIEW (Only rendered when user enters catalog) */}
      {isCatalogOpen ? (
        <div className="relative z-20 animate-fadeIn">
          <CatalogGalleryView onBackToHome={handleBackToHome} />
        </div>
      ) : (
        /* Main Landing Page Content (ZERO knife images loaded before click) */
        <div className={`relative z-10 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          {/* 1. Cabeçalho do site (Navbar) */}
          <Navbar onOpenCatalog={handleOpenCatalog} />

          {/* Top Highlight Section: Promo Banners Carousel + Brand Ticker */}
          <div className="pt-20 sm:pt-24 bg-gradient-to-b from-[#0e0a07] via-[#0d0906] to-[#0c0907] relative z-20">
            {/* 2. Carrossel de banners promocionais */}
            <PromoBannerCarousel />

            {/* 3. Tarja de frases em movimento (posicionada estrategicamente abaixo do carrossel) */}
            <div className="mt-2 sm:mt-3">
              <BrandTicker />
            </div>
          </div>

          {/* 4. Conteúdo do catálogo e demais seções */}
          <main>
            <HeroSection />
            <MaterialsSection />
            {/* Leve chamada para o catálogo - Nenhuma foto carregada nesta tela */}
            <ModelsTeaserSection onOpenCatalog={handleOpenCatalog} />
            <KnifeCareSection />
            <ShippingMapSection />
            <FaqSection />
          </main>

          {/* Footer */}
          <FooterSection />
        </div>
      )}

      {/* Guided Chatbot Assistant (Interactive Preset Options - Always Accessible) */}
      <GuidedChatbot onOpenCatalog={handleOpenCatalog} />
    </div>
  );
}
