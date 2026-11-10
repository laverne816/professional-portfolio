import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData.ts';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative"
      style={{
        backgroundColor: 'var(--c-bg)',
        color: 'var(--c-text)',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b"
          style={{ borderColor: 'var(--c-card-border)' }}
        >
          <div>
            <span
              className="font-mono text-xs tracking-[0.28em] uppercase font-bold block mb-3"
              style={{ color: 'var(--c-accent)' }}
            >
              04 &middot; CAREER JOURNEY
            </span>
            <h2
              className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none"
              style={{ color: 'var(--c-text)' }}
            >
              WHERE I'VE WORKED
            </h2>
          </div>

          <p
            className="font-sans text-xs sm:text-sm max-w-md leading-relaxed"
            style={{ color: 'var(--c-text-muted)' }}
          >
            Hands-on professional experience spanning digital skills acceleration, software testing, collaborative frontend development, and responsive web applications.
          </p>
        </div>

        {/* Editorial Timeline Cards */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="p-8 sm:p-10 rounded-3xl border hover:border-[var(--c-accent)] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              {/* Left Column: Organization, Role, Badge & Date */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-white shadow-xs"
                    style={{ backgroundColor: 'var(--c-accent)' }}
                  >
                    {exp.badge}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    {exp.company === 'CAPACITI' ? 'May 2026 – Present' : 'Jan 2025 – Dec 2025'}
                  </span>
                </div>

                <h3
                  className="font-heading text-3xl sm:text-4xl group-hover:text-[var(--c-accent)] transition-colors"
                  style={{ color: 'var(--c-text)' }}
                >
                  {exp.company}
                </h3>

                <p
                  className="font-sans text-sm sm:text-base font-semibold"
                  style={{ color: 'var(--c-text)' }}
                >
                  {exp.role}
                </p>
              </div>

              {/* Right Column: Description & Tags */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                <p
                  className="font-sans text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  {exp.description}
                </p>

                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-mono border"
                        style={{
                          backgroundColor: 'var(--c-bg)',
                          borderColor: 'var(--c-card-border)',
                          color: 'var(--c-text)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
