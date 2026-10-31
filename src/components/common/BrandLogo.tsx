'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'lg',
}) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
    xl: 'h-16 sm:h-20',
  };

  return (
    <Link
      href="/"
      aria-label="Massive Protective Services - Elite Armed Security Home"
      className={`group relative inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <div
        className={`relative ${heightClasses[size]} w-auto aspect-[2.44/1] overflow-hidden rounded-sm`}
      >
        <Image
          src="/images/Massive%20Protective%20Services%20Lion%20Logo.png"
          alt="Massive Protective Services"
          fill
          priority
          sizes="(max-width: 640px) 160px, 240px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
};

export default BrandLogo;
