'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceClosingCTAData } from '../types';

interface Props {
  data?: ServiceClosingCTAData;
}

export const ServiceClosingCTA: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const headline = data?.headline || 'Discreet protection, planned around you.';
  const subtitle =
    data?.subtitle ||
    "Tell us what you're dealing with. We'll respond within 4 business hours — discreetly.";
  const primaryCta = data?.primaryCta || {
    label: 'REQUEST A CONFIDENTIAL CONSULTATION',
    href: '#consultation-form',
  };
  const secondaryCta = data?.secondaryCta || {
    label: 'CALL (954) 234-7231',
    href: 'tel:9542347231',
  };

  return (
    <section
      aria-label="Discreet Security Consultation"
      className="relative w-full bg-[#0E1728] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t-2 border-[#C5A880]"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* Headline */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.12] tracking-tight max-w-3xl mx-auto"
        >
          {headline}
        </motion.h2>

        {/* Narrative Subtitle */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] hover:scale-[1.02] cursor-pointer"
          >
            {primaryCta.label}
          </a>

          <a
            href={secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-sm border border-white/25 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] bg-[#111B2C]/70 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
          >
            {secondaryCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
