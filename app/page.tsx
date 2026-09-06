// Homepage — the "Evolution of Data" scroll experience (components/evo).
// EvoPage renders its own nav and footer; components/layout/GlobalUI keeps
// the site-wide chrome off "/" already. Metadata (title, social cards,
// JSON-LD) comes from the root layout.
import { Archivo, IBM_Plex_Mono, Source_Sans_3 } from 'next/font/google';
import { EvoPage } from '@/components/evo/page';

const evoDisplay = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-evo-display',
  display: 'swap',
});

const evoMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-evo-mono',
  display: 'swap',
});

const evoBody = Source_Sans_3({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '600'],
  variable: '--font-evo-body',
  display: 'swap',
});

export default function Page() {
  return (
    <div className={`evo-fonts ${evoDisplay.variable} ${evoMono.variable} ${evoBody.variable}`}>
      <EvoPage />
    </div>
  );
}
