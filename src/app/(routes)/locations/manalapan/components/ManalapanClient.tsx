'use client';

import React from 'react';
import {
  LocationHero,
  ManalapanConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceAudienceGrid,
  ServiceScopeGrid,
  ServiceWhyMassive,
  ServiceCredentials,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { manalapanData } from '@/data/locations/manalapanData';

export const ManalapanClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={manalapanData.hero} />

      {/* 2. Town Understanding (Screen 2) */}
      <ServicePhilosophy data={manalapanData.townUnderstanding} />

      {/* 3. Seasonal & Vacant Estate Security (Screen 3) */}
      <ServiceAudienceGrid data={manalapanData.seasonalSecurity} />

      {/* 4. Armed Security Services for Manalapan Estates (Screen 4) */}
      <div id="services">
        <ServiceScopeGrid data={manalapanData.servicesGrid} />
      </div>

      {/* 5. What Makes Us the Right Firm for Manalapan (Screen 5) */}
      <ServiceWhyMassive data={manalapanData.whyMassive} />

      {/* 6. About Manalapan & Verified Licensing Credentials (Image 1) */}
      <ServiceCredentials data={manalapanData.aboutManalapan} />

      {/* 7. Common Questions from Manalapan Estate Owners FAQ (Image 2) */}
      <ServiceFAQ data={manalapanData.faq} />

      {/* 8. Confidential Consultation CTA Banner (Image 3) */}
      <ServiceClosingCTA data={manalapanData.closingCta} />

      {/* 9. Dedicated Manalapan Consultation Form (Isolated) */}
      <ManalapanConsultationForm id="consultation-form" />
    </div>
  );
};
