import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.suniliyer.ca';
  const currentDate = new Date().toISOString();

  // Main pages with high priority
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/journey`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/behind-the-scenes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creative-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Portfolio pages
  const portfolioPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/calvinhobbes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gita`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coming-soon`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ];

  // Learning Path: History
  const historyRoutes = [
    'ai-family-tree',
    'ai-history',
    'deep-learning-decoded',
    'generative-ai-explained',
    'how-machines-learn',
    'large-language-models',
    'types-of-ai-intelligence',
    'what-ai-actually-is',
  ];

  // Learning Path: Risk
  const riskRoutes = [
    'ai-hallucinations',
    'ai-misinformation',
    'ai-privacy',
    'algorithmic-bias',
    'autonomous-weapons',
    'deepfakes-synthetic-media',
    'job-displacement',
    'when-ai-goes-wrong',
  ];

  // Learning Path: Responsibility
  const responsibilityRoutes = [
    'ai-accountability',
    'ai-transparency',
    'cross-border-compliance',
    'eu-ai-act-explained',
    'global-ai-law-tracker',
    'human-centered-ai',
    'iso-42001',
    'nist-ai-rmf',
  ];

  // Learning Path: Future
  const futureRoutes = [
    'agi-governance',
    'ai-existential-risk',
    'ai-governance-careers',
    'ai-national-security',
    'ai-safety',
    'future-ai-ethics',
    'future-ai-regulation',
    'trustworthy-ai',
  ];

  // Learning Path: Terminology
  const terminologyRoutes = [
    'ai-compute',
    'ai-technology-stack',
    'ai-vs-automation',
    'black-box-problem',
    'data-behind-ai',
    'environmental-cost-ai',
    'foundation-models',
    'multimodal-ai',
  ];

  // Learning path index pages
  const learningPathIndexPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/history`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/risk`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/responsibility`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/future`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terminology`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Generate learning path content pages
  const historyPages: MetadataRoute.Sitemap = historyRoutes.map(route => ({
    url: `${baseUrl}/history/${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const riskPages: MetadataRoute.Sitemap = riskRoutes.map(route => ({
    url: `${baseUrl}/risk/${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const responsibilityPages: MetadataRoute.Sitemap = responsibilityRoutes.map(route => ({
    url: `${baseUrl}/responsibility/${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const futurePages: MetadataRoute.Sitemap = futureRoutes.map(route => ({
    url: `${baseUrl}/future/${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const terminologyPages: MetadataRoute.Sitemap = terminologyRoutes.map(route => ({
    url: `${baseUrl}/terminology/${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Combine all pages
  return [
    ...mainPages,
    ...portfolioPages,
    ...learningPathIndexPages,
    ...historyPages,
    ...riskPages,
    ...responsibilityPages,
    ...futurePages,
    ...terminologyPages,
  ];
}
