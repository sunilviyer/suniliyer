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
          max-width: 1920px;
          margin: 0 auto;
          padding: 0;
          margin-bottom: 300px;
        }

        .card {
          width: 100%;
          background: var(--card-bg);
          border-radius: 0;
          box-shadow: 0 4px 12px var(--shadow-color);
        }

        .about-card {
          padding: 80px 60px;
          min-height: 800px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 500px 1fr;
          gap: 80px;
          align-items: start;
        }

        .about-image {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-content h2 {
          font-family: var(--font-funnel);
          font-size: 56px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 15px 0;
        }

        .about-content p {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .card-container {
            margin-bottom: 200px;
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

        @media (max-width: 768px) {
          .card-container {
            margin-bottom: 100px;
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
