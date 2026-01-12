import { NextRequest, NextResponse } from 'next/server';
import { getCardsByIds, getCardsByArticle } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const cardIds = searchParams.get('ids');
    const articleSlug = searchParams.get('article');

    // Fetch by article slug
    if (articleSlug) {
      const cards = await getCardsByArticle(articleSlug);
      return NextResponse.json({ cards, count: cards.length });
    }

    // Fetch by card IDs
    if (cardIds) {
      const idsArray = cardIds.split(',').map(id => id.trim()).filter(Boolean);
      const cards = await getCardsByIds(idsArray);
      return NextResponse.json({ cards, count: cards.length });
    }

    return NextResponse.json(
      { error: 'Missing required parameter: ids or article' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error in cards API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cards' },
      { status: 500 }
    );
  }
}
