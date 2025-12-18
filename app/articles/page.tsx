import { getAllArticles } from '@/lib/article-utils';
import { Metadata } from 'next';
import ArticlesWithFilter from '@/components/articles/ArticlesWithFilter';
import { FloatingMenu } from '@/components/navigation/FloatingMenu';

export const metadata: Metadata = {
  title: 'Articles | AIDefence',
  description: 'Browse all articles on AI governance, security, and responsible AI deployment.',
};

export default async function ArticlesPage() {
  // Server-side data fetching
  const articles = await getAllArticles();

  return (
    <>
      <FloatingMenu />
      <main id="main" tabIndex={-1} className="articles-page">
        <div className="articles-container">
          <h1 className="page-heading">Articles</h1>
          <p className="page-description">
            Explore insights on AI governance, risk management, and secure development practices.
          </p>

          {/* Category Filter and Articles Grid */}
          {articles.length === 0 ? (
            <p className="empty-state">No articles published yet. Check back soon!</p>
          ) : (
            <ArticlesWithFilter articles={articles} />
          )}
        </div>
      </main>
    </>
  );
}
