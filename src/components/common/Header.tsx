'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PhoneCall, Menu, X, ChevronDown, Shield, MapPin, FileText, ArrowRight, Lock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleMobileMenu, setMobileMenuOpen, setActiveModal } from '@/store/slices/uiSlice';

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

interface NavCategory {
  title: string;
  href?: string;
  items?: DropdownItem[];
}

const NAV_STRUCTURE: NavCategory[] = [
  {
    title: 'SERVICES',
    items: [
      {
        name: 'Executive Protection',
        href: '/executive-protection',
        description: 'Tactical close protection & armed motorcade escort',
        badge: 'Class G',
      },
      {
        name: 'Estate Security',
        href: '/estate-security',
        description: 'Perimeter defense & static residential posts',
        badge: '24/7 Gate',
      },
      {
        name: 'Event Security',
        href: '/event-security',
        description: 'High-stakes galas, Art Basel & private summits',
        badge: 'Rapid Escort',
      },
      {
        name: 'Armed Security Officers',
        href: '/armed-officers',
        description: 'Florida Class G licensed armed tactical operators',
        badge: 'Zero Unarmed',
      },
      {
        name: 'Concierge Security',
        href: '/concierge-security',
        description: 'Luxury residential & penthouse lobby surveillance',
        badge: 'High-Touch',
      },
      {
        name: 'Corporate Security',
        href: '/corporate-security',
        description: 'Boardroom defense, high-risk terminations & C-suite security',
        badge: 'Discreet',
      },
    ],
  },
  {
    title: 'LOCATIONS',
    items: [
      {
        name: 'Tri-County Grid Overview',
        href: '/locations',
        description: 'Rapid dispatch corridor throughout South Florida',
      },
      {
        name: 'Palm Beach County',
        href: '/locations/palm-beach',
        description: 'Palm Beach Island, Boca Raton, Delray Beach, Jupiter',
      },
      {
        name: 'Broward County',
        href: '/locations/broward',
        description: 'Fort Lauderdale Intracoastal, Las Olas, Weston',
      },
      {
        name: 'Miami-Dade County',
        href: '/locations/miami-dade',
        description: 'Star Island, Indian Creek, Brickell, Coral Gables',
      },
    ],
  },
  {
    title: 'ABOUT',
    items: [
      {
        name: 'About Massive Protective',
        href: '/about',
        description: 'Delray Beach HQ, agency pedigree & command staff',
      },
      {
        name: 'Careers & Recruitment',
        href: '/careers',
        description: 'Class G armed officer standards & selective hiring',
      },
      {
        name: 'Testimonials',
        href: '/testimonials',
        description: 'What clients say — verifiable credentials & NDA references',
      },
      {
        name: 'Terms of Services',
        href: '/terms',
        description: 'Terms of Services for Massive Protective Services Inc.',
      },
      {
        name: 'Privacy Policy',
        href: '/privacy',
        description: 'Client confidentiality & information security safeguards',
      },
      {
        name: "Licensing & Credentials",
        href: '/licensing',
        description: 'Meet the licensed professionals behind Massive Protective Services Inc.'
      }
    ],
  },
  {
    title: 'RESOURCES',
    items: [
      {
        name: 'Security Intelligence & Blog',
        href: '/blog',
        description: 'Guides on executive protection, armed security & bodyguard pricing',
      },
      {
        name: 'VIP Threat Assessment Guide',
        href: '/blog',
        description: 'Estate vulnerability auditing & protection checklist',
      },
      {
        name: 'Florida Chapter 493 Statutes',
        href: '/licensing',
        description: 'FDACS License B1400200 armed regulations',
      },
      {
        name: 'Confidentiality & NDA Standards',
        href: '/terms',
        description: 'Strict non-disclosure agreements & legal protocols',
      },
    ],
  },
  {
    title: 'CONTACT',
    href: '/contact',
  },
];

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1325]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-[#0D172A]/90 backdrop-blur-md border-b border-white/[0.06]'
        }`}
      >
        {/* Top Statutory Ribbon matching Screenshot */}
        <div className="w-full bg-[#080E1C] border-b border-white/[0.05] py-1.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs font-sans text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-zinc-300 font-medium tracking-wide">
                Licensed Florida Security Agency
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-[#C5A880] font-mono">Lic. B1400200</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Licensed & Insured</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:9542347231"
                aria-label="Direct Dispatch (954) 234-7231"
                className="font-mono font-bold text-zinc-300 hover:text-[#D4AF37] transition-colors tracking-wider"
              >
                (954) 234-7231
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {NAV_STRUCTURE.map((item) => {
              const hasDropdown = Boolean(item.items && item.items.length > 0);
              const isCurrentOpen = activeDropdown === item.title;

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.title)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      aria-expanded={isCurrentOpen}
                      className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] py-2 transition-colors ${
                        isCurrentOpen
                          ? 'text-[#D4AF37]'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#C5A880] transition-transform duration-200 ${
                          isCurrentOpen ? 'rotate-180 text-[#D4AF37]' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300 hover:text-[#D4AF37] transition-colors py-2"
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu Container */}
                  <AnimatePresence>
                    {hasDropdown && isCurrentOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-1 w-72 sm:w-80 bg-[#0F172A]/98 backdrop-blur-2xl border border-[#C5A880]/30 rounded-lg p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.85)] z-50"
                      >
                        <div className="flex flex-col gap-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex flex-col p-2.5 rounded-md hover:bg-[#1E293B]/80 border border-transparent hover:border-[#C5A880]/20 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-zinc-200 group-hover:text-[#D4AF37] transition-colors">
                                  {subItem.name}
                                </span>
                                {subItem.badge && (
                                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#C5A880]/15 text-[#D4AF37] border border-[#C5A880]/30">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              {subItem.description && (
                                <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300 mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Action CTAs Matching Screenshot */}
          <div className="flex items-center gap-3">
            {/* Call 24/7 Button - Outlined Gold */}
            <a
              href="tel:9542347231"
              aria-label="Direct 24/7 Armed Response Line"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm border border-[#C5A880]/60 hover:border-[#D4AF37] text-xs font-semibold tracking-wider text-zinc-100 hover:text-[#D4AF37] bg-transparent transition-all shadow-[0_0_12px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              Call 24/7
            </a>

            {/* Contact Our Team Button - Solid Warm Gold */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(197,168,128,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
            >
              Contact Our Team
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => dispatch(toggleMobileMenu())}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex items-center justify-center p-2 rounded text-zinc-300 hover:text-white bg-[#0F172A] border border-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Drag-to-Dismiss Gesture Physics */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => dispatch(setMobileMenuOpen(false))}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-45 lg:hidden"
            />

            {/* Bottom Sheet / Drawer with drag="y" dismiss gesture */}
            <motion.div
              drag={prefersReducedMotion ? false : 'y'}
              dragConstraints={{ top: 0, bottom: 400 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100 || info.velocity.y > 500) {
                  dispatch(setMobileMenuOpen(false));
                }
              }}
              initial={prefersReducedMotion ? { opacity: 1 } : { y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-[#0A0E1A] border-t border-[#C5A880]/40 rounded-t-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-[0_-8px_32px_rgba(0,0,0,0.9)]"
            >
              {/* Drag Handle Indicator */}
              <div className="w-12 h-1.5 bg-zinc-600 rounded-full mx-auto mb-4 shrink-0" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <BrandLogo showSubtitle={false} />
                  <button
                    type="button"
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                    aria-label="Close menu"
                    className="p-2 rounded bg-[#131C31] border border-white/10 text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation List */}
                <div className="space-y-4">
                  {NAV_STRUCTURE.map((section) => (
                    <div key={section.title} className="space-y-1">
                      {section.href ? (
                        <Link
                          href={section.href}
                          onClick={() => dispatch(setMobileMenuOpen(false))}
                          className="flex items-center justify-between py-2.5 px-3 rounded text-sm font-bold text-white hover:text-[#D4AF37] bg-[#101827] border border-white/5"
                        >
                          <span>{section.title}</span>
                          <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                        </Link>
                      ) : (
                        <div className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] px-3 pt-2">
                          {section.title}
                        </div>
                      )}

                      {section.items && (
                        <div className="grid grid-cols-1 gap-1 pl-2">
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => dispatch(setMobileMenuOpen(false))}
                              className="flex items-center justify-between py-2 px-3 rounded text-xs text-zinc-300 hover:text-white hover:bg-[#1A233A] transition-colors"
                            >
                              <span>{subItem.name}</span>
                              <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-zinc-500" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* License details */}
                <div className="mt-6 p-3.5 rounded bg-[#0D1526] border border-[#C5A880]/20 text-xs font-mono text-zinc-400">
                  <div className="text-[#D4AF37] font-semibold mb-1">
                    FDACS LICENSE B1400200
                  </div>
                  <div>100% Class G Armed Operators · Zero Unarmed Guards</div>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-5 border-t border-white/10 mt-6 space-y-2.5">
                <a
                  href="tel:9542347231"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded border border-[#C5A880]/60 text-white font-mono text-xs font-bold uppercase tracking-wider"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  Call (954) 234-7231 (24/7)
                </a>

                <Link
                  href="/contact"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="w-full flex items-center justify-center py-3 px-4 rounded bg-[#C5A880] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest text-center shadow-lg"
                >
                  Contact Our Team
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
