import { isDisposableEmail } from './disposable-domains';
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

/**
 * Email Validation - Level 1: Format Check
 * Basic format validation with comprehensive regex
 */
export function isValidEmailFormat(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  // Comprehensive email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Basic checks
  if (!emailRegex.test(email)) return false;
  if (email.includes('..')) return false; // No double dots
  if (email.includes(' ')) return false; // No spaces
  if (email.length > 254) return false; // RFC 5321 max length

  const [local, domain] = email.split('@');

  // Local part (before @) validation
  if (!local || local.length > 64) return false;
  if (local.startsWith('.') || local.endsWith('.')) return false;

  // Domain part validation
  if (!domain || domain.length > 253) return false;
  if (domain.startsWith('.') || domain.endsWith('.')) return false;
  if (domain.startsWith('-') || domain.endsWith('-')) return false;

  return true;
}

/**
 * Email Validation - Level 2: Domain Blocklist
 * Check against disposable/fake email domains
 */
export function validateEmailDomain(email: string): { valid: boolean; error?: string } {
  if (!isValidEmailFormat(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  if (isDisposableEmail(email)) {
    return { valid: false, error: 'Please use a valid, non-disposable email address' };
  }

  return { valid: true };
}

/**
 * Email Validation - Level 3: MX Record Check (Server-side only)
 * Verify domain has valid mail exchange records
 */
export async function checkEmailMxRecords(email: string): Promise<{ valid: boolean; error?: string }> {
  try {
    const domain = email.toLowerCase().split('@')[1];

    if (!domain) {
      return { valid: false, error: 'Invalid email domain' };
    }

    const records = await resolveMx(domain);

    if (!records || records.length === 0) {
      return { valid: false, error: 'Email domain has no mail servers configured' };
    }

    return { valid: true };
  } catch (error) {
    // DNS lookup failed - domain doesn't exist or has no MX records
    return { valid: false, error: 'Email domain does not exist or cannot receive mail' };
  }
}

/**
 * Complete email validation (client-side: format + blocklist)
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  // Level 1: Format
  if (!isValidEmailFormat(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  // Level 2: Blocklist
  if (isDisposableEmail(email)) {
    return { valid: false, error: 'Please use a valid, non-disposable email address' };
  }

  return { valid: true };
}

/**
 * Complete email validation (server-side: format + blocklist + MX)
 */
export async function validateEmailComplete(email: string): Promise<{ valid: boolean; error?: string }> {
  // Level 1 & 2: Format + Blocklist
  const basicValidation = validateEmail(email);
  if (!basicValidation.valid) {
    return basicValidation;
  }

  // Level 3: MX Records
  return await checkEmailMxRecords(email);
}
