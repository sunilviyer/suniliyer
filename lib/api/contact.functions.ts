// Contact submit used by the Evolution homepage (components/evo/hero.tsx).
//
// The reference implementation shipped with the homepage package posted to
// Resend directly from a TanStack server function. This repo already has a
// hardened contact endpoint at app/api/contact/route.ts (Resend + honeypot +
// IP rate limiting + MX-level email validation + timing check), so this is a
// thin client wrapper over that route instead of a second, weaker send path.
// RESEND_API_KEY stays server-side in the route; nothing secret is imported
// here.

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResult = { ok: boolean; error?: string };

// Time this module was evaluated, i.e. roughly page load. The API route
// rejects submissions made under 3s after this as bot traffic.
const PAGE_LOADED = Date.now();

export async function sendContact({ data }: { data: ContactPayload }): Promise<ContactResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, _timestamp: PAGE_LOADED }),
    });
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    if (!res.ok) return { ok: false, error: body?.error };
    return { ok: true };
  } catch {
    return { ok: false };
  }
}
