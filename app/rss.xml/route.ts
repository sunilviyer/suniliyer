import {
  AUTHOR_NAME,
  FEED_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  getFeedItems,
} from '@/lib/feed';

// The feed is built from static content indexes, so it can be prerendered
// and served from the edge cache like the sitemap.
export const dynamic = 'force-static';

const FEED_TITLE = `${SITE_NAME} - Articles and the AGI Constitution`;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const items = getFeedItems();
  const feedUrl = `${SITE_URL}${FEED_PATH}`;
  const lastBuildDate = new Date().toUTCString();

  const itemsXml = items
    .map((item) => {
      const link = `${SITE_URL}${item.path}`;
      const categories = item.categories
        .map((category) => `      <category>${escapeXml(category)}</category>`)
        .join('\n');

      return [
        '    <item>',
        `      <title>${escapeXml(item.title)}</title>`,
        `      <link>${escapeXml(link)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
        `      <description>${escapeXml(item.description)}</description>`,
        `      <dc:creator>${escapeXml(AUTHOR_NAME)}</dc:creator>`,
        `      <pubDate>${item.pubDate.toUTCString()}</pubDate>`,
        categories,
        '    </item>',
      ]
        .filter((line) => line.length > 0)
        .join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getUTCFullYear()} ${escapeXml(AUTHOR_NAME)}</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <image>
      <url>${escapeXml(`${SITE_URL}/images/sunil.webp`)}</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${escapeXml(SITE_URL)}</link>
    </image>
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
