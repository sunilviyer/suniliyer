import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import Script from "next/script";
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
        {children}
      </body>
    </html>
  );
}
