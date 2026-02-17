export interface PortfolioItemData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const portfolioData: PortfolioItemData[] = [
  {
    id: 1,
    title: "Seshan Intelligence",
    description: "AI-powered business intelligence platform with advanced analytics",
    image: "/images/portfolio/seshan-intelligence.webp",
    link: "https://www.suniliyer.ca/seshan/demo/",
  },
  {
    id: 2,
    title: "Seshan Financial Dashboard",
    description: "Comprehensive financial analytics and reporting platform",
    image: "/images/portfolio/seshan-financial-dashboard.webp",
    link: "https://seshan-navy.vercel.app/",
  },
  {
    id: 3,
    title: "cAlvIn and Hobbes",
    description: "AI parody comic strips - Original artwork by Bill Watterson",
    image: "/images/portfolio/calvin-and-hobbes.webp",
    link: "/calvinhobbes",
  },
  {
    id: 4,
    title: "Mortgage Calculator",
    description: "Intelligent mortgage calculation and planning tool",
    image: "/images/portfolio/mortgage-calculator.webp",
    link: "/mortgage-calculator",
  },
  {
    id: 5,
    title: "Creative Works",
    description: "AI-generated art, videos, comics, and photography portfolio",
    image: "/images/portfolio/creative-works.webp",
    link: "/creative-works",
  },
  {
    id: 6,
    title: "Bhagavad Gita Journey",
    description: "Interactive journey through 10 transformative moments from the Bhagavad Gita",
    image: "/images/portfolio/gita.webp",
    link: "/gita",
  },
  {
    id: 7,
    title: "AI Agents",
    description: "Multi-agent AI system showcasing autonomous task orchestration and intelligent workflows",
    image: "/images/portfolio/AIagents.webp",
    link: "https://ai-agents-rosy-mu.vercel.app",
  },
];
