'use client';

import Image from 'next/image';

export function AboutCard() {
  return (
    <>
      <div className="card-container">
        <div className="card about-card">
          <div className="about-grid">
            <div className="about-image">
              <Image
                src="/images/Sunil.jpg"
                alt="Sunil Iyer"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="about-content">
              <h2>A little about me</h2>
              <p>
                I&apos;m a results-driven leader specializing in AI adoption, customer success, and
                enterprise digital transformation. With a proven track record implementing AI-driven
                engagement models, optimizing data analytics, and leading cross-functional teams, I drive
                revenue growth, operational efficiency, and long-term client retention.
              </p>
              <p>
                My expertise lies in aligning AI strategies with business objectives, influencing C-suite
                stakeholders, and developing comprehensive AI governance frameworks. I&apos;m passionate about
                leveraging AI and automation to transform customer engagement, mitigate risk, and drive
                measurable business impact.
              </p>
              <p>
                Currently serving as Senior Manager at Shift Technology, I&apos;ve fostered long-term
                enterprise relationships while implementing data-driven engagement models that maintain
                100% client retention and drive significant growth. Previously at Ernst & Young, I oversaw
                $30M+ in client engagements focused on strategy implementation, process improvement, and
                technology transformation.
              </p>
              <p>
                I hold an MBA from the University of Toronto, am a Certified Cloud Digital Leader (Google Cloud),
                and bring deep expertise in AI ethics & governance, program management, and enterprise transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto 200px;
          padding: 0 40px;
        }

        .card {
          width: 100%;
          background: var(--card-bg);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .about-card {
          padding: 80px 60px;
          min-height: 960px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 60px;
          align-items: start;
        }

        .about-image {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-content h2 {
          font-family: var(--font-funnel);
          font-size: 48px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 10px 0;
        }

        .about-content p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }

        @media (max-width: 1024px) and (min-width: 768px) {
          .card-container {
            max-width: 90%;
            margin-bottom: 200px;
            padding: 0 40px;
          }

          .about-card {
            padding: 60px 40px;
            min-height: auto;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-image {
            height: 450px;
            max-width: 600px;
            margin: 0 auto;
          }

          .about-content h2 {
            font-size: 44px;
          }
        }

        @media (max-width: 767px) {
          .card-container {
            max-width: 100%;
            margin-bottom: 100px;
            padding: 0 20px;
          }

          .about-card {
            padding: 40px 20px;
          }

          .about-grid {
            gap: 30px;
          }

          .about-image {
            height: 400px;
          }

          .about-content h2 {
            font-size: 36px;
          }

          .about-content p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
