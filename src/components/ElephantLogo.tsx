import React from 'react';

interface ElephantLogoProps {
  className?: string;
  size?: number;
  mode?: 'icon' | 'full';
  variant?: 'orange' | 'white' | 'dark';
  holeColor?: string;
}

export default function ElephantLogo({ 
  className = '', 
  size = 48, 
  mode = 'icon', 
  variant = 'orange',
  holeColor
}: ElephantLogoProps) {
  
  // Outer brown outline color
  const outlineColor = '#3d1a04';
  
  const resolvedHoleColor = holeColor || (variant === 'orange' ? '#121212' : variant === 'white' ? '#ffffff' : '#111827');
  
  // Custom theme-based colors for text/fill overrides if needed (fallback)
  let stop1 = '#ffca28'; // bright golden yellow
  let stop2 = '#f97316'; // orange-yellow
  let stop3 = '#ea580c'; // deep warm orange
  
  if (variant === 'white') {
    stop1 = '#ffffff';
    stop2 = '#f3f4f6';
    stop3 = '#e5e7eb';
  } else if (variant === 'dark') {
    stop1 = '#4b5563';
    stop2 = '#1f2937';
    stop3 = '#111827';
  }

  // stand-alone icon view
  if (mode === 'icon') {
    return (
      <svg
        id="puram-logo-icon"
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-all duration-300`}
      >
        <defs>
          <linearGradient id="iconOrangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stop1} />
            <stop offset="60%" stopColor={stop2} />
            <stop offset="100%" stopColor={stop3} />
          </linearGradient>
          {/* Drop shadow filter for premium sticker depth */}
          <filter id="stickerShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
          </filter>
        </defs>

        <g filter="url(#stickerShadow)">
          {/* Back tail/wing of elephant - behind trunk */}
          <path
            d="M 42 138 C 30 138, 25 146, 25 152 C 25 156, 32 158, 44 153 C 44 153, 40 146, 42 138 Z"
            fill="url(#iconOrangeGrad)"
            stroke={outlineColor}
            strokeWidth="10"
            strokeLinejoin="round"
          />
          {/* Back tail feather lines */}
          <path
            d="M 28 148 C 33 147, 38 146, 42 144"
            stroke={outlineColor}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Main Elephant 'P' body shape */}
          <path
            d="M 98 25 
               C 145 25, 172 45, 172 78 
               C 172 110, 142 130, 98 130 
               L 80 130 
               C 80 145, 76 156, 68 156 
               C 56 156, 48 144, 48 132 
               C 48 116, 62 108, 80 108 
               L 80 82
               C 80 82, 58 84, 52 74 
               C 47 65, 47 40, 52 25
               C 58 10, 75 25, 98 25 Z"
            fill="url(#iconOrangeGrad)"
            stroke={outlineColor}
            strokeWidth="11"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Inner counter (the hole of 'P') */}
          <path
            d="M 98 52 C 114 52, 126 60, 126 73 C 126 86, 114 94, 98 94 C 82 94, 80 86, 80 73 C 80 60, 82 52, 98 52 Z"
            fill={resolvedHoleColor}
            stroke={outlineColor}
            strokeWidth="10"
            strokeLinejoin="round"
          />

          {/* Cute cartoon eye */}
          <circle cx="75" cy="56" r="13" fill="white" stroke={outlineColor} strokeWidth="3" />
          <circle cx="77" cy="56" r="7.5" fill="black" />
          <circle cx="75" cy="52" r="3" fill="white" />

          {/* Trunk Wrinkles/Details */}
          <path d="M 52 75 C 56 78, 66 78, 70 75" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 51 90 C 55 93, 65 93, 69 90" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 50 105 C 54 108, 64 108, 68 105" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Elegant 3D Gloss Highlight on top of head */}
          <path
            d="M 85 36 C 105 34, 135 44, 142 54"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeOpacity="0.45"
            fill="none"
          />
        </g>
      </svg>
    );
  }

  // full brand lockup
  return (
    <svg
      id="puram-logo-full"
      width={size * 2.8}
      height={size}
      viewBox="0 0 540 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
    >
      <defs>
        <linearGradient id="fullOrangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={stop1} />
          <stop offset="50%" stopColor={stop2} />
          <stop offset="100%" stopColor={stop3} />
        </linearGradient>
        <filter id="fullStickerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Main Logo Graphics Group */}
      <g filter="url(#fullStickerShadow)" transform="translate(10, 5)">
        {/* === BACK WING FOR ELEPHANT P === */}
        <path
          d="M 42 128 C 30 128, 25 136, 25 142 C 25 146, 32 148, 44 143 C 44 143, 40 136, 42 128 Z"
          fill="url(#fullOrangeGrad)"
          stroke={outlineColor}
          strokeWidth="11"
          strokeLinejoin="round"
        />
        <path
          d="M 28 138 C 33 137, 38 136, 42 134"
          stroke={outlineColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* === ELEPHANT SHAPED 'P' === */}
        <path
          d="M 98 15 
             C 145 15, 172 35, 172 68 
             C 172 100, 142 120, 98 120 
             L 80 120 
             C 80 135, 76 146, 68 146 
             C 56 146, 48 134, 48 122 
             C 48 106, 62 98, 80 98 
             L 80 72
             C 80 72, 58 74, 52 64 
             C 47 55, 47 30, 52 15
             C 58 0, 75 15, 98 15 Z"
          fill="url(#fullOrangeGrad)"
          stroke={outlineColor}
          strokeWidth="12"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Inner Counter Hole of 'P' (Transparent/Matches Theme Dark Charcoal) */}
        <path
          d="M 98 42 C 114 42, 126 50, 126 63 C 126 76, 114 84, 98 84 C 82 84, 80 76, 80 63 C 80 50, 82 42, 98 42 Z"
          fill={resolvedHoleColor}
          stroke={outlineColor}
          strokeWidth="11"
          strokeLinejoin="round"
        />

        {/* Cute cartoon eye */}
        <circle cx="75" cy="46" r="13" fill="white" stroke={outlineColor} strokeWidth="3" />
        <circle cx="77" cy="46" r="7.5" fill="black" />
        <circle cx="75" cy="42" r="3" fill="white" />

        {/* Trunk wrinkles */}
        <path d="M 52 65 C 56 68, 66 68, 70 65" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M 51 80 C 55 83, 65 83, 69 80" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M 50 95 C 54 98, 64 98, 68 95" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* Gloss highlight on head */}
        <path
          d="M 85 26 C 105 24, 135 34, 142 44"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* === BUBBLE LETTER 'u' === */}
        <path
          d="M 185 85 L 185 110 C 185 130, 202 142, 222 142 C 242 142, 252 130, 252 110 L 252 85 L 268 85 L 268 124 C 268 134, 272 138, 278 138"
          fill="none"
          stroke={outlineColor}
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 185 85 L 185 110 C 185 130, 202 142, 222 142 C 242 142, 252 130, 252 110 L 252 85 L 268 85 L 268 124 C 268 134, 272 138, 278 138"
          fill="none"
          stroke="url(#fullOrangeGrad)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* === BUBBLE LETTER 'r' === */}
        <path
          d="M 292 138 L 292 88 L 305 88 C 315 88, 335 88, 342 102"
          fill="none"
          stroke={outlineColor}
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M 292 138 L 292 88 L 305 88 C 315 88, 335 88, 342 102"
          fill="none"
          stroke="url(#fullOrangeGrad)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* === BUBBLE LETTER 'a' === */}
        {/* Bottom Loop & Right stem */}
        <path
          d="M 370 120 C 370 135, 385 142, 402 142 C 418 142, 428 132, 428 112 L 428 85 L 438 85 M 428 112 L 428 138"
          fill="none"
          stroke={outlineColor}
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 370 120 C 370 135, 385 142, 402 142 C 418 142, 428 132, 428 112 L 428 85 L 438 85 M 428 112 L 428 138"
          fill="none"
          stroke="url(#fullOrangeGrad)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* a's loop cover */}
        <circle cx="394" cy="115" r="16" fill="url(#fullOrangeGrad)" stroke={outlineColor} strokeWidth="11" />
        <circle cx="394" cy="115" r="5" fill={resolvedHoleColor} />

        {/* === BUBBLE LETTER 'm' === */}
        <path
          d="M 460 138 L 460 88 C 460 88, 470 78, 482 85 C 494 92, 494 112, 494 112 L 494 138 M 494 102 C 494 102, 502 78, 516 85 C 530 92, 530 112, 530 138"
          fill="none"
          stroke={outlineColor}
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 460 138 L 460 88 C 460 88, 470 78, 482 85 C 494 92, 494 112, 494 138 M 494 102 C 494 102, 502 78, 516 85 C 530 92, 530 112, 530 138"
          fill="none"
          stroke="url(#fullOrangeGrad)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Tagline separator line & text: "— ● CRAFTING UNFORGETTABLE EXPERIENCES ● —" */}
      <g transform="translate(0, 185)">
        <line x1="20" y1="12" x2="110" y2="12" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
        <circle cx="120" cy="12" r="3.5" fill="#f97316" />
        
        <text
          x="270"
          y="16"
          fill="#faf9f6"
          fontFamily="Inter, var(--font-sans), sans-serif"
          fontSize="11.5"
          fontWeight="800"
          letterSpacing="0.28em"
          textAnchor="middle"
          className="uppercase"
        >
          CRAFTING UNFORGETTABLE EXPERIENCES
        </text>

        <circle cx="420" cy="12" r="3.5" fill="#f97316" />
        <line x1="430" y1="12" x2="520" y2="12" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
      </g>
    </svg>
  );
}
