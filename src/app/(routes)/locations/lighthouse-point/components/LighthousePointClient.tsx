'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  LighthousePointConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { lighthousePointData } from '@/data/locations/lighthousePointData';

export const LighthousePointClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={lighthousePointData.hero} />

      {/* 2. Philosophy & High Concentration Statement (Screen 2) */}
      <ServicePhilosophy data={lighthousePointData.philosophy} />

      {/* 3. Scope Grid: What We Do Here (Screen 3) */}
      <div id="services">
        <ServiceScopeGrid data={lighthousePointData.servicesGrid} />
      </div>

      {/* 4. Local Knowledge: Unique Security Profile Split Section (Screen 4) */}
      <LocationSplitSection data={lighthousePointData.localKnowledge} />

      {/* 5. Where We Work: Boxed Corridor Coverage (Screen 5) */}
      <LocationCorridorCoverage data={lighthousePointData.coverage} />

      {/* 6. Operational Methodology: How We Work (Image 1) */}
      <ServiceProcessGrid data={lighthousePointData.process} />

      {/* 7. Why Massive Protective: Broward County Agency (Image 2) */}
      <ServiceWhyMassive data={lighthousePointData.whyMassive} />

      {/* 8. Also Serving Nearby: Regional Broward Coverage (Image 3) */}
      <LocationNearbyCoverage data={lighthousePointData.nearbyCoverage} />

      {/* 9. Dedicated Lighthouse Point Consultation Form (Image 4) */}
      <LighthousePointConsultationForm id="consultation-form" />

      {/* 10. Frequently Asked Questions: Security FAQ (Image 5) */}
      <ServiceFAQ data={lighthousePointData.faq} />

      {/* 11. Regional Coastal Corridor Coverage */}
      <LocationNearbyLocations data={lighthousePointData.nearbyLocations} />
    </div>
  );
};
