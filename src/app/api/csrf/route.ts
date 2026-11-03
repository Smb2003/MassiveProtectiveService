import { NextResponse } from 'next/server';
import { createCsrfToken, CSRF_COOKIE_NAME } from '@/utils/csrf';

export async function GET() {
  const { token, cookieValue } = createCsrfToken();

  const response = NextResponse.json({ csrfToken: token });

  response.cookies.set({
    name: CSRF_COOKIE_NAME,
    value: cookieValue,
    httpOnly: false, // Accessible by JavaScript for double-submit header
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 3600 * 24, // 24 hours
  });

  return response;
}
