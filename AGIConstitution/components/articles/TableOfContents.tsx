'use client';

interface TableOfContentsProps {
  sections: string[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="table-of-contents">
      <h4 className="toc-title">📖 In This Article</h4>
      <ul className="toc-nav">
        {sections.map((section) => (
          <li key={section}>
            <a href={`#${slugify(section)}`}>{section}</a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .table-of-contents {
          background: var(--bg-secondary);
          border-left: 4px solid #333d29;
          padding: 32px;
          border-radius: 8px;
          margin-bottom: 60px;
        }

        .toc-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .toc-nav {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .toc-nav :global(a) {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        .toc-nav :global(a):hover {
          color: #333d29;
        }

        @media (max-width: 767px) {
          .table-of-contents {
            padding: 24px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
}
