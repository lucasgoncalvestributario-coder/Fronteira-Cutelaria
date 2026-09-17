import React from 'react';

const PHRASES = [
  'FABRICAÇÃO PRÓPRIA',
  'CUTELARIA ARTESANAL',
  'FACAS FEITAS À MÃO',
];

export const BrandTicker: React.FC = () => {
  // Repetitions per track ensuring continuous stream across any monitor or phone width
  const repetitions = [0, 1, 2, 3];

  return (
    <div 
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#170e09] via-[#24160e] to-[#170e09] border-y border-[#ff6a0040] py-2.5 sm:py-3.5 z-30 shadow-[0_4px_25px_rgba(255,106,0,0.12)] select-none"
      aria-label="Destaques Fronteira Cutelaria"
    >
      {/* Subtle edge fade vignettes for elegant entry and exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#170e09] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#170e09] to-transparent z-10" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee-infinite">
        {/* Track 1 (50% of total width) */}
        <div className="flex shrink-0 items-center">
          {repetitions.map((rep) => (
            <React.Fragment key={`t1-${rep}`}>
              {PHRASES.map((phrase, idx) => (
                <div key={`t1-${rep}-${idx}`} className="flex items-center">
                  <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] text-[#fff0d6] uppercase whitespace-nowrap drop-shadow-[0_1px_8px_rgba(255,106,0,0.35)]">
                    {phrase}
                  </span>
                  <span className="mx-4 sm:mx-6 text-[#ff7700] text-sm select-none font-black drop-shadow-[0_0_8px_rgba(255,119,0,0.8)]" aria-hidden="true">
                    •
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Track 2 (exact identical replica for seamless infinite loop without gaps) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {repetitions.map((rep) => (
            <React.Fragment key={`t2-${rep}`}>
              {PHRASES.map((phrase, idx) => (
                <div key={`t2-${rep}-${idx}`} className="flex items-center">
                  <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] text-[#fff0d6] uppercase whitespace-nowrap drop-shadow-[0_1px_8px_rgba(255,106,0,0.35)]">
                    {phrase}
                  </span>
                  <span className="mx-4 sm:mx-6 text-[#ff7700] text-sm select-none font-black drop-shadow-[0_0_8px_rgba(255,119,0,0.8)]" aria-hidden="true">
                    •
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
