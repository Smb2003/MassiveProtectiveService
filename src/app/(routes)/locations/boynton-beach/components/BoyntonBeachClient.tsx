'use client';

import React from 'react';
import {
  LocationHero,
  LocationProximityAdvantage,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceWhyMassive,
  ServiceCredentials,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { boyntonBeachData } from '@/data/locations/boyntonBeachData';

export const BoyntonBeachClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={boyntonBeachData.hero} />

      {/* 2. Philosophy & Home Market Statement (Screen 2) */}
      <ServicePhilosophy data={boyntonBeachData.philosophy} />

      {/* 3. The Proximity Advantage: Delray HQ Neighbor (Screen 3) */}
      <LocationProximityAdvantage data={boyntonBeachData.proximityAdvantage} />

      {/* 4. Armed Security Services for Residents & Businesses (Screen 4) */}
      <div id="services">
        <ServiceScopeGrid data={boyntonBeachData.servicesGrid} />
      </div>

      {/* 5. About Boynton Beach: Growing Executive Market (Screen 5) */}
      <ServicePhilosophy data={boyntonBeachData.aboutBoynton} />

      {/* 6. What Separates Us in the Boynton Beach Market (Screen 6 / Image 1) */}
      <ServiceWhyMassive data={boyntonBeachData.whatSeparatesUs} />

      {/* 7. Verified Licensing & Agency Credentials (Screen 7 / Image 2) */}
      <ServiceCredentials data={boyntonBeachData.credentials} />

      {/* 8. Boynton Beach Security FAQ (Screen 8 / Image 3) */}
      <ServiceFAQ data={boyntonBeachData.faq} />

      {/* 9. Closing Action: Your Neighbor, Not a Vendor (Screen 9 / Image 4) */}
      <ServiceClosingCTA data={boyntonBeachData.closingCta} />
    </div>
  );
};
