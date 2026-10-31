/**
 * Security utilities and input sanitization for Massive Protective Services (MPS)
 */

export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Strip script injection tags
    .replace(/javascript:/gi, '')
    .trim();
}

export function formatE164Phone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`;
  }
  return phone;
}
