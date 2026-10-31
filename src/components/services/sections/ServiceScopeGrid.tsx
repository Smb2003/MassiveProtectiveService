'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceScopeData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServiceScopeData;
}

export const ServiceScopeGrid: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label={data.headline}
      className="relative w-full bg-[#070D18] py-20 sm:py-28 lg:py-32 text-white overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111C33]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
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

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`grid grid-cols-1 md:grid-cols-2 ${
            data.columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
          } gap-6 sm:gap-8`}
        >
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-[#111A2C]/80 hover:bg-[#152238] border border-white/[0.07] hover:border-[#C5A880]/40 rounded-sm p-8 sm:p-9 flex flex-col justify-start transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1"
            >
              {/* Top gold accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880]/0 group-hover:via-[#C5A880] to-transparent transition-all duration-500" />

              {/* Card Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#1A263D] border border-white/10 group-hover:border-[#C5A880]/50 flex items-center justify-center mb-6 text-[#C5A880] transition-colors duration-300">
                <ServiceIcon name={card.icon} className="w-6 h-6 stroke-[1.6]" />
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                {card.description}
              </p>

              {/* Card Optional Footnote */}
              {card.note && (
                <p className="mt-5 pt-3 border-t border-white/10 text-xs text-zinc-400 font-sans leading-relaxed">
                  {card.note}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
