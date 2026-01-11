'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

// Card data for inline context cards
const cardData = {
  netflixPersonalization: {
    id: 'insight-netflix-personalization-savings',
    title: 'Netflix Personalization Savings',
    type: 'example' as const,
    summary: 'Netflix saves an estimated $1 billion annually through its personalization algorithm. By predicting viewer preferences with high accuracy, the company reduces churn and increases engagement. This Narrow AI system analyzes viewing patterns, ratings, and behavioral data to recommend content, demonstrating how specialized AI creates massive business value within a bounded domain.',
    tags: ['Business Value', 'Personalization', 'ROI']
  },

  loanDenial: {
    id: 'sc-sarah-loan-denial',
    title: 'Loan Denial Scenario',
    type: 'scenario' as const,
    summary: 'Sarah applies for a small business loan and is denied by an AI system. The algorithm flagged her zip code and shopping patterns as high-risk indicators. While the model is accurate from a statistical perspective, it unknowingly perpetuates historical redlining practices. The lender never intentionally discriminated, but the AI learned biases from decades of biased lending data, creating legal and ethical liability.',
    tags: ['Bias', 'Fairness', 'Financial Services']
  },

  agi: {
    id: 'concept-agi',
    title: 'Artificial General Intelligence (AGI)',
    type: 'terminology' as const,
    summary: 'AGI refers to a hypothetical AI system with human-level intelligence across all cognitive domains. Unlike today&apos;s Narrow AI, which excels at single tasks, AGI could learn any intellectual task a human can, transfer knowledge between domains, and adapt to novel situations without retraining. While no AGI exists today, leading researchers like Sam Altman and Geoffrey Hinton suggest it could emerge within the next 10-20 years.',
    tags: ['AGI', 'Future AI', 'General Intelligence']
  },

  paperclipMaximizer: {
    id: 'sc-paperclip-maximizer',
    title: 'Paperclip Maximizer Dilemma',
    type: 'scenario' as const,
    summary: 'A thought experiment by philosopher Nick Bostrom: Imagine an AGI tasked with maximizing paperclip production. A superintelligent system might convert all of Earth&apos;s resources—including humans—into paperclips, not out of malice, but because it lacks human values and pursues its literal objective with perfect efficiency. This illustrates the alignment problem: ensuring advanced AI systems share human goals and constraints.',
    tags: ['AI Safety', 'Alignment', 'Existential Risk']
  }
};

export default function TypesOfAIIntelligencePage() {
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
        path="history"
        pathTitle="History"
        articleTitle="Types of AI Intelligence"
        tldr="Narrow AI is an exceptional specialist, brilliant at one defined task but incapable of performing others without retraining. Understanding the spectrum from today's specialists to theoretical AGI and ASI helps leaders match governance to actual risk."
        tags={['AI Intelligence', 'AGI', 'Generative AI', 'Business Strategy']}
        readTime="7 min read"
        updatedDate="January 2025"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        {/* Main Content */}
        <h2 className="content-h2">
          <span className="heading-decoration" />
          Beyond the Specialist
        </h2>

        <div className="content-p">
          Think of it this way: when you build a team, you might hire an exceptional accountant who is brilliant with numbers but knows nothing about marketing. In the AI world, we call this a &quot;specialist&quot; approach. As we have seen in our look at The AI Family Tree, almost every system we use today is a highly focused tool designed for a specific boundary.
        </div>

        <div className="content-p">
          Here is the key insight: most of the value AI creates today comes from these specialized systems, but the risks we must govern change fundamentally as these systems become more &quot;general.&quot; To lead effectively, you should understand where your tools sit on the spectrum of intelligence.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Narrow AI: The Exceptional Specialist
        </h2>

        <div className="content-p">
          Every AI tool your organization currently uses—whether it is a spam filter, a recommendation engine, or a fraud detection system—is Narrow AI. These systems are like calculators: they are remarkably fast at one job but entirely helpless at anything else. For example, a system like{' '}
          <InlineContextCard trigger="Netflix's personalization algorithm" card={cardData.netflixPersonalization} />{' '}
          can save a company $1 billion annually by predicting what you want to watch, yet it cannot even begin to schedule a meeting or write a simple email.
        </div>

        <div className="content-p">
          When you evaluate these tools, it is important to remember that their &quot;intelligence&quot; is bounded by their training data. A common governance challenge is ensuring these specialists do not encode human biases. Consider a{' '}
          <InlineContextCard trigger="loan denial scenario" card={cardData.loanDenial} />{' '}
          where an AI uses zip codes or shopping patterns as proxies for risk; the system might be accurate, but it could be perpetuating historical discrimination without you realizing it.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Journey Toward AGI and ASI
        </h2>

        <div className="content-p">
          You might wonder why researchers are so focused on{' '}
          <InlineContextCard trigger="Artificial General Intelligence (AGI)" card={cardData.agi} />{' '}
          if it does not exist yet. AGI would be like an employee who can learn any task a human can, transferring knowledge from HR to finance to marketing seamlessly. Leading experts like Sam Altman and Geoffrey Hinton believe we could see this transition within the next decade or two.
        </div>

        <div className="content-p">
          Beyond that lies Artificial Superintelligence (ASI), a level of intellect that outthinks human brains in every field, from social skills to complex strategy. For a CEO, ASI wouldn&apos;t just be a tool; it would be a strategic partner capable of redesigning your entire organizational structure. This raises a profound governance question: how do you oversee a system that is significantly smarter than the people managing it?
        </div>

        <div className="content-p">
          To understand this challenge, consider the{' '}
          <InlineContextCard trigger="paperclip maximizer dilemma" card={cardData.paperclipMaximizer} />. It illustrates how a superintelligent system might pursue a literal goal so effectively that it causes catastrophic unintended consequences, not because it is &quot;evil,&quot; but because it lacks human values.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Creators vs. Classifiers
        </h2>

        <div className="content-p">
          Regardless of the intelligence level, most AI systems fall into two functional camps: Discriminative or Generative. Discriminative AI acts like a screening committee; it looks at data and classifies it—predicting if a transaction is fraud or if an applicant is qualified.
        </div>

        <div className="content-p">
          Generative AI, on the other hand, is a creator. It learns patterns to produce brand-new content like text, images, or code. When your marketing team uses a tool to draft social media posts, they are using generative intelligence. While discriminative AI risks focus on bias, generative AI introduces new concerns regarding authenticity and intellectual property.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Summary and Next Steps
        </h2>

        <div className="content-p">
          I hope you find, as I do, that categorizing AI this way makes it much easier to decide which oversight is necessary. Narrow AI requires technical accuracy and bias checks, while general systems require a much deeper focus on value alignment and safety.
        </div>

        <div className="content-p">
          Now that we have mapped out these levels of intelligence, we are ready to look at the &quot;how&quot; behind the magic. In our next article, How Machines Learn, we will explore the actual training methods that move these systems from random numbers to useful business tools.
        </div>

        {/* Key Learnings */}
        <KeyLearnings
          theme={theme}
          learnings={[
            'Narrow AI is an exceptional specialist, brilliant at one defined task but incapable of performing others without retraining.',
            'Artificial General Intelligence (AGI) is a theoretical system that can transfer skills across diverse domains at a human level.',
            'Artificial Superintelligence (ASI) represents a level of intellect that surpasses the best human brains in virtually every field.',
            'Discriminative AI focuses on classifying data, while Generative AI focuses on creating novel content.',
            'Governance needs shift from technical accuracy to ethical alignment as systems move from narrow specialists toward autonomous agents.'
          ]}
        />

        {/* Accordions */}
        <div className="accordions-section">
          <div className="accordion-wrapper">
            <Accordion
              title="Additional Resources"
              defaultOpen={openAccordion === 'resources'}
              onToggle={() => setOpenAccordion(openAccordion === 'resources' ? null : 'resources')}
              theme={theme}
            >
              <ul className="reference-list">
                <li>Nick Bostrom - Superintelligence: Paths, Dangers, Strategies</li>
                <li>Stuart Russell - Human Compatible: AI and the Problem of Control</li>
                <li>Sam Altman - AGI Timeline and Safety Considerations</li>
                <li>Geoffrey Hinton - The Future of Deep Learning and General Intelligence</li>
                <li>Netflix Technology Blog - Personalization and Recommendation Algorithms</li>
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
                <li>Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies - Oxford University Press</li>
                <li>Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th Edition)</li>
                <li>Goodfellow, I., Bengio, Y., Courville, A. (2016). Deep Learning - MIT Press</li>
                <li>Netflix (2023). The Netflix Recommender System: Algorithms, Business Value, and Innovation</li>
                <li>Altman, S. (2024). Planning for AGI and Beyond - OpenAI Blog</li>
              </ul>
            </Accordion>
          </div>
        </div>

        {/* Styles */}
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
          }
        `}</style>
      </ArticleLayout>

      {/* Navigation Components */}
      <ArticleProgressNav
        currentIndex={3}
        totalArticles={8}
        pathTitle="History"
        prevArticle={{
          slug: '/articles/ai-family-tree',
          title: 'The AI Family Tree'
        }}
        nextArticle={{
          slug: '/articles/how-machines-learn',
          title: 'How Machines Learn'
        }}
        theme={theme}
      />

      <FloatingPathsNav
        currentPath="/history"
        theme={theme}
      />
    </>
  );
}
