'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function DeepLearningDecodedPage() {
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
        articleTitle="Deep Learning Decoded"
        tldr="Deep learning uses neural networks with multiple layers to automatically learn hierarchical patterns from data, powering modern breakthroughs in image recognition, natural language processing, and more."
        tags={['Deep Learning', 'Neural Networks', 'AI Architecture']}
        readTime="8 min read"
        updatedDate="January 2025"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          From Simple to Deep
        </h2>

        <div className="content-p">
          Deep learning represents a fundamental shift in how we build AI systems. Instead of hand-crafting features, deep neural networks learn to extract patterns automatically from raw data through multiple layers of processing.
        </div>

        <KeyLearnings
          theme={theme}
          learnings={[
            'Neural networks are composed of interconnected layers that transform input data into meaningful outputs.',
            'Deep learning excels at automatically discovering hierarchical patterns without manual feature engineering.',
            'Training deep networks requires substantial computational resources and large datasets.',
            'Convolutional Neural Networks (CNNs) revolutionized computer vision by learning spatial hierarchies.',
            'Transfer learning allows pre-trained models to be adapted for new tasks with limited data.'
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
                <li>Ian Goodfellow, Yoshua Bengio, Aaron Courville - Deep Learning (2016)</li>
                <li>Andrew Ng - Deep Learning Specialization - Coursera</li>
                <li>Geoffrey Hinton - Neural Networks for Machine Learning</li>
                <li>Yann LeCun - Deep Learning and the Future of AI</li>
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
                <li>Goodfellow, I., Bengio, Y., Courville, A. (2016). Deep Learning - MIT Press</li>
                <li>LeCun, Y., Bengio, Y., Hinton, G. (2015). Deep learning - Nature</li>
                <li>Krizhevsky, A., Sutskever, I., Hinton, G. E. (2012). ImageNet Classification with Deep Convolutional Neural Networks</li>
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
        currentIndex={5}
        totalArticles={8}
        pathTitle="History"
        prevArticle={{
          slug: '/articles/how-machines-learn',
          title: 'How Machines Learn'
        }}
        nextArticle={{
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
