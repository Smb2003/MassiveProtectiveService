'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  FortLauderdaleConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { fortLauderdaleData } from '@/data/locations/fortLauderdaleData';

export const FortLauderdaleClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={fortLauderdaleData.hero} />

      {/* 2. Philosophy & Statement: Yachting Capital of the World (Screen 2) */}
      <ServicePhilosophy data={fortLauderdaleData.philosophy} />

      {/* 3. What We Offer Here: Security Services Grid (Screen 3) */}
      <div id="services">
        <ServiceScopeGrid data={fortLauderdaleData.servicesGrid} />
      </div>

      {/* 4. Yacht & Maritime Security Split Section with Stats (Screen 4) */}
      <LocationSplitSection data={fortLauderdaleData.maritimeSecurity} />

      {/* 5. Top: Neighborhoods We Serve (Screen 5 Top) */}
      <LocationSplitSection data={fortLauderdaleData.neighborhoods} />

      {/* 5. Bottom: Coverage Area & Waterfront Corridor (Screen 5 Bottom) */}
      <LocationCorridorCoverage data={fortLauderdaleData.corridorCoverage} />

      {/* 6. Process Roadmap: How We Work (Screen 6) */}
      <ServiceProcessGrid data={fortLauderdaleData.process} />

      {/* 7. Why Massive Protective: South Florida Licensed, Armed (Screen 7) */}
      <ServiceWhyMassive data={fortLauderdaleData.whyMassive} />

      {/* 8. Full Corridor Coverage: Nearby Coverage Cards (Screen 8) */}
      <LocationNearbyCoverage data={fortLauderdaleData.nearbyCoverage} />

      {/* 9. Dedicated Fort Lauderdale Consultation Form (Screen 9) */}
      <FortLauderdaleConsultationForm id="consultation-form" />

      {/* 10. Fort Lauderdale Security FAQ (Screen 10) */}
      <ServiceFAQ data={fortLauderdaleData.faq} />

      {/* 11. Nearby Locations: Serving Broward and Palm Beach Counties (Screen 11) */}
      <LocationNearbyLocations data={fortLauderdaleData.nearbyLocations} />
    </div>
  );
};
