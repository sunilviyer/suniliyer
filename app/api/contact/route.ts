import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateEmailComplete } from '@/lib/contact/email-validation';
import { checkRateLimit, getClientIp } from '@/lib/contact/rate-limiter';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

/**
 * Verify Cloudflare Turnstile token
 */
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, _honeypot, _timestamp, turnstileToken } = body;

    // ─────────────────────────────────────────────
    // SPAM PREVENTION LAYER 1: Honeypot
    // ─────────────────────────────────────────────
    if (_honeypot && _honeypot.trim() !== '') {
      // Bot filled the honeypot - silently succeed
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ─────────────────────────────────────────────
    // SPAM PREVENTION LAYER 2: Rate Limiting
    // ─────────────────────────────────────────────
    const clientIp = getClientIp(request);
    const rateLimitCheck = checkRateLimit(clientIp);

    if (!rateLimitCheck.allowed) {
      return NextResponse.json({ error: rateLimitCheck.error }, { status: 429 });
    }

    // ─────────────────────────────────────────────
    // SPAM PREVENTION LAYER 3: Cloudflare Turnstile
    // ─────────────────────────────────────────────
    // TODO: Enable Turnstile after setup
    // if (!turnstileToken) {
    //   return NextResponse.json({ error: 'Security verification required' }, { status: 400 });
    // }

    // const turnstileValid = await verifyTurnstile(turnstileToken, clientIp);
    // if (!turnstileValid) {
    //   return NextResponse.json({ error: 'Security verification failed' }, { status: 400 });
    // }

    // ─────────────────────────────────────────────
    // SPAM PREVENTION LAYER 4: Time-Based Check
    // ─────────────────────────────────────────────
    if (_timestamp) {
      const timeElapsed = Date.now() - parseInt(_timestamp);
      if (timeElapsed < 3000) {
        // Submitted in less than 3 seconds - likely bot
        return NextResponse.json({ success: true }, { status: 200 });
      }
    }

    // ─────────────────────────────────────────────
    // VALIDATION: Required Fields
    // ─────────────────────────────────────────────
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (name.trim().length < 2) {
      return NextResponse.json({ error: 'Name must be at least 2 characters' }, { status: 400 });
    }

    if (subject.trim().length < 5) {
      return NextResponse.json({ error: 'Subject must be at least 5 characters' }, { status: 400 });
    }

    if (message.trim().length < 20) {
      return NextResponse.json({ error: 'Message must be at least 20 characters' }, { status: 400 });
    }

    // ─────────────────────────────────────────────
    // EMAIL VALIDATION: All 3 Levels
    // ─────────────────────────────────────────────
    const emailValidation = await validateEmailComplete(email);
    if (!emailValidation.valid) {
      return NextResponse.json({ error: emailValidation.error }, { status: 400 });
    }

    // ─────────────────────────────────────────────
    // SEND EMAIL VIA RESEND
    // ─────────────────────────────────────────────
    if (!resend) {
      console.error('Resend not initialized - missing API key');
      return NextResponse.json(
        { error: 'Email service not configured. Please try again later.' },
        { status: 500 }
      );
    }

    const emailContent = `
New contact form submission from suniliyer.ca

FROM: ${name}
EMAIL: ${email}
SUBJECT: ${subject}

MESSAGE:
${message}

---
Submitted: ${new Date().toISOString()}
IP: ${clientIp}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'contact@suniliyer.ca',
      to: process.env.CONTACT_EMAIL_TO || 'sunil@suniliyer.ca',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
