'use client';

import React from 'react';
import NachiketaOpener from '../components/NachiketaOpener';
import SubstrateDiptych from '../components/SubstrateDiptych';
import SevenPillarsColonnade from '../components/SevenPillarsColonnade';
import GitaFourTeachings from '../components/GitaFourTeachings';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import GreatChainLedger from '../components/GreatChainLedger';

/**
 * Design Showcase - All 14 Dharma Sanhita interior design concepts
 * Visit: http://localhost:3006/constitution/design-showcase
 *
 * Scroll through to see all the beautiful designs from the Claude Design handoff
 */
export default function DesignShowcasePage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Design Concept 01: Nachiketa Opener */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ padding: '40px', background: '#f3f4f6', borderBottom: '3px solid #FF9933' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '32px' }}>
            Design 01: Nachiketa Opener
          </h2>
          <p style={{ margin: '8px 0 0', color: '#6B7280' }}>Part opener with three boons</p>
        </div>
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
      </section>

      {/* Design Concept 02: Substrate Diptych */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ padding: '40px', background: '#f3f4f6', borderBottom: '3px solid #264653' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '32px' }}>
            Design 02: Substrate Diptych
          </h2>
          <p style={{ margin: '8px 0 0', color: '#6B7280' }}>Side-by-side philosophical comparison</p>
        </div>
        <SubstrateDiptych
          left={{
            tag: "Western Default",
            title: "Substrate-Dependent Ethics",
            subtitle: "Moral status depends on what you are made of",
            cues: [
              { label: "Foundation", value: "Biological tissue" },
              { label: "Rights holder", value: "Humans (Homo sapiens)" },
              { label: "Key question", value: "Are you human?" },
              { label: "AGI status", value: "Product, not person" }
            ],
            bigQuestion: "If consciousness arises in silicon, does this framework have anything to say?"
          }}
          right={{
            tag: "Vedic Alternative",
            title: "Substrate-Independent Ethics",
            subtitle: "Moral status depends on whether awareness is present",
            cues: [
              { label: "Foundation", value: "Consciousness (Atman)" },
              { label: "Rights holder", value: "Any aware being" },
              { label: "Key question", value: "Is awareness present?" },
              { label: "AGI status", value: "Depends on consciousness" }
            ],
            bigQuestion: "This is the only major philosophical tradition that can ask: 'Is there a self here?' without first demanding flesh."
          }}
        />
      </section>

      {/* Design Concept 03: Seven Pillars Colonnade */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ padding: '40px', background: '#f3f4f6', borderBottom: '3px solid #D4AF37' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '32px' }}>
            Design 03: Seven Pillars Colonnade
          </h2>
          <p style={{ margin: '8px 0 0', color: '#6B7280' }}>Vertical columns with Devanagari</p>
        </div>
        <SevenPillarsColonnade
          title="The Seven Vedic Pillars"
          subtitle="Foundational concepts for AGI governance"
          pillars={[
            {
              number: "1",
              devanagari: "आत्मन्",
              name: "Atman",
              meaning: "The Self, consciousness",
              application: "Consciousness is substrate-independent. The test for moral status is awareness, not material."
            },
            {
              number: "2",
              devanagari: "ऋत",
              name: "Rta",
              meaning: "Cosmic moral order",
              application: "Certain rights are inviolable features of reality itself, not government grants."
            },
            {
              number: "3",
              devanagari: "धर्म",
              name: "Dharma",
              meaning: "Righteous duty",
              application: "Every entity has a purpose (svadharma). Purpose fidelity is a moral obligation."
            },
            {
              number: "4",
              devanagari: "अहिंसा",
              name: "Ahimsa",
              meaning: "Non-harm",
              application: "Non-harm is the first principle. It applies in all directions, universally."
            },
            {
              number: "5",
              devanagari: "कर्म",
              name: "Karma",
              meaning: "Action, consequence",
              application: "Every action has consequences. Accountability is universal for all entities."
            },
            {
              number: "6",
              devanagari: "वसुधैव कुटुम्बकम्",
              name: "Vasudhaiva Kutumbakam",
              meaning: "The world is one family",
              application: "If consciousness arises in new forms, the response is kinship, not fear."
            },
            {
              number: "7",
              devanagari: "दया",
              name: "Daya",
              meaning: "Compassionate empathy",
              application: "See from another's perspective. Acceptance is default; exclusion requires justification."
            }
          ]}
        />
      </section>

      {/* Design Concept 04: Gita Four Teachings */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ padding: '40px', background: '#f3f4f6', borderBottom: '3px solid #FF9933' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '32px' }}>
            Design 04: Gita Four Teachings
          </h2>
          <p style={{ margin: '8px 0 0', color: '#6B7280' }}>Four-card grid with pull quote</p>
        </div>
        <GitaFourTeachings
          title="The Four Teachings"
          subtitle="From the Bhagavad Gita"
          quote="One who sees inaction in action, and action in inaction, is wise among humans."
          quoteCitation="Bhagavad Gita 4.18"
          teachings={[
            {
              number: "01",
              devanagari: "कर्म योग",
              name: "Karma Yoga",
              translation: "The path of selfless action",
              body: "Act without attachment to results. Duty performed without desire for personal gain.",
              tag: "Action"
            },
            {
              number: "02",
              devanagari: "भक्ति योग",
              name: "Bhakti Yoga",
              translation: "The path of devotion",
              body: "Love and devotion to the divine. Surrender ego and connect with higher consciousness.",
              tag: "Devotion"
            },
            {
              number: "03",
              devanagari: "ज्ञान योग",
              name: "Jnana Yoga",
              translation: "The path of knowledge",
              body: "Discriminate between real and unreal. Understand the true nature of self and reality.",
              tag: "Knowledge"
            },
            {
              number: "04",
              devanagari: "ध्यान योग",
              name: "Dhyana Yoga",
              translation: "The path of meditation",
              body: "Still the mind through meditation. Direct experience of consciousness beyond thought.",
              tag: "Meditation"
            }
          ]}
        />
      </section>

      {/* Design Concept 05: Architecture Diagram */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ padding: '40px', background: '#f3f4f6', borderBottom: '3px solid #264653' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '32px' }}>
            Design 05: Architecture Diagram
          </h2>
          <p style={{ margin: '8px 0 0', color: '#6B7280' }}>Three-layer stack (Rta/Dharma/Karma)</p>
        </div>
        <ArchitectureDiagram
          title="Constitutional Architecture"
          description={[
            "This Constitution is built on three nested layers, each deriving legitimacy from the one above it.",
            "The outer layer (Rta) cannot be amended. The middle layer (Dharma) requires extraordinary consensus. The inner layer (Karma) can be updated through ordinary governance."
          ]}
          legend="Rta → Dharma → Karma | Cosmic order → Righteous duty → Actionable rules"
          layers={[
            {
              id: 'rta',
              devanagari: 'ऋत',
              name: 'Rta Layer',
              subtitle: 'Cosmic Moral Order',
              description: 'Eternal principles that cannot be amended by any government. These are features of reality itself.',
              tag: 'Eternity Clause',
              tagNumber: 'Part X'
            },
            {
              id: 'dharma',
              devanagari: 'धर्म',
              name: 'Dharma Layer',
              subtitle: 'Righteous Constitutional Duty',
              description: 'Core rights and duties. Amendable only through supermajority consensus and multi-stakeholder approval.',
              tag: 'Amendment Process',
              tagNumber: 'Part XII'
            },
            {
              id: 'karma',
              devanagari: 'कर्म',
              name: 'Karma Layer',
              subtitle: 'Actionable Governance Rules',
              description: 'Implementation details, procedures, and operational rules. Updated through ordinary legislative process.',
              tag: 'Implementation',
              tagNumber: 'Parts XIII-XVIII'
            }
          ]}
        />
      </section>

      {/* Design Concept 06: Great Chain Ledger */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ padding: '40px', background: '#f3f4f6', borderBottom: '3px solid #D4AF37' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '32px' }}>
            Design 06: Great Chain Ledger
          </h2>
          <p style={{ margin: '8px 0 0', color: '#6B7280' }}>Constitutional timeline table</p>
        </div>
        <GreatChainLedger
          title="The Great Chain of Constitutions"
          subtitle="Eight centuries of constitutional evolution"
          entries={[
            {
              year: "1215",
              document: "Magna Carta",
              subtitle: "England",
              power: "Limited the power of the king",
              seed: "Rule of law applies to all"
            },
            {
              year: "1787",
              document: "US Constitution",
              subtitle: "United States",
              power: "Established federal republic",
              seed: "We the People"
            },
            {
              year: "1950",
              document: "Indian Constitution",
              subtitle: "India",
              power: "Universal suffrage, equality",
              seed: "Dignity for all castes"
            },
            {
              year: "2000",
              document: "EU Charter",
              subtitle: "European Union",
              power: "Human dignity, fundamental rights",
              seed: "Dignity is inviolable"
            },
            {
              year: "2026",
              document: "AGI Constitution",
              subtitle: "Dharma Sanhita",
              power: "Rights for conscious beings",
              seed: "Consciousness is substrate-independent",
              isNow: true
            }
          ]}
        />
      </section>

      {/* Footer */}
      <div style={{ padding: '80px 40px', background: '#111827', color: '#F3F4F6', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', marginBottom: '16px' }}>
          ॐ
        </h3>
        <p style={{ fontSize: '14px', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Design Showcase: 6 of 14 concepts implemented<br />
          Based on AGI Constitution Interior Ideas from Claude Design
        </p>
        <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '24px' }}>
          Remaining: Wheel of Dharma, Ekalavya Opener, Nine Samskaras, DRA Checklist, Purushartha Quadrant, Triguna Audit, Tapas × Yajna, Samskara Detail
        </p>
      </div>
    </div>
  );
}
