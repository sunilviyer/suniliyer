'use client';

import { createContext, useContext, ReactNode } from 'react';
import { CardType } from '@/lib/db';

export interface CardData {
  id: string;
  title: string;
  type: CardType;
  summary: string;
  tags: string[];
  articleSlug?: string;
}

interface CardContextValue {
  cards: Record<string, CardData>;
}

const CardContext = createContext<CardContextValue>({ cards: {} });

export function CardProvider({
  cards,
  children,
}: {
  cards: Record<string, CardData>;
  children: ReactNode;
}) {
  return <CardContext.Provider value={{ cards }}>{children}</CardContext.Provider>;
}

export function useCard(cardId: string): CardData | null {
  const { cards } = useContext(CardContext);
  return cards[cardId] || null;
}

export function useCards() {
  return useContext(CardContext);
}
