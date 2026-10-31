import React from 'react';
import type { Metadata } from 'next';
import {
  ArmedSecurityHeroSection,
  ArmedSecurityPhilosophySection,
  WhereWeDeployGridSection,
  ClassGLicenseMeaningSection,
  WhoHiresArmedSecuritySection,
  ArmedSecurityProcessSection,
  WhyMassiveArmedSection,
  ArmedSecurityServiceAreaSection,
  ArmedSecurityRelatedServicesSection,
  ArmedSecurityFAQSection,
  ArmedSecurityFormSection,
  ArmedSecurityCTASection,
} from './components';

export const metadata: Metadata = {
  title: 'Armed Security Guard Services in South Florida | Massive Protective Services',
  description:
    'Florida-licensed Class G armed officers for estates, businesses, events and executive details across Palm Beach, Broward and Miami-Dade. FDACS License B1400200.',
  openGraph: {
    title: 'Armed Security Guard Services in South Florida | Massive Protective Services',
    description:
      'Florida Class G armed protection for private estates, corporate premises, events, and executive details. Zero unarmed guards.',
    url: 'https://massiveprotectiveservices.com/armed-officers',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ArmedOfficersPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero with Breadcrumb & Dual Action Buttons */}
      <ArmedSecurityHeroSection />

      {/* 2. Philosophy Serif Statement */}
      <ArmedSecurityPhilosophySection />

      {/* 3. Where We Deploy: 6 High-Stakes Environments */}
      <WhereWeDeployGridSection />

      {/* 4. The Florida Standard: What a Class G License Actually Means */}
      <ClassGLicenseMeaningSection />

      {/* 5. Who Hires Armed Security: 3 South Florida Client Types */}
      <WhoHiresArmedSecuritySection />

      {/* 6. How We Deploy: 4-Step Process from Consultation to Officer On-Site */}
      <ArmedSecurityProcessSection />

      {/* 7. Why Massive Protective: 3 Core Pillars */}
      <WhyMassiveArmedSection />

      {/* 8. Service Area: Tri-County Grid & Coastal Cities */}
      <ArmedSecurityServiceAreaSection />

      {/* 11. Dedicated Request Form: We Respond Within 2 Hours */}
      <ArmedSecurityFormSection />
      
      {/* 10. Armed Security FAQ: 5 Expandable Questions & Answers */}
      <ArmedSecurityFAQSection />

      {/* 9. Related Services: Complete Protection Plan Layers */}
      <ArmedSecurityRelatedServicesSection />

    </div>
  );
}
