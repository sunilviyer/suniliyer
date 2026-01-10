'use client';

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  variant?: 'default' | 'highlight' | 'sidebar';
}

export function PullQuote({ quote, attribution, variant = 'default' }: PullQuoteProps) {
  return (
    <>
      <blockquote className={`pull-quote ${variant}`}>
        <div className="quote-mark">&ldquo;</div>
        <p className="quote-text">{quote}</p>
        {attribution && (
          <cite className="quote-attribution">— {attribution}</cite>
        )}
      </blockquote>

      <style jsx>{`
        .pull-quote {
          position: relative;
          margin: 60px 0;
          padding: 40px 48px;
          border-left: 4px solid #936639;
          background: linear-gradient(135deg, #f8f6f1 0%, #ffffff 100%);
          border-radius: 0 8px 8px 0;
        }

        .pull-quote.highlight {
          background: linear-gradient(135deg, #fef8f0 0%, #fff5e8 100%);
          border-left-color: #d4a574;
        }

        .pull-quote.sidebar {
          margin: 40px -60px 40px 0;
          padding: 32px 40px;
          float: right;
          width: 400px;
          clear: right;
        }

        .quote-mark {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 120px;
          line-height: 1;
          color: rgba(147, 102, 57, 0.15);
          position: absolute;
          top: -20px;
          left: 20px;
        }

        .quote-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px;
          line-height: 1.5;
          color: #1a1a1a;
          font-style: italic;
          margin: 0 0 16px 0;
          position: relative;
          z-index: 1;
        }

        .quote-attribution {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #6b6b6b;
          font-style: normal;
          display: block;
        }

        @media (max-width: 768px) {
          .pull-quote {
            padding: 32px 28px;
            margin: 40px 0;
          }

          .pull-quote.sidebar {
            float: none;
            width: auto;
            margin: 40px 0;
          }

          .quote-text {
            font-size: 22px;
          }

          .quote-mark {
            font-size: 80px;
            top: -10px;
            left: 10px;
          }
        }
      `}</style>
    </>
  );
}
