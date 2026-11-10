import React from 'react';
import { Project } from '../types.ts';
import { X, ArrowRight, Code, CheckCircle2, User, Users } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isIndividual = project.projectType === 'INDIVIDUAL PROJECT';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#161513]/70 dark:bg-[#0E0D0C]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#1E1C19] text-[#161513] dark:text-[#F5F2EC] border border-[#E2DDD5] dark:border-[#36332E] shadow-2xl p-6 sm:p-8 rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#706A62] dark:text-[#A0988E] hover:text-[#161513] dark:hover:text-[#F5F2EC] transition-colors rounded-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-[#C28864] dark:text-[#C28864] font-bold">
            {project.number}
          </span>
          <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 border border-[#E2DDD5] dark:border-[#36332E] bg-[#F3EFEA] dark:bg-[#161513] text-[#C28864] dark:text-[#A0988E] uppercase">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-[#706A62] dark:text-[#A0988E] font-mono uppercase">
            {isIndividual ? (
              <User className="w-3 h-3 text-[#C28864] dark:text-[#C28864]" />
            ) : (
              <Users className="w-3 h-3 text-[#C28864] dark:text-[#C28864]" />
            )}
            <span>{project.projectType}</span>
          </span>
        </div>

        {/* Project Name */}
        <h3 className="font-serif text-3xl sm:text-4xl text-[#161513] dark:text-[#F5F2EC] font-normal mb-1">
          {project.name}
        </h3>

        {/* Role */}
        <div className="text-xs font-mono text-[#706A62] dark:text-[#A0988E] mb-6">
          ROLE: <span className="text-[#161513] dark:text-[#F5F2EC] font-semibold">{project.role}</span>
        </div>

        {/* Project Preview Image */}
        <div className="relative overflow-hidden border border-[#E2DDD5] dark:border-[#36332E] aspect-[16/9] mb-6 bg-[#F3EFEA] dark:bg-[#161513]">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#C28864] dark:text-[#A0988E] mb-2 font-semibold">
            OVERVIEW
          </h4>
          <p className="text-[#4A3236] dark:text-[#D6C8B8] text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans">
            {project.description}
          </p>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#C28864] dark:text-[#A0988E] mb-3 font-semibold">
              KEY HIGHLIGHTS
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3236] dark:text-[#D6C8B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#C28864] dark:text-[#C28864] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#C28864] dark:text-[#A0988E] mb-2.5 font-semibold">
            TECHNOLOGIES
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono tracking-wider px-2.5 py-1 bg-[#F3EFEA] dark:bg-[#161513] border border-[#E2DDD5] dark:border-[#36332E] text-[#C28864] dark:text-[#A0988E] uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: VIEW PROJECT & GET CODE */}
        <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#ECE7DE] dark:border-[#24221E]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C28864] hover:bg-[#C28864] text-[#FAF8F5] dark:bg-[#C28864] dark:hover:bg-[#F5F2EC] dark:text-[#161513] font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95"
          >
            <span>VIEW PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#A0988E] dark:border-[#36332E] hover:border-[#C28864] dark:hover:border-[#C28864] text-[#C28864] dark:text-[#A0988E] hover:text-[#161513] dark:hover:text-[#F5F2EC] bg-[#F3EFEA]/50 dark:bg-[#161513]/50 font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <Code className="w-4 h-4 text-[#C28864] dark:text-[#C28864]" />
              <span>GET CODE</span>
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto text-xs font-mono text-[#706A62] dark:text-[#A0988E] hover:text-[#161513] dark:hover:text-[#F5F2EC] uppercase tracking-wider transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
