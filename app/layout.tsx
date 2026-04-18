import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CookieBanner } from "@/components/CookieBanner";
import { GlobalUI } from "@/components/layout/GlobalUI";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema, getPersonSchema, getWebSiteSchema } from "@/lib/schema";
import { getHomepageSocialMeta } from "@/lib/social-meta";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: 'swap', // Font display swap for better performance
});

const funnelSans = Funnel_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  display: 'swap', // Font display swap for better performance
});

// Optimize viewport for performance
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = getHomepageSocialMeta();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global schema markup for all pages
  const globalSchemas = [
    getOrganizationSchema(),
    getPersonSchema(),
    getWebSiteSchema()
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={globalSchemas} />

        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body
        className={`${funnelDisplay.variable} ${funnelSans.variable}`}
        suppressHydrationWarning
      >
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
        {/* Google Analytics — consent defaults to denied until user accepts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XZW8P22P77"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
            gtag('js', new Date());
            gtag('config', 'G-XZW8P22P77', { anonymize_ip: true });
          `}
        </Script>
        <CookieBanner />
        <GlobalUI />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
