import Link from 'next/link';

export default function JourneyFooter() {
  return (
    <footer className="border-t border-border-primary py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors">
          ← Back to suniliyer.ca
        </Link>

        <span className="text-text-tertiary text-sm">© 2026 Sunil Iyer</span>
      </div>
    </footer>
  );
}
