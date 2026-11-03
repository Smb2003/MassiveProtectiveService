'use client';

import React from 'react';
import {
  LocationHero,
  LocationPlanningScenarios,
  LocationSettingDetail,
  LocationPlanningBeyond,
  JacksonvilleConsultationForm,
  LocationNearbyLocations,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { jacksonvilleData } from '@/data/locations/jacksonvilleData';

export const JacksonvilleClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={jacksonvilleData.hero} />

      {/* 2. Philosophy & Discretion Statement: Light Theme 2-Column (Screen 2) */}
      <ServicePhilosophy data={jacksonvilleData.philosophy} />

      {/* 3. Scope Grid: Protection for every part of your life (Screen 3) */}
      <div id="services">
        <ServiceScopeGrid data={jacksonvilleData.servicesGrid} />
      </div>

      {/* 4. Planning for the realities of Jacksonville: Scenarios (Screen 4 Top) */}
      <LocationPlanningScenarios data={jacksonvilleData.scenarios} />

      {/* 5. Understand the setting. Plan the detail: Setting Breakdown (Screen 4 Bottom) */}
      <LocationSettingDetail data={jacksonvilleData.settingDetail} />

      {/* 6. Planning beyond Jacksonville: Regional Hubs & Consultations (Screen Remaining 1) */}
      <LocationPlanningBeyond data={jacksonvilleData.planningBeyond} />

      {/* 7. Jacksonville Security FAQ (Screen 5) */}
      <ServiceFAQ data={jacksonvilleData.faq} />

      {/* 8. Closing CTA: Discreet protection, planned around you (Screen Remaining 2) */}
      <ServiceClosingCTA data={jacksonvilleData.closingCTA} />

      {/* 9. Dedicated Jacksonville Consultation Form (Screen 6 / Action CTA) */}
      <JacksonvilleConsultationForm id="consultation-form" />

      {/* 10. Regional Network & Delray Beach Command */}
      <LocationNearbyLocations data={jacksonvilleData.nearbyLocations} />
    </div>
  );
};
