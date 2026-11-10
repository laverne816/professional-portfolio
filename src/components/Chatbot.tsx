import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, User, Bot, ExternalLink } from 'lucide-react';
import { ChatMessage } from '../types.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenCV?: () => void;
  onSelectProjectById?: (id: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle, onOpenCV }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: `Hello! I'm Verna, Laverne's portfolio assistant. I can give you an in-depth summary of any of her featured projects (THE BOARD, RoamRate, Kumbuyaaa, PrasaConnect), her technical skills, verified credentials, or experience. What would you like to know?`,
      timestamp: 'Just now',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'What are her core skills?',
    'What tools & platforms does she use?',
    'Education & background',
    'Show verified certifications',
    'Summarize her featured projects',
    'How do I contact Laverne?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let reply = '';

      // 1. TOOLS & PLATFORMS
      if (
        lower.includes('tool') ||
        lower.includes('platform') ||
        lower.includes('software') ||
        lower.includes('figma') ||
        lower.includes('teams') ||
        lower.includes('chatgpt') ||
        lower.includes('claude') ||
        lower.includes('postman')
      ) {
        reply =
          `🛠️ Tools & Platforms Laverne Works With:\n\n` +
          `• AI & Intelligence: ChatGPT, Claude (Anthropic), Sentiment NLP, CodeT5, Open LLMs\n` +
          `• Design & Creative: Figma, FigJam, Canva, Responsive Architecture, WCAG a11y\n` +
          `• Team & Workflows: Microsoft Teams, Agile Delivery, Team Reviews\n` +
          `• Development & Testing: React, TypeScript, Tailwind CSS, Vite, Postman, Git & GitHub, VS Code, Linux CLI\n\n` +
          `Check out the interactive dual-row marquee on the homepage to see these tools in action!`;
      }
      // 2. SUMMARY OF PROJECTS
      else if (
        lower.includes('summar') ||
        lower.includes('overview') ||
        lower.includes('featured')
      ) {
        reply =
          `🚀 Summary of Laverne's Featured Applications:\n\n` +
          `1. THE BOARD — Live South African youth portal uniting verified learnerships, internships, bursaries, and career opportunities under "Your Future, Pinned."\n\n` +
          `2. RoamRate — Travel sentiment analysis platform using NLP to analyze traveler feedback, sentiment curves, and guest experience insights.\n\n` +
          `3. Kumbuyaaa — Creative content generation application empowering creators with clear, intuitive digital workflows and component design.\n\n` +
          `4. PrasaConnect — Industry digital transit platform resolving commuter scheduling visibility and urban route access.\n\n` +
          `💡 Tip: You can click "VIEW DETAILS" on any project card to inspect screenshots, live demo links, and tech architecture!`;
      }
      // 3. SPECIFIC PROJECT: THE BOARD
      else if (
        lower.includes('the board') ||
        lower.includes('theboard') ||
        lower.includes('board') ||
        lower.includes('youth portal')
      ) {
        reply =
          `📌 THE BOARD — South African Youth Opportunities Portal\n\n` +
          `• Role: Frontend Developer\n` +
          `• Technologies: React, TypeScript, Tailwind CSS, Search Filtering, Web APIs\n` +
          `• Live URL: https://theboardyouthportal.netlify.app/\n\n` +
          `Summary:\n` +
          `THE BOARD is a verified digital opportunities platform built for young South Africans under the motto "Your Future, Pinned." ` +
          `It aggregates real-time learnerships, internships, bursaries, bootcamps, and career events into one centralized hub.\n\n` +
          `Key Highlights:\n` +
          `✓ Engineered intuitive category & provincial search filtering for fast discovery\n` +
          `✓ Designed for zero-fee youth accessibility and seamless mobile responsiveness\n` +
          `✓ Built with an accessible UI prioritizing high legibility and rapid load times.`;
      }
      // 4. SPECIFIC PROJECT: RoamRate
      else if (
        lower.includes('roamrate') ||
        lower.includes('roam rate') ||
        lower.includes('sentiment')
      ) {
        reply =
          `✈️ RoamRate — Travel Sentiment Analysis Tool\n\n` +
          `• Role: Lead Developer\n` +
          `• Technologies: React, JavaScript, Sentiment NLP, REST APIs\n` +
          `• Live URL: https://stay-sense-flow.base44.app/\n\n` +
          `Summary:\n` +
          `RoamRate is a sentiment analysis application exploring the use of NLP to analyze traveler feedback, reviews, and hotel experiences. ` +
          `It generates actionable sentiment curves and customer insight graphs from real travel data.\n\n` +
          `Key Highlights:\n` +
          `✓ Coordinated technical architecture, user flows, and project milestone completion\n` +
          `✓ Integrated real-time sentiment scoring with responsive visual dashboard graphs\n` +
          `✓ Designed clean travel card summaries and automated feedback categorization.`;
      }
      // 5. SPECIFIC PROJECT: Kumbuyaaa
      else if (
        lower.includes('kumbuyaaa') ||
        lower.includes('kumbaya') ||
        lower.includes('content generator')
      ) {
        reply =
          `🎨 Kumbuyaaa — Creative Content Generation Application\n\n` +
          `• Role: UI/UX Designer\n` +
          `• Technologies: UI/UX Design, React, Figma, APIs\n` +
          `• Live URL: https://kumbaya-journeys.lovable.app/\n\n` +
          `Summary:\n` +
          `Kumbuyaaa is a content-generation application developed to empower creators and teams to streamline creative digital workflows.\n\n` +
          `Key Highlights:\n` +
          `✓ Responsible for UI/UX Design, crafting the component hierarchy in Figma\n` +
          `✓ Focused on creating an intuitive, empathetic, and visually engaging creative flow\n` +
          `✓ Iteratively refined generation layouts based on user testing and collaborative team feedback.`;
      }
      // 6. SPECIFIC PROJECT: PrasaConnect
      else if (
        lower.includes('prasa') ||
        lower.includes('prasaconnect') ||
        lower.includes('transit')
      ) {
        reply =
          `🚆 PrasaConnect — Industry Transit Solution\n\n` +
          `• Role: Developer\n` +
          `• Technologies: React, Transit APIs, Mobile Web, AI Systems\n` +
          `• Live URL: https://metromapai-5t69zzbk.manus.space/\n\n` +
          `Summary:\n` +
          `PrasaConnect was developed as an industry-focused digital transit platform resolving commuter scheduling visibility and transit access challenges.\n\n` +
          `Key Highlights:\n` +
          `✓ Contributed as application and logic developer\n` +
          `✓ Built for high reliability and rapid data loading on low-bandwidth mobile networks\n` +
          `✓ Integrated transit scheduling and intelligent route coordination algorithms.`;
      }
      // 5. ALL PROJECTS / WORK GENERALLY
      else if (
        lower.includes('project') ||
        lower.includes('work') ||
        lower.includes('apps') ||
        lower.includes('portfolio')
      ) {
        reply =
          `Laverne's portfolio features 4 live web applications:\n\n` +
          `1. THE BOARD — SA Youth Opportunities Portal (Frontend Developer)\n` +
          `2. RoamRate — Travel Sentiment Analysis Tool (Group Leader)\n` +
          `3. Kumbuyaaa — Creative Content Generator (UI/UX Designer)\n` +
          `4. PrasaConnect — Industry AI Transit Solution (Developer)\n\n` +
          `💡 Tip: Ask me specifically "Tell me about THE BOARD" or "Tell me about RoamRate" for a complete deep dive on any of them!`;
      }
      // 6. SKILLS & TECH STACK
      else if (
        lower.includes('skill') ||
        lower.includes('stack') ||
        lower.includes('tech') ||
        lower.includes('react') ||
        lower.includes('typescript') ||
        lower.includes('javascript') ||
        lower.includes('python')
      ) {
        reply =
          `Laverne's technical toolkit includes:\n\n` +
          `• Frontend Development: React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3\n` +
          `• Architecture & Design: Figma, UI/UX Wireframing, Responsive Layouts, Accessibility (WCAG)\n` +
          `• Backend & OOP: Java, Python, RESTful APIs, Node.js, Spring Boot basics\n` +
          `• Data & AI: Machine Learning foundations, Sentiment NLP, API Integration\n` +
          `• Tools & Workflows: Git, GitHub, GitLab, Vite, VS Code, Linux CLI, Agile Delivery.`;
      }
      // 7. VERIFIED CREDENTIALS / CERTIFICATES
      else if (
        lower.includes('cert') ||
        lower.includes('credential') ||
        lower.includes('coursera') ||
        lower.includes('stanford') ||
        lower.includes('meta') ||
        lower.includes('ibm') ||
        lower.includes('deeplearning') ||
        lower.includes('aws')
      ) {
        reply =
          `Laverne has earned verified credentials from leading institutions:\n\n` +
          `• Version Control (Meta)\n` +
          `• Supervised Machine Learning (Stanford Online & DeepLearning.AI)\n` +
          `• Unsupervised Learning & Recommenders (Stanford Online & DeepLearning.AI)\n` +
          `• Generative AI with Large Language Models (AWS & DeepLearning.AI)\n` +
          `• Python for Data Science, AI & Development (IBM)\n` +
          `• Introduction to Generative AI (Google Cloud)\n` +
          `• Introduction to Artificial Intelligence (IBM)\n` +
          `• Prompt Engineering Basics (IBM)\n` +
          `• AI For Everyone (DeepLearning.AI)\n\n` +
          `All credentials can be verified directly on the site under the Credentials section!`;
      }
      // 8. CV / RESUME
      else if (
        lower.includes('cv') ||
        lower.includes('resume') ||
        lower.includes('education') ||
        lower.includes('diploma') ||
        lower.includes('cput')
      ) {
        reply =
          `📄 Laverne's Curriculum Vitae includes:\n\n` +
          `• Education: Diploma in ICT (Applications Development) at Cape Peninsula University of Technology (CPUT)\n` +
          `• Current Role: Web Developer Associate at CAPACITI (2026 - Present)\n` +
          `• Previous Experience: Junior Developer Intern at Plum Systems (2024 - 2025)\n` +
          `• Languages: English (Fluent), Afrikaans (Conversational)\n\n` +
          `You can view and download her full verified CV right from the "MY CV" button in the top navigation bar!`;
      }
      // 9. CONTACT / HIRE
      else if (
        lower.includes('contact') ||
        lower.includes('email') ||
        lower.includes('reach') ||
        lower.includes('hire') ||
        lower.includes('location') ||
        lower.includes('phone')
      ) {
        reply =
          `📬 You can reach Laverne directly:\n\n` +
          `• Email: ${PERSONAL_INFO.email}\n` +
          `• Phone: ${PERSONAL_INFO.phone}\n` +
          `• Location: Cape Town, South Africa (Available Worldwide)\n` +
          `• GitHub: ${PERSONAL_INFO.githubUrl}\n\n` +
          `Feel free to use the contact form at the bottom of the page or click her email to start a conversation!`;
      }
      // 10. WHO IS LAVERNE / CAPACITI
      else if (
        lower.includes('who') ||
        lower.includes('about') ||
        lower.includes('capaciti') ||
        lower.includes('laverne')
      ) {
        reply =
          `Laverne Rollison is a Web Developer Associate at CAPACITI based in Cape Town, South Africa.\n\n` +
          `She holds an ICT Diploma in Applications Development and combines a strong technical foundation in React, TypeScript, and modern APIs with thoughtful, user-centred UI/UX design. ` +
          `Her motto: "Graduate → Learning → Building → Developing → Growing."`;
      }
      // DEFAULT FALLBACK
      else {
        reply =
          `I'm Verna, Laverne Rollison's personal portfolio assistant. ` +
          `I can answer questions about any of her 4 featured applications (THE BOARD, RoamRate, Kumbuyaaa, PrasaConnect), her skills, credentials, or how to get in touch. ` +
          `What would you like to know?`;
      }

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: 'Just now',
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 350);
  };

  return (
    <>
      {/* Floating Trigger Button: Icon only */}
      <button
        type="button"
        id="floating-chat-trigger"
        onClick={onToggle}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer border border-white/20 bg-neutral-900/90 backdrop-blur-md hover:border-[var(--c-accent)]"
        style={{
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
        }}
        aria-label="Portfolio Assistant"
        title="Chat with Verna"
      >
        <Sparkles className="w-5 h-5 text-[var(--c-accent)] group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          id="chat-window-container"
          className="fixed bottom-22 left-4 sm:left-6 z-50 w-[92vw] sm:w-[420px] h-[550px] rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
          style={{
            backgroundColor: 'var(--c-bg)',
            color: 'var(--c-text)',
            borderColor: 'var(--c-card-border)',
          }}
        >
          {/* Header */}
          <div
            className="p-4 border-b border-white/10 flex items-center justify-between"
            style={{ backgroundColor: 'var(--c-dark-surface)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-heading font-bold text-xs bg-neutral-800 border border-white/20"
              >
                VR
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-sm font-bold tracking-tight text-[var(--c-cream)]">
                    ASK VERNA
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[10px] text-neutral-400 font-mono block">
                  Portfolio Assistant &middot; Laverne Rollison
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onToggle}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Ask Verna chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans bg-black/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs bg-neutral-800 border border-white/20"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-neutral-200 text-neutral-900 font-medium'
                      : 'border border-white/10 text-neutral-200 bg-neutral-900/80'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0 mt-0.5 text-white">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-neutral-400 text-[11px] font-mono pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
                <span>Verna is preparing response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div
            className="px-4 py-2.5 border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none"
            style={{ backgroundColor: 'var(--c-dark-surface)' }}
          >
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-3 py-1 text-[11px] font-mono rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/10 flex items-center gap-2"
            style={{ backgroundColor: 'var(--c-dark-surface)' }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about THE BOARD, RoamRate, skills..."
              className="flex-1 bg-black/40 text-xs text-white placeholder-neutral-500 outline-none px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-white/30 font-sans"
            />
            <button
              type="submit"
              aria-label="Send query to Verna"
              className="p-2.5 rounded-xl text-neutral-900 bg-white hover:bg-neutral-200 transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
