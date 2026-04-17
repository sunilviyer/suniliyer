import { MetadataRoute } from 'next';

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
          '/oldhistory/',
          '/demo/',
          '/_next/',
          '/private/',
        ],
      },
      // Explicitly allow AI crawlers for constitution and learning content
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'Google-Extended', 'Bingbot'],
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
