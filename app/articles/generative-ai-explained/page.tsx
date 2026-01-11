'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function GenerativeAIExplainedPage() {
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
        articleTitle="Generative AI Explained"
        tldr="Generative AI creates new content—text, images, code, and more—by learning patterns from training data. Understanding how these systems work is essential for governing their use responsibly."
        tags={['Generative AI', 'Content Creation', 'AI Applications']}
        readTime="7 min read"
        updatedDate="January 2025"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          From Classification to Creation
        </h2>

        <div className="content-p">
          Generative AI represents a fundamental shift from systems that analyze and classify to systems that create entirely new content. These models learn the underlying patterns and structures in their training data, then use that knowledge to generate novel outputs.
        </div>

        <KeyLearnings
          theme={theme}
          learnings={[
            'Generative AI creates new content by learning statistical patterns from training data.',
            'GANs (Generative Adversarial Networks) use two neural networks competing against each other to produce realistic outputs.',
            'Diffusion models gradually refine random noise into structured images through a learned denoising process.',
            'Generative models raise new governance challenges around authenticity, copyright, and misinformation.',
            'Responsible deployment requires watermarking, provenance tracking, and clear disclosure of AI-generated content.'
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
                <li>Ian Goodfellow - Generative Adversarial Networks (GANs) - 2014</li>
                <li>OpenAI - DALL-E and GPT Model Documentation</li>
                <li>Stability AI - Stable Diffusion Technical Report</li>
                <li>MIT Technology Review - The Generative AI Revolution</li>
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
                <li>Goodfellow, I., et al. (2014). Generative Adversarial Networks - NeurIPS</li>
                <li>Ho, J., Jain, A., Abbeel, P. (2020). Denoising Diffusion Probabilistic Models</li>
                <li>Ramesh, A., et al. (2022). Hierarchical Text-Conditional Image Generation with CLIP Latents</li>
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
        currentIndex={6}
        totalArticles={8}
        pathTitle="History"
        prevArticle={{
          slug: '/articles/deep-learning-decoded',
          title: 'Deep Learning Decoded'
        }}
        nextArticle={{
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
