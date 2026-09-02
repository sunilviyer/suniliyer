#!/usr/bin/env node
/**
 * Fails if any sitemap URL serves too little content WITHOUT JavaScript.
 *
 * Googlebot executes JS, but most AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
 * read raw HTML only. A page whose prose lives in the Next.js flight payload is
 * therefore invisible to them. That is exactly what happened once: an isMounted
 * gate in DatabaseArticleRenderer meant 40 article pages server-rendered a
 * loading skeleton and nothing else. This guards against a repeat.
 *
 *   node scripts/check-ai-readable.mjs [baseUrl]
 */

const BASE = process.argv[2] || process.env.CHECK_BASE_URL || 'https://www.suniliyer.ca';

// Index and app-like pages are legitimately short: they are link surfaces, not prose.
const LENIENT = [
  /\/$/,                      // homepage
  /\/(risk|terminology|history|responsibility|future)$/,
  /\/(gita|calvinhobbes|coming-soon|mortgage-calculator|constitution)$/,
];
const PROSE_MIN = 600;   // content pages must clear this without JS
const INDEX_MIN = 250;   // index pages need at least their own chrome + links

const strip = (html) =>
  html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const words = (s) => (s ? s.split(' ').filter(Boolean).length : 0);

async function main() {
  const smRes = await fetch(`${BASE}/sitemap.xml`);
  if (!smRes.ok) throw new Error(`sitemap fetch failed: ${smRes.status}`);
  const sm = await smRes.text();
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urls.length) throw new Error('no <loc> entries found in sitemap');

  const failures = [];
  const queue = [...urls];
  const worker = async () => {
    while (queue.length) {
      const raw = queue.shift();
      const url = raw.replace(/^https?:\/\/[^/]+/, BASE);
      try {
        const res = await fetch(url, { redirect: 'follow' });
        const text = strip(await res.text());
        const n = words(text);
        const lenient = LENIENT.some((re) => re.test(new URL(url).pathname || '/'));
        const min = lenient ? INDEX_MIN : PROSE_MIN;
        if (!res.ok) failures.push({ url, reason: `HTTP ${res.status}` });
        else if (n < min) failures.push({ url, reason: `${n} words without JS (min ${min})` });
      } catch (err) {
        failures.push({ url, reason: `fetch error: ${err.message}` });
      }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));

  console.log(`checked ${urls.length} sitemap URLs against ${BASE}`);
  if (failures.length) {
    console.error(`\n${failures.length} page(s) not readable without JavaScript:\n`);
    for (const f of failures.sort((a, b) => a.url.localeCompare(b.url))) {
      console.error(`  ${f.url}\n    ${f.reason}`);
    }
    console.error('\nLikely cause: content gated behind a client-side effect, or a');
    console.error('dynamic import with ssr:false. The prose must be in the HTML.\n');
    process.exit(1);
  }
  console.log('all pages serve their content without JavaScript ✓');
}

main().catch((err) => {
  console.error(`check failed: ${err.message}`);
  process.exit(1);
});
