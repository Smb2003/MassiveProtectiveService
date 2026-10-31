'use client';

import { useState, useRef, useCallback } from 'react';

interface UseDebouncedSubmitOptions<TData, TResult> {
  onSubmit: (data: TData, signal: AbortSignal) => Promise<TResult>;
  timeoutMs?: number; // defaults to 9000ms (within 8-10s specification)
  onSuccess?: (result: TResult) => void;
  onError?: (error: Error) => void;
  onTimeout?: () => void;
}

export function useDebouncedSubmit<TData, TResult>({
  onSubmit,
  timeoutMs = 9000,
  onSuccess,
  onError,
  onTimeout,
}: UseDebouncedSubmitOptions<TData, TResult>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Idempotency lock ref to strictly drop parallel duplicate clicks
  const isLockedRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const submit = useCallback(
    async (data: TData): Promise<TResult | undefined> => {
      // Drop duplicate clicks immediately
      if (isLockedRef.current) {
        return undefined;
      }

      isLockedRef.current = true;
      setIsSubmitting(true);
      setIsTimedOut(false);
      setError(null);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      // 8-10 second timeout safety abort
      const timeoutId = setTimeout(() => {
        controller.abort();
        setIsTimedOut(true);
        setError('Transmission timed out. Immediate phone dispatch available.');
        onTimeout?.();
      }, timeoutMs);

      try {
        const result = await onSubmit(data, controller.signal);
        clearTimeout(timeoutId);
        onSuccess?.(result);
        return result;
      } catch (err: unknown) {
        clearTimeout(timeoutId);
        const errorObj = err instanceof Error ? err : new Error(String(err));
        
        if (errorObj.name === 'AbortError') {
          setIsTimedOut(true);
          setError('Transmission channel aborted after timeout. Priority dispatch engaged.');
        } else {
          setError(errorObj.message || 'Submission failed');
          onError?.(errorObj);
        }
        return undefined;
      } finally {
        clearTimeout(timeoutId);
        setIsSubmitting(false);
        isLockedRef.current = false;
        abortControllerRef.current = null;
      }
    },
    [onSubmit, timeoutMs, onSuccess, onError, onTimeout]
  );

  return {
    submit,
    isSubmitting,
    isTimedOut,
    error,
    resetState: () => {
      setIsSubmitting(false);
      setIsTimedOut(false);
      setError(null);
      isLockedRef.current = false;
    },
  };
}

export default useDebouncedSubmit;
