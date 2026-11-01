import React from 'react';
import type { Metadata } from 'next';
import { SchoolSecurityClient } from './components/SchoolSecurityClient';

export const metadata: Metadata = {
  title: 'School Security Services in South Florida | Massive Protective Services',
  description:
    'A considered, welcoming security presence for school communities, campus access, visitor check-in, and emergency liaison across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.',
  openGraph: {
    title: 'School Security Services in South Florida | Massive Protective Services',
    description:
      'Proposed security support for private and independent schools in South Florida. Arrival & dismissal coordination, perimeter observation, and welcoming campus protection.',
    url: 'https://massiveprotectiveservices.com/school-security',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function SchoolSecurityPage() {
  return <SchoolSecurityClient />;
}
