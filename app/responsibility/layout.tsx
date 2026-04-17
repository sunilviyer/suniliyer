import { JsonLd } from '@/components/seo/JsonLd';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Responsibility - AI Learning Path - Sunil Iyer',
  description: 'Navigate AI governance frameworks — EU AI Act, NIST RMF, ISO 42001. Learn transparency, accountability, and human-centered design principles.',
};

export default function ResponsibilityLayout({ children }: { children: React.ReactNode }) {
  const courseSchema = getCourseSchema({
    name: 'AI Responsibility - Governance & Compliance',
    description: 'Navigate AI governance frameworks — EU AI Act, NIST RMF, ISO 42001. Learn transparency, accountability, and human-centered design principles.',
    path: 'responsibility',
    articleCount: 8
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Responsibility', url: '/responsibility' }
  ]);

  return (
    <>
      <JsonLd data={[courseSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
