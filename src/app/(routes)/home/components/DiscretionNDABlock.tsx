'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Lock, FileText, ShieldAlert, PhoneCall, CheckCircle2, ChevronDown } from 'lucide-react';
import { TacticalCard } from '@/components/ui/TacticalCard';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const DiscretionNDABlock: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="discretion"
      aria-label="Confidentiality and Consultation"
      className="relative w-full py-20 sm:py-28 bg-[#090D15] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A880]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Discretion Doctrine & Sovereign NDA Policy */}
          <div className="lg:col-span-6 space-y-6">
            <SectionBadge label="SOVEREIGN CONFIDENTIALITY" icon={Lock} />

            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight"
            >
              Institutional Discretion.
              <br />
              <span className="italic text-[#C5A880]">Absolute Client Sovereign Protection.</span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed"
            >
              We protect principals whose security cannot afford public exposure. Prior to deployment or operational briefings, Massive Protective Services executes legally binding mutual non-disclosure agreements (NDAs) adhering to Florida statutory protections.
            </motion.p>

            {/* Tactical Confidentiality Guarantees */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#0F1626]/80 border border-white/[0.06]">
                <div className="p-2 rounded bg-[#152037] text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    Pre-Engagement Mutual NDA Execution
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-0.5">
                    No residential addresses, family names, travel manifests, or event locations are logged on public servers or shared beyond vetted command personnel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#0F1626]/80 border border-white/[0.06]">
                <div className="p-2 rounded bg-[#152037] text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    Florida Chapter 493 Licensure Privilege
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-0.5">
                    Regulated by the Florida Department of Agriculture and Consumer Services (Lic. #B1400200) ensuring strict professional standards and statutory operational integrity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#0F1626]/80 border border-white/[0.06]">
                <div className="p-2 rounded bg-[#152037] text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    24/7 Sovereign Tactical Command Access
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-0.5">
                    Direct access to our Delray Beach command desk with instant Class G armed dispatch across Palm Beach, Broward, and Miami-Dade.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Emergency Telephone Action */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="tel:9542347231"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded bg-[#152037] hover:bg-[#1E2E4E] border border-[#C5A880]/40 text-xs font-mono font-bold text-white tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>Priority Dispatch: (954) 234-7231</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Inquiry Form (Agent 3 will hook up Zod & Debounce) */}
          <div className="lg:col-span-6">
            <TacticalCard
              cornerTicks
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 bg-[#0F172A]/95 border-[#C5A880]/30 shadow-[0_16px_48px_rgba(0,0,0,0.85)]"
            >
              <div className="border-b border-white/10 pb-5 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    ENCRYPTED INQUIRY CHANNEL
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#C5A880]" />
                    256-BIT ENCRYPTION
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">
                  Request Confidential Consultation
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Direct dispatch to Delray Beach operations. All inquiries protected by binding NDA.
                </p>
              </div>

              {/* Visual Form Layout (No submission handlers yet per Agent 2 boundaries) */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                      Principal or Agent Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe / Family Office"
                      className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-white text-xs font-sans placeholder:text-zinc-600 outline-none transition-colors"
                      readOnly
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                      Direct Secure Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-white text-xs font-sans placeholder:text-zinc-600 outline-none transition-colors"
                      readOnly
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                      Confidential Email
                    </label>
                    <input
                      type="email"
                      placeholder="principal@familyoffice.com"
                      className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-white text-xs font-sans placeholder:text-zinc-600 outline-none transition-colors"
                      readOnly
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                      Operational County
                    </label>
                    <div className="relative">
                      <select
                        aria-label="Operational County"
                        className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 text-white text-xs font-sans appearance-none outline-none pr-8 cursor-pointer"
                        defaultValue="Palm Beach"
                      >
                        <option value="Palm Beach">Palm Beach County</option>
                        <option value="Broward">Broward County</option>
                        <option value="Miami-Dade">Miami-Dade County</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                    Primary Service Requirement
                  </label>
                  <div className="relative">
                    <select
                      aria-label="Primary Service Requirement"
                      className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 text-white text-xs font-sans appearance-none outline-none pr-8 cursor-pointer"
                      defaultValue="Executive Protection"
                    >
                      <option value="Executive Protection">Executive Protection &amp; Armed Driving</option>
                      <option value="Estate Security">Estate &amp; Residential Fortification</option>
                      <option value="VIP & Celebrity Protection">VIP &amp; Celebrity Protection</option>
                      <option value="Event Security">High-Stakes Event Security (Art Basel)</option>
                      <option value="Armed Officers">Class G Armed Security Officers</option>
                      <option value="Concierge Security">Elite Concierge &amp; Penthouse Security</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Tactical Checkboxes */}
                <div className="pt-2 space-y-2">
                  <label className="flex items-center gap-2.5 text-xs text-zinc-300 font-sans cursor-pointer select-none">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded bg-[#0A0A0A] border-white/20 accent-[#D4AF37]"
                    />
                    <span>Require pre-consultation mutual Non-Disclosure Agreement (NDA)</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-zinc-300 font-sans cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-[#0A0A0A] border-white/20 accent-[#D4AF37]"
                    />
                    <span>Include armored motorcade transport / Class G armed driver</span>
                  </label>
                </div>

                {/* Submit Action Button Styled for Agent 3 Handover */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(197,168,128,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5 text-[#0A0A0A]" />
                    <span>Proceed to Secure Priority Transmission</span>
                  </Link>

                  <div className="mt-3 text-center text-[10px] font-mono text-zinc-500">
                    FDACS LIC. #B1400200 · CHAPTER 493 STATUTES · 24/7 COMMAND
                  </div>
                </div>
              </form>
            </TacticalCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscretionNDABlock;
