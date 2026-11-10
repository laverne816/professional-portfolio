import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { MoreAboutMeModal } from './components/MoreAboutMeModal.tsx';
import { ToolsMarquee } from './components/ToolsMarquee.tsx';
import { TakeABreakBanner } from './components/TakeABreakBanner.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { CertificatesSection } from './components/CertificatesSection.tsx';
import { CVBanner } from './components/CVBanner.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ThemeSwitcher } from './components/ThemeSwitcher.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { CertificateModal } from './components/CertificateModal.tsx';
import { CVModal } from './components/CVModal.tsx';
import { Chatbot } from './components/Chatbot.tsx';
import { Project, Certificate } from './types.ts';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-500 relative selection:bg-[var(--c-accent)] selection:text-white">
        {/* Floating Centered Pill-Shaped Glass Nav with CV Pill CTA */}
        <Navigation
          onOpenCV={() => setIsCVOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        <main className="flex-grow">
          {/* HERO: Massive Condensed All-Caps Headline, 3D Swinging Glassy ID Badge, Accent Title & CTAs */}
          <Hero
            onOpenCV={() => setIsCVOpen(true)}
            onOpenChat={() => setIsChatOpen(true)}
          />

          {/* ABOUT SECTION: Personality-Led Storytelling, Photo, 4 Stats, "More about me ↗" */}
          <AboutSection
            onOpenMoreAbout={() => setIsMoreAboutOpen(true)}
            onOpenCV={() => setIsCVOpen(true)}
          />

          {/* SELECTED PROJECTS: Asymmetrical Editorial Showcase, Live Demos & Modal Triggers */}
          <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

          {/* TAKE A BREAK: Interactive Breakout Mini-Game & Hall of Fame (from inspiration) */}
          <TakeABreakBanner />

          {/* TOOLS MARQUEE: Infinite Dual-Row Scrolling Ribbon */}
          <ToolsMarquee />

          {/* SKILLS & TECHNOLOGIES: Typography-Led Categorized Interactive Toolkits */}
          <SkillsSection onSelectCertificate={(c) => setSelectedCertificate(c)} />

          {/* EXPERIENCE: Creative Timeline for CAPACITI & Plum Systems */}
          <ExperienceSection />

          {/* EDUCATION: Numbered Editorial Cards for CPUT ICT Diploma & Higher Certificate */}
          <EducationSection />

          {/* CERTIFICATES: 16 Verified Credentials with Category Filter Tabs, Preview & Download */}
          <CertificatesSection onSelectCertificate={(c) => setSelectedCertificate(c)} />

          {/* CURRICULUM VITAE: 100% Ungated Direct View CV & Download PDF */}
          <CVBanner onOpenCV={() => setIsCVOpen(true)} />

          {/* CONTACT: Giant Stacked "LET'S WORK TOGETHER" Headline & Frosted Glass Form */}
          <ContactSection />
        </main>

        {/* FOOTER: Massive Name Monogram, Social Links & Back-to-Top Pill */}
        <Footer />

        {/* FLOATING THEME SWITCHER: Color Palette Wheel Button with Conic Gradient */}
        <ThemeSwitcher />

        {/* "MORE ABOUT MY JOURNEY" EDITORIAL OVERLAY: Table of Contents, Roles Accordion, Philosophy */}
        <MoreAboutMeModal
          isOpen={isMoreAboutOpen}
          onClose={() => setIsMoreAboutOpen(false)}
          onSelectProject={(p) => setSelectedProject(p)}
          onOpenContact={() => {
            setIsMoreAboutOpen(false);
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* CRITICAL CV MODAL: Direct viewing, printing & download without any gate/lock */}
        <CVModal
          isOpen={isCVOpen}
          onClose={() => setIsCVOpen(false)}
        />

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Verified Certificate Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />

        {/* Chatbot Assistant: Verna */}
        <Chatbot
          isOpen={isChatOpen}
          onToggle={() => setIsChatOpen(!isChatOpen)}
          onOpenCV={() => setIsCVOpen(true)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
