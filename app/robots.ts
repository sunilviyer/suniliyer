import { MetadataRoute } from 'next';

/**
 * AI crawler user-agent tokens, verified against each operator's own docs.
 * The wildcard rule below already grants all of them access; naming them is
 * a deliberate, readable statement that this content is open to AI systems,
 * and it keeps the file from carrying retired tokens (Claude-Web) as if they
 * were current.
 */
const AI_CRAWLERS = [
  // OpenAI - developers.openai.com/api/docs/bots
  'GPTBot', // training
  'OAI-SearchBot', // ChatGPT search results
  'ChatGPT-User', // user-initiated fetches
  // Anthropic - support.claude.com/en/articles/8896518
  'ClaudeBot', // training
  'Claude-User', // user-initiated fetches
  'Claude-SearchBot', // search result quality
  'anthropic-ai', // legacy token, still checked by some scanners
  'Claude-Web', // retired token, kept so old crawler configs still match
  // Google - Gemini / Vertex AI training opt-out token
  'Google-Extended',
  // Microsoft - Bing and Copilot
  'Bingbot',
  // Perplexity - docs.perplexity.ai/guides/bots
  'PerplexityBot', // search results
  'Perplexity-User', // user-initiated fetches
  // Common Crawl, the corpus behind many open models
  'CCBot',
  // Apple Intelligence training opt-out token
  'Applebot-Extended',
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.suniliyer.ca';

  return {
    rules: [
      // Allow all major search engines and AI crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
        ],
      },
      // Explicitly allow AI crawlers for constitution and learning content
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
