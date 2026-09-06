export type Stratum = { id: string; num: string; name: string; era: string };
export const STRATA: Stratum[] = [
  { id: "cave-painting", num: "01", name: "CAVE PAINTING", era: "40,000 BCE" },
  { id: "rock-carving", num: "02", name: "ROCK CARVING", era: "10,000 BCE" },
  { id: "parchment", num: "03", name: "PARCHMENT", era: "500 BCE" },
  { id: "paper", num: "04", name: "PAPER", era: "105 CE" },
  { id: "printing-press", num: "05", name: "PRINTING PRESS", era: "1440" },
  { id: "typewriter", num: "06", name: "TYPEWRITER", era: "1868" },
  { id: "punch-card", num: "07", name: "PUNCH CARD", era: "1890" },
  { id: "binary", num: "08", name: "BINARY", era: "1945" },
  { id: "network", num: "09", name: "NETWORK", era: "1983" },
  { id: "ai-language", num: "10", name: "LANGUAGE MODELS", era: "NOW" },
];
export type World = "vidya" | "leela";
export const WORLDS: Record<World, { word: string; tag: string }> = {
  vidya: { word: "Vidya", tag: "The World of Knowledge" },
  leela: { word: "Leela", tag: "The World of Play" },
};
export type Stage = { num: string; name: string; era: string; world: World; title: string; desc: string; href: string; art: string };
export const STAGES: Stage[] = [
  { num: "02", name: "ROCK CARVING", era: "10,000 BCE", world: "vidya", title: "Agents", art: "/images/stages/agents.webp", desc: "agents and dashboards", href: "https://ai-agents-rosy-mu.vercel.app" },
  { num: "03", name: "PARCHMENT", era: "500 BCE", world: "vidya", title: "Articles", art: "/images/stages/articles.webp", desc: "26+ publications", href: "/articles" },
  { num: "04", name: "PAPER", era: "105 CE", world: "vidya", title: "Curriculum", art: "/images/stages/curriculum.webp", desc: "learning path", href: "/history" },
  { num: "05", name: "PRINTING PRESS", era: "1440", world: "vidya", title: "Constitution", art: "/images/stages/constitution.webp", desc: "AI principles", href: "/constitution" },
  { num: "06", name: "TYPEWRITER", era: "1868", world: "leela", title: "Gita", art: "/images/stages/gita.webp", desc: "interactive Bhagavad Gita", href: "/gita" },
  { num: "07", name: "PUNCH CARD", era: "1890", world: "leela", title: "Calvin and Hobbes", art: "/images/stages/calvinhobbes.webp", desc: "a cAlvIn parody", href: "/calvinhobbes" },
  { num: "08", name: "BINARY", era: "1945", world: "leela", title: "Creative Works", art: "/images/stages/creative.webp", desc: "art and animation", href: "/creative-works" },
  { num: "09", name: "NETWORK", era: "1983", world: "leela", title: "Behind the Scenes", art: "/images/stages/behind.webp", desc: "process and tools", href: "/behind-the-scenes" },
];
export const NAV = [
  { label: "Journey", href: "/journey" },
  { label: "Articles", href: "/articles" },
  { label: "Constitution", href: "/constitution" },
  { label: "Contact", href: "#contact" },
];
export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sunilviyer" },
  { label: "GitHub", href: "https://github.com/sunilviyer" },
  { label: "Medium", href: "https://medium.com/@sunilviswanathaniyer" },
];
export const BIO = "AI governance consultant with 18+ years serving enterprise customers. Free responsible AI curriculum, 26+ published articles, an AGI constitution, and working AI agents.";
export const FOOTER: { head: string; links: { label: string; href: string }[] }[] = [
  { head: "Vidya", links: [
    { label: "History of AI", href: "/history" },
    { label: "Terminology", href: "/terminology" },
    { label: "Risk", href: "/risk" },
    { label: "Responsibility", href: "/responsibility" },
    { label: "Future of AI", href: "/future" },
  ]},
  { head: "Leela", links: [
    { label: "Bhagavad Gita", href: "/gita" },
    { label: "Calvin & Hobbes", href: "/calvinhobbes" },
    { label: "Creative Works", href: "/creative-works" },
    { label: "Behind the Scenes", href: "/behind-the-scenes" },
  ]},
  { head: "Connect", links: [
    { label: "My Journey", href: "/journey" },
    { label: "Articles", href: "/articles" },
    { label: "AGI Constitution", href: "/constitution" },
    { label: "Resume", href: "/downloads/Sunil_Iyer_Resume.pdf" },
  ]},
];
export const CUES: { t: number; num: string; label: string }[] = [
  { t: 0.0, num: "01", label: "CAVE PAINTING" },
  { t: 0.1, num: "02", label: "ROCK CARVING" },
  { t: 0.2, num: "03", label: "PARCHMENT" },
  { t: 0.3, num: "04", label: "PAPER" },
  { t: 0.4, num: "05", label: "PRINTING PRESS" },
  { t: 0.5, num: "06", label: "TYPEWRITER" },
  { t: 0.6, num: "07", label: "PUNCH CARD" },
  { t: 0.7, num: "08", label: "BINARY" },
  { t: 0.8, num: "09", label: "NETWORK" },
  { t: 0.9, num: "10", label: "LANGUAGE MODELS" },
];
