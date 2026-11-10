import React, { useState } from 'react';
import { Lightbulb, Edit3, Smartphone, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'step-1',
      number: '01 / 04',
      name: 'SPARK & DISCOVERY',
      label: 'Spark',
      description:
        'Every great application starts with deep listening. I unpack project goals, analyze edge-case constraints, and map out human-centred requirements before writing code.',
      tags: ['Problem Definition', 'User Flows', 'Requirements Scope', 'Agile Goals'],
      illustration: 'lightbulb',
    },
    {
      id: 'step-2',
      number: '02 / 04',
      name: 'SKETCH & ARCHITECTURE',
      label: 'Sketch',
      description:
        'Translating insights into structure. Creating wireframes in Figma, defining component hierarchies, designing state models, and aligning API payload schemas.',
      tags: ['Figma Wireframes', 'Component Hierarchy', 'API Contracts', 'State Models'],
      illustration: 'pencil',
    },
    {
      id: 'step-3',
      number: '03 / 04',
      name: 'SHAPE & DEVELOP',
      label: 'Shape',
      description:
        'Turning designs into responsive, production-ready frontend code. Writing clean TypeScript, structuring React components, styling with Tailwind CSS, and polishing micro-interactions.',
      tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Accessible Tokens'],
      illustration: 'phone',
    },
    {
      id: 'step-4',
      number: '04 / 04',
      name: 'SHIP & POLISH',
      label: 'Ship',
      description:
        'Verification and deployment. Conducting cross-device testing, validating WCAG accessibility contrast, auditing performance, and launching reliable live applications.',
      tags: ['Cross-Device QA', 'a11y Audits', 'Vite Production Build', 'Live Deployment'],
      illustration: 'rocket',
    },
  ];

  const current = steps[activeStep];

  // Render SVG with chalk/particle dot matrix effect
  const renderParticleIllustration = (type: string) => {
    switch (type) {
      case 'lightbulb':
        return (
          <svg viewBox="0 0 200 200" className="w-56 h-56 sm:w-64 sm:h-64 text-[#FDEBE1] animate-in fade-in duration-300">
            {/* Soft glowing chalk dots */}
            <circle cx="100" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 4" opacity="0.9" />
            <path d="M 80 120 Q 100 135 120 120 L 115 145 L 85 145 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.8" />
            <line x1="88" y1="152" x2="112" y2="152" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 3" opacity="0.8" />
            <line x1="93" y1="158" x2="107" y2="158" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 3" opacity="0.8" />
            {/* Filament */}
            <path d="M 90 85 L 96 65 L 104 65 L 110 85" fill="none" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 2" />
            {/* Light Rays */}
            <line x1="100" y1="20" x2="100" y2="10" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 3" />
            <line x1="145" y1="35" x2="155" y2="25" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 3" />
            <line x1="165" y1="80" x2="178" y2="80" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 3" />
            <line x1="55" y1="35" x2="45" y2="25" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 3" />
            <line x1="35" y1="80" x2="22" y2="80" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 3" />
          </svg>
        );
      case 'pencil':
        return (
          <svg viewBox="0 0 200 200" className="w-56 h-56 sm:w-64 sm:h-64 text-[#FDEBE1] animate-in fade-in duration-300">
            {/* Wireframe browser box */}
            <rect x="35" y="40" width="130" height="95" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.85" />
            <line x1="35" y1="65" x2="165" y2="65" stroke="currentColor" strokeWidth="2" strokeDasharray="2 3" opacity="0.6" />
            <circle cx="50" cy="52" r="3" fill="var(--c-accent)" />
            <circle cx="62" cy="52" r="3" fill="var(--c-accent)" opacity="0.7" />
            <circle cx="74" cy="52" r="3" fill="var(--c-accent)" opacity="0.5" />
            {/* Layout boxes inside wireframe */}
            <rect x="50" y="78" width="40" height="42" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />
            <line x1="100" y1="82" x2="150" y2="82" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" opacity="0.7" />
            <line x1="100" y1="94" x2="140" y2="94" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" opacity="0.7" />
            <line x1="100" y1="106" x2="145" y2="106" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" opacity="0.7" />
            {/* Pencil drafting across */}
            <path d="M 140 160 L 175 125 L 160 110 L 125 145 Z" fill="none" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="3 2" />
            <polygon points="125,145 120,165 140,160" fill="var(--c-accent)" opacity="0.8" />
          </svg>
        );
      case 'phone':
        return (
          <svg viewBox="0 0 200 200" className="w-56 h-56 sm:w-64 sm:h-64 text-[#FDEBE1] animate-in fade-in duration-300">
            {/* Mobile phone chassis */}
            <rect x="60" y="25" width="80" height="150" rx="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.9" />
            {/* Dynamic Island / speaker */}
            <rect x="85" y="34" width="30" height="5" rx="2.5" fill="var(--c-accent)" opacity="0.8" />
            {/* Screen components */}
            <rect x="70" y="48" width="60" height="28" rx="6" fill="none" stroke="var(--c-accent)" strokeWidth="2" strokeDasharray="2 2" />
            <rect x="70" y="84" width="28" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
            <rect x="102" y="84" width="28" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
            <rect x="70" y="124" width="60" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
            {/* Home indicator bar */}
            <line x1="88" y1="164" x2="112" y2="164" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 2" opacity="0.8" />
          </svg>
        );
      case 'rocket':
        return (
          <svg viewBox="0 0 200 200" className="w-56 h-56 sm:w-64 sm:h-64 text-[#FDEBE1] animate-in fade-in duration-300">
            {/* Rocket fuselage */}
            <path d="M 100 25 C 125 50 125 110 120 140 L 80 140 C 75 110 75 50 100 25 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.9" />
            {/* Porthole */}
            <circle cx="100" cy="75" r="14" fill="none" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 2" />
            <circle cx="100" cy="75" r="5" fill="var(--c-accent)" opacity="0.8" />
            {/* Wings */}
            <path d="M 80 115 L 55 145 L 80 140 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.8" />
            <path d="M 120 115 L 145 145 L 120 140 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.8" />
            {/* Thrust flame dots */}
            <path d="M 90 145 Q 100 178 110 145" fill="none" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="2 2" />
            <line x1="100" y1="145" x2="100" y2="185" stroke="var(--c-accent)" strokeWidth="2.5" strokeDasharray="3 3" />
            <circle cx="85" cy="165" r="2" fill="var(--c-accent)" />
            <circle cx="115" cy="165" r="2" fill="var(--c-accent)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="process"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--c-dark)',
        color: 'var(--c-cream)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading TOP-LEFT */}
        <div className="mb-14 sm:mb-20">
          <span className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-[var(--c-accent)] block mb-3">
            WORK CADENCE &middot; STEP BY STEP
          </span>
          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[var(--c-cream)] tracking-tight leading-[0.9]">
            MY PROCESS
          </h2>
        </div>

        {/* Interactive 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[380px]">
          {/* LEFT: Active Step Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Orange Step Counter */}
            <div
              className="font-mono text-sm sm:text-base font-bold tracking-widest"
              style={{ color: 'var(--c-accent)' }}
            >
              {current.number}
            </div>

            {/* Huge Cream Caps Title matching inspo */}
            <h3 className="font-heading text-6xl sm:text-7xl md:text-8xl text-[var(--c-cream)] tracking-wide leading-none">
              {current.label.toUpperCase()}
            </h3>

            {/* Short Description */}
            <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {current.description}
            </p>

            {/* Tag Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-mono font-medium glass-panel border border-white/15 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Chalk/Particle-Style Line Illustration in Soft Peach/Orange */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="p-8 rounded-3xl glass-panel border border-white/15 relative flex items-center justify-center shadow-2xl">
              {renderParticleIllustration(current.illustration)}
            </div>
          </div>
        </div>

        {/* Segmented Progress Bar at the Bottom */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="group p-3 sm:p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundColor: isActive ? 'color-mix(in srgb, var(--c-accent) 18%, transparent)' : 'rgba(255, 255, 255, 0.04)',
                    borderColor: isActive ? 'var(--c-accent)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                  aria-pressed={isActive}
                >
                  {/* Active Segment Fill Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? 'var(--c-accent)' : 'transparent',
                    }}
                  />

                  <span
                    className="font-mono text-[10px] tracking-wider block mb-1 font-bold"
                    style={{ color: isActive ? 'var(--c-accent)' : 'rgba(255, 255, 255, 0.5)' }}
                  >
                    STEP 0{idx + 1}
                  </span>

                  <span className="font-heading text-base sm:text-lg text-[var(--c-cream)] block">
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
