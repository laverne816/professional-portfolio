import React, { createContext, useContext, useEffect, useState } from 'react';

export type PaletteId = 'terracotta' | 'maroon' | 'cobalt' | 'amethyst' | 'amber';

export interface PaletteConfig {
  id: PaletteId;
  name: string;
  darkBg: string;
  darkSurface: string;
  darkSurfaceHover: string;
  lightBg: string;
  lightSurface: string;
  lightSurfaceHover: string;
  accent: string;
  accentHover: string;
  creamText: string;
  darkHeadline: string;
  previewColors: [string, string, string];
}

export const PALETTES: Record<PaletteId, PaletteConfig> = {
  terracotta: {
    id: 'terracotta',
    name: 'Terracotta & Obsidian',
    darkBg: '#121013',
    darkSurface: '#1C181E',
    darkSurfaceHover: '#262029',
    lightBg: '#FAF6F0',
    lightSurface: '#FFFFFF',
    lightSurfaceHover: '#F4EFE6',
    accent: '#FF5A2C',
    accentHover: '#E0481D',
    creamText: '#FBF9F5',
    darkHeadline: '#121013',
    previewColors: ['#121013', '#FAF6F0', '#FF5A2C'],
  },
  maroon: {
    id: 'maroon',
    name: 'Deep Maroon & Sand',
    darkBg: '#1E060A',
    darkSurface: '#2E0C12',
    darkSurfaceHover: '#42131B',
    lightBg: '#FDF1F3',
    lightSurface: '#FFFFFF',
    lightSurfaceHover: '#F9E4E8',
    accent: '#E11D48',
    accentHover: '#BE123C',
    creamText: '#FFF5F7',
    darkHeadline: '#1E060A',
    previewColors: ['#1E060A', '#FDF1F3', '#E11D48'],
  },
  cobalt: {
    id: 'cobalt',
    name: 'Midnight Cobalt & Ice',
    darkBg: '#070C1A',
    darkSurface: '#0E1730',
    darkSurfaceHover: '#162244',
    lightBg: '#EEF4FF',
    lightSurface: '#FFFFFF',
    lightSurfaceHover: '#E0ECFF',
    accent: '#3B82F6',
    accentHover: '#2563EB',
    creamText: '#F8FAFC',
    darkHeadline: '#070C1A',
    previewColors: ['#070C1A', '#EEF4FF', '#3B82F6'],
  },
  amethyst: {
    id: 'amethyst',
    name: 'Electric Purple & Plum',
    darkBg: '#20032C',
    darkSurface: '#2F0840',
    darkSurfaceHover: '#3F0C55',
    lightBg: '#FAF2FD',
    lightSurface: '#FFFFFF',
    lightSurfaceHover: '#F4E3FB',
    accent: '#D946EF',
    accentHover: '#C026D3',
    creamText: '#FDFBFE',
    darkHeadline: '#20032C',
    previewColors: ['#20032C', '#FAF2FD', '#D946EF'],
  },
  amber: {
    id: 'amber',
    name: 'Warm Espresso & Amber',
    darkBg: '#16110D',
    darkSurface: '#241B15',
    darkSurfaceHover: '#32261E',
    lightBg: '#FDF8F3',
    lightSurface: '#FFFFFF',
    lightSurfaceHover: '#F7EDE3',
    accent: '#F59E0B',
    accentHover: '#D97706',
    creamText: '#FFFBF5',
    darkHeadline: '#16110D',
    previewColors: ['#16110D', '#FDF8F3', '#F59E0B'],
  },
};

interface ThemeContextType {
  palette: PaletteId;
  setPalette: (palette: PaletteId) => void;
  activeConfig: PaletteConfig;
  isDark: boolean;
  toggleTheme: () => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_MODE_STORAGE_KEY = 'laverne_portfolio_mode_v10';
const PALETTE_STORAGE_KEY = 'laverne_portfolio_palette_v10';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_MODE_STORAGE_KEY);
      if (saved !== null) {
        return saved === 'dark';
      }
    }
    return false; // light mode
  });

  const [palette, setPaletteState] = useState<PaletteId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(PALETTE_STORAGE_KEY) as PaletteId | null;
      if (saved && PALETTES[saved]) {
        return saved;
      }
    }
    return 'amethyst'; // default: Electric Purple as requested
  });

  const activeConfig = PALETTES[palette] || PALETTES.amethyst;

  useEffect(() => {
    const root = document.documentElement;

    // Toggle dark class on <html> for Tailwind's dark: variant
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Dynamic Theme Variables based on active mode (Dark vs Light)
    if (isDark) {
      root.style.setProperty('--c-bg', activeConfig.darkBg);
      root.style.setProperty('--c-bg-subtle', activeConfig.darkSurface);
      root.style.setProperty('--c-text', activeConfig.creamText);
      root.style.setProperty('--c-text-muted', '#A3A09B');
      root.style.setProperty('--c-card', activeConfig.darkSurface);
      root.style.setProperty('--c-card-border', 'rgba(255, 255, 255, 0.12)');
      root.style.setProperty('--c-nav-bg', 'rgba(18, 16, 19, 0.82)');
      root.style.setProperty('--c-nav-border', 'rgba(255, 255, 255, 0.15)');
      root.style.setProperty('--c-nav-text', '#FFFFFF');
      root.style.setProperty('--c-cv-btn-bg', activeConfig.creamText);
      root.style.setProperty('--c-cv-btn-text', activeConfig.darkBg);
    } else {
      root.style.setProperty('--c-bg', activeConfig.lightBg);
      root.style.setProperty('--c-bg-subtle', activeConfig.lightSurfaceHover);
      root.style.setProperty('--c-text', activeConfig.darkHeadline);
      root.style.setProperty('--c-text-muted', '#615C57');
      root.style.setProperty('--c-card', '#FFFFFF');
      root.style.setProperty('--c-card-border', 'rgba(0, 0, 0, 0.08)');
      root.style.setProperty('--c-nav-bg', 'rgba(250, 246, 240, 0.88)');
      root.style.setProperty('--c-nav-border', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--c-nav-text', activeConfig.darkHeadline);
      root.style.setProperty('--c-cv-btn-bg', activeConfig.darkHeadline);
      root.style.setProperty('--c-cv-btn-text', '#FFFFFF');
    }

    // Shared Palette Accents
    root.style.setProperty('--c-accent', activeConfig.accent);
    root.style.setProperty('--c-accent-hover', activeConfig.accentHover);
    root.style.setProperty('--c-dark', activeConfig.darkBg);
    root.style.setProperty('--c-light', activeConfig.lightBg);
    root.style.setProperty('--c-cream', activeConfig.creamText);
    root.style.setProperty('--c-headline-dark', activeConfig.darkHeadline);

    root.setAttribute('data-palette', palette);
    root.setAttribute('data-mode', isDark ? 'dark' : 'light');

    try {
      localStorage.setItem(THEME_MODE_STORAGE_KEY, isDark ? 'dark' : 'light');
      localStorage.setItem(PALETTE_STORAGE_KEY, palette);
    } catch {
      // ignore
    }
  }, [isDark, palette, activeConfig]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const setPalette = (newPalette: PaletteId) => {
    if (PALETTES[newPalette]) {
      setPaletteState(newPalette);
    }
  };

  const cycleTheme = () => {
    const keys = Object.keys(PALETTES) as PaletteId[];
    const nextIdx = (keys.indexOf(palette) + 1) % keys.length;
    setPalette(keys[nextIdx]);
  };

  return (
    <ThemeContext.Provider
      value={{
        palette,
        setPalette,
        activeConfig,
        isDark,
        toggleTheme,
        cycleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
