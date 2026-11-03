'use client';

import React from 'react';
import {
  LocationHero,
  LocationPlanningScenarios,
  LocationSettingDetail,
  LocationPlanningBeyond,
  OrlandoConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { orlandoData } from '@/data/locations/orlandoData';

export const OrlandoClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Image 1) */}
      <LocationHero data={orlandoData.hero} />

      {/* 2. Considered Planning 2-Column Prose (Image 2 - Light Theme) */}
      <ServicePhilosophy data={orlandoData.philosophy} />

      {/* 3. Protection for Every Part of Your Life (Image 3 - Dark Theme) */}
      <div id="services">
        <ServiceScopeGrid data={orlandoData.scopeGrid} />
      </div>

      {/* 4. Planning for the Realities of Orlando (Image 4 - Light Theme) */}
      <LocationPlanningScenarios data={orlandoData.planningScenarios} />

      {/* 5. Your Locations. A Considered Plan (Image 5 - Light Theme Boxed Grid) */}
      <LocationSettingDetail data={orlandoData.settingDetail} />

      {/* 6. Your Questions, Answered (Screen 6 - Light Theme FAQ) */}
      <ServiceFAQ data={orlandoData.faq} />

      {/* 7. Looking Beyond Orlando (Screen 7 - Light Theme 2-Card Beyond) */}
      <LocationPlanningBeyond data={orlandoData.planningBeyond} />

      {/* 8. Closing CTA Banner (Screen 8 - Dark Navy CTA) */}
      <ServiceClosingCTA data={orlandoData.closingCta} />

      {/* 9. Dedicated Orlando Confidential Consultation Form (Isolated) */}
      <OrlandoConsultationForm id="consultation-form" />
    </div>
  );
};
