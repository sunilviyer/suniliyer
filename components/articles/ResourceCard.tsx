'use client';

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    type: 'template' | 'checklist' | 'assessment' | 'decision-tree' | 'playbook' | 'matrix' | 'guide';
    purpose: string;
    whenToUse?: string[];
    keySections?: string[];
    downloadUrl?: string;
    previewUrl?: string;
    formats?: string[];
  };
  index: number;
  _path: string;
}

const typeConfig = {
  template: { badge: '📋 TEMPLATE', color: '#3182CE' },
  checklist: { badge: '✅ CHECKLIST', color: '#38A169' },
  assessment: { badge: '📊 ASSESSMENT', color: '#805AD5' },
  'decision-tree': { badge: '🌳 DECISION TREE', color: '#DD6B20' },
  playbook: { badge: '📕 PLAYBOOK', color: '#E53E3E' },
  matrix: { badge: '📐 MATRIX', color: '#319795' },
  guide: { badge: '📖 GUIDE', color: '#744210' }
};

export function ResourceCard({ resource, index,  _path }: ResourceCardProps) {
  const config = typeConfig[resource.type];

  return (
    <>
      <div
        className="resource-card"
        style={{
          animationDelay: `${index * 0.1}s`,
          borderLeftColor: config.color
        }}
      >
        <div className="card-header">
          <span className="resource-badge" style={{ color: config.color, backgroundColor: `${config.color}15` }}>
            {config.badge}
          </span>
        </div>

        <h4 className="resource-title">{resource.title}</h4>

        <p className="resource-purpose">{resource.purpose}</p>

        {resource.keySections && resource.keySections.length > 0 && (
          <div className="key-sections">
            <strong>📂 Sections Included:</strong>
            <ul>
              {resource.keySections.map((section, idx) => (
                <li key={idx}>{section}</li>
              ))}
            </ul>
          </div>
        )}

        {resource.whenToUse && resource.whenToUse.length > 0 && (
          <div className="when-to-use">
            <strong>🕐 Use When:</strong>
            <ul>
              {resource.whenToUse.map((use, idx) => (
                <li key={idx}>{use}</li>
              ))}
            </ul>
          </div>
        )}

        {(resource.downloadUrl || resource.previewUrl || resource.formats) && (
          <div className="resource-actions">
            {resource.formats && resource.formats.map((format, idx) => (
              <button key={idx} className="download-btn" style={{ borderColor: config.color, color: config.color }}>
                📥 {format.toUpperCase()}
              </button>
            ))}
            {resource.previewUrl && (
              <button className="preview-btn">
                👁️ Preview
              </button>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .resource-card {
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-left: 4px solid #3182CE;
          border-radius: 8px;
          padding: 24px;
          animation: slideInUp 0.5s ease-out both;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-header {
          margin-bottom: 16px;
        }

        .resource-badge {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .resource-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .resource-purpose {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0 0 20px 0;
        }

        .key-sections,
        .when-to-use {
          margin-bottom: 20px;
        }

        .key-sections strong,
        .when-to-use strong {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 10px;
        }

        .key-sections ul,
        .when-to-use ul {
          margin: 0;
          padding-left: 20px;
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4a4a4a;
        }

        .key-sections li,
        .when-to-use li {
          margin-bottom: 6px;
        }

        .resource-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(26, 26, 26, 0.1);
        }

        .download-btn,
        .preview-btn {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 2px solid;
        }

        .download-btn {
          background: white;
        }

        .download-btn:hover {
          background: currentColor;
          color: white !important;
        }

        .preview-btn {
          background: white;
          border-color: #6b6b6b;
          color: #6b6b6b;
        }

        .preview-btn:hover {
          background: #6b6b6b;
          color: white;
        }

        @media (max-width: 768px) {
          .resource-card {
            padding: 20px;
          }

          .resource-title {
            font-size: 18px;
          }

          .resource-actions {
            flex-direction: column;
          }

          .download-btn,
          .preview-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
