import { JsonLd } from '@/components/seo/JsonLd';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Risk - AI Learning Path - Sunil Iyer',
  description: 'Understanding AI risks — algorithmic bias, hallucinations, privacy violations, deepfakes, and job displacement. Learn what can go wrong and why it matters.',
};

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
