'use client';

import React from 'react';

interface TableRendererProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

/**
 * Styled table component for Schedules, Samskaras, etc.
 * Header row: deep blue background with white text
 * Body rows: subtle striping on hover
 */
export default function TableRenderer({ headers, rows, caption }: TableRendererProps) {
  return (
    <div className="constitution-table-wrapper">
      {caption && (
        <div className="constitution-body" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
          {caption}
        </div>
      )}
      <table className="constitution-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
