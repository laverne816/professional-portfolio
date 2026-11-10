import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { useTheme } from '../context/ThemeContext.tsx';
import { FileText, Sun, Moon, Menu, X, Code2 } from 'lucide-react';

interface NavigationProps {
  onOpenCV?: () => void;
  onOpenChat?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Floating Centered Pill-Shaped Glass Bar (Adapts smoothly to Dark & Light Mode) */}
      <div
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl glass-nav ${
          scrolled ? 'shadow-2xl' : 'shadow-lg'
        }`}
      >
        {/* Left: Avatar Photo & Brand Name */}
        <a
          href="#top"
          className="flex items-center gap-2.5 focus:outline-none group"
          aria-label="Laverne Rollison — Home"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shadow-xs group-hover:scale-105 transition-all shrink-0 border"
            style={{
              backgroundColor: 'var(--c-accent)',
              color: '#FFFFFF',
              borderColor: 'var(--c-card-border)',
            }}
            title="Laverne Rollison &middot; Developer"
          >
            <Code2 className="w-4 h-4 text-white group-hover:rotate-6 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span
              className="font-heading text-sm sm:text-base font-bold tracking-tight transition-colors"
              style={{ color: 'var(--c-text)' }}
            >
              {PERSONAL_INFO.name}
            </span>
            <span
              className="text-[9px] font-mono tracking-wider hidden md:block"
              style={{ color: 'var(--c-text-muted)' }}
            >
              Cape Town, ZA &middot; CAPACITI
            </span>
          </div>
        </a>

        {/* Center: Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-sans font-medium tracking-wide transition-colors whitespace-nowrap hover:opacity-100"
              style={{ color: 'var(--c-text-muted)' }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Theme Toggle & Highlighted Pill CTA Button for CV */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 border"
            style={{
              backgroundColor: 'var(--c-card)',
              borderColor: 'var(--c-card-border)',
              color: 'var(--c-accent)',
            }}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Highlighted Pill CTA Button for CV (Ungated direct view) */}
          {onOpenCV && (
            <button
              type="button"
              onClick={onOpenCV}
              id="nav-cv-pill-btn"
              className="px-4 sm:px-5 py-2 rounded-full font-heading text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              style={{
                backgroundColor: 'var(--c-cv-btn-bg)',
                color: 'var(--c-cv-btn-text)',
              }}
              title="View Laverne Rollison's CV"
            >
              <span>MY CV</span>
              <FileText className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors"
            style={{ color: 'var(--c-text)' }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="pointer-events-auto lg:hidden absolute top-18 left-4 right-4 rounded-3xl p-6 glass-panel border shadow-2xl animate-in slide-in-from-top-3 duration-200"
          style={{
            backgroundColor: 'var(--c-bg)',
            borderColor: 'var(--c-card-border)',
            color: 'var(--c-text)',
          }}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-heading tracking-wider py-1.5 border-b border-black/10 dark:border-white/10 hover:text-[var(--c-accent)]"
              >
                {link.name}
              </a>
            ))}
            {onOpenCV && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full py-3 rounded-full font-heading text-sm font-bold tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                style={{
                  backgroundColor: 'var(--c-cv-btn-bg)',
                  color: 'var(--c-cv-btn-text)',
                }}
              >
                <span>VIEW CURRICULUM VITAE</span>
                <FileText className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
