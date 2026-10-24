import React from 'react';

export function RibbonBow({ className = "w-6 h-6", color = "#D98BAA" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ribbonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0F5" stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Glow */}
      <circle cx="50" cy="50" r="42" fill="url(#ribbonGlow)" />
      {/* Left Loop */}
      <path
        d="M50 48C38 30 14 32 14 48C14 62 36 60 50 52Z"
        fill={color}
        fillOpacity="0.9"
        stroke="#A84D75"
        strokeWidth="2.5"
      />
      {/* Right Loop */}
      <path
        d="M50 48C62 30 86 32 86 48C86 62 64 60 50 52Z"
        fill={color}
        fillOpacity="0.9"
        stroke="#A84D75"
        strokeWidth="2.5"
      />
      {/* Left Ribbon Tail */}
      <path
        d="M45 52C36 64 26 80 18 86C26 80 34 81 44 68L48 54"
        fill={color}
        stroke="#A84D75"
        strokeWidth="2"
      />
      {/* Right Ribbon Tail */}
      <path
        d="M55 52C64 64 74 80 82 86C74 80 66 81 56 68L52 54"
        fill={color}
        stroke="#A84D75"
        strokeWidth="2"
      />
      {/* Center Knot */}
      <ellipse
        cx="50"
        cy="50"
        rx="9"
        ry="8"
        fill="#F8C8DC"
        stroke="#A84D75"
        strokeWidth="2.5"
      />
      {/* Knot highlight */}
      <circle cx="48" cy="48" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-4 h-4 text-pink-400" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.8 8.6L20 10.4L13.8 12.2L12 18.8L10.2 12.2L4 10.4L10.2 8.6L12 2Z" />
    </svg>
  );
}

export function WaterDropIcon({ className = "w-5 h-5 text-sky-400" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export function CleanStarIcon({ className = "w-4 h-4 text-amber-400" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export function FlowerSticker({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="3.5" fill="#F8C8DC" stroke="#A84D75" strokeWidth="1" />
      <circle cx="17" cy="12" r="3.5" fill="#F8C8DC" stroke="#A84D75" strokeWidth="1" />
      <circle cx="12" cy="17" r="3.5" fill="#F8C8DC" stroke="#A84D75" strokeWidth="1" />
      <circle cx="7" cy="12" r="3.5" fill="#F8C8DC" stroke="#A84D75" strokeWidth="1" />
      <circle cx="12" cy="12" r="3" fill="#FFEAA7" stroke="#A84D75" strokeWidth="1" />
    </svg>
  );
}

export function HeartSticker({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#FF9BB2"
        stroke="#A84D75"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="7" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  );
}

export function CuteCloudIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="#FFF0F5"
        stroke="#D98BAA"
        strokeWidth="1.5"
      />
    </svg>
  );
}
