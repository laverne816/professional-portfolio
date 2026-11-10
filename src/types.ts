export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  projectType?: string;
  role: string;
  description: string;
  technologies: string[];
  linkText: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  accent: {
    badge: string;
    border: string;
    glow: string;
    text: string;
  };
  highlights: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'WEB DEVELOPMENT' | 'TOOLS' | 'UI/UX DESIGN' | 'AI & EMERGING TECHNOLOGY';
  contextualLabel: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  weight: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  isUppercase?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  partner: string;
  instructor: string;
  date: string;
  verifyUrl: string;
  credentialCode: string;
  skillsCovered: string[];
  category: string;
  previewImage?: string;
  pdfUrl?: string;
  downloadName?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
