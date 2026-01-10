'use client';

interface TableColumn {
  header: string;
  accessor: string;
  width?: string;
}

interface EnhancedTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  caption?: string;
  variant?: 'default' | 'striped' | 'bordered';
}

export function EnhancedTable({ columns, data, caption, variant = 'striped' }: EnhancedTableProps) {
  return (
    <>
      <div className="table-wrapper">
        {caption && <div className="table-caption">{caption}</div>}
        <div className="table-scroll">
          <table className={`enhanced-table ${variant}`}>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    style={{ width: col.width }}
                    className="table-header"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="table-row">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="table-cell">
                      {row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .table-wrapper {
          margin: 48px 0;
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .table-caption {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          padding: 20px 24px;
          background: rgba(26, 26, 26, 0.02);
          border-bottom: 1px solid rgba(26, 26, 26, 0.1);
        }

        .table-scroll {
          overflow-x: auto;
        }

        .enhanced-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-header {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #1a1a1a;
          text-align: left;
          padding: 16px 24px;
          background: rgba(147, 102, 57, 0.05);
          border-bottom: 2px solid #936639;
        }

        .table-cell {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 16px;
          line-height: 1.6;
          color: #1a1a1a;
          padding: 16px 24px;
          border-bottom: 1px solid rgba(26, 26, 26, 0.06);
        }

        .enhanced-table.striped .table-row:nth-child(even) {
          background: rgba(26, 26, 26, 0.02);
        }

        .enhanced-table.bordered .table-cell {
          border-right: 1px solid rgba(26, 26, 26, 0.06);
        }

        .enhanced-table.bordered .table-cell:last-child {
          border-right: none;
        }

        .table-row {
          transition: background 0.2s ease;
        }

        .table-row:hover {
          background: rgba(147, 102, 57, 0.03);
        }

        .table-row:last-child .table-cell {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .table-header,
          .table-cell {
            padding: 12px 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
