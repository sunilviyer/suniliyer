'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function AIvsAutomationArticle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const cardData = {
    whatAIActuallyIs: {
      id: 'article-link-what-ai-actually-is',
      title: 'What AI Actually Is',
      type: 'article-link' as const,
      articleSlug: 'what-ai-actually-is',
      summary: 'A comprehensive introduction to artificial intelligence, exploring what AI is, how it differs from traditional software, and why it matters for modern organizations.',
      tags: ['AI Fundamentals', 'Definition', 'Basics']
    },
    decisionTree: {
      id: 'res-ai-vs-automation-decision-tree',
      title: 'AI vs Automation Decision Tree',
      type: 'resource' as const,
      summary: 'A practical decision tree for classifying whether a system is AI or automation. Key question: Does it learn patterns from data, or does it follow pre-programmed rules? This classification determines appropriate governance approaches.',
      tags: ['Classification', 'Decision Framework', 'Governance']
    },
    rpaVsAI: {
      id: 'concept-rpa-vs-ai',
      title: 'RPA vs AI',
      type: 'concept' as const,
      summary: 'Robotic Process Automation (RPA) is pure automation—software that mimics human clicks and keystrokes following fixed rules. It only becomes "intelligent automation" when combined with AI components like OCR or machine learning for data extraction.',
      tags: ['RPA', 'Automation', 'Distinction']
    },
    modelDrift: {
      id: 'concept-model-drift',
      title: 'Model Drift',
      type: 'concept' as const,
      summary: 'When the real-world data patterns change over time, causing AI model performance to degrade. For example, a fraud detection model trained on 2020 patterns may miss new fraud techniques in 2025. Requires continuous monitoring and retraining.',
      tags: ['Drift', 'Monitoring', 'Maintenance']
    }
  };

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
        path="terminology"
        pathTitle="Terminology"
        articleTitle="AI vs Automation"
        tldr="Automation follows human-written 'if-then' rules, while AI learns to recognize patterns from data. Understanding this distinction is crucial for proper governance and risk management."
        tags={['AI Fundamentals', 'Automation', 'RPA', 'Governance Basics']}
        readTime="8 min read"
        updatedDate="January 2025"
        headerImage="/images/history/ai-vs-automation.webp"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Tale of Two Systems
        </h2>

        <div className="content-p">
          Think about the last time you set an out-of-office reply on your email. You told the computer: IF an email arrives while I am away, THEN send this specific response. This is a perfect example of automation. It is reliable, predictable, and does exactly what you told it to do—nothing more and nothing less.
        </div>

        <div className="content-p">
          Now, think about your email's spam filter. No human wrote a rule for every possible spam message. Instead, the system looked at millions of examples to learn what "spammy" patterns look like. This is{' '}
          <InlineContextCard trigger="artificial intelligence" card={cardData.whatAIActuallyIs} />. Here is the key insight: Automation follows rules we write, but AI discovers patterns we might not even see.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Rules vs. Learning
        </h2>

        <div className="content-p">
          To understand why this distinction matters for leadership, consider how these systems are built. Automation is deterministic. If you give it the same input a thousand times, you will get the exact same output a thousand times. This makes it very easy to audit. You just read the "if-then" code to see if the logic is correct.
        </div>

        <div className="content-p">
          AI is probabilistic. It does not provide "the" answer; it provides its best guess with a certain level of confidence. Because AI behavior emerges from data rather than explicit instructions, it can handle novel situations that a rule-book might miss. However, this also means it can fail in ways that are much harder to predict.
        </div>

        <div className="content-p">
          This difference is why we use a{' '}
          <InlineContextCard trigger="classification decision tree" card={cardData.decisionTree} />{' '}
          to determine how to govern a new tool. You do not need a complex bias audit for a simple rule-engine, but you definitely need one for a system that "learns" from historical data.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The "Robotic" Confusion
        </h2>

        <div className="content-p">
          You might wonder why{' '}
          <InlineContextCard trigger="Robotic Process Automation (RPA)" card={cardData.rpaVsAI} />{' '}
          is often discussed alongside AI. Despite the name, traditional RPA is pure automation. It is essentially a software script that mimics human clicks to move data between spreadsheets and forms.
        </div>

        <div className="content-p">
          Think of it this way: RPA takes the "robot" out of the human by handling the dreary, repetitive tasks. It only becomes "intelligent automation" when we add an AI component—like using machine learning to read a handwritten form before the RPA bot copies the data. For governance, it is vital to identify which parts of your process are following fixed rules and which parts are making inferences.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Why This Matters for Your Strategy
        </h2>

        <div className="content-p">
          Mislabeling automation as AI can lead to "AI washing," where capabilities are exaggerated to stakeholders. More importantly, it creates a governance gap. Automation risks usually stem from simple logic errors or "brittleness" when a system it depends on changes. AI risks are different; they involve{' '}
          <InlineContextCard trigger="model drift" card={cardData.modelDrift} />{' '}
          and hidden biases.
        </div>

        <div className="content-p">
          When you evaluate a new initiative, ask your team: "Does this system learn from data, or does it follow a set of instructions we provided?" By getting the label right, you can match your oversight to the actual risk. Now that we understand the difference between rules and learning, we are ready to look at the most important part of any AI system: the data it uses to learn those patterns.
        </div>

        <div className="content-p">
          <i>
            Analogy: Automation is like a train following a fixed track; it is fast and efficient, but it can only go where the rails are laid. AI is more like a driver in a car; it can navigate new roads and handle obstacles, but it requires much more constant monitoring to ensure it stays on the right path.
          </i>
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
            background: linear-gradient(90deg, #a68a64 0%, transparent 100%);
            border-radius: 2px;
          }

          .content-p {
            font-family: 'Crimson Pro', Georgia, serif;
            font-size: 20px;
            line-height: 1.8;
            color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
            margin-bottom: 24px;
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
        currentIndex={2}
        totalArticles={8}
        pathTitle="Terminology"
        prevArticle={{
          slug: '/terminology/ai-technology-stack',
          title: 'The AI Technology Stack'
        }}
        nextArticle={{
          slug: '/terminology/data-behind-ai',
          title: 'The Data Behind AI'
        }}
        theme={theme}
      />

      <FloatingPathsNav
        currentPath="/terminology"
        theme={theme}
      />
    </>
  );
}
