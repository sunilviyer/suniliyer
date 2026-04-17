import { JsonLd } from '@/components/seo/JsonLd';
import { getCourseSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Future - AI Learning Path - Sunil Iyer',
  description: 'Explore AI future — AGI governance, existential risk, AI safety, ethics, regulation, and trustworthy AI. Prepare for what comes next.',
};

export default function FutureLayout({ children }: { children: React.ReactNode }) {
  const courseSchema = getCourseSchema({
    name: 'AI Future - What Comes Next',
    description: 'Explore AI future — AGI governance, existential risk, AI safety, ethics, regulation, and trustworthy AI. Prepare for what comes next.',
    path: 'future',
    articleCount: 8
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Future', url: '/future' }
  ]);

  return (
    <>
      <JsonLd data={[courseSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
