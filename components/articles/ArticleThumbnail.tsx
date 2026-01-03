'use client';

import Image from 'next/image';

interface ArticleThumbnailProps {
  image: string;
  alt: string;
  title: string;
  tags: string[];
}

export function ArticleThumbnail({ image, alt, title, tags }: ArticleThumbnailProps) {
  return (
    <div className="article-thumbnail">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 920px) 100vw, 920px"
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Overlay with title and tags */}
      <div className="article-overlay">
        <h1 className="article-title">{title}</h1>

        <div className="article-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .article-thumbnail {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 60px;
          background: var(--bg-secondary);
        }

        .article-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 60px;
          z-index: 2;
        }

        .article-title {
          font-size: 56px;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--text-primary);
          font-family: var(--font-funnel-display);
        }

        .article-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .tag {
          display: inline-block;
          padding: 8px 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: #333d29;
          color: white;
          border-color: #333d29;
        }

        @media (max-width: 767px) {
          .article-thumbnail {
            height: 500px;
            margin-bottom: 40px;
          }

          .article-overlay {
            padding: 30px 24px;
          }

          .article-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
