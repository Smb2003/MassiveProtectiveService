'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceAudienceData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServiceAudienceData;
}

export const ServiceAudienceGrid: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label={data.headline}
      className="relative w-full bg-[#0B1322] py-20 sm:py-28 lg:py-32 text-white overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
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

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            {data.headline}
          </motion.h2>
        </div>

        {/* Split-List or 3 Pillars Grid */}
        {data.variant === 'split-list' ? (
          /* Split-List Variant (Executive Security Screen 4 Reference) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-2 items-start">
            {/* Left Column: Explanatory Copy */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed"
            >
              {data.paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>

            {/* Right Column: Principals List with Gold Left Accent */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 border-l-2 border-[#C5A880] pl-6 sm:pl-8 space-y-4"
            >
              {data.listTitle && (
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-5">
                  {data.listTitle}
                </span>
              )}
              <ul className="space-y-3.5">
                {data.listItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm sm:text-[15px] text-zinc-200 font-sans font-normal"
                  >
                    <span className="text-[#C5A880] text-xs select-none">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ) : (
          /* 3 Pillars Grid */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
          >
            {data.pillars?.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col items-start space-y-4 pt-2 border-l border-white/15 pl-6 sm:pl-8"
              >
                {/* Gold Icon */}
                <div className="w-12 h-12 flex items-center justify-start text-[#C5A880] group-hover:text-[#D4AF37] transition-colors">
                  <ServiceIcon name={pillar.icon} className="w-8 h-8 stroke-[1.6]" />
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
