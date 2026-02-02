import { useState, useRef, useEffect, useCallback } from "react";

/*
  CARD-ONLY PALETTE — Page backgrounds untouched
  ─────────────────────────────────────────────
  Space Indigo  #22223B
  Dusty Grape   #4A4E69
  Lilac Ash     #9A8C98
  Almond Silk   #C9ADA7
  Seashell      #F2E9E4
*/

const P = {
  spaceIndigo: "#22223B",
  dustyGrape: "#4A4E69",
  lilacAsh: "#9A8C98",
  almondSilk: "#C9ADA7",
  seashell: "#F2E9E4",
  errorRed: "#D94F3B",
  successGreen: "#4EAF7A",
};

/* ─── Background luminance detector (multi-sample) ─── */
function useBgLuminance(ref, active) {
  const [isDark, setIsDark] = useState(true);
  const measure = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const samples = [
      [rect.left + rect.width * 0.3, rect.top + rect.height * 0.3],
      [rect.left + rect.width * 0.5, rect.top + rect.height * 0.5],
      [rect.left + rect.width * 0.7, rect.top + rect.height * 0.7],
    ];
    let totalLum = 0, valid = 0;
    for (const [sx, sy] of samples) {
      const el = document.elementFromPoint(sx, sy);
      if (!el) continue;
      let bg = "", node = el;
      while (node && node !== document.documentElement) {
        const s = getComputedStyle(node);
        if (s.backgroundColor && s.backgroundColor !== "rgba(0, 0, 0, 0)" && s.backgroundColor !== "transparent") { bg = s.backgroundColor; break; }
        node = node.parentElement;
      }
      if (!bg) bg = "rgb(10,10,10)";
      const m = bg.match(/\d+/g);
      if (m) { const [r, g, b] = m.map(Number); totalLum += (0.299 * r + 0.587 * g + 0.114 * b) / 255; valid++; }
    }
    if (valid > 0) setIsDark(totalLum / valid < 0.45);
  }, [ref]);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(measure, 100);
    const onScroll = () => requestAnimationFrame(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", measure); };
  }, [active, measure]);
  return isDark;
}

/* ─── Detect when footer contact section is visible ─── */
function useNearFooter(footerRef) {
  const [merged, setMerged] = useState(false);
  useEffect(() => {
    if (!footerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setMerged(entry.isIntersecting && entry.intersectionRatio > 0.25),
      { threshold: [0, 0.25, 0.5] }
    );
    obs.observe(footerRef.current);
    return () => obs.disconnect();
  }, [footerRef]);
  return merged;
}

/* ─── Input Field ─── */
function InputField({ label, name, type = "text", placeholder, value, onChange, error, multiline, dark }) {
  const [focused, setFocused] = useState(false);
  const inputBg = dark
    ? focused ? `${P.spaceIndigo}EE` : `${P.spaceIndigo}BB`
    : focused ? `rgba(255,255,255,0.85)` : `rgba(255,255,255,0.5)`;
  const borderColor = error
    ? `${P.errorRed}99`
    : focused ? `${P.almondSilk}${dark ? "AA" : "CC"}` : dark ? `${P.lilacAsh}33` : `${P.lilacAsh}44`;
  const textColor = dark ? P.seashell : P.spaceIndigo;
  const focusShadow = dark
    ? `0 0 0 3px ${P.almondSilk}15, 0 2px 10px rgba(0,0,0,0.3)`
    : `0 0 0 3px ${P.almondSilk}25, 0 2px 8px ${P.lilacAsh}12`;

  const base = {
    width: "100%", boxSizing: "border-box", fontSize: 14,
    fontFamily: "'Nunito Sans', sans-serif", color: textColor,
    background: inputBg, border: `1.5px solid ${borderColor}`, borderRadius: 12,
    outline: "none", transition: "all 0.3s ease",
    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
    boxShadow: focused ? focusShadow : "none",
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        display: "block", marginBottom: 6, fontSize: 11, fontWeight: 700,
        letterSpacing: "0.07em", textTransform: "uppercase",
        color: error ? P.errorRed : focused ? (dark ? P.almondSilk : P.dustyGrape) : P.lilacAsh,
        fontFamily: "'Nunito Sans', sans-serif", transition: "color 0.3s",
      }}>{label}</label>
      {multiline ? (
        <textarea name={name} placeholder={placeholder} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} rows={3}
          style={{ ...base, padding: "12px 14px", resize: "vertical", minHeight: 80 }} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...base, padding: "11px 14px" }} />
      )}
      {error && (
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5, fontSize: 12, color: P.errorRed, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 500 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          {error}
        </div>
      )}
    </div>
  );
}

/* ─── Contact Form Content ─── */
function ContactFormInner({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = () => {
    if (!validate()) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1500);
  };
  const reset = () => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); setErrors({}); };

  const card = {
    heading: dark ? P.seashell : P.spaceIndigo,
    btnBg: dark ? `linear-gradient(135deg, ${P.almondSilk}, ${P.seashell})` : `linear-gradient(135deg, ${P.dustyGrape}, ${P.spaceIndigo})`,
    btnText: dark ? P.spaceIndigo : P.seashell,
    btnShadow: dark ? `${P.almondSilk}20` : `${P.dustyGrape}25`,
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "30px 0" }}>
        <div style={{
          width: 60, height: 60, borderRadius: "50%",
          background: `${P.successGreen}15`, border: `2px solid ${P.successGreen}77`,
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px",
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={P.successGreen} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <p style={{ color: card.heading, fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, margin: "0 0 6px" }}>Thank you!</p>
        <p style={{ color: P.lilacAsh, fontFamily: "'Nunito Sans', sans-serif", fontSize: 14, margin: 0, lineHeight: 1.5 }}>We'll be in touch within 24 hours.</p>
        <button onClick={reset} style={{
          marginTop: 20, padding: "8px 22px", background: "transparent",
          border: `1.5px solid ${P.lilacAsh}44`, borderRadius: 10, color: P.lilacAsh,
          fontFamily: "'Nunito Sans', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.3s",
        }}
          onMouseEnter={(e) => { e.target.style.borderColor = P.almondSilk; e.target.style.color = card.heading; }}
          onMouseLeave={(e) => { e.target.style.borderColor = `${P.lilacAsh}44`; e.target.style.color = P.lilacAsh; }}
        >New message</button>
      </div>
    );
  }

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 22, height: 2, borderRadius: 2, background: `linear-gradient(90deg, ${P.almondSilk}, ${P.lilacAsh}66)` }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: P.almondSilk, fontFamily: "'Nunito Sans', sans-serif" }}>
            Let's Connect
          </span>
        </div>
        <h2 style={{
          margin: "0 0 8px", fontSize: 24, fontWeight: 600,
          fontFamily: "'Cormorant Garamond', serif", color: card.heading, lineHeight: 1.15,
          transition: "color 0.5s",
        }}>Get In Touch</h2>
        <p style={{ margin: 0, fontSize: 14, color: P.lilacAsh, lineHeight: 1.5, fontFamily: "'Nunito Sans', sans-serif" }}>
          Drop a message — I'd love to hear from you.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <InputField label="Name" name="name" placeholder="Full name" value={form.name} onChange={handleChange} error={errors.name} dark={dark} />
        <InputField label="Email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} error={errors.email} dark={dark} />
      </div>
      <InputField label="Message" name="message" placeholder="What's on your mind?" value={form.message} onChange={handleChange} error={errors.message} multiline dark={dark} />

      <button onClick={handleSubmit} disabled={sending}
        onMouseEnter={(e) => { if (!sending) { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 6px 24px ${card.btnShadow}`; } }}
        onMouseLeave={(e) => { if (!sending) { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 3px 14px ${card.btnShadow}`; } }}
        style={{
          width: "100%", padding: "13px", fontSize: 14, fontWeight: 700,
          fontFamily: "'Nunito Sans', sans-serif", letterSpacing: "0.03em",
          color: sending ? P.lilacAsh : card.btnText,
          background: sending ? `linear-gradient(90deg, ${P.lilacAsh}22, ${P.almondSilk}33, ${P.lilacAsh}22)` : card.btnBg,
          backgroundSize: sending ? "200% 100%" : "100% 100%",
          animation: sending ? "shimmer 1.5s ease infinite" : "none",
          border: "none", borderRadius: 12, cursor: sending ? "not-allowed" : "pointer",
          transition: "all 0.35s ease", boxShadow: sending ? "none" : `0 3px 14px ${card.btnShadow}`,
        }}
      >{sending ? "Sending..." : "Send Message →"}</button>

      <p style={{ marginTop: 12, marginBottom: 0, textAlign: "center", fontSize: 11, color: P.lilacAsh, fontFamily: "'Nunito Sans', sans-serif", opacity: 0.45 }}>
        🔒 Secure & private
      </p>
    </>
  );
}

/* ─── Glass Card Shell ─── */
function GlassCard({ dark, children, mousePos, style = {} }) {
  const bg = dark
    ? `linear-gradient(145deg, ${P.dustyGrape}50, ${P.spaceIndigo}55 50%, ${P.dustyGrape}44)`
    : `linear-gradient(145deg, ${P.seashell}BB, rgba(255,255,255,0.65) 50%, ${P.seashell}99)`;
  const border = dark ? `${P.lilacAsh}22` : `rgba(255,255,255,0.7)`;
  const shadow = dark
    ? `0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 ${P.lilacAsh}12`
    : `0 8px 40px ${P.lilacAsh}22, inset 0 1px 0 rgba(255,255,255,0.9)`;
  const edgeHL = dark ? `${P.lilacAsh}28` : `rgba(255,255,255,0.95)`;

  return (
    <div style={{
      position: "relative", background: bg,
      backdropFilter: "blur(32px) saturate(1.3)", WebkitBackdropFilter: "blur(32px) saturate(1.3)",
      borderRadius: 24, border: `1px solid ${border}`, boxShadow: shadow,
      transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
      ...style,
    }}>
      {mousePos && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: 24,
          background: `radial-gradient(circle 300px at ${mousePos.x}% ${mousePos.y}%, ${P.almondSilk}${dark ? "0C" : "15"}, transparent)`,
          pointerEvents: "none", transition: "background 0.3s",
        }} />
      )}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: `linear-gradient(90deg, transparent, ${edgeHL}, transparent)`, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: 0, top: "12%", bottom: "12%", width: 3, borderRadius: "0 3px 3px 0",
        background: `linear-gradient(180deg, transparent, ${P.almondSilk}${dark ? "55" : "88"}, ${P.lilacAsh}44, transparent)`,
        pointerEvents: "none", boxShadow: dark ? `0 0 10px ${P.almondSilk}12` : "none",
      }} />
      {children}
    </div>
  );
}

/* ─── The Floating Widget ─── */
function ContactWidget({ footerRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const senseRef = useRef(null);
  const cardRef = useRef(null);
  const isDark = useBgLuminance(senseRef, true); // always sense, even when closed
  const merged = useNearFooter(footerRef);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  // Close card when merging into footer
  useEffect(() => {
    if (merged && isOpen) setIsOpen(false);
  }, [merged]);

  const visible = !merged;

  // Button colors adapt to background too
  const btnBg = isDark
    ? `linear-gradient(135deg, ${P.almondSilk}, ${P.lilacAsh})`
    : `linear-gradient(135deg, ${P.dustyGrape}, ${P.spaceIndigo})`;
  const btnIcon = isDark ? P.spaceIndigo : P.seashell;
  const btnShadow = isDark ? `${P.lilacAsh}55` : `${P.dustyGrape}44`;

  return (
    <>
      {/* Sensor — always active for bg detection */}
      <div ref={senseRef} style={{
        position: "fixed", bottom: 90, right: 24,
        width: 370, height: isOpen ? 460 : 54,
        pointerEvents: "none", zIndex: 999,
      }} />

      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1001,
          width: 54, height: 54, borderRadius: "50%",
          background: btnBg,
          border: "none", cursor: "pointer",
          boxShadow: `0 4px 20px ${btnShadow}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isOpen
            ? "rotate(45deg) scale(0.9)"
            : visible ? "rotate(0deg) scale(1)" : "rotate(0deg) scale(0)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={btnIcon} strokeWidth="2" strokeLinecap="round">
          {isOpen
            ? <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>
            : <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />}
        </svg>
      </button>

      {/* Glass card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={{
          position: "fixed", bottom: 88, right: 24, zIndex: 1000, width: 370,
          maxHeight: isOpen && visible ? 540 : 0,
          opacity: isOpen && visible ? 1 : 0,
          transform: isOpen && visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
          transformOrigin: "bottom right",
          transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "hidden",
          pointerEvents: isOpen && visible ? "auto" : "none",
        }}
      >
        <GlassCard dark={isDark} mousePos={mousePos}>
          <div style={{ padding: "26px 26px 22px" }}>
            <ContactFormInner dark={isDark} />
          </div>
        </GlassCard>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════
   DEMO PAGE — Dark + Light sections to demo
   both themes, matching suniliyer.ca flow
   ═══════════════════════════════════════════════ */
export default function App() {
  const footerRef = useRef(null);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Nunito Sans', sans-serif", background: "#0a0a0a" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        input::placeholder, textarea::placeholder { color: ${P.lilacAsh}77; font-weight: 400; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: ${P.dustyGrape}66; border-radius: 3px; }
      `}</style>

      {/* ── HERO (Dark) ── */}
      <section style={{
        minHeight: "100vh", background: "linear-gradient(180deg, #0a0a0a 0%, #0f0f14 100%)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "60px 40px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${P.dustyGrape}15, transparent 70%)`, top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <p style={{ fontSize: 14, color: P.lilacAsh, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16, opacity: 0.6 }}>Hello!</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 6vw, 72px)", color: P.seashell, fontWeight: 600, textAlign: "center", lineHeight: 1.1, maxWidth: 800 }}>
          Vibe, <span style={{ color: P.almondSilk }}>GeneralAI</span><br />+ a little me
        </h1>
        <p style={{ marginTop: 20, fontSize: 16, color: P.lilacAsh, textAlign: "center", maxWidth: 500, lineHeight: 1.6 }}>
          Results-driven leader specializing in AI adoption, customer success, and enterprise digital transformation
        </p>
        <div style={{ marginTop: 50, color: P.lilacAsh, fontSize: 13, opacity: 0.4, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span>Scroll to see the widget adapt</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
        </div>
      </section>

      {/* ── LEARNING PATHS (Dark) ── */}
      <section style={{
        minHeight: "80vh", background: "linear-gradient(180deg, #0f0f14 0%, #0a0a0a 100%)",
        padding: "80px 40px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: P.almondSilk, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Learning Paths</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, color: P.seashell, fontWeight: 600, marginBottom: 40 }}>Explore curated journeys</h2>
          <div style={{ display: "flex", gap: 20, overflowX: "auto", paddingBottom: 20 }}>
            {["History", "Terminology", "Risk", "Responsibility", "Future"].map((t) => (
              <div key={t} style={{
                minWidth: 220, height: 280, borderRadius: 16,
                background: `linear-gradient(145deg, ${P.dustyGrape}33, ${P.spaceIndigo}66)`,
                border: `1px solid ${P.lilacAsh}15`, padding: 24,
                display: "flex", flexDirection: "column", justifyContent: "flex-end", flexShrink: 0,
              }}>
                <div style={{ width: 32, height: 3, borderRadius: 2, background: P.almondSilk, marginBottom: 12, opacity: 0.6 }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: P.seashell, fontWeight: 600, margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 13, color: P.lilacAsh, marginTop: 8, lineHeight: 1.5 }}>Explore the {t.toLowerCase()} of AI governance</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHT SECTION — Widget flips to light glass here ── */}
      <section style={{
        minHeight: "80vh", background: `linear-gradient(180deg, ${P.seashell} 0%, #EDE4DF 100%)`,
        padding: "80px 40px", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ maxWidth: 650, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 20, padding: "6px 16px", borderRadius: 20,
            background: `${P.almondSilk}33`, border: `1px solid ${P.almondSilk}55`,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: P.almondSilk }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: P.dustyGrape }}>Light Theme Demo</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, color: P.spaceIndigo, fontWeight: 600, marginBottom: 16 }}>
            Open the widget here
          </h2>
          <p style={{ fontSize: 16, color: P.dustyGrape, lineHeight: 1.7 }}>
            The glass card automatically detects this light background and switches to Seashell-tinted glass with Space Indigo text. The floating button adapts too — going dark on light backgrounds.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO (Back to dark) ── */}
      <section style={{
        minHeight: "80vh", background: "#0a0a0a",
        padding: "80px 40px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: P.almondSilk, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Portfolio</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, color: P.seashell, fontWeight: 600, marginBottom: 40 }}>Real-world projects</h2>
          <div style={{ display: "flex", gap: 20, overflowX: "auto", paddingBottom: 20 }}>
            {[
              { t: "Seshan Intelligence", s: "AI-powered business intelligence" },
              { t: "Financial Dashboard", s: "Comprehensive analytics platform" },
              { t: "cAlvIn and Hobbes", s: "AI parody comic strips" },
              { t: "Mortgage Calculator", s: "Intelligent planning tool" },
            ].map(({ t, s }) => (
              <div key={t} style={{
                minWidth: 260, height: 200, borderRadius: 16,
                background: `linear-gradient(145deg, #161622, ${P.spaceIndigo}99)`,
                border: `1px solid ${P.lilacAsh}12`, padding: 24,
                display: "flex", flexDirection: "column", justifyContent: "flex-end", flexShrink: 0,
              }}>
                <h3 style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 16, color: P.seashell, fontWeight: 600, margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 13, color: P.lilacAsh, marginTop: 6, lineHeight: 1.4 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ME (Dark) ── */}
      <section style={{
        minHeight: "80vh", background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d15 100%)",
        padding: "80px 40px", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ maxWidth: 650, textAlign: "center" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px",
            background: `linear-gradient(135deg, ${P.dustyGrape}, ${P.spaceIndigo})`,
            border: `2px solid ${P.almondSilk}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, fontWeight: 700, fontFamily: "'Cormorant Garamond', serif", color: P.almondSilk,
          }}>SVI</div>
          <p style={{ fontSize: 12, color: P.almondSilk, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>About Me</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, color: P.seashell, fontWeight: 600, marginBottom: 20 }}>A little about me</h2>
          <p style={{ fontSize: 15, color: P.lilacAsh, lineHeight: 1.7, marginBottom: 32 }}>
            Results-driven leader specializing in AI adoption, customer success, and enterprise digital transformation. Currently at Shift Technology, fostering enterprise relationships with 100% client retention.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
            {[["100%", "Client Retention"], ["$30M+", "Engagements"], ["10+", "Years Experience"]].map(([n, l]) => (
              <div key={l}>
                <p style={{ fontSize: 28, fontWeight: 700, color: P.almondSilk, fontFamily: "'Cormorant Garamond', serif", margin: "0 0 4px" }}>{n}</p>
                <p style={{ fontSize: 12, color: P.lilacAsh, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH — Widget disappears here, just social links ── */}
      <section
        ref={footerRef}
        style={{
          minHeight: "80vh",
          background: `linear-gradient(180deg, #0d0d15 0%, ${P.spaceIndigo} 100%)`,
          padding: "80px 40px 60px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: 600, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: P.almondSilk, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Contact & Connect</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, color: P.seashell, fontWeight: 600, marginBottom: 16, lineHeight: 1.1 }}>Let's Connect</h2>
          <p style={{ fontSize: 16, color: P.lilacAsh, lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            I'm always interested in hearing about new projects, collaborations, or just connecting with fellow AI enthusiasts and technology leaders.
          </p>

          {/* Social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 380, margin: "0 auto" }}>
            {[
              { icon: "✉", label: "Email", val: "Connect via Email", accent: true },
              { icon: "in", label: "LinkedIn", val: "linkedin.com/in/sunilviyer" },
              { icon: "</>", label: "GitHub", val: "github.com/sunilviyer" },
            ].map(({ icon, label, val, accent }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "14px 18px", borderRadius: 14,
                background: accent ? `${P.almondSilk}15` : `${P.dustyGrape}22`,
                border: `1px solid ${accent ? P.almondSilk + "33" : P.lilacAsh + "15"}`,
                cursor: "pointer", transition: "all 0.3s",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: accent ? `${P.almondSilk}22` : `${P.almondSilk}12`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 15, fontWeight: 700, color: P.almondSilk, fontFamily: "'Nunito Sans', sans-serif",
                }}>{icon}</div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: 12, color: P.lilacAsh, margin: 0, fontWeight: 600 }}>{label}</p>
                  <p style={{ fontSize: 15, color: P.seashell, margin: 0 }}>{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer credits */}
        <div style={{ marginTop: 60, textAlign: "center", width: "100%", borderTop: `1px solid ${P.lilacAsh}15`, paddingTop: 30 }}>
          <p style={{ fontSize: 12, color: P.lilacAsh, opacity: 0.4 }}>© 2026 Sunil Iyer. All rights reserved.</p>
        </div>
      </section>

      {/* ── THE FLOATING WIDGET — disappears at footer ── */}
      <ContactWidget footerRef={footerRef} />
    </div>
  );
}
