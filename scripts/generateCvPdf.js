import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function generateCvPdf() {
  const pdfDoc = await PDFDocument.create();

  // Page dimensions: US Letter (612 x 792 points)
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 44;
  const contentWidth = pageWidth - margin * 2;

  // Fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontBoldOblique = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

  // Palette matching portfolio
  const cAccent = rgb(0.76, 0.53, 0.39); // #C28864
  const cDark = rgb(0.09, 0.08, 0.07);   // #161513
  const cBody = rgb(0.25, 0.23, 0.21);   // #403B36
  const cMuted = rgb(0.44, 0.42, 0.38);  // #706A62
  const cRule = rgb(0.88, 0.86, 0.83);   // #E0DCD5

  // Helper text wrap function
  function wrapText(text, maxWidth, font, size) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(candidate, size);
      if (width <= maxWidth) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // Draw section heading
  function drawHeading(page, text, y) {
    page.drawText(text.toUpperCase(), {
      x: margin,
      y: y,
      size: 10,
      font: fontBold,
      color: cAccent
    });
    // underline rule
    page.drawLine({
      start: { x: margin, y: y - 4 },
      end: { x: pageWidth - margin, y: y - 4 },
      thickness: 1,
      color: cAccent
    });
    return y - 18;
  }

  // Draw bullet item
  function drawBullet(page, text, y, boldPrefix = '') {
    const bulletIndent = 14;
    const textIndent = 24;
    const maxWidth = contentWidth - textIndent;

    page.drawText('•', {
      x: margin + bulletIndent,
      y: y,
      size: 9,
      font: fontBold,
      color: cAccent
    });

    let currentY = y;
    if (boldPrefix) {
      const fullText = boldPrefix + ' ' + text;
      const lines = wrapText(fullText, maxWidth, fontRegular, 8.5);
      for (let i = 0; i < lines.length; i++) {
        page.drawText(lines[i], {
          x: margin + textIndent,
          y: currentY,
          size: 8.5,
          font: i === 0 ? fontRegular : fontRegular,
          color: cBody
        });
        currentY -= 12;
      }
    } else {
      const lines = wrapText(text, maxWidth, fontRegular, 8.5);
      for (const line of lines) {
        page.drawText(line, {
          x: margin + textIndent,
          y: currentY,
          size: 8.5,
          font: fontRegular,
          color: cBody
        });
        currentY -= 12;
      }
    }
    return currentY - 2;
  }

  // ==================== PAGE 1 ====================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  let y1 = pageHeight - margin;

  // Header: Name
  page1.drawText('LAVERNE ROLLISON', {
    x: margin,
    y: y1,
    size: 24,
    font: fontBold,
    color: cDark
  });
  y1 -= 18;

  // Header: Tagline / Role
  page1.drawText('WEB DEVELOPER ASSOCIATE  •  UI/UX DESIGNER  •  ICT APPLICATIONS GRADUATE', {
    x: margin,
    y: y1,
    size: 9,
    font: fontBold,
    color: cAccent
  });
  y1 -= 16;

  // Header: Contact Details Bar
  const contactText = 'Cape Town, South Africa  |  +27 82 542 1405  |  rollisonlaverne@gmail.com  |  github.com/rollisonlaverne';
  page1.drawText(contactText, {
    x: margin,
    y: y1,
    size: 8.5,
    font: fontRegular,
    color: cMuted
  });
  y1 -= 10;

  // Decorative header divider line
  page1.drawLine({
    start: { x: margin, y: y1 },
    end: { x: pageWidth - margin, y: y1 },
    thickness: 1.5,
    color: cAccent
  });
  y1 -= 18;

  // 1. PROFESSIONAL SUMMARY
  y1 = drawHeading(page1, 'Professional Summary', y1);
  const summaryText =
    "Proactive Information and Communication Technology (ICT) graduate currently serving as a Web Developer Associate at CAPACITI. Hands-on experience across full-stack web and mobile application engineering, modern component architecture, and user-centred UI/UX design. Certified by Stanford Online, DeepLearning.AI, IBM, AWS, and Google Cloud in modern Artificial Intelligence, Machine Learning, and Large Language Model workflows. Combines structured software engineering principles with keen design intuition to build scalable, intuitive, and accessible digital products.";
  const summaryLines = wrapText(summaryText, contentWidth, fontRegular, 8.5);
  for (const line of summaryLines) {
    page1.drawText(line, { x: margin, y: y1, size: 8.5, font: fontRegular, color: cBody });
    y1 -= 12;
  }
  y1 -= 10;

  // 2. TECHNICAL SKILLS & CAPABILITIES
  y1 = drawHeading(page1, 'Technical Skills & Capabilities', y1);
  const skills = [
    { label: 'Frontend Development:', text: 'JavaScript (ES6+), TypeScript, React, React Native, HTML5, CSS3, Tailwind CSS, Responsive Design.' },
    { label: 'Backend & Systems:', text: 'Java, Spring Boot, Node.js, Express, Python, RESTful API Integration, Asynchronous Architecture.' },
    { label: 'AI & Data Science:', text: 'Python (NumPy, Pandas), Supervised & Unsupervised ML, Prompt Engineering, LLM Integration, NLP.' },
    { label: 'UI/UX & Prototyping:', text: 'Figma, Wireframing, User Flow Architecture, Design Systems, Typography & Color Harmony.' },
    { label: 'Tools & Workflows:', text: 'Git, GitHub, VS Code, Agile/Scrum Methodologies, CI/CD, Vite, Netlify, Vercel, Supabase.' }
  ];
  for (const item of skills) {
    page1.drawText(item.label, { x: margin, y: y1, size: 8.5, font: fontBold, color: cDark });
    const labelWidth = fontBold.widthOfTextAtSize(item.label, 8.5) + 6;
    const textLines = wrapText(item.text, contentWidth - labelWidth, fontRegular, 8.5);
    page1.drawText(textLines[0], { x: margin + labelWidth, y: y1, size: 8.5, font: fontRegular, color: cBody });
    y1 -= 12;
    for (let i = 1; i < textLines.length; i++) {
      page1.drawText(textLines[i], { x: margin + labelWidth, y: y1, size: 8.5, font: fontRegular, color: cBody });
      y1 -= 12;
    }
  }
  y1 -= 8;

  // 3. PROFESSIONAL EXPERIENCE
  y1 = drawHeading(page1, 'Professional Experience', y1);

  // Role 1: CAPACITI
  page1.drawText('CAPACITI', { x: margin, y: y1, size: 10, font: fontBold, color: cDark });
  page1.drawText(' — Cape Town, South Africa', { x: margin + 54, y: y1, size: 9, font: fontRegular, color: cMuted });
  page1.drawText('CURRENT (2026 – PRESENT)', { x: pageWidth - margin - 130, y: y1, size: 8.5, font: fontBold, color: cAccent });
  y1 -= 12;
  page1.drawText('Web Developer Associate  |  Skill Acceleration Programme', { x: margin, y: y1, size: 8.5, font: fontBoldOblique, color: cAccent });
  y1 -= 14;
  y1 = drawBullet(page1, 'Collaborating on enterprise technology initiatives and client-driven web apps applying modern React and JavaScript stacks.', y1, 'Project Delivery:');
  y1 = drawBullet(page1, 'Completed intensive Skill Acceleration Programme focusing on advanced full-stack workflows and agile delivery.', y1, 'Technical Acceleration:');
  y1 = drawBullet(page1, 'Engineered accessible user interfaces adhering to UX principles, responsive breakpoints, and modern frontend systems.', y1, 'UI/UX Implementation:');
  y1 = drawBullet(page1, 'Participating in cross-functional sprint planning, pair programming, code reviews, and version-controlled Git pipelines.', y1, 'Collaboration:');
  y1 -= 6;

  // Role 2: Plum Systems
  page1.drawText('Plum Systems', { x: margin, y: y1, size: 10, font: fontBold, color: cDark });
  page1.drawText(' — Cape Town, South Africa', { x: margin + 74, y: y1, size: 9, font: fontRegular, color: cMuted });
  page1.drawText('1 YEAR INTERNSHIP', { x: pageWidth - margin - 100, y: y1, size: 8.5, font: fontBold, color: cAccent });
  y1 -= 12;
  page1.drawText('Junior Developer Intern', { x: margin, y: y1, size: 8.5, font: fontBoldOblique, color: cAccent });
  y1 -= 14;
  y1 = drawBullet(page1, 'Contributed to core frontend development, bug triage, and feature enhancements across client-facing web systems.', y1, 'Software Engineering:');
  y1 = drawBullet(page1, 'Maintained clean code standards, performed unit testing, and implemented reusable modular JavaScript components.', y1, 'Component Architecture:');
  y1 = drawBullet(page1, 'Collaborated with senior engineers on system improvements, technical documentation, and relational database queries.', y1, 'System Improvement:');
  y1 -= 8;

  // 4. EDUCATION & ACADEMIC CREDENTIALS
  y1 = drawHeading(page1, 'Education & Academic Qualifications', y1);

  page1.drawText('Diploma in ICT: Applications Development', { x: margin, y: y1, size: 9.5, font: fontBold, color: cDark });
  y1 -= 12;
  page1.drawText('Comprehensive tertiary qualification covering Java object-oriented programming, system analysis & design, database management, mobile development, and modern software engineering life cycles.', { x: margin, y: y1, size: 8, font: fontRegular, color: cBody });
  y1 -= 16;

  page1.drawText('Higher Certificate in Information and Communication Technology (ICT)', { x: margin, y: y1, size: 9.5, font: fontBold, color: cDark });
  y1 -= 12;
  page1.drawText('Foundational certification covering network infrastructure, computer architecture, systems troubleshooting, and enterprise IT fundamentals.', { x: margin, y: y1, size: 8, font: fontRegular, color: cBody });

  // Footer Page 1
  page1.drawText('Laverne Rollison  •  Curriculum Vitae', { x: margin, y: 22, size: 8, font: fontRegular, color: cMuted });
  page1.drawText('Page 1 of 2', { x: pageWidth - margin - 40, y: 22, size: 8, font: fontRegular, color: cMuted });

  // ==================== PAGE 2 ====================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  let y2 = pageHeight - margin;

  // Mini Header Page 2
  page2.drawText('LAVERNE ROLLISON  •  CURRICULUM VITAE', { x: margin, y: y2, size: 10, font: fontBold, color: cAccent });
  page2.drawText('Featured Projects & Verified Credentials', { x: pageWidth - margin - 180, y: y2, size: 8.5, font: fontRegular, color: cMuted });
  y2 -= 8;
  page2.drawLine({
    start: { x: margin, y: y2 },
    end: { x: pageWidth - margin, y: y2 },
    thickness: 1,
    color: cRule
  });
  y2 -= 18;

  // 5. FEATURED TECHNICAL PROJECTS
  y2 = drawHeading(page2, 'Featured Technical Projects', y2);

  // Project 1: THE BOARD
  page2.drawText('01. THE BOARD — South Africa Youth Opportunities Portal', { x: margin, y: y2, size: 9.5, font: fontBold, color: cDark });
  page2.drawText('Web Application  |  Frontend Developer', { x: pageWidth - margin - 170, y: y2, size: 8, font: fontBold, color: cAccent });
  y2 -= 12;
  page2.drawText('Live Demo: theboardyouthportal.netlify.app  |  Tech: React, TypeScript, Tailwind CSS, Web APIs', { x: margin, y: y2, size: 8, font: fontOblique, color: cMuted });
  y2 -= 12;
  y2 = drawBullet(page2, 'Engineered a high-performance web portal aggregating verified bursaries, internships, learnerships, and jobs for South African youth.', y2);
  y2 = drawBullet(page2, 'Architected real-time multi-criteria filtering by province, opportunity category, and instant search queries with zero-latency response.', y2);
  y2 = drawBullet(page2, 'Crafted responsive modern user experience with mobile optimization ensuring accessible browsing on low-bandwidth networks.', y2);
  y2 -= 6;

  // Project 2: RoamRate
  page2.drawText('02. RoamRate — Sentiment Analysis Travel Platform', { x: margin, y: y2, size: 9.5, font: fontBold, color: cDark });
  page2.drawText('Group Project  |  Group Leader', { x: pageWidth - margin - 130, y: y2, size: 8, font: fontBold, color: cAccent });
  y2 -= 12;
  page2.drawText('Tech: React, Sentiment NLP, REST APIs, Tailwind CSS', { x: margin, y: y2, size: 8, font: fontOblique, color: cMuted });
  y2 -= 12;
  y2 = drawBullet(page2, 'Directed team task delegation, sprint milestones, and code reviews while developing core frontend review dashboard.', y2);
  y2 = drawBullet(page2, 'Integrated sentiment analysis pipeline turning subjective traveler commentary into quantitative emotional breakdown scores.', y2);
  y2 -= 6;

  // Project 3: Kumbayaaa
  page2.drawText('03. Kumbayaaa — Creative Content Generator', { x: margin, y: y2, size: 9.5, font: fontBold, color: cDark });
  page2.drawText('Group Project  |  UI/UX Designer', { x: pageWidth - margin - 135, y: y2, size: 8, font: fontBold, color: cAccent });
  y2 -= 12;
  page2.drawText('Tech: React, Figma, UI/UX Design Systems, APIs', { x: margin, y: y2, size: 8, font: fontOblique, color: cMuted });
  y2 -= 12;
  y2 = drawBullet(page2, 'Designed high-fidelity interactive wireframes and design system components in Figma, optimizing creator onboarding.', y2);
  y2 = drawBullet(page2, 'Translated component tokens into reusable React UI elements with smooth transitions and empathetic copy.', y2);
  y2 -= 6;

  // Project 4: PrasaConnect
  page2.drawText('04. PrasaConnect — Industry AI Transit Solution', { x: margin, y: y2, size: 9.5, font: fontBold, color: cDark });
  page2.drawText('Group Project  |  Developer', { x: pageWidth - margin - 120, y: y2, size: 8, font: fontBold, color: cAccent });
  y2 -= 12;
  page2.drawText('Tech: React, Transit APIs, Mobile Web, AI Transit Algorithms', { x: margin, y: y2, size: 8, font: fontOblique, color: cMuted });
  y2 -= 12;
  y2 = drawBullet(page2, 'Implemented interactive transit maps and schedule visibility modules solving commuter timetable transparency challenges.', y2);
  y2 = drawBullet(page2, 'Architected lightweight client state management optimized for fast mobile load times across South African rail corridors.', y2);
  y2 -= 10;

  // 6. VERIFIED PROFESSIONAL CERTIFICATIONS
  y2 = drawHeading(page2, 'Verified Professional Certifications (16 Credentials)', y2);

  const certColWidth = (contentWidth - 16) / 2;
  const col1X = margin;
  const col2X = margin + certColWidth + 16;

  const certsList = [
    { title: 'Version Control', issuer: 'Meta', code: '9UHQNTTJ3MPD' },
    { title: 'Programming with JavaScript', issuer: 'Meta', code: 'J0JJJHBOSUCA' },
    { title: 'Intro to Front-End Development', issuer: 'Meta', code: '3DJ0NDGGP314' },
    { title: 'Advanced Styling Responsive Design', issuer: 'Univ of Michigan', code: 'XZDNNLE2GJNH' },
    { title: 'Interactivity with JavaScript', issuer: 'Univ of Michigan', code: 'ECYTJVR5SQZO' },
    { title: 'Introduction to CSS3', issuer: 'Univ of Michigan', code: 'Verified' },
    { title: 'Introduction to HTML5', issuer: 'Univ of Michigan', code: 'Verified' },
    { title: 'Unsupervised Learning & Recommenders', issuer: 'Stanford Online', code: 'Verified' },
    { title: 'Supervised Machine Learning', issuer: 'Stanford Online', code: 'Verified' },
    { title: 'Generative AI with Large Language Models', issuer: 'AWS / DeepLearning.AI', code: 'Verified' },
    { title: 'Python for Data Science, AI & Dev', issuer: 'IBM', code: 'Verified' },
    { title: 'Introduction to Generative AI', issuer: 'Google Cloud', code: 'Verified' },
    { title: 'Introduction to Artificial Intelligence', issuer: 'IBM', code: 'Verified' },
    { title: 'Generative AI: Prompt Engineering Basics', issuer: 'IBM', code: 'Verified' },
    { title: 'AI for Everyone', issuer: 'DeepLearning.AI', code: 'Verified' },
    { title: 'Google AI Essentials', issuer: 'Google', code: 'Verified' }
  ];

  let currentCertY = y2;
  for (let i = 0; i < certsList.length; i++) {
    const cert = certsList[i];
    const isLeft = i % 2 === 0;
    const xPos = isLeft ? col1X : col2X;

    page2.drawText(`• ${cert.title}`, {
      x: xPos,
      y: currentCertY,
      size: 8,
      font: fontBold,
      color: cDark
    });

    page2.drawText(`${cert.issuer}  |  ${cert.code}`, {
      x: xPos + 10,
      y: currentCertY - 10,
      size: 7,
      font: fontRegular,
      color: cMuted
    });

    if (!isLeft) {
      currentCertY -= 22;
    }
  }

  // Footer Page 2
  page2.drawText('Laverne Rollison  •  Curriculum Vitae  •  rollisonlaverne@gmail.com', { x: margin, y: 22, size: 8, font: fontRegular, color: cMuted });
  page2.drawText('Page 2 of 2', { x: pageWidth - margin - 40, y: 22, size: 8, font: fontRegular, color: cMuted });

  const pdfBytes = await pdfDoc.save();

  // Save to public destinations
  const targetDir = path.resolve('public');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = [
    'cv.pdf',
    'Laverne_Rollison_CV.pdf',
    'Laverne Rollison .pdf'
  ];

  for (const fileName of files) {
    fs.writeFileSync(path.join(targetDir, fileName), pdfBytes);
    console.log(`Saved: public/${fileName}`);
  }

  // Also write to dist if dist exists
  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) {
    for (const fileName of files) {
      fs.writeFileSync(path.join(distDir, fileName), pdfBytes);
      console.log(`Saved: dist/${fileName}`);
    }
  }

  console.log('CV PDF generation completed successfully.');
}

generateCvPdf().catch(console.error);
