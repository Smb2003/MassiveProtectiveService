'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceRelatedData } from '../types';

interface Props {
  data?: ServiceRelatedData;
}

export const ServiceRelatedServices: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const eyebrow = data?.eyebrow || 'EXPLORE FURTHER';
  const headline = data?.headline || 'Related services';
  const services = data?.services || [];

  if (!services || services.length === 0) return null;

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
      aria-label="Related Services"
      className="relative w-full bg-[#070D18] py-20 sm:py-28 lg:py-32 text-white overflow-hidden border-t border-white/5"
    >
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
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            {headline}
          </motion.h2>
        </div>

        {/* Related Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={service.href}
                className="group relative flex flex-col justify-between h-full bg-[#111A2C]/80 hover:bg-[#152238] border border-white/[0.08] hover:border-[#C5A880]/50 rounded-sm p-8 sm:p-10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {service.description && (
                    <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>

                <div className="pt-6 sm:pt-8 flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#C5A880] group-hover:text-[#D4AF37] transition-colors">
                  <span>{service.linkLabel || 'Learn More'}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
