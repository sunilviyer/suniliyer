// Easter Egg Hunt Data
// Each egg has a position (x,y as %), tier, appearance, and content

export interface EasterEgg {
  id: number;
  x: number; // percentage position
  y: number;
  size: number; // SVG size in px
  tier: 1 | 2 | 3 | 's'; // 1=Major, 2=Subtle, 3=Under Hood, s=Special
  col: string; // pastel color
  pat: 'stripes' | 'dots' | 'zigzag' | 'diamonds' | 'waves' | 'stars';
  nightOnly?: boolean; // only visible in dark mode
  title: string;
  location: string;
  body: string; // Full Reveal text
  link: string; // Visit link text
  hint: string; // Next egg hint
}

export const TOTAL_EGGS = 28;

export const EASTER_EGGS: EasterEgg[] = [
  // Egg 1: Watering can (book hint: "Begin where gardeners begin...")
  { id:1,  x:15, y:92,   size:14, tier:1, col:'#FFB3C1', pat:'stripes',
    title:'The 404 Page',
    location:'Any broken URL on suniliyer.ca',
    body:'The 404 page rotates through 6 HTTP error codes every 10 seconds — slot machine digit animations included. Each state has a confidently wrong AI response, satirising hallucination. A ticker tape runs: "CONFIDENCE: 100%" and "CITATIONS VERIFIED: 0 of 7". The comedy is recursive: the page IS the error it describes.',
    link:'→ Try any broken URL',
    hint:'Something hides on the bench cushion...' },

  // Egg 2: Bench cushion (egg 1 hint: "Something hides on the bench cushion...")
  { id:2,  x:20,   y:83,   size:13, tier:1, col:'#B5EAD7', pat:'dots',
    title:'Behind the Scenes Bookshelf',
    location:'/behind-the-scenes',
    body:'Nine portfolio origin stories as physical books on a wooden shelf. Each lifts 14px on hover with an intensifying shadow — skeuomorphic physics in a digital space. Not what was built, but the thinking and process behind each project.',
    link:'→ Visit /behind-the-scenes',
    hint:'Look near where you sit to rest...' },

  // Egg 3: Near bench/basket (egg 2 hint: "Look near where you sit to rest...")
  { id:3,  x:25,   y:85,   size:12, tier:1, col:'#FFDAC1', pat:'zigzag',
    title:'The Hello! Splash Screen',
    location:'/ — first visit only',
    body:'On first visit, "Hello!" appears in 120px Funnel Display, blinks exactly 10 times at 0.35s per cycle, then exits with a curved bottom border (borderBottomLeftRadius: 50%) — an unexpected swoop. A localStorage flag ensures it never fires again for that visitor.',
    link:'→ Clear cache and visit /',
    hint:'Under the bench, something small hides...' },

  // Egg 4: Under bench (egg 3 hint: "Under the bench, something small hides...")
  { id:4,  x:18,   y:88,   size:11, tier:2, col:'#C7CEEA', pat:'diamonds',
    title:'Pulse-Glow Timeline Dots',
    location:'/journey — Career Timeline (desktop)',
    body:'Each position marker on the timeline is a 5×5px golden circle with an infinite 2-second pulse-glow (box-shadow: 0 0 20px 8px rgba(212,165,116,0.6)). Desktop only. The timeline looks static. It is not.',
    link:'→ Visit /journey on desktop',
    hint:'The watering can holds a surprise...' },

  // Egg 5: Pond lily pad (egg 4 hint: "The watering can holds a surprise..." - wait, reviewing...)
  { id:5,  x:28,   y:65,   size:12, tier:1, col:'#B5EAD7', pat:'waves',
    title:'The Intentional Image System',
    location:'Every page — every image',
    body:'Every image on suniliyer.ca is AI-generated through careful prompting. The Gita page images are the deepest example — each a result of extended philosophical conversations. 42 Learning Path images individually considered. Exception: Creative Works photography, shot by Sunil himself.',
    link:'→ Visit /gita for the deepest examples',
    hint:'Something perches on the bird bath...' },

  // Egg 6: Bird bath (egg 5 hint: "Something perches on the bird bath...")
  { id:6,  x:55,   y:58,   size:11, tier:1, col:'#FFD1DC', pat:'stripes',
    title:'Coming Soon — Pancake Flip',
    location:'/coming-soon',
    body:'The Coming Soon page commits fully to a cooking metaphor: something is in the pan, heat is being applied, patience is required. A pancake flip animation rather than a generic under-construction placeholder.',
    link:'→ Visit /coming-soon',
    hint:'Deep in the tree roots, look carefully...' },

  // Egg 7: Tree roots (egg 6 hint: "Deep in the tree roots, look carefully...")
  { id:7,  x:40,   y:75, size:10, tier:2, col:'#FFDAC1', pat:'dots',
    title:'Category Filtering + Staggered Entrance',
    location:'/creative-works and /articles',
    body:'The Creative Works filter bar shows live item count badges. Switching categories triggers a staggered fadeInUp — each card entering slightly after the previous. The same cascade logic applies when article clusters fan open.',
    link:'→ Visit /creative-works',
    hint:'Check the tree hole...' },

  // Egg 8: Tree hole (egg 7 hint: "Check the tree hole...")
  { id:8,  x:38, y:60, size:13, tier:1, col:'#E2D1F9', pat:'zigzag',
    title:'Initials Photo Reveal — SVI',
    location:'/ — Home Page, About Me',
    body:'"SVI" rendered as an SVG text mask — the photo visible only through the letter shapes. A feTurbulence grain filter adds film photography texture. On hover, initials scale to 380px while fading as the full portrait fades in over 0.6s. Drop shadow grows from 10px to 60px blur.',
    link:'→ Scroll to About Me on /',
    hint:'Look up — there are nests in the tree...' },

  // Egg 9: Left bird nest (egg 8 hint: "Look up — there are nests in the tree...")
  { id:9,  x:25, y:22, size:11, tier:1, col:'#FFD1DC', pat:'dots',
    title:'The Neural Map Mega Menu',
    location:'Global — every page, hamburger icon',
    body:'Branded as the "Neural Map" with tagline "Every path on this site". A 5-column glassmorphism panel (backdrop-filter: blur(28px) saturate(200%)) colour-coded by section. The Resume item has a custom purple gradient document icon. Footer: "Built with AI · Powered by curiosity."',
    link:'→ Open the hamburger menu',
    hint:'Another nest waits on the far right branch...' },

  // Egg 10: Right bird nest (egg 9 hint: "Another nest waits on the far right branch...")
  { id:10, x:65,   y:28,   size:11, tier:2, col:'#B5EAD7', pat:'stripes',
    title:'Creative Works Bento Grid',
    location:'/creative-works',
    body:'Card sizes are semantically meaningful: large (2×2), wide (2×1), tall (1×2), full (3×1). Poem cards dynamically sized by text length. Photo panels group themed images in polaroid-style frames with independent hover effects per photo.',
    link:'→ Visit /creative-works',
    hint:'The lanterns hold secrets between them...' },

  // Egg 11: Left lantern (red) (egg 10 hint: "The lanterns hold secrets between them...")
  { id:11, x:22, y:35,   size:12, tier:1, col:'#FFB3C1', pat:'waves',
    title:'3D Flip Cards — Journey Page',
    location:'/journey — Career Timeline',
    body:'Desktop hover reveals a Skills Overlay via backdrop blur. Click flips the card 180° with Framer Motion spring physics (stiffness/damping/mass producing overshoot-settle). Mobile tap shows achievements directly. Markdown renders on the card back face.',
    link:'→ Visit /journey',
    hint:'The middle lantern hides something...' },

  // Egg 12: Middle lantern (yellow) (egg 11 hint: "The middle lantern hides something...")
  { id:12, x:40, y:30,   size:12, tier:2, col:'#FFDAC1', pat:'diamonds',
    title:'Page-Specific Colour Themes',
    location:'Every major page + 42 Learning Path pages',
    body:'Every page has a deliberate custom palette. Journey: antique gold. Creative Works: Dusty Rose (6 colours). Mortgage Calculator: terracotta. 42 Learning Paths follow a narrative arc — earthy ochres for History through vibrant yellow-green for Future. The earthy base unifies; the accent shifts the emotional register.',
    link:'→ Compare /journey with /creative-works',
    hint:'The blue lantern holds something too...' },

  // Egg 13: Right lantern (blue) (egg 12 hint: "The blue lantern holds something too...")
  { id:13, x:48, y:32,   size:12, tier:2, col:'#C7CEEA', pat:'zigzag',
    title:'Hero Title as AI Concept Taxonomy',
    location:'/ — Home Page hero',
    body:'"Vibe, [rotating word] AI + a little me" — the rotating words form a taxonomy of AI\'s possibilities: building, learning, exploring, creating, discovering. Not random. Each word is a dimension. The construction negotiates identity in an AI age.',
    link:'→ Visit / and watch the hero',
    hint:'The beehive hangs on the right branch...' },

  // Egg 14: Beehive (egg 13 hint: "The beehive hangs on the right branch...")
  { id:14, x:68,   y:40, size:13, tier:2, col:'#FFD700', pat:'stripes',
    title:'Moon/Sun Theme Toggle',
    location:'Global — top nav',
    body:'An 88px pill slider. The crescent moon is pure CSS inset box-shadow — no SVG, no image, just mathematics simulating the shadow of a sphere. 0.3s transition. A mechanical toggle, not an icon click.',
    link:'→ Toggle the theme in the nav',
    hint:'Through the greenhouse glass...' },

  // Egg 15: Through greenhouse glass (egg 14 hint: "Through the greenhouse glass...")
  { id:15, x:58, y:50,   size:11, tier:1, col:'#B5EAD7', pat:'dots',
    title:'Corkboard Article Clusters',
    location:'/articles — Thoughts & Writings',
    body:'Articles grouped by category (Builder, Governance, Futurist, Human & Leadership) as stacked cards under a corkboard pin. Tapping fans them open. Stacking depth reflects category volume. The chevron (▾) is the only hint.',
    link:'→ Visit /articles',
    hint:'Inside the shed door...' },

  // Egg 16: Inside shed door (egg 15 hint: "Inside the shed door...")
  { id:16, x:85,   y:55, size:12, tier:3, col:'#FFDAC1', pat:'waves',
    title:'localStorage & Opt-in Cookie System',
    location:'Global',
    body:'localStorage used for exactly two things: the splash screen flag (splashScreenShown) and theme preference. No analytics by default. Analytics fires only on explicit opt-in. Minimal footprint by philosophy.',
    link:'→ Check the cookie banner',
    hint:'On top of the shed roof...' },

  // Egg 17: Shed roof (egg 16 hint: "On top of the shed roof...")
  { id:17, x:88,   y:42,   size:11, tier:3, col:'#C7CEEA', pat:'diamonds',
    title:'Framer Motion Spring Animations',
    location:'/journey — Flip Cards',
    body:'The flip cards use spring physics — stiffness, damping, mass — not CSS transitions. The slight overshoot and settle makes the flip feel physical. Achievement content on the card back renders full markdown.',
    link:'→ Visit /journey and flip a card',
    hint:'Behind the ivy on the stone wall...' },

  // Egg 18: Behind ivy on stone wall (egg 17 hint: "Behind the ivy on the stone wall...")
  { id:18, x:75,   y:50,   size:11, tier:2, col:'#FFB3C1', pat:'stripes',
    title:'Triple-Layer Glow on Card Arrows',
    location:'Multiple pages — card arrow buttons',
    body:'Arrow buttons scale 1.1× on hover and emit three-layer golden aura: box-shadows at 20px, 40px, 60px blur (rgba(147,102,57)). Deliberately excessive — three concentric glow rings. Most hover effects are subtle. This one is not.',
    link:'→ Hover any card arrow button',
    hint:'The stone wall hides something behind it...' },

  // Egg 19: Stone wall behind (egg 18 hint: "The stone wall hides something behind it...")
  { id:19, x:78,   y:48,   size:10, tier:2, col:'#B5EAD7', pat:'dots',
    title:'Funnel Sans & Funnel Display',
    location:'Global — every page',
    body:'Funnel Sans for body, Funnel Display for headings — not system fonts, not common defaults. Most visitors won\'t name the fonts. They\'ll feel the difference between this site and a generic portfolio.',
    link:'→ Any page',
    hint:'Through the garden gate...' },

  // Egg 20: Through garden gate (egg 19 hint: "Through the garden gate...")
  { id:20, x:65,   y:72,   size:12, tier:1, col:'#FFDAC1', pat:'zigzag',
    title:'Lightbox Modal & Photo Panels',
    location:'/creative-works',
    body:'Clicking any card expands into a full lightbox. Photo panels group themed images as a curated set (Photography Collection, AI Evolution, Gita Visions). Each photo individually framed in polaroid style. ESC to close. Slide-up entrance with blur overlay.',
    link:'→ Visit /creative-works',
    hint:'Behind the rose arch...' },

  // Egg 21: Behind rose arch (egg 20 hint: "Behind the rose arch...")
  { id:21, x:68, y:68,   size:11, tier:2, col:'#FFD1DC', pat:'waves',
    title:'Scroll Indicators & Bounce Animations',
    location:'/ — Home Page',
    body:'A bouncing "Scroll for more" arrow runs on a 2-second infinite loop in the hero. At each section end, a vertical pulse line appears. The site never assumes you\'ll keep going. It always invites you to.',
    link:'→ Visit / and scroll slowly',
    hint:'Among the tulips on the right...' },

  // Egg 22: Among tulips on right (egg 21 hint: "Among the tulips on the right...")
  { id:22, x:80,   y:85,   size:12, tier:2, col:'#C7CEEA', pat:'stripes',
    title:'Break Cards Between Sections',
    location:'/ — Home Page',
    body:'Full-width image cards appear between content sections, sliding up on scroll. Each was individually prompted to match the emotional tone of the content it bridges. Visual rewards for continuing.',
    link:'→ Visit / and scroll the home page',
    hint:'Near the left flowers...' },

  // Egg 23: Near left flowers (egg 22 hint: "Near the left flowers...")
  { id:23, x:10,    y:70,   size:11, tier:2, col:'#FFB3C1', pat:'diamonds',
    title:'Colour Theme Narrative — Full Site',
    location:'42 Learning Path pages',
    body:'42 Learning Path pages follow a colour arc: History in earthy ochres → Terminology in earthy gold → Responsibility in earthy green → Risk in earthy rose → Future in vibrant yellow-green. Same earthy base throughout; the accent colour shifts the emotional register from grounded to aspirational.',
    link:'→ Browse the Learning Paths',
    hint:'On a stone along the path...' },

  // Egg 24: On stone along path (egg 23 hint: "On a stone along the path...")
  { id:24, x:45,   y:82,   size:11, tier:2, col:'#B5EAD7', pat:'dots',
    title:'Guru — The Live AI Chat Agent',
    location:'/gita — Bhagavad Gita page',
    body:'Guru is an SVG robot with the ॐ symbol bouncing on the Gita page — appearing decorative. Clicking opens a fully functional Claude-powered chat agent trained on the Bhagavad Gita. The only live agent on the site. The others (SIU, Banker, Matchmaker, Editor) run as pre-computed demos.',
    link:'→ Visit /gita',
    hint:'Deep in the tree roots, something ancient...' },

  // Egg 25: Deep in tree roots, ancient (egg 24 hint: "Deep in the tree roots, something ancient...")
  { id:25, x:42,   y:72,   size:13, tier:1, col:'#E2D1F9', pat:'zigzag',
    title:'Sunil / Linus — The Name Inside the Name',
    location:'Everywhere — it has always been there',
    body:'S-u-n-i-l reversed is L-i-n-u-s. Linus. Hidden in the name since birth. Linus as in Linus Torvalds — father of Linux, the OS powering most of the internet. Or Linus from Peanuts, carrying his security blanket with quiet confidence. This egg is carved into the tree, the oldest way humans leave their mark.',
    link:'→ Try it yourself',
    hint:'' },

  // Egg 26: Pond lily submerged (egg 25 hint is blank - completion hint triggers)
  { id:26, x:30, y:67,   size:10, tier:2, col:'#B2F7EF', pat:'waves',
    title:'Scroll Indicators — Deeper Look',
    location:'/ — Home Page sections',
    body:'The vertical scroll indicators use CSS custom properties to stay theme-aware. The bounce timing function is cubic-bezier(0.68,-0.55,0.265,1.55) — a spring ease that gives the arrow a small overshoot, making it feel alive rather than mechanical.',
    link:'→ Visit /',
    hint:'Some secrets only reveal themselves in the dark...' },

  // Egg 27: NIGHT ONLY - sky near moon (egg 26 hint: "Some secrets only reveal themselves in the dark...")
  { id:27, x:82,   y:12,   size:11, tier:'s', col:'#C7CEEA', pat:'stars',
    nightOnly: true,
    title:'The Garden Has Two Faces',
    location:'The theme toggle — top navigation',
    body:'The garden transforms when you switch the theme. Daylight and twilight are two separately illustrated scenes — same composition, entirely different light. The lanterns respond. The greenhouse glows. The sky sweeps. Most visitors toggle once and never notice the garden changed.',
    link:'→ Toggle the theme and look carefully',
    hint:'One final egg waits. Look to the centre of the garden.' },

  // Egg 28: Tree trunk carved name (egg 27 hint: "One final egg waits. Look to the centre of the garden.")
  { id:28, x:42,  y:65,   size:10, tier:3, col:'#FFDAC1', pat:'dots',
    title:'The Dharma Wheel — Krishna\'s Chakra',
    location:'/gita — Bhagavad Gita page',
    body:'The Gita page UI is designed after Krishna\'s Sudarshana Chakra. 10 segments, each a transformative Gita moment. Each unfolds across four layers: The Verse → The Scene → The Inner Meaning → For You Today — from 5,000-year-old Sanskrit to personal relevance in four steps. On mobile it renders as a half-wheel.',
    link:'→ Visit /gita',
    hint:'You\'ve found almost all of them. The centre calls...' },
];

// COMPLETION EGG - Center of garden
export const COMPLETION_EGG = {
  id: 99,
  x: 50,
  y: 50,
  tier: 's' as const,
  title: 'You Found Them All',
  location: 'The centre of the garden',
  body: 'Every egg. Every secret. Every hidden craft decision. You found the watering can, the lanterns, the nests, the beehive, the greenhouse pot, the shed door, the stone wall, the carved tree trunk, even the sky itself. This is the last one.',
  link: '→ The garden thanks you',
  hint: ''
};

export const TIER_INFO = {
  1: { cls: 't1', label: 'Major Discovery', color: '#9333ea' },
  2: { cls: 't2', label: 'Subtle Craftsmanship', color: '#f59e0b' },
  3: { cls: 't3', label: 'Under the Hood', color: '#3b82f6' },
  s: { cls: 'ts', label: 'Special', color: '#eab308' },
};
