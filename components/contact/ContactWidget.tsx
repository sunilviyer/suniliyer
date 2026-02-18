'use client';

import { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';

/**
 * CONTRAST-ADAPTIVE COLOR PALETTE
 * Frosted glass with proper contrast for light/dark backgrounds
 */
const P = {
  // Original glass palette (warm/cool tones for contrast)
  spaceIndigo: '#22223B',
  dustyGrape: '#4A4E69',
  lilacAsh: '#9A8C98',
  almondSilk: '#C9ADA7',
  seashell: '#F2E9E4',

  // Site accent
  accentOlive: '#333d29',

  // Status colors
  errorRed: '#D94F3B',
  successGreen: '#4EAF7A',
};

/**
 * Background luminance detector (multi-sample)
 * Detects if widget is over dark or light background
 */
function useBgLuminance(ref: React.RefObject<HTMLElement | null>, active: boolean) {
  const [isDark, setIsDark] = useState(true);

  const measure = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const samples = [
      [rect.left + rect.width * 0.3, rect.top + rect.height * 0.3],
      [rect.left + rect.width * 0.5, rect.top + rect.height * 0.5],
      [rect.left + rect.width * 0.7, rect.top + rect.height * 0.7],
    ];

    let totalLum = 0;
    let valid = 0;

    for (const [sx, sy] of samples) {
      const el = document.elementFromPoint(sx, sy);
      if (!el) continue;

      let bg = '';
      let node = el as HTMLElement | null;

      while (node && node !== document.documentElement) {
        const s = getComputedStyle(node);
        if (
          s.backgroundColor &&
          s.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
          s.backgroundColor !== 'transparent'
        ) {
          bg = s.backgroundColor;
          break;
        }
        node = node.parentElement;
      }

      if (!bg) bg = 'rgb(10,10,10)';

      const m = bg.match(/\d+/g);
      if (m) {
        const [r, g, b] = m.map(Number);
        totalLum += (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        valid++;
      }
    }

    if (valid > 0) {
      setIsDark(totalLum / valid < 0.45);
    }
  }, [ref]);

  useEffect(() => {
    if (!active) return;

    const t = setTimeout(measure, 100);
    const onScroll = () => requestAnimationFrame(measure);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);

    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, [active, measure]);

  return isDark;
}

/**
 * Detect when footer contact section is visible
 * Widget disappears/merges when footer comes into view
 */
function useNearFooter(footerRef: React.RefObject<HTMLElement | null>) {
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setMerged(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      { threshold: [0, 0.25, 0.5] }
    );

    obs.observe(footerRef.current);
    return () => obs.disconnect();
  }, [footerRef]);

  return merged;
}

/**
 * Input Field Component
 */
interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  error?: string;
  multiline?: boolean;
  dark: boolean;
  required?: boolean;
}

function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  multiline,
  dark,
  required,
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);

  const inputBg = dark
    ? focused
      ? `${P.spaceIndigo}EE`
      : `${P.spaceIndigo}BB`
    : focused
    ? 'rgba(255,255,255,0.85)'
    : 'rgba(255,255,255,0.5)';

  const borderColor = error
    ? `${P.errorRed}99`
    : focused
    ? `${P.almondSilk}${dark ? 'AA' : 'CC'}`
    : dark
    ? `${P.lilacAsh}33`
    : `${P.lilacAsh}44`;

  const textColor = dark ? P.seashell : P.spaceIndigo;

  const focusShadow = dark
    ? `0 0 0 3px ${P.almondSilk}15, 0 2px 10px rgba(0,0,0,0.3)`
    : `0 0 0 3px ${P.almondSilk}25, 0 2px 8px ${P.lilacAsh}12`;

  const baseStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    fontSize: 14,
    fontFamily: 'var(--font-body), sans-serif',
    color: textColor,
    background: inputBg,
    border: `1.5px solid ${borderColor}`,
    borderRadius: 12,
    outline: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: focused ? focusShadow : 'none',
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    setFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: 'block',
          marginBottom: 6,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: error
            ? P.errorRed
            : focused
            ? dark
              ? P.almondSilk
              : P.dustyGrape
            : P.lilacAsh,
          fontFamily: 'var(--font-body), sans-serif',
          transition: 'color 0.3s',
        }}
      >
        {label} {required && '*'}
      </label>

      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={3}
          required={required}
          style={{
            ...baseStyle,
            padding: '12px 14px',
            resize: 'vertical',
            minHeight: 80,
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          style={{
            ...baseStyle,
            padding: '11px 14px',
          }}
        />
      )}

      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            marginTop: 5,
            fontSize: 12,
            color: P.errorRed,
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 500,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}

/**
 * Contact Form Content
 */
interface ContactFormInnerProps {
  dark: boolean;
  onClose?: () => void;
}

function ContactFormInner({ dark }: ContactFormInnerProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honeypot: '', // Hidden field for bots
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState('');
  const [loadTime] = useState(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setServerError('');
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      case 'subject':
        return value.trim().length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.trim().length < 20 ? 'Message must be at least 20 characters' : '';
      default:
        return '';
    }
  };

  const handleBlur = (name: string) => {
    const error = validateField(name, form[name as keyof typeof form]);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    Object.keys(form).forEach((key) => {
      if (key !== '_honeypot') {
        const error = validateField(key, form[key as keyof typeof form]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSending(true);
    setServerError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _timestamp: loadTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again, or email me directly at sunil@suniliyer.ca'
      );
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', subject: '', message: '', _honeypot: '' });
    setErrors({});
    setServerError('');
  };

  const card = {
    heading: dark ? P.dustyGrape : P.dustyGrape,
    btnBg: dark
      ? `linear-gradient(135deg, ${P.almondSilk}, ${P.seashell})`
      : `linear-gradient(135deg, ${P.dustyGrape}, ${P.spaceIndigo})`,
    btnText: dark ? P.spaceIndigo : P.seashell,
    btnShadow: dark ? `${P.almondSilk}20` : `${P.dustyGrape}25`,
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '30px 0' }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: `${P.successGreen}15`,
            border: `2px solid ${P.successGreen}77`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px',
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke={P.successGreen}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p
          style={{
            color: card.heading,
            fontFamily: 'var(--font-funnel), serif',
            fontSize: 22,
            fontWeight: 600,
            margin: '0 0 6px',
          }}
        >
          Thanks for reaching out!
        </p>
        <p
          style={{
            color: P.lilacAsh,
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 14,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          I&apos;ll get back to you soon.
        </p>
        <button
          onClick={reset}
          style={{
            marginTop: 20,
            padding: '8px 22px',
            background: 'transparent',
            border: `1.5px solid ${P.lilacAsh}44`,
            borderRadius: 10,
            color: P.lilacAsh,
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = P.almondSilk;
            e.currentTarget.style.color = card.heading;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `${P.lilacAsh}44`;
            e.currentTarget.style.color = P.lilacAsh;
          }}
        >
          New message
        </button>
      </div>
    );
  }

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div
            style={{
              width: 22,
              height: 2,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${P.almondSilk}, ${P.lilacAsh}66)`,
            }}
          />
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: P.almondSilk,
              fontFamily: 'var(--font-body), sans-serif',
            }}
          >
            Let&apos;s Connect
          </span>
        </div>
        <h2
          style={{
            margin: '0 0 8px',
            fontSize: 24,
            fontWeight: 600,
            fontFamily: 'var(--font-funnel), serif',
            color: card.heading,
            lineHeight: 1.15,
            transition: 'color 0.5s',
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            color: P.lilacAsh,
            lineHeight: 1.5,
            fontFamily: 'var(--font-body), sans-serif',
          }}
        >
          Drop a message — I&apos;d love to hear from you.
        </p>
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="_honeypot"
        value={form._honeypot}
        onChange={handleChange}
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
        }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <InputField
          label="Name"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          error={errors.name}
          dark={dark}
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="you@email.com"
          value={form.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          dark={dark}
          required
        />
      </div>

      <InputField
        label="Subject"
        name="subject"
        placeholder="What's this about?"
        value={form.subject}
        onChange={handleChange}
        onBlur={() => handleBlur('subject')}
        error={errors.subject}
        dark={dark}
        required
      />

      <InputField
        label="Message"
        name="message"
        placeholder="What's on your mind?"
        value={form.message}
        onChange={handleChange}
        onBlur={() => handleBlur('message')}
        error={errors.message}
        multiline
        dark={dark}
        required
      />

      {serverError && (
        <div
          style={{
            padding: '12px 16px',
            marginBottom: 16,
            background: `${P.errorRed}15`,
            border: `1px solid ${P.errorRed}55`,
            borderRadius: 12,
            fontSize: 13,
            color: dark ? P.seashell : P.spaceIndigo,
            lineHeight: 1.5,
          }}
        >
          {serverError}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={sending}
        onMouseEnter={(e) => {
          if (!sending) {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = `0 6px 24px ${card.btnShadow}`;
          }
        }}
        onMouseLeave={(e) => {
          if (!sending) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = `0 3px 14px ${card.btnShadow}`;
          }
        }}
        style={{
          width: '100%',
          padding: '13px',
          fontSize: 14,
          fontWeight: 700,
          fontFamily: 'var(--font-body), sans-serif',
          letterSpacing: '0.03em',
          color: sending ? P.lilacAsh : card.btnText,
          backgroundImage: sending
            ? `linear-gradient(90deg, ${P.lilacAsh}22, ${P.almondSilk}33, ${P.lilacAsh}22)`
            : card.btnBg,
          backgroundSize: sending ? '200% 100%' : '100% 100%',
          backgroundPosition: sending ? '0 0' : 'center',
          animation: sending ? 'shimmer 1.5s ease infinite' : 'none',
          border: 'none',
          borderRadius: 12,
          cursor: sending ? 'not-allowed' : 'pointer',
          transition: 'all 0.35s ease',
          boxShadow: sending ? 'none' : `0 3px 14px ${card.btnShadow}`,
        }}
      >
        {sending ? 'Sending...' : 'Send Message →'}
      </button>

      <p
        style={{
          marginTop: 12,
          marginBottom: 0,
          textAlign: 'center',
          fontSize: 11,
          color: P.lilacAsh,
          fontFamily: 'var(--font-body), sans-serif',
          opacity: 0.45,
        }}
      >
        🔒 Secure & private
      </p>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
}

/**
 * Glass Card Shell with frosted glass effect
 */
interface GlassCardProps {
  dark: boolean;
  children: React.ReactNode;
  mousePos?: { x: number; y: number };
  style?: React.CSSProperties;
}

function GlassCard({ dark, children, mousePos, style = {} }: GlassCardProps) {
  // Frosted glass with contrast-adaptive tinting
  const bg = dark
    ? `linear-gradient(145deg, rgba(249,243,237,0.08), rgba(201,173,167,0.12) 50%, rgba(249,243,237,0.06))`
    : `linear-gradient(145deg, rgba(34,34,59,0.12), rgba(74,78,105,0.10) 50%, rgba(34,34,59,0.08))`;

  const border = dark ? `${P.lilacAsh}22` : 'rgba(255,255,255,0.7)';

  const shadow = dark
    ? `0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 ${P.lilacAsh}12`
    : `0 8px 40px ${P.lilacAsh}22, inset 0 1px 0 rgba(255,255,255,0.9)`;

  const edgeHL = dark ? `${P.lilacAsh}28` : 'rgba(255,255,255,0.95)';

  return (
    <div
      style={{
        position: 'relative',
        background: bg,
        backdropFilter: 'blur(32px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(32px) saturate(1.3)',
        borderRadius: 24,
        border: `1px solid ${border}`,
        boxShadow: shadow,
        transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
        ...style,
      }}
    >
      {/* Mouse position radial gradient overlay */}
      {mousePos && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 24,
            background: `radial-gradient(circle 300px at ${mousePos.x}% ${mousePos.y}%, ${P.almondSilk}${
              dark ? '0C' : '15'
            }, transparent)`,
            pointerEvents: 'none',
            transition: 'background 0.3s',
          }}
        />
      )}

      {/* Top edge highlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: 1,
          background: `linear-gradient(90deg, transparent, ${edgeHL}, transparent)`,
          pointerEvents: 'none',
        }}
      />

      {/* Left edge accent */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '12%',
          bottom: '12%',
          width: 3,
          borderRadius: '0 3px 3px 0',
          background: `linear-gradient(180deg, transparent, ${P.almondSilk}${dark ? '55' : '88'}, ${
            P.lilacAsh
          }44, transparent)`,
          pointerEvents: 'none',
          boxShadow: dark ? `0 0 10px ${P.almondSilk}12` : 'none',
        }}
      />

      {children}
    </div>
  );
}

/**
 * Main Contact Widget Component
 * Floats on left, disappears when footer is visible
 */
interface ContactWidgetProps {
  footerRef?: React.RefObject<HTMLElement | null>;
  hideButton?: boolean;
}

export interface ContactWidgetHandle {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const ContactWidget = forwardRef<ContactWidgetHandle, ContactWidgetProps>(
  function ContactWidget({ footerRef, hideButton = false }, ref) {
    const [isOpen, setIsOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const senseRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const nullRef = useRef<HTMLElement | null>(null);

    const isDark = useBgLuminance(senseRef, true);
    const merged = useNearFooter(footerRef ?? nullRef);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const r = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  // Track if user manually opened the widget (ignore merged state in this case)
  const [forceVisible, setForceVisible] = useState(false);

  // Expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
      setForceVisible(true); // Force visibility even when in footer
    },
    close: () => {
      setIsOpen(false);
      setForceVisible(false);
    },
    toggle: () => {
      setIsOpen(prev => {
        const newState = !prev;
        setForceVisible(newState); // Force visibility when manually toggled
        return newState;
      });
    },
  }), []);

  // Close card when merging into footer (but only if not forced)
  useEffect(() => {
    if (merged && isOpen && !forceVisible) {
      setIsOpen(false);
    }
  }, [merged, isOpen, forceVisible]);

  // Listen for global open/close events (dispatched by any page)
  useEffect(() => {
    const onOpen = () => { setIsOpen(true); setForceVisible(true); };
    const onClose = () => { setIsOpen(false); setForceVisible(false); };
    window.addEventListener('open-contact-widget', onOpen);
    window.addEventListener('close-contact-widget', onClose);
    return () => {
      window.removeEventListener('open-contact-widget', onOpen);
      window.removeEventListener('close-contact-widget', onClose);
    };
  }, []);

  const visible = !merged || forceVisible;

  // Button colors adapt to background
  const btnBg = isDark
    ? `linear-gradient(135deg, ${P.almondSilk}, ${P.lilacAsh})`
    : `linear-gradient(135deg, ${P.dustyGrape}, ${P.spaceIndigo})`;

  const btnIcon = isDark ? P.spaceIndigo : P.seashell;
  const btnShadow = isDark ? `${P.lilacAsh}55` : `${P.dustyGrape}44`;

  return (
    <>
      {/* Sensor — always active for bg detection */}
      <div
        ref={senseRef}
        style={{
          position: 'fixed',
          top: hideButton ? 90 : 90,
          right: hideButton ? 30 : 'auto',
          left: hideButton ? 'auto' : 24,
          width: 370,
          height: isOpen ? 520 : 54,
          pointerEvents: 'none',
          zIndex: 999,
        }}
      />

      {/* Trigger button — hidden when rail owns the trigger */}
      {!hideButton && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            bottom: 24,
            left: 24,
            zIndex: 1001,
            width: 54,
            height: 54,
            borderRadius: '50%',
            background: btnBg,
            border: 'none',
            cursor: 'pointer',
            boxShadow: `0 4px 20px ${btnShadow}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isOpen
              ? 'rotate(45deg) scale(0.9)'
              : visible
              ? 'rotate(0deg) scale(1)'
              : 'rotate(0deg) scale(0)',
            opacity: visible ? 1 : 0,
            pointerEvents: visible ? 'auto' : 'none',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={btnIcon}
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isOpen ? (
              <>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </>
            ) : (
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            )}
          </svg>
        </button>
      )}

      {/* Glass card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={{
          position: 'fixed',
          top: hideButton ? 88 : 'auto',
          bottom: hideButton ? 'auto' : 88,
          right: hideButton ? 30 : 'auto',
          left: hideButton ? 'auto' : 24,
          zIndex: 1000,
          width: 370,
          maxHeight: isOpen && visible ? 600 : 0,
          opacity: isOpen && visible ? 1 : 0,
          transform: isOpen && visible
            ? 'translateY(0) scale(1)'
            : hideButton
            ? 'translateY(-12px) scale(0.97)'
            : 'translateY(16px) scale(0.95)',
          transformOrigin: hideButton ? 'top right' : 'bottom left',
          transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden',
          pointerEvents: isOpen && visible ? 'auto' : 'none',
        }}
      >
        <GlassCard dark={isDark} mousePos={mousePos}>
          <div style={{ padding: '26px 26px 22px' }}>
            <ContactFormInner dark={isDark} />
          </div>
        </GlassCard>
      </div>
    </>
  );
  }
);

ContactWidget.displayName = 'ContactWidget';
