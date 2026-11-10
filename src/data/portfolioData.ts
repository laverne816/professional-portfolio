import { Project, SkillItem, Certificate } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Laverne Rollison',
  role: 'Web Developer Associate — CAPACITI',
  email: 'l.rollison@outlook.com',
  phone: '+27 82 542 1405',
  location: 'Cape Town, South Africa',
  shortLocation: 'Cape Town, ZA',
  tagline: 'GRADUATE → LEARNING → BUILDING → DEVELOPING → GROWING',
  aboutHeadline: "I'm a recent ICT graduate building, learning and growing as a developer — one project at a time.",
  aboutP1: "I'm currently at CAPACITI, building practical skills through real-world technology projects — sharpening both how I build and how I design.",
  aboutP2: "My experience spans web and mobile development, with a growing focus on intuitive, user-centred interfaces. I'm interested in AI and emerging technologies, and I enjoy combining creativity and technology to turn ideas into meaningful digital experiences.",
  focus: 'Web & UI/UX',
  learning: 'AI & Emerging Tech',
  githubUrl: 'https://github.com/laverne816'
};

export interface ExperienceItem {
  id: string;
  badge: string;
  company: string;
  role: string;
  description: string;
  tags?: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    badge: 'CURRENT',
    company: 'CAPACITI',
    role: 'Web Developer Associate',
    description: 'I am currently at CAPACITI, building my skills and gaining practical experience through real-world technology projects. I have also been part of a 1-week Skill Acceleration Programme at CAPACITI.',
  },
  {
    id: 'exp-2',
    badge: '1 YEAR',
    company: 'Plum Systems',
    role: 'Junior Developer Intern',
    description: 'Gained foundational software engineering experience, contributing to system improvements, collaborative version control workflows and client solutions.',
    tags: ['JavaScript', 'System Architecture', 'Git', 'Agile']
  }
];

export interface EducationItem {
  id: string;
  number: string;
  degree: string;
  title: string;
  institution: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    number: '01',
    degree: 'Diploma in ICT: Applications Development',
    title: 'Diploma in ICT: Applications Development',
    institution: 'Cape Peninsula University of Technology (CPUT)'
  },
  {
    id: 'edu-2',
    number: '02',
    degree: 'Higher Certificate in ICT',
    title: 'Higher Certificate in ICT',
    institution: 'Cape Peninsula University of Technology (CPUT)'
  },
  {
    id: 'edu-3',
    number: '03',
    degree: 'National Senior Certificate',
    title: 'National Senior Certificate',
    institution: 'De Kuilen High School'
  }
];

export interface SkillCategoryRow {
  number: string;
  title: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategoryRow[] = [
  {
    number: '01',
    title: 'Development & Frameworks',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'React Native', 'Java', 'Spring Boot', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite', 'Node.js']
  },
  {
    number: '02',
    title: 'AI, Data & Productivity Tools',
    skills: ['ChatGPT', 'Claude', 'Canva', 'Sentiment NLP', 'Python', 'RESTful APIs', 'CodeT5 & Open LLMs', 'JSON Data Structures']
  },
  {
    number: '03',
    title: 'Workflows & Developer Tooling',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Microsoft Teams', 'IntelliJ IDEA', 'Vite', 'Agile Delivery']
  },
  {
    number: '04',
    title: 'UI/UX & Design Systems',
    skills: ['Figma', 'FigJam', 'Canva', 'Responsive Architecture', 'WCAG Accessibility (a11y)', 'Wireframing', 'Software QA & Debugging']
  }
];

export const SKILL_CATEGORIES_DATA = SKILL_CATEGORIES;

export const PROJECTS_DATA: Project[] = [
  {
    id: 'theboard',
    number: '01',
    name: 'THE BOARD',
    category: 'YOUTH OPPORTUNITIES PORTAL',
    projectType: 'PORTAL PLATFORM',
    role: 'Frontend Developer',
    description: 'THE BOARD is a verified digital opportunities platform built for young South Africans, aggregating real-time learnerships, internships, bursaries, bootcamps, and career events under the banner "Your Future, Pinned."\n\nEngineered with an emphasis on seamless accessibility, clean user experience, and fast search filtering across provinces, career tracks, and opportunity categories.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Search Filtering', 'Web APIs'],
    linkText: 'VIEW PROJECT',
    liveUrl: 'https://theboardyouthportal.netlify.app/',
    githubUrl: 'https://github.com/laverne816',
    image: '/projects/theboard.svg',
    accent: {
      badge: 'border-white/20 text-white',
      border: 'border-white/20',
      glow: 'from-[var(--c-accent)]/20 to-transparent',
      text: 'text-[var(--c-accent)]',
    },
    highlights: [
      'Comprehensive South African youth portal uniting verified learnerships, internships, and bursaries',
      'Responsive category filtering, provincial filters, and instant keyword exploration system',
      'Engineered accessible UI with high legibility and zero-fee youth accessibility'
    ]
  },
  {
    id: 'roamrate',
    number: '02',
    name: 'RoamRate',
    category: 'SENTIMENT ANALYSIS TOOL',
    projectType: 'NLP WEB APPLICATION',
    role: 'Lead Developer',
    description: 'RoamRate is a sentiment analysis application that harnesses NLP to analyse traveler feedback, hotel experiences, and guest reviews. It generates real-time sentiment scoring, customer satisfaction curves, and actionable travel insights.',
    technologies: ['React', 'JavaScript', 'Sentiment NLP', 'REST APIs'],
    linkText: 'VIEW PROJECT',
    liveUrl: 'https://stay-sense-flow.base44.app/',
    githubUrl: 'https://github.com/laverne816',
    image: '/projects/roamrate.svg',
    accent: {
      badge: 'border-white/20 text-white',
      border: 'border-white/20',
      glow: 'from-[var(--c-accent)]/20 to-transparent',
      text: 'text-[var(--c-accent)]',
    },
    highlights: [
      'Analyzes traveler customer sentiment curves and contextual feedback metrics',
      'Coordinated technical architecture, user flows, and project milestone completion',
      'Integrated real-time sentiment scoring with responsive visual dashboard graphs'
    ]
  },
  {
    id: 'kumbuyaaa',
    number: '03',
    name: 'Kumbuyaaa',
    category: 'CREATIVE CONTENT GENERATOR',
    projectType: 'CREATIVE TOOL',
    role: 'UI/UX Designer',
    description: 'Kumbuyaaa is a content-generation application designed to streamline creative digital workflows. Focused on creating a clear, intuitive, and visually engaging experience for content creators and digital teams.',
    technologies: ['UI/UX Design', 'React', 'Figma', 'Web APIs'],
    linkText: 'VIEW PROJECT',
    liveUrl: 'https://kumbaya-journeys.lovable.app/',
    githubUrl: 'https://github.com/laverne816',
    image: '/projects/kumbayaaa.svg',
    accent: {
      badge: 'border-white/20 text-white',
      border: 'border-white/20',
      glow: 'from-[var(--c-accent)]/20 to-transparent',
      text: 'text-[var(--c-accent)]',
    },
    highlights: [
      'Engineered an empathetic, visually engaging UI layout for content creators',
      'Developed component hierarchies in Figma and translated to production interfaces',
      'Optimized creative generation flows through iterative user feedback sessions'
    ]
  },
  {
    id: 'prasaconnect',
    number: '04',
    name: 'PrasaConnect',
    category: 'INDUSTRY TRANSIT SOLUTION',
    projectType: 'TRANSIT SYSTEM',
    role: 'Developer',
    description: 'PrasaConnect is an industry-focused digital transit platform developed to resolve commuter scheduling visibility and transit access challenges across urban passenger rail networks.',
    technologies: ['React', 'Transit APIs', 'Mobile Web', 'AI Systems'],
    linkText: 'VIEW PROJECT',
    liveUrl: 'https://metromapai-5t69zzbk.manus.space/',
    githubUrl: 'https://github.com/laverne816',
    image: '/projects/prasaconnect.svg',
    accent: {
      badge: 'border-white/20 text-white',
      border: 'border-white/20',
      glow: 'from-[var(--c-accent)]/20 to-transparent',
      text: 'text-[var(--c-accent)]',
    },
    highlights: [
      'Industry-focused digital solution resolving commuter transit visibility issues',
      'Contributed as frontend and logic developer within a collaborative group team',
      'Architected for high reliability on low-bandwidth mobile devices'
    ]
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-10',
    title: 'Version Control',
    issuer: 'Meta',
    partner: 'Meta / Coursera',
    instructor: 'Meta Experts',
    date: 'OCT 08, 2026',
    verifyUrl: 'https://coursera.org/verify/9UHQNTTJ3MPD',
    credentialCode: '9UHQNTTJ3MPD',
    skillsCovered: ['Version Control Systems', 'Git & GitHub Workflows', 'Branching & Merging', 'CLI & Conflict Resolution', 'Team Collaboration'],
    category: 'Web Development',
    previewImage: '/certificates/cert-10.svg',
    pdfUrl: '/certificates/cert-10.pdf',
    downloadName: 'Laverne_Rollison_Version_Control_Meta.pdf'
  },
  {
    id: 'cert-11',
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    partner: 'Meta / Coursera',
    instructor: 'Meta Experts',
    date: 'OCT 07, 2026',
    verifyUrl: 'https://coursera.org/verify/J0JJJHBOSUCA',
    credentialCode: 'J0JJJHBOSUCA',
    skillsCovered: ['JavaScript ES6+', 'Functions & Object-Oriented JS', 'DOM & Event Driven Architecture', 'Error Handling & Unit Testing (Jest)', 'Asynchronous JavaScript'],
    category: 'Web Development',
    previewImage: '/certificates/cert-11.svg',
    pdfUrl: '/certificates/cert-11.pdf',
    downloadName: 'Laverne_Rollison_Programming_with_JavaScript_Meta.pdf'
  },
  {
    id: 'cert-12',
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    partner: 'Meta / Coursera',
    instructor: 'Meta Experts',
    date: 'OCT 06, 2026',
    verifyUrl: 'https://coursera.org/verify/3DJ0NDGGP314',
    credentialCode: '3DJ0NDGGP314',
    skillsCovered: ['Front-End Web Standards', 'HTML5 & CSS3 Architecture', 'Responsive UI Frameworks', 'Web Accessibility (a11y)', 'Browser Rendering & DevTools'],
    category: 'Web Development',
    previewImage: '/certificates/cert-12.svg',
    pdfUrl: '/certificates/cert-12.pdf',
    downloadName: 'Laverne_Rollison_Intro_Front_End_Development_Meta.pdf'
  },
  {
    id: 'cert-13',
    title: 'Advanced Styling with Responsive Design',
    issuer: 'University of Michigan',
    partner: 'University of Michigan / Coursera',
    instructor: 'Colleen van Lent, Ph.D. & Charles Severance',
    date: 'SEP 23, 2026',
    verifyUrl: 'https://coursera.org/verify/XZDNNLE2GJNH',
    credentialCode: 'XZDNNLE2GJNH',
    skillsCovered: ['Advanced CSS3 Architecture', 'Responsive Design & Breakpoints', 'Mobile-First Layouts', 'CSS Grid & Flexbox Mastery', 'Cross-Browser Compatibility'],
    category: 'Web Development',
    previewImage: '/certificates/cert-13.svg',
    pdfUrl: '/certificates/cert-13.pdf',
    downloadName: 'Laverne_Rollison_Advanced_Styling_Responsive_Design_UMichigan.pdf'
  },
  {
    id: 'cert-14',
    title: 'Interactivity with JavaScript',
    issuer: 'University of Michigan',
    partner: 'University of Michigan / Coursera',
    instructor: 'Colleen van Lent, Ph.D. & Charles Severance',
    date: 'SEP 21, 2026',
    verifyUrl: 'https://coursera.org/verify/ECYTJVR5SQZO',
    credentialCode: 'ECYTJVR5SQZO',
    skillsCovered: ['DOM Manipulation', 'Event Handling & Event Propagation', 'Interactive Form Validation', 'Dynamic Content Rendering', 'Interactive Web Elements'],
    category: 'Web Development',
    previewImage: '/certificates/cert-14.svg',
    pdfUrl: '/certificates/cert-14.pdf',
    downloadName: 'Laverne_Rollison_Interactivity_with_JavaScript_UMichigan.pdf'
  },
  {
    id: 'cert-15',
    title: 'Introduction to CSS3',
    issuer: 'University of Michigan',
    partner: 'University of Michigan / Coursera',
    instructor: 'Colleen van Lent, Ph.D. & Charles Severance',
    date: 'SEP 19, 2026',
    verifyUrl: 'https://coursera.org/verify/XJS9DUXMH7Y8',
    credentialCode: 'XJS9DUXMH7Y8',
    skillsCovered: ['CSS3 Selectors & Specificity', 'Box Model & Positioning', 'Color Systems & Typography', 'Cascading Principles & Inheritance', 'Styling Navigation & Page Layouts'],
    category: 'Web Development',
    previewImage: '/certificates/cert-15.svg',
    pdfUrl: '/certificates/cert-15.pdf',
    downloadName: 'Laverne_Rollison_Introduction_to_CSS3_UMichigan.pdf'
  },
  {
    id: 'cert-16',
    title: 'Introduction to HTML5',
    issuer: 'University of Michigan',
    partner: 'University of Michigan / Coursera',
    instructor: 'Colleen van Lent, Ph.D. & Charles Severance',
    date: 'SEP 16, 2026',
    verifyUrl: 'https://coursera.org/verify/QHXN92V5F66J',
    credentialCode: 'QHXN92V5F66J',
    skillsCovered: ['Semantic HTML5 Elements', 'Document Structure & Hierarchy', 'Web Accessibility Standards', 'Multimedia Integration & Forms', 'SEO & Metadata Best Practices'],
    category: 'Web Development',
    previewImage: '/certificates/cert-16.svg',
    pdfUrl: '/certificates/cert-16.pdf',
    downloadName: 'Laverne_Rollison_Introduction_to_HTML5_UMichigan.pdf'
  },
  {
    id: 'cert-8',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford Online',
    partner: 'Stanford Online / Coursera',
    instructor: 'Andrew Ng',
    date: 'AUG 27, 2026',
    verifyUrl: 'https://coursera.org/verify/RGU5FPTN4MWK',
    credentialCode: 'RGU5FPTN4MWK',
    skillsCovered: ['K-Means Clustering', 'Anomaly Detection', 'Recommender Systems', 'Deep Reinforcement Learning'],
    category: 'Machine Learning',
    previewImage: '/certificates/cert-8.svg',
    pdfUrl: '/certificates/cert-8.pdf',
    downloadName: 'Laverne_Rollison_Unsupervised_Learning_Stanford.pdf'
  },
  {
    id: 'cert-7',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    partner: 'Stanford Online / Coursera',
    instructor: 'Andrew Ng',
    date: 'AUG 24, 2026',
    verifyUrl: 'https://coursera.org/verify/FT75ED3VY6R4',
    credentialCode: 'FT75ED3VY6R4',
    skillsCovered: ['Linear Regression', 'Logistic Regression', 'Gradient Descent', 'Model Evaluation & Tuning'],
    category: 'Machine Learning',
    previewImage: '/certificates/cert-7.svg',
    pdfUrl: '/certificates/cert-7.pdf',
    downloadName: 'Laverne_Rollison_Supervised_Machine_Learning_Stanford.pdf'
  },
  {
    id: 'cert-3',
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI & Amazon Web Services',
    partner: 'AWS / Coursera',
    instructor: 'Antje Barth, Chris Fregly, Shelbee Eigenbrode, Mike Chambers',
    date: 'AUG 24, 2026',
    verifyUrl: 'https://coursera.org/verify/P7YGK3EV3HIG',
    credentialCode: 'P7YGK3EV3HIG',
    skillsCovered: ['LLM Architecture & Transformers', 'Fine-tuning & RLHF', 'AWS GenAI Stack', 'Inference Optimization'],
    category: 'Large Language Models',
    previewImage: '/certificates/cert-3.svg',
    pdfUrl: '/certificates/cert-3.pdf',
    downloadName: 'Laverne_Rollison_Generative_AI_with_LLMs_AWS.pdf'
  },
  {
    id: 'cert-6',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    partner: 'IBM Skills Network / Coursera',
    instructor: 'Joseph Santarcangelo',
    date: 'AUG 13, 2026',
    verifyUrl: 'https://coursera.org/verify/A5PHWJ1JTE9J',
    credentialCode: 'A5PHWJ1JTE9J',
    skillsCovered: ['Python Data Structures', 'Pandas & NumPy', 'Web Scraping & APIs', 'Data Science for AI'],
    category: 'Python & Data Science',
    previewImage: '/certificates/cert-6.svg',
    pdfUrl: '/certificates/cert-6.pdf',
    downloadName: 'Laverne_Rollison_Python_Data_Science_IBM.pdf'
  },
  {
    id: 'cert-5',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    partner: 'Google Cloud Training / Coursera',
    instructor: 'Google Cloud Training',
    date: 'AUG 13, 2026',
    verifyUrl: 'https://coursera.org/verify/5P21ZPZCZLSZ',
    credentialCode: '5P21ZPZCZLSZ',
    skillsCovered: ['Google Cloud GenAI', 'Foundation Models', 'Vertex AI Principles', 'Responsible AI Practices'],
    category: 'Generative AI',
    previewImage: '/certificates/cert-5.svg',
    pdfUrl: '/certificates/cert-5.pdf',
    downloadName: 'Laverne_Rollison_Introduction_to_Generative_AI_GoogleCloud.pdf'
  },
  {
    id: 'cert-4',
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    partner: 'IBM Skills Network / Coursera',
    instructor: 'Rav Ahuja',
    date: 'AUG 12, 2026',
    verifyUrl: 'https://coursera.org/verify/0PB036FZ9FW8',
    credentialCode: '0PB036FZ9FW8',
    skillsCovered: ['Neural Networks', 'Computer Vision & NLP', 'AI Ethics & Society', 'Machine Learning Foundations'],
    category: 'Artificial Intelligence',
    previewImage: '/certificates/cert-4.svg',
    pdfUrl: '/certificates/cert-4.pdf',
    downloadName: 'Laverne_Rollison_Intro_to_AI_IBM.pdf'
  },
  {
    id: 'cert-2',
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM',
    partner: 'IBM Skills Network / Coursera',
    instructor: 'Antonio Cangiano & Rav Ahuja',
    date: 'AUG 11, 2026',
    verifyUrl: 'https://coursera.org/verify/W1YPC78DPCO2',
    credentialCode: 'W1YPC78DPCO2',
    skillsCovered: ['Prompt Engineering Techniques', 'Few-Shot Prompting', 'Chain-of-Thought', 'Generative Workflows'],
    category: 'Generative AI',
    previewImage: '/certificates/cert-2.svg',
    pdfUrl: '/certificates/cert-2.pdf',
    downloadName: 'Laverne_Rollison_Prompt_Engineering_Basics_IBM.pdf'
  },
  {
    id: 'cert-1',
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    partner: 'Coursera',
    instructor: 'Andrew Ng',
    date: 'AUG 11, 2026',
    verifyUrl: 'https://coursera.org/verify/KNGFXVWXXKJG',
    credentialCode: 'KNGFXVWXXKJG',
    skillsCovered: ['AI Terminology', 'AI Strategy & Workflow', 'Ethical AI', 'Technology Readiness'],
    category: 'Artificial Intelligence',
    previewImage: '/certificates/cert-1.svg',
    pdfUrl: '/certificates/cert-1.pdf',
    downloadName: 'Laverne_Rollison_AI_For_Everyone_DeepLearningAI.pdf'
  },
  {
    id: 'cert-9',
    title: 'Google AI Essentials',
    issuer: 'Google',
    partner: 'Google / Coursera',
    instructor: 'Amanda Brophy',
    date: 'MAY 08, 2026',
    verifyUrl: 'https://coursera.org/verify/specialization/ZC3D3GJDY253',
    credentialCode: 'ZC3D3GJDY253',
    skillsCovered: ['AI Productivity Tools', 'Prompt Engineering', 'Responsible AI Practices', 'Workflow Optimization'],
    category: 'Artificial Intelligence',
    previewImage: '/certificates/cert-9.svg',
    pdfUrl: '/certificates/cert-9.pdf',
    downloadName: 'Laverne_Rollison_Google_AI_Essentials.pdf'
  }
];

export const SKILL_ITEMS: SkillItem[] = [
  { id: 'js', name: 'JavaScript', category: 'WEB DEVELOPMENT', contextualLabel: 'Core Language & ESNext', size: 'xl', weight: 'extrabold', isUppercase: true },
  { id: 'react', name: 'React', category: 'WEB DEVELOPMENT', contextualLabel: 'Frontend Architecture & Hooks', size: 'xl', weight: 'extrabold', isUppercase: true },
  { id: 'rn', name: 'React Native', category: 'WEB DEVELOPMENT', contextualLabel: 'Cross-Platform Mobile Apps', size: 'lg', weight: 'bold', isUppercase: true },
  { id: 'apis', name: 'APIs', category: 'WEB DEVELOPMENT', contextualLabel: 'RESTful Endpoints & Integration', size: 'md', weight: 'semibold', isUppercase: true },
  { id: 'git', name: 'Git', category: 'TOOLS', contextualLabel: 'Version Control & Team Workflows', size: 'lg', weight: 'bold', isUppercase: true },
  { id: 'ui', name: 'UI Design', category: 'UI/UX DESIGN', contextualLabel: 'Visual Systems, Typography & Spacing', size: 'xl', weight: 'extrabold', isUppercase: true },
  { id: 'ux', name: 'UX Design', category: 'UI/UX DESIGN', contextualLabel: 'User Research, Journey Maps & Wireframes', size: 'lg', weight: 'bold', isUppercase: true },
  { id: 'genai', name: 'Generative AI', category: 'AI & EMERGING TECHNOLOGY', contextualLabel: 'Google Cloud & DeepLearning.AI Certified', size: 'xl', weight: 'extrabold', isUppercase: true },
  { id: 'prompt', name: 'Prompt Engineering', category: 'AI & EMERGING TECHNOLOGY', contextualLabel: 'IBM Skills Network Certified', size: 'lg', weight: 'bold', isUppercase: true },
  { id: 'llm', name: 'Large Language Models', category: 'AI & EMERGING TECHNOLOGY', contextualLabel: 'AWS & DeepLearning.AI Certified', size: 'lg', weight: 'semibold', isUppercase: true },
  { id: 'ml', name: 'Machine Learning', category: 'AI & EMERGING TECHNOLOGY', contextualLabel: 'Stanford Online & DeepLearning.AI Certified', size: 'md', weight: 'semibold', isUppercase: true },
  { id: 'python-ai', name: 'Python for AI & Data', category: 'AI & EMERGING TECHNOLOGY', contextualLabel: 'IBM Certified Specialist', size: 'md', weight: 'medium', isUppercase: true },
];
