/**
 * Rate Limiter - Spam Prevention Layer 2
 * Limits submissions to 3 per IP per 15-minute window
 */

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
}

// In-memory store (for serverless, consider Vercel KV or Redis for production)
const ipStore = new Map<string, RateLimitEntry>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Clean up old entries (older than window)
 */
function cleanupOldEntries() {
  const now = Date.now();
  for (const [ip, entry] of ipStore.entries()) {
    if (now - entry.firstAttempt > WINDOW_MS) {
      ipStore.delete(ip);
    }
  }
}

/**
 * Check if IP has exceeded rate limit
 */
export function checkRateLimit(ip: string): { allowed: boolean; error?: string } {
  cleanupOldEntries();

  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry) {
    // First request from this IP
    ipStore.set(ip, { count: 1, firstAttempt: now });
    return { allowed: true };
  }

  // Check if window has expired
  if (now - entry.firstAttempt > WINDOW_MS) {
    // Reset window
    ipStore.set(ip, { count: 1, firstAttempt: now });
    return { allowed: true };
  }

  // Within window - check count
  if (entry.count >= MAX_REQUESTS) {
    const timeLeft = Math.ceil((WINDOW_MS - (now - entry.firstAttempt)) / 1000 / 60);
    return {
      allowed: false,
      error: `Too many submissions. Please try again in ${timeLeft} minute${timeLeft !== 1 ? 's' : ''}.`,
    };
  }

  // Increment count
  entry.count++;
  ipStore.set(ip, entry);
  return { allowed: true };
}

/**
 * Get client IP from request headers
 */
export function getClientIp(request: Request): string {
  // Try various headers (Vercel, Cloudflare, etc.)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback
  return 'unknown';
}
