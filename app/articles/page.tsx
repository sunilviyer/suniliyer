import ArticlesPinboard from '@/behind-the-scenes/ArticlesPinboard';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Published Articles - Sunil Iyer',
  description: 'Explore my collection of published articles on AI governance, risk management, and responsible technology. Expert insights on building trustworthy AI systems.',
};

export default function ArticlesPage() {
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'Published Articles',
    description: 'Explore my collection of published articles on AI governance, risk management, and responsible technology. Expert insights on building trustworthy AI systems.',
    url: 'https://www.suniliyer.ca/articles',
    image: '/images/medium/Notebook.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['AI Governance', 'Risk Management', 'Responsible AI', 'Technology Ethics', 'Published Articles']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Published Articles', url: '/articles' }
  ]);

  return (
    <>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      <ArticlesPinboard />
    </>
  );
}
