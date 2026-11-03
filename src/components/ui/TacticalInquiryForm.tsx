'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Shield, Lock, PhoneCall, Loader2, Calendar } from 'lucide-react';
import { useSecureFormSubmit } from '@/hooks/useSecureFormSubmit';

interface TacticalInquiryFormProps {
  id?: string;
  servicePreset?: string;
  locationPreset?: string;
  countyPreset?: 'Palm Beach' | 'Broward' | 'Miami-Dade' | 'Visiting Principal';
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  submitButtonText?: string;
  footerNote?: string;
  hideHeader?: boolean;
  className?: string;
}

export const TacticalInquiryForm: React.FC<TacticalInquiryFormProps> = ({
  id = 'consultation-form',
  servicePreset = 'Executive Protection',
  locationPreset,
  countyPreset,
  title = 'Request a Confidential Security Consultation',
  subtitle = 'All inquiries are encrypted and handled directly by MPS licensed command directors. Non-disclosure agreements signed as standard.',
  eyebrow = 'ENCRYPTED INTAKE · FL LICENSE B1400200',
  submitButtonText = 'Request Confidential Consultation',
  footerNote,
  hideHeader = false,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  const {
    form,
    isSubmitting,
    isSuccess,
    isTimedOut,
    errorMessage,
    idempotencyKey,
    handleSubmit,
    resetForm,
  } = useSecureFormSubmit({
    defaultValues: {
      serviceType: (servicePreset as any) || 'Executive Protection',
      locationPreset: locationPreset || '',
      county:
        countyPreset ||
        (locationPreset?.toLowerCase().includes('miami')
          ? 'Miami-Dade'
          : locationPreset?.toLowerCase().includes('lauderdale') ||
            locationPreset?.toLowerCase().includes('hillsboro') ||
            locationPreset?.toLowerCase().includes('lighthouse')
          ? 'Broward'
          : locationPreset?.toLowerCase().includes('tampa') ||
            locationPreset?.toLowerCase().includes('orlando') ||
            locationPreset?.toLowerCase().includes('sarasota') ||
            locationPreset?.toLowerCase().includes('naples') ||
            locationPreset?.toLowerCase().includes('jacksonville')
          ? 'Visiting Principal'
          : 'Palm Beach'),
      ndaRequested: true,
      requiresArmedDriver: false,
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div id={id} className={`relative w-full max-w-4xl mx-auto scroll-mt-24 ${className}`}>
      {/* Header */}
      {!hideHeader && (
        <div className="space-y-3 mb-8 sm:mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
            <Shield className="w-4 h-4 stroke-[1.8]" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight tracking-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light italic leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Success State Confirmation */}
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-[#0C162A] border border-[#C5A880]/40 rounded-lg p-8 sm:p-12 text-center space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
        >
          <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Transmission Encrypted &amp; Received
            </h3>
            <p className="text-xs font-mono text-[#C5A880]">
              IDEMPOTENCY VERIFIED · KEY: {idempotencyKey.slice(0, 8)}...
            </p>
          </div>

          <p className="text-zinc-300 font-light max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Your inquiry has been routed directly to our operations director at Delray Beach headquarters. Dual verification emails have been dispatched to the operations desk and your confirmation inbox under Florida Chapter 493 privacy safeguards.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 rounded-sm border border-[#C5A880]/50 text-xs font-mono uppercase tracking-wider text-[#C5A880] hover:bg-[#C5A880]/10 transition-colors cursor-pointer"
            >
              Submit Another Transmission
            </button>
          </div>
        </motion.div>
      ) : (
        /* Active Form */
        <motion.form
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6 bg-[#0B1426]/90 border border-white/[0.08] rounded-lg p-6 sm:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
        >
          {/* Timeout / Network Fallback Banner */}
          {errorMessage && (
            <div className="p-4 rounded-sm bg-[#8B1E1E]/20 border border-[#8B1E1E] text-white flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#E53E3E] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm">
                <p className="font-semibold text-[#FF8080]">Encrypted Transmission Alert</p>
                <p className="text-zinc-300">{errorMessage}</p>
                {isTimedOut && (
                  <p className="pt-1">
                    <a
                      href="tel:9542347231"
                      className="font-mono text-[#D4AF37] hover:underline inline-flex items-center gap-1.5 font-bold"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Direct Priority Dispatch: (954) 234-7231</span>
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Row 1: Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Full Name <span className="text-[#C5A880]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                disabled={isSubmitting}
                placeholder="e.g. Jonathan Vance"
                {...register('fullName')}
                className={`w-full bg-[#121E36] border ${
                  errors.fullName ? 'border-[#8B1E1E] focus:border-[#8B1E1E]' : 'border-white/[0.08] focus:border-[#C5A880]'
                } rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors disabled:opacity-60`}
              />
              {errors.fullName && (
                <p className="text-[11px] font-sans text-[#E53E3E] font-medium tracking-wide">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Direct Phone <span className="text-[#C5A880]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                disabled={isSubmitting}
                placeholder="e.g. (561) 555-0199 or +15615550199"
                {...register('phone')}
                className={`w-full bg-[#121E36] border ${
                  errors.phone ? 'border-[#8B1E1E] focus:border-[#8B1E1E]' : 'border-white/[0.08] focus:border-[#C5A880]'
                } rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors disabled:opacity-60`}
              />
              {errors.phone && (
                <p className="text-[11px] font-sans text-[#E53E3E] font-medium tracking-wide">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email & Preferred Start Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Email Address <span className="text-[#C5A880]">*</span>
              </label>
              <input
                id="email"
                type="email"
                disabled={isSubmitting}
                placeholder="e.g. principal@familyoffice.com"
                {...register('email')}
                className={`w-full bg-[#121E36] border ${
                  errors.email ? 'border-[#8B1E1E] focus:border-[#8B1E1E]' : 'border-white/[0.08] focus:border-[#C5A880]'
                } rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors disabled:opacity-60`}
              />
              {errors.email && (
                <p className="text-[11px] font-sans text-[#E53E3E] font-medium tracking-wide">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="preferredDate" className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Preferred Deployment Date (Optional)
              </label>
              <div className="relative">
                <input
                  id="preferredDate"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="mm / dd / yyyy or Immediate"
                  {...register('preferredDate')}
                  className="w-full bg-[#121E36] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors pr-10 disabled:opacity-60"
                />
                <Calendar className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: County Jurisdiction & Specialized Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-1.5">
              <label htmlFor="county" className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Jurisdiction Territory <span className="text-[#C5A880]">*</span>
              </label>
              <select
                id="county"
                disabled={isSubmitting}
                {...register('county')}
                className="w-full bg-[#121E36] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer disabled:opacity-60"
              >
                <option value="Palm Beach">Palm Beach County</option>
                <option value="Broward">Broward County</option>
                <option value="Miami-Dade">Miami-Dade County</option>
                <option value="Visiting Principal">Visiting Principal / Statewide Transit</option>
              </select>
              {errors.county && (
                <p className="text-[11px] font-sans text-[#E53E3E] font-medium tracking-wide">
                  {errors.county.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="serviceType" className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Specialized Service Requested <span className="text-[#C5A880]">*</span>
              </label>
              <select
                id="serviceType"
                disabled={isSubmitting}
                {...register('serviceType')}
                className="w-full bg-[#121E36] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer disabled:opacity-60"
              >
                <option value="Executive Protection">Armed Executive Protection (Close Detail)</option>
                <option value="Estate Security">Estate &amp; Residential Security (Perimeter)</option>
                <option value="VIP/Celebrity">VIP &amp; Celebrity Protection</option>
                <option value="Event Security">Gala &amp; Event Security (Art Basel / Season)</option>
                <option value="Armed Escort">Airport Arrival &amp; Tarmac Escort</option>
                <option value="Armed Security Officers">Armed Security Officers (Class G)</option>
                <option value="Concierge Security">Concierge &amp; Penthouse Lobby Security</option>
                <option value="Corporate Security">Corporate &amp; Boardroom Security</option>
                <option value="Loss Prevention">Loss Prevention &amp; High-Value Retail</option>
                <option value="Mobile Patrol">Mobile Patrol Services</option>
                <option value="School Security">School &amp; Campus Security</option>
                <option value="Other">Custom High-Threat Requirement</option>
              </select>
              {errors.serviceType && (
                <p className="text-[11px] font-sans text-[#E53E3E] font-medium tracking-wide">
                  {errors.serviceType.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Message / Requirements */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs sm:text-[13px] font-sans text-zinc-300">
              Operational Scope &amp; Requirements (Strictly Confidential)
            </label>
            <textarea
              id="message"
              rows={4}
              disabled={isSubmitting}
              placeholder="Describe your security needs, arrival timing, schedule, or property layout — all information remains strictly non-disclosed under Florida Chapter 493 privacy."
              {...register('message')}
              className="w-full bg-[#121E36] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none disabled:opacity-60"
            />
            {errors.message && (
              <p className="text-[11px] font-sans text-[#E53E3E] font-medium tracking-wide">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Checkboxes: NDA & Armed Driver */}
          <div className="space-y-3 pt-1 border-t border-white/[0.06]">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                disabled={isSubmitting}
                {...register('ndaRequested')}
                className="w-4 h-4 rounded border-white/20 text-[#C5A880] focus:ring-0 bg-[#121E36] cursor-pointer"
              />
              <span className="text-xs text-zinc-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Require mutual Non-Disclosure Agreement (NDA) prior to operational briefing</span>
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                disabled={isSubmitting}
                {...register('requiresArmedDriver')}
                className="w-4 h-4 rounded border-white/20 text-[#C5A880] focus:ring-0 bg-[#121E36] cursor-pointer"
              />
              <span className="text-xs text-zinc-300 group-hover:text-white transition-colors">
                Include licensed armed driver / motorcade escort vehicle
              </span>
            </label>
          </div>

          {/* Submit Action Button with Tactical Loading State */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isSubmitting
                  ? 'bg-[#182338] text-[#C5A880] border border-[#C5A880]/40 cursor-wait'
                  : 'bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] hover:scale-[1.005]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#C5A880]" />
                  <span>Securing Transmission...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>{submitButtonText}</span>
                </>
              )}
            </button>
          </div>

          {/* Footer Statutory Disclosures */}
          <div className="pt-2 text-center space-y-1">
            <p className="text-[11px] font-mono text-zinc-400">
              {footerNote || 'FL License B1400200 · Class G Armed Officers · Chapter 493, Florida Statutes'}
            </p>
            <p className="text-[10px] text-zinc-500 font-sans font-light">
              Idempotency Protected · Anti-Tamper Header Verified · Zero Subcontracting
            </p>
          </div>
        </motion.form>
      )}
    </div>
  );
};
