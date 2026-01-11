'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function LargeLanguageModelsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
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
        articleTitle="Large Language Models"
        tldr="Large Language Models like GPT and Claude use transformer architectures trained on massive text datasets to understand and generate human-like text, fundamentally changing how we interact with AI."
        tags={['LLMs', 'Transformers', 'Natural Language Processing']}
        readTime="9 min read"
        updatedDate="January 2025"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Transformer Revolution
        </h2>

        <div className="content-p">
          Large Language Models (LLMs) represent the current frontier of AI capabilities. Built on the transformer architecture introduced in 2017, these models process language by learning contextual relationships between words across entire documents, enabling unprecedented understanding and generation of human text.
        </div>

        <KeyLearnings
          theme={theme}
          learnings={[
            'Transformers use self-attention mechanisms to understand context and relationships across entire sequences of text.',
            'LLMs are trained on trillions of tokens from books, websites, and code to learn language patterns and world knowledge.',
            'Scaling laws show that model performance improves predictably with more parameters, data, and compute.',
            'Fine-tuning and RLHF (Reinforcement Learning from Human Feedback) align models with human preferences and safety.',
            'LLMs exhibit emergent capabilities like reasoning and planning that were not explicitly programmed.'
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
                <li>Vaswani et al. - Attention Is All You Need (2017) - Transformer Paper</li>
                <li>OpenAI - GPT-3 and GPT-4 Technical Reports</li>
                <li>Anthropic - Claude Model Card and Constitutional AI</li>
                <li>Andrej Karpathy - State of GPT and LLM Basics</li>
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
                <li>Vaswani, A., et al. (2017). Attention Is All You Need - NeurIPS</li>
                <li>Brown, T., et al. (2020). Language Models are Few-Shot Learners - OpenAI GPT-3</li>
                <li>Ouyang, L., et al. (2022). Training language models to follow instructions with human feedback</li>
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

      <ArticleProgressNav
        currentIndex={7}
        totalArticles={8}
        pathTitle="History"
        prevArticle={{
          slug: '/articles/generative-ai-explained',
          title: 'Generative AI Explained'
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
