// Hero redesign preview — promote to app/page.tsx when approved.
import { Fraunces, Archivo } from 'next/font/google';
import HeroPreview from './HeroPreview';
import './hero-kit.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500'],
  variable: '--font-fraunces',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata = {
  title: 'Sunil Iyer | AI Governance, Responsible AI Curriculum, Frameworks & AI Agents',
  robots: { index: false, follow: false }, // preview page; drop when promoted
};

export default function Page() {
  return <HeroPreview fontClasses={`${fraunces.variable} ${archivo.variable}`} />;
}
