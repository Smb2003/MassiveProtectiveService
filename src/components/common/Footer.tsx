'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

const SERVICES_LINKS = [
  { label: 'Executive Protection', href: '/executive-protection' },
  { label: 'Bodyguard & Close Protection', href: '/executive-protection' },
  { label: 'VIP & Celebrity Protection', href: '/celebrity-protection' },
  { label: 'Estate & Residential Security', href: '/estate-security' },
  { label: 'Yacht & Maritime Security', href: '/event-security' },
  { label: 'Event Security', href: '/event-security' },
  { label: 'Secure Transportation', href: '/executive-protection' },
  { label: 'Armed Security Officers', href: '/armed-officers' },
  {
    label: 'Corporate Security & Workplace Violence Prevention',
    href: '/corporate-security',
  },
  { label: 'Loss Prevention & Retail Security', href: '/loss-prevention' },
  { label: 'Mobile Patrol Services', href: '/mobile-patrol' },
  { label: 'School & Campus Security', href: '/school-security' },
  { label: 'Unarmed Security Guards', href: '/unarmed-security-guards' },
  { label: 'VIP & Celebrity Protection', href: '/vip-celebrity-protection' },
  { label: 'Risk Assessment & Consulting', href: '/corporate-security' },
];

const AREAS_WE_SERVE = [
  { label: 'Miami', href: '/locations/miami' },
  { label: 'Miami Beach', href: '/locations/miami-beach' },
  { label: 'Fort Lauderdale', href: '/locations/fort-lauderdale' },
  { label: 'Hillsboro Beach', href: '/locations/hillsboro-beach' },
  { label: 'Lighthouse Point', href: '/locations/lighthouse-point' },
  { label: 'Palm Beach', href: '/locations/palm-beach' },
  { label: 'West Palm Beach', href: '/locations/west-palm-beach' },
  { label: 'Boca Raton', href: '/locations/boca-raton' },
  { label: 'Delray Beach', href: '/locations/delray-beach' },
  { label: 'Gulf Stream', href: '/locations/gulf-stream' },
  { label: 'Manalapan', href: '/locations/manalapan' },
  { label: 'Ocean Ridge', href: '/locations/ocean-ridge' },
  { label: 'Boynton Beach', href: '/locations/boynton-beach' },
  { label: 'Aventura', href: '/locations/aventura' },
  { label: 'Jacksonville', href: '/locations/jacksonville' },
  { label: 'Naples', href: '/locations/naples' },
  { label: 'Orlando', href: '/locations/orlando' },
  { label: 'Sarasota', href: '/locations/sarasota' },
  { label: 'Tampa', href: '/locations/tampa' },
  { label: 'Sunny Isles Beach', href: '/#where-we-operate' },
  { label: 'Jupiter', href: '/#where-we-operate' },
];

const THE_FIRM_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Case Studies', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/credentials' },
  { label: 'Contact', href: '/contact' },
];

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
        {/* Main 4-Column Grid matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Contact Info (lg:col-span-5) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6 pr-0 lg:pr-8"
          >
            {/* Logo Badge matching Screenshot */}
            <BrandLogo size="lg" />

            {/* Headline */}
            <h2 className="text-2xl sm:text-[28px] font-serif font-normal text-white leading-tight tracking-tight pt-1">
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

          {/* Column 2: SERVICES (lg:col-span-3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light">
              {SERVICES_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200 block py-0.5 leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: AREAS WE SERVE (lg:col-span-2) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              AREAS WE SERVE
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light">
              {AREAS_WE_SERVE.map((area, idx) => (
                <li key={idx}>
                  <Link
                    href={area.href}
                    className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200 block py-0.5"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: THE FIRM (lg:col-span-2) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              THE FIRM
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light">
              {THE_FIRM_LINKS.map((firm, idx) => (
                <li key={idx}>
                  <Link
                    href={firm.href}
                    className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200 block py-0.5"
                  >
                    {firm.label}
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
