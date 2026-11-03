'use client';

import { useState, useRef, useCallback } from 'react';
import { CSRF_COOKIE_NAME, CSRF_HEADER_NAME } from '@/utils/csrf';

function generateUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

interface UseConsultationSubmitOptions {
  formSource: string;
  onSuccess?: () => void;
  timeoutMs?: number;
}

export function useConsultationSubmit(options: UseConsultationSubmitOptions) {
  const { formSource, onSuccess, timeoutMs = 8000 } = options;
  const [idempotencyKey, setIdempotencyKey] = useState<string>(() => generateUUID());
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isTimedOut, setIsTimedOut] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const isLockedRef = useRef<boolean>(false);

  const submitForm = useCallback(
    async (payload: Record<string, unknown>): Promise<boolean> => {
      // 1. Immediate lock against fast double clicks
      if (isLockedRef.current || isSubmitting) {
        return false;
      }
      isLockedRef.current = true;
      setIsSubmitting(true);
      setErrorMessage(null);
      setFieldErrors({});
      setIsTimedOut(false);

      // 2. Client-side validation on core intake fields
      const errors: Record<string, string> = {};
      const name = String(payload.fullName || payload.name || payload.clientName || '').trim();
      const email = String(payload.email || payload.emailAddress || '').trim();
      const phone = String(payload.phone || payload.phoneNumber || '').trim();

      if (!name || name.length < 2) {
        errors.name = 'Full name is required (min 2 characters)';
        errors.fullName = 'Full name is required (min 2 characters)';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        errors.email = 'Please provide a valid email address';
        errors.emailAddress = 'Please provide a valid email address';
      }
      const digits = phone.replace(/\D/g, '');
      if (!phone || digits.length < 7) {
        errors.phone = 'Please provide a valid contact phone number';
        errors.phoneNumber = 'Please provide a valid contact phone number';
      }

      if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        setIsSubmitting(false);
        isLockedRef.current = false;
        return false;
      }

      // 3. AbortController with 8-second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        setIsTimedOut(true);
        setErrorMessage(
          'Encrypted line timed out. Call Priority Dispatch directly at (954) 234-7231.'
        );
      }, timeoutMs);

      try {
        let currentToken = getCookie(CSRF_COOKIE_NAME)?.split(':')[0];
        if (!currentToken) {
          const csrfRes = await fetch('/api/csrf', { method: 'GET', signal: controller.signal });
          if (csrfRes.ok) {
            const csrfData = (await csrfRes.json()) as { csrfToken?: string };
            currentToken = csrfData.csrfToken;
          }
        }

        const res = await fetch('/api/inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotencyKey,
            [CSRF_HEADER_NAME]: currentToken || 'mps-tactical-token',
          },
          body: JSON.stringify({
            formSource,
            ...payload,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          const errData = (await res.json().catch(() => ({}))) as { error?: string };
          throw new Error(errData.error || `Server returned code ${res.status}`);
        }

        setIsSuccess(true);
        setIdempotencyKey(generateUUID());
        onSuccess?.();
        return true;
      } catch (err: unknown) {
        clearTimeout(timeoutId);
        const errorObj = err as { name?: string; message?: string };
        if (errorObj?.name === 'AbortError') {
          setIsTimedOut(true);
          setErrorMessage(
            'Encrypted line timed out. Call Priority Dispatch directly at (954) 234-7231.'
          );
        } else {
          setErrorMessage(
            errorObj?.message ||
              'Transmission failed. Contact Priority Dispatch at (954) 234-7231.'
          );
        }
        return false;
      } finally {
        clearTimeout(timeoutId);
        setIsSubmitting(false);
        isLockedRef.current = false;
      }
    },
    [formSource, idempotencyKey, isSubmitting, onSuccess, timeoutMs]
  );

  const reset = useCallback(() => {
    setIsSuccess(false);
    setIsTimedOut(false);
    setErrorMessage(null);
    setFieldErrors({});
    isLockedRef.current = false;
    setIdempotencyKey(generateUUID());
  }, []);

  return {
    isSubmitting,
    isSuccess,
    isTimedOut,
    errorMessage,
    fieldErrors,
    submitForm,
    reset,
  };
}
