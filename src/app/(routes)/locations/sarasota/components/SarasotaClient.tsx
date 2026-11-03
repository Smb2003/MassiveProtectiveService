'use client';

import React from 'react';
import {
  LocationHero,
  LocationSplitSection,
  LocationCorridorCoverage,
  LocationNearbyCoverage,
  LocationNearbyLocations,
  SarasotaConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
} from '@/components/services';
import { sarasotaData } from '@/data/locations/sarasotaData';

export const SarasotaClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={sarasotaData.hero} />

      {/* 2. Philosophy Section (Screen 2) */}
      <ServicePhilosophy data={sarasotaData.philosophy} />

      {/* 3. Security Services (Screen 3 - What We Offer Here) */}
      <div id="services">
        <ServiceScopeGrid data={sarasotaData.servicesGrid} />
      </div>

      {/* 4. Casey Key & Longboat Key (Screen 4) */}
      <LocationSplitSection data={sarasotaData.barrierIslands} />

      {/* 5. The Cultural Season (Screen 5) */}
      <LocationSplitSection data={sarasotaData.culturalSeason} />

      {/* 6. Understanding Sarasota (Screen 6) */}
      <LocationSplitSection data={sarasotaData.understandingSarasota} />

      {/* 7. Coverage Area - Barrier Island Corridor (Screen 7) */}
      <LocationCorridorCoverage data={sarasotaData.corridorCoverage} />

      {/* 8. How We Work - Process (Screen 8) */}
      <ServiceProcessGrid data={sarasotaData.process} />

      {/* 9. Why Massive Protective (Screen 9) */}
      <ServiceWhyMassive data={sarasotaData.whyMassive} />

      {/* 10. Nearby Coverage - Gulf Coast and Beyond (Screen 10) */}
      <LocationNearbyCoverage data={sarasotaData.nearbyCoverage} />

      {/* 11. FAQ Section - Your questions, answered (Screen 11) */}
      <ServiceFAQ data={sarasotaData.faq} />

      {/* 12. Related Locations (Screen 12) */}
      <LocationNearbyLocations data={sarasotaData.nearbyLocations} />

      {/* 13. Dedicated Sarasota Confidential Consultation Form */}
      <SarasotaConsultationForm id="consultation-form" />
    </div>
  );
};


