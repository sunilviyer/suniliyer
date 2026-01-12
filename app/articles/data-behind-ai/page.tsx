'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function DataBehindAIArticle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const cardData = {
    howMachinesLearn: {
      id: 'article-link-how-machines-learn',
      title: 'How Machines Learn',
      type: 'article-link' as const,
      articleSlug: 'how-machines-learn',
      summary: 'An introduction to machine learning fundamentals, explaining how AI systems learn patterns from data through training rather than following explicit programming instructions.',
      tags: ['Machine Learning', 'Training', 'Fundamentals']
    },
    amazonHiring: {
      id: 'ex-amazon-hiring',
      title: 'Amazon Hiring Bias',
      type: 'example' as const,
      summary: 'In 2018, Amazon scrapped an AI recruiting tool that showed bias against women. The system was trained on 10 years of historical resumes, predominantly from men, and learned to penalize resumes containing words like &quot;women\'s.&quot; The model replicated historical patterns rather than identifying true talent.',
      tags: ['Bias', 'Hiring', 'Case Study']
    },
    representationBias: {
      id: 'concept-representation-bias',
      title: 'Representation Bias',
      type: 'concept' as const,
      summary: 'When training data does not adequately represent all populations that will be affected by the AI system. Common in facial recognition (lacking diverse skin tones), medical AI (missing certain demographics), and language models (underrepresenting non-English speakers).',
      tags: ['Bias', 'Fairness', 'Data Quality']
    },
    datasheetsForDatasets: {
      id: 'res-datasheets-for-datasets',
      title: 'Datasheets for Datasets',
      type: 'resource' as const,
      summary: 'A standardized documentation framework proposed by researchers at Microsoft and other institutions. It requires dataset creators to document motivation, composition, collection process, preprocessing, distribution, and maintenance—similar to how electronics come with specification sheets.',
      tags: ['Documentation', 'Transparency', 'Best Practice']
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
        articleTitle="The Data Behind AI"
        tldr="Data is the foundation of AI; model behavior is a direct reflection of the patterns found in its training data. Understanding data quality, bias, and provenance is essential for responsible AI deployment."
        tags={['Training Data', 'Data Quality', 'Bias Mitigation']}
        readTime="8 min read"
        updatedDate="January 2025"
        headerImage="/images/history/data-behind-ai.webp"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Foundation of the AI House
        </h2>

        <div className="content-p">
          Think about how you learned to recognize a &lsquo;good&rsquo; employee or a &lsquo;fair&rsquo; deal. You didn&apos;t just read a manual; you observed thousands of interactions over many years. Here is the key insight: AI systems learn in much the same way. While traditional software follows rules we write, AI behavior is determined by the data it &lsquo;observes&rsquo; during training.
        </div>

        <div className="content-p">
          Think of it this way: the AI model is essentially a compressed representation of its{' '}
          <InlineContextCard trigger="training data" card={cardData.howMachinesLearn} />. If you build a house on a shaky foundation, the whole structure is unstable. In the world of AI, that foundation is your data. If the data is flawed, the AI doesn&apos;t just fail; it learns those flaws and applies them to every decision it makes at scale.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Data In, Behavior Out
        </h2>

        <div className="content-p">
          You may have heard the phrase &lsquo;Garbage In, Garbage Out.&rsquo; In AI, we use a stronger version: &lsquo;Data In, Behavior Out&rsquo;. Because AI detects statistical patterns rather than following fixed logic, every error or bias in your dataset becomes a potential pattern in the model&apos;s behavior.
        </div>

        <div className="content-p">
          To understand this, consider the{' '}
          <InlineContextCard trigger="Amazon hiring bias incident" card={cardData.amazonHiring} />. The engineers didn&apos;t program the system to be sexist; the model simply learned from a decade of historical data where men were disproportionately hired. The AI wasn&apos;t broken—it was doing exactly what it was trained to do: replicate the patterns of the past.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Dimensions of Quality
        </h2>

        <div className="content-p">
          When we talk about &lsquo;good&rsquo; data, we aren&apos;t just talking about it being &lsquo;clean.&rsquo; High-quality data for AI must be assessed across several dimensions. Accuracy is the baseline—are the values correct?. But Completeness and Representativeness are equally vital.
        </div>

        <div className="content-p">
          If your data is accurate but only represents a narrow slice of the population, your AI will have &lsquo;blind spots&rsquo;. For instance, a facial recognition system trained primarily on lighter skin tones will systematically fail on darker skin tones, not because the math is wrong, but because the{' '}
          <InlineContextCard trigger="representation bias" card={cardData.representationBias} />{' '}
          in the data prevented it from learning the necessary patterns.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Provenance: Knowing Your Ingredients
        </h2>

        <div className="content-p">
          Would you eat a meal if you had no idea where the ingredients came from? Probably not. Similarly, you shouldn&apos;t deploy an AI if you don&apos;t know the &lsquo;provenance&rsquo; of its data. Data provenance is the documented history of where your data originated, how it was cleaned, and who handled it.
        </div>

        <div className="content-p">
          Standardized tools like{' '}
          <InlineContextCard trigger="Datasheets for Datasets" card={cardData.datasheetsForDatasets} />{' '}
          help bridge this transparency gap by recording the motivation, composition, and collection process of a dataset. This documentation is essential for accountability; you cannot explain an AI&apos;s decision if you cannot explain the information it used to learn.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Practical Takeaway
        </h2>

        <div className="content-p">
          As you lead AI initiatives, remember that most AI failures are actually data failures in disguise. Before investing in more powerful algorithms, you should ask your teams these three questions:
        </div>

        <ul className="content-ul">
          <li>Where did this data come from? (Legal basis and provenance).</li>
          <li>Does it represent the people we serve today? (Representativeness).</li>
          <li>What patterns of the past are we accidentally teaching it? (Historical bias).</li>
        </ul>

        <div className="content-p">
          By focusing on the data first, you ensure that your AI is built on a foundation of quality and fairness. In our next article, we will look at Foundation Models to see how these massive datasets are used to create the &lsquo;all-purpose&rsquo; AI tools we use today.
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
        currentIndex={3}
        totalArticles={8}
        pathTitle="Terminology"
        prevArticle={{
          slug: '/terminology/ai-vs-automation',
          title: 'AI vs Automation'
        }}
        nextArticle={{
          slug: '/terminology/foundation-models',
          title: 'Foundation Models'
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
