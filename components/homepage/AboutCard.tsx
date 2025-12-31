'use client';

import Image from 'next/image';

interface StatData {
  number: string;
  label: string;
}

const stats: StatData[] = [
  {
    number: '15+',
    label: 'Years in AI & Tech',
  },
  {
    number: '100+',
    label: 'AI Projects Delivered',
  },
  {
    number: '50+',
    label: 'Organizations Guided',
  },
];

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
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="about-content">
              <h2>A little about me</h2>
              <p>
                I&apos;m Sunil Iyer, an AI strategist and technologist passionate about making
                artificial intelligence responsible, trustworthy, and accessible. With over
                15 years of experience in technology leadership, I help organizations navigate
                the complex landscape of AI implementation while ensuring ethical practices
                and regulatory compliance.
              </p>
              <p>
                My work focuses on bridging the gap between cutting-edge AI innovation and
                practical business applications. From governance frameworks to technical
                implementation, I guide teams through every step of their AI journey with
                a focus on transparency, accountability, and real-world impact.
              </p>
              <p>
                Beyond consulting, I&apos;m dedicated to education and knowledge sharing. Through
                workshops, writing, and speaking engagements, I empower professionals to
                understand and leverage AI responsibly in their organizations.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
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
          grid-template-columns: 400px 1fr 350px;
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
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .stat-card {
          background: linear-gradient(135deg, #333d29 0%, #4a5739 100%);
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .stat-number {
          font-family: var(--font-funnel);
          font-size: 56px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
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
            height: 400px;
            max-width: 500px;
            margin: 0 auto;
          }

          .about-content h2 {
            font-size: 40px;
          }

          .about-stats {
            flex-direction: row;
            gap: 20px;
          }

          .stat-card {
            flex: 1;
          }

          .stat-number {
            font-size: 48px;
          }

          .stat-label {
            font-size: 14px;
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
            height: 350px;
          }

          .about-content h2 {
            font-size: 32px;
          }

          .about-content p {
            font-size: 16px;
          }

          .about-stats {
            flex-direction: column;
            gap: 20px;
          }

          .stat-number {
            font-size: 40px;
          }

          .stat-label {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
