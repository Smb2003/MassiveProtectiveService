'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ShieldCheck, MapPin, Phone, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/[0.08] text-[#F5F5F7] overflow-hidden">
      {/* Main Footer Links & Context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand & Agency Identity */}
        <div className="space-y-4">
          <BrandLogo />
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
            Massive Protective Services delivers sovereign, tactical-luxury personal protection, armed convoy transport, and estate defense for ultra-high-net-worth principals, family offices, and VIPs across South Florida.
          </p>

          <div className="pt-2 text-xs font-mono space-y-1 text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Headquarters: Delray Beach, Florida</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <a href="tel:5615088833" className="hover:text-white transition-colors">
                (561) 508-8833 (24/7 Priority)
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Armed Protection Services */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#D4AF37] mb-4">
            Specialized Services
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-sans">
            <li>
              <Link href="/executive-protection" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                Executive Protection (Armed Driving)
              </Link>
            </li>
            <li>
              <Link href="/estate-security" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                Estate & Residential Security
              </Link>
            </li>
            <li>
              <Link href="/celebrity-protection" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                VIP & Celebrity Protection
              </Link>
            </li>
            <li>
              <Link href="/event-security" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                High-Stakes Event Security (Art Basel / The Season)
              </Link>
            </li>
            <li>
              <Link href="/armed-officers" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                Class G Armed Security Officers
              </Link>
            </li>
            <li>
              <Link href="/concierge-security" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                Elite Concierge & Penthouse Security
              </Link>
            </li>
            <li>
              <Link href="/corporate-security" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                Corporate Security & Boardroom Defense
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Jurisdictional Territory */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#D4AF37] mb-4">
            Tri-County Operational Grid
          </h4>
          <div className="space-y-3 text-xs sm:text-sm text-zinc-400 font-sans">
            <div>
              <span className="font-semibold text-zinc-200 block">Palm Beach County:</span>
              <span className="text-zinc-500 text-xs">Palm Beach Island, Boca Raton, Delray Beach, Jupiter, Wellington equestrian compounds.</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-200 block">Broward County:</span>
              <span className="text-zinc-500 text-xs">Fort Lauderdale Intracoastal, Las Olas, Weston estates, yacht basin security.</span>
            </div>
            <div>
              <span className="font-semibold text-zinc-200 block">Miami-Dade County:</span>
              <span className="text-zinc-500 text-xs">Star Island, Indian Creek, Fisher Island, Brickell, Coral Gables, Design District.</span>
            </div>
          </div>
        </div>

        {/* Col 4: Statutory Compliance & Protocol */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#D4AF37] mb-4">
            Compliance & Licensing
          </h4>
          <div className="space-y-3 text-xs text-zinc-400">
            <div className="p-3 rounded bg-[#121212] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-zinc-300 font-mono font-medium">
                <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
                FDACS LICENSE #81400200
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-500">
                Licensed and regulated under Chapter 493, Florida Statutes by the Florida Department of Agriculture and Consumer Services (Division of Licensing).
              </p>
            </div>

            <div className="p-3 rounded bg-[#121212] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-zinc-300 font-mono font-medium">
                <FileText className="w-3.5 h-3.5 text-[#C5A880]" />
                Strict Non-Disclosure Protocol
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-500">
                All personnel operate under legally binding NDAs and classified security clearances. Client confidentiality is sovereign.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Footer Bottom Bar */}
      <div className="w-full border-t border-white/[0.06] py-6 px-4 sm:px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Massive Protective Services (MPS). All Rights Reserved. Regulated under Chapter 493, Florida Statutes.
          </div>

          <div className="flex items-center gap-5">
            <Link href="/testimonials" className="hover:text-[#D4AF37] transition-colors">
              Client Testimonials
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
              Terms of Engagement
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/licensing" className="hover:text-[#D4AF37] transition-colors">
              Licensing #81400200
            </Link>
            <span className="text-zinc-700">•</span>
            <span className="text-[#C5A880]">FDACS Division of Licensing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
