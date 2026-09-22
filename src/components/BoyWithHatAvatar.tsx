import React from 'react';

interface BoyWithHatAvatarProps {
  className?: string;
  size?: number;
}

export const BoyWithHatAvatar: React.FC<BoyWithHatAvatarProps> = ({ 
  className = '', 
  size = 48 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Atendente Fronteira Cutelaria"
    >
      <defs>
        {/* Background glow gradient */}
        <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff7a1a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1a120c" stopOpacity="0.95" />
        </radialGradient>

        {/* Hat Gradient */}
        <linearGradient id="hatGradient" x1="60" y1="12" x2="60" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8c5835" />
          <stop offset="50%" stopColor="#63391b" />
          <stop offset="100%" stopColor="#42230e" />
        </linearGradient>

        {/* Hat Brim Gradient */}
        <linearGradient id="brimGradient" x1="10" y1="42" x2="110" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4a2a14" />
          <stop offset="25%" stopColor="#7e4d29" />
          <stop offset="50%" stopColor="#965f36" />
          <stop offset="75%" stopColor="#7e4d29" />
          <stop offset="100%" stopColor="#4a2a14" />
        </linearGradient>

        {/* Hat Band */}
        <linearGradient id="bandGradient" x1="32" y1="36" x2="88" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1f140c" />
          <stop offset="50%" stopColor="#ff6a00" />
          <stop offset="100%" stopColor="#1f140c" />
        </linearGradient>

        {/* Skin Gradient */}
        <linearGradient id="skinGradient" x1="60" y1="40" x2="60" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fba666" />
        </linearGradient>

        {/* Shirt/Apron Gradient */}
        <linearGradient id="shirtGradient" x1="60" y1="84" x2="60" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>

        {/* Leather Apron */}
        <linearGradient id="apronGradient" x1="60" y1="92" x2="60" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#713f12" />
          <stop offset="100%" stopColor="#3d2107" />
        </linearGradient>
      </defs>

      {/* Circular Badge Background */}
      <circle cx="60" cy="60" r="58" fill="url(#avatarGlow)" stroke="#ff6a00" strokeWidth="2.5" />

      {/* Shoulders & Traditional Attire */}
      <g id="body">
        {/* Torso */}
        <path
          d="M26 112 C28 92 42 86 60 86 C78 86 92 92 94 112 Z"
          fill="url(#shirtGradient)"
        />
        {/* Leather Apron center */}
        <path
          d="M44 94 L76 94 L80 114 L40 114 Z"
          fill="url(#apronGradient)"
          stroke="#ff6a00"
          strokeWidth="1"
        />
        {/* Neckerchief / Lenço Gaúcho */}
        <path
          d="M50 84 L60 97 L70 84 Z"
          fill="#dc2626"
          stroke="#7f1d1d"
          strokeWidth="1"
        />
        <circle cx="60" cy="85" r="3" fill="#f59e0b" />
      </g>

      {/* Neck */}
      <rect x="52" y="74" width="16" height="14" rx="3" fill="#fba666" />

      {/* Ears */}
      <circle cx="36" cy="64" r="7" fill="#fba666" />
      <circle cx="36" cy="64" r="4" fill="#f48e42" />
      <circle cx="84" cy="64" r="7" fill="#fba666" />
      <circle cx="84" cy="64" r="4" fill="#f48e42" />

      {/* Head / Face */}
      <path
        d="M38 52 C38 38 82 38 82 52 C82 72 72 82 60 82 C48 82 38 72 38 52 Z"
        fill="url(#skinGradient)"
      />

      {/* Boyish Hair (Locks peeking under hat) */}
      <path
        d="M38 46 Q44 54 48 48 Q54 55 60 48 Q66 55 72 48 Q76 54 82 46 Q70 42 60 42 Q50 42 38 46 Z"
        fill="#3e2311"
      />
      {/* Side hair locks */}
      <path d="M36 50 C34 56 36 62 39 58 Z" fill="#3e2311" />
      <path d="M84 50 C86 56 84 62 81 58 Z" fill="#3e2311" />

      {/* Rosy Cheeks */}
      <ellipse cx="45" cy="67" rx="5" ry="3" fill="#f87171" opacity="0.45" />
      <ellipse cx="75" cy="67" rx="5" ry="3" fill="#f87171" opacity="0.45" />

      {/* Expressive Friendly Eyes */}
      {/* Left Eye */}
      <ellipse cx="49" cy="58" rx="4" ry="5.5" fill="#26160c" />
      <circle cx="50.5" cy="56" r="1.8" fill="#ffffff" />
      <circle cx="48" cy="60" r="0.8" fill="#ffffff" />

      {/* Right Eye */}
      <ellipse cx="71" cy="58" rx="4" ry="5.5" fill="#26160c" />
      <circle cx="72.5" cy="56" r="1.8" fill="#ffffff" />
      <circle cx="70" cy="60" r="0.8" fill="#ffffff" />

      {/* Cheerful Eyebrows */}
      <path
        d="M44 50 Q49 47 54 50"
        stroke="#3e2311"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M66 50 Q71 47 76 50"
        stroke="#3e2311"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Cute Button Nose */}
      <ellipse cx="60" cy="63" rx="2" ry="1.5" fill="#e28743" />

      {/* Big Warm Friendly Smile */}
      <path
        d="M51 68 Q60 76 69 68"
        stroke="#5a2307"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="#b91c1c"
      />
      {/* Teeth highlight */}
      <path
        d="M54 68.8 Q60 72 66 68.8 Z"
        fill="#ffffff"
      />

      {/* TRADITIONAL GAÚCHO / CUTELARIA HAT (CHAPÉU COM ABA) */}
      <g id="hat">
        {/* Hat Crown (Copa do chapéu) */}
        <path
          d="M40 38 C40 18 46 14 60 14 C74 14 80 18 80 38 Z"
          fill="url(#hatGradient)"
          stroke="#381b0a"
          strokeWidth="1.5"
        />
        {/* Top crease highlight */}
        <path
          d="M50 17 Q60 21 70 17"
          stroke="#965f36"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Hat Band (Faixa do chapéu) */}
        <path
          d="M38 35 Q60 38 82 35 L81 40 Q60 43 39 40 Z"
          fill="url(#bandGradient)"
        />
        {/* Small gold buckle */}
        <rect x="57" y="36.5" width="6" height="5" rx="1" fill="#f59e0b" stroke="#78350f" strokeWidth="0.8" />

        {/* Wide Hat Brim (Aba elegante do chapéu curvada) */}
        <path
          d="M14 42 C28 36 92 36 106 42 C112 45 106 49 92 48 C68 47 52 47 28 48 C14 49 8 45 14 42 Z"
          fill="url(#brimGradient)"
          stroke="#381b0a"
          strokeWidth="1.5"
        />
        {/* Brim edge light reflection */}
        <path
          d="M20 42 C36 38 84 38 100 42"
          stroke="#d49b55"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Barbicacho / Chinstrap hanging on the side */}
        <path
          d="M34 46 C32 58 35 72 44 80"
          stroke="#8c5835"
          strokeWidth="1.4"
          strokeDasharray="2 1"
          fill="none"
        />
        <path
          d="M86 46 C88 58 85 72 76 80"
          stroke="#8c5835"
          strokeWidth="1.4"
          strokeDasharray="2 1"
          fill="none"
        />
      </g>
    </svg>
  );
};
