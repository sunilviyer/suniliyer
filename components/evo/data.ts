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
  { num: "03", name: "PARCHMENT", era: "500 BCE", world: "vidya", title: "Articles", art: "/images/stages/articles.webp", desc: "26+ publications", href: "https://www.suniliyer.ca/articles" },
  { num: "04", name: "PAPER", era: "105 CE", world: "vidya", title: "Curriculum", art: "/images/stages/curriculum.webp", desc: "learning path", href: "https://www.suniliyer.ca/history" },
  { num: "05", name: "PRINTING PRESS", era: "1440", world: "vidya", title: "Constitution", art: "/images/stages/constitution.webp", desc: "AI principles", href: "https://www.suniliyer.ca/constitution" },
  { num: "06", name: "TYPEWRITER", era: "1868", world: "leela", title: "Gita", art: "/images/stages/gita.webp", desc: "interactive Bhagavad Gita", href: "https://www.suniliyer.ca/gita" },
  { num: "07", name: "PUNCH CARD", era: "1890", world: "leela", title: "Calvin and Hobbes", art: "/images/stages/calvinhobbes.webp", desc: "a cAlvIn parody", href: "https://www.suniliyer.ca/calvinhobbes" },
  { num: "08", name: "BINARY", era: "1945", world: "leela", title: "Creative Works", art: "/images/stages/creative.webp", desc: "art and animation", href: "https://www.suniliyer.ca/creative-works" },
  { num: "09", name: "NETWORK", era: "1983", world: "leela", title: "Behind the Scenes", art: "/images/stages/behind.webp", desc: "process and tools", href: "https://www.suniliyer.ca/behind-the-scenes" },
];
export const NAV = [
  { label: "Journey", href: "https://www.suniliyer.ca/journey" },
  { label: "Articles", href: "https://www.suniliyer.ca/articles" },
  { label: "Constitution", href: "https://www.suniliyer.ca/constitution" },
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
    { label: "History of AI", href: "https://www.suniliyer.ca/history" },
    { label: "Terminology", href: "https://www.suniliyer.ca/terminology" },
    { label: "Risk", href: "https://www.suniliyer.ca/risk" },
    { label: "Responsibility", href: "https://www.suniliyer.ca/responsibility" },
    { label: "Future of AI", href: "https://www.suniliyer.ca/future" },
  ]},
  { head: "Leela", links: [
    { label: "Bhagavad Gita", href: "https://www.suniliyer.ca/gita" },
    { label: "Calvin & Hobbes", href: "https://www.suniliyer.ca/calvinhobbes" },
    { label: "Creative Works", href: "https://www.suniliyer.ca/creative-works" },
    { label: "Behind the Scenes", href: "https://www.suniliyer.ca/behind-the-scenes" },
  ]},
  { head: "Connect", links: [
    { label: "My Journey", href: "https://www.suniliyer.ca/journey" },
    { label: "Articles", href: "https://www.suniliyer.ca/articles" },
    { label: "AGI Constitution", href: "https://www.suniliyer.ca/constitution" },
    { label: "Resume", href: "https://www.suniliyer.ca/downloads/Sunil_Iyer_Resume.pdf" },
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
