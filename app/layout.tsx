import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-funnel",
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
        className={`${funnelDisplay.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
