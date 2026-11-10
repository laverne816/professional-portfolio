import React from 'react';

interface ToolItem {
  name: string;
  category?: string;
  icon: React.ReactNode;
}

export const ToolsMarquee: React.FC = () => {
  const row1: ToolItem[] = [
    {
      name: 'ChatGPT',
      category: 'AI Assistant',
      icon: (
        <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
            <path d="M20.5 10.2a5.3 5.3 0 0 0-.4-4 5.4 5.4 0 0 0-4.3-2.7 5.3 5.3 0 0 0-3.6.8A5.3 5.3 0 0 0 8 3.5a5.4 5.4 0 0 0-4.8 3.2 5.3 5.3 0 0 0 .7 5.5 5.3 5.3 0 0 0 .4 4 5.4 5.4 0 0 0 4.3 2.7 5.3 5.3 0 0 0 3.6-.8A5.3 5.3 0 0 0 16 19.5a5.4 5.4 0 0 0 4.8-3.2 5.3 5.3 0 0 0-.3-6.1zm-8.5 7.8a4 4 0 0 1-2.4-.8l.3-.8 1.4-2.4a.7.7 0 0 1 .6-.3h.1l2.4.7v2.1a4 4 0 0 1-2.4.5zm-5.4-3.5a4 4 0 0 1-.3-2.5l.7.4 2.5 1.5a.7.7 0 0 1 .4.5v.1l-.7 2.4a4 4 0 0 1-2.6-2.4zm-1-6.1a4 4 0 0 1 2-1.7l.4.7 1.1 2.6a.7.7 0 0 1-.1.7l-.1.1-2.1 1.2a4 4 0 0 1-1.3-3.6zm9.8-1.5l-2.4-.7V4.1a4 4 0 0 1 2.4-.5 4 4 0 0 1 2.4.8l-.3.8-1.5 2.4a.7.7 0 0 1-.6.3zm4.5 4.9a4 4 0 0 1 .3 2.5l-.7-.4-2.5-1.5a.7.7 0 0 1-.4-.5v-.1l.7-2.4a4 4 0 0 1 2.6 2.4zm-3.5 3.3l-1.1-2.6a.7.7 0 0 1 .1-.7l.1-.1 2.1-1.2a4 4 0 0 1 1.3 3.6 4 4 0 0 1-2 1.7l-.4-.7zm-1.8-3.1l-1.2-2.1a.7.7 0 0 1 0-.7l1.2-2.1.8.5v4l-.8.4z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Figma',
      category: 'UI/UX Design',
      icon: (
        <span className="w-5 h-5 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 38 57" className="w-3.5 h-4.5">
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Claude',
      category: 'Anthropic AI',
      icon: (
        <span className="w-5 h-5 rounded-full bg-[#CC785C] flex items-center justify-center shrink-0 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
            <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'React',
      category: 'Frontend Framework',
      icon: (
        <span className="w-5 h-5 rounded-full bg-[#20232A] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#61DAFB] fill-none" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
          </svg>
        </span>
      ),
    },
    {
      name: 'TypeScript',
      category: 'Typed Logic',
      icon: (
        <span className="w-5 h-5 rounded bg-[#3178C6] flex items-center justify-center shrink-0 text-white font-bold text-[9px] shadow-xs">
          TS
        </span>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'Utility Styling',
      icon: (
        <span className="w-5 h-5 rounded bg-[#0B1120] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#38BDF8]">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Canva',
      category: 'Creative Design',
      icon: (
        <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center shrink-0 text-white font-serif font-bold text-xs shadow-xs">
          C
        </span>
      ),
    },
  ];

  const row2: ToolItem[] = [
    {
      name: 'Git & GitHub',
      category: 'Version Control',
      icon: (
        <span className="w-5 h-5 rounded-full bg-[#181717] flex items-center justify-center shrink-0 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'VS Code',
      category: 'Developer IDE',
      icon: (
        <span className="w-5 h-5 rounded bg-[#007ACC] flex items-center justify-center shrink-0 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
            <path d="M17.5 2.5L7 11.2l-4.5-3.5L1 9.2l5.2 4.8L1 18.8l1.5 1.5 4.5-3.5 10.5 8.7 5.5-2.7V5.2L17.5 2.5zm1 16.5L11 14l7.5-5v10z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Postman',
      category: 'API Platform',
      icon: (
        <span className="w-5 h-5 rounded-full bg-[#FF6C37] flex items-center justify-center shrink-0 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5l-4-2.5 4-2.5v5zm1.5-6a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Python',
      category: 'Data & Scripting',
      icon: (
        <span className="w-5 h-5 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v1.4h3v.4H6.2S4 4.8 4 8c0 3.1 1.9 3 1.9 3h1.1v-1.6s-.1-1.9 1.9-1.9h3.2s1.8.1 1.8-1.8V4c.1-2-2-2-2-2zm-1.4 1.1a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill="#3776AB" />
            <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-1.4h-3v-.4h5.8s2.2.3 2.2-2.9c0-3.1-1.9-3-1.9-3h-1.1v1.6s.1 1.9-1.9 1.9h-3.2s-1.8-.1-1.8 1.8V20c-.1 2 2 2 2 2zm1.4-1.1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill="#FFD43B" />
          </svg>
        </span>
      ),
    },
    {
      name: 'FigJam',
      category: 'Whiteboarding',
      icon: (
        <span className="w-5 h-5 rounded-md bg-[#9747FF] flex items-center justify-center shrink-0 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Microsoft Teams',
      category: 'Team Comms',
      icon: (
        <span className="w-5 h-5 rounded-md bg-[#505AC9] flex items-center justify-center shrink-0 text-white font-bold text-[10px] shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
            <path d="M19.5 7.5h-5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h5a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5zM17 14.5h-1.5v-4H17v4zm-7.5-6h-6A1.5 1.5 0 0 0 2 10v7A1.5 1.5 0 0 0 3.5 18.5h6A1.5 1.5 0 0 0 11 17v-7A1.5 1.5 0 0 0 9.5 8.5zm-.5 3h-2v5H6v-5H4v-1.5h5v1.5z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Vite',
      category: 'Modern Build Tool',
      icon: (
        <span className="w-5 h-5 rounded bg-[#646CFF] flex items-center justify-center shrink-0 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#FFD43B]">
            <path d="M12 2L2 20h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z" />
          </svg>
        </span>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 overflow-hidden relative transition-colors duration-500 border-y"
      style={{
        backgroundColor: 'var(--c-bg)',
        color: 'var(--c-text)',
        borderColor: 'var(--c-card-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8 text-center">
        <span
          className="font-mono text-xs uppercase tracking-[0.28em] font-semibold block"
          style={{ color: 'var(--c-accent)' }}
        >
          TOOLS I WORK WITH
        </span>
        <h3
          className="font-heading text-2xl sm:text-3xl mt-2 font-bold tracking-tight"
          style={{ color: 'var(--c-text)' }}
        >
          Productivity, AI, Design &amp; Development Stack
        </h3>
      </div>

      {/* Marquee Wrapper with soft edge fade-out masks matching dynamic background */}
      <div className="relative w-full space-y-3.5">
        {/* Left and right fade gradient masks */}
        <div
          className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, var(--c-bg), transparent)',
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, var(--c-bg), transparent)',
          }}
        />

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max animate-marquee-left">
          {[...row1, ...row1, ...row1, ...row1].map((tool, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 mx-2 rounded-full shadow-xs border transition-all duration-300 select-none group cursor-default"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
                color: 'var(--c-text)',
              }}
            >
              {tool.icon}
              <span
                className="font-heading text-xs sm:text-sm font-semibold tracking-tight"
                style={{ color: 'var(--c-text)' }}
              >
                {tool.name}
              </span>
              {tool.category && (
                <span
                  className="text-[10px] font-mono tracking-wider"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  &middot; {tool.category}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right in opposite direction */}
        <div className="flex w-max animate-marquee-right">
          {[...row2, ...row2, ...row2, ...row2].map((tool, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 mx-2 rounded-full shadow-xs border transition-all duration-300 select-none group cursor-default"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
                color: 'var(--c-text)',
              }}
            >
              {tool.icon}
              <span
                className="font-heading text-xs sm:text-sm font-semibold tracking-tight"
                style={{ color: 'var(--c-text)' }}
              >
                {tool.name}
              </span>
              {tool.category && (
                <span
                  className="text-[10px] font-mono tracking-wider"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  &middot; {tool.category}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
