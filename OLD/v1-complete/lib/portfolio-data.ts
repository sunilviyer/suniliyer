/**
 * Portfolio Data
 *
 * Hardcoded portfolio projects for homepage display.
 *
 * @module lib/portfolio-data
 */

export interface PortfolioProject {
  title: string;
  description: string;
  thumbnailUrl: string;
  externalLink: string;
}

/**
 * Portfolio projects to display on homepage
 *
 * Currently using placeholder data. Replace with actual projects in production.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'AI Governance Framework Implementation',
    description: 'Developed comprehensive AI governance framework for enterprise deployment, including risk assessment protocols and compliance monitoring systems.',
    thumbnailUrl: '', // Placeholder - will show gradient fallback
    externalLink: '#',
  },
  {
    title: 'Security Audit Automation Tool',
    description: 'Built automated security audit tool for AI systems, reducing manual review time by 70% while improving detection accuracy.',
    thumbnailUrl: '', // Placeholder - will show gradient fallback
    externalLink: '#',
  },
  {
    title: 'Regulatory Compliance Dashboard',
    description: 'Created real-time compliance dashboard tracking AI system adherence to EU AI Act, GDPR, and industry-specific regulations.',
    thumbnailUrl: '', // Placeholder - will show gradient fallback
    externalLink: '#',
  },
];
