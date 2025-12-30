'use client';

import Image from 'next/image';

export interface PortfolioCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  externalLink: string;
}

export function PortfolioCard({
  title,
  description,
  thumbnailUrl,
  externalLink,
}: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card-thumbnail">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={`${title} project thumbnail`}
            width={400}
            height={200}
            className="portfolio-card-image"
          />
        ) : (
          <div className="portfolio-card-placeholder" />
        )}
      </div>

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{title}</h3>
        <p className="portfolio-card-description">{description}</p>

        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card-link"
          aria-label={`View ${title} project (opens in new tab)`}
        >
          View Project →
        </a>
      </div>
    </article>
  );
}
