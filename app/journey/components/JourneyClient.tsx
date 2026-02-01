'use client';

import { roles } from '@/data/journey/roles';
import { timelineSections } from '@/data/journey/constants';
import { ThemeProvider } from '@/contexts/ThemeContext';
import JourneyHeader from './JourneyHeader';
import JourneyFooter from './JourneyFooter';
import Timeline from './Timeline';
import RoleCard from './RoleCard';

export default function JourneyClient() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background-primary transition-colors duration-300">
        {/* Fixed Header */}
        <JourneyHeader />

        {/* Main Content Grid */}
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-8">
            {/* Timeline Sidebar (Desktop) */}
            <aside className="hidden lg:block">
              <Timeline sections={timelineSections} />
            </aside>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Hero */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">My Journey</h1>
                <p className="text-xl text-text-secondary">
                  Results-driven leader specializing in AI adoption, customer success, and digital transformation
                </p>
              </div>

              {/* Role Cards */}
              <section id="career" className="space-y-6">
                {roles.map((role) => (
                  <RoleCard key={role.id} role={role} />
                ))}
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <JourneyFooter />
      </main>
    </ThemeProvider>
  );
}
