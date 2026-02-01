'use client';

import Link from 'next/link';
import Image from 'next/image';

export function FooterCard() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="card-container footer-container">
        <div className="card footer-card">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <div className="logo-ring">
                  <Image
                    src="/images/logo.jpg"
                    alt="Sunil Iyer"
                    fill
                    sizes="60px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="logo-text">
                  <span>Sunil</span>
                  <span>Iyer</span>
                </div>
              </div>
              <p className="footer-tagline">
                Making AI responsible, trustworthy, and accessible for everyone.
              </p>
            </div>

            <div className="footer-column">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/articles">Articles</Link>
                </li>
                <li>
                  <Link href="/learning-paths">Learning Paths</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Learning Paths</h3>
              <ul>
                <li>
                  <Link href="/learning-paths/history">History & Context</Link>
                </li>
                <li>
                  <Link href="/learning-paths/terminology">Foundation</Link>
                </li>
                <li>
                  <Link href="/learning-paths/implementation">Implementation</Link>
                </li>
                <li>
                  <Link href="/learning-paths/risk">Risk & Ethics</Link>
                </li>
                <li>
                  <Link href="/learning-paths/responsibility">Legal & Compliance</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li>
                  <a href="https://linkedin.com/in/sunilviyer" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/suniliyer" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:sunil@aidefence.com">
                    Email
                  </a>
                </li>
                <li>
                  <Link href="/contact">Contact Form</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Sunil Iyer. All rights reserved.</p>
            <div className="footer-legal">
              <Link href="/privacy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .footer-container {
          margin-bottom: 0;
        }

        .card {
          width: 100%;
          background: var(--card-bg);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .footer-card {
          background: var(--bg-secondary);
          padding: 80px 60px 40px 60px;
          min-height: 960px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-column h3 {
          font-family: var(--font-funnel);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 20px 0;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column li {
          margin-bottom: 12px;
        }

        .footer-column a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: #333d29;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .logo-ring {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #333d29;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          font-family: var(--font-funnel);
          font-size: 24px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .footer-tagline {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
          max-width: 350px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid var(--border-color);
        }

        .footer-bottom p {
          margin: 0;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-legal a {
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #333d29;
        }

        .separator {
          color: var(--text-secondary);
          font-size: 14px;
        }

        @media (max-width: 1024px) and (min-width: 768px) {
          .card-container {
            max-width: 90%;
            padding: 0 40px;
          }

          .footer-card {
            padding: 60px 40px 30px 40px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .footer-column:first-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 767px) {
          .card-container {
            max-width: 100%;
            padding: 0 20px;
          }

          .footer-card {
            padding: 40px 20px 20px 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 30px;
          }

          .footer-column:first-child {
            grid-column: auto;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            padding-top: 30px;
          }

          .footer-bottom p {
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
