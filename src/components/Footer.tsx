import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowUp, Github, Mail, Phone, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 transition-colors duration-500 border-t"
      style={{
        backgroundColor: 'var(--c-bg)',
        color: 'var(--c-text)',
        borderColor: 'var(--c-card-border)',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b"
          style={{ borderColor: 'var(--c-card-border)' }}
        >
          <div>
            <h4
              className="font-heading text-4xl sm:text-5xl tracking-tight"
              style={{ color: 'var(--c-text)' }}
            >
              {PERSONAL_INFO.name.toUpperCase()}
            </h4>
            <p
              className="font-sans text-xs sm:text-sm mt-1"
              style={{ color: 'var(--c-text-muted)' }}
            >
              {PERSONAL_INFO.role} &middot; Cape Town, South Africa
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
                color: 'var(--c-text)',
              }}
              aria-label="GitHub Profile"
              title="GitHub Profile (github.com/laverne816)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full border transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
                color: 'var(--c-text)',
              }}
              aria-label="Email Laverne"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="p-3 rounded-full border transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
                color: 'var(--c-text)',
              }}
              aria-label="Call Laverne"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Pill Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="px-5 py-2.5 rounded-full font-heading text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-md ml-2 border"
              style={{
                backgroundColor: 'var(--c-text)',
                color: 'var(--c-bg)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed &amp; engineered with purpose.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#about" className="hover:text-[var(--c-accent)] transition-colors">01 About</a>
            <span>&middot;</span>
            <a href="#projects" className="hover:text-[var(--c-accent)] transition-colors">02 Work</a>
            <span>&middot;</span>
            <a href="#skills" className="hover:text-[var(--c-accent)] transition-colors">03 Skills</a>
            <span>&middot;</span>
            <a href="#experience" className="hover:text-[var(--c-accent)] transition-colors">04 Experience</a>
            <span>&middot;</span>
            <a href="#education" className="hover:text-[var(--c-accent)] transition-colors">05 Education</a>
            <span>&middot;</span>
            <a href="#certificates" className="hover:text-[var(--c-accent)] transition-colors">06 Certificates</a>
            <span>&middot;</span>
            <a href="#cv" className="hover:text-[var(--c-accent)] transition-colors">07 CV</a>
            <span>&middot;</span>
            <a href="#contact" className="hover:text-[var(--c-accent)] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
