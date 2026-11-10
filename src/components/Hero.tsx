import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Code, Layout, Database, Terminal, ArrowDown, RotateCw, Sparkles, FileText, Github, Mail, Phone } from 'lucide-react';

interface HeroProps {
  onOpenCV?: () => void;
  onOpenChat?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onOpenChat }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id="top"
      className="min-h-screen relative flex flex-col justify-between pt-28 sm:pt-32 pb-14 px-4 sm:px-6 lg:px-12 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: 'var(--c-dark)', color: 'var(--c-cream)' }}
    >
      {/* Ambient luminous radial glow using active accent color */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[170px] pointer-events-none opacity-25"
        style={{ backgroundColor: 'var(--c-accent)' }}
      />

      {/* 1. TOP: Massive Editorial Condensed All-Caps Headline across the top matching Video 2 */}
      <div className="w-full text-center relative z-10 pt-2 sm:pt-4">
        <h1
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11.5rem] tracking-tight leading-[0.85] select-none transition-colors duration-300 text-white"
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </h1>
      </div>

      {/* 2. CENTER: 3D-Style Glassy ID Badge hanging from a stylish nylon lanyard */}
      <div className="my-auto py-6 sm:py-8 flex flex-col items-center justify-center relative z-20">
        {/* The Lanyard Strap & Metal Swivel Clip */}
        <div className="flex flex-col items-center animate-pendulum">
          {/* Lanyard Fabric Strap */}
          <div className="w-4 h-14 sm:h-18 rounded-t-sm shadow-md flex items-center justify-center bg-neutral-900 border-x border-neutral-700">
            <div className="w-1 h-full opacity-90" style={{ backgroundColor: 'var(--c-accent)' }} />
          </div>

          {/* Metal Ring & Swivel Clip */}
          <div className="w-6 h-6 rounded-full border-2 border-neutral-400 bg-neutral-800 -mt-1 shadow-sm flex items-center justify-center z-10">
            <div className="w-2 h-3 bg-neutral-300 rounded-xs" />
          </div>

          {/* Badge Card Wrapper with 3D Flip */}
          <div
            className="perspective-1000 mt-2 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
            title="Click to flip ID badge"
          >
            <div
              className={`relative w-72 sm:w-80 h-[430px] sm:h-[450px] rounded-3xl transition-transform duration-700 transform-style-3d shadow-badge-glow ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* === BADGE FRONT === */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl p-6 flex flex-col justify-between backface-hidden border border-white/20 shadow-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  backgroundColor: 'var(--c-card)',
                }}
              >
                {/* Lanyard Slot Cutout */}
                <div className="w-12 h-2 mx-auto rounded-full bg-black/60 border border-white/10 mb-2 shadow-inner" />

                {/* Radiant Header matching inspo: PORTFOLIO PASS & ID 0001 */}
                <div
                  className="w-full py-2 px-3.5 rounded-2xl flex items-center justify-between text-white shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, var(--c-accent), #EA580C)',
                  }}
                >
                  <span className="font-mono tracking-widest text-[11px] font-bold uppercase">
                    PORTFOLIO PASS
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-black/35 text-white/95 px-2.5 py-0.5 rounded-full border border-white/25">
                    ID 0001
                  </span>
                </div>

                {/* Photo: Laverne Rollison's Real Portrait Photo */}
                <div className="my-auto flex flex-col items-center text-center">
                  <div className="relative mb-2.5">
                    <div
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-dashed flex items-center justify-center shadow-xl overflow-hidden"
                      style={{
                        borderColor: 'var(--c-accent)',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.6))',
                      }}
                    >
                      <img
                        src="/laverne.jpg"
                        alt="Laverne Rollison portrait"
                        className="w-full h-full object-cover object-top rounded-full"
                      />
                    </div>
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-neutral-900 animate-pulse" />
                  </div>

                  <h3
                    className="font-heading text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {PERSONAL_INFO.name}
                  </h3>
                  <p
                    className="text-xs font-sans font-medium mt-0.5"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    {PERSONAL_INFO.role}
                  </p>

                  {/* Status Row */}
                  <div className="w-full mt-3 flex items-center justify-start px-1">
                    <div className="text-left space-y-0.5">
                      <span
                        className="font-mono text-[9px] uppercase tracking-wider block font-semibold"
                        style={{ color: 'var(--c-text-muted)' }}
                      >
                        STATUS
                      </span>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span style={{ color: 'var(--c-text)' }}>Available worldwide</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Barcode, Sticker & Flip Hint */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-0.5 h-5 opacity-70">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1].map((w, i) => (
                      <span
                        key={i}
                        className="bg-current h-full inline-block"
                        style={{ width: `${w}px`, color: 'var(--c-text)' }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Inspiring circular sticker badge matching inspo */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-heading font-black tracking-tighter uppercase shadow-xs border rotate-6"
                      style={{
                        backgroundColor: 'var(--c-accent)',
                        color: '#FFFFFF',
                        borderColor: 'rgba(255, 255, 255, 0.4)',
                      }}
                      title="Portfolio Pass 0001"
                    >
                      PASS
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlipped(!isFlipped);
                      }}
                      className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border hover:bg-white/10 transition-colors cursor-pointer"
                      style={{
                        color: 'var(--c-text-muted)',
                        borderColor: 'var(--c-card-border)',
                      }}
                      title="Flip badge to view expertise"
                    >
                      <span>FLIP</span>
                      <RotateCw className="w-3 h-3 text-[var(--c-accent)]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* === BADGE BACK === */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl p-6 flex flex-col justify-between backface-hidden rotate-y-180 border border-white/20 shadow-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  backgroundColor: 'var(--c-card)',
                }}
              >
                {/* Lanyard Slot Cutout */}
                <div className="w-12 h-2 mx-auto rounded-full bg-black/60 border border-white/10 mb-2 shadow-inner" />

                {/* Back Header: "MY EXPERTISE" matching inspo */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span
                      className="font-heading text-sm tracking-wider uppercase font-bold"
                      style={{ color: 'var(--c-text)' }}
                    >
                      MY EXPERTISE
                    </span>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shadow-xs border"
                      style={{
                        backgroundColor: 'var(--c-accent)',
                        color: '#FFFFFF',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      }}
                      title="CAPACITI & CPUT"
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* 4 Pill Cards with Icons matching inspo */}
                  <div className="space-y-2 mt-2.5">
                    <div
                      className="p-2 rounded-xl border flex items-center gap-2.5"
                      style={{
                        backgroundColor: 'var(--c-bg-subtle)',
                        borderColor: 'var(--c-card-border)',
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }}
                      >
                        <Code className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="font-heading text-xs font-bold block" style={{ color: 'var(--c-text)' }}>
                          WEB DEVELOPER
                        </span>
                        <span className="text-[10px] font-mono block opacity-75" style={{ color: 'var(--c-text-muted)' }}>
                          React, TypeScript, APIs &amp; responsive UI
                        </span>
                      </div>
                    </div>

                    <div
                      className="p-2 rounded-xl border flex items-center gap-2.5"
                      style={{
                        backgroundColor: 'var(--c-bg-subtle)',
                        borderColor: 'var(--c-card-border)',
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }}
                      >
                        <Layout className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="font-heading text-xs font-bold block" style={{ color: 'var(--c-text)' }}>
                          UI/UX DESIGNER
                        </span>
                        <span className="text-[10px] font-mono block opacity-75" style={{ color: 'var(--c-text-muted)' }}>
                          Figma, user flows, design tokens &amp; a11y
                        </span>
                      </div>
                    </div>

                    <div
                      className="p-2 rounded-xl border flex items-center gap-2.5"
                      style={{
                        backgroundColor: 'var(--c-bg-subtle)',
                        borderColor: 'var(--c-card-border)',
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }}
                      >
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="font-heading text-xs font-bold block" style={{ color: 'var(--c-text)' }}>
                          AI &amp; SENTIMENT NLP
                        </span>
                        <span className="text-[10px] font-mono block opacity-75" style={{ color: 'var(--c-text-muted)' }}>
                          Sentiment curves, prompt design &amp; models
                        </span>
                      </div>
                    </div>

                    <div
                      className="p-2 rounded-xl border flex items-center gap-2.5"
                      style={{
                        backgroundColor: 'var(--c-bg-subtle)',
                        borderColor: 'var(--c-card-border)',
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }}
                      >
                        <Terminal className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="font-heading text-xs font-bold block" style={{ color: 'var(--c-text)' }}>
                          DEVELOPER TOOLING
                        </span>
                        <span className="text-[10px] font-mono block opacity-75" style={{ color: 'var(--c-text-muted)' }}>
                          Git &amp; GitHub, Vite, Postman, Linux CLI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Quote & Direct Email matching inspo */}
                <div className="pt-2 border-t border-white/10 flex items-end justify-between">
                  <div className="text-left">
                    <p className="font-script text-sm select-none leading-tight" style={{ color: 'var(--c-accent)' }}>
                      Designing with passion.<br />Creating with purpose.
                    </p>
                    <p className="font-mono text-[10px] mt-1" style={{ color: 'var(--c-text-muted)' }}>
                      {PERSONAL_INFO.email}
                    </p>
                  </div>

                  {/* Back Barcode & Flip back */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-0.5 h-4 opacity-50">
                      {[2, 3, 1, 4, 1, 2, 3, 2, 1, 3, 4, 1, 2].map((w, i) => (
                        <span
                          key={i}
                          className="bg-current h-full inline-block"
                          style={{ width: `${w}px`, color: 'var(--c-text)' }}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlipped(false);
                      }}
                      className="flex items-center gap-1 text-[9px] font-mono hover:underline cursor-pointer"
                      style={{ color: 'var(--c-accent)' }}
                    >
                      <span>FRONT</span>
                      <RotateCw className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. UNDER BADGE: Large Editorial Accent Line & Quick Actions */}
      <div className="w-full text-center relative z-10 pt-4 space-y-4">
        {/* Roles Line */}
        <div
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase font-bold"
          style={{ color: 'var(--c-accent)' }}
        >
          WEB DEVELOPER ASSOCIATE + APPLICATIONS DEVELOPER + UI/UX
        </div>

        {/* Action Buttons Row */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="px-6 sm:px-7 py-3 rounded-full font-heading text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
            style={{
              backgroundColor: 'var(--c-accent)',
              color: '#FFFFFF',
            }}
          >
            <span>EXPLORE PROJECTS</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          {onOpenCV && (
            <button
              type="button"
              onClick={onOpenCV}
              className="px-6 sm:px-7 py-3 rounded-full font-heading text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 cursor-pointer border border-white/20 bg-white/10 text-white hover:bg-white/15"
            >
              <span>CURRICULUM VITAE</span>
              <FileText className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            </button>
          )}

          {onOpenChat && (
            <button
              type="button"
              onClick={onOpenChat}
              className="px-5 py-3 rounded-full font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer text-white/70 hover:text-white"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--c-accent)]" />
              <span>TALK TO VERNA</span>
            </button>
          )}
        </div>

        {/* Verified Social / Contact Strip */}
        <div
          className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/60"
        >
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white transition-colors flex items-center gap-1.5"
            title="GitHub (github.com/laverne816)"
          >
            <Github className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            <span>github.com/laverne816</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:underline hover:text-white transition-colors flex items-center gap-1.5"
            title="Email"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
            className="hover:underline hover:text-white transition-colors flex items-center gap-1.5"
            title="Phone"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
