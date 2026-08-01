import React, { useState } from 'react';
import { ForgeLoader } from './components/ForgeLoader';
import { EmbersCanvas } from './components/EmbersCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MaterialsSection } from './components/MaterialsSection';
import { GallerySection } from './components/GallerySection';
import { KnifeCareSection } from './components/KnifeCareSection';
import { ShippingMapSection } from './components/ShippingMapSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative bg-[#050505] text-stone-200 min-h-screen font-montserrat selection:bg-[#ff6a00] selection:text-black overflow-x-hidden">
      {/* 1. Opening Cinematic Forge Loading Screen */}
      {loading && <ForgeLoader onComplete={() => setLoading(false)} />}

      {/* 2. Interactive Background Flame Sparks & Embers Canvas */}
      <EmbersCanvas density="medium" />

      {/* Main Landing Page Content */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Landing Page Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
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
