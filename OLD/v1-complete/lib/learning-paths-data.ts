export interface LearningPath {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePrompt: string;
}

export const learningPaths: LearningPath[] = [
  {
    slug: 'history-context',
    title: 'History & Context',
    description: 'Understand the evolution of AI from theoretical foundations to modern applications, including key milestones, breakthroughs, and the socio-technical context shaping today\'s AI landscape.',
    imageUrl: '/images/paths/history-context.jpg',
    imagePrompt: 'A timeline visualization showing AI evolution from 1950s to present, with iconic symbols: Turing machine, neural network diagrams, early computers, modern GPUs, and robot silhouettes. Color palette: warm sepia tones transitioning to vibrant modern blues and greens. Style: abstract technical illustration with geometric shapes and connecting lines.'
  },
  {
    slug: 'foundation',
    title: 'Foundation',
    description: 'Master the fundamental concepts of AI including machine learning, neural networks, deep learning architectures, and the mathematical principles underlying modern AI systems.',
    imageUrl: '/images/paths/foundation.jpg',
    imagePrompt: 'Abstract visualization of a neural network with layered nodes and weighted connections, mathematical formulas floating in background (gradient descent, loss functions). Central brain-like structure made of interconnected geometric shapes. Color palette: deep blues, electric teals, and white highlights. Style: clean technical diagram with glowing elements.'
  },
  {
    slug: 'implementation',
    title: 'Implementation',
    description: 'Learn practical AI implementation strategies, development lifecycle, model training and deployment, MLOps best practices, and production-ready AI system architecture.',
    imageUrl: '/images/paths/implementation.jpg',
    imagePrompt: 'A developer workspace showing code on screens, cloud infrastructure diagrams, CI/CD pipeline visualization, and model training graphs. Mix of abstract code snippets, server racks, and deployment architecture. Color palette: dark charcoal background with bright green terminal text and orange deployment indicators. Style: modern tech illustration with isometric elements.'
  },
  {
    slug: 'risk-ethics',
    title: 'Risk & Ethics',
    description: 'Explore ethical considerations, bias mitigation, fairness frameworks, AI safety principles, and risk management strategies for responsible AI development and deployment.',
    imageUrl: '/images/paths/risk-ethics.jpg',
    imagePrompt: 'A balanced scale with AI elements on one side (robot, algorithms, data streams) and human elements on the other (diverse people, ethical symbols, justice scales). Radiating light from center representing transparency. Color palette: warm golds and deep purples with ethical green accents. Style: symbolic illustration with human-centered design elements.'
  },
  {
    slug: 'legal-compliance',
    title: 'Legal & Compliance',
    description: 'Navigate AI regulations, compliance frameworks (GDPR, AI Act), data governance, intellectual property considerations, and legal obligations for AI systems in production.',
    imageUrl: '/images/paths/legal-compliance.jpg',
    imagePrompt: 'A courthouse or legal building merged with digital elements: circuit board patterns, lock icons, compliance checkmarks, and regulatory document symbols. Global map in background with highlighted regulatory regions. Color palette: authoritative navy blues, legal burgundy, and gold accents. Style: professional corporate illustration with crisp lines and official aesthetics.'
  }
];
