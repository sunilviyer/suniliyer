import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body
        className={`${funnelDisplay.variable} ${funnelSans.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
