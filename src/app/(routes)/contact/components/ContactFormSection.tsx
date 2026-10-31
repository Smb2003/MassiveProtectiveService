'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MapPin, Shield, FileText, ExternalLink, ChevronDown } from 'lucide-react';

const SERVICES_OPTIONS = [
  'Select a service',
  'Executive Protection',
  'Estate & Residential Security',
  'Event Security',
  'Armed Security Officers',
  'VIP & Celebrity Protection',
  'Concierge Security',
  'Other / Custom Detail',
];

export const ContactFormSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [preferredMethod, setPreferredMethod] = useState<'Phone' | 'Email' | 'Either'>('Either');
  const [selectedService, setSelectedService] = useState('Select a service');

  return (
    <section
      aria-label="Contact and Confidential Consultation Form"
      className="relative w-full bg-[#0A111F] text-white pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header matching exact screenshot */}
        <div className="mb-10 sm:mb-14 space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              CONTACT · MASSIVE PROTECTIVE SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Start a Confidential Conversation
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            Every engagement begins with a direct conversation — no sales process, no obligation.
            Reach out by form, phone or email. All inquiries are treated as confidential.
          </motion.p>
        </div>

        {/* Full-width Divider Line */}
        <div className="w-full h-px bg-[#C5A880]/30 mb-12 sm:mb-16" />

        {/* Main Grid: Form on Left, Contact Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (lg:col-span-8): Form Container */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 rounded-sm bg-[#101A2D] border border-white/[0.08] p-7 sm:p-10 shadow-2xl"
          >
            {/* Form Eyebrow & Subheading */}
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
                REQUEST A CONFIDENTIAL CONSULTATION
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light mt-1.5">
                Tell us what you need. We will respond directly — usually within a few hours.
              </p>
            </div>

            {/* Visual Form Layout (Agent 3 will hook up Zod & submission logic) */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-sans text-zinc-300 block">
                    Full Name <span className="text-[#C5A880]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#C5A880] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans text-zinc-300 block">
                    Email Address <span className="text-[#C5A880]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#C5A880] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & How can we help? */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-sans text-zinc-300 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#C5A880] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors"
                  />
                  <span className="text-[11px] text-zinc-500 font-sans block">
                    Best number to reach you
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans text-zinc-300 block">
                    How can we help?
                  </label>
                  <div className="relative">
                    <select
                      aria-label="How can we help?"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#C5A880] text-zinc-200 text-xs sm:text-sm font-sans appearance-none outline-none pr-10 cursor-pointer"
                    >
                      {SERVICES_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A111F] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Brief Description */}
              <div className="space-y-2">
                <label className="text-xs font-sans text-zinc-300 block">
                  Brief Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your situation — location, timeline, and what you need. All information is kept strictly confidential."
                  className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#C5A880] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Row 4: Preferred Contact Method */}
              <div className="space-y-2.5 pt-1">
                <label className="text-xs font-sans text-zinc-300 block">
                  Preferred Contact Method
                </label>
                <div className="flex items-center gap-6 text-xs sm:text-sm text-zinc-300 font-sans">
                  {(['Phone', 'Email', 'Either'] as const).map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 cursor-pointer select-none group"
                    >
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value={method}
                        checked={preferredMethod === method}
                        onChange={() => setPreferredMethod(method)}
                        className="w-4 h-4 accent-[#C5A880] cursor-pointer"
                      />
                      <span className="group-hover:text-white transition-colors">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Action Button */}
              <div className="pt-3 space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.25)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.45)] hover:scale-[1.01] cursor-pointer"
                >
                  Send Confidential Inquiry
                </button>

                <p className="text-[11px] sm:text-xs text-zinc-400 font-sans leading-relaxed text-center sm:text-left">
                  We do not share, sell or distribute any information submitted through this form.
                  Your inquiry is read by Marc Tardalo directly.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Right Column (lg:col-span-4): Direct Contact Cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: 24/7 Direct Line */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-sm bg-[#101A2D] border border-white/[0.08] p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-sans font-medium text-white">
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>24/7 Direct Line</span>
              </div>
              <a
                href="tel:9542347231"
                className="block text-xl sm:text-2xl font-sans font-bold text-white hover:text-[#D4AF37] tracking-wide mt-2.5 transition-colors"
              >
                (954) 234-7231
              </a>
              <p className="text-xs text-zinc-400 font-sans mt-1 leading-relaxed">
                Available around the clock for active clients and urgent inquiries
              </p>
            </motion.div>

            {/* Card 2: Email */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-sm bg-[#101A2D] border border-white/[0.08] p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-sans font-medium text-white">
                <Mail className="w-4 h-4 text-[#C5A880]" />
                <span>Email</span>
              </div>
              <a
                href="mailto:info@massiveprotectiveservices.com"
                className="block text-xs sm:text-sm font-sans font-medium text-zinc-200 hover:text-[#D4AF37] mt-2.5 transition-colors break-all"
              >
                info@massiveprotectiveservices.com
              </a>
              <p className="text-xs text-zinc-400 font-sans mt-1 leading-relaxed">
                Monitored daily — responses within a few hours during business hours
              </p>
            </motion.div>

            {/* Card 3: Headquarters with Gold Left Line */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-sm bg-[#101A2D] border border-white/[0.08] border-l-2 border-l-[#C5A880] p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-sans font-medium text-white">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>Headquarters</span>
              </div>
              <div className="text-base sm:text-lg font-sans font-semibold text-white mt-2.5">
                Delray Beach, Florida
              </div>
              <p className="text-xs text-zinc-400 font-sans mt-1 pb-3.5 border-b border-white/[0.06] leading-relaxed">
                Street address pending confirmation
              </p>
              <div className="text-xs text-[#C5A880]/90 font-sans mt-3">
                Serving Palm Beach · Broward · Miami-Dade · Statewide
              </div>
            </motion.div>

            {/* Regulatory Footer Badges matching exact screenshot */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-sans text-zinc-400"
            >
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
                FL License B1400200
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <FileText className="w-3.5 h-3.5 text-[#C5A880]" />
                Chapter 493, FL Statutes
              </span>
              <a
                href="https://www.fdacs.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#C5A880] hover:text-[#D4AF37] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                FDACS Verifiable
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
