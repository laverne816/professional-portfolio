import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData.ts';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const fullEducation = [
    {
      number: '01',
      degree: 'Diploma in ICT: Applications Development',
      institution: 'Cape Peninsula University of Technology (CPUT)',
      description: 'Comprehensive academic foundation in software engineering, object-oriented programming (Java/Python), database management (SQL), web and mobile applications development, and technical troubleshooting.',
    },
    {
      number: '02',
      degree: 'Higher Certificate in ICT',
      institution: 'Cape Peninsula University of Technology (CPUT)',
      description: 'Foundational coursework in ICT fundamentals, networking & security principles, basic programming, algorithm design, and quantitative computing techniques.',
    },
    {
      number: '03',
      degree: 'National Senior Certificate',
      institution: 'De Kuilen High School',
      description: 'Secondary education with core disciplines in computer literacy.',
    },
  ];

  return (
    <section
      id="education"
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
              05 &middot; ACADEMIC FOUNDATION
            </span>
            <h2
              className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none"
              style={{ color: 'var(--c-text)' }}
            >
              EDUCATION &amp; DEGREES
            </h2>
          </div>

          <p
            className="font-sans text-xs sm:text-sm max-w-md leading-relaxed"
            style={{ color: 'var(--c-text-muted)' }}
          >
            Formal tertiary education from Cape Peninsula University of Technology, providing core competence in software systems, database architecture, and applications development.
          </p>
        </div>

        {/* Editorial Numbered Education Cards */}
        <div className="space-y-4">
          {fullEducation.map((edu) => (
            <div
              key={edu.number}
              className="p-8 sm:p-10 rounded-3xl border transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              <div className="lg:col-span-1">
                <span
                  className="font-heading text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--c-accent)' }}
                >
                  {edu.number}
                </span>
              </div>

              <div className="lg:col-span-5 space-y-1">
                <h3
                  className="font-heading text-2xl sm:text-3xl group-hover:text-[var(--c-accent)] transition-colors"
                  style={{ color: 'var(--c-text)' }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="font-mono text-xs font-medium"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  {edu.institution}
                </p>
              </div>

              <div className="lg:col-span-6">
                <p
                  className="font-sans text-xs sm:text-sm leading-relaxed"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
