import React, { useState } from 'react';
import { ForgeLoader } from './components/ForgeLoader';
import { EmbersCanvas } from './components/EmbersCanvas';
import { Navbar } from './components/Navbar';
import { PromoBannerCarousel } from './components/PromoBannerCarousel';
import { BrandTicker } from './components/BrandTicker';
import { HeroSection } from './components/HeroSection';
import { MaterialsSection } from './components/MaterialsSection';
import { KnifeCareSection } from './components/KnifeCareSection';
import { ShippingMapSection } from './components/ShippingMapSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [loading, setLoading] = useState(true);

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

      {/* Main Landing Page Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* 1. Cabeçalho do site (Navbar) */}
        <Navbar />

        {/* Top Highlight Section: Promo Banners Carousel + Brand Ticker */}
        <div className="pt-20 sm:pt-24 bg-gradient-to-b from-[#0e0a07] via-[#0d0906] to-[#0c0907] relative z-20">
          {/* 2. Carrossel de banners promocionais */}
          <PromoBannerCarousel />

          {/* 3. Tarja de frases em movimento (posicionada estrategicamente abaixo do carrossel) */}
          <div className="mt-2 sm:mt-3">
            <BrandTicker />
          </div>
        </div>

        {/* 4. Conteúdo do catálogo e demais seções já existentes */}
        <main>
          <HeroSection />
          <MaterialsSection />
          <KnifeCareSection />
          <ShippingMapSection />
          <FaqSection />
        </main>

        {/* Footer */}
        <FooterSection />

        {/* Floating WhatsApp Quick Action */}
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

