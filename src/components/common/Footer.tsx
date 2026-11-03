'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BrandLogo } from './BrandLogo';
import { SERVICES_NAV, LOCATIONS_NAV, RESOURCES_NAV } from '@/data/navigation';

export const Footer: React.FC = () => {
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#0D2548] text-white overflow-hidden border-t border-[#C5A880]/30 select-text"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8"
      >
        {/* Main 4-Column Grid synchronized with Header Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Contact Info (lg:col-span-3) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 space-y-6 pr-0 lg:pr-4"
          >
            {/* Logo Badge */}
            <BrandLogo size="lg" />

            {/* Headline */}
            <h2 className="text-2xl sm:text-[26px] font-serif font-normal text-white leading-tight tracking-tight pt-1">
              Headquartered in Delray Beach, FL.
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed max-w-md">
              Discreet, professional protection for individuals, families and businesses across South Florida.
            </p>

            {/* License Line */}
            <div className="pt-1">
              <span className="text-[11px] sm:text-xs font-mono tracking-wider text-zinc-400 uppercase">
                FL License B1400200 · LICENSED &amp; INSURED
              </span>
            </div>

            {/* 24/7 Phone */}
            <div>
              <a
                href="tel:9542347231"
                className="inline-block text-xs sm:text-sm font-mono text-zinc-200 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <span className="text-[#C5A880]">24/7</span> · (954) 234-7231
              </a>
            </div>
          </motion.div>

          {/* Column 2: SERVICES (lg:col-span-3) - Matches Header Services Submenu */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
                SERVICES
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light">
              {SERVICES_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200 block py-0.5 leading-snug"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: LOCATIONS (lg:col-span-4) - Matches Header Locations Submenu */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
                  LOCATIONS
                </h3>
              </div>
              <Link
                href="/locations"
                className="text-[11px] font-mono text-zinc-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
              >
                <span>All Locations</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
            {/* 2-Column Subgrid balancing 19 jurisdictions */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-[13px] font-sans font-light">
              <ul className="space-y-2.5">
                {LOCATIONS_NAV.slice(0, 10).map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200 block py-0.5 leading-snug"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {LOCATIONS_NAV.slice(10).map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200 block py-0.5 leading-snug"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="text-[#C5A880] hover:text-[#D4AF37] font-medium transition-colors duration-200 block py-0.5 leading-snug"
                  >
                    Explore All (19) →
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Column 4: RESOURCES (lg:col-span-2) - Matches Header Resources Submenu */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
                RESOURCES
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light">
              {RESOURCES_NAV.map((resource) => (
                <li key={resource.href + resource.name}>
                  <Link
                    href={resource.href}
                    className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200 block py-0.5 leading-snug"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mid Section Tagline Note matching Screenshot */}
        <motion.div
          variants={itemVariants}
          className="pt-6 pb-6 text-xs sm:text-[13px] font-sans font-light text-zinc-400"
        >
          <p>
            Headquartered in Delray Beach, FL · Serving Palm Beach, Broward &amp; Miami-Dade Counties.
          </p>
        </motion.div>

        {/* Bottom Full-Width Gold Divider Line matching Screenshot */}
        <div className="w-full h-px bg-[#C5A880]/40 my-3" />

        {/* Bottom Copyright & Legal Links matching Screenshot */}
        <motion.div
          variants={itemVariants}
          className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs font-sans font-light text-zinc-400"
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Massive Protective Services Inc.</span>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Terms
            </Link>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Accessibility
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
