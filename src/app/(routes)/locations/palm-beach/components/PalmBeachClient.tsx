'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  PalmBeachConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { palmBeachData } from '@/data/locations/palmBeachData';

export const PalmBeachClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={palmBeachData.hero} />

      {/* 2. Philosophy Section (Screen 2) */}
      <ServicePhilosophy data={palmBeachData.philosophy} />

      {/* 3. Security Services (Screen 3 - What We Offer Here) */}
      <div id="services">
        <ServiceScopeGrid data={palmBeachData.servicesGrid} />
      </div>

      {/* 4. The Season (Screen 4) */}
      <LocationSplitSection data={palmBeachData.theSeason} />

      {/* 5. Understanding Palm Beach (Screen 5) */}
      <LocationSplitSection data={palmBeachData.understandingPalmBeach} />

      {/* 6. Coverage Area - Corridor (Batch 2 Image 1) */}
      <LocationCorridorCoverage data={palmBeachData.corridorCoverage} />

      {/* 7. How We Work - Process (Batch 2 Image 2) */}
      <ServiceProcessGrid data={palmBeachData.process} />

      {/* 8. Why Massive Protective (Batch 2 Image 3) */}
      <ServiceWhyMassive data={palmBeachData.whyMassive} />

      {/* 9. Nearby Coverage (Batch 2 Image 4) */}
      <LocationNearbyCoverage data={palmBeachData.nearbyCoverage} />

      {/* 10. FAQ Section (Batch 3 Image 1) */}
      <ServiceFAQ data={palmBeachData.faq} />

      {/* 11. Related Locations (Batch 3 Image 2) */}
      <LocationNearbyLocations data={palmBeachData.nearbyLocations} />

      {/* 12. Dedicated Palm Beach Private Consultation Form (Batch 2 Image 5) */}
      <PalmBeachConsultationForm id="consultation-form" />
    </div>
  );
};
