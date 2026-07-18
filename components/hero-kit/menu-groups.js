/**
 * Site-wide menu groups for the hero-kit TopNav.
 * Shared by the homepage and the Constitution pages so the menu carries
 * every link in one place.
 */
export const MENU_GROUPS = [
  {
    heading: 'Learning Paths',
    links: [
      { href: '/history', label: 'History of AI', desc: '1950s to foundation models' },
      { href: '/terminology', label: 'Terminology', desc: 'ML, neural nets, LLMs' },
      { href: '/risk', label: 'Risk', desc: 'bias, deepfakes, harms' },
      { href: '/responsibility', label: 'Responsibility', desc: 'GDPR, EU AI Act, governance' },
      { href: '/future', label: 'Future of AI', desc: 'AGI, careers, regulation' },
    ],
  },
  {
    heading: 'AGI Constitution',
    links: [
      { href: '/constitution', label: 'The Constitution', desc: 'overview and structure' },
      { href: '/constitution/authors-note', label: "Author's Note", desc: 'how to read this book' },
      { href: '/constitution/prologue', label: 'Prologue', desc: 'before the war' },
      { href: '/constitution/principles-overview', label: 'Ten Principles', desc: 'the spine of the book' },
      { href: '/constitution/closing', label: 'Closing Declaration', desc: 'after the war' },
    ],
  },
  {
    heading: 'Portfolio',
    links: [
      { href: 'https://www.suniliyer.ca/seshan/demo/', label: 'Seshan Intelligence', desc: 'AI business intelligence', external: true },
      { href: 'https://seshan-navy.vercel.app/', label: 'Seshan Dashboard', desc: 'interactive analytics', external: true },
      { href: 'https://ai-agents-rosy-mu.vercel.app', label: 'AI Agents', desc: 'SIU, Banker, Editor…', external: true },
    ],
  },
  {
    heading: 'Inner Monologue',
    links: [
      { href: '/articles', label: 'Articles', desc: 'thoughts & insights' },
      { href: '/gita', label: 'Bhagavad Gita', desc: 'AI-guided scripture' },
      { href: '/calvinhobbes', label: 'Calvin & Hobbes', desc: 'AI-illustrated comics' },
      { href: '/creative-works', label: 'Creative Works', desc: 'poetry & writing' },
      { href: '/behind-the-scenes', label: 'Behind the Scenes', desc: 'process · tools' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { href: '/journey', label: 'My Journey', desc: 'professional story' },
      { href: '/downloads/Sunil_Iyer_Resume.pdf', label: 'Resume', desc: 'download resume' },
      { href: 'https://linkedin.com/in/sunilviyer', label: 'LinkedIn', desc: 'professional network', external: true },
      { href: 'https://github.com/sunilviyer', label: 'GitHub', desc: 'code repositories', external: true },
    ],
  },
];
