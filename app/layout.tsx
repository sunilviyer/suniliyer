import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CookieBanner } from "@/components/CookieBanner";
import { GlobalUI } from "@/components/layout/GlobalUI";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-funnel-display",
});

const funnelSans = Funnel_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-funnel-sans",
});

export const metadata: Metadata = {
  title: "Sunil Iyer | AI Governance & Responsible AI",
  description: "Helping organizations navigate AI through education, implementation guidance, and governance frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
