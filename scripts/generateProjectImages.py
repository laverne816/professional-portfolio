import os
import base64
import urllib.request

os.makedirs('public/projects', exist_ok=True)

# 1. Download and base64-encode photographic elements
def get_b64(filename, fallback_url):
    if not os.path.exists(filename):
        try:
            print(f"Downloading {filename}...")
            urllib.request.urlretrieve(fallback_url, filename)
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
            return ""
    try:
        with open(filename, 'rb') as f:
            data = f.read()
        ext = 'jpeg' if filename.endswith(('.jpg', '.jpeg')) else 'png'
        return f"data:image/{ext};base64," + base64.b64encode(data).decode('utf-8')
    except Exception as e:
        print(f"Error encoding {filename}: {e}")
        return ""

# Get the photos
b64_versa_portrait = get_b64('versa_portrait.jpg', 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80')
b64_kumbayaaa_coast1 = get_b64('kumbayaaa_coast1.jpg', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80')
b64_kumbayaaa_coast2 = get_b64('kumbayaaa_coast2.jpg', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80')
b64_roamrate_pool = get_b64('roamrate_pool.jpg', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80')

print("Assets prepared. Generating SVGs...")

# ==============================================================================
# 1. TASKMASTER (Flow · Workplace Productivity Assistant)
# ==============================================================================
svg_taskmaster = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" width="1280" height="800">
  <defs>
    <linearGradient id="tm-bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F4F9FA" />
      <stop offset="50%" stop-color="#EFF6F8" />
      <stop offset="100%" stop-color="#E5F2F5" />
    </linearGradient>
    <linearGradient id="tm-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
    <filter id="tm-card-shadow" x="-5%" y="-5%" width="110%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.04" />
    </filter>
    <filter id="tm-input-shadow" x="-3%" y="-5%" width="106%" height="125%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.06" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1280" height="800" fill="url(#tm-bg)" />

  <!-- Top Header Bar -->
  <g transform="translate(140, 36)">
    <rect width="36" height="36" rx="10" fill="#0D9488" />
    <path d="M18 10L19.5 15L24.5 16.5L19.5 18L18 23L16.5 18L11.5 16.5L16.5 15Z" fill="#FFFFFF" />
    <text x="50" y="24" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="20" fill="#0F172A">Flow</text>
    <text x="100" y="24" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#64748B">· Workplace Productivity Assistant</text>
  </g>

  <!-- Center Hero Icon -->
  <g transform="translate(640, 180)">
    <circle cx="0" cy="0" r="34" fill="url(#tm-badge-grad)" />
    <!-- 4-point Sparkle Icon -->
    <path d="M0 -18L3 -3L18 0L3 3L0 18L-3 3L-18 0L-3 -3Z" fill="#FFFFFF" />
    <path d="M10 -12L11 -6L17 -5L11 -4L10 2L9 -4L3 -5L9 -6Z" fill="#FFFFFF" opacity="0.8" />
  </g>

  <!-- Headline -->
  <text x="640" y="275" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="52" letter-spacing="-0.5px">
    <tspan fill="#0F172A">What would you like </tspan>
    <tspan fill="#06B6D4">help</tspan>
  </text>
  <text x="640" y="340" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="52" letter-spacing="-0.5px">
    <tspan fill="#06B6D4">with </tspan>
    <tspan fill="#0F172A">today?</tspan>
  </text>

  <!-- Subtitle -->
  <text x="640" y="390" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="18" fill="#64748B">
    Draft emails, summarize notes, plan tasks, or research any topic — in seconds.
  </text>

  <!-- 4 Action Cards Grid -->
  <!-- Card 1: Write an email -->
  <g transform="translate(250, 435)" filter="url(#tm-card-shadow)">
    <rect width="370" height="84" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    <rect x="18" y="18" width="48" height="48" rx="12" fill="#F0FDFA" />
    <path d="M30 36L42 45L54 36M30 36V48H54V36H30Z" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <text x="80" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="17" fill="#0F172A">Write an email</text>
    <text x="80" y="62" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="13" fill="#64748B">Formal · Informal · Persuasive</text>
  </g>

  <!-- Card 2: Summarize notes -->
  <g transform="translate(660, 435)" filter="url(#tm-card-shadow)">
    <rect width="370" height="84" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    <rect x="18" y="18" width="48" height="48" rx="12" fill="#F0FDFA" />
    <path d="M34 28H46M34 34H46M34 40H42M30 24H50V52H30V24Z" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <text x="80" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="17" fill="#0F172A">Summarize notes</text>
    <text x="80" y="62" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="13" fill="#64748B">Key points · Decisions · Action items</text>
  </g>

  <!-- Card 3: Plan my day -->
  <g transform="translate(250, 535)" filter="url(#tm-card-shadow)">
    <rect width="370" height="84" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    <rect x="18" y="18" width="48" height="48" rx="12" fill="#F0FDFA" />
    <path d="M30 30H50V50H30V30ZM30 36H50M36 26V30M44 26V30" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <text x="80" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="17" fill="#0F172A">Plan my day</text>
    <text x="80" y="62" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="13" fill="#64748B">Prioritized · Time-blocked</text>
  </g>

  <!-- Card 4: Research a topic -->
  <g transform="translate(660, 535)" filter="url(#tm-card-shadow)">
    <rect width="370" height="84" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    <rect x="18" y="18" width="48" height="48" rx="12" fill="#F0FDFA" />
    <path d="M40 40C44.4 40 48 36.4 48 32C48 27.6 44.4 24 40 24C35.6 24 32 27.6 32 32C32 36.4 35.6 40 40 40ZM46 38L52 44" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <text x="80" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="17" fill="#0F172A">Research a topic</text>
    <text x="80" y="62" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="13" fill="#64748B">Summary · Insights · Recommendations</text>
  </g>

  <!-- Bottom Input Bar -->
  <g transform="translate(250, 642)" filter="url(#tm-input-shadow)">
    <rect width="780" height="66" rx="33" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="32" y="39" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#94A3B8">
      Ask anything — email, summary, task plan, research...
    </text>
    <!-- Submit Button -->
    <circle cx="744" cy="33" r="22" fill="#5EEAD4" />
    <path d="M744 41V25M738 31L744 25L750 31" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </g>

  <!-- Disclaimer Footer -->
  <text x="640" y="742" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="13" fill="#94A3B8">
    Flow can make mistakes. Verify important information.
  </text>
</svg>"""

with open('public/projects/taskmaster.svg', 'w') as f:
    f.write(svg_taskmaster)
print("Saved public/projects/taskmaster.svg")

# ==============================================================================
# 2. KUMBUYAAA (Warm, expert travel planning)
# ==============================================================================
svg_kumbayaaa = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" width="1280" height="800">
  <defs>
    <!-- Clip paths for photographic inserts -->
    <clipPath id="kb-coast1-clip">
      <path d="M0 500 Q 140 480, 260 520 L 260 800 L 0 800 Z" />
    </clipPath>
    <clipPath id="kb-coast2-clip">
      <rect x="0" y="0" width="220" height="290" rx="4" />
    </clipPath>
    <linearGradient id="kb-sand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D28859" />
      <stop offset="60%" stop-color="#C27A4B" />
      <stop offset="100%" stop-color="#9C5931" />
    </linearGradient>
  </defs>

  <!-- Midnight Navy Blue Canvas -->
  <rect width="1280" height="800" fill="#142338" />

  <!-- World Map Silhouette Lines -->
  <g stroke="#26374F" stroke-width="1.5" fill="none" opacity="0.8">
    <!-- Continents outlines -->
    <path d="M120 180 Q 200 160, 240 240 Q 220 340, 160 380 Q 100 320, 120 180 Z" />
    <path d="M420 540 Q 480 500, 520 580 Q 560 680, 500 760 Q 440 720, 420 540 Z" />
    <path d="M680 180 Q 760 140, 840 200 Q 820 280, 740 300 Q 680 240, 680 180 Z" />
    <path d="M880 240 Q 1000 220, 1080 320 Q 1020 400, 920 380 Z" />
  </g>

  <!-- Flight & Route Dashed Paths -->
  <g stroke="#3E5475" stroke-width="1.8" stroke-dasharray="6,8" fill="none">
    <path d="M180 240 Q 450 160, 800 240" />
    <path d="M800 240 Q 890 280, 980 230" />
    <path d="M480 620 Q 650 480, 800 240" />
  </g>

  <!-- Location Map Pins (Orange/Coral) -->
  <g transform="translate(800, 240)">
    <circle cx="0" cy="0" r="14" fill="#E27344" />
    <circle cx="0" cy="0" r="5" fill="#142338" />
  </g>
  <g transform="translate(980, 230)">
    <circle cx="0" cy="0" r="14" fill="#E27344" />
    <circle cx="0" cy="0" r="5" fill="#142338" />
  </g>
  <g transform="translate(480, 620)">
    <circle cx="0" cy="0" r="14" fill="#E27344" />
    <circle cx="0" cy="0" r="5" fill="#142338" />
  </g>

  <!-- Compass Rose (Top Left) -->
  <g transform="translate(140, 160)">
    <circle cx="0" cy="0" r="64" stroke="#7A6854" stroke-width="1.5" fill="none" opacity="0.6" />
    <circle cx="0" cy="0" r="54" stroke="#7A6854" stroke-width="1" fill="none" opacity="0.4" />
    <!-- 8-point faceted star -->
    <polygon points="0,-50 12,-12 50,0 12,12 0,50 -12,12 -50,0 -12,-12" fill="#EBDDCB" />
    <polygon points="0,-50 0,0 50,0 0,0 0,50 0,0 -50,0 0,0" fill="#B39F88" opacity="0.5" />
    <!-- Letters -->
    <text x="0" y="-58" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" fill="#EBDDCB" font-weight="700">N</text>
    <text x="64" y="6" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" fill="#EBDDCB" font-weight="700">E</text>
    <text x="0" y="74" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" fill="#EBDDCB" font-weight="700">S</text>
    <text x="-64" y="6" text-anchor="middle" font-family="'Times New Roman', serif" font-size="18" fill="#EBDDCB" font-weight="700">W</text>
    <!-- Text below compass -->
    <line x1="-35" y1="95" x2="35" y2="95" stroke="#7A6854" stroke-width="1" />
    <text x="0" y="115" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#EBDDCB" letter-spacing="3px">MORE</text>
    <text x="0" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#EBDDCB" letter-spacing="3px">GOOD</text>
    <text x="0" y="149" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#EBDDCB" letter-spacing="3px">PLACES</text>
  </g>

  <!-- Top Right Serif Text -->
  <g transform="translate(1140, 80)">
    <text x="0" y="0" text-anchor="end" font-family="'Times New Roman', serif" font-size="13" fill="#EBDDCB" letter-spacing="4px">FARTHER</text>
    <text x="0" y="24" text-anchor="end" font-family="'Times New Roman', serif" font-size="13" fill="#EBDDCB" letter-spacing="4px">KINDER</text>
    <text x="0" y="48" text-anchor="end" font-family="'Times New Roman', serif" font-size="13" fill="#EBDDCB" letter-spacing="4px">BRIGHTER</text>
    <line x1="-120" y1="62" x2="0" y2="62" stroke="#7A6854" stroke-width="1" />
  </g>

  <!-- Center Hero Title -->
  <text x="640" y="420" text-anchor="middle" font-family="'Playfair Display', 'Times New Roman', Georgia, serif" font-weight="700" font-size="130" fill="#FAF6F0" letter-spacing="-1px">
    Kumbayaaa
  </text>
  <!-- Center Subtitle -->
  <text x="640" y="490" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="400" font-size="28" fill="#F0E2D2" letter-spacing="4px">
    Warm, expert travel planning
  </text>

  <!-- Bottom Sand Dune Curve -->
  <path d="M 0 680 Q 300 620, 600 690 T 1280 620 L 1280 800 L 0 800 Z" fill="url(#kb-sand-grad)" />

  <!-- Left Photo: Mediterranean Coast Village -->
  <g clip-path="url(#kb-coast1-clip)">
    <image href="{b64_kumbayaaa_coast1}" x="0" y="480" width="300" height="320" preserveAspectRatio="xMidYMid slice" />
  </g>

  <!-- Right Framed Photo: Rocky Cliffs -->
  <g transform="translate(1120, 280) rotate(8)">
    <rect x="-8" y="-8" width="236" height="306" rx="6" fill="#FFFFFF" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.5))" />
    <g clip-path="url(#kb-coast2-clip)">
      <image href="{b64_kumbayaaa_coast2}" x="0" y="0" width="220" height="290" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Circular Stamp (Bottom Right) -->
  <g transform="translate(1050, 710)">
    <circle cx="0" cy="0" r="44" stroke="#F5EFEB" stroke-width="1.5" fill="none" opacity="0.7" />
    <circle cx="0" cy="0" r="40" stroke="#F5EFEB" stroke-width="0.8" fill="none" opacity="0.5" />
    <text x="0" y="-18" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#F5EFEB" letter-spacing="2px" font-weight="600">A MORE</text>
    <text x="0" y="-4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#F5EFEB" letter-spacing="3px" font-weight="700">OPEN</text>
    <text x="0" y="10" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#F5EFEB" letter-spacing="2px" font-weight="600">WORLD</text>
    <!-- Twin mountain peaks -->
    <path d="M-12 24 L -4 14 L 4 24 M 0 24 L 6 17 L 12 24" stroke="#F5EFEB" stroke-width="1.5" fill="none" />
  </g>

  <!-- Bottom Right Possibilities Text -->
  <g transform="translate(1220, 735)">
    <text x="0" y="0" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#F5EFEB" letter-spacing="3px">PLACES</text>
    <text x="0" y="18" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#F5EFEB" letter-spacing="3px">PEOPLE</text>
    <text x="0" y="36" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#F5EFEB" letter-spacing="3px">POSSIBILITIES</text>
  </g>
</svg>"""

with open('public/projects/kumbayaaa.svg', 'w') as f:
    f.write(svg_kumbayaaa)
print("Saved public/projects/kumbayaaa.svg")

# ==============================================================================
# 3. VERSA (One idea. Every format. Made native.)
# ==============================================================================
svg_versa = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" width="1280" height="800">
  <defs>
    <clipPath id="versa-photo-clip">
      <rect x="760" y="36" width="460" height="600" rx="20" />
    </clipPath>
  </defs>

  <!-- Clean Editorial White Background -->
  <rect width="1280" height="800" fill="#FFFFFF" />

  <!-- Left Sidebar (Width: 200px) -->
  <rect x="0" y="0" width="200" height="800" fill="#FFFFFF" stroke="#F0F0F0" stroke-width="1" />

  <!-- Versa Logo -->
  <g transform="translate(24, 28)">
    <circle cx="12" cy="12" r="12" fill="#000000" />
    <text x="12" y="17" text-anchor="middle" font-family="'Times New Roman', serif" font-weight="700" font-size="14" fill="#FFFFFF">V</text>
    <text x="34" y="17" font-family="'Playfair Display', 'Times New Roman', serif" font-weight="700" font-size="16" fill="#000000" letter-spacing="2px">VERSA</text>
  </g>

  <!-- Sidebar Menu Items -->
  <g transform="translate(18, 75)">
    <text x="6" y="0" font-family="system-ui, sans-serif" font-size="10" fill="#737373" font-weight="700" letter-spacing="1.5px">STUDIO</text>
    
    <!-- Active Home pill -->
    <rect x="0" y="10" width="164" height="34" rx="8" fill="#000000" />
    <path d="M18 27L24 22L30 27V34H18V27Z" fill="#FFFFFF" />
    <text x="40" y="32" font-family="system-ui, sans-serif" font-size="13" fill="#FFFFFF" font-weight="600">Home</text>

    <!-- Other menu items -->
    <text x="40" y="70" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Discover</text>
    <text x="40" y="100" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Create a Look</text>
    <text x="40" y="130" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Beauty Studio</text>

    <text x="6" y="175" font-family="system-ui, sans-serif" font-size="10" fill="#737373" font-weight="700" letter-spacing="1.5px">AI STUDIO</text>
    <text x="40" y="205" font-family="system-ui, sans-serif" font-size="13" fill="#525252">AI Studio</text>
    <text x="40" y="235" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Image</text>
    <text x="40" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Text</text>
    <text x="40" y="295" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Email</text>
    <text x="40" y="325" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Campaigns</text>
    <text x="40" y="355" font-family="system-ui, sans-serif" font-size="13" fill="#525252">&lt;/&gt; Code</text>

    <text x="6" y="405" font-family="system-ui, sans-serif" font-size="10" fill="#737373" font-weight="700" letter-spacing="1.5px">LIBRARY</text>
    <text x="40" y="435" font-family="system-ui, sans-serif" font-size="13" fill="#525252">History</text>
    <text x="40" y="465" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Saved</text>

    <text x="6" y="515" font-family="system-ui, sans-serif" font-size="10" fill="#737373" font-weight="700" letter-spacing="1.5px">ACCOUNT</text>
    <text x="40" y="545" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Profile</text>
    <text x="40" y="575" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Settings</text>
  </g>

  <!-- Sidebar User Profile (Bottom) -->
  <g transform="translate(18, 745)">
    <circle cx="16" cy="16" r="14" fill="#000000" />
    <text x="16" y="21" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#FFFFFF" font-weight="700">L</text>
    <text x="38" y="16" font-family="system-ui, sans-serif" font-size="12" fill="#000000" font-weight="600">l.rollison</text>
    <text x="38" y="28" font-family="system-ui, sans-serif" font-size="10" fill="#737373">l.rollison@o...</text>
  </g>

  <!-- Main Studio Canvas -->
  <!-- Eyebrow -->
  <text x="260" y="210" font-family="system-ui, sans-serif" font-size="11" fill="#737373" font-weight="700" letter-spacing="2px">
    AI CREATIVE &amp; BEAUTY STUDIO
  </text>

  <!-- Large Editorial Title -->
  <text x="260" y="280" font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="62" fill="#000000" letter-spacing="-1px">One idea.</text>
  <text x="260" y="350" font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="62" fill="#000000" letter-spacing="-1px">Every format.</text>
  <text x="260" y="420" font-family="'Playfair Display', Georgia, serif" font-weight="400" font-style="italic" font-size="62" fill="#666666" letter-spacing="-1px">Made native.</text>

  <!-- Subtitle Paragraph -->
  <text x="260" y="475" font-family="system-ui, sans-serif" font-size="15" fill="#525252" line-height="1.6">
    <tspan x="260" dy="0">Versa understands your idea, audience and intent — then</tspan>
    <tspan x="260" dy="24">transforms it into content that genuinely belongs in each</tspan>
    <tspan x="260" dy="24">format. Image, text, email and beauty, made cohesive.</tspan>
  </text>

  <!-- Buttons -->
  <g transform="translate(260, 560)">
    <!-- Black Button -->
    <rect x="0" y="0" width="145" height="46" rx="8" fill="#000000" />
    <text x="24" y="28" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="600">Start creating →</text>

    <!-- White Outline Button -->
    <rect x="160" y="0" width="150" height="46" rx="8" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1.5" />
    <text x="184" y="28" font-family="system-ui, sans-serif" font-size="14" fill="#000000" font-weight="600">Create a Look ✨</text>
  </g>

  <!-- Right Black & White Portrait Photo -->
  <g clip-path="url(#versa-photo-clip)">
    <image href="{b64_versa_portrait}" x="760" y="36" width="460" height="600" preserveAspectRatio="xMidYMid slice" />
  </g>

  <!-- Bottom Section: The Studio -->
  <g transform="translate(260, 715)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="10" fill="#737373" font-weight="700" letter-spacing="1.5px">THE STUDIO</text>
    <text x="0" y="28" font-family="'Playfair Display', Georgia, serif" font-weight="600" font-size="24" fill="#000000">Every format, one workspace</text>
    <text x="960" y="24" text-anchor="end" font-family="system-ui, sans-serif" font-size="13" fill="#525252">Open AI Studio →</text>
  </g>
</svg>"""

with open('public/projects/versa.svg', 'w') as f:
    f.write(svg_versa)
print("Saved public/projects/versa.svg")

# ==============================================================================
# 4. ROAMRATE (Travel smarter. Stay better.)
# ==============================================================================
svg_roamrate = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" width="1280" height="800">
  <defs>
    <!-- Dark/Warm overlay for text readability -->
    <linearGradient id="rr-overlay" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FAF5F5" stop-opacity="0.92" />
      <stop offset="40%" stop-color="#FAF5F5" stop-opacity="0.85" />
      <stop offset="85%" stop-color="#FAF5F5" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.95" />
    </linearGradient>
    <filter id="rr-card-shadow" x="-5%" y="-5%" width="110%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Background Hotel Resort Pool Photo -->
  <image href="{b64_roamrate_pool}" x="0" y="0" width="1280" height="800" preserveAspectRatio="xMidYMid slice" />

  <!-- Soft Warm Light Overlay -->
  <rect width="1280" height="800" fill="url(#rr-overlay)" />

  <!-- Top Navigation Bar -->
  <g transform="translate(80, 24)">
    <!-- Logo -->
    <rect x="0" y="4" width="36" height="36" rx="10" fill="#BA6870" />
    <path d="M18 14L20 20L26 22L20 24L18 30L16 24L10 22L16 20Z" fill="#FFFFFF" />
    <text x="46" y="28" font-family="'Playfair Display', serif" font-weight="700" font-size="22" fill="#BA6870">RoamRate</text>

    <!-- Nav Links -->
    <g transform="translate(360, 26)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" fill="#3D2930" font-weight="500">Explore</text>
      <text x="80" y="0" font-family="system-ui, sans-serif" font-size="14" fill="#3D2930" font-weight="500">AI Analyzer</text>
      <text x="180" y="0" font-family="system-ui, sans-serif" font-size="14" fill="#3D2930" font-weight="500">Analytics</text>
      <text x="270" y="0" font-family="system-ui, sans-serif" font-size="14" fill="#3D2930" font-weight="500">Compare</text>
      <text x="360" y="0" font-family="system-ui, sans-serif" font-size="14" fill="#3D2930" font-weight="500">Admin</text>
    </g>

    <!-- Right Controls -->
    <g transform="translate(920, 10)">
      <circle cx="16" cy="16" r="16" fill="none" stroke="#E2D4D7" />
      <path d="M12 16 C 12 21, 16 24, 21 24 C 22 24, 23 23.8, 24 23.5 C 19 22, 16 18, 16 13 C 16 11, 17 9, 18 8 C 14 9, 12 12, 12 16 Z" fill="#3D2930" />
      <text x="60" y="21" font-family="system-ui, sans-serif" font-size="14" fill="#3D2930" font-weight="600">Sign in</text>
      <rect x="130" y="-4" width="130" height="40" rx="20" fill="#BA6870" />
      <text x="195" y="21" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" fill="#FFFFFF" font-weight="600">Explore Hotels</text>
    </g>
  </g>

  <!-- Pill Badge: AI Review Intelligence -->
  <g transform="translate(80, 205)">
    <rect width="180" height="34" rx="17" fill="#FFFFFF" fill-opacity="0.8" stroke="#E8D8DC" stroke-width="1.2" />
    <path d="M16 17L18 13L20 17L24 19L20 21L18 25L16 21L12 19Z" fill="#BA6870" />
    <text x="32" y="22" font-family="system-ui, sans-serif" font-size="12" fill="#BA6870" font-weight="600">AI Review Intelligence</text>
  </g>

  <!-- Big Hero Headline -->
  <text x="80" y="305" font-family="'Playfair Display', Georgia, serif" font-weight="800" font-size="68" fill="#2A1A1F" letter-spacing="-1px">
    Travel smarter.
  </text>
  <text x="80" y="385" font-family="'Playfair Display', Georgia, serif" font-weight="800" font-size="68" fill="#D4626F" letter-spacing="-1px">
    Stay better.
  </text>

  <!-- Subtitle -->
  <text x="80" y="445" font-family="system-ui, sans-serif" font-size="18" fill="#3D2930" line-height="1.5">
    <tspan x="80" dy="0">AI-powered hotel reviews that help you understand what travelers</tspan>
    <tspan x="80" dy="26">really think — sentiment, aspects, and insights, not just star ratings.</tspan>
  </text>

  <!-- Action Buttons -->
  <g transform="translate(80, 520)">
    <rect x="0" y="0" width="165" height="48" rx="24" fill="#BA6870" />
    <text x="82" y="29" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="600">Explore Hotels →</text>

    <rect x="185" y="0" width="180" height="48" rx="24" fill="#FFFFFF" fill-opacity="0.9" stroke="#E2D4D7" stroke-width="1.2" />
    <text x="275" y="29" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#2A1A1F" font-weight="600">✨ Analyze Reviews</text>
  </g>

  <!-- Floating Search Bar Card -->
  <g transform="translate(80, 610)" filter="url(#rr-card-shadow)">
    <rect width="1120" height="96" rx="20" fill="#FFFFFF" fill-opacity="0.96" stroke="#EAE0E3" stroke-width="1.5" />
    
    <!-- Input 1: Destination -->
    <g transform="translate(20, 20)">
      <text x="0" y="10" font-family="system-ui, sans-serif" font-size="11" fill="#7E686F" font-weight="600">Destination</text>
      <rect x="0" y="18" width="260" height="38" rx="8" fill="#FAF5F6" stroke="#EAE0E3" stroke-width="1" />
      <text x="16" y="42" font-family="system-ui, sans-serif" font-size="13" fill="#3D2930">🔍 Search Cape Town hotels...</text>
    </g>

    <!-- Input 2: Check-in -->
    <g transform="translate(300, 20)">
      <text x="0" y="10" font-family="system-ui, sans-serif" font-size="11" fill="#7E686F" font-weight="600">Check-in</text>
      <rect x="0" y="18" width="240" height="38" rx="8" fill="#FAF5F6" stroke="#EAE0E3" stroke-width="1" />
      <text x="16" y="42" font-family="system-ui, sans-serif" font-size="13" fill="#7E686F">mm/dd/yyyy</text>
      <text x="215" y="42" font-family="system-ui, sans-serif" font-size="14">📅</text>
    </g>

    <!-- Input 3: Check-out -->
    <g transform="translate(560, 20)">
      <text x="0" y="10" font-family="system-ui, sans-serif" font-size="11" fill="#7E686F" font-weight="600">Check-out</text>
      <rect x="0" y="18" width="240" height="38" rx="8" fill="#FAF5F6" stroke="#EAE0E3" stroke-width="1" />
      <text x="16" y="42" font-family="system-ui, sans-serif" font-size="13" fill="#7E686F">mm/dd/yyyy</text>
      <text x="215" y="42" font-family="system-ui, sans-serif" font-size="14">📅</text>
    </g>

    <!-- Input 4: Guests -->
    <g transform="translate(820, 20)">
      <text x="0" y="10" font-family="system-ui, sans-serif" font-size="11" fill="#7E686F" font-weight="600">Guests</text>
      <rect x="0" y="18" width="270" height="38" rx="8" fill="#FAF5F6" stroke="#EAE0E3" stroke-width="1" />
      <text x="16" y="42" font-family="system-ui, sans-serif" font-size="13" fill="#3D2930">1 guest</text>
      <text x="245" y="42" font-family="system-ui, sans-serif" font-size="14">⌄</text>
    </g>
  </g>

  <!-- Edit with Base 44 Badge (Bottom Right) -->
  <g transform="translate(1110, 746)">
    <rect width="140" height="34" rx="6" fill="#000000" />
    <circle cx="20" cy="17" r="7" fill="#E27344" />
    <text x="36" y="22" font-family="system-ui, sans-serif" font-size="11" fill="#FFFFFF" font-weight="600">Edit with Base 44</text>
    <text x="124" y="21" font-family="system-ui, sans-serif" font-size="11" fill="#737373">✕</text>
  </g>
</svg>"""

with open('public/projects/roamrate.svg', 'w') as f:
    f.write(svg_roamrate)
print("Saved public/projects/roamrate.svg")

# ==============================================================================
# 5. PRASACONNECT (Know the line before you leave.)
# ==============================================================================
svg_prasaconnect = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" width="1280" height="800">
  <defs>
    <!-- Blueprint grid pattern -->
    <pattern id="prasa-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8E3ED" stroke-width="0.8" opacity="0.7" />
    </pattern>
    <filter id="prasa-card-shadow" x="-5%" y="-5%" width="110%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#0E2F54" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Background App Window Frame -->
  <rect width="1280" height="800" fill="#E8F0F8" />
  
  <!-- Blueprint Grid Overlay -->
  <rect x="230" y="50" width="1050" height="750" fill="url(#prasa-grid)" opacity="0.6" />

  <!-- Window Header / Traffic Light Dots -->
  <rect x="0" y="0" width="1280" height="50" fill="#EDF3F9" />
  <circle cx="26" cy="25" r="6" fill="#FF5F56" />
  <circle cx="46" cy="25" r="6" fill="#FFBD2E" />
  <circle cx="66" cy="25" r="6" fill="#27C93F" />

  <!-- Left Sidebar (Width: 230) -->
  <rect x="0" y="50" width="230" height="750" fill="#F4F8FB" stroke="#DCE5EE" stroke-width="1" />

  <!-- Brand Logo -->
  <g transform="translate(24, 75)">
    <circle cx="16" cy="16" r="16" fill="#0E3666" />
    <!-- Train icon -->
    <rect x="9" y="8" width="14" height="14" rx="2" fill="#FFFFFF" />
    <circle cx="12" cy="19" r="1.5" fill="#0E3666" />
    <circle cx="20" cy="19" r="1.5" fill="#0E3666" />
    <text x="42" y="14" font-family="system-ui, sans-serif" font-weight="700" font-size="14" fill="#0E3666">PrasaConnect</text>
    <text x="42" y="27" font-family="system-ui, sans-serif" font-weight="600" font-size="9" fill="#5A7696" letter-spacing="1px">METROTRACK AI</text>
  </g>

  <!-- Sidebar Nav -->
  <g transform="translate(18, 140)">
    <text x="6" y="0" font-family="system-ui, sans-serif" font-size="9" fill="#7E96AF" font-weight="700" letter-spacing="1.5px">NAVIGATION</text>
    
    <!-- Active Dashboard Pill -->
    <rect x="0" y="10" width="194" height="34" rx="8" fill="#DBEAFE" />
    <text x="36" y="32" font-family="system-ui, sans-serif" font-size="13" fill="#1D4ED8" font-weight="600">🚆 Dashboard</text>

    <!-- Navigation Items -->
    <text x="36" y="70" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Plan Trip</text>
    <text x="36" y="102" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Map</text>
    <text x="36" y="134" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Travel Card</text>
    <text x="36" y="166" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Routes</text>
    <text x="36" y="198" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Alerts</text>
    <text x="36" y="230" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Chat</text>
    <text x="36" y="262" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Feedback</text>
    <text x="36" y="294" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Notifications</text>
    <text x="36" y="326" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Stations</text>
    <text x="36" y="358" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">History</text>
    <text x="36" y="390" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Settings</text>

    <text x="6" y="440" font-family="system-ui, sans-serif" font-size="9" fill="#7E96AF" font-weight="700" letter-spacing="1.5px">ACCOUNT</text>
    <text x="36" y="470" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Notifications</text>
    <text x="36" y="502" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">My Profile</text>
    <text x="36" y="534" font-family="system-ui, sans-serif" font-size="13" fill="#526E8C">Sign in / Sign up</text>
  </g>

  <!-- Top Bar -->
  <g transform="translate(260, 70)">
    <text x="0" y="18" font-family="system-ui, sans-serif" font-weight="700" font-size="14" fill="#0E3666">PrasaConnect</text>
    <text x="0" y="32" font-family="system-ui, sans-serif" font-weight="600" font-size="9" fill="#5A7696" letter-spacing="1px">METROTRACK AI</text>
    <text x="360" y="24" font-family="system-ui, sans-serif" font-size="13" fill="#5A6F87">Commuter cockpit</text>
    
    <!-- Sign in button -->
    <rect x="760" y="4" width="130" height="34" rx="6" fill="#0E3666" />
    <text x="825" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#FFFFFF" font-weight="600">Sign in / Sign up ↗</text>
  </g>

  <!-- Yellow Companion Pill Badge -->
  <g transform="translate(260, 160)">
    <rect width="320" height="26" rx="6" fill="#FEF9E7" stroke="#F5D77F" stroke-width="1" />
    <text x="14" y="17" font-family="system-ui, sans-serif" font-size="9" fill="#8C6F12" font-weight="700" letter-spacing="1px">
      ⚡ PUBLIC TRANSPORT COMPANION
    </text>
    <text x="0" y="44" font-family="system-ui, sans-serif" font-size="10" fill="#526E8C" font-weight="600" letter-spacing="1px">
      WESTERN CAPE / THU, 10 SEPT 2026 / 13:11:37 SAST
    </text>
  </g>

  <!-- Huge Hero Title -->
  <text x="260" y="270" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" fill="#0F172A" letter-spacing="-1.5px">
    Know the line
  </text>
  <text x="260" y="340" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" letter-spacing="-1.5px">
    <tspan fill="#3E5F80">before you </tspan>
    <tspan fill="#0F172A">leave.</tspan>
  </text>

  <!-- Subtitle -->
  <text x="260" y="400" font-family="system-ui, sans-serif" font-size="16" fill="#526E8C">
    <tspan x="260" dy="0">Plan a Metrorail journey, compare departure windows and see your</tspan>
    <tspan x="260" dy="24">route clearly — without the guesswork.</tspan>
  </text>

  <!-- 3 Verification Pills -->
  <g transform="translate(260, 465)">
    <text x="0" y="16" font-family="system-ui, sans-serif" font-size="12" fill="#2C4D6F" font-weight="600">✓ Public-first</text>
    <text x="100" y="16" font-family="system-ui, sans-serif" font-size="12" fill="#2C4D6F" font-weight="600">✓ Source-aware</text>
    <text x="210" y="16" font-family="system-ui, sans-serif" font-size="12" fill="#2C4D6F" font-weight="600">✓ Cape Town network</text>
  </g>

  <!-- Floating Journey Planner Card (Right) -->
  <g transform="translate(740, 180)" filter="url(#prasa-card-shadow)">
    <rect width="470" height="340" rx="18" fill="#FFFFFF" stroke="#DCE5EE" stroke-width="1.5" />
    
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="10" fill="#5A7696" font-weight="700" letter-spacing="1px">WHERE ARE YOU GOING?</text>
    <text x="24" y="58" font-family="system-ui, sans-serif" font-size="16" fill="#0F172A" font-weight="700">Build your plan in seconds</text>
    <!-- Share icon at right -->
    <circle cx="430" cy="40" r="14" fill="#F0F4F8" />
    <path d="M428 36L434 40L428 44" stroke="#5A7696" stroke-width="1.5" fill="none" />

    <!-- Input 1: FROM -->
    <rect x="24" y="80" width="200" height="42" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
    <text x="36" y="96" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700">FROM</text>
    <text x="36" y="112" font-family="system-ui, sans-serif" font-size="13" fill="#0F172A" font-weight="600">📍 Cape Town</text>
    <text x="204" y="106" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">⌄</text>

    <!-- Input 2: TO -->
    <rect x="246" y="80" width="200" height="42" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
    <text x="258" y="96" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700">TO</text>
    <text x="258" y="112" font-family="system-ui, sans-serif" font-size="13" fill="#0F172A" font-weight="600">📍 Bellville</text>
    <text x="426" y="106" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">⌄</text>

    <!-- Input 3: DATE -->
    <rect x="24" y="136" width="200" height="42" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
    <text x="36" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700">DATE</text>
    <text x="36" y="168" font-family="system-ui, sans-serif" font-size="13" fill="#0F172A" font-weight="600">📅 Today</text>
    <text x="204" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">⌄</text>

    <!-- Input 4: DEPART AFTER -->
    <rect x="246" y="136" width="200" height="42" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
    <text x="258" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700">DEPART AFTER</text>
    <text x="258" y="168" font-family="system-ui, sans-serif" font-size="13" fill="#0F172A" font-weight="600">⏰ 08:00</text>
    <text x="426" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">⌄</text>

    <!-- Prompt Helper -->
    <rect x="24" y="194" width="422" height="34" rx="17" fill="#F8FAFC" stroke="#E2E8F0" stroke-dasharray="3,3" />
    <text x="42" y="215" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">✨ Try: "Cape Town to Bellville at 8am"</text>

    <!-- Plan My Journey Button -->
    <rect x="24" y="244" width="422" height="46" rx="23" fill="#0E3666" />
    <text x="235" y="272" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="700">Plan my journey →</text>

    <!-- Disclaimer -->
    <text x="235" y="312" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#94A3B8">
      Preview schedule • no verified live PRASA feed connected
    </text>
  </g>

  <!-- Bottom Metric Bar -->
  <g transform="translate(230, 560)">
    <line x1="0" y1="0" x2="1050" y2="0" stroke="#F5C042" stroke-width="2" />
    <rect x="0" y="2" width="1050" height="78" fill="#FFFFFF" stroke="#DCE5EE" stroke-width="1" />
    
    <!-- Metric 1 -->
    <g transform="translate(40, 28)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="20" fill="#0F172A">12 <tspan font-size="14" font-weight="400">min</tspan></text>
      <text x="0" y="20" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700" letter-spacing="1px">NEXT PREVIEW</text>
    </g>

    <!-- Metric 2 -->
    <g transform="translate(280, 28)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="20" fill="#0F172A">08:00</text>
      <text x="0" y="20" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700" letter-spacing="1px">SELECTED DEPARTURE</text>
    </g>

    <!-- Metric 3 -->
    <g transform="translate(520, 28)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="20" fill="#0F172A">40 <tspan font-size="14" font-weight="400">min</tspan></text>
      <text x="0" y="20" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700" letter-spacing="1px">JOURNEY TIME</text>
    </g>

    <!-- Metric 4 -->
    <g transform="translate(760, 28)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="20" fill="#0F172A">4</text>
      <text x="0" y="20" font-family="system-ui, sans-serif" font-size="9" fill="#64748B" font-weight="700" letter-spacing="1px">LINE OPTIONS</text>
    </g>
  </g>

  <!-- Made with Manus Badge (Bottom Right) -->
  <g transform="translate(1110, 680)">
    <rect width="130" height="34" rx="8" fill="#141E28" />
    <text x="18" y="21" font-family="system-ui, sans-serif" font-size="12">🪄</text>
    <text x="36" y="21" font-family="system-ui, sans-serif" font-size="11" fill="#FFFFFF" font-weight="600">Made with Manus</text>
  </g>
</svg>"""

with open('public/projects/prasaconnect.svg', 'w') as f:
    f.write(svg_prasaconnect)
print("Saved public/projects/prasaconnect.svg")

# Also copy/symlink to public root and exact uploaded filenames so that ANY path works
for base, targets in [
    ('public/projects/taskmaster.svg', ['public/app.png', 'public/projects/app.png', 'public/projects/taskmaster.png']),
    ('public/projects/kumbayaaa.svg', ['public/kumbayaaa-thumbnail (1).jpg', 'public/kumbayaaa-thumbnail.jpg', 'public/projects/kumbayaaa-thumbnail (1).jpg', 'public/projects/kumbayaaa.jpg']),
    ('public/projects/versa.svg', ['public/Screenshot 2026-09-10 132434.png', 'public/projects/Screenshot 2026-09-10 132434.png', 'public/projects/versa.png']),
    ('public/projects/roamrate.svg', ['public/roamrate.png', 'public/projects/roamrate.png']),
    ('public/projects/prasaconnect.svg', ['public/prasa-thumbnail.png', 'public/projects/prasa-thumbnail.png', 'public/projects/prasaconnect.png']),
]:
    with open(base, 'r') as sf:
        content = sf.read()
    for tgt in targets:
        with open(tgt, 'w') as tf:
            tf.write(content)

print("All files generated and mirrored successfully!")
