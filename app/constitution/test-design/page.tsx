'use client';

import React from 'react';
import NachiketaOpener from '../components/NachiketaOpener';

/**
 * Test page to preview the new Dharma Sanhita interior design
 * Visit: http://localhost:3006/constitution/test-design
 */
export default function TestDesignPage() {
  return (
    <NachiketaOpener
      partNumber="Part I"
      title="Vedic Foundation"
      subtitle="The Seven Pillars and the Philosophical Architecture"
      vedicStory="Nachiketa and Yama"
      devanagari="नचिकेतस् · यम"
      quote="The Self (Atman) is not born, nor does it die. It was not produced from anything, nor did anything come from it. Unborn, eternal, permanent, and primordial, it is not destroyed when the body is destroyed."
      quoteCitation="Katha Upanishad 1.2.18"
      boons={[
        {
          number: "1",
          label: "First Boon",
          text: "Let my father welcome me back with a calm heart"
        },
        {
          number: "2",
          label: "Second Boon",
          text: "Teach me the sacred fire ritual that leads to heaven"
        },
        {
          number: "3",
          label: "Third Boon",
          text: "When a person dies, does the self continue to exist, or does it not?",
          isThird: true
        }
      ]}
    />
  );
}
