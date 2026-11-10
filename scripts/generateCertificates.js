import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const certs = [
  {
    id: 'cert-10',
    title: 'Version Control',
    issuer: 'Meta',
    orgType: 'meta',
    date: 'Oct 8, 2026',
    code: '9UHQNTTJ3MPD',
    verifyUrl: 'https://coursera.org/verify/9UHQNTTJ3MPD',
    instructorText: 'Taught by Meta Experts'
  },
  {
    id: 'cert-11',
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    orgType: 'meta',
    date: 'Oct 7, 2026',
    code: 'J0JJJHBOSUCA',
    verifyUrl: 'https://coursera.org/verify/J0JJJHBOSUCA',
    instructorText: 'Taught by Meta Experts'
  },
  {
    id: 'cert-12',
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    orgType: 'meta',
    date: 'Oct 6, 2026',
    code: '3DJ0NDGGP314',
    verifyUrl: 'https://coursera.org/verify/3DJ0NDGGP314',
    instructorText: 'Taught by Meta Experts'
  },
  {
    id: 'cert-13',
    title: 'Advanced Styling with Responsive Design',
    issuer: 'University of Michigan',
    orgType: 'umich',
    date: 'Sep 23, 2026',
    code: 'XZDNNLE2GJNH',
    verifyUrl: 'https://coursera.org/verify/XZDNNLE2GJNH',
    instructorText: 'Colleen van Lent, Ph.D. & Charles Severance'
  },
  {
    id: 'cert-14',
    title: 'Interactivity with JavaScript',
    issuer: 'University of Michigan',
    orgType: 'umich',
    date: 'Sep 21, 2026',
    code: 'ECYTJVR5SQZO',
    verifyUrl: 'https://coursera.org/verify/ECYTJVR5SQZO',
    instructorText: 'Colleen van Lent, Ph.D. & Charles Severance'
  },
  {
    id: 'cert-15',
    title: 'Introduction to CSS3',
    issuer: 'University of Michigan',
    orgType: 'umich',
    date: 'Sep 19, 2026',
    code: 'XJS9DUXMH7Y8',
    verifyUrl: 'https://coursera.org/verify/XJS9DUXMH7Y8',
    instructorText: 'Colleen van Lent, Ph.D. & Charles Severance'
  },
  {
    id: 'cert-16',
    title: 'Introduction to HTML5',
    issuer: 'University of Michigan',
    orgType: 'umich',
    date: 'Sep 16, 2026',
    code: 'QHXN92V5F66J',
    verifyUrl: 'https://coursera.org/verify/QHXN92V5F66J',
    instructorText: 'Colleen van Lent, Ph.D. & Charles Severance'
  }
];

function generateMetaSVG(cert) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap');
      .serif-name { font-family: 'Playfair Display', Georgia, serif; font-size: 40px; font-weight: 700; fill: #1E2229; letter-spacing: -0.5px; }
      .serif-title { font-family: 'Playfair Display', Georgia, serif; font-size: 28px; font-weight: 700; fill: #1E2229; line-height: 1.25; }
      .sans-bold { font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 700; }
      .sans-med { font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 500; }
      .sans-reg { font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 400; }
    </style>
  </defs>

  <!-- Background White Paper -->
  <rect width="1200" height="850" fill="#FFFFFF" />

  <!-- Outer Double Hairline Frame matching Coursera layout -->
  <rect x="16" y="16" width="1168" height="818" fill="none" stroke="#C8C8C8" stroke-width="1.5" />
  <rect x="22" y="22" width="1156" height="806" fill="none" stroke="#E2E2E2" stroke-width="0.75" />
  <rect x="12" y="12" width="8" height="8" fill="#B0B0B0" />
  <rect x="1180" y="12" width="8" height="8" fill="#B0B0B0" />
  <rect x="12" y="830" width="8" height="8" fill="#B0B0B0" />
  <rect x="1180" y="830" width="8" height="8" fill="#B0B0B0" />

  <!-- Right-Hand Side Light Panel -->
  <rect x="760" y="23" width="417" height="700" fill="#F8F8F8" />
  <line x1="760" y1="23" x2="760" y2="723" stroke="#ECECEC" stroke-width="1" />

  <!-- RIGHT COLUMN: COURSE CERTIFICATE -->
  <g transform="translate(970, 115)">
    <text x="0" y="0" text-anchor="middle" class="sans-bold" font-size="21" fill="#222222" letter-spacing="3.5">COURSE</text>
    <text x="0" y="28" text-anchor="middle" class="sans-bold" font-size="21" fill="#222222" letter-spacing="3.5">CERTIFICATE</text>
  </g>

  <!-- Iconic Circular Coursera Seal -->
  <g transform="translate(970, 390)">
    <circle cx="0" cy="0" r="105" fill="#FFFFFF" stroke="#333333" stroke-width="2.5" />
    <circle cx="0" cy="0" r="97" fill="none" stroke="#333333" stroke-width="1" stroke-dasharray="3,3" />
    <circle cx="0" cy="0" r="80" fill="none" stroke="#CCCCCC" stroke-width="1" />

    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#444444" letter-spacing="3.5" text-anchor="middle">
      <textPath href="#seal-top-path" startOffset="50%">EDUCATION FOR EVERYONE</textPath>
    </text>
    <path id="seal-top-path" d="M -75,0 A 75,75 0 0,1 75,0" fill="none" />

    <text x="0" y="8" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="26" fill="#0056D2" letter-spacing="-0.5px">coursera</text>

    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10.5" fill="#555555" letter-spacing="3" text-anchor="middle">
      <textPath href="#seal-bottom-path" startOffset="50%">COURSE CERTIFICATE</textPath>
    </text>
    <path id="seal-bottom-path" d="M 72,0 A 72,72 0 0,1 -72,0" fill="none" />
  </g>

  <!-- LEFT COLUMN CONTENT -->
  <!-- Meta Logo -->
  <g transform="translate(100, 100)">
    <path d="M37.5 14.5 C31.8 7.2 24.3 3.5 16.5 3.5 C7.5 3.5 0 11.2 0 20.8 C0 30.5 7.5 38.2 16.5 38.2 C24.2 38.2 31.7 34.6 37.5 27.2 C43.3 34.6 50.8 38.2 58.5 38.2 C67.5 38.2 75 30.5 75 20.8 C75 11.2 67.5 3.5 58.5 3.5 C50.7 3.5 43.2 7.2 37.5 14.5 Z M20 28 C14.5 28 9.5 23.5 9.5 19 C9.5 14.5 14.5 10 20 10 C25 10 29.5 14 33.5 19 C29.5 24 25 28 20 28 Z M55 28 C49.5 28 45.5 24 41.5 19 C45.5 14 50 10 55 10 C60.5 10 65.5 14.5 65.5 19 C65.5 23.5 60.5 28 55 28 Z" fill="#0064E0" transform="scale(0.9)"/>
    <text x="82" y="27" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="700" font-size="34" fill="#1C2B33" letter-spacing="-0.5px">Meta</text>
  </g>

  <!-- Date -->
  <text x="100" y="245" class="sans-reg" font-size="14" fill="#666666" letter-spacing="0.5">${cert.date}</text>

  <!-- Recipient Name -->
  <text x="100" y="300" class="serif-name">Laverne Rollison</text>

  <!-- "has successfully completed" -->
  <text x="100" y="355" class="sans-reg" font-size="14" fill="#666666">has successfully completed</text>

  <!-- Course Title -->
  <text x="100" y="415" class="serif-title">${cert.title}</text>

  <!-- Subtitle -->
  <text x="100" y="455" class="sans-reg" font-size="13" fill="#666666">an online course authorized by Meta and offered through Coursera</text>

  <!-- Meta Signoff at Bottom Left -->
  <g transform="translate(100, 620)">
    <path d="M25 9.6 C21.2 4.8 16.2 2.3 11 2.3 C5 2.3 0 7.4 0 13.8 C0 20.3 5 25.4 11 25.4 C16.1 25.4 21.1 23 25 18.1 C28.8 23 33.8 25.4 39 25.4 C45 25.4 50 20.3 50 13.8 C50 7.4 45 2.3 39 2.3 C33.8 2.3 28.8 4.8 25 9.6 Z" fill="#0064E0" transform="scale(0.8)"/>
    <text x="48" y="16" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="700" font-size="22" fill="#1C2B33">Meta</text>
    <line x1="0" y1="28" x2="280" y2="28" stroke="#DDDDDD" stroke-width="1" />
    <text x="0" y="42" class="sans-reg" font-size="11" fill="#777777">Taught by Meta Experts</text>
  </g>

  <!-- BOTTOM RIGHT VERIFICATION BLOCK -->
  <g transform="translate(1135, 730)" text-anchor="end">
    <text x="0" y="0" class="sans-med" font-size="11.5" fill="#555555">Verify at:</text>
    <text x="0" y="16" class="sans-bold" font-size="11.5" fill="#0056D2" text-decoration="underline">${cert.verifyUrl}</text>
    <text x="0" y="32" class="sans-reg" font-size="10" fill="#777777">Coursera has confirmed the identity of this individual and their</text>
    <text x="0" y="45" class="sans-reg" font-size="10" fill="#777777">participation in the course.</text>
  </g>

  <!-- Legal Disclaimer Footer -->
  <text x="600" y="805" text-anchor="middle" class="sans-reg" font-size="8.5" fill="#999999">
    This certificate attests to the learner's completion of an online course / project delivered via Coursera. It does not constitute formal enrollment at any university or entity.
  </text>
</svg>`;
}

function generateUMichSVG(cert) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;family=Caveat:wght@600;700&amp;display=swap');
      .serif-name { font-family: 'Playfair Display', Georgia, serif; font-size: 40px; font-weight: 700; fill: #1E2229; letter-spacing: -0.5px; }
      .serif-title { font-family: 'Playfair Display', Georgia, serif; font-size: 28px; font-weight: 700; fill: #1E2229; line-height: 1.25; }
      .sans-bold { font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 700; }
      .sans-med { font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 500; }
      .sans-reg { font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 400; }
      .sig-font { font-family: 'Caveat', cursive; font-size: 32px; font-weight: 700; fill: #111111; }
    </style>
  </defs>

  <!-- Background White Paper -->
  <rect width="1200" height="850" fill="#FFFFFF" />

  <!-- Outer Double Hairline Frame matching Coursera layout -->
  <rect x="16" y="16" width="1168" height="818" fill="none" stroke="#C8C8C8" stroke-width="1.5" />
  <rect x="22" y="22" width="1156" height="806" fill="none" stroke="#E2E2E2" stroke-width="0.75" />
  <rect x="12" y="12" width="8" height="8" fill="#B0B0B0" />
  <rect x="1180" y="12" width="8" height="8" fill="#B0B0B0" />
  <rect x="12" y="830" width="8" height="8" fill="#B0B0B0" />
  <rect x="1180" y="830" width="8" height="8" fill="#B0B0B0" />

  <!-- Right-Hand Side Light Panel -->
  <rect x="760" y="23" width="417" height="700" fill="#F8F8F8" />
  <line x1="760" y1="23" x2="760" y2="723" stroke="#ECECEC" stroke-width="1" />

  <!-- RIGHT COLUMN: COURSE CERTIFICATE -->
  <g transform="translate(970, 115)">
    <text x="0" y="0" text-anchor="middle" class="sans-bold" font-size="21" fill="#222222" letter-spacing="3.5">COURSE</text>
    <text x="0" y="28" text-anchor="middle" class="sans-bold" font-size="21" fill="#222222" letter-spacing="3.5">CERTIFICATE</text>
  </g>

  <!-- Iconic Circular Coursera Seal -->
  <g transform="translate(970, 390)">
    <circle cx="0" cy="0" r="105" fill="#FFFFFF" stroke="#333333" stroke-width="2.5" />
    <circle cx="0" cy="0" r="97" fill="none" stroke="#333333" stroke-width="1" stroke-dasharray="3,3" />
    <circle cx="0" cy="0" r="80" fill="none" stroke="#CCCCCC" stroke-width="1" />

    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#444444" letter-spacing="3.5" text-anchor="middle">
      <textPath href="#seal-top-path" startOffset="50%">EDUCATION FOR EVERYONE</textPath>
    </text>
    <path id="seal-top-path" d="M -75,0 A 75,75 0 0,1 75,0" fill="none" />

    <text x="0" y="8" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="26" fill="#0056D2" letter-spacing="-0.5px">coursera</text>

    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10.5" fill="#555555" letter-spacing="3" text-anchor="middle">
      <textPath href="#seal-bottom-path" startOffset="50%">COURSE CERTIFICATE</textPath>
    </text>
    <path id="seal-bottom-path" d="M 72,0 A 72,72 0 0,1 -72,0" fill="none" />
  </g>

  <!-- LEFT COLUMN CONTENT -->
  <!-- University of Michigan Logo (Block M) -->
  <g transform="translate(100, 100)">
    <path d="M0,0 L14,0 L14,8 L19,8 L28,26 L37,8 L42,8 L42,0 L56,0 L56,42 L42,42 L42,34 L37,34 L28,16 L19,34 L14,34 L14,42 L0,42 Z" fill="#FFCB05" />
    <text x="68" y="22" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="19" fill="#00274C" letter-spacing="0.5px">UNIVERSITY OF</text>
    <text x="68" y="42" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="24" fill="#00274C" letter-spacing="0.5px">MICHIGAN</text>
  </g>

  <!-- Date -->
  <text x="100" y="245" class="sans-reg" font-size="14" fill="#666666" letter-spacing="0.5">${cert.date}</text>

  <!-- Recipient Name -->
  <text x="100" y="300" class="serif-name">Laverne Rollison</text>

  <!-- "has successfully completed" -->
  <text x="100" y="355" class="sans-reg" font-size="14" fill="#666666">has successfully completed</text>

  <!-- Course Title -->
  <text x="100" y="415" class="serif-title">${cert.title}</text>

  <!-- Subtitle -->
  <text x="100" y="455" class="sans-reg" font-size="13" fill="#666666">an online course authorized by University of Michigan and offered through Coursera</text>

  <!-- Signatures Block: Colleen van Lent and Charles Severance -->
  <g transform="translate(100, 620)">
    <g transform="translate(0, 0)">
      <text x="0" y="0" class="sig-font">Colleen van Lent</text>
      <line x1="0" y1="12" x2="260" y2="12" stroke="#DDDDDD" stroke-width="1" />
      <text x="0" y="26" class="sans-bold" font-size="10" fill="#444444">Colleen van Lent, Ph.D.</text>
      <text x="0" y="39" class="sans-reg" font-size="9.5" fill="#666666">Teaching Professor and Lecturer IV in Information</text>
      <text x="0" y="52" class="sans-reg" font-size="9.5" fill="#666666">School of Information</text>
    </g>

    <g transform="translate(290, 0)">
      <text x="0" y="0" class="sig-font">Charles Severance</text>
      <line x1="0" y1="12" x2="260" y2="12" stroke="#DDDDDD" stroke-width="1" />
      <text x="0" y="26" class="sans-bold" font-size="10" fill="#444444">Charles Severance</text>
      <text x="0" y="39" class="sans-reg" font-size="9.5" fill="#666666">Clinical Professor of Information</text>
      <text x="0" y="52" class="sans-reg" font-size="9.5" fill="#666666">School of Information</text>
    </g>
  </g>

  <!-- BOTTOM RIGHT VERIFICATION BLOCK -->
  <g transform="translate(1135, 730)" text-anchor="end">
    <text x="0" y="0" class="sans-med" font-size="11.5" fill="#555555">Verify at:</text>
    <text x="0" y="16" class="sans-bold" font-size="11.5" fill="#0056D2" text-decoration="underline">${cert.verifyUrl}</text>
    <text x="0" y="32" class="sans-reg" font-size="10" fill="#777777">Coursera has confirmed the identity of this individual and their</text>
    <text x="0" y="45" class="sans-reg" font-size="10" fill="#777777">participation in the course.</text>
  </g>

  <!-- Legal Disclaimer Footer -->
  <text x="600" y="805" text-anchor="middle" class="sans-reg" font-size="8.5" fill="#999999">
    This certificate attests to the learner's completion of an online course / project delivered via Coursera. It does not constitute formal enrollment at any university or entity.
  </text>
</svg>`;
}

async function createPDF(cert) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]); // A4 landscape
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontTimesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontTimesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  // Background and borders
  page.drawRectangle({
    x: 0,
    y: 0,
    width: 842,
    height: 595,
    color: rgb(1, 1, 1)
  });

  page.drawRectangle({
    x: 15,
    y: 15,
    width: 812,
    height: 565,
    borderColor: rgb(0.78, 0.78, 0.78),
    borderWidth: 1.5
  });

  page.drawRectangle({
    x: 20,
    y: 20,
    width: 802,
    height: 555,
    borderColor: rgb(0.88, 0.88, 0.88),
    borderWidth: 0.75
  });

  // Right column background
  page.drawRectangle({
    x: 550,
    y: 20,
    width: 272,
    height: 555,
    color: rgb(0.97, 0.97, 0.97)
  });

  // Header Left: Organization
  page.drawText(cert.issuer.toUpperCase(), {
    x: 50,
    y: 520,
    size: 20,
    font: fontHelveticaBold,
    color: rgb(0.12, 0.14, 0.18)
  });

  // Right side: COURSE CERTIFICATE
  page.drawText('COURSE', {
    x: 640,
    y: 500,
    size: 15,
    font: fontHelveticaBold,
    color: rgb(0.15, 0.15, 0.15)
  });
  page.drawText('CERTIFICATE', {
    x: 620,
    y: 480,
    size: 15,
    font: fontHelveticaBold,
    color: rgb(0.15, 0.15, 0.15)
  });

  // Seal circle approximation
  page.drawCircle({
    x: 686,
    y: 330,
    size: 60,
    borderColor: rgb(0.2, 0.2, 0.2),
    borderWidth: 1.5,
    color: rgb(1, 1, 1)
  });
  page.drawText('coursera', {
    x: 660,
    y: 325,
    size: 14,
    font: fontHelveticaBold,
    color: rgb(0, 0.34, 0.82)
  });

  // Left Content
  page.drawText(cert.date, {
    x: 50,
    y: 430,
    size: 11,
    font: fontHelvetica,
    color: rgb(0.4, 0.4, 0.4)
  });

  page.drawText('Laverne Rollison', {
    x: 50,
    y: 380,
    size: 26,
    font: fontTimesRomanBold,
    color: rgb(0.1, 0.12, 0.15)
  });

  page.drawText('has successfully completed', {
    x: 50,
    y: 340,
    size: 11,
    font: fontHelvetica,
    color: rgb(0.4, 0.4, 0.4)
  });

  page.drawText(cert.title, {
    x: 50,
    y: 295,
    size: 20,
    font: fontTimesRomanBold,
    color: rgb(0.1, 0.12, 0.15)
  });

  page.drawText(`an online course authorized by ${cert.issuer} and offered through Coursera`, {
    x: 50,
    y: 265,
    size: 10,
    font: fontHelvetica,
    color: rgb(0.35, 0.35, 0.35)
  });

  // Instructor
  page.drawText(cert.instructorText, {
    x: 50,
    y: 130,
    size: 10,
    font: fontHelveticaBold,
    color: rgb(0.2, 0.2, 0.2)
  });

  // Verification bottom right
  page.drawText('Verify at:', {
    x: 580,
    y: 80,
    size: 9,
    font: fontHelvetica,
    color: rgb(0.3, 0.3, 0.3)
  });

  page.drawText(cert.verifyUrl, {
    x: 580,
    y: 65,
    size: 9,
    font: fontHelveticaBold,
    color: rgb(0, 0.34, 0.82)
  });

  return await pdfDoc.save();
}

async function main() {
  const dir = path.resolve('public/certificates');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const cert of certs) {
    const svg = cert.orgType === 'meta' ? generateMetaSVG(cert) : generateUMichSVG(cert);
    fs.writeFileSync(path.join(dir, `${cert.id}.svg`), svg, 'utf-8');

    const pdfBytes = await createPDF(cert);
    fs.writeFileSync(path.join(dir, `${cert.id}.pdf`), pdfBytes);

    console.log(`Generated ${cert.id}: ${cert.title}`);
  }
}

main().catch(console.error);
