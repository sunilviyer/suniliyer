import { HistoryHeadline } from '@/components/history/HistoryHeadline';
import { HistoryStackCards } from '@/components/history/HistoryStackCards';
import { getHistoryCards, getHistoryPath } from '@/lib/data/history';
import { WireframeHeader } from '@/components/homepage/WireframeHeader';

export default async function HistoryPage() {
  const cards = await getHistoryCards();
  const pathInfo = await getHistoryPath();

  if (!pathInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-[var(--text-secondary)]">
          History path not found
        </p>
      </div>
    );
  }

  return (
    <>
      <WireframeHeader />
      <main className="min-h-screen">
        <HistoryHeadline
          title={`${pathInfo.title} from Dartmouth to DeepMind`}
          description={pathInfo.description}
        />
        <HistoryStackCards cards={cards} />
      </main>
    </>
  );
}

export const metadata = {
  title: 'History & Foundations - AIDefence',
  description: 'Trace AI\'s evolution from 1950s academic conferences to today\'s foundation models. Understand what AI is, how it works, and why GPUs power the AI revolution.',
};
