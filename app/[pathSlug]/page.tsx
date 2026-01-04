import { notFound } from 'next/navigation';
import { PathHeadline } from '@/components/shared/PathHeadline';
import { PathStackCards } from '@/components/shared/PathStackCards';
import { WireframeHeader } from '@/components/homepage/WireframeHeader';
import { getCardsByPath, getPathBySlug, getAllPathSlugs, getPathHeadline } from '@/lib/data/paths';
import { PathSlug } from '@/lib/types/path-card';

interface PathPageProps {
  params: Promise<{
    pathSlug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPathSlugs();
  return slugs.map((slug) => ({ pathSlug: slug }));
}

export async function generateMetadata({ params }: PathPageProps) {
  const { pathSlug } = await params;

  // Validate path slug
  const validSlugs: PathSlug[] = ['history', 'terminology', 'risk', 'responsibility', 'future'];
  if (!validSlugs.includes(pathSlug as PathSlug)) {
    return {
      title: 'Path Not Found - AIDefence',
    };
  }

  const pathInfo = await getPathBySlug(pathSlug as PathSlug);

  if (!pathInfo) {
    return {
      title: 'Path Not Found - AIDefence',
    };
  }

  return {
    title: `${pathInfo.title} - AIDefence`,
    description: pathInfo.description,
  };
}

export default async function PathPage({ params }: PathPageProps) {
  const { pathSlug } = await params;

  // Validate path slug
  const validSlugs: PathSlug[] = ['history', 'terminology', 'risk', 'responsibility', 'future'];
  if (!validSlugs.includes(pathSlug as PathSlug)) {
    notFound();
  }

  const typedPathSlug = pathSlug as PathSlug;

  const [cards, pathInfo] = await Promise.all([
    getCardsByPath(typedPathSlug),
    getPathBySlug(typedPathSlug),
  ]);

  if (!pathInfo) {
    notFound();
  }

  // Determine hero image based on path
  const heroImages: Record<PathSlug, string> = {
    history: '/images/history/ai-history-timeline-f.webp',
    terminology: '/images/terminology/terminology-hero.webp',
    risk: '/images/risk/risk-hero.webp',
    responsibility: '/images/responsibility/responsibility-hero.webp',
    future: '/images/future/future-hero.webp',
  };

  const heroImage = heroImages[typedPathSlug] || heroImages.history;
  const headline = getPathHeadline(typedPathSlug, pathInfo.title);

  return (
    <>
      <WireframeHeader />
      <main className="min-h-screen">
        <PathHeadline
          pathSlug={typedPathSlug}
          title={headline}
          description={pathInfo.description}
          heroImage={heroImage}
        />
        <PathStackCards cards={cards} pathSlug={typedPathSlug} />
      </main>
    </>
  );
}
