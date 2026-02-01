'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { timeline } from '@/data/journey/timeline';
import JourneyHeader from './JourneyHeader';
import JourneyFooter from './JourneyFooter';
import TimelineCard from './TimelineCard';
import { Linkedin, Download } from 'lucide-react';

export default function JourneyClientNew() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background-primary transition-colors duration-300">
        {/* Fixed Header */}
        <JourneyHeader />

        {/* Hero Section */}
        <div className="max-w-[1600px] mx-auto px-6 pt-32 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">My Journey</h1>
            <p className="text-xl text-text-secondary">
              From biotechnology roots to AI leadership — a two-decade journey of growth, innovation, and impact
            </p>
          </div>

          {/* Timeline Container - Full Width */}
          <div className="relative max-w-[1400px] mx-auto">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-secondary transform -translate-x-1/2 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={item.id} id={item.id} className="relative">
                    {/* Timeline Dot with Pulse Animation */}
                    <div className="absolute left-1/2 top-12 w-5 h-5 bg-accent-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-background-primary hidden md:block animate-pulse-glow" />

                    {/* Card Container */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isLeft ? '' : 'md:grid-flow-dense'}`}>
                      <div className={isLeft ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}>
                        <TimelineCard item={item} index={index} isLeft={isLeft} />
                      </div>
                      <div className={isLeft ? 'md:col-start-2' : ''} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact & Resume Section */}
          <div className="mt-24 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/suniliyer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">Contact Me</span>
            </a>
            <a
              href="/downloads/Sunil_Iyer_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-accent-primary text-accent-primary rounded-lg hover:bg-accent-primary/10 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">Download Resume</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <JourneyFooter />
      </main>
    </ThemeProvider>
  );
}
