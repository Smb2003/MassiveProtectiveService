'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Exact splash screen implementation based on reference: elitesecurity.pro
 * - Fullscreen dark luxury gradient backdrop
 * - Centered logo with the exact 1.3s pulse breathing animation (scale 0.96 -> 1.0, opacity 0.55 -> 1.0)
 * - Zero extra text, zero progress bars, zero clutter
 * - Fades out smoothly after ~2.2 seconds to reveal the UI
 */
export const SplashScreen: React.FC = () => {
  const [isHiding, setIsHiding] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Lock scroll during splash screen display
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Show for ~2.2 seconds like reference (elitesecurity.pro setTimeout 2500ms)
    const fadeTimer = setTimeout(() => {
      setIsHiding(true);
    }, 2000);

    // Completely unmount 450ms after fade animation begins
    const removeTimer = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = originalOverflow;
    }, 2650);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes espPulse {
          0%, 100% {
            opacity: 0.55;
            transform: scale(0.96);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .esp-pulse-anim {
          animation: espPulse 1.3s ease-in-out infinite;
        }
      `}</style>
      <div
        id="esp-preloader"
        aria-hidden="true"
        className={`fixed inset-0 z-[999999] flex items-center justify-center transition-all duration-[450ms] ease-out pointer-events-none ${
          isHiding ? 'opacity-0 invisible' : 'opacity-100 visible'
        }`}
        style={{
          background: 'linear-gradient(143deg, #0D1B3E 0%, #000000 44%)',
        }}
      >
        <div className="relative w-[160px] max-w-[45vw] aspect-square flex items-center justify-center esp-pulse-anim">
          <Image
            src="/images/new_logo.png"
            alt="Massive Protective Services"
            width={160}
            height={160}
            priority
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_4px_24px_rgba(37,99,235,0.25)]"
          />
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
