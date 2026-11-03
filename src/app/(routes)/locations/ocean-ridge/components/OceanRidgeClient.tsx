'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  OceanRidgeConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { oceanRidgeData } from '@/data/locations/oceanRidgeData';

export const OceanRidgeClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Image 1) */}
      <LocationHero data={oceanRidgeData.hero} />

      {/* 2. Philosophy Section (Image 2) */}
      <ServicePhilosophy data={oceanRidgeData.philosophy} />

      {/* 3. Scope Grid (Image 3: What We Offer Here) */}
      <div id="services">
        <ServiceScopeGrid data={oceanRidgeData.scopeGrid} />
      </div>

      {/* 4. Barrier Island Enclave Split Section (Image 4: Why Ocean Ridge is Different) */}
      <LocationSplitSection data={oceanRidgeData.barrierIslandProfile} />

      {/* 5. Coverage Area Corridor (Image 5 Top) */}
      <LocationCorridorCoverage data={oceanRidgeData.corridorCoverage} />

      {/* 6. How We Work Process (Image 5 Bottom & Screen 1 Top) */}
      <ServiceProcessGrid data={oceanRidgeData.process} />

      {/* 7. Why Massive Protective (Screen 1 Bottom) */}
      <ServiceWhyMassive data={oceanRidgeData.whyMassive} />

      {/* 8. Nearby Coverage Corridor (Screen 2) */}
      <LocationNearbyCoverage data={oceanRidgeData.nearbyCoverage} />

      {/* 9. Dedicated Isolated Ocean Ridge Estate Consultation Form (Screen 3) */}
      <OceanRidgeConsultationForm id="consultation-form" />

      {/* 10. Security FAQ Accordion (Screen 4) */}
      <ServiceFAQ data={oceanRidgeData.faq} />

      {/* 11. Nearby Locations Grid (Screen 5) */}
      <LocationNearbyLocations data={oceanRidgeData.nearbyLocations} />
    </div>
  );
};
