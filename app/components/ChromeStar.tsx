"use client";

interface ChromeStarProps {
  className?: string;
  size?: number;
}

export default function ChromeStar({ className = "", size = 320 }: ChromeStarProps) {
  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none animate-star-float ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Radial Chrome Backglow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-zinc-400/5 to-transparent blur-[70px] opacity-70" />

      {/* SVG Liquid Chrome Multi-Faceted Starburst */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
      >
        <defs>
          {/* Liquid Silver Gradient North-South */}
          <linearGradient id="chromeLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#d4d4d8" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#71717a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#27272a" stopOpacity="0.9" />
          </linearGradient>

          {/* Deep Shadow Metallic Facet */}
          <linearGradient id="chromeDark" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#18181b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#09090b" stopOpacity="0.95" />
          </linearGradient>

          {/* Specular White Highlight */}
          <linearGradient id="chromeSheen" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Primary 4-Point High-Fashion Starburst */}
        {/* Top-Right Facet (Light) */}
        <path d="M100 12 L112 88 L188 100 L112 112 L100 12Z" fill="url(#chromeLight)" />

        {/* Bottom-Right Facet (Dark) */}
        <path d="M188 100 L112 112 L100 188 L100 100 L188 100Z" fill="url(#chromeDark)" />

        {/* Bottom-Left Facet (Light Specular) */}
        <path d="M100 188 L88 112 L12 100 L100 100 L100 188Z" fill="url(#chromeLight)" opacity="0.85" />

        {/* Top-Left Facet (Shadow Tone) */}
        <path d="M12 100 L88 88 L100 12 L100 100 L12 100Z" fill="url(#chromeDark)" />

        {/* Secondary Diagonal Sparkle Rays */}
        <path d="M100 45 L106 94 L155 100 L106 106 L100 155 L94 106 L45 100 L94 94 Z" fill="url(#chromeSheen)" opacity="0.4" />

        {/* Center Ridge Highlight Line */}
        <line x1="100" y1="12" x2="100" y2="188" stroke="#ffffff" strokeWidth="0.75" strokeOpacity="0.6" />
        <line x1="12" y1="100" x2="188" y2="100" stroke="#ffffff" strokeWidth="0.75" strokeOpacity="0.6" />

        {/* Center Brilliant Specular Core */}
        <circle cx="100" cy="100" r="3.5" fill="#ffffff" className="animate-pulse" />
      </svg>

      {/* Floating Mini Accents (satellite stars like in reference) */}
      <div className="absolute -top-4 -right-2 w-10 h-10 opacity-70">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M50 0 L56 44 L100 50 L56 56 L50 100 L44 56 L0 50 L44 44 Z" fill="#ffffff" opacity="0.85" />
        </svg>
      </div>

      <div className="absolute -bottom-6 -left-4 w-7 h-7 opacity-50">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M50 0 L56 44 L100 50 L56 56 L50 100 L44 56 L0 50 L44 44 Z" fill="#d4d4d8" />
        </svg>
      </div>
    </div>
  );
}
