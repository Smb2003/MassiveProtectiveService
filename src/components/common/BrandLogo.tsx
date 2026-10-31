'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showSubtitle = true,
}) => {
  return (
    <Link
      href="/"
      aria-label="Massive Protective Services - Elite Armed Security Home"
      className={`group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded transition-transform duration-200 hover:scale-[1.01] ${className}`}
    >
      {/* Heraldic Lion Crest Badge from Brand Reference */}
      <div className="relative w-11 h-11 rounded-sm overflow-hidden bg-[#0D1527] border border-[#C5A880]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_22px_rgba(212,175,55,0.35)] transition-all shrink-0">
        <Image
          src="/images/mps_lion_logo.jpg"
          alt="Massive Protective Services Lion Emblem"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
        {/* Subtle inner gold vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent pointer-events-none" />
      </div>

      {/* Brand Wordmark - Serif Typography */}
      <div className="flex flex-col">
        <div className="font-serif tracking-[0.2em] uppercase leading-none">
          <span className="text-[14px] sm:text-[15px] font-bold text-white group-hover:text-[#F5F5F7] transition-colors">
            MASSIVE
          </span>
        </div>
        <div className="font-serif tracking-[0.22em] uppercase leading-tight">
          <span className="text-[12px] sm:text-[13px] font-normal text-zinc-300">
            PROTECTIVE
          </span>
        </div>
        <div className="font-serif tracking-[0.26em] uppercase leading-none">
          <span className="text-[10px] sm:text-[11px] font-light text-[#C5A880]">
            SERVICES
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BrandLogo;
