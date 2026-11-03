'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  GulfStreamConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { gulfStreamData } from '@/data/locations/gulfStreamData';

export const GulfStreamClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={gulfStreamData.hero} />

      {/* 2. Philosophy & Statement (Screen 2) */}
      <ServicePhilosophy data={gulfStreamData.philosophy} />

      {/* 3. Scope Grid: What We Offer Here (Screen 3) */}
      <div id="services">
        <ServiceScopeGrid data={gulfStreamData.servicesGrid} />
      </div>

      {/* 4. Understanding Gulf Stream: Split Section (Screen 4) */}
      <LocationSplitSection data={gulfStreamData.understanding} />

      {/* 5. Coverage Area: Boxed Corridor Coverage (Screen 5) */}
      <LocationCorridorCoverage data={gulfStreamData.corridorCoverage} />

      {/* 6. Process Grid: How We Work (Screen 6) */}
      <ServiceProcessGrid data={gulfStreamData.process} />

      {/* 7. Why Massive Protective: Two Miles Away (Screen 7) */}
      <ServiceWhyMassive data={gulfStreamData.whyMassive} />

      {/* 8. Full Barrier Island Corridor Coverage (Screen 8) */}
      <LocationNearbyCoverage data={gulfStreamData.nearbyCoverage} />

      {/* 9. Dedicated Gulf Stream Consultation Form (Screen 9) */}
      <GulfStreamConsultationForm id="consultation-form" />

      {/* 10. Gulf Stream Security FAQ (Screen 10) */}
      <ServiceFAQ data={gulfStreamData.faq} />

      {/* 11. Nearby Locations: Central Palm Beach Barrier Island (Screen 11) */}
      <LocationNearbyLocations data={gulfStreamData.nearbyLocations} />
    </div>
  );
};
