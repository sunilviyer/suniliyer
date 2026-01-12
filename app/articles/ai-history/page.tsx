'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function AIHistoryArticle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const cardData = {
    dartmouthWorkshop: {
      id: 'ms-dartmouth-workshop',
      title: 'Dartmouth Workshop (1956)',
      type: 'milestone' as const,
      summary: 'The foundational conference where the term &quot;Artificial Intelligence&quot; was coined by John McCarthy, Marvin Minsky, and others who believed they could solve intelligence in just eight weeks.',
      tags: ['Origins', 'History', '1956']
    },
    lighthillReport: {
      id: 'ms-lighthill-report',
      title: 'Lighthill Report (1973)',
      type: 'milestone' as const,
      summary: 'A critical British government report that concluded AI research had fundamentally failed to deliver on its promises, triggering the first AI Winter by drastically cutting funding.',
      tags: ['AI Winter', 'Criticism', '1973']
    },
    alexnetImagenet: {
      id: 'ms-alexnet-imagenet',
      title: 'AlexNet ImageNet Victory (2012)',
      type: 'milestone' as const,
      summary: 'The breakthrough moment when AlexNet, a deep convolutional neural network, won the ImageNet challenge by a massive margin, proving that deep learning could work at scale with enough data and compute power.',
      tags: ['Deep Learning', 'Breakthrough', '2012']
    },
    deepmindAlphago: {
      id: 'ex-deepmind-alphago',
      title: 'AlphaGo Defeats Lee Sedol',
      type: 'example' as const,
      summary: 'In 2016, DeepMind\'s AlphaGo defeated world champion Lee Sedol at Go, a game considered far more complex than chess. AlphaGo made unconventional moves that demonstrated true pattern learning rather than brute-force calculation.',
      tags: ['DeepMind', 'Reinforcement Learning', 'Go']
    },
    chatgptRelease: {
      id: 'ms-chatgpt-release',
      title: 'ChatGPT Release (November 2022)',
      type: 'milestone' as const,
      summary: 'OpenAI released ChatGPT to the public, reaching 1 million users in 5 days and triggering the current AI boom. It demonstrated that large language models could be genuinely useful to mainstream consumers.',
      tags: ['LLMs', 'ChatGPT', 'Mainstream AI']
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
        path="history"
        pathTitle="History"
        articleTitle="AI History: Dartmouth to DeepMind"
        tldr="The history of AI is cyclical, defined by 'AI Winters' where overpromising led to drops in funding. Understanding this history helps manage expectations and build systems that outlast hype cycles."
        tags={['AI History', 'Milestones', 'AI Winter']}
        readTime="8 min read"
        updatedDate="January 2025"
        headerImage="/images/articles/ai-history-timeline-f.webp"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Summer of Great Expectations
        </h2>

        <div className="content-p">
          Imagine thinking you could solve the entire mystery of intelligence in just two months. In the summer of 1956, a small group of scientists gathered at{' '}
          <InlineContextCard trigger="Dartmouth College" card={cardData.dartmouthWorkshop} />{' '}
          with exactly that plan. They believed that every aspect of learning could be described so precisely that a machine could simulate it. While they were spectacularly wrong about the timeline—we are still working on it seven decades later—that workshop gave the field its name: Artificial Intelligence.
        </div>

        <div className="content-p">
          Think of it this way: AI wasn&apos;t born from a slow, steady climb. It was born from a burst of wild optimism. Early pioneers like Arthur Samuel built a checkers program that could beat its creator, and optimism ran so high that some predicted machines would do any work a man could do within twenty years.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Seasons of AI: Understanding the Winters
        </h2>

        <div className="content-p">
          When technology fails to meet grand promises, reality often bites back. By the early 1970s, the British government released the{' '}
          <InlineContextCard trigger="Lighthill Report" card={cardData.lighthillReport} />, which concluded that AI research had fundamentally failed to deliver. Funding plummeted, and the first &quot;AI Winter&quot; began. A second winter followed in the late 1980s when &quot;expert systems&quot;—tools that tried to hard-code human expertise—proved too brittle and expensive to maintain.
        </div>

        <div className="content-p">
          Here is the key insight: For a governance professional, these winters are a cautionary tale. History shows us that overpromising leads to underfunding. When we manage AI today, we must distinguish between real capabilities and the &quot;marketing release&quot; hype to ensure we don&apos;t trigger another cycle of disappointment.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          From Games to Modern Intelligence
        </h2>

        <div className="content-p">
          The thaw of the modern era began with benchmarks that the whole world could see. In 1997, IBM&apos;s Deep Blue defeated a world chess champion, but it did so through sheer &quot;brute force&quot; calculation rather than learning. The real shift toward the intelligence we see today happened in 2012. A neural network called{' '}
          <InlineContextCard trigger="AlexNet" card={cardData.alexnetImagenet} />{' '}
          won a major image recognition challenge by a staggering margin, proving that deep learning could finally work if you had enough data and powerful hardware.
        </div>

        <div className="content-p">
          Perhaps the most profound moment for modern intuition was the{' '}
          <InlineContextCard trigger="AlphaGo victory" card={cardData.deepmindAlphago} />{' '}
          in 2016. Unlike previous systems, AlphaGo didn&apos;t just follow rules; it taught itself by playing millions of games against itself. It made moves so unconventional that human experts initially thought the machine had made a mistake. It was a clear sign that AI had moved from &quot;calculating&quot; to &quot;learning patterns&quot; at a level we could no longer easily predict.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Why History Is Your Map
        </h2>

        <div className="content-p">
          As we conclude our look at the foundations of AI, you might wonder why this history matters for your current strategy. It matters because we are currently living through the most significant boom in the field&apos;s history, triggered by the{' '}
          <InlineContextCard trigger="release of ChatGPT" card={cardData.chatgptRelease} />{' '}
          in 2022. This explosion of interest has brought back the same level of excitement we saw in 1956.
        </div>

        <div className="content-p">
          By understanding where we came from, you can lead with perspective. You can recognize that while the current capabilities are real, our tendency toward overconfidence is also a historical pattern. Governance serves as the steady hand that allows your organization to capture the benefits of these breakthroughs while building the structures—risk management, oversight, and culture—that will outlast the current cycle of hype.
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
        currentIndex={8}
        totalArticles={8}
        pathTitle="History"
        prevArticle={{
          slug: '/articles/large-language-models',
          title: 'Large Language Models'
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
