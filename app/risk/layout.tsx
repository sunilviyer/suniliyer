import { JsonLd } from '@/components/seo/JsonLd';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getLearningPathSocialMeta } from '@/lib/social-meta';

export const metadata = getLearningPathSocialMeta({
  title: 'Risk - Understanding What Can Go Wrong',
  description: 'Understanding AI risks — algorithmic bias, hallucinations, privacy violations, deepfakes, and job displacement. Learn what can go wrong and why it matters.',
  path: 'risk',
});

export default function RiskLayout({ children }: { children: React.ReactNode }) {
  const courseSchema = getCourseSchema({
    name: 'AI Risk - Understanding What Can Go Wrong',
    description: 'Understanding AI risks — algorithmic bias, hallucinations, privacy violations, deepfakes, and job displacement. Learn what can go wrong and why it matters.',
    path: 'risk',
    articleCount: 8
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Risk', url: '/risk' }
  ]);

  return (
    <>
      <JsonLd data={[courseSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
