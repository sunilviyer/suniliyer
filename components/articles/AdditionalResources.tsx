'use client';

import { Accordion } from './Accordion';

interface AdditionalResourcesProps {
  resources: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}

export function AdditionalResources({ resources }: AdditionalResourcesProps) {
  if (!resources || resources.length === 0) return null;

  return (
    <>
      <div className="additional-resources-section">
        <Accordion title="Additional Resources" defaultOpen={false}>
          <ul className="resources-list">
            {resources.map((resource, index) => (
              <li key={index} className="resource-item">
                <span className="resource-type">{resource.type}</span>
                <a href={resource.url} className="resource-link" target="_blank" rel="noopener noreferrer">
                  {resource.title}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="external-icon">
                    <path d="M11 7.5V11.5C11 11.7761 10.7761 12 10.5 12H2.5C2.22386 12 2 11.7761 2 11.5V3.5C2 3.22386 2.22386 3 2.5 3H6.5M9 2H12M12 2V5M12 2L6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </Accordion>
      </div>

      <style jsx>{`
        .additional-resources-section {
          margin-top: 80px;
          margin-bottom: 40px;
        }

        .resources-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .resource-item {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(26, 26, 26, 0.06);
        }

        .resource-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .resource-type {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6b6b6b;
          font-weight: 600;
          display: block;
          margin-bottom: 8px;
        }

        .resource-link {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 17px;
          color: #1a1a1a;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
          font-weight: 600;
        }

        .resource-link:hover {
          color: #936639;
        }

        .external-icon {
          opacity: 0.4;
          transition: opacity 0.2s ease;
        }

        .resource-link:hover .external-icon {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
