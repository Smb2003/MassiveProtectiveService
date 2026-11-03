'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  HillsboroBeachConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { hillsboroBeachData } from '@/data/locations/hillsboroBeachData';

export const HillsboroBeachClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={hillsboroBeachData.hero} />

      {/* 2. Philosophy & Statement (Screen 2) */}
      <ServicePhilosophy data={hillsboroBeachData.philosophy} />

      {/* 3. Scope Grid: What We Offer Here (Screen 3) */}
      <div id="services">
        <ServiceScopeGrid data={hillsboroBeachData.servicesGrid} />
      </div>

      {/* 4. Understanding Hillsboro Beach: Split Section (Screen 4) */}
      <LocationSplitSection data={hillsboroBeachData.understanding} />

      {/* 5. Coverage Area: Boxed Corridor Coverage (Screen 5) */}
      <LocationCorridorCoverage data={hillsboroBeachData.corridorCoverage} />

      {/* 6. Process Grid: How We Work (Screen 6) */}
      <ServiceProcessGrid data={hillsboroBeachData.process} />

      {/* 7. Why Massive Protective: 15 Minutes Away (Screen 7) */}
      <ServiceWhyMassive data={hillsboroBeachData.whyMassive} />

      {/* 8. Full Coastal Corridor Coverage (Screen 8) */}
      <LocationNearbyCoverage data={hillsboroBeachData.nearbyCoverage} />

      {/* 9. Dedicated Hillsboro Beach Consultation Form (Screen 9) */}
      <HillsboroBeachConsultationForm id="consultation-form" />

      {/* 10. Hillsboro Beach Security FAQ (Screen 10) */}
      <ServiceFAQ data={hillsboroBeachData.faq} />

      {/* 11. Nearby Locations: South Florida Coastal Corridor (Screen 11) */}
      <LocationNearbyLocations data={hillsboroBeachData.nearbyLocations} />
    </div>
  );
};
