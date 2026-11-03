'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  MiamiBeachConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { miamiBeachData } from '@/data/locations/miamiBeachData';

export const MiamiBeachClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={miamiBeachData.hero} />

      {/* 2. Philosophy & Context Statement (Screen 2) */}
      <ServicePhilosophy data={miamiBeachData.philosophy} />

      {/* 3. Scope Grid: What We Offer Here (Screen 3) */}
      <div id="services">
        <ServiceScopeGrid data={miamiBeachData.servicesGrid} />
      </div>

      {/* 4. Private Island Security: Star, Palm, Hibiscus Islands (Screen 4) */}
      <LocationSplitSection data={miamiBeachData.privateIslands} />

      {/* 5. Art Basel & Event Season Security (Screen 5) */}
      <LocationSplitSection data={miamiBeachData.artBasel} />

      {/* 6. Understanding Miami Beach: South Beach, Mid-Beach, Islands (Image 1) */}
      <LocationSplitSection data={miamiBeachData.understanding} />

      {/* 7. Coverage Area: Miami Beach and Biscayne Bay Corridor (Image 2) */}
      <LocationCorridorCoverage data={miamiBeachData.coverageCorridor} />

      {/* 8. How We Work: Planned. Professional. Completely Confidential (Image 3 Top) */}
      <ServiceProcessGrid data={miamiBeachData.process} />

      {/* 9. Why Massive Protective: South Florida Licensed & Celebrity-Ready (Image 3 Bottom) */}
      <ServiceWhyMassive data={miamiBeachData.whyMassive} />

      {/* 10. Nearby Coverage: Miami-Dade and Broward (Image 4) */}
      <LocationNearbyCoverage data={miamiBeachData.nearbyCoverage} />

      {/* 11. Dedicated Miami Beach Consultation Form (Image 5 - Isolated) */}
      <MiamiBeachConsultationForm id="consultation-form" />

      {/* 12. Miami Beach Security FAQ (Uploaded Image 1) */}
      <ServiceFAQ data={miamiBeachData.faq} />

      {/* 13. Related Locations (Uploaded Image 2) */}
      <LocationNearbyLocations data={miamiBeachData.relatedLocations} />
    </div>
  );
};


