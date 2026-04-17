import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Bhagavad Gita - Ten Moments of Transformation - Sunil Iyer',
  description: 'Explore the Bhagavad Gita through ten transformative moments. Interactive dharma wheel with Sanskrit verses, translations, and practical wisdom for modern life.',
};

export default function GitaLayout({ children }: { children: React.ReactNode }) {
  // Schema.org structured data
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'Bhagavad Gita - Ten Moments of Transformation',
    description: 'Explore the Bhagavad Gita through ten transformative moments. Interactive dharma wheel with Sanskrit verses, translations, and practical wisdom for modern life.',
    url: 'https://www.suniliyer.ca/gita',
    image: '/images/heroes/gita-card.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['Bhagavad Gita', 'Dharma', 'Philosophy', 'Sanskrit', 'Spirituality', 'Interactive Learning']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Bhagavad Gita', url: '/gita' }
  ]);

  return (
    <>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
