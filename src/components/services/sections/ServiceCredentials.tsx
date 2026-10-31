'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceCredentialsData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServiceCredentialsData;
}

export const ServiceCredentials: React.FC<Props> = ({ data }) => {
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label={data.headline || 'Licensed, Armed and Verifiable'}
      className="relative w-full bg-[#0B1324] py-20 sm:py-28 lg:py-32 text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Headline */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-tight tracking-tight max-w-4xl"
        >
          {data.headline || 'Licensed, Armed and Verifiable'}
        </motion.h2>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#111A2C]/80 border border-white/[0.08] hover:border-[#C5A880]/40 rounded-sm p-7 sm:p-8 flex flex-col items-center text-center justify-center space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            >
              {/* Gold Icon */}
              <div className="text-[#C5A880] mb-1">
                <ServiceIcon name={card.icon} className="w-7 h-7 stroke-[1.6]" />
              </div>

              {/* Card Label */}
              <span className="text-xs sm:text-[13px] text-zinc-400 font-sans font-light">
                {card.label}
              </span>

              {/* Card Value */}
              <span className="text-sm sm:text-base font-sans font-medium text-white tracking-wide">
                {card.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Verify Link */}
        {data.verifyLink && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="pt-2"
          >
            <a
              href={data.verifyLink.href}
              target={data.verifyLink.href.startsWith('http') ? '_blank' : undefined}
              rel={data.verifyLink.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#C5A880] hover:text-[#D4AF37] transition-colors group"
            >
              <span>{data.verifyLink.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}

        {/* Bottom Subtle Gold Divider Line */}
        <div className="w-full h-px bg-[#C5A880]/30 pt-0 mt-12 sm:mt-16" />
      </div>
    </section>
  );
};
