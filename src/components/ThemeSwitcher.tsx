import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

export const ThemeSwitcher: React.FC = () => {
  const { activeConfig, cycleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    cycleTheme();
  };

  return (
    <aside aria-label="Color Theme Switcher" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto">


      {/* Floating Color Wheel Button exactly as in the inspo video */}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Cycle color theme, current theme: ${activeConfig.name}`}
        title={`Current: ${activeConfig.name} — Click to change color palette`}
        className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full p-[3px] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer focus:outline-none group overflow-hidden"
        style={{
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.45)',
        }}
      >
        {/* Conic Multi-Color Wheel Gradient Ring matching inspo */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            animationDuration: isHovered ? '3s' : '12s',
            background: 'conic-gradient(#D946EF, #EA580C, #F59E0B, #10B981, #2563EB, #E11D48, #D946EF)',
          }}
        />

        {/* Center Dark Circle with Active Accent Dot */}
        <div
          className="relative w-full h-full rounded-full flex items-center justify-center transition-colors duration-300"
          style={{ backgroundColor: 'var(--c-dark)' }}
        >
          {/* Active Accent Center Glow */}
          <div
            className="w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-125 shadow-sm"
            style={{ backgroundColor: 'var(--c-accent)' }}
          />
        </div>
      </button>
    </aside>
  );
};
