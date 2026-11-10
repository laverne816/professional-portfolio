import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import { ExternalLink, ArrowUpRight, Github, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const featured = PROJECTS_DATA[0]; // THE BOARD
  const middleProjects = PROJECTS_DATA.slice(1, 3); // RoamRate & Kumbuyaaa
  const lastProject = PROJECTS_DATA[3]; // PrasaConnect

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative"
      style={{
        backgroundColor: 'var(--c-bg)',
        color: 'var(--c-text)',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span
            className="font-mono text-xs tracking-[0.28em] uppercase font-bold block"
            style={{ color: 'var(--c-accent)' }}
          >
            02 &middot; SELECTED WORK
          </span>
          <h2
            className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none"
            style={{ color: 'var(--c-text)' }}
          >
            SELECTED PROJECTS
          </h2>
          <p
            className="font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--c-text-muted)' }}
          >
            A few projects I'm proud of, across web, mobile, and intelligent data systems.
          </p>
        </div>

        {/* 1. HERO SHOWCASE: THE BOARD (Large Asymmetrical Feature Card) */}
        {featured && (
          <div
            onClick={() => onSelectProject && onSelectProject(featured)}
            className="group rounded-3xl overflow-hidden border hover:border-[var(--c-accent)] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12 items-stretch"
            style={{
              backgroundColor: 'var(--c-card)',
              borderColor: 'var(--c-card-border)',
            }}
          >
            {/* Visual Preview Left Side */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] overflow-hidden bg-neutral-950">
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

              {/* Number Badge & Category */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-heading text-sm text-white bg-black/60 backdrop-blur-md border border-white/20">
                  {featured.number}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-neutral-900 shadow-xs">
                  FEATURED WORK
                </span>
              </div>

              {/* Tagline over image */}
              <div className="absolute bottom-4 left-5 right-5">
                <span className="font-mono text-[11px] text-amber-300 tracking-wider uppercase font-semibold">
                  {featured.category}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide drop-shadow-sm mt-0.5">
                  {featured.name}
                </h3>
              </div>
            </div>

            {/* Content Details Right Side */}
            <div
              className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6"
              style={{ backgroundColor: 'var(--c-card)' }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-mono font-semibold tracking-wider uppercase"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    ROLE: <strong style={{ color: 'var(--c-text)' }}>{featured.role}</strong>
                  </span>
                </div>

                <p
                  className="font-sans text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  {featured.description.split('\n\n')[0]}
                </p>

                {/* Key Highlight bullets */}
                <div className="space-y-2 pt-1">
                  {featured.highlights.slice(0, 2).map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs"
                      style={{ color: 'var(--c-text-muted)' }}
                    >
                      <span className="text-[var(--c-accent)] font-bold mt-0.5">&bull;</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featured.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-mono border"
                      style={{
                        backgroundColor: 'var(--c-bg)',
                        color: 'var(--c-text)',
                        borderColor: 'var(--c-card-border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="pt-4 border-t flex flex-wrap items-center justify-between gap-3"
                style={{ borderColor: 'var(--c-card-border)' }}
              >
                <span
                  className="font-heading text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-1 group-hover:underline"
                  style={{ color: 'var(--c-accent)' }}
                >
                  <span>VIEW PROJECT DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>

                <div className="flex items-center gap-2">
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-1.5 rounded-full text-xs font-heading tracking-wider uppercase text-white shadow-xs hover:opacity-90 transition-opacity flex items-center gap-1"
                      style={{ backgroundColor: 'var(--c-accent)' }}
                      title="Open Live App"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full border transition-colors hover:scale-105"
                      style={{
                        borderColor: 'var(--c-card-border)',
                        color: 'var(--c-text)',
                      }}
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. DUAL EDITORIAL CARDS: RoamRate & Kumbuyaaa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {middleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="group rounded-3xl overflow-hidden border hover:border-[var(--c-accent)] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              <div>
                {/* Visual Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-neutral-900 shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center font-heading text-xs text-white bg-black/60 backdrop-blur-md border border-white/20">
                      {project.number}
                    </span>
                  </div>

                  {/* Project Title Over Image */}
                  <div className="absolute bottom-3.5 left-5 right-5">
                    <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide drop-shadow-sm">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div
                    className="text-xs font-mono font-semibold tracking-wide uppercase"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    ROLE: <strong style={{ color: 'var(--c-text)' }}>{project.role}</strong>
                  </div>

                  <p
                    className="font-sans text-xs sm:text-sm leading-relaxed line-clamp-3"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    {project.description.split('\n')[0]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border"
                        style={{
                          backgroundColor: 'var(--c-bg)',
                          color: 'var(--c-text)',
                          borderColor: 'var(--c-card-border)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div
                className="px-6 py-4 border-t flex items-center justify-between"
                style={{
                  borderColor: 'var(--c-card-border)',
                  backgroundColor: 'var(--c-bg-subtle)',
                }}
              >
                <span
                  className="font-heading text-xs font-bold tracking-wider group-hover:underline flex items-center gap-1"
                  style={{ color: 'var(--c-accent)' }}
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full transition-colors hover:scale-105"
                      style={{ color: 'var(--c-text)' }}
                      title="Open Live App"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full transition-colors hover:scale-105"
                      style={{ color: 'var(--c-text)' }}
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. WIDE SHOWCASE CARD: PrasaConnect */}
        {lastProject && (
          <div
            onClick={() => onSelectProject && onSelectProject(lastProject)}
            className="group rounded-3xl overflow-hidden border hover:border-[var(--c-accent)] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12 items-stretch"
            style={{
              backgroundColor: 'var(--c-card)',
              borderColor: 'var(--c-card-border)',
            }}
          >
            {/* Content Left Side */}
            <div
              className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 order-2 lg:order-1"
              style={{ backgroundColor: 'var(--c-card)' }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center font-heading text-sm border"
                    style={{
                      backgroundColor: 'var(--c-bg)',
                      borderColor: 'var(--c-card-border)',
                      color: 'var(--c-text)',
                    }}
                  >
                    {lastProject.number}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border"
                    style={{
                      backgroundColor: 'var(--c-bg)',
                      borderColor: 'var(--c-card-border)',
                      color: 'var(--c-text)',
                    }}
                  >
                    {lastProject.category}
                  </span>
                </div>

                <h3
                  className="font-heading text-3xl sm:text-4xl tracking-wide"
                  style={{ color: 'var(--c-text)' }}
                >
                  {lastProject.name}
                </h3>

                <div
                  className="text-xs font-mono font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  ROLE: <strong style={{ color: 'var(--c-text)' }}>{lastProject.role}</strong>
                </div>

                <p
                  className="font-sans text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  {lastProject.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {lastProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-mono border"
                      style={{
                        backgroundColor: 'var(--c-bg)',
                        color: 'var(--c-text)',
                        borderColor: 'var(--c-card-border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="pt-4 border-t flex flex-wrap items-center justify-between gap-3"
                style={{ borderColor: 'var(--c-card-border)' }}
              >
                <span
                  className="font-heading text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-1 group-hover:underline"
                  style={{ color: 'var(--c-accent)' }}
                >
                  <span>VIEW TRANSIT ARCHITECTURE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>

                <div className="flex items-center gap-2">
                  {lastProject.liveUrl && (
                    <a
                      href={lastProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-1.5 rounded-full text-xs font-heading tracking-wider uppercase text-white shadow-xs hover:opacity-90 transition-opacity flex items-center gap-1"
                      style={{ backgroundColor: 'var(--c-accent)' }}
                      title="Open Live App"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {lastProject.githubUrl && (
                    <a
                      href={lastProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full border transition-colors hover:scale-105"
                      style={{
                        borderColor: 'var(--c-card-border)',
                        color: 'var(--c-text)',
                      }}
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Visual Right Side */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] overflow-hidden bg-neutral-950 order-1 lg:order-2">
              <img
                src={lastProject.image}
                alt={lastProject.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
