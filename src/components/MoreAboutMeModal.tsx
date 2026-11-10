import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA } from '../data/portfolioData.ts';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Terminal, Code, Cpu, Heart, Check, Sparkles, MessageSquare, Coffee, AlertCircle, VolumeX } from 'lucide-react';

interface MoreAboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (project: any) => void;
  onOpenContact?: () => void;
}

export const MoreAboutMeModal: React.FC<MoreAboutMeModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenContact,
}) => {
  const [activeSection, setActiveSection] = useState('intro');
  const [openAccordion, setOpenAccordion] = useState<string | null>('role-1');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const rolesAccordion = [
    {
      id: 'role-1',
      icon: Code,
      title: 'WEB DEVELOPER ASSOCIATE',
      subtitle: 'Building responsive web and full-stack applications people just get.',
      company: 'CAPACITI',
      years: '1+ year',
      description:
        'Building full-stack web and mobile applications using React, TypeScript, and modern API architectures. Gaining practical industry experience in agile cross-functional delivery, technical teamwork, and modern deployment pipelines.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Agile Delivery'],
    },
    {
      id: 'role-2',
      icon: Sparkles,
      title: 'UI/UX & FRONTEND DESIGNER',
      subtitle: 'Designing interfaces, responsive components, and user flows.',
      company: 'CPUT & CAPSTONE',
      years: '2+ years',
      description:
        'Crafting responsive web designs, intuitive user interfaces, and mobile experiences. Creating high-fidelity prototypes in Figma, establishing reusable design token systems, and engineering empathetic digital journeys.',
      skills: ['Figma', 'UI Architecture', 'User Flows', 'Design Tokens', 'Accessibility'],
    },
    {
      id: 'role-3',
      icon: Cpu,
      title: 'APPLICATIONS DEVELOPER',
      subtitle: 'Structuring modular frontend state and robust full-stack logic.',
      company: 'CPUT DIPLOMA',
      years: '3 years',
      description:
        'Completed Diploma in ICT (Applications Development). Solid grounding in software engineering principles, system analysis, object-oriented programming, and relational database modeling.',
      skills: ['Frontend Architecture', 'Component Hierarchies', 'Data Modeling', 'State Management'],
    },
    {
      id: 'role-4',
      icon: Check,
      title: 'JUNIOR DEVELOPER INTERN',
      subtitle: 'Collaborative version control, system improvements, and client tools.',
      company: 'PLUM SYSTEMS',
      years: '1 year',
      description:
        'Gained foundational software engineering experience contributing to system improvements, collaborative version control workflows in Git, and client-facing digital tools.',
      skills: ['JavaScript', 'Git & GitHub', 'System Architecture', 'Debugging', 'Team PRs'],
    },
  ];

  const funFacts = [
    {
      icon: Terminal,
      label: 'FAVOURITE TOOL',
      title: 'VS Code & Figma',
      description: 'My canvas, my happy place, and honestly my second home.',
    },
    {
      icon: MessageSquare,
      label: 'SECRET WEAPON',
      title: 'Talking to real users',
      description: 'Find out exactly where people get stuck, then write the code around that reality.',
    },
    {
      icon: Coffee,
      label: 'POWERED BY',
      title: 'A good playlist and focused energy',
      description: 'Get both right and I am locked in and shipping features for hours.',
    },
    {
      icon: AlertCircle,
      label: 'DESIGN PET PEEVE',
      title: 'Forms that wipe everything you typed',
      description: '...because one input was wrong. All of it. Gone. Why are we like this?',
    },
    {
      icon: VolumeX,
      label: "CAN'T STAND",
      title: 'Broken mobile layouts & jitter',
      description: 'Buttons that jump around and horizontal scroll on mobile devices.',
    },
  ];

  const tocItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'what-i-do', label: 'What I do' },
    { id: 'experience', label: 'Experience' },
    { id: 'the-rule', label: 'The rule I design by' },
    { id: 'about-me', label: 'A few things about me' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto animate-in fade-in duration-300"
      style={{
        backgroundColor: '#FAF5FA',
        color: '#20032C',
      }}
    >
      {/* Top Floating Bar: Back Button only, clean background, no 'Editorial Profile' */}
      <div className="sticky top-0 z-40 px-4 sm:px-8 py-3.5 backdrop-blur-md bg-[#FAF5FA]/90 border-b border-black/5 flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-1.5 rounded-full font-heading text-xs tracking-wider flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer border border-black/10 bg-white text-[#20032C] hover:bg-black/5"
          title="Back to portfolio"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        {/* Top right is intentionally empty as requested */}
        <div />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Sticky Left Table of Contents matching Video 1 */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 space-y-2">
              <nav className="space-y-1 relative pl-3 border-l-2 border-black/10">
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left py-1.5 px-2.5 rounded-md text-xs font-sans transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'font-bold text-[var(--c-accent)] -ml-[14px] pl-3 border-l-2 border-[var(--c-accent)]'
                          : 'text-neutral-500 hover:text-black'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Column matching Video 1 exactly */}
          <main className="lg:col-span-9 space-y-16">
            {/* 1. INTRODUCTION */}
            <section id="intro" className="space-y-6 pt-1">
              {/* Profile Head matching Video 1 (00:00) */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-black/10 shadow-sm"
                >
                  <img
                    src="/laverne.jpg"
                    alt="Laverne Rollison"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold leading-tight text-[#20032C]">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-sans text-[11px] text-neutral-500">
                    {PERSONAL_INFO.role}
                  </p>
                </div>
              </div>

              {/* Massive Bold Headline matching Video 1 */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#20032C] leading-[0.98] tracking-tight">
                HI, I'M LAVERNE. I DESIGN APPS AND WEBSITES THAT PEOPLE{' '}
                <span style={{ color: 'var(--c-accent)' }}>JUST GET. NO INSTRUCTIONS NEEDED.</span>
              </h1>

              {/* Story Chapters matching Video 1 */}
              <div className="space-y-6 pt-2 font-sans text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--c-accent)] font-bold block mb-1">
                    How it started
                  </span>
                  <p>
                    During my studies in ICT (Applications Development), school was on pause and I wanted to learn real, impactful tech. I didn't want to just write isolated exercises—I wanted to build full-scale web applications. I taught myself modern frontend engineering, discovered UI/UX, and fell completely in love with creating digital experiences that feel second nature.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--c-accent)] font-bold block mb-1">
                    The plot twist
                  </span>
                  <p>
                    At CAPACITI, I transformed that foundation into production-grade delivery. Every user flow became an empathy exercise: testing edge cases, optimizing load speeds, and crafting interfaces that guide users effortlessly to their destination.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--c-accent)] font-bold block mb-1">
                    Right now
                  </span>
                  <p className="font-medium text-neutral-900">
                    Now I'm back to building full-time with verified credentials and capstone applications under my belt. And I'm open to my next full-time web developer role.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. WHAT I DO: Accordion matching Video 1 (00:03 - 00:15) */}
            <section id="what-i-do" className="space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#20032C]">
                WHAT I DO
              </h2>

              <div className="space-y-2.5">
                {rolesAccordion.map((role) => {
                  const isOpen = openAccordion === role.id;
                  const Icon = role.icon;

                  return (
                    <div
                      key={role.id}
                      className={`rounded-2xl border overflow-hidden shadow-2xs transition-all duration-200 ${
                        isOpen ? 'border-[var(--c-accent)]/45 bg-[var(--c-accent)]/[0.03]' : 'border-black/10 bg-white/90'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenAccordion(isOpen ? null : role.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.02]"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-black/10"
                            style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--c-accent)' }}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <div className="min-w-0">
                            <span className="font-heading text-base sm:text-lg text-[#20032C] block truncate">
                              {role.title}
                            </span>
                            <span className="text-xs font-sans text-neutral-500 block truncate">
                              {role.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-mono text-[11px] text-neutral-500 hidden sm:block">
                            {role.years}
                          </span>
                          <span className="text-neutral-400">
                            {isOpen ? <ChevronUp className="w-4 h-4 text-[var(--c-accent)]" /> : <ChevronDown className="w-4 h-4" />}
                          </span>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 space-y-3 border-t border-black/5 animate-in fade-in duration-200">
                          <p className="leading-relaxed">{role.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {role.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-0.5 rounded-full bg-[#FAF5FA] border border-black/10 text-[11px] font-mono font-medium text-neutral-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. EXPERIENCE: Clean Timeline matching Video 1 (00:15 - 00:16) */}
            <section id="experience" className="space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#20032C]">
                EXPERIENCE
              </h2>

              <div className="space-y-3">
                {EXPERIENCE_DATA.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-5 rounded-2xl bg-white/90 border border-black/10 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center font-heading font-bold text-xs text-white shrink-0"
                        style={{ backgroundColor: 'var(--c-accent)' }}
                      >
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-base font-bold text-[#20032C]">
                            {exp.company}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 text-neutral-600">
                            {exp.badge}
                          </span>
                        </div>
                        <p className="text-xs font-sans text-neutral-600">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-neutral-500 sm:text-right">
                      {exp.badge}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. THE ONE RULE I DESIGN BY: matching Video 1 (00:16 - 00:19) */}
            <section id="the-rule" className="space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#20032C]">
                THE ONE RULE I DESIGN BY
              </h2>

              <div className="space-y-2">
                <p className="font-heading text-2xl sm:text-3xl text-[#20032C]">
                  &ldquo;Where would I look if I was in a hurry?&rdquo;
                </p>
                <p className="font-sans text-sm text-neutral-600 max-w-xl leading-relaxed">
                  The same questions kept coming up, and most of them weren't the user's fault. The answer was usually right on the screen, just not where anyone would think to look. So now, before I call any layout finished, I ask myself that one question.
                </p>
              </div>

              {/* Project Callouts matching Video 1 */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                  Where it shows up in my work:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PROJECTS_DATA.slice(0, 3).map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => {
                        onClose();
                        if (onSelectProject) onSelectProject(proj);
                      }}
                      className="p-4 rounded-2xl bg-white/90 border border-black/10 hover:border-[var(--c-accent)] shadow-2xs transition-all hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/10 mb-2.5">
                          <img
                            src={proj.image}
                            alt={proj.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-heading text-sm font-bold text-[#20032C] group-hover:text-[var(--c-accent)] transition-colors">
                          {proj.name}
                        </h4>
                        <p className="font-sans text-[11px] text-neutral-500 line-clamp-2 mt-1">
                          {proj.description.split('\n')[0]}
                        </p>
                      </div>

                      <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono font-bold text-[var(--c-accent)]">
                        <span>EXPLORE</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. A FEW THINGS ABOUT ME: matching Video 1 (00:19 - 00:21) */}
            <section id="about-me" className="space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#20032C]">
                A FEW THINGS ABOUT ME
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {funFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/90 border border-black/10 shadow-2xs space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[var(--c-accent)]">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{fact.label}</span>
                      </div>
                      <div className="font-heading text-base font-bold text-[#20032C]">
                        {fact.title}
                      </div>
                      <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                        {fact.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Bottom CTA Banner matching Video 1 (00:21 - 00:23) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#20032C] text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[var(--c-accent)] uppercase block mb-1">
                  AVAILABLE FOR WORK
                </span>
                <h4 className="font-heading text-xl sm:text-2xl text-white">
                  OPEN TO FULL-TIME DEVELOPER ROLES. READY TO START NOW, REMOTE OR CAPE TOWN.
                </h4>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenContact) onOpenContact();
                  }}
                  className="px-5 py-2.5 rounded-full font-heading text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer whitespace-nowrap"
                  style={{
                    backgroundColor: 'var(--c-accent)',
                    color: '#FFFFFF',
                  }}
                >
                  LET'S TALK
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
