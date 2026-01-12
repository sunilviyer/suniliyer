'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function FoundationModelsArticle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const cardData = {
    largeLanguageModels: {
      id: 'article-link-large-language-models',
      title: 'Large Language Models',
      type: 'article-link' as const,
      articleSlug: 'large-language-models',
      summary: 'Deep dive into Large Language Models (LLMs) like GPT-4 and Claude—how they work, their capabilities, limitations, and implications for organizations deploying them at scale.',
      tags: ['LLMs', 'Foundation Models', 'NLP']
    },
    euAIAct: {
      id: 'fw-eu-ai-act',
      title: 'EU AI Act',
      type: 'framework' as const,
      summary: 'The European Union\'s comprehensive AI regulation, categorizing AI systems by risk level. Foundation models are regulated as &quot;General-Purpose AI&quot; (GPAI), with additional requirements for those posing systemic risk (e.g., models trained on >10^25 FLOPs).',
      tags: ['Regulation', 'EU', 'GPAI']
    },
    rag: {
      id: 'concept-rag',
      title: 'Retrieval-Augmented Generation (RAG)',
      type: 'concept' as const,
      summary: 'A technique that combines foundation models with external knowledge retrieval. Instead of relying solely on the model\'s training data, RAG systems fetch relevant documents from a database and use them to ground the model\'s response, reducing hallucinations and enabling use of private data.',
      tags: ['RAG', 'Architecture', 'Accuracy']
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
        articleTitle="Foundation Models"
        tldr="Foundation models are large-scale systems trained on broad data that can be adapted to many different tasks. Understanding their risks and benefits is crucial for modern AI strategy."
        tags={['Foundation Models', 'GPAI', 'AI Infrastructure']}
        readTime="8 min read"
        updatedDate="January 2025"
        headerImage="/images/history/foundation-models.webp"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Skyscraper and the Foundation
        </h2>

        <div className="content-p">
          Think of it this way: In the past, if you wanted to build a house, you built a unique foundation specifically for that one structure. If you then wanted a warehouse, you started from scratch with a different foundation. In the world of AI, we used to do the same—we built one specialized model for translation, another for sentiment analysis, and a third for summarizing reports.
        </div>

        <div className="content-p">
          Here is the key insight: We have moved to a world where we build one massive, incredibly strong foundation that can support a skyscraper, a cottage, or a warehouse all at once. In AI, we call these <strong>foundation models</strong>. They are large models trained on a broad ocean of data that can be adapted to a wide range of downstream tasks.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Scale and Emergence
        </h2>

        <div className="content-p">
          You might wonder what makes these models so much more powerful than the tools of five years ago. It comes down to scale—billions or even trillions of parameters trained on a substantial portion of the written internet. This broad training allows the model to learn language patterns, facts, and reasoning skills that it was never explicitly told to learn.
        </div>

        <div className="content-p">
          We call these emergent capabilities. For example, a model trained primarily to predict the next word in a sentence might suddenly &quot;emerge&quot; with the ability to write computer code or solve logic puzzles. Because these models, such as a{' '}
          <InlineContextCard trigger="Large Language Model (LLM)" card={cardData.largeLanguageModels} />, serve as the base for many different products, they have become the essential infrastructure of the modern AI ecosystem.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Governance Jenga Tower
        </h2>

        <div className="content-p">
          While foundation models make development faster and cheaper, they introduce a significant challenge for leadership: homogenization risk. If a single foundation model has a hidden bias or a security flaw, every application your company builds on top of it inherits that same flaw. If the foundation is unstable, the whole building is at risk.
        </div>

        <div className="content-p">
          This is why the{' '}
          <InlineContextCard trigger="EU AI Act" card={cardData.euAIAct} />{' '}
          created a special category for these systems called General-Purpose AI (GPAI). Regulators recognize that because these models are &quot;general,&quot; their risks are also general. Providers must now document their training data and comply with copyright laws to ensure the foundation they provide to the rest of us is reliable.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          How We Specialize
        </h2>

        <div className="content-p">
          Most organizations don&apos;t need to build their own foundation model from scratch—which can cost over $100 million in compute power alone. Instead, we adapt existing models to our needs. You might use fine-tuning to teach a model your company&apos;s specific legal terminology, or use{' '}
          <InlineContextCard trigger="Retrieval-Augmented Generation (RAG)" card={cardData.rag} />{' '}
          to ensure the model only answers questions using your private internal documents.
        </div>

        <div className="content-p">
          By using these general building blocks, we can achieve high performance on specialized tasks without the &quot;skyscrapers&quot; cost. As a leader, your role is to ensure that the foundation model you select is well-documented, tested for your specific use cases, and monitored for the unexpected capabilities that may emerge as the technology continues to advance.
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
        currentIndex={4}
        totalArticles={8}
        pathTitle="Terminology"
        prevArticle={{
          slug: '/articles/data-behind-ai',
          title: 'The Data Behind AI'
        }}
        nextArticle={{
          slug: '/articles/multimodal-ai',
          title: 'Multimodal AI'
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
