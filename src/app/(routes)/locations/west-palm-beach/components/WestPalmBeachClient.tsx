'use client';

import React from 'react';
import {
  LocationHero,
  LocationProximityAdvantage,
  WestPalmBeachConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceWhyMassive,
  ServiceCredentials,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { westPalmBeachData } from '@/data/locations/westPalmBeachData';

export const WestPalmBeachClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={westPalmBeachData.hero} />

      {/* 2. The County Seat, the Business District and the Airport Gateway (Screen 2) */}
      <ServicePhilosophy data={westPalmBeachData.countySeat} />

      {/* 3. Palm Beach International Airport — The Most Exposed Moment (Screen 3) */}
      <LocationProximityAdvantage data={westPalmBeachData.airportSecurity} />

      {/* 4. Armed Security and Executive Protection Across West Palm Beach (Screen 4) */}
      <div id="services">
        <ServiceScopeGrid data={westPalmBeachData.servicesScope} />
      </div>

      {/* 5. Where Palm Beach County's Professional Infrastructure Operates (Screen 5) */}
      <ServicePhilosophy data={westPalmBeachData.professionalMarket} />

      {/* 6. Why Massive Protective Services / What We Bring (Remaining Screen 1) */}
      <ServiceWhyMassive data={westPalmBeachData.whatWeBring} />

      {/* 7. Verified Licensing & Agency Credentials Strip (Remaining Screen 2) */}
      <ServiceCredentials data={westPalmBeachData.credentials} />

      {/* 8. West Palm Beach Security FAQ (Remaining Screen 3) */}
      <ServiceFAQ data={westPalmBeachData.faq} />

      {/* 10. Dedicated West Palm Beach Confidential Consultation Form */}
      <WestPalmBeachConsultationForm id="consultation-form" />

      {/* 9. Closing Action: Executive Security Consultation (Remaining Screen 4) */}
      <ServiceClosingCTA data={westPalmBeachData.closingCta} />
    </div>
  );
};
