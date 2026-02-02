/**
 * Blocklist of disposable/temporary email domains
 * Level 2 Email Validation - Domain Blocklist
 */

export const disposableDomains = new Set([
  // Common test domains
  'test.com',
  'example.com',
  'fake.com',
  'xxx.com',

  // Temporary email services
  'temp-mail.org',
  'temp-mail.io',
  'tempmail.com',
  'tempmail.net',
  'tempmailaddress.com',
  'tempinbox.com',
  'throwaway.email',
  'throwawaymail.com',
  '10minutemail.com',
  '10minutemail.net',

  // Guerrilla mail services
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'guerrillamail.biz',
  'guerrillamailblock.com',

  // Mailinator and variants
  'mailinator.com',
  'mailinator.net',
  'mailinator2.com',
  'sogetthis.com',
  'mailinater.com',

  // YOPmail
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',

  // Other popular disposable services
  'getnada.com',
  'trashmail.com',
  'maildrop.cc',
  'sharklasers.com',
  'grr.la',
  'guerrillamail.de',
  'spam4.me',
  'trbvm.com',
  'mintemail.com',
  'fakeinbox.com',
  'mohmal.com',
  'mytrashmail.com',
  'mailnesia.com',
  'emailondeck.com',
  'getairmail.com',
  'dispostable.com',
  'armyspy.com',
  'cuvox.de',
  'dayrep.com',
  'einrot.com',
  'fleckens.hu',
  'gustr.com',
  'jourrapide.com',
  'rhyta.com',
  'superrito.com',
  'teleworm.us',
  'zippymail.info',
]);

/**
 * Check if email domain is in blocklist
 */
export function isDisposableEmail(email: string): boolean {
  try {
    const domain = email.toLowerCase().split('@')[1];
    return disposableDomains.has(domain);
  } catch {
    return false;
  }
}
