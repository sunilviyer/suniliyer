import Link from 'next/link';
import { FloatingMenu } from '@/components/navigation/FloatingMenu';

export default function NotFound() {
  return (
    <>
      <FloatingMenu />
      <main
        id="main-content"
        className="flex flex-col items-center justify-center min-h-screen px-4"
        style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}
      >
        <div className="max-w-2xl text-center">
          {/* 404 Status */}
          <div
            className="mb-8"
            style={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              fontWeight: 700,
              lineHeight: 1,
              color: 'var(--color-category-risk-assessment)',
              opacity: 0.2,
            }}
          >
            404
          </div>

          {/* Main Message */}
          <h1
            className="mb-4"
            style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 600,
              lineHeight: 'var(--line-height-tight)',
              color: 'var(--color-text-primary)',
            }}
          >
            Article Not Found
          </h1>

          <p
            className="mb-8"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto var(--space-lg)',
            }}
          >
            The article you're looking for doesn't exist or may have been moved.
            Let's get you back on track.
          </p>

          {/* Navigation Actions */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ marginTop: 'var(--space-xl)' }}
          >
            <Link
              href="/articles"
              className="not-found-primary-action inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all"
              style={{
                backgroundColor: 'var(--color-category-governance-compliance)',
                color: 'var(--color-surface)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 500,
                textDecoration: 'none',
                minWidth: '200px',
                border: 'none',
              }}
            >
              View All Articles
            </Link>

            <Link
              href="/"
              className="not-found-secondary-action inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 500,
                textDecoration: 'none',
                minWidth: '200px',
                border: '2px solid var(--color-border)',
              }}
            >
              Go to Homepage
            </Link>
          </div>

          {/* Helpful Tip */}
          <p
            className="mt-12"
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-tertiary)',
              lineHeight: 'var(--line-height-relaxed)',
            }}
          >
            Looking for something specific? Try browsing our{' '}
            <Link
              href="/articles"
              style={{
                color: 'var(--color-category-governance-compliance)',
                textDecoration: 'underline',
              }}
            >
              articles by category
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
