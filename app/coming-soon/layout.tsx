import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Coming Soon - Sunil Iyer',
  description: 'Something magical is cooking. New projects and features in development.',
};

export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'Coming Soon',
    description: 'Something magical is cooking. New projects and features in development.',
    url: 'https://www.suniliyer.ca/coming-soon',
    image: '/images/placeholder.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['Coming Soon', 'In Development', 'Future Projects', 'Portfolio']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Coming Soon', url: '/coming-soon' }
  ]);

  return (
    <>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
