'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  BocaRatonConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { bocaRatonData } from '@/data/locations/bocaRatonData';

export const BocaRatonClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={bocaRatonData.hero} />

      {/* 2. Wealth & Security Landscape Statement (Screen 2) */}
      <ServicePhilosophy data={bocaRatonData.philosophy} />

      {/* 3. Security Services Available in Boca Raton (Screen 3) */}
      <ServiceScopeGrid data={bocaRatonData.servicesGrid} />

      {/* 4. Local Knowledge & Intracoastal Estate Feature (Screen 4) */}
      <LocationSplitSection data={bocaRatonData.localKnowledge} />

      {/* 5. Gated Communities & Coverage Area (Screen 5) */}
      <LocationCorridorCoverage data={bocaRatonData.coverageCommunities} />

      {/* 6. Process Roadmap: How We Deploy in Boca Raton (Screen 6) */}
      <ServiceProcessGrid data={bocaRatonData.process} />

      {/* 7. Why Massive Protective: Palm Beach County Agency (Screen 7) */}
      <ServiceWhyMassive data={bocaRatonData.whyMassive} />

      {/* 8. Core Coverage Area Nearby (Screen 8) */}
      <LocationNearbyCoverage data={bocaRatonData.nearbyCoverage} />

      {/* 9. Dedicated Boca Raton Consultation Form (Screen 9) */}
      <BocaRatonConsultationForm id="consultation-form" />

      {/* 10. Boca Raton Security FAQ (Screen 10) */}
      <ServiceFAQ data={bocaRatonData.faq} />

      {/* 11. Nearby Locations: Palm Beach & Broward County (Screen 11) */}
      <LocationNearbyLocations data={bocaRatonData.nearbyLocations} />
    </div>
  );
};

