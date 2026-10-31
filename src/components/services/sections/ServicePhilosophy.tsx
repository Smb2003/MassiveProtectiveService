'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServicePhilosophyData } from '../types';

interface Props {
  data: ServicePhilosophyData;
}

export const ServicePhilosophy: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isCentered = data.variant === 'centered-gold-line';
  const isTwoColumn = data.variant === 'two-column-prose';

  return (
    <section
      aria-label="Service Philosophy"
      className="relative w-full bg-[#0B1324] py-20 sm:py-28 lg:py-32 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isTwoColumn ? (
          /* Two-Column Prose Layout (Executive Security Screen 2 Reference) */
          <div className="space-y-10 sm:space-y-12">
            <div className="space-y-4 max-w-5xl">
              {data.eyebrow && (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                    {data.eyebrow}
                  </span>
                </motion.div>
              )}

              <motion.h2
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight"
              >
                {data.headline}
              </motion.h2>
            </div>

            {/* 2 Columns of Narrative Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="space-y-5 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed"
              >
                {data.column1Paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="space-y-5 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed"
              >
                {data.column2Paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </motion.div>
            </div>

            {/* Bottom Subtle Gold Divider */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.8 }}
              className="w-full h-px bg-[#C5A880]/30 pt-0 mt-12 sm:mt-16 origin-left"
            />
          </div>
        ) : isCentered ? (
          /* Centered layout matching Estate Security Screenshot 2 */
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
            {/* Centered gold accent bar */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="w-16 h-[2px] bg-[#C5A880] mx-auto"
            />

            {data.eyebrow && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                  {data.eyebrow}
                </span>
              </motion.div>
            )}

            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-normal text-white leading-[1.15] tracking-tight"
            >
              {data.headline}
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-3xl mx-auto"
            >
              {data.paragraph}
            </motion.p>
          </div>
        ) : (
          /* Left-aligned layout with left vertical gold bar (Corporate Security style) */
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {data.eyebrow && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                  {data.eyebrow}
                </span>
              </motion.div>
            )}

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-l-2 sm:border-l-[3px] border-[#C5A880] pl-6 sm:pl-10 space-y-5 sm:space-y-6"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.12] tracking-tight">
                {data.headline}
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-sans font-light leading-relaxed max-w-3xl">
                {data.paragraph}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
