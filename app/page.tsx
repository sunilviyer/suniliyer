import Link from 'next/link';
import { getAllArticles } from '@/lib/article-utils';
import { portfolioProjects } from '@/lib/portfolio-data';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { FeaturedArticle } from '@/components/portfolio/FeaturedArticle';

export default async function HomePage() {
  // Fetch all articles and get top 3 for featured section
  const allArticles = await getAllArticles();
  const featuredArticles = allArticles.slice(0, 3);
  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content" className="homepage-main">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <h1 className="hero-title">Sunil Iyer</h1>

          <p className="hero-subtitle">
            AI Governance Expert, Security Professional
          </p>

          <p className="hero-description">
            With over two decades of experience in cybersecurity and technology
            leadership, I specialize in AI governance, risk management, and
            secure development practices. Explore my insights on responsible AI
            deployment and security frameworks.
          </p>

          {/* CTA Button */}
          <Link
            href="/articles"
            className="cta-button"
            aria-label="Explore articles on AI governance and security"
          >
            Explore Articles
          </Link>
        </section>

        {/* Resume/Experience Section - Placeholder */}
        <section id="resume" className="content-section">
          <h2 className="section-heading">Experience & Background</h2>
          <p style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
            20+ years in cybersecurity and technology leadership. Former CISO with
            expertise in AI governance, risk management, and secure development
            frameworks. Passionate about responsible AI deployment and regulatory
            compliance.
          </p>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="content-section">
          <h2 className="section-heading">Portfolio</h2>
          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                description={project.description}
                thumbnailUrl={project.thumbnailUrl}
                externalLink={project.externalLink}
              />
            ))}
          </div>
        </section>

        {/* Featured Articles Section */}
        <section id="featured-articles" className="content-section">
          <h2 className="section-heading">Featured Articles</h2>
          <div className="portfolio-grid">
            {featuredArticles.map((article) => (
              <FeaturedArticle key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
