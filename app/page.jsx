// Homepage — the "Landing v3" mockup from the Claude Design project.
// Metadata (title, social cards, JSON-LD) comes from the root layout.
import { Instrument_Serif, Barlow } from 'next/font/google';
import Home from './Home';
import './landing.css';

const instrument = Instrument_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400'],
  variable: '--font-instrument',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

export default function Page() {
  return <Home fontClasses={`${instrument.variable} ${barlow.variable}`} />;
}
