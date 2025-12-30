import { Hero } from '@/components/homepage/Hero';
import { PathPreviewCard } from '@/components/homepage/PathPreviewCard';
import { LEARNING_PATHS } from '@/lib/constants';

export default function HomePage() {
  return (
    <main className="pt-16">
      <Hero />

      {/* Learning Paths Section */}
      <section id="paths" className="min-h-screen py-20 px-4 bg-gradient-to-b from-charcoal to-moss">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-ivory">
            5 Learning Paths
          </h2>
          <p className="text-center text-cream mb-12 max-w-2xl mx-auto">
            Comprehensive, expert-curated content to master AI governance, from foundational concepts to advanced compliance strategies.
          </p>

          {/* Path Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {LEARNING_PATHS.map((path) => (
              <PathPreviewCard key={path.id} path={path} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-cream mb-4">
              Ready to build your AI governance expertise?
            </p>
            <a
              href="#paths"
              className="inline-block px-6 py-3 bg-toffee text-ivory font-semibold rounded-lg hover:bg-saddle transition-all duration-300"
            >
              Choose Your Path
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
