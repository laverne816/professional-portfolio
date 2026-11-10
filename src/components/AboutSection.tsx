import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Github, Mail, Phone, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenMoreAbout?: () => void;
  onOpenCV?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenMoreAbout, onOpenCV }) => {
  const stats = [
    { label: 'EXPERIENCE', number: '1+ YEAR' },
    { label: 'PROJECTS BUILT', number: '4 APPS' },
    { label: 'VERIFIED CREDENTIALS', number: '16 CERTS' },
    { label: 'COMMITMENT', number: '100% FOCUS' },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--c-bg-subtle)',
        color: 'var(--c-text)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle Top Label & Heading */}
        <div className="mb-14 sm:mb-20">
          <span
            className="font-mono text-xs tracking-[0.25em] uppercase font-bold block mb-3"
            style={{ color: 'var(--c-accent)' }}
          >
            01 &middot; PROFILE &amp; PHILOSOPHY
          </span>
          <h2
            className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none"
            style={{ color: 'var(--c-text)' }}
          >
            ABOUT ME
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Clean editorial portrait photo of Laverne */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
              {/* Subtle ambient backdrop glow using active accent */}
              <div
                className="absolute -inset-1.5 rounded-3xl blur-lg opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: 'var(--c-accent)' }}
              />

              {/* Editorial portrait container */}
              <div
                className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 group-hover:shadow-2xl"
                style={{
                  borderColor: 'var(--c-card-border)',
                  backgroundColor: 'var(--c-card)',
                }}
              >
                <img
                  src="/laverne.jpg"
                  alt="Laverne Rollison portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Headline, structured story paragraphs, stats, CTA & socials */}
          <div className="lg:col-span-7 space-y-6">
            {/* Punchy 2-line headline with accent touch */}
            <h3
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight"
              style={{ color: 'var(--c-text)' }}
            >
              Building code that works.<br />
              <span style={{ color: 'var(--c-accent)' }}>Designing flows that feel natural.</span>
            </h3>

            {/* Paragraphs with real bio */}
            <div
              className="space-y-4 font-sans text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--c-text-muted)' }}
            >
              <p>
                <strong
                  className="font-semibold"
                  style={{ color: 'var(--c-text)' }}
                >
                  {PERSONAL_INFO.aboutHeadline}
                </strong>{' '}
                {PERSONAL_INFO.aboutP1}
              </p>
              <p>
                {PERSONAL_INFO.aboutP2}
              </p>
              <p className="text-xs font-mono opacity-80">
                Backed by 16 verified credentials from Meta, Stanford Online, DeepLearning.AI, IBM, AWS, and Google Cloud.
              </p>
            </div>

            {/* Hairline Divider */}
            <div
              className="w-full h-px my-6"
              style={{ backgroundColor: 'var(--c-card-border)' }}
            />

            {/* Row of 4 Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl border space-y-1"
                  style={{
                    backgroundColor: 'var(--c-card)',
                    borderColor: 'var(--c-card-border)',
                  }}
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-wider block font-semibold"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="font-heading text-xl sm:text-2xl font-bold tracking-tight block"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {stat.number}
                  </span>
                </div>
              ))}
            </div>

            {/* Below: Pill Button "More about my journey →" and Social Round Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              {onOpenMoreAbout && (
                <button
                  type="button"
                  onClick={onOpenMoreAbout}
                  className="px-6 sm:px-7 py-3 rounded-full font-heading text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 cursor-pointer border"
                  style={{
                    backgroundColor: 'var(--c-text)',
                    color: 'var(--c-bg)',
                    borderColor: 'var(--c-card-border)',
                  }}
                >
                  <span>MORE ABOUT ME</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--c-accent)' }} />
                </button>
              )}

              {/* Social Round Buttons with verified GitHub */}
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 shadow-2xs"
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
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 shadow-2xs"
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
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 shadow-2xs"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
