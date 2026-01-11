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
  samuelCheckers: {
    id: 'ms-samuel-checkers',
    title: '1959 Checkers Program',
    type: 'milestone' as const,
    summary: 'Arthur Samuel&apos;s checkers program was a breakthrough in machine learning. Instead of programming explicit rules for every possible game state, Samuel created a system that played against itself and learned which moves led to victory. By 1962, the program could beat championship-level players. This demonstrated that machines could improve their performance through experience, laying the foundation for modern machine learning.',
    tags: ['Machine Learning History', 'Game Playing', 'Self-Learning']
  },

  alphaGo: {
    id: 'ex-deepmind-alphago',
    title: 'AlphaGo Victory',
    type: 'example' as const,
    summary: 'In 2016, DeepMind&apos;s AlphaGo defeated world champion Lee Sedol at the ancient game of Go, a feat previously thought to be decades away. Unlike chess, Go has more possible positions than atoms in the universe, making brute-force calculation impossible. AlphaGo used reinforcement learning, playing millions of games against itself to develop intuition and strategy that surpassed human expertise.',
    tags: ['Reinforcement Learning', 'DeepMind', 'Breakthrough']
  },

  featureEngineering: {
    id: 'concept-feature-engineering',
    title: 'Feature Engineering',
    type: 'concept' as const,
    summary: 'Feature engineering is the process of selecting and transforming raw data into meaningful inputs that a machine learning model can use. For example, instead of feeding raw transaction data to a fraud detection model, engineers might create features like "time since last purchase" or "average transaction size." Good feature engineering requires domain expertise and directly impacts model performance and fairness.',
    tags: ['Data Science', 'Model Building', 'Best Practices']
  }
};

export default function HowMachinesLearnPage() {
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
        articleTitle="How Machines Learn"
        tldr="Machine learning creates software by finding patterns in data instead of following human-written 'if-then' rules. The quality and representativeness of training data determine a model's behavior, making data governance foundational to AI safety."
        tags={['Machine Learning', 'AI Fundamentals', 'Training Methods']}
        readTime="8 min read"
        updatedDate="January 2025"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        {/* Main Content */}
        <h2 className="content-h2">
          <span className="heading-decoration" />
          Learning from Examples, Not Instructions
        </h2>

        <div className="content-p">
          Think about how you learned to recognize a &apos;good&apos; job candidate or a &apos;suspicious&apos; credit card transaction. No one gave you a 500-page manual covering every possible scenario. Instead, you observed thousands of examples, gradually building an intuition for what patterns matter. Here is the key insight: Machine learning works in a very similar way. Instead of a human programmer writing explicit &apos;if-then&apos; rules, we provide data and let the computer discover the patterns itself.
        </div>

        <div className="content-p">
          To understand the roots of this approach, consider the{' '}
          <InlineContextCard trigger="1959 checkers program" card={cardData.samuelCheckers} />{' '}
          created by Arthur Samuel. It was a breakthrough because the computer didn&apos;t just play by a set of instructions; it played against itself and learned which moves led to victory. Today, we use this same basic logic to power everything from your email&apos;s spam filter to medical diagnosis tools.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Three Primary Ways Machines Learn
        </h2>

        <div className="content-p">
          Think of it this way: training an AI is like onboarding a new employee. Depending on the task and the resources you have, you might choose one of three different teaching methods.
        </div>

        <h3 className="content-h3">
          1. Supervised Learning: The Answer Key
        </h3>

        <div className="content-p">
          Imagine showing a new HR coordinator 10,000 past hiring decisions: &apos;This candidate was hired. This one wasn&apos;t&apos;. That is supervised learning. We provide the AI with a &apos;labeled&apos; dataset where the correct answer is already known. Through thousands of repetitions, the model learns to associate specific features—like years of experience or technical skills—with the desired outcome.
        </div>

        <h3 className="content-h3">
          2. Unsupervised Learning: Finding Hidden Patterns
        </h3>

        <div className="content-p">
          What if you gave an analyst your entire customer database and said, &apos;Find me the patterns,&apos; without giving them any categories to look for? In unsupervised learning, the AI identifies clusters and relationships on its own. This is how companies discover new customer segments or find unusual transaction patterns that might indicate a new type of fraud.
        </div>

        <h3 className="content-h3">
          3. Reinforcement Learning: Trial and Error
        </h3>

        <div className="content-p">
          Think of how an athlete improves through practice. They try different movements, receive feedback (success or failure), and optimize their behavior to win. This is reinforcement learning. The AI takes an action, receives a &apos;reward&apos; for success or a &apos;penalty&apos; for failure, and learns to maximize its long-term score. A famous example of this is the{' '}
          <InlineContextCard trigger="AlphaGo victory" card={cardData.alphaGo} />, where the system taught itself to play the game of Go at a superhuman level by playing millions of matches against its own previous versions.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Role of Data and Governance
        </h2>

        <div className="content-p">
          You might wonder why we spend so much time talking about data if the &apos;learning&apos; happens in the algorithm. Here is the key insight: The model is a compressed representation of its training data. If the training data reflects historical biases—like past hiring decisions that favored one demographic—the AI will learn those biases as if they were valid rules for success.
        </div>

        <div className="content-p">
          This is where{' '}
          <InlineContextCard trigger="feature engineering" card={cardData.featureEngineering} />{' '}
          becomes critical. It is the process of deciding which characteristics we feed into the model. As a governance leader, you don&apos;t need to know how to write the code, but you must ask: &apos;What data did we use? How was it labeled? And what are we rewarding the system for achieving?&apos;. Understanding these fundamentals is your first step toward building AI systems that are not just powerful, but also fair and reliable.
        </div>

        <div className="content-p">
          With these learning methods in mind, we can now look &apos;under the hood&apos; to see the specific structures, called neural networks, that make this complex pattern recognition possible.
        </div>

        {/* Key Learnings */}
        <KeyLearnings
          theme={theme}
          learnings={[
            'Machine learning creates software by finding patterns in data instead of following human-written \'if-then\' rules.',
            'Supervised learning requires a pre-labeled \'answer key\' to teach models how to associate inputs with correct outputs.',
            'Unsupervised learning discovers hidden structures and groupings in data without human guidance or pre-existing labels.',
            'Reinforcement learning optimizes behavior through a system of rewards and penalties, similar to how an athlete learns through practice.',
            'The quality and representativeness of training data determine a model\'s behavior, making data governance foundational to AI safety.'
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
                <li>Arthur Samuel - Some Studies in Machine Learning Using the Game of Checkers (1959)</li>
                <li>Tom Mitchell - Machine Learning (1997) - McGraw-Hill</li>
                <li>Andrew Ng - Machine Learning Course - Stanford/Coursera</li>
                <li>DeepMind - AlphaGo Documentary (2017)</li>
                <li>Pedro Domingos - The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World</li>
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
                <li>Samuel, A. L. (1959). Some Studies in Machine Learning Using the Game of Checkers - IBM Journal</li>
                <li>Silver, D., et al. (2016). Mastering the game of Go with deep neural networks and tree search - Nature</li>
                <li>Goodfellow, I., Bengio, Y., Courville, A. (2016). Deep Learning - MIT Press</li>
                <li>Mitchell, T. M. (1997). Machine Learning - McGraw-Hill</li>
                <li>Sutton, R. S., Barto, A. G. (2018). Reinforcement Learning: An Introduction (2nd Edition) - MIT Press</li>
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

          .content-h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 24px;
            font-weight: 600;
            color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
            margin: 40px 0 16px 0;
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

            .content-h3 {
              font-size: 22px;
              margin: 32px 0 16px 0;
            }

            .content-p {
              font-size: 18px;
            }
          }
        `}</style>
      </ArticleLayout>

      {/* Navigation Components */}
      <ArticleProgressNav
        currentIndex={4}
        totalArticles={8}
        pathTitle="History"
        prevArticle={{
          slug: '/articles/types-of-ai-intelligence',
          title: 'Types of AI Intelligence'
        }}
        nextArticle={{
          slug: '/articles/deep-learning-decoded',
          title: 'Deep Learning Decoded'
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
