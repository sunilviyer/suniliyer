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
          The Probability of Prose
        </h2>

        <div className="content-p">
          Think about the last time you used autocomplete on your phone to finish a text message. Behind the scenes of sophisticated tools like ChatGPT lies a similar mechanism, scaled up to an incredible degree. These are Large Language Models (LLMs), and while they might seem like they are thinking, they are actually doing something much simpler: predicting the next word in a sequence.
        </div>

        <div className="content-p">
          Here is the key insight: to predict that next word accurately across trillions of examples, the model must capture patterns of grammar, logic, and even a bit of common sense. It does not &quot;know&quot; facts like a person does, but its statistical map of human language is so vast that it can produce coherent essays, debug complex code, or even write poetry.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Engine: The Transformer
        </h2>

        <div className="content-p">
          To understand how we got here, we have to look back at the 2017 Transformer revolution. Before this breakthrough, AI processed text one word at a time, often losing the thread of a long sentence. Think of it like reading through a straw—it was slow and limited.
        </div>

        <div className="content-p">
          Transformers introduced an &quot;attention mechanism&quot; that allows the system to look at every word in a document simultaneously to understand context. When a model reads the word &quot;it,&quot; the attention mechanism allows it to instantly look back and see if &quot;it&quot; refers to a &quot;cat&quot; or a &quot;corporation,&quot; regardless of how far apart they are.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          How Models Are &quot;Schooled&quot;
        </h2>

        <div className="content-p">
          Modern LLMs do not just emerge from the box ready to help. They go through three distinct levels of training. First is pre-training, where the model reads the entire public internet to learn how language works. This is followed by supervised fine-tuning, where human instructors provide high-quality examples of good answers.
        </div>

        <div className="content-p">
          Finally, we use Reinforcement Learning from Human Feedback (RLHF). This is where humans rank different AI responses to teach the model our preferences and values. This process makes the model feel helpful and safe, but it does not change the fact that the underlying engine is still a probability machine.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Reality Check: Hallucination and RAG
        </h2>

        <div className="content-p">
          Because the model is focused on what word is likely to come next rather than what is true, it can experience a hallucination. It might confidently state a historical date that never happened or cite a legal case that does not exist. Think of it like a very well-read assistant who occasionally makes things up just to be helpful.
        </div>

        <div className="content-p">
          For effective governance, we can never treat LLM outputs as a final source of truth. To solve this, we often use Retrieval-Augmented Generation (RAG). RAG forces the AI to look up information in a verified knowledge base before generating an answer, providing the factual grounding that raw models lack.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          The Path Ahead
        </h2>

        <div className="content-p">
          As we explore the history of AI in our next article, keep this in mind: LLMs are powerful pattern-matchers, not reasoning engines. Understanding this limit is your most important shield against the hype.
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
