import { JsonLd } from '@/components/seo/JsonLd';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Mortgage Affordability & Cost Calculator - Sunil Iyer',
  description: 'Calculate mortgage affordability and total homeownership costs. Multi-scenario analysis including closing costs, property taxes, utilities, and maintenance.',
};

export default function MortgageCalculatorLayout({ children }: { children: React.ReactNode }) {
  const creativeWorkSchema = getCreativeWorkSchema({
    name: 'Mortgage Affordability & Cost Calculator',
    description: 'Calculate mortgage affordability and total homeownership costs. Multi-scenario analysis including closing costs, property taxes, utilities, and maintenance.',
    url: 'https://www.suniliyer.ca/mortgage-calculator',
    image: '/images/headercards/credit-card.webp',
    dateCreated: '2025-01-01T00:00:00Z',
    keywords: ['Mortgage Calculator', 'Affordability Calculator', 'Real Estate', 'Financial Planning', 'Homeownership Costs', 'Web Application']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mortgage Calculator', url: '/mortgage-calculator' }
  ]);

  return (
    <>
      <JsonLd data={[creativeWorkSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
