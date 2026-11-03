'use client';

import React from 'react';
import {
  LocationHero,
  LocationPlanningScenarios,
  LocationSettingDetail,
  LocationPlanningBeyond,
  NaplesConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { naplesData } from '@/data/locations/naplesData';

export const NaplesClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={naplesData.hero} />

      {/* 2. Thoughtful Planning 2-Column Prose (Screen 2 - Light Theme) */}
      <ServicePhilosophy data={naplesData.philosophy} />

      {/* 3. Protection for Every Part of Your Life (Screen 3 - Dark Theme) */}
      <div id="services">
        <ServiceScopeGrid data={naplesData.scopeGrid} />
      </div>

      {/* 4. Planned for the Rhythms of Naples (Screen 4 Top - Light Theme) */}
      <LocationPlanningScenarios data={naplesData.planningScenarios} />

      {/* 5. Start with the Details of Your Address (Screen 4 Bottom - Light Theme) */}
      <LocationSettingDetail data={naplesData.settingDetail} />

      {/* 6. Your Questions, Answered (Screen 5 Top - Light Theme) */}
      <ServiceFAQ data={naplesData.faq} />

      {/* 7. Planning Beyond the City (Screen 5 Bottom - Light Theme) */}
      <LocationPlanningBeyond data={naplesData.planningBeyond} />

      {/* 8. Closing CTA Banner (Screen 6 - Remaining Screen) */}
      <ServiceClosingCTA data={naplesData.closingCta} />

      {/* 9. Dedicated Naples Confidential Planning Consultation Form (Isolated) */}
      <NaplesConsultationForm id="consultation-form" />
    </div>
  );
};
