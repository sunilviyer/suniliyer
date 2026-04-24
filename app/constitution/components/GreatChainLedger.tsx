'use client';

import React from 'react';

interface ChainEntry {
  year: string;
  document: string;
  subtitle?: string;
  power: string;
  seed: string;
  isNow?: boolean;
}

interface GreatChainLedgerProps {
  title: string;
  subtitle: string;
  entries: ChainEntry[];
}

export default function GreatChainLedger({ title, subtitle, entries }: GreatChainLedgerProps) {
  return (
    <div className="ib c-chain">
      <h2>{title}</h2>
      <div className="chain-sub">{subtitle}</div>

      <table className="chain-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Document</th>
            <th>Power Granted</th>
            <th>Philosophical Seed</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr key={i} className={entry.isNow ? 'is-now' : ''}>
              <td className="chain-year">{entry.year}</td>
              <td className="chain-doc">
                {entry.document}
                {entry.subtitle && <em>{entry.subtitle}</em>}
              </td>
              <td className="chain-pow">{entry.power}</td>
              <td className="chain-seed">{entry.seed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
