import { ThemeProvider } from '@/contexts/ThemeContext';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getPortfolioSocialMeta } from '@/lib/social-meta';

export const metadata = getPortfolioSocialMeta({
  title: 'My Journey',
  description: 'Professional timeline and career growth: From engineering to AI governance consulting.',
  path: '/journey',
  image: '/images/headercards/journey-header.webp',
});

export default function JourneyLayout({ children }: { children: React.ReactNode }) {
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'My Journey - Professional Timeline',
    description: 'Two decades of professional growth — from software engineering to AI governance. Roles, skills, and lessons learned across tech, consulting, and customer success.',
    url: 'https://www.suniliyer.ca/journey',
    image: '/images/headercards/journey-header.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['Career Journey', 'Professional Development', 'AI Governance', 'Customer Success', 'Software Engineering', 'Digital Transformation']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'My Journey', url: '/journey' }
  ]);

  return (
    <ThemeProvider>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      {children}
    </ThemeProvider>
  );
}
