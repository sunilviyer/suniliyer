// Homepage — the hero redesign, promoted from /hero-preview.
// Metadata (title, social cards, JSON-LD) comes from the root layout.
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

export default function Page() {
  return <HeroPreview fontClasses={`${fraunces.variable} ${archivo.variable}`} />;
}
