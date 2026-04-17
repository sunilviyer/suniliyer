import { JsonLd } from '@/components/seo/JsonLd';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Terminology - AI Learning Path - Sunil Iyer',
  description: 'Master essential AI terminology — from foundation models to the black box problem. Build your technical vocabulary for navigating AI discussions.',
};

export default function TerminologyLayout({ children }: { children: React.ReactNode }) {
  const courseSchema = getCourseSchema({
    name: 'AI Terminology - Essential Vocabulary',
    description: 'Master essential AI terminology — from foundation models to the black box problem. Build your technical vocabulary for navigating AI discussions.',
    path: 'terminology',
    articleCount: 8
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Terminology', url: '/terminology' }
  ]);

  return (
    <>
      <JsonLd data={[courseSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
