import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { useCVFile } from '../hooks/useCVFile.ts';

interface CVBannerProps {
  onOpenCV?: () => void;
}

export const CVBanner: React.FC<CVBannerProps> = ({ onOpenCV }) => {
  const { url, filename, isAvailable } = useCVFile();

  const handleViewClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if (onOpenCV) {
      onOpenCV();
    } else if (isAvailable && url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section
      id="cv"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative"
      style={{
        backgroundColor: 'var(--c-bg)',
        color: 'var(--c-text)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="p-8 sm:p-14 lg:p-18 rounded-3xl border relative overflow-hidden shadow-2xl"
          style={{
            backgroundColor: 'var(--c-card)',
            borderColor: 'var(--c-card-border)',
          }}
        >
          {/* Subtle luminous accent glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{ backgroundColor: 'var(--c-accent)' }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Content Column */}
            <div className="max-w-2xl space-y-4">
              <span
                className="font-mono text-xs tracking-[0.28em] uppercase font-bold block"
                style={{ color: 'var(--c-accent)' }}
              >
                07 &middot; CURRICULUM VITAE
              </span>

              <h2
                className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none"
                style={{ color: 'var(--c-text)' }}
              >
                MY VERIFIED CV
              </h2>

              <p
                className="font-sans text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--c-text-muted)' }}
              >
                Click below to view my verified CV directly on the website, featuring my Professional Summary, Experience at Capaciti and Plum Systems, Education at CPUT, Technical Skills, and Languages.
              </p>
            </div>

            {/* Right Actions Column: Direct VIEW CV & DOWNLOAD PDF */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleViewClick}
                id="view-cv-btn"
                className="px-7 sm:px-8 py-4 rounded-full font-heading text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  backgroundColor: 'var(--c-accent)',
                  color: '#FFFFFF',
                }}
              >
                <span>VIEW CV</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <a
                href={url || '/cv.pdf'}
                download={filename || 'Laverne_Rollison_CV.pdf'}
                id="download-cv-btn"
                className="px-7 sm:px-8 py-4 rounded-full font-heading text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer border"
                style={{
                  backgroundColor: 'var(--c-bg)',
                  borderColor: 'var(--c-card-border)',
                  color: 'var(--c-text)',
                }}
              >
                <span>DOWNLOAD PDF</span>
                <Download className="w-4 h-4" style={{ color: 'var(--c-accent)' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
