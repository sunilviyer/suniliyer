import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getPortfolioSocialMeta } from '@/lib/social-meta';

export const metadata = getPortfolioSocialMeta({
  title: 'Behind the Scenes',
  description: 'Nine projects, nine journeys. The spark, the struggle, and the lesson behind each build.',
  path: '/behind-the-scenes',
  image: '/images/heroes/behind-scenes.webp',
});

export default function BehindTheScenesLayout({ children }: { children: React.ReactNode }) {
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'Behind the Scenes',
    description: 'Nine projects, nine journeys. The spark, the struggle, and the lesson behind each build — from AI agents to the Bhagavad Gita.',
    url: 'https://www.suniliyer.ca/behind-the-scenes',
    image: '/images/heroes/behind-scenes.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['Portfolio', 'Project Stories', 'AI Projects', 'Creative Process', 'Development Journey', 'Case Studies']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behind the Scenes', url: '/behind-the-scenes' }
  ]);

  return (
    <>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
