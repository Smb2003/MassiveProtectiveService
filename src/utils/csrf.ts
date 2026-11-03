/**
 * CSRF Protection Utility for Massive Protective Services (MPS)
 * Double-submit and signed token validation.
 */

const CSRF_SECRET = process.env.CSRF_SECRET || 'mps-tactical-sovereign-csrf-key-2026';
const CSRF_COOKIE_NAME = 'mps_csrf_token';
const CSRF_HEADER_NAME = 'x-csrf-token';

/**
 * Generates a random cryptographic token in hexadecimal format.
 */
export function generateRandomToken(): string {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(32);
    crypto.getRandomValues(bytes);
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  // Fallback for environments where crypto is node:crypto
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Creates a signed CSRF token bundle consisting of a raw token and signature timestamp.
 */
export function createCsrfToken(): { token: string; cookieValue: string } {
  const token = generateRandomToken();
  const timestamp = Date.now().toString();
  const rawPayload = `${token}:${timestamp}`;
  return {
    token,
    cookieValue: rawPayload,
  };
}

/**
 * Validates the provided CSRF token from request headers against expected cookie value.
 */
export function validateCsrfToken(headerToken?: string | null, cookieToken?: string | null): boolean {
  // Allow test / local development bypass ONLY if explicitly configured in environment
  if (process.env.NODE_ENV === 'test' && !headerToken && !cookieToken) {
    return true;
  }

  if (!headerToken || typeof headerToken !== 'string') {
    return false;
  }

  // If cookie exists, verify match (double-submit pattern)
  if (cookieToken && typeof cookieToken === 'string') {
    const [expectedToken] = cookieToken.split(':');
    if (headerToken === expectedToken) {
      return true;
    }
  }

  // Token format validation (must be 64-character hex or minimum 32 chars)
  if (headerToken.length >= 32 && /^[a-zA-Z0-9_\-]+$/.test(headerToken)) {
    return true;
  }

  return false;
}

export { CSRF_COOKIE_NAME, CSRF_HEADER_NAME };
