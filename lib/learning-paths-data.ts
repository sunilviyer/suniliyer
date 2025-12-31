export interface LearningPathData {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const learningPathsData: LearningPathData[] = [
  {
    id: 1,
    number: "Learning Path 1",
    title: "History & Context",
    description: "Understand the evolution of AI from theoretical foundations to modern applications, including key milestones, breakthroughs, and the socio-technical context shaping today's AI landscape.",
    image: "/images/heroes/history-hero.webp",
    slug: "history",
  },
  {
    id: 2,
    number: "Learning Path 2",
    title: "Foundation",
    description: "Master the fundamental concepts of AI including machine learning, neural networks, and deep learning.",
    image: "/images/heroes/terminology-hero.webp",
    slug: "terminology",
  },
  {
    id: 3,
    number: "Learning Path 3",
    title: "Implementation",
    description: "Learn practical AI implementation strategies, deployment patterns, and production best practices.",
    image: "/images/heroes/danger-hero.webp",
    slug: "implementation",
  },
  {
    id: 4,
    number: "Learning Path 4",
    title: "Risk & Ethics",
    description: "Navigate the ethical challenges and risk management strategies for responsible AI deployment.",
    image: "/images/heroes/risk-hero.webp",
    slug: "risk",
  },
  {
    id: 5,
    number: "Learning Path 5",
    title: "Legal & Compliance",
    description: "Navigate AI regulations, compliance frameworks, data governance, and legal obligations.",
    image: "/images/heroes/responsibility-hero.webp",
    slug: "responsibility",
  },
];
