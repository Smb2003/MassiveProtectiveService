/**
 * Enterprise Input Sanitization & Security Cleansing
 * Massive Protective Services (MPS)
 * 
 * Strict sanitization against XSS, HTML injection, inline event handlers,
 * script execution schemes, and unauthorized control characters.
 */

/**
 * Strips dangerous HTML tags, inline scripts, event attributes, and javascript: protocols.
 */
export function sanitizeString(input: unknown): string {
  if (typeof input !== 'string') {
    return '';
  }

  let sanitized = input;

  // 1. Remove control characters and null bytes
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // 2. Strip <script>, <iframe>, <object>, <embed>, <applet>, <form>, <link>, <style> tags and their contents
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  sanitized = sanitized.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
  sanitized = sanitized.replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '');
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // 3. Strip all HTML tags
  sanitized = sanitized.replace(/<[^>]+>/g, '');

  // 4. Strip inline event handlers (e.g., onclick=, onerror=, onload=)
  sanitized = sanitized.replace(/\bon\w+\s*=\s*(['"]).*?\1/gi, '');
  sanitized = sanitized.replace(/\bon\w+\s*=\s*[^\s>]+/gi, '');

  // 5. Strip URI schemes: javascript:, vbscript:, data:, file:
  sanitized = sanitized.replace(/(javascript|vbscript|data|file):/gi, '');

  // 6. Escape remaining HTML entities for defense-in-depth
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');

  return sanitized.trim();
}

/**
 * Strips HTML tags and script injections but retains safe punctuation and characters
 * for normal text fields (e.g. client messages and names).
 */
export function sanitizePlainText(input: unknown): string {
  if (typeof input !== 'string') {
    return '';
  }

  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<[^>]+>/g, '') // remove HTML tags
    .replace(/\bon\w+\s*=\s*['"][^'"]*['"]/gi, '') // remove event handlers
    .replace(/(javascript|vbscript|data):/gi, '') // remove protocol schemes
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // strip control chars
    .trim();
}

/**
 * Recursively sanitizes all string properties within an object.
 */
export function sanitizeObject<T>(data: T): T {
  if (!data || typeof data !== 'object') {
    if (typeof data === 'string') {
      return sanitizePlainText(data) as unknown as T;
    }
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => sanitizeObject(item)) as unknown as T;
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      result[key] = sanitizePlainText(value);
    } else if (typeof value === 'object' && value !== null) {
      result[key] = sanitizeObject(value);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}
