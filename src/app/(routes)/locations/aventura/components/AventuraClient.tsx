'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  AventuraConsultationForm,
} from '@/components/locations';
import { ServicePhilosophy } from '@/components/services/sections/ServicePhilosophy';
import { ServiceScopeGrid } from '@/components/services/sections/ServiceScopeGrid';
import { ServiceProcessGrid } from '@/components/services/sections/ServiceProcessGrid';
import { ServiceWhyMassive } from '@/components/services/sections/ServiceWhyMassive';
import { ServiceFAQ } from '@/components/services/sections/ServiceFAQ';
import { aventuraData } from '@/data/locations/aventuraData';

export const AventuraClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={aventuraData.hero} />

      {/* 2. Philosophy & High-Net-Worth Profile Statement (Screen 2) */}
      <ServicePhilosophy data={aventuraData.philosophy} />

      {/* 3. Security Services for Aventura (Screen 3) */}
      <ServiceScopeGrid data={aventuraData.servicesGrid} />

      {/* 4. International Client Protection (Screen 4) */}
      <LocationSplitSection data={aventuraData.internationalProtection} />

      {/* 5. Aventura Communities We Serve (Screen 5) */}
      <LocationSplitSection data={aventuraData.communities} />

      {/* 6. Coverage Area & Corridor (Screen 6) */}
      <LocationCorridorCoverage data={aventuraData.corridorCoverage} />

      {/* 7. How We Work Process Roadmap (Screen 7) */}
      <ServiceProcessGrid data={aventuraData.process} />

      {/* 8. Why Massive Protective (Screen 8) */}
      <ServiceWhyMassive data={aventuraData.whyMassive} />

      {/* 9. Nearby Corridor Coverage (Screen 9) */}
      <LocationNearbyCoverage data={aventuraData.nearbyCoverage} />

      {/* 10. Aventura Security FAQ (Screen 10 / Image 1) */}
      <ServiceFAQ data={aventuraData.faq} />

      {/* 11. Dedicated Aventura Consultation Form (Screen 11 / Image 5) */}
      <AventuraConsultationForm id="consultation-form" />

      {/* 12. Nearby Locations (Screen 12 / Image 2) */}
      <LocationNearbyLocations data={aventuraData.nearbyLocations} />
    </div>
  );
};
