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
      {
        name: 'Loss Prevention',
        href: '/loss-prevention',
        description: 'Observant retail security, camera watch & inventory protection',
        badge: 'Retail',
      },
      {
        name: 'Mobile Patrol',
        href: '/mobile-patrol',
        description: 'Vehicle visits, perimeter checks & scheduled property sweeps',
        badge: 'Patrol',
      },
      {
        name: 'School Security',
        href: '/school-security',
        description: 'Campus access, visitor flow & welcoming community protection',
        badge: 'Campus',
      },
      {
        name: 'Unarmed Security Guards',
        href: '/unarmed-security-guards',
        description: 'Attentive access control, property patrols & front-of-house presence',
        badge: 'Class D',
      },
      {
        name: 'VIP & Celebrity Protection',
        href: '/vip-celebrity-protection',
        description: 'Discreet close protection, hotel arrivals & private travel',
        badge: 'Discreet VIP',
      },
    ],
  },
  {
    title: 'LOCATIONS',
    items: [
      {
        name: 'Palm Beach',
        href: '/locations/palm-beach',
        description: 'Oceanfront & lakefront estates, private clubs, The Season & Worth Ave',
        badge: 'Island Estates',
      },
      {
        name: 'West Palm Beach',
        href: '/locations/west-palm-beach',
        description: 'PBI arrivals, downtown financial towers, courthouse & executive protection',
        badge: 'Executive',
      },
      {
        name: 'Delray Beach',
        href: '/locations/delray-beach',
        description: 'Agency headquarters, Atlantic Avenue & waterfront estates',
        badge: 'Headquarters',
      },
      {
        name: 'Boca Raton',
        href: '/locations/boca-raton',
        description: 'Royal Palm Yacht Club, Woodfield, Mizner Park & private estates',
        badge: 'Estates',
      },
      {
        name: 'Boynton Beach',
        href: '/locations/boynton-beach',
        description: 'Delray Beach HQ adjacent, Intracoastal estates & corporate campuses',
        badge: 'HQ Adjacent',
      },
      {
        name: 'Gulf Stream',
        href: '/locations/gulf-stream',
        description: 'Private barrier island estates, A1A oceanfront & Intracoastal security',
        badge: 'Private Island',
      },
      {
        name: 'Manalapan',
        href: '/locations/manalapan',
        description: 'Exclusive barrier island, ocean-to-Intracoastal estates & seasonal security',
        badge: 'Private Island',
      },
      {
        name: 'Ocean Ridge',
        href: '/locations/ocean-ridge',
        description: 'A1A oceanfront & Intracoastal barrier island estates, quiet enclave protection',
        badge: 'Private Island',
      },
      // {
      //   name: 'Broward County',
      //   href: '/locations/broward',
      //   description: 'Fort Lauderdale Intracoastal, Las Olas, Weston',
      // },
      {
        name: 'Hillsboro Beach',
        href: '/locations/hillsboro-beach',
        description: 'Hillsboro Mile oceanfront estates, inlet security & barrier island protection',
        badge: 'Hillsboro Mile',
      },
      {
        name: 'Lighthouse Point',
        href: '/locations/lighthouse-point',
        description: 'Canal-front homes, private docks & waterfront residential protection',
        badge: 'Waterfront',
      },
      {
        name: 'Fort Lauderdale',
        href: '/locations/fort-lauderdale',
        description: 'Superyacht security, Las Olas Isles, FLIBS & waterfront estates',
        badge: 'Maritime',
      },
      {
        name: 'Aventura',
        href: '/locations/aventura',
        description: 'Williams Island, Turnberry Isle, luxury high-rises & Intracoastal estates',
        badge: 'Waterfront',
      },
      {
        name: 'Miami',
        href: '/locations/miami',
        description: 'Brickell financial towers, Coral Gables estates, Key Biscayne & international EP',
        badge: 'Executive',
      },
      {
        name: 'Miami Beach',
        href: '/locations/miami-beach',
        description: 'Star Island, Palm Island, Art Basel, luxury hotels & celebrity VIP protection',
        badge: 'Private Island',
      },
      {
        name: 'Jacksonville',
        href: '/locations/jacksonville',
        description: 'Downtown, Southbank, Riverside & San Marco executive visits and security',
        badge: 'Regional',
      },
      {
        name: 'Naples',
        href: '/locations/naples',
        description: 'Port Royal, Old Naples, Gulf Coast seasonal residence & visiting executive security',
        badge: 'Gulf Coast',
      },
      {
        name: 'Orlando',
        href: '/locations/orlando',
        description: 'Convention district, International Drive, Lake Nona & executive protection',
        badge: 'Central FL',
      },
      {
        name: 'Sarasota',
        href: '/locations/sarasota',
        description: 'Casey Key, Longboat Key, Bird Key & Gulf Coast arts season estate protection',
        badge: 'Gulf Coast',
      },
      {
        name: 'Tampa',
        href: '/locations/tampa',
        description: 'Downtown Riverwalk, Westshore business district, Hyde Park & Davis Islands',
        badge: 'Gulf Coast',
      },
    ],
  },
  {
    title: 'Resources',
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
      },
      {
        name: 'Security Intelligence & Blog',
        href: '/blog',
        description: 'Guides on executive protection, armed security & bodyguard pricing',
      },
    ],
  },
  // {
  //   title: 'RESOURCES',
  //   items: [
  //     {
  //       name: 'Security Intelligence & Blog',
  //       href: '/blog',
  //       description: 'Guides on executive protection, armed security & bodyguard pricing',
  //     },
  //     {
  //       name: 'VIP Threat Assessment Guide',
  //       href: '/blog',
  //       description: 'Estate vulnerability auditing & protection checklist',
  //     },
  //     {
  //       name: 'Florida Chapter 493 Statutes',
  //       href: '/licensing',
  //       description: 'FDACS License B1400200 armed regulations',
  //     },
  //     {
  //       name: 'Confidentiality & NDA Standards',
  //       href: '/terms',
  //       description: 'Strict non-disclosure agreements & legal protocols',
  //     },
  //   ],
  // },
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
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
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
      setExpandedMobileSection(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileSection = (title: string) => {
    setExpandedMobileSection((prev) => (prev === title ? null : title));
  };

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
            ? 'bg-[#0D2548]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-[#0D2548]/90 backdrop-blur-md border-b border-white/[0.06]'
        }`}
      >
        {/* Top Statutory Ribbon matching Screenshot */}
        <div className="w-full bg-[#080E1C] border-b border-white/[0.05] py-1.5 px-4 sm:px-6 sm:block hidden">
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

              const isLocations = item.title === 'LOCATIONS';
              const isServices = item.title === 'SERVICES';
              const isAbout = item.title === 'ABOUT';
              const isResources = item.title === 'RESOURCES';

              let menuWidthClass = 'w-72 sm:w-80';
              let gridColsClass = 'grid-cols-1';
              let menuPositionClass = 'left-0';

              if (isLocations) {
                menuWidthClass = 'w-[800px] xl:w-[860px] max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
                menuPositionClass = '-left-28 sm:-left-36 lg:-left-44 xl:-left-44';
              } else if (isServices) {
                menuWidthClass = 'w-[620px] xl:w-[680px] max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1 sm:grid-cols-2';
                menuPositionClass = 'left-0';
              } else if (isAbout) {
                menuWidthClass = 'w-[520px] max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1 sm:grid-cols-2';
                menuPositionClass = '-left-16 xl:-left-20';
              } else if (isResources) {
                menuWidthClass = 'w-80 max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1';
                menuPositionClass = '-left-20 xl:left-0';
              }

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

                  {/* Dropdown Menu Container - Multi-Column Rectangular Panel */}
                  <AnimatePresence>
                    {hasDropdown && isCurrentOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className={`absolute top-full mt-1.5 ${menuPositionClass} ${menuWidthClass} bg-[#0A1324]/98 backdrop-blur-2xl border border-[#C5A880]/35 rounded-lg p-3 shadow-[0_20px_50px_rgba(0,0,0,0.92)] z-50 max-h-[calc(100vh-100px)] overflow-y-auto before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3`}
                      >
                        {/* Header Ribbon for Locations */}
                        {isLocations && (
                          <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 border-b border-white/[0.08] text-[11px] font-mono tracking-wider text-[#C5A880]">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                              <span className="font-semibold uppercase tracking-[0.16em]">
                                FLORIDA JURISDICTION GRID ({item.items?.length})
                              </span>
                            </div>
                            <Link
                              href="/locations"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11px] font-sans text-zinc-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
                            >
                              <span>All Locations</span>
                              <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                          </div>
                        )}

                        {/* Header Ribbon for Services */}
                        {isServices && (
                          <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 border-b border-white/[0.08] text-[11px] font-mono tracking-wider text-[#C5A880]">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                              <span className="font-semibold uppercase tracking-[0.16em]">
                                SPECIALIZED PROTECTION SERVICES ({item.items?.length})
                              </span>
                            </div>
                            <Link
                              href="/executive-protection"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11px] font-sans text-zinc-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
                            >
                              <span>Class G Armed</span>
                              <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                          </div>
                        )}

                        {/* Multi-Column Grid */}
                        <div className={`grid ${gridColsClass} gap-1.5`}>
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex flex-col p-2.5 rounded-md hover:bg-[#131F38] border border-transparent hover:border-[#C5A880]/30 transition-all duration-150"
                            >
                              <div className="flex items-center justify-between gap-1.5">
                                <span className="text-xs font-semibold text-zinc-200 group-hover:text-[#D4AF37] transition-colors truncate">
                                  {subItem.name}
                                </span>
                                {subItem.badge && (
                                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#C5A880]/15 text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              {subItem.description && (
                                <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300 mt-0.5 line-clamp-1 font-light leading-snug">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>

                        {/* Footer Ribbon for Multi-Column Menus */}
                        {(isLocations || isServices) && (
                          <div className="mt-2.5 pt-2 border-t border-white/[0.08] px-2.5 flex items-center justify-between text-[11px] font-sans text-zinc-400">
                            <span className="font-light">FL License B1400200 · 24/7 Rapid Dispatch</span>
                            <a
                              href="tel:9542347231"
                              className="font-mono text-[#C5A880] hover:text-[#D4AF37] transition-colors"
                            >
                              (954) 234-7231
                            </a>
                          </div>
                        )}
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
              className="lg:hidden flex items-center justify-center p-2 rounded text-zinc-300 hover:text-white bg-[#0D2548] border border-white/10"
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
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-[#0D2548] border-t border-[#C5A880]/40 rounded-t-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-[0_-8px_32px_rgba(0,0,0,0.9)]"
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

                {/* Mobile Navigation List - Expandable Accordions */}
                <div className="space-y-2.5">
                  {NAV_STRUCTURE.map((section) => {
                    const hasItems = Boolean(section.items && section.items.length > 0);
                    const isExpanded = expandedMobileSection === section.title;

                    if (section.href) {
                      return (
                        <Link
                          key={section.title}
                          href={section.href}
                          onClick={() => dispatch(setMobileMenuOpen(false))}
                          className="flex items-center justify-between py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] bg-[#101827]/90 hover:bg-[#16233B] border border-white/5 transition-all"
                        >
                          <span className="uppercase tracking-[0.12em]">{section.title}</span>
                          <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={section.title}
                        className={`rounded-lg overflow-hidden border transition-colors ${
                          isExpanded
                            ? 'border-[#C5A880]/35 bg-[#0F182A]'
                            : 'border-white/5 bg-[#101827]/70'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(section.title)}
                          aria-expanded={isExpanded}
                          className={`w-full flex items-center justify-between py-3 px-4 text-xs sm:text-sm font-semibold tracking-wider transition-all ${
                            isExpanded
                              ? 'bg-[#15233E] text-[#D4AF37]'
                              : 'text-zinc-200 hover:text-white hover:bg-[#152238]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="uppercase tracking-[0.12em]">{section.title}</span>
                            {/* {section.items && (
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                  isExpanded
                                    ? 'bg-[#C5A880]/20 text-[#D4AF37] border-[#C5A880]/40'
                                    : 'bg-white/5 text-zinc-400 border-white/10'
                                }`}
                              >
                                {section.items.length}
                              </span>
                            )} */}
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-[#C5A880] transition-transform duration-300 ${
                              isExpanded ? 'rotate-180 text-[#D4AF37]' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && hasItems && (
                            <motion.div
                              key={`content-${section.title}`}
                              initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                              animate={{
                                height: 'auto',
                                opacity: 1,
                                transition: {
                                  height: {
                                    duration: prefersReducedMotion ? 0 : 0.28,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                  },
                                  opacity: {
                                    duration: prefersReducedMotion ? 0 : 0.2,
                                    delay: prefersReducedMotion ? 0 : 0.05,
                                  },
                                },
                              }}
                              exit={
                                prefersReducedMotion
                                  ? { opacity: 0 }
                                  : {
                                      height: 0,
                                      opacity: 0,
                                      transition: {
                                        height: {
                                          duration: 0.22,
                                          ease: [0.04, 0.62, 0.23, 0.98],
                                        },
                                        opacity: { duration: 0.15 },
                                      },
                                    }
                              }
                              className="overflow-hidden bg-[#0A111F]/80 border-t border-white/5"
                            >
                              <div className="p-2 space-y-1">
                                {section.items?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => dispatch(setMobileMenuOpen(false))}
                                    className="group flex items-center justify-between p-2.5 rounded-md hover:bg-[#1A253D] transition-colors"
                                  >
                                    <div className="flex flex-col pr-2">
                                      <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                                        {subItem.name}
                                      </span>
                                      {subItem.description && (
                                        <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300 mt-0.5 line-clamp-1">
                                          {subItem.description}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-1.5 shrink-0">
                                      {subItem.badge && (
                                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#C5A880]/15 text-[#D4AF37] border border-[#C5A880]/30">
                                          {subItem.badge}
                                        </span>
                                      )}
                                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
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
