'use client';

interface ReadingProgressProps {
  progress: number;
  pathColor: string;
}

export function ReadingProgress({ progress, pathColor }: ReadingProgressProps) {
  return (
    <>
      <div className="reading-progress">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            background: pathColor,
          }}
        />
      </div>

      <style jsx>{`
        .reading-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(26, 26, 26, 0.05);
          z-index: 1000;
        }

        .progress-bar {
          height: 100%;
          transition: width 0.1s ease;
          box-shadow: 0 0 10px currentColor;
        }
      `}</style>
    </>
  );
}
