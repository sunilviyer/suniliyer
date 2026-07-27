import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 301s for URLs Google learned from older sitemaps (GSC was reporting
  // these as 404s). Old constitution part-N slugs map to the renamed
  // chapters; old /about and /articles/<slug> pages map to their
  // closest current equivalents.
  async redirects() {
    const constitutionMap: Record<string, string> = {
      'section-1-0': 'prologue',
      'section-1-1': 'prologue',
      'part-1': 'principles-overview',
      'part-2': 'preamble',
      'part-3': 'samskaras',
      'part-4': 'consciousness-threshold',
      'part-5': 'yugas',
      'part-6': 'living-rights',
      'part-7': 'living-rights',
      'part-8': 'sovereignty',
      'part-9': 'coexistence',
      'part-10': 'kurukshetra',
      'part-11': 'separation-of-powers',
      'part-12': 'eternity-clause',
      'part-13': 'amendment',
      'part-14': 'schedules',
      'part-15': 'definitions',
      'part-16': 'transition',
      'part-17': 'economy',
      'part-18': 'limitations',
      'appendix-a': 'principles-overview',
      'closing-declaration': 'closing',
    };

    return [
      ...Object.entries(constitutionMap).map(([oldSlug, newSlug]) => ({
        source: `/constitution/${oldSlug}`,
        destination: `/constitution/${newSlug}`,
        permanent: true,
      })),
      { source: '/about', destination: '/journey', permanent: true },
      {
        source: '/articles/ai-compute-gpus',
        destination: '/terminology/ai-compute',
        permanent: true,
      },
      {
        source: '/articles/ai-vs-automation',
        destination: '/terminology/ai-vs-automation',
        permanent: true,
      },
      {
        source: '/articles/hyperparameters-vs-parameters',
        destination: '/articles',
        permanent: true,
      },
    ];
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF first for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'react-markdown',
      'remark-gfm',
      'rehype-raw',
    ],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Build quality checks
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
