import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>

        <div className="card">
          <div className="terminal-bar">
            <div className="dot dot-r"></div>
            <div className="dot dot-y"></div>
            <div className="dot dot-g"></div>
            <span className="terminal-title">FRAUD_DETECTION_AGENT.exe — ANOMALY INVESTIGATION IN PROGRESS</span>
          </div>

          <div className="content">
            <div className="error-code">404</div>
            <div className="error-label">// PAGE NOT FOUND — ANOMALY DETECTED</div>

            <div className="ai-block">
              <div className="label">🤖 AI Analysis — Confidence: 99.7%</div>
              I&apos;ve cross-referenced 847 data points, deployed 12 ML models, and generated a 40-page report.
              Conclusion: the page you requested is <em>highly suspicious</em>. Flagged. Quarantined.
              It&apos;s probably wearing a fake moustache somewhere deep in the cloud.
            </div>

            <div className="suspects">
              <div className="suspects-title">// Prime Suspects</div>

              <div className="suspect">
                <div className="suspect-icon">🔗</div>
                <div>
                  <div className="suspect-name">The Broken Link</div>
                  <div className="suspect-desc">A known repeat offender. Claims it was &quot;just a typo.&quot; Fraud score: 98.3%. Currently in digital custody awaiting review.</div>
                </div>
              </div>

              <div className="suspect">
                <div className="suspect-icon">👻</div>
                <div>
                  <div className="suspect-name">The Phantom Page</div>
                  <div className="suspect-desc">Promised to exist. Never showed up. Filed a claim for &quot;existence&quot; — denied. Motive: unknown. Whereabouts: also unknown.</div>
                </div>
              </div>

              <div className="suspect">
                <div className="suspect-icon">🤦</div>
                <div>
                  <div className="suspect-name">Human Error (You, Probably)</div>
                  <div className="suspect-desc">No judgement — the AI misroutes things sometimes too. Okay, rarely. Fine, never. But solidarity regardless.</div>
                </div>
              </div>

              <div className="suspect">
                <div className="suspect-icon">🌀</div>
                <div>
                  <div className="suspect-name">The Deployment Gremlin</div>
                  <div className="suspect-desc">Lurks inside CI/CD pipelines. Strikes at the worst possible moment. Responsible for 73% of unexplained 404s industry-wide.*<br/><em style={{color:'#3a3a5a'}}>*Statistic AI-generated. Do not cite in a boardroom.</em></div>
                </div>
              </div>
            </div>

            <div className="verdict">
              <strong>🔒 Final Verdict:</strong> This URL has been flagged as a high-risk anomaly.
              It claimed to be a real page — our model strongly disagrees.
              Much like a suspicious insurance claim filed at 11:59pm on a Friday,
              something here just doesn&apos;t add up.
              <br /><br />
              The good news? You can head home safely. The AI is on it.
            </div>

            <div className="cta">
              <Link className="btn btn-primary" href="/">⬅ Back to Safety</Link>
              <Link className="btn btn-ghost" href="/">🔍 Explore the Portfolio</Link>
            </div>
          </div>
        </div>

        <div className="ticker">
          <div className="ticker-inner">
            <span className="ticker-item"><span>⚠</span> PAGE NOT FOUND — FRAUD SCORE: 99.7%</span>
            <span className="ticker-item"><span>🤖</span> AI MODELS: RUNNING</span>
            <span className="ticker-item"><span>🛡</span> ANOMALY DETECTION: ACTIVE</span>
            <span className="ticker-item"><span>📋</span> CLAIM STATUS: DENIED</span>
            <span className="ticker-item"><span>🔍</span> INVESTIGATION: ONGOING</span>
            <span className="ticker-item"><span>🚨</span> GREMLIN ALERT: ELEVATED</span>
            <span className="ticker-item"><span>✅</span> RESPONSIBLE AI: COMPLIANT</span>
            <span className="ticker-item"><span>📡</span> SIGNAL LOST — REACQUIRING</span>
            <span className="ticker-item"><span>⚠</span> PAGE NOT FOUND — FRAUD SCORE: 99.7%</span>
            <span className="ticker-item"><span>🤖</span> AI MODELS: RUNNING</span>
            <span className="ticker-item"><span>🛡</span> ANOMALY DETECTION: ACTIVE</span>
            <span className="ticker-item"><span>📋</span> CLAIM STATUS: DENIED</span>
            <span className="ticker-item"><span>🔍</span> INVESTIGATION: ONGOING</span>
            <span className="ticker-item"><span>🚨</span> GREMLIN ALERT: ELEVATED</span>
            <span className="ticker-item"><span>✅</span> RESPONSIBLE AI: COMPLIANT</span>
            <span className="ticker-item"><span>📡</span> SIGNAL LOST — REACQUIRING</span>
          </div>
        </div>

        <style jsx global>{`
          :root {
            --bg: #0a0a0f;
            --surface: #12121a;
            --border: #1e1e2e;
            --accent: #ff4d6d;
            --accent2: #ffd60a;
            --accent3: #4cc9f0;
            --text: #e2e2f0;
            --muted: #6b6b8a;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            background: var(--bg);
            color: var(--text);
            font-family: 'Space Mono', monospace;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }

          body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image:
              linear-gradient(rgba(76, 201, 240, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76, 201, 240, 0.04) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 0;
          }

          .orb {
            position: fixed;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.15;
            z-index: 0;
            animation: float 8s ease-in-out infinite alternate;
          }
          .orb1 { width: 400px; height: 400px; background: var(--accent); top: -100px; left: -100px; }
          .orb2 { width: 300px; height: 300px; background: var(--accent3); bottom: -50px; right: -50px; animation-delay: -4s; }

          @keyframes float {
            from { transform: translate(0, 0) scale(1); }
            to { transform: translate(30px, 20px) scale(1.1); }
          }

          .card {
            position: relative;
            z-index: 1;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 16px;
            max-width: 680px;
            width: 90%;
            padding: 0;
            box-shadow: 0 0 60px rgba(255, 77, 109, 0.1), 0 0 120px rgba(76, 201, 240, 0.05);
            animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(30px);
          }

          @keyframes slideUp {
            to { opacity: 1; transform: translateY(0); }
          }

          .terminal-bar {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 14px 20px;
            border-bottom: 1px solid var(--border);
            background: rgba(255,255,255,0.02);
            border-radius: 16px 16px 0 0;
          }
          .dot { width: 12px; height: 12px; border-radius: 50%; }
          .dot-r { background: #ff5f57; }
          .dot-y { background: #febc2e; }
          .dot-g { background: #28c840; }
          .terminal-title {
            margin-left: 8px;
            font-size: 11px;
            color: var(--muted);
            letter-spacing: 0.1em;
          }

          .content { padding: 40px 48px 48px; }

          .error-code {
            font-family: 'Syne', sans-serif;
            font-size: 120px;
            font-weight: 800;
            line-height: 1;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -4px;
            margin-bottom: 4px;
            animation: glitch 4s infinite;
          }

          @keyframes glitch {
            0%, 92%, 100% { text-shadow: none; transform: none; }
            93% { transform: skewX(-2deg); text-shadow: 3px 0 var(--accent3); }
            95% { transform: skewX(1deg); text-shadow: -3px 0 var(--accent); }
            97% { transform: none; text-shadow: none; }
          }

          .error-label {
            font-size: 11px;
            letter-spacing: 0.3em;
            color: var(--accent);
            text-transform: uppercase;
            margin-bottom: 32px;
          }

          .ai-block {
            background: rgba(76, 201, 240, 0.05);
            border: 1px solid rgba(76, 201, 240, 0.15);
            border-left: 3px solid var(--accent3);
            border-radius: 8px;
            padding: 16px 20px;
            margin-bottom: 28px;
            font-size: 12px;
            line-height: 1.8;
            color: var(--accent3);
          }
          .ai-block .label {
            font-size: 10px;
            letter-spacing: 0.2em;
            color: var(--muted);
            text-transform: uppercase;
            margin-bottom: 8px;
          }

          .suspects { margin-bottom: 28px; }
          .suspects-title {
            font-size: 10px;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: var(--muted);
            margin-bottom: 12px;
          }
          .suspect {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid var(--border);
            font-size: 12px;
            line-height: 1.6;
            animation: fadeIn 0.4s ease forwards;
            opacity: 0;
          }
          .suspect:last-child { border-bottom: none; }
          .suspect-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
          .suspect-name { color: var(--accent2); font-weight: 700; }
          .suspect-desc { color: var(--muted); }

          .suspect:nth-child(1) { animation-delay: 0.5s; }
          .suspect:nth-child(2) { animation-delay: 0.7s; }
          .suspect:nth-child(3) { animation-delay: 0.9s; }
          .suspect:nth-child(4) { animation-delay: 1.1s; }

          @keyframes fadeIn { to { opacity: 1; } }

          .verdict {
            background: rgba(255, 77, 109, 0.08);
            border: 1px solid rgba(255, 77, 109, 0.2);
            border-radius: 8px;
            padding: 14px 18px;
            font-size: 12px;
            color: var(--accent);
            margin-bottom: 32px;
            line-height: 1.7;
          }
          .verdict strong { color: #fff; }

          .cta { display: flex; gap: 12px; flex-wrap: wrap; }

          .btn {
            font-family: 'Space Mono', monospace;
            font-size: 11px;
            letter-spacing: 0.1em;
            padding: 12px 22px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
          }
          .btn-primary { background: var(--accent); color: #fff; }
          .btn-primary:hover {
            background: #ff6b85;
            transform: translateY(-1px);
            box-shadow: 0 8px 20px rgba(255, 77, 109, 0.3);
          }
          .btn-ghost {
            background: transparent;
            color: var(--muted);
            border: 1px solid var(--border);
          }
          .btn-ghost:hover { color: var(--text); border-color: var(--accent3); }

          .ticker {
            position: fixed;
            bottom: 0; left: 0; right: 0;
            background: rgba(10,10,15,0.9);
            border-top: 1px solid var(--border);
            padding: 8px 0;
            overflow: hidden;
            z-index: 2;
          }
          .ticker-inner {
            display: flex;
            gap: 60px;
            animation: scroll 22s linear infinite;
            white-space: nowrap;
          }
          .ticker-item { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); }
          .ticker-item span { color: var(--accent2); margin-right: 8px; }

          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @media (max-width: 500px) {
            .content { padding: 28px 24px 36px; }
            .error-code { font-size: 80px; }
          }
        `}</style>
      </body>
    </html>
  );
}
