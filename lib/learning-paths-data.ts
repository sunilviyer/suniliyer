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
    title: "History",
    description: "Trace AI's evolution from 1950s academic conferences to today's foundation models. Understand what AI is, how it works, and why GPUs power the AI revolution.",
    image: "/images/heroes/history-hero.webp",
    slug: "history",
  },
  {
    id: 2,
    number: "Learning Path 2",
    title: "Terminology",
    description: "Master AI terminology from machine learning to neural networks. Understand supervised vs. unsupervised learning, deep learning architectures, and foundation models.",
    image: "/images/heroes/terminology-hero.webp",
    slug: "terminology",
  },
  {
    id: 3,
    number: "Learning Path 3",
    title: "Risk",
    description: "Explore AI harms from algorithmic bias to deepfakes. Learn how bias enters systems, why explainability matters, and how to build trustworthy AI.",
    image: "/images/heroes/risk-hero.webp",
    slug: "risk",
  },
  {
    id: 4,
    number: "Learning Path 4",
    title: "Responsibility",
    description: "Navigate AI laws from GDPR to the EU AI Act. Implement governance frameworks, develop policies, and build ethical AI practices.",
    image: "/images/heroes/responsibility-hero.webp",
    slug: "responsibility",
  },
  {
    id: 5,
    number: "Learning Path 5",
    title: "Future",
    description: "Explore AGI, existential risk, and emerging trends. Navigate AI careers, industry-specific governance, and the future of regulation.",
    image: "/images/heroes/future-hero.webp",
    slug: "future",
  },
];
