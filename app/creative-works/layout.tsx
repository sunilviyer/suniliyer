import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getPortfolioSocialMeta } from '@/lib/social-meta';

export const metadata = getPortfolioSocialMeta({
  title: 'Creative Works',
  description: 'Digital art, photography, mythology videos, and creative explorations across multiple mediums.',
  path: '/creative-works',
  image: '/images/heroes/creative-works.webp',
});

export default function CreativeWorksLayout({ children }: { children: React.ReactNode }) {
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'Creative Works',
    description: 'A lifetime of creative exploration — mythology videos, AI art, photography, and digital experiments. Part gallery, part bookshelf, part mixtape.',
    url: 'https://www.suniliyer.ca/creative-works',
    image: '/images/heroes/creative-card.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['Creative Works', 'Digital Art', 'Photography', 'Mythology', 'AI Art', 'Portfolio']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Creative Works', url: '/creative-works' }
  ]);

  return (
    <>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
