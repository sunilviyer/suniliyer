import { ThemeProvider } from '@/contexts/ThemeContext';

export default function JourneyLayout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
