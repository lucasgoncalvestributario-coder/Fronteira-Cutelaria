import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../data/cutelariaData';

interface ForgeLoaderProps {
  onComplete: () => void;
}

export const ForgeLoader: React.FC<ForgeLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 250);
          return 100;
        }
        return prev + 3;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-stone-100 overflow-hidden"
      >
        {/* Soft Flame Ambient Glow */}
        <div className="absolute inset-0 bg-radial from-[#ff6a0022] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
          {/* Glowing Logo */}
          <motion.div
            animate={{
              scale: [0.98, 1.04, 0.98],
              filter: [
                'drop-shadow(0 0 25px rgba(255, 106, 0, 0.8))',
                'drop-shadow(0 0 50px rgba(255, 106, 0, 1))',
                'drop-shadow(0 0 25px rgba(255, 106, 0, 0.8))',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-10"
          >
            <img
              src={LOGO_URL}
              alt="Fronteira Cutelaria"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              referrerPolicy="no-referrer"
              className="w-48 h-48 sm:w-60 sm:h-60 object-contain"
            />
          </motion.div>

          {/* Loading Progress Bar with Knife Icon */}
          <div className="w-64 sm:w-80 relative pt-8">
            {/* Knife riding the progress bar */}
            <div
              className="absolute top-0 transition-all duration-75 ease-out pointer-events-none z-20"
              style={{ left: `calc(${progress}% - 22px)` }}
            >
              <svg
                width="44"
                height="22"
                viewBox="0 0 44 22"
                fill="none"
                className="filter drop-shadow-[0_0_10px_#ff6a00]"
              >
                {/* Knife Handle / Cabo */}
                <path d="M 2 13 L 13 13 L 12 16 L 2 16 Z" fill="#3a1c0c" stroke="#ff6a00" strokeWidth="0.6" />
                <path d="M 13 12 L 15 12 L 15 17 L 13 17 Z" fill="#ffaa00" />
                {/* Knife Blade / Lâmina */}
                <path
                  d="M 15 13 L 39 13 C 41 13, 42 14, 41 15 C 34 18, 23 18, 15 17 Z"
                  fill="#f0f0f0"
                  stroke="#ff6a00"
                  strokeWidth="0.8"
                />
                {/* Shiny Edge Reflection */}
                <path d="M 16 14 L 38 14" stroke="#ffffff" strokeWidth="0.7" strokeLinecap="round" />
              </svg>
            </div>

            {/* Track Bar */}
            <div className="w-full h-3 bg-stone-900 rounded-full border border-stone-800 p-0.5 overflow-hidden shadow-inner relative z-10">
              <div
                className="h-full bg-gradient-to-r from-[#e63900] via-[#ff6a00] to-[#ffaa00] rounded-full shadow-[0_0_15px_#ff6a00] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
