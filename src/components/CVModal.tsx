import React from 'react';
import { X, Printer, Download, Mail, MapPin, Phone } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161513]/70 dark:bg-[#0E0D0C]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#FFFFFF] dark:bg-[#1E1C19] text-[#161513] dark:text-[#F5F2EC] border border-[#E2DDD5] dark:border-[#36332E] shadow-2xl rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2DDD5] dark:border-[#36332E] bg-[#F3EFEA] dark:bg-[#19090C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#597794]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#597794] dark:text-[#8AA6C1] font-semibold">
              Curriculum Vitae — LAVERNE ROLLISON
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/cv.pdf"
              download="Laverne_Rollison_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] dark:bg-[#161513] border border-[#E2DDD5] dark:border-[#36332E] hover:border-[#597794] text-xs font-mono font-medium text-[#161513] dark:text-[#F5F2EC] hover:text-[#597794] transition-colors rounded-sm shadow-xs"
              title="Download original PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#597794]" />
              <span className="hidden sm:inline">DOWNLOAD PDF</span>
            </a>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#597794] hover:bg-[#46617A] text-xs font-mono font-bold text-[#FFFFFF] transition-colors rounded-sm shadow-sm active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#706A62] dark:text-[#A0988E] hover:text-[#161513] dark:hover:text-[#F5F2EC] transition-colors rounded-sm hover:bg-[#EAE4DA] dark:hover:bg-[#24221E]"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document matching exact attached format */}
        <div className="overflow-y-auto p-6 sm:p-12 space-y-7 print:p-0 print:bg-white print:text-black bg-[#FFFFFF] dark:bg-[#1E1C19]">
          {/* Header */}
          <div className="text-center pb-2">
            <h1 className="font-sans font-bold text-2xl sm:text-3xl text-[#597794] dark:text-[#8AA6C1] tracking-[0.18em] uppercase">
              LAVERNE ROLLISON
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#4A3236] dark:text-[#C5BCDC] mt-2 font-sans">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#597794] inline" />
                <span>Cape Town, Western Cape</span>
              </span>
              <span className="text-[#A0988E]">|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#597794] inline" />
                <span>082 542 1405</span>
              </span>
              <span className="text-[#A0988E]">|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#597794] inline" />
                <a href="mailto:l.rollison@outlook.com" className="hover:underline">
                  l.rollison@outlook.com
                </a>
              </span>
            </div>
          </div>

          {/* Section: PROFESSIONAL SUMMARY */}
          <section className="space-y-2">
            <div className="text-center border-b border-[#D5CFCE] dark:border-[#36332E] pb-1">
              <h2 className="font-sans text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#161513] dark:text-[#F5F2EC]">
                PROFESSIONAL SUMMARY
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8] leading-relaxed text-justify sm:text-left">
              An ICT graduate with a Diploma in ICT: Applications Development and practical experience in software testing, web and mobile application development, debugging, and software maintenance. Experienced in collaborating within Agile teams, troubleshooting technical issues, and contributing to application improvements. A motivated, adaptable, and detail-oriented individual eager to apply technical knowledge, develop new skills, and contribute to a dynamic team.
            </p>
          </section>

          {/* Section: EXPERIENCE */}
          <section className="space-y-4">
            <div className="text-center border-b border-[#D5CFCE] dark:border-[#36332E] pb-1">
              <h2 className="font-sans text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#161513] dark:text-[#F5F2EC]">
                EXPERIENCE
              </h2>
            </div>

            {/* Experience 1: Capaciti */}
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#161513] dark:text-[#F5F2EC]">
                  Capaciti
                </h3>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#161513] dark:text-[#F5F2EC]">
                  May 2026 – Present
                </span>
              </div>
              <p className="font-sans font-bold text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8]">
                Digital Associate
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8] leading-relaxed">
                <li>Participating in an AI skills acceleration programme focused on practical tech skills.</li>
                <li>Completing hands-on web development training and contributing to tech projects.</li>
                <li>Developing skills in coding, responsive design, and modern development practices.</li>
                <li>Applying testing, debugging, and problem-solving techniques to active projects.</li>
                <li>Building teamwork, communication, and adaptability skills while learning new technologies.</li>
              </ul>
            </div>

            {/* Experience 2: Plum Systems */}
            <div className="space-y-2 pt-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#161513] dark:text-[#F5F2EC]">
                  Plum Systems
                </h3>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#161513] dark:text-[#F5F2EC]">
                  Jan 2025 – Dec 2025
                </span>
              </div>

              <div className="space-y-1">
                <p className="font-sans font-bold text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8]">
                  IT Tester
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8] leading-relaxed">
                  <li>Provided technical support by identifying, investigating and troubleshooting applications and system-related issues.</li>
                  <li>Diagnosed software and application problems, investigated potential causes and supported resolution.</li>
                  <li>Documented bugs, errors and technical issues clearly to support efficient troubleshooting and resolution.</li>
                  <li>Developing skills in coding, responsive design, and modern development practices.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-2">
                <p className="font-sans font-bold text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8]">
                  Junior Developer
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8] leading-relaxed">
                  <li>Assisted with the development, maintenance, and improvement of web and mobile applications using JavaScript, React, and React Native.</li>
                  <li>Collaborated with developers and team members to identify issues, discuss solutions, and deliver software improvements.</li>
                  <li>Contributed to resolving user interface issues and improving the usability and reliability of application features.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: EDUCATION */}
          <section className="space-y-3">
            <div className="text-center border-b border-[#D5CFCE] dark:border-[#36332E] pb-1">
              <h2 className="font-sans text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#161513] dark:text-[#F5F2EC]">
                EDUCATION
              </h2>
            </div>

            <div className="space-y-1">
              <h3 className="font-sans font-bold text-xs sm:text-sm text-[#161513] dark:text-[#F5F2EC]">
                Cape Peninsula University of Technology
              </h3>
              <p className="font-sans font-bold text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8]">
                Diploma in ICT: Applications Development
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8] leading-relaxed">
                Strong foundation in web and mobile application development, system analysis, database management, programming, troubleshooting and technical problem-solving, with experience working independently and collaboratively through academic projects.
              </p>
            </div>

            <div className="space-y-1 pt-2">
              <h3 className="font-sans font-bold text-xs sm:text-sm text-[#161513] dark:text-[#F5F2EC]">
                Higher Certificate in ICT
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8] leading-relaxed">
                Relevant ICT knowledge: Information and Communication Technology Fundamentals, Networking and Security Fundamentals, Basic Programming and Quantitative Techniques.
              </p>
            </div>

            <div className="space-y-1 pt-2">
              <h3 className="font-sans font-bold text-xs sm:text-sm text-[#161513] dark:text-[#F5F2EC]">
                De Kuilen High School
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8]">
                National Senior Certificate
              </p>
            </div>
          </section>

          {/* Section: SKILLS */}
          <section className="space-y-2">
            <div className="text-center border-b border-[#D5CFCE] dark:border-[#36332E] pb-1">
              <h2 className="font-sans text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#161513] dark:text-[#F5F2EC]">
                SKILLS
              </h2>
            </div>
            <ul className="list-disc list-outside pl-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8]">
              <li>React/ React Native</li>
              <li>JavaScript</li>
              <li>Microsoft 365</li>
              <li>Application Development</li>
              <li>Responsive Web Development</li>
              <li>Networking Fundamentals</li>
              <li>Hardware Troubleshooting</li>
            </ul>
          </section>

          {/* Section: LANGUAGES */}
          <section className="space-y-2">
            <div className="text-center border-b border-[#D5CFCE] dark:border-[#36332E] pb-1">
              <h2 className="font-sans text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#161513] dark:text-[#F5F2EC]">
                LANGUAGES
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#2E282A] dark:text-[#D6C8B8]">
              English (Good); Afrikaans (Good)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
