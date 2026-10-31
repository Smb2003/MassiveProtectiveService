'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceWhyMassiveData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data?: ServiceWhyMassiveData;
}

const DEFAULT_PILLARS = [
  {
    icon: 'check-circle',
    title: 'Florida Licensed Agency',
    description:
      'FL Agency License B1400200. Class D and Class G certified officers. FDACS Division of Licensing — Chapter 493 Florida Statutes compliant.',
  },
  {
    icon: 'lock',
    title: 'Discretion as Standard',
    description:
      'Our officers operate at the level of confidentiality your clients, board, and employees expect. No visible escalation. No drama.',
  },
  {
    icon: 'map-pin',
    title: 'South Florida expertise',
    description:
      'Palm Beach County, Broward, Miami-Dade. We know the terrain, the venues, and the specific dynamics of doing business in South Florida.',
  },
];

export const ServiceWhyMassive: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const theme = data?.theme || 'dark';
  const isDark = theme === 'dark';
  const eyebrow = data?.eyebrow || 'WHY MASSIVE PROTECTIVE';
  const headline = data?.headline || 'The right presence. The right credentials.';
  const pillars = data?.pillars || DEFAULT_PILLARS;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Why Massive Protective Services"
      className={`relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden border-t ${
        isDark
          ? 'bg-[#0B1324] text-[#F5F5F7] border-white/5'
          : 'bg-[#FAF9F6] text-[#0A111F] border-black/5'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={`text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] ${
                isDark ? 'text-[#C5A880]' : 'text-zinc-500'
              }`}
            >
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className={`text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal leading-tight tracking-tight ${
              isDark ? 'text-white' : 'text-[#0A111F]'
            }`}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Content: Vertical Bars (Executive Protection Screen 3) OR 3 Columns Grid */}
        {data?.variant === 'vertical-bars' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8 sm:space-y-10 pt-2"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-l-2 border-[#C5A880] pl-6 sm:pl-8 space-y-2 py-1"
              >
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-[15px] font-sans font-light leading-relaxed text-zinc-300 max-w-4xl">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative flex flex-col items-start space-y-4 pt-6 ${
                  isDark ? 'border-t border-white/10' : 'border-t border-zinc-200'
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-start text-[#C5A880] group-hover:text-[#D4AF37] transition-colors">
                  <ServiceIcon name={pillar.icon} className="w-6 h-6 stroke-[1.6]" />
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-serif font-normal group-hover:text-[#C5A880] transition-colors leading-snug ${
                    isDark ? 'text-white' : 'text-[#0A111F]'
                  }`}
                >
                  {pillar.title}
                </h3>

                <p
                  className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
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
