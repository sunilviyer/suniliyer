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
  dartmouthWorkshop: {
    id: 'ex-dartmouth-workshop',
    title: '1956 Dartmouth Workshop',
    type: 'example' as const,
    summary: 'The birthplace of artificial intelligence as a field. Scientists John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon gathered at Dartmouth College to explore whether machines could simulate human intelligence. They coined the term "artificial intelligence" and set ambitious goals that would take decades to achieve.',
    tags: ['AI History', 'Foundational Event', 'Computer Science']
  },

  euAiAct: {
    id: 'fw-eu-ai-act',
    title: 'EU AI Act',
    type: 'framework' as const,
    summary: 'The world\'s first comprehensive AI regulation, adopted by the European Union in 2024. It classifies AI systems by risk level (prohibited, high-risk, limited-risk, minimal-risk) and imposes requirements including transparency, human oversight, and technical documentation. Penalties can reach €35M or 7% of global revenue.',
    tags: ['EU Regulation', 'AI Governance', 'Compliance']
  },

  oecdPrinciples: {
    id: 'fw-oecd-ai-principles',
    title: 'OECD AI Principles',
    type: 'framework' as const,
    summary: 'International standards adopted by 50+ countries that form the basis for responsible AI development. The five dimensions assess risk across People & Planet, Data & Input, AI Model, Task & Output, and Economy & Society. These principles influence regulations worldwide including the EU AI Act.',
    tags: ['OECD', 'International Standards', 'AI Risk Assessment']
  }
};

export default function WhatAIActuallyIsPage() {
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
        articleTitle="What AI Actually Is"
        tldr="AI is software that makes inferences by finding patterns in data rather than following fixed, human-written rules. Understanding the official definitions from OECD and ISO provides the foundation for global AI regulation and effective governance."
        tags={['AI Fundamentals', 'OECD Framework', 'Governance Basics']}
        readTime="8 min read"
        updatedDate="January 2025"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        {/* Main Content */}
        <h2 className="content-h2">
          <span className="heading-decoration" />
          What Everyone Gets Wrong About AI
        </h2>

        <div className="content-p">
          Think about the last time you asked your phone a question, or watched Netflix recommend exactly what you wanted to see. Behind those simple interactions lies something remarkable: systems trained on billions of examples. That is artificial intelligence at work, though perhaps not in the way science fiction prepared you to expect.
        </div>

        <div className="content-p">
          You might wonder why we often use a single label to describe everything from a simple spam filter to a car that drives itself. To govern AI effectively, we must first stop treating it as a &quot;magic pill&quot; and start seeing it as a set of specific, manageable components. Here is the key insight: AI is not about creating conscious machines that think like humans. It is about building systems that can learn patterns from data and make useful predictions or decisions.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Building Intuition: The Difference Between Rules and Learning
        </h2>

        <div className="content-p">
          Think of it this way. If you wanted to teach a computer to identify a fraudulent credit card transaction using traditional software, you would write thousands of &quot;if-then&quot; rules. IF the purchase is in another country AND the amount is over $500, THEN flag it. This is standard automation, and it works—but it is brittle. If a fraudster changes their behavior just slightly, the rules break.
        </div>

        <div className="content-p">
          AI works differently. Instead of writing rules, we give the computer millions of examples of transactions and let it find the patterns itself. Think of the difference between a calculator and a mathematician—one follows precise instructions, while the other understands underlying principles. Modern AI is incredibly good at finding these patterns, but it lacks the &quot;common sense&quot; humans use to navigate the world.
        </div>

        <div className="content-p">
          This realization was a major theme during the{' '}
          <InlineContextCard trigger="1956 Dartmouth Workshop" card={cardData.dartmouthWorkshop} />, where the term &quot;artificial intelligence&quot; was first coined by scientists who were perhaps a bit too optimistic about how fast we would solve it.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Official Definition
        </h2>

        <div className="content-p">
          To regulate AI, you must first define its boundaries. If our definitions are too broad, we end up over-regulating simple spreadsheets; if they are too narrow, we miss dangerous new technologies. Most global regulations, including the{' '}
          <InlineContextCard trigger="EU AI Act" card={cardData.euAiAct} />, now point to a shared map.
        </div>

        <div className="content-p">
          The OECD defines an AI system as a machine-based system that receives inputs and makes &quot;inferences&quot;—essentially, it looks at data to find patterns. Based on those patterns, it generates outputs like predictions, recommendations, or content that can influence the real or virtual world. Because this definition focuses on learning rather than coding, it helps us distinguish between actual AI and simple robotic process automation (RPA).
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          AI as a Socio-Technical System
        </h2>

        <div className="content-p">
          One of the most common mistakes in governance is treating AI as &quot;just software.&quot; In reality, AI is what we call a socio-technical system. This is a professional way of saying that the technology does not exist in a vacuum. It is a combination of the math (the &quot;technical&quot;) and the people, rules, and organizational culture (the &quot;socio&quot;).
        </div>

        <div className="content-p">
          Think of an airplane. The engine and wings are the technology, but they are useless without the pilot&apos;s training, the air traffic control rules, and the maintenance schedules. AI is no different. We must look at who labels the training data, who interprets the model&apos;s results, and who has the authority to hit the &quot;off&quot; switch when things go wrong. Governance serves as the pilot for these powerful engines.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Practical Takeaway
        </h2>

        <div className="content-p">
          You do not need a computer science degree to lead an AI initiative. But you do need to understand how to categorize these tools across your organization. Use the{' '}
          <InlineContextCard trigger="OECD AI Principles" card={cardData.oecdPrinciples} />{' '}
          as a guide to determine exactly how much oversight a specific system needs.
        </div>

        <div className="content-p">
          When you encounter a new tool, ask yourself these three questions:
        </div>

        <ul className="content-ul">
          <li>Who is being affected? (People & Planet)</li>
          <li>What is the data source? (Data & Input)</li>
          <li>Can we see how it decided? (AI Model)</li>
        </ul>

        <div className="content-p">
          With this foundation in place, you are ready to explore the different branches of the AI family tree to see exactly what we mean when we talk about narrow AI versus general AI.
        </div>

        {/* Key Learnings */}
        <KeyLearnings
          theme={theme}
          learnings={[
            'AI is software that makes inferences by finding patterns in data rather than following fixed, human-written rules.',
            'Standardized definitions from the OECD and ISO provide the foundation for global AI regulation and cross-border compliance.',
            'AI is a socio-technical system, meaning its success depends as much on human oversight and culture as it does on code.',
            'The OECD Classification Framework allows you to assess risk across five dimensions: People, Economy, Data, Model, and Task.',
            'Common AI use cases in business include recognition, forecasting, personalization, optimization, and content generation.'
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
                <li>OECD AI Principles - Official Framework Documentation</li>
                <li>EU AI Act - Complete Regulation Text (EU 2024/1689)</li>
                <li>ISO/IEC 22989:2022 - Artificial Intelligence Concepts and Terminology</li>
                <li>The Master Algorithm - Pedro Domingos (Book on ML fundamentals)</li>
                <li>AI Governance in Practice - MIT Sloan Management Review</li>
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
                <li>OECD (2024). OECD AI Principles - Recommendation of the Council on Artificial Intelligence</li>
                <li>European Commission (2024). Regulation (EU) 2024/1689 - EU AI Act</li>
                <li>ISO/IEC (2022). ISO/IEC 22989:2022 - Information Technology — Artificial Intelligence — Concepts and Terminology</li>
                <li>McCarthy, J., Minsky, M., Rochester, N., Shannon, C. (1956). A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence</li>
                <li>Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th Edition)</li>
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

          .content-ul {
            font-family: 'Crimson Pro', Georgia, serif;
            font-size: 20px;
            line-height: 1.8;
            color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
            margin: 24px 0 24px 32px;
          }

          .content-ul li {
            margin-bottom: 12px;
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
        `}</style>
      </ArticleLayout>

      {/* Navigation Components */}
      <ArticleProgressNav
        currentIndex={1}
        totalArticles={8}
        pathTitle="History"
        nextArticle={{
          slug: '/history/ai-family-tree',
          title: 'The AI Family Tree'
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
