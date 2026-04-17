import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'cAlvIn & Hobbes - AI Through Comics - Sunil Iyer',
  description: 'cAlvIn is a small robot learning about AI — hallucination, alignment, guardrails, and existential questions. Inspired by Calvin & Hobbes.',
};

export default function CalvinHobbesLayout({ children }: { children: React.ReactNode }) {
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'cAlvIn & Hobbes - AI Through Comics',
    description: 'cAlvIn is a small robot learning about AI — hallucination, alignment, guardrails, and existential questions. Inspired by Calvin & Hobbes.',
    url: 'https://www.suniliyer.ca/calvinhobbes',
    image: '/images/heroes/calvin-card.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['AI Comics', 'AI Education', 'Calvin & Hobbes', 'AI Safety', 'Machine Learning', 'Creative Writing']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'cAlvIn & Hobbes', url: '/calvinhobbes' }
  ]);

  return (
    <>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
