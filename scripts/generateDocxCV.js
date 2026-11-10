import fs from 'fs';
import path from 'path';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  UnderlineType,
  convertInchesToTwip
} from 'docx';

const ACCENT_COLOR = 'C28864'; // Portfolio warm terracotta
const TEXT_DARK = '161513';
const TEXT_MUTED = '55504A';
const BORDER_COLOR = 'D4CFC7';

function createSectionHeading(title) {
  return new Paragraph({
    spacing: { before: 280, after: 120 },
    border: {
      bottom: {
        color: ACCENT_COLOR,
        space: 4,
        value: BorderStyle.SINGLE,
        size: 12
      }
    },
    children: [
      new TextRun({
        text: title.toUpperCase(),
        font: 'Calibri',
        size: 22, // 11pt
        bold: true,
        color: ACCENT_COLOR,
        characterSpacing: 40
      })
    ]
  });
}

function createBullet(text, boldPrefix = '') {
  const children = [];
  if (boldPrefix) {
    children.push(
      new TextRun({
        text: boldPrefix + ' ',
        font: 'Calibri',
        size: 20, // 10pt
        bold: true,
        color: TEXT_DARK
      })
    );
  }
  children.push(
    new TextRun({
      text: text,
      font: 'Calibri',
      size: 20,
      color: TEXT_DARK
    })
  );

  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 40, after: 60 },
    children
  });
}

async function generateCV() {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 20,
            color: TEXT_DARK
          }
        }
      }
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.75),
              bottom: convertInchesToTwip(0.75),
              left: convertInchesToTwip(0.8),
              right: convertInchesToTwip(0.8)
            }
          }
        },
        children: [
          // Header: Name
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
            children: [
              new TextRun({
                text: 'LAVERNE ROLLISON',
                font: 'Georgia',
                size: 44, // 22pt
                bold: true,
                color: TEXT_DARK
              })
            ]
          }),

          // Header: Role Tagline
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
            children: [
              new TextRun({
                text: 'WEB DEVELOPER ASSOCIATE  |  UI/UX DESIGNER',
                font: 'Calibri',
                size: 20,
                bold: true,
                color: ACCENT_COLOR,
                characterSpacing: 30
              })
            ]
          }),

          // Header: Contact Info Row
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 },
            border: {
              bottom: {
                color: BORDER_COLOR,
                space: 6,
                value: BorderStyle.SINGLE,
                size: 6
              }
            },
            children: [
              new TextRun({ text: 'Cape Town, South Africa   •   ', font: 'Calibri', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '+27 82 542 1405   •   ', font: 'Calibri', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: 'rollisonlaverne@gmail.com   •   ', font: 'Calibri', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: 'github.com/rollisonlaverne', font: 'Calibri', size: 18, color: ACCENT_COLOR })
            ]
          }),

          // 1. PROFESSIONAL SUMMARY
          createSectionHeading('Professional Summary'),
          new Paragraph({
            spacing: { before: 80, after: 140 },
            children: [
              new TextRun({
                text: "Proactive and motivated Information and Communication Technology (ICT) graduate currently serving as a Web Developer Associate at CAPACITI. Hands-on experience across web and mobile application engineering, modern component architecture, and user-centred UI/UX design. Certified by Stanford Online, DeepLearning.AI, IBM, AWS, and Google Cloud in modern Artificial Intelligence, Machine Learning, and Large Language Model workflows. Combines structured software engineering principles with keen design intuition to build scalable, intuitive, and accessible digital products.",
                font: 'Calibri',
                size: 21,
                color: TEXT_DARK
              })
            ]
          }),

          // 2. TECHNICAL SKILLS & CAPABILITIES
          createSectionHeading('Technical Skills & Capabilities'),
          new Paragraph({
            spacing: { before: 60, after: 40 },
            children: [
              new TextRun({ text: '• Frontend & Mobile Development: ', bold: true, color: TEXT_DARK, size: 20 }),
              new TextRun({ text: 'JavaScript (ESNext), TypeScript, React, React Native, HTML5, CSS3/Tailwind CSS, Responsive Web Design.', color: TEXT_DARK, size: 20 })
            ]
          }),
          new Paragraph({
            spacing: { before: 40, after: 40 },
            children: [
              new TextRun({ text: '• Backend & Architecture: ', bold: true, color: TEXT_DARK, size: 20 }),
              new TextRun({ text: 'Java, Spring Boot, Python, RESTful API Integration, Asynchronous Programming, Node.js.', color: TEXT_DARK, size: 20 })
            ]
          }),
          new Paragraph({
            spacing: { before: 40, after: 40 },
            children: [
              new TextRun({ text: '• AI, Machine Learning & Data: ', bold: true, color: TEXT_DARK, size: 20 }),
              new TextRun({ text: 'Python Data Science (NumPy, Pandas), Supervised & Unsupervised ML, LLM Prompt Engineering, Natural Language Processing, AI Workflow Automation.', color: TEXT_DARK, size: 20 })
            ]
          }),
          new Paragraph({
            spacing: { before: 40, after: 40 },
            children: [
              new TextRun({ text: '• UI/UX Design & Prototyping: ', bold: true, color: TEXT_DARK, size: 20 }),
              new TextRun({ text: 'Figma, Wireframing, User Journey Mapping, Design Systems, Typography & Color Theory, Usability Evaluation.', color: TEXT_DARK, size: 20 })
            ]
          }),
          new Paragraph({
            spacing: { before: 40, after: 120 },
            children: [
              new TextRun({ text: '• Tooling & Engineering Foundations: ', bold: true, color: TEXT_DARK, size: 20 }),
              new TextRun({ text: 'Git, GitHub, GitLab, VS Code, IntelliJ IDEA, Agile/Scrum Methodologies, Networking Fundamentals, IT Troubleshooting.', color: TEXT_DARK, size: 20 })
            ]
          }),

          // 3. PROFESSIONAL EXPERIENCE
          createSectionHeading('Professional Experience'),

          // Role 1: CAPACITI
          new Paragraph({
            spacing: { before: 80, after: 30 },
            children: [
              new TextRun({ text: 'CAPACITI', bold: true, font: 'Georgia', size: 24, color: TEXT_DARK }),
              new TextRun({ text: '  — Cape Town, South Africa', font: 'Calibri', size: 20, color: TEXT_MUTED }),
              new TextRun({ text: '\tCURRENT', bold: true, font: 'Calibri', size: 18, color: ACCENT_COLOR })
            ]
          }),
          new Paragraph({
            spacing: { before: 0, after: 60 },
            children: [
              new TextRun({ text: 'Web Developer Associate  |  Skill Acceleration Programme', italics: true, bold: true, size: 20, color: ACCENT_COLOR })
            ]
          }),
          createBullet('Collaborated on enterprise technology initiatives and client-driven web applications, applying modern React and JavaScript stacks.', 'Project Delivery:'),
          createBullet('Completed intensive Skill Acceleration Programme focusing on advanced full-stack workflows, cloud integrations, and agile software delivery.', 'Technical Acceleration:'),
          createBullet('Designed accessible user interfaces adhering to UX principles, responsive breakpoints, and modern frontend design systems.', 'UI/UX Implementation:'),
          createBullet('Participated in cross-functional sprint planning, pair programming, code reviews, and version-controlled Git pipelines.', 'Collaboration:'),

          // Role 2: Plum Systems
          new Paragraph({
            spacing: { before: 140, after: 30 },
            children: [
              new TextRun({ text: 'Plum Systems', bold: true, font: 'Georgia', size: 24, color: TEXT_DARK }),
              new TextRun({ text: '  — Cape Town, South Africa', font: 'Calibri', size: 20, color: TEXT_MUTED }),
              new TextRun({ text: '\t1 YEAR', bold: true, font: 'Calibri', size: 18, color: ACCENT_COLOR })
            ]
          }),
          new Paragraph({
            spacing: { before: 0, after: 60 },
            children: [
              new TextRun({ text: 'Junior Developer Intern', italics: true, bold: true, size: 20, color: ACCENT_COLOR })
            ]
          }),
          createBullet('Contributed to core frontend development, bug triage, and feature enhancements across client-facing web systems.', 'Software Engineering:'),
          createBullet('Maintained clean code standards, performed unit testing, and implemented reusable modular JavaScript components.', 'Component Architecture:'),
          createBullet('Collaborated with senior engineers on system improvements, technical documentation, and relational database queries.', 'System Improvement:'),

          // 4. EDUCATION
          createSectionHeading('Education & Academic Credentials'),
          new Paragraph({
            spacing: { before: 80, after: 30 },
            children: [
              new TextRun({ text: 'Diploma in Information and Communication Technology (ICT): Applications Development', bold: true, size: 21, color: TEXT_DARK })
            ]
          }),
          new Paragraph({
            spacing: { before: 0, after: 80 },
            children: [
              new TextRun({ text: 'Comprehensive 3-year tertiary qualification covering object-oriented programming (Java), system analysis and design, database management, mobile development, and modern software engineering life cycles.', size: 19, color: TEXT_MUTED })
            ]
          }),
          new Paragraph({
            spacing: { before: 60, after: 30 },
            children: [
              new TextRun({ text: 'Higher Certificate in Information and Communication Technology (ICT)', bold: true, size: 21, color: TEXT_DARK })
            ]
          }),
          new Paragraph({
            spacing: { before: 0, after: 120 },
            children: [
              new TextRun({ text: 'Foundational certification covering network infrastructure, systems architecture, troubleshooting, and enterprise IT fundamentals.', size: 19, color: TEXT_MUTED })
            ]
          }),

          // 5. FEATURED PROJECTS
          createSectionHeading('Featured Technical Projects'),

          // Project 1: RoamRate
          new Paragraph({
            spacing: { before: 80, after: 20 },
            children: [
              new TextRun({ text: 'RoamRate — Sentiment Analysis Travel Platform', bold: true, font: 'Georgia', size: 22, color: TEXT_DARK }),
              new TextRun({ text: ' (Group Project — Group Leader)', italics: true, size: 19, color: ACCENT_COLOR }),
              new TextRun({ text: '\tTech: React, Sentiment NLP, REST APIs', size: 18, color: TEXT_MUTED })
            ]
          }),
          createBullet('Served as Group Leader, directing task allocation, sprint milestones, and code integration across team members.'),
          createBullet('Built real-time sentiment analysis graphs to evaluate traveler reviews and synthesize structured customer feedback.'),

          // Project 2: Kumbuyaaa
          new Paragraph({
            spacing: { before: 80, after: 20 },
            children: [
              new TextRun({ text: 'Kumbuyaaa — Creative Content Generator', bold: true, font: 'Georgia', size: 22, color: TEXT_DARK }),
              new TextRun({ text: ' (Group Project — UI/UX Designer)', italics: true, size: 19, color: ACCENT_COLOR }),
              new TextRun({ text: '\tTech: React, Figma, UI/UX Design, APIs', size: 18, color: TEXT_MUTED })
            ]
          }),
          createBullet('Led UI/UX design and wireframing for Kumbuyaaa content generator in Figma, optimizing user onboarding.'),
          createBullet('Designed empathetic, intuitive user journey flows and translated component design tokens directly into React code.'),

          // Project 3: PrasaConnect
          new Paragraph({
            spacing: { before: 80, after: 20 },
            children: [
              new TextRun({ text: 'PrasaConnect — Industry AI Transit Solution', bold: true, font: 'Georgia', size: 22, color: TEXT_DARK }),
              new TextRun({ text: ' (Group Project — Developer)', italics: true, size: 19, color: ACCENT_COLOR }),
              new TextRun({ text: '\tTech: React, Transit APIs, Mobile Web, AI Systems', size: 18, color: TEXT_MUTED })
            ]
          }),
          createBullet('Developed frontend client logic and interactive map interfaces for PrasaConnect, improving commuter transit visibility.'),
          createBullet('Collaborated with engineering peers on high reliability and performance across low-bandwidth mobile devices.'),

          // Project 4: THE BOARD
          new Paragraph({
            spacing: { before: 80, after: 20 },
            children: [
              new TextRun({ text: 'THE BOARD — SA Youth Opportunities Portal', bold: true, font: 'Georgia', size: 22, color: TEXT_DARK }),
              new TextRun({ text: ' (Web Application — Frontend Developer)', italics: true, size: 19, color: ACCENT_COLOR }),
              new TextRun({ text: '\tTech: React, TypeScript, Tailwind CSS, Web APIs', size: 18, color: TEXT_MUTED })
            ]
          }),
          createBullet('Engineered a responsive, high-performance web portal aggregating verified learnerships, internships, bursaries, and career opportunities.'),
          createBullet('Architected interactive multi-criteria filtering by province, opportunity category, and real-time search queries.'),
          createBullet('Built with a modern dark-mode aesthetic focused on fast mobile load times and zero-fee youth accessibility.'),

          // 6. VERIFIED CERTIFICATIONS
          createSectionHeading('Verified Professional Certifications'),

          new Paragraph({
            spacing: { before: 80, after: 30 },
            children: [
              new TextRun({ text: '1. Version Control', bold: true, size: 20 }),
              new TextRun({ text: ' — Meta Experts / Meta\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: 9UHQNTTJ3MPD | Issued: October 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '2. Programming with JavaScript', bold: true, size: 20 }),
              new TextRun({ text: ' — Meta Experts / Meta\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: J0JJJHBOSUCA | Issued: October 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '3. Introduction to Front-End Development', bold: true, size: 20 }),
              new TextRun({ text: ' — Meta Experts / Meta\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: 3DJ0NDGGP314 | Issued: October 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '4. Advanced Styling with Responsive Design', bold: true, size: 20 }),
              new TextRun({ text: ' — University of Michigan (Colleen van Lent & Charles Severance)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: XZDNNLE2GJNH | Issued: September 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '5. Interactivity with JavaScript', bold: true, size: 20 }),
              new TextRun({ text: ' — University of Michigan (Colleen van Lent & Charles Severance)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: ECYTJVR5SQZO | Issued: September 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '6. Introduction to CSS3', bold: true, size: 20 }),
              new TextRun({ text: ' — University of Michigan (Colleen van Lent & Charles Severance)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: XJS9DUXMH7Y8 | Issued: September 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '7. Introduction to HTML5', bold: true, size: 20 }),
              new TextRun({ text: ' — University of Michigan (Colleen van Lent & Charles Severance)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: QHXN92V5F66J | Issued: September 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '8. Unsupervised Learning, Recommenders, Reinforcement Learning', bold: true, size: 20 }),
              new TextRun({ text: ' — DeepLearning.AI & Stanford Online (Andrew Ng)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: RGU5FPTN4MWK | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '9. Supervised Machine Learning: Regression and Classification', bold: true, size: 20 }),
              new TextRun({ text: ' — DeepLearning.AI & Stanford Online (Andrew Ng)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: FT75ED3VY6R4 | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '10. Generative AI with Large Language Models', bold: true, size: 20 }),
              new TextRun({ text: ' — DeepLearning.AI & Amazon Web Services (AWS)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: P7YGK3EV3HIG | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '11. Python for Data Science, AI & Development', bold: true, size: 20 }),
              new TextRun({ text: ' — IBM Skills Network\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: A5PHWJ1JTE9J | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '12. Introduction to Generative AI', bold: true, size: 20 }),
              new TextRun({ text: ' — Google Cloud Training\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: 5P21ZPZCZLSZ | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '13. Introduction to Artificial Intelligence (AI)', bold: true, size: 20 }),
              new TextRun({ text: ' — IBM Skills Network\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: 0PB036FZ9FW8 | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '14. Generative AI: Prompt Engineering Basics', bold: true, size: 20 }),
              new TextRun({ text: ' — IBM Skills Network\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: W1YPC78DPCO2 | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 30 },
            children: [
              new TextRun({ text: '15. AI For Everyone', bold: true, size: 20 }),
              new TextRun({ text: ' — DeepLearning.AI (Andrew Ng)\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: KNGFXVWXXKJG | Issued: August 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          }),

          new Paragraph({
            spacing: { before: 40, after: 60 },
            children: [
              new TextRun({ text: '16. Google AI Essentials Specialization', bold: true, size: 20 }),
              new TextRun({ text: ' — Google\n', size: 18, color: TEXT_MUTED }),
              new TextRun({ text: '    Credential ID: ZC3D3GJDY253 | Issued: May 2026', size: 17, italics: true, color: ACCENT_COLOR })
            ]
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const file1 = path.join(publicDir, 'Laverne_Rollison_CV.docx');
  const file2 = path.join(publicDir, 'cv.docx');

  fs.writeFileSync(file1, buffer);
  fs.writeFileSync(file2, buffer);

  console.log(`Successfully generated:\n- ${file1} (${buffer.length} bytes)\n- ${file2} (${buffer.length} bytes)`);
}

generateCV().catch(err => {
  console.error('Failed to generate DOCX CV:', err);
  process.exit(1);
});
