import { JsonLd } from '@/components/seo/JsonLd';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getLearningPathSocialMeta } from '@/lib/social-meta';

export const metadata = getLearningPathSocialMeta({
  title: 'History from Dartmouth to DeepMind',
  description: 'Trace AI evolution from 1950s academic conferences to foundation models. Understand what AI is, how it works, and why it matters through 8 comprehensive articles.',
  path: 'history',
});

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  const courseSchema = getCourseSchema({
    name: 'AI History - From Dartmouth to DeepMind',
    description: 'Trace AI evolution from 1950s academic conferences to foundation models. Understand what AI is, how it works, and why it matters through 8 comprehensive articles.',
    path: 'history',
    articleCount: 8
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI History', url: '/history' }
  ]);

  return (
    <>
      <JsonLd data={[courseSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
