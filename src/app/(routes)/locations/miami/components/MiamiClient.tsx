'use client';

import React from 'react';
import {
  LocationHero,
  MiamiConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceAudienceGrid,
  ServiceScopeGrid,
  ServiceWhyMassive,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { miamiData } from '@/data/locations/miamiData';

export const MiamiClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={miamiData.hero} />

      {/* 2. Security Environment 2-Column Prose (Screen 2) */}
      <ServicePhilosophy data={miamiData.environmentPhilosophy} />

      {/* 3. International Principal Protection (Screen 3) */}
      <ServiceAudienceGrid data={miamiData.internationalProtection} />

      {/* 4. Where We Operate in Miami (Screen 4) */}
      <ServiceScopeGrid data={miamiData.operatingAreas} />

      {/* 5. Our Services in Miami (Screen 5) */}
      <div id="services">
        <ServiceScopeGrid data={miamiData.servicesGrid} />
      </div>

      {/* 6. What Makes Us the Right Firm for Miami (Image 1) */}
      <ServiceWhyMassive data={miamiData.whyMassive} />

      {/* 7. Miami Security FAQ (Image 2) */}
      <ServiceFAQ data={miamiData.faq} />

      {/* 8. Confidential Consultation Closing CTA Banner (Image 3) */}
      <ServiceClosingCTA data={miamiData.closingCta} />

      {/* 9. Dedicated Miami Consultation Form (Isolated) */}
      <MiamiConsultationForm id="consultation-form" />
    </div>
  );
};

