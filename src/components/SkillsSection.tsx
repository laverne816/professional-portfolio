import React, { useState } from 'react';
import { SKILL_CATEGORIES_DATA } from '../data/portfolioData.ts';
import { Sparkles, Check, Code, Cpu, Users, Palette } from 'lucide-react';

interface SkillsSectionProps {
  onSelectCertificate?: (cert: any) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('01');

  const categoryIcons: Record<string, React.ReactNode> = {
    '01': <Code className="w-4 h-4" />,
    '02': <Cpu className="w-4 h-4" />,
    '03': <Users className="w-4 h-4" />,
    '04': <Palette className="w-4 h-4" />,
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative"
      style={{
        backgroundColor: 'var(--c-bg-subtle)',
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
              03 &middot; TECHNICAL TOOLKIT
            </span>
            <h2
              className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none"
              style={{ color: 'var(--c-text)' }}
            >
              WHAT I WORK WITH
            </h2>
          </div>

          <p
            className="font-sans text-xs sm:text-sm max-w-md leading-relaxed"
            style={{ color: 'var(--c-text-muted)' }}
          >
            From modern React/TypeScript frontends and responsive UI design in Figma, to prompt engineering, sentiment NLP, and enterprise collaboration workflows.
          </p>
        </div>

        {/* 4 Clean Minimalist Categorized Rows with Interactive Highlight */}
        <div className="space-y-4">
          {SKILL_CATEGORIES_DATA.map((cat) => {
            const isSelected = activeCategory === cat.number;
            return (
              <div
                key={cat.number}
                onMouseEnter={() => setActiveCategory(cat.number)}
                className="p-6 sm:p-8 rounded-3xl transition-all duration-300 border"
                style={{
                  backgroundColor: 'var(--c-card)',
                  borderColor: isSelected ? 'var(--c-accent)' : 'var(--c-card-border)',
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  {/* Category Title Column */}
                  <div className="lg:col-span-4 flex items-center gap-3">
                    <span
                      className="font-heading text-2xl sm:text-3xl font-bold"
                      style={{ color: isSelected ? 'var(--c-accent)' : 'var(--c-text-muted)' }}
                    >
                      {cat.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="p-1.5 rounded-lg border"
                        style={{
                          backgroundColor: 'var(--c-bg)',
                          borderColor: 'var(--c-card-border)',
                          color: 'var(--c-accent)',
                        }}
                      >
                        {categoryIcons[cat.number]}
                      </span>
                      <h3
                        className="font-heading text-xl sm:text-2xl tracking-wide"
                        style={{ color: 'var(--c-text)' }}
                      >
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Interactive Labels List */}
                  <div className="lg:col-span-8 flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full font-sans text-xs sm:text-sm transition-all duration-200 select-none border"
                        style={{
                          backgroundColor: isSelected ? 'var(--c-bg)' : 'var(--c-card)',
                          color: 'var(--c-text)',
                          borderColor: isSelected ? 'var(--c-accent)' : 'var(--c-card-border)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
