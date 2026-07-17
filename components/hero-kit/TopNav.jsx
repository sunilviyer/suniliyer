'use client';

import { useEffect, useState } from 'react';
import { UserRound, Sun, Moon, Mail, Menu, X as XIcon } from 'lucide-react';

const X = () => <XIcon className="xicon" aria-hidden="true" />;

/**
 * props:
 *  - menuGroups: [{ heading, links: [{ href, label, desc, onClick? }] }]
 *  - onConnectSubmit(formData): optional; wire to your existing endpoint
 */
export default function TopNav({ menuGroups = [], onConnectSubmit }) {
  const [open, setOpen] = useState(null); // 'about' | 'menu' | 'chat' | null
  const [sendState, setSendState] = useState('idle'); // idle | sending | sent | error

  // theme: persisted under its own key so the rest of the site is untouched
  useEffect(() => {
    const saved =
      typeof window !== 'undefined' && localStorage.getItem('kit-theme');
    document.documentElement.dataset.theme = saved || 'dark';
  }, []);
  const toggleTheme = () => {
    const next =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('kit-theme', next);
  };

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!onConnectSubmit) return;
    const form = e.target;
    setSendState('sending');
    try {
      await onConnectSubmit(new FormData(form));
      setSendState('sent');
      form.reset();
    } catch {
      setSendState('error');
    }
  };

  return (
    <>
      <header className="topnav">
        <a className="brand" href="/">si.</a>
        <nav className="navicons">
          <button aria-label="About Sunil" title="About" onClick={() => setOpen('about')}>
            <UserRound aria-hidden="true" />
          </button>
          <button aria-label="Toggle theme" title="Theme" onClick={toggleTheme}>
            <Sun className="icon-sun" aria-hidden="true" />
            <Moon className="icon-moon" aria-hidden="true" />
          </button>
          <button aria-label="Let's connect" title="Let's Connect" onClick={() => setOpen('chat')}>
            <Mail aria-hidden="true" />
          </button>
          <button aria-label="Menu" title="Menu" onClick={() => setOpen('menu')}>
            <Menu aria-hidden="true" />
          </button>
        </nav>
      </header>

      <div
        className={`scrim ${open ? 'show' : ''}`}
        onClick={() => setOpen(null)}
      />

      {/* about glass modal */}
      <div
        className={`glass-card about-card ${open === 'about' ? 'open' : ''}`}
        role="dialog"
        aria-label="About Sunil"
      >
        <button className="close corner" onClick={() => setOpen(null)} aria-label="Close"><X /></button>
        <h3>About Sunil</h3>
        <p>
          AI governance consultant with 18+ years serving enterprise customers.
          I lead Customer Success work with major insurers on AI transformation,
          and spend the rest of my time building: agents, frameworks, art, and
          an interactive Bhagavad Gita.
        </p>
        <div className="stat-row">
          <div><b>18+</b><span>years enterprise</span></div>
          <div><b>26+</b><span>published articles</span></div>
          <div><b>5</b><span>working AI agents</span></div>
        </div>
        <p>
          Vidya is the world of knowledge: responsible AI curriculum, governance
          frameworks, an AGI constitution. Leela is the world of play: Krishna's
          dance, generative art, and experiments that keep curiosity alive.
        </p>
      </div>

      {/* menu glass modal */}
      <div
        className={`glass-card menu-card ${open === 'menu' ? 'open' : ''}`}
        role="dialog"
        aria-label="Menu"
      >
        <button className="close corner" onClick={() => setOpen(null)} aria-label="Close"><X /></button>
        <h3>Explore</h3>
        <div className="menu-grid">
          {menuGroups.map((g) => (
            <div className="menu-group" key={g.heading}>
              <p className="group">{g.heading}</p>
              {g.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  onClick={
                    l.onClick
                      ? (e) => {
                          e.preventDefault();
                          setOpen(null);
                          l.onClick();
                        }
                      : undefined
                  }
                >
                  {l.label} <small>{l.desc}</small>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* glassmorphic connect card */}
      <div
        className={`glass-card connect-card ${open === 'chat' ? 'open' : ''}`}
        role="dialog"
        aria-label="Get in touch"
      >
        <button className="close corner" onClick={() => setOpen(null)} aria-label="Close"><X /></button>
        <h3>Get In Touch</h3>
        <p className="sub">Drop a message. I&apos;d love to hear from you.</p>
        <form onSubmit={submit}>
          <label>Name *</label>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
          <label>Email *</label>
          <input name="email" type="email" autoComplete="email" placeholder="you@email.com" required />
          <label>Subject *</label>
          <input name="subject" type="text" placeholder="What's this about?" required />
          <label>Message *</label>
          <textarea name="message" rows={3} placeholder="Say hello..." required />
          <button className="send" type="submit" disabled={sendState === 'sending'}>
            {sendState === 'sending' ? 'Sending…' : sendState === 'sent' ? 'Sent ✓' : 'Send Message →'}
          </button>
        </form>
        <p className="secure" aria-live="polite">
          {sendState === 'error' ? (
            'Something went wrong — please try again.'
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="lock" aria-hidden="true">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>{' '}
              Secure &amp; private
            </>
          )}
        </p>
      </div>
    </>
  );
}
