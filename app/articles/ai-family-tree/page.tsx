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
  deepBlue: {
    id: 'ex-deep-blue',
    title: 'Deep Blue vs. Garry Kasparov',
    type: 'example' as const,
    summary: 'In 1997, IBM\'s Deep Blue became the first computer to defeat a reigning world chess champion under standard tournament conditions. This milestone demonstrated the power of Symbolic AI for well-defined problems but also revealed its limitations—Deep Blue could play chess brilliantly but couldn\'t do anything else.',
    tags: ['AI History', 'Symbolic AI', 'Game Playing']
  },

  euAiAct: {
    id: 'fw-eu-ai-act',
    title: 'EU AI Act',
    type: 'framework' as const,
    summary: 'The world\'s first comprehensive AI regulation, adopted by the European Union in 2024. It classifies AI systems by risk level (prohibited, high-risk, limited-risk, minimal-risk) and imposes requirements including transparency, human oversight, and technical documentation. Penalties can reach €35M or 7% of global revenue.',
    tags: ['EU Regulation', 'AI Governance', 'Compliance']
  }
};

export default function AIFamilyTreePage() {
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
        articleTitle="The AI Family Tree"
        tldr="Understanding the different categories of AI—from the specialized Narrow AI systems we use today to theoretical AGI and ASI—helps leaders match governance oversight to actual risk levels."
        tags={['AI Categories', 'AGI', 'AI History']}
        readTime="7 min read"
        updatedDate="January 2025"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        {/* Main Content */}
        <h2 className="content-h2">
          <span className="heading-decoration" />
          Specialists vs. Generalists
        </h2>

        <div className="content-p">
          Imagine you are building a team for a new project. You could hire a specialist who is the world&apos;s leading expert in tax law, or a generalist who can learn law, marketing, and accounting as the need arises. In the world of technology, we are currently living in the era of the specialist. As we discussed in What AI Actually Is, these systems are software tools that make inferences based on patterns.
        </div>

        <div className="content-p">
          To understand the path forward, we need to look at how the different branches of this technology grew. For a long time, researchers tried to build &quot;intelligence&quot; by feeding computers thousands of human-written rules. This is often called Symbolic AI. It worked for specific games, such as when{' '}
          <InlineContextCard trigger="Deep Blue defeated Garry Kasparov" card={cardData.deepBlue} />{' '}
          in 1997, but it struggled with the messy, unpredictable nature of the real world.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Limbs of the Tree: Narrow AI
        </h2>

        <div className="content-p">
          Every AI system you interact with today—from the facial recognition on your phone to the recommendations on your favorite shopping site—is considered Narrow AI (or Weak AI). Think of it this way: these systems are like exceptional specialists that are brilliant at one job but helpless at anything else. A system trained to detect credit card fraud cannot suddenly decide to write a job description for you.
        </div>

        <div className="content-p">
          Here is the key insight: because Narrow AI is bounded, its risks are also bounded. When we evaluate a hiring algorithm, we aren&apos;t worried about it &quot;waking up&quot; and taking over the company; we are worried about it learning to discriminate based on biased historical data. This is why most current regulations, like the{' '}
          <InlineContextCard trigger="EU AI Act" card={cardData.euAiAct} />, focus on these specific, real-world harms.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Theoretical Frontier: AGI and ASI
        </h2>

        <div className="content-p">
          You might wonder why there is so much talk about &quot;Strong AI&quot; or Artificial General Intelligence (AGI) if it doesn&apos;t exist yet. AGI refers to a system that could learn any intellectual task a human can, transferring knowledge between domains without being retrained by a human. While the timeline is debated—with experts like Jensen Huang from NVIDIA and Sam Altman suggesting it could arrive within the next decade—it remains a goal rather than a reality.
        </div>

        <div className="content-p">
          Beyond AGI lies the most speculative limb: Artificial Superintelligence (ASI). This describes an intellect that is much smarter than the best human brains in practically every field. While this sounds like science fiction, the people building today&apos;s models take it seriously because the speed of progress has consistently surpassed predictions.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Learning from the Seasons
        </h2>

        <div className="content-p">
          The growth of the AI tree hasn&apos;t always been steady. In the 1970s, the field entered its first &quot;AI Winter.&quot; This period of disappointment followed a devastating assessment known as the Lighthill Report, which concluded that researchers had failed to deliver on their grand promises. Funding plummeted, and laboratories closed.
        </div>

        <div className="content-p">
          To understand this history is to understand why we must be careful with hype today. When we overpromise what a &quot;thinking machine&quot; can do, we risk a collapse of interest and funding when reality eventually bites back. Governance serves as the steady hand that helps us navigate these cycles of excitement and disappointment.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Why This Matters for Your Strategy
        </h2>

        <div className="content-p">
          As a leader, your role is to distinguish between the branch that is providing value today and the one that is still growing. Most of your strategic decisions will involve Narrow AI. You should ask: Is this system a specialist? Does it have a defined purpose? Is it being used within its design parameters?
        </div>

        <div className="content-p">
          By categorizing AI this way, you can match your oversight to the actual risk. You don&apos;t need a &quot;containment protocol&quot; for a spam filter, but you do need robust bias testing for a high-stakes hiring tool. Now that we&apos;ve mapped the tree, our next step is to explore the different ways these &quot;intelligence levels&quot; manifest in business operations.
        </div>

        {/* Key Learnings */}
        <KeyLearnings
          theme={theme}
          learnings={[
            'Narrow AI acts as a highly specialized tool that cannot transfer its skills to unrelated tasks.',
            'Artificial General Intelligence (AGI) is a theoretical system capable of human-level reasoning across all cognitive domains.',
            'The history of AI is marked by "AI Winters," periods where overhyped expectations led to significant funding cuts.',
            'Symbolic AI relies on human-coded logic rules, while modern Machine Learning discovers its own rules from data.',
            'Effective governance requires distinguishing between existing Narrow AI risks and hypothetical AGI safety concerns.'
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
                <li>The Lighthill Report (1973) - SERC AI Research Review</li>
                <li>OECD AI Classification Framework - Risk-Based Categorization</li>
                <li>Jensen Huang & Sam Altman - Timelines for AGI Development</li>
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
                <li>Lighthill, J. (1973). Artificial Intelligence: A General Survey - Science Research Council Report</li>
                <li>Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies - Oxford University Press</li>
                <li>Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th Edition)</li>
                <li>IBM (1997). Deep Blue vs. Garry Kasparov - Match Documentation</li>
                <li>European Commission (2024). Regulation (EU) 2024/1689 - EU AI Act</li>
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
        currentIndex={2}
        totalArticles={8}
        pathTitle="History"
        prevArticle={{
          slug: '/articles/what-ai-actually-is',
          title: 'What AI Actually Is'
        }}
        nextArticle={{
          slug: '/articles/types-of-ai-intelligence',
          title: 'Types of AI Intelligence'
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
