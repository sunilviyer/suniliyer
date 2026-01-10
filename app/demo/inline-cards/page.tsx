'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

const cardData = {
  highRisk: {
    id: 'high-risk-ai',
    title: 'High-Risk AI Systems',
    type: 'terminology' as const,
    summary: 'AI systems that pose significant risks to health, safety, or fundamental rights. Includes employment decisions, critical infrastructure, law enforcement, and biometric identification.',
    tags: ['EU AI Act', 'Regulation', 'Classification']
  },
  gdpr: {
    id: 'gdpr-framework',
    title: 'GDPR (General Data Protection Regulation)',
    type: 'framework' as const,
    summary: 'EU regulation governing personal data processing and privacy rights. Established in 2018 with penalties up to €20M or 4% of global revenue.',
    tags: ['Data Protection', 'Privacy', 'EU Regulation']
  },
  socialScoring: {
    id: 'social-scoring',
    title: 'Social Scoring Violation Scenario',
    type: 'scenario' as const,
    summary: 'A company implements AI that rates employees based on social behavior for promotions. This prohibited practice results in immediate cease-and-desist plus fines up to €35M.',
    tags: ['Prohibited AI', 'Enforcement', 'Example']
  },
  conformity: {
    id: 'conformity-assessment',
    title: 'Conformity Assessment',
    type: 'terminology' as const,
    summary: 'The process of demonstrating that an AI system meets all requirements of the EU AI Act. Can be self-assessment or third-party validation depending on risk level.',
    tags: ['Compliance', 'Certification', 'Process']
  },
  foundationModel: {
    id: 'foundation-model',
    title: 'Foundation Models (GPAI)',
    type: 'example' as const,
    summary: 'General-purpose AI models trained on broad data at scale. Examples include GPT-4, Claude, and Llama. Subject to specific transparency requirements under the EU AI Act.',
    tags: ['AI Models', 'Large Language Models', 'Technology']
  }
};

export default function InlineCardsPrototypePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
        style={{
          position: 'fixed',
          top: '20px',
          right: '30px',
          zIndex: 10000,
          background: theme === 'light' ? '#1a1a1a' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#1a1a1a',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease'
        }}
      >
        <i className={theme === 'light' ? 'ph-bold ph-moon-stars' : 'ph-bold ph-sun-horizon'} />
      </button>

    <ArticleLayout
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="Inline Context Cards: Interactive Prototype"
      tldr="Demonstration of inline context cards that expand on hover, providing contextual information without leaving the reading flow. Cards morph smoothly, text reflows naturally, and layer separation creates visual depth."
      tags={['Prototype', 'UX Design', 'Interactive', 'Animation']}
      readTime="5 min read"
      updatedDate="January 2025"
      headerImage="/images/headercards/responsibility-header.png"
      theme={theme}
      sidebarCards={[]} // Empty array to prevent ghost sidebar
    >
      <h2 className="content-h2">
        <span className="heading-decoration" />
        Understanding the Enforcement Framework
      </h2>

      <div className="content-p">
        The EU AI Act establishes a comprehensive enforcement framework for regulating artificial intelligence systems based on risk levels. Organizations deploying{' '}
        <InlineContextCard trigger="high-risk AI systems" card={cardData.highRisk} />{' '}
        must comply with stringent requirements including technical documentation, risk management, and human oversight.
      </div>

      <div className="content-p">
        The regulation builds upon existing frameworks like{' '}
        <InlineContextCard trigger="GDPR" card={cardData.gdpr} />, creating a harmonized approach to technology governance across the European Union. This ensures consistent protection of fundamental rights while enabling innovation.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Prohibited AI Practices
      </h2>

      <div className="content-p">
        Certain AI applications are deemed too dangerous and are banned outright under Article 5. For example, a{' '}
        <InlineContextCard trigger="social scoring system" card={cardData.socialScoring} />{' '}
        that evaluates individuals based on behavior or characteristics is strictly prohibited and carries the highest penalties.
      </div>

      <div className="content-p">
        Other prohibited practices include subliminal manipulation, exploitation of vulnerabilities, and real-time biometric identification in public spaces (with limited exceptions for law enforcement).
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Compliance Requirements
      </h2>

      <div className="content-p">
        Before deploying a high-risk AI system in the EU market, providers must complete a{' '}
        <InlineContextCard trigger="conformity assessment" card={cardData.conformity} />{' '}
        process. This involves documenting the system&apos;s intended purpose, training data, risk mitigation measures, and performance metrics.
      </div>

      <div className="content-p">
        Organizations developing{' '}
        <InlineContextCard trigger="foundation models" card={cardData.foundationModel} />{' '}
        face additional transparency obligations, including publishing training data summaries and copyright compliance policies.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Timeline and Phased Implementation
      </h2>

      <div className="content-p">
        The EU AI Act uses a phased approach to give organizations time to prepare:
      </div>

      <ul className="content-ul">
        <li>
          <strong>February 2025</strong>: Prohibited practices become illegal (6 months after entry into force)
        </li>
        <li>
          <strong>August 2025</strong>: GPAI model obligations become applicable (12 months)
        </li>
        <li>
          <strong>August 2026</strong>: Full high-risk AI requirements take effect (24 months)
        </li>
        <li>
          <strong>August 2027</strong>: Extended deadline for AI in certain regulated products (36 months)
        </li>
      </ul>

      <div className="content-p">
        Organizations should not wait until the last moment. Starting compliance preparation now ensures adequate time for system documentation, risk assessment, and any necessary modifications to meet EU AI Act requirements.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Prototype Features Demonstrated
      </h2>

      <div className="content-p">
        This page demonstrates several key interaction patterns:
      </div>

      <ul className="content-ul">
        <li>
          <strong>Inline triggers</strong>: Keywords marked with dotted underline and rotating indicator (·)
        </li>
        <li>
          <strong>Smooth expansion</strong>: Cards morph from trigger to full size with spring physics
        </li>
        <li>
          <strong>Layer separation</strong>: Shadow layer slides creating depth effect (inspired by Rayo)
        </li>
        <li>
          <strong>Staggered content reveal</strong>: Icon, title, image, summary, tags, CTA appear in sequence
        </li>
        <li>
          <strong>Type-based styling</strong>: Different colors and icons for terminology, frameworks, scenarios, examples
        </li>
        <li>
          <strong>Hover persistence</strong>: Card stays open when hovering over it, not just the trigger
        </li>
      </ul>

      <div className="content-p">
        The design prioritizes readability while providing rich contextual information exactly when needed. Try hovering over any of the highlighted terms above to experience the interaction.
      </div>

      <KeyLearnings
        theme={theme}
        learnings={[
          'Rayo-style letter animations create engaging hover states for inline terminology',
          'Floating navigation bars provide persistent access to article progression',
          'Learning path navigators enable quick context switching between content areas',
          'Visual indicators (arrows, animations) guide users toward interactive elements',
          'Structured learnings sections reinforce key concepts at article conclusion'
        ]}
      />

      <div className="accordions-section">
        <div className="accordion-wrapper">
          <Accordion
            title="Additional Resources"
            defaultOpen={openAccordion === 'resources'}
            onToggle={() => setOpenAccordion(openAccordion === 'resources' ? null : 'resources')}
            theme={theme}
          >
            <ul className="reference-list">
              <li>Interactive Prototyping with Framer Motion</li>
              <li>Designing Hover States for Enhanced UX</li>
              <li>Card UI Patterns for Modern Web Applications</li>
              <li>Accessibility Guidelines for Interactive Components</li>
            </ul>
          </Accordion>
        </div>

        <div className="accordion-wrapper">
          <Accordion
            title="Sources & References"
            defaultOpen={openAccordion === 'sources'}
            onToggle={() => setOpenAccordion(openAccordion === 'sources' ? null : 'sources')}
            theme={theme}
          >
            <ul className="reference-list">
              <li>EU AI Act - Official Regulation (EU) 2024/1689</li>
              <li>GDPR Compliance Framework Documentation</li>
              <li>Framer Motion Animation Library Best Practices</li>
              <li>UX Design Patterns for Contextual Information Display</li>
            </ul>
          </Accordion>
        </div>
      </div>

      <style jsx>{`
        .content-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
          margin: 60px 0 24px 0;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .heading-decoration {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #936639 0%, transparent 100%);
          border-radius: 2px;
        }

        .content-p {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.8;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          margin-bottom: 24px;
        }

        .content-ul {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.8;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          margin: 24px 0 24px 32px;
          padding: 0;
        }

        .content-ul li {
          margin-bottom: 12px;
        }

        .content-ul li strong {
          color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
          font-weight: 600;
        }

        .reference-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .reference-list li {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 17px;
          line-height: 1.7;
          color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
          padding: 12px 0;
          border-bottom: 1px solid ${theme === 'light' ? 'rgba(26, 26, 26, 0.06)' : 'rgba(255, 255, 255, 0.1)'};
        }

        .reference-list li:last-child {
          border-bottom: none;
        }

        .accordions-section {
          margin-top: 60px;
        }

        .accordion-wrapper {
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .content-h2 {
            font-size: 28px;
            margin: 40px 0 20px 0;
          }

          .content-p {
            font-size: 18px;
          }

          .content-ul {
            font-size: 18px;
            margin-left: 24px;
          }
        }

        :global(.theme-toggle-btn) {
          position: fixed !important;
          top: 20px !important;
          right: 30px !important;
          z-index: 10000 !important;
        }
      `}</style>
    </ArticleLayout>

    {/* Floating Navigation Components */}
    <ArticleProgressNav
      currentIndex={3}
      totalArticles={12}
      pathTitle="Responsibility"
      prevArticle={{
        slug: '/demo/inline-cards',
        title: 'Previous Demo Article'
      }}
      nextArticle={{
        slug: '/demo/inline-cards',
        title: 'Next Demo Article'
      }}
      theme={theme}
    />

    <FloatingPathsNav
      currentPath="/responsibility"
      theme={theme}
    />
    </>
  );
}
