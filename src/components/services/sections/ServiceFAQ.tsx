'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { ServiceFAQData } from '../types';

interface Props {
  data?: ServiceFAQData;
}

export const ServiceFAQ: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const eyebrow = data?.eyebrow || 'FREQUENTLY ASKED QUESTIONS';
  const headline = data?.headline || 'Your questions, answered.';
  const faqs = data?.faqs || [];

  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="relative w-full bg-[#0B1324] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
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
            className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-normal text-white leading-tight tracking-tight"
          >
            {headline}
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-[#C5A880]/25 border-y border-[#C5A880]/25">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="text-xl sm:text-2xl lg:text-[26px] font-serif font-normal text-white group-hover:text-[#C5A880] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="text-zinc-400 group-hover:text-[#C5A880] shrink-0 transition-colors pr-2">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[1.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 sm:pt-5 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
