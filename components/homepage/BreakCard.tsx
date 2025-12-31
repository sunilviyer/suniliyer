'use client';

interface BreakCardProps {
  image: string;
  text: string;
}

export function BreakCard({ image, text }: BreakCardProps) {
  return (
    <>
      <div className="card-container">
        <div className="card break-card">
          <div className="break-card-overlay" />
          <h2>{text}</h2>
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

        .break-card {
          position: relative;
          min-height: 960px;
          background-image: url('${image}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .break-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .break-card h2 {
          position: relative;
          z-index: 2;
          font-family: var(--font-funnel);
          font-size: 72px;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
          margin: 0;
          padding: 40px;
        }

        @media (max-width: 1024px) {
          .card-container {
            margin-bottom: 200px;
          }

          .break-card {
            min-height: 600px;
          }

          .break-card h2 {
            font-size: 56px;
          }
        }

        @media (max-width: 768px) {
          .card-container {
            margin-bottom: 100px;
          }

          .break-card {
            min-height: 400px;
          }

          .break-card h2 {
            font-size: 40px;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
