import React from 'react';
import type { Metadata } from 'next';
import {
  HeroSection,
  WhoWeAreSection,
  ServicesGrid,
  WhoWeProtectSection,
  WhyMassiveProtectiveSection,
  WhereWeOperateSection,
  AboutMPSSection,
  TestimonialsSection,
  ProcessSection,
  FinalCTASection,
} from './components';

export const metadata: Metadata = {
  title: 'Massive Protective Services | Armed Security & Executive Protection South Florida',
  description:
    'A licensed private security firm headquartered in Delray Beach — serving estates, executives, events and organizations across Palm Beach, Broward and Miami-Dade Counties. FDACS License B1400200.',
};

export default function HomePage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero Section (Screenshot 1) */}
      <HeroSection />

      {/* 2. WHO WE ARE (Screenshot 2) */}
      <WhoWeAreSection />

      {/* 3. WHAT WE DO (Screenshot 3) */}
      <ServicesGrid />

      {/* 4. WHO WE PROTECT & Credential Stat Bar (Screenshot 4) */}
      <WhoWeProtectSection />

      {/* 5. WHY MASSIVE PROTECTIVE (Screenshot 5) */}
      <WhyMassiveProtectiveSection />

      {/* 6. WHERE WE OPERATE & Coastal Tactical Map (Screenshot 6) */}
      <WhereWeOperateSection />

      {/* 7. ABOUT MASSIVE PROTECTIVE SERVICES & Company Essentials (Screenshot 7) */}
      <AboutMPSSection />

      {/* 8. WHAT OUR CLIENTS SAY (Screenshot 8) */}
      <TestimonialsSection />

      {/* 9. HOW IT WORKS (Screenshot 9) */}
      <ProcessSection />

      {/* 10. READY TO DISCUSS YOUR SECURITY? (Screenshot 10) */}
      <FinalCTASection />
    </div>
  );
}
