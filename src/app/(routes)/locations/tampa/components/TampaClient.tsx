'use client';

import React from 'react';
import {
  LocationHero,
  LocationPlanningScenarios,
  LocationSettingDetail,
  LocationPlanningBeyond,
  TampaConsultationForm,
} from '@/components/locations';
import {
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceFAQ,
  ServiceClosingCTA,
} from '@/components/services';
import { tampaData } from '@/data/locations/tampaData';

export const TampaClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18]">
      {/* 1. Hero Section (Screen 1) */}
      <LocationHero data={tampaData.hero} />

      {/* 2. Considered Planning (Screen 2 - Light Theme) */}
      <ServicePhilosophy data={tampaData.philosophy} />

      {/* 3. Protection for Every Part of Your Life (Screen 3 - Dark Theme) */}
      <div id="services">
        <ServiceScopeGrid data={tampaData.scopeGrid} />
      </div>

      {/* 4. Planning for the Realities of Tampa (Screen 4 - Light Theme) */}
      <LocationPlanningScenarios data={tampaData.planningScenarios} />

      {/* 5. Your Itinerary. A Considered Plan (Screen 5 - Light Theme) */}
      <LocationSettingDetail data={tampaData.settingDetail} />

      {/* 6. Your Questions, Answered (Screen 6 - Light Theme) */}
      <ServiceFAQ data={tampaData.faq} />

      {/* 7. Planning Beyond the City (Screen 7 - Light Theme) */}
      <LocationPlanningBeyond data={tampaData.planningBeyond} />

      {/* 8. Closing CTA (Screen 8 - Dark Theme) */}
      <ServiceClosingCTA data={tampaData.closingCta} />

      {/* 9. Dedicated Tampa Confidential Consultation Form */}
      <TampaConsultationForm id="consultation-form" />
    </div>
  );
};
