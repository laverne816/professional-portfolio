import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  withText = false,
}) => {
  const sizeMap = {
    sm: { box: 'w-6 h-6', px: 24 },
    md: { box: 'w-8 h-8', px: 32 },
    lg: { box: 'w-10 h-10', px: 40 },
    xl: { box: 'w-14 h-14', px: 56 },
  };

  const { box } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Monogram: L + R interlocked mark */}
      <div className={`relative ${box} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          aria-label="Laverne Rollison Monogram Logo"
        >
          <defs>
            {/* Dark mode gradient: warm cream to terracotta */}
            <linearGradient id="lr-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F2EC" />
              <stop offset="50%" stopColor="#E5DDD1" />
              <stop offset="100%" stopColor="#C28864" />
            </linearGradient>

            {/* Light mode gradient: obsidian to terracotta */}
            <linearGradient id="lr-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#161513" />
              <stop offset="60%" stopColor="#2A2723" />
              <stop offset="100%" stopColor="#C28864" />
            </linearGradient>

            {/* Accent dot gradient */}
            <linearGradient id="lr-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C28864" />
              <stop offset="100%" stopColor="#D99B75" />
            </linearGradient>
          </defs>

          {/* Background Badge Container (Subtle architectural frame) */}
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="4"
            className="stroke-[#E2DDD5] dark:stroke-[#36332E] fill-[#F3EFEA]/80 dark:fill-[#1E1C19]/80 transition-colors duration-300"
            strokeWidth="1.2"
          />

          {/* Architectural L Stem & Base */}
          {/* Vertical stem (shared by L & R) */}
          <path
            d="M 12 9.5 L 12 30.5"
            className="stroke-[#161513] dark:stroke-[#F5F2EC] transition-colors duration-300"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* L Base Foot: crisp horizontal sweep */}
          <path
            d="M 12 30.5 L 25 30.5"
            className="stroke-[#161513] dark:stroke-[#F5F2EC] transition-colors duration-300"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* R Loop: graceful geometric arc connecting to the stem */}
          <path
            d="M 12 9.5 H 22 C 26 9.5 28.5 12 28.5 15.5 C 28.5 19 26 21 22 21 H 12"
            className="stroke-[#C28864] dark:stroke-[#C28864] transition-colors duration-300"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* R Diagonal Kick: dynamic angled leg extending outward */}
          <path
            d="M 19.5 20.5 L 28 30.5"
            className="stroke-[#C28864] dark:stroke-[#C28864] transition-colors duration-300"
            strokeWidth="2.6"
            strokeLinecap="round"
          />

          {/* UI Design Vector Node: geometric anchor point at the apex of R loop */}
          <circle
            cx="22"
            cy="9.5"
            r="1.8"
            className="fill-[#C28864]"
          />

          {/* Secondary UI interactive node at intersection */}
          <circle
            cx="19.5"
            cy="20.5"
            r="1.5"
            className="fill-[#161513] dark:fill-[#F5F2EC]"
          />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-sm sm:text-base font-semibold tracking-tight text-[#161513] dark:text-[#F5F2EC] leading-none transition-colors">
            Laverne Rollison
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C28864] mt-1 transition-colors">
            Web Dev &middot; UI/UX
          </span>
        </div>
      )}
    </div>
  );
};
