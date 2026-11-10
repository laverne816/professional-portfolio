import React, { useState, useEffect } from 'react';
import { Terminal, MapPin, Sparkles, CheckCircle2, Cpu, Code2 } from 'lucide-react';

interface ProfileImageCardProps {
  className?: string;
}

const TERMINAL_LINES = [
  { prompt: '>', command: 'whoami', output: 'laverne.rollison // developer & designer' },
  { prompt: '>', command: 'status', output: 'building production applications @ capaciti' },
  { prompt: '>', command: 'stack', output: 'react • typescript • tailwind • python' },
  { prompt: '>', command: 'location', output: 'cape town, south africa [online]' },
];

export const ProfileImageCard: React.FC<ProfileImageCardProps> = ({ className = '' }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  // Looping typewriter effect for developer terminal
  useEffect(() => {
    const current = TERMINAL_LINES[currentLineIndex];
    let charIndex = 0;
    setDisplayedCommand('');
    setShowOutput(false);
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < current.command.length) {
        setDisplayedCommand(current.command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        // Pause briefly before showing output
        setTimeout(() => {
          setShowOutput(true);
          // Pause on full output before rotating to next line
          setTimeout(() => {
            setCurrentLineIndex((prev) => (prev + 1) % TERMINAL_LINES.length);
          }, 2400);
        }, 300);
      }
    }, 70);

    return () => clearInterval(typeInterval);
  }, [currentLineIndex]);

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <div className="aspect-[4/5] w-full bg-[#FAF8F5] dark:bg-[#161412] border border-[#E2DDD5] dark:border-[#2D2A26] relative shadow-lg group overflow-hidden transition-all duration-300 flex flex-col justify-between p-5 sm:p-7 rounded-sm">
        {/* Subtle architectural background gradients & geometric mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#C28864]/10 via-transparent to-[#C28864]/5 dark:from-[#C28864]/8 dark:to-transparent pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#C28864]/10 dark:bg-[#C28864]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row of Card */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#706A62] dark:text-[#A0988E]">
              SYSTEM ACTIVE
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FFFFFF] dark:bg-[#1F1C18] border border-[#E2DDD5] dark:border-[#36332E] text-[9px] font-mono text-[#C28864] dark:text-[#C28864] shadow-2xs">
            <MapPin className="w-2.5 h-2.5 text-[#C28864]" />
            <span>CAPE TOWN, SA</span>
          </div>
        </div>

        {/* Dynamic Centerpiece: Bronze Developer Terminal & Geometric Circuit */}
        <div className="relative z-10 my-auto flex flex-col w-full py-2">
          {/* Terminal Window Frame */}
          <div className="w-full bg-[#FFFFFF] dark:bg-[#1C1A17] border border-[#E2DDD5] dark:border-[#38332E] rounded-xs shadow-md overflow-hidden transition-all duration-300 group-hover:border-[#C28864]/60">
            {/* Terminal Titlebar with Window Controls */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-[#F5F1EB] dark:bg-[#221F1B] border-b border-[#E2DDD5] dark:border-[#2F2B26]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E27344]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-[#706A62] dark:text-[#A0988E]">
                <Terminal className="w-3 h-3 text-[#C28864]" />
                <span className="tracking-wider">bash // lr-dev</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C28864]/60 animate-ping" />
              </div>
            </div>

            {/* Terminal Body Content */}
            <div className="p-4 sm:p-5 font-mono text-xs space-y-3 min-h-[170px] sm:min-h-[185px] flex flex-col justify-between">
              {/* Static Context Line */}
              <div className="text-[10px] text-[#A0988E] dark:text-[#78716A] flex items-center justify-between pb-1 border-b border-[#ECE7DE] dark:border-[#2A2723]">
                <span>session: zsh-5.9</span>
                <span className="text-[#C28864]">env: production</span>
              </div>

              {/* Typing Line */}
              <div className="space-y-1.5 flex-grow">
                <div className="flex items-center gap-2 text-[#C28864] font-semibold">
                  <span className="text-[#A0988E] dark:text-[#78716A] font-normal">$</span>
                  <span>{displayedCommand}</span>
                  {isTyping && (
                    <span className="w-2 h-4 bg-[#C28864] animate-pulse inline-block" />
                  )}
                </div>

                {/* Animated Command Output */}
                <div
                  className={`text-[11px] leading-relaxed transition-all duration-300 ${
                    showOutput ? 'opacity-100 translate-y-0 text-[#2D2A26] dark:text-[#E8E3DC]' : 'opacity-0 -translate-y-1'
                  }`}
                >
                  <span className="text-[#C28864]/80 mr-1.5">↳</span>
                  {TERMINAL_LINES[currentLineIndex].output}
                </div>
              </div>

              {/* Interactive Visual Wireframe Mini-Bar */}
              <div className="pt-2 border-t border-[#ECE7DE] dark:border-[#2A2723] flex items-center justify-between text-[10px] text-[#706A62] dark:text-[#A0988E]">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-[#C28864]" />
                  <span>UI/UX &middot; Frontend</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400">ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Developer identity moniker below terminal */}
          <div className="mt-3.5 text-center">
            <h3 className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#161513] dark:text-[#F5F2EC] font-bold uppercase">
              LAVERNE ROLLISON
            </h3>
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#C28864] dark:text-[#C28864] uppercase mt-0.5">
              APPLICATIONS DEVELOPER &middot; UI/UX
            </p>
          </div>
        </div>

        {/* Bottom Card Footer */}
        <div className="relative z-10 flex items-center justify-between w-full pt-3 border-t border-[#E2DDD5]/70 dark:border-[#2D2A26]">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FFFFFF] dark:bg-[#1F1C18] border border-[#E2DDD5] dark:border-[#36332E] text-[10px] font-mono text-[#C28864] dark:text-[#C28864]">
            <Cpu className="w-3 h-3 text-[#C28864]" />
            <span>AI ACCELERATION &middot; 2026</span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-[#706A62] dark:text-[#A0988E]">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>VERIFIED CV</span>
          </div>
        </div>
      </div>
    </div>
  );
};
