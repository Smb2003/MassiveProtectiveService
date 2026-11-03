'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  DelrayBeachConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { delrayBeachData } from '@/data/locations/delrayBeachData';

export const DelrayBeachClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={delrayBeachData.hero} />

      {/* 2. Philosophy & HQ Statement (Screen 2) */}
      <ServicePhilosophy data={delrayBeachData.philosophy} />

      {/* 3. Security Services Available in Delray Beach & Boynton Beach (Screen 3) */}
      <div id="services">
        <ServiceScopeGrid data={delrayBeachData.servicesGrid} />
      </div>

      {/* 4. Local Knowledge & Old School Square Feature (Screen 4) */}
      <LocationSplitSection data={delrayBeachData.localKnowledge} />

      {/* 5. Also Serving: Palm Beach County Coverage (Screen 5) */}
      <LocationNearbyCoverage data={delrayBeachData.nearbyCoverage} />

      {/* 6. Process Roadmap: From Your First Call to Your First Officer On-Site (Screen 6) */}
      <ServiceProcessGrid data={delrayBeachData.process} />

      {/* 7. Why Choose Massive: A Local Agency. Not a Regional Franchise. (Screen 7) */}
      <ServiceWhyMassive data={delrayBeachData.whyChooseMassive} />

      {/* 8. Dedicated Delray Beach Consultation Form (Screen 8) */}
      <DelrayBeachConsultationForm id="consultation-form" />

      {/* 9. Delray Beach Security FAQ (Screen 9) */}
      <ServiceFAQ data={delrayBeachData.faq} />

      {/* 10. Nearby Locations: Serving All of Palm Beach County (Screen 10) */}
      <LocationNearbyLocations data={delrayBeachData.nearbyLocations} />
    </div>
  );
};
