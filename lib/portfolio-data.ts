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
    link: "/coming-soon",
  },
  {
    id: 2,
    title: "Seshan Financial Dashboard",
    description: "Comprehensive financial analytics and reporting platform",
    image: "/images/portfolio/seshan-financial-dashboard.webp",
    link: "/coming-soon",
  },
  {
    id: 3,
    title: "cAlvIn and Hobbes",
    description: "AI-powered creative content generation platform",
    image: "/images/portfolio/calvin-and-hobbes.webp",
    link: "/coming-soon",
  },
  {
    id: 4,
    title: "Mortgage Calculator",
    description: "Intelligent mortgage calculation and planning tool",
    image: "/images/portfolio/mortgage-calculator.webp",
    link: "/coming-soon",
  },
  {
    id: 5,
    title: "Governance Learning Path",
    description: "Interactive AI governance training and certification platform",
    image: "/images/portfolio/governance-learning-path.webp",
    link: "/coming-soon",
  },
];
