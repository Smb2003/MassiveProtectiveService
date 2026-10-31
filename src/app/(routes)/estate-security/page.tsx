import React from 'react';
import type { Metadata } from 'next';
import { EstateSecurityClient } from './components/EstateSecurityClient';

export const metadata: Metadata = {
  title: 'Estate & Residential Security Services in South Florida | Massive Protective Services',
  description:
    'Armed officers, access control, overnight coverage and private event protection for Palm Beach, Boca Raton, Manalapan and the South Florida coast. FDACS License B1400200.',
  openGraph: {
    title: 'Estate & Residential Security Services in South Florida | Massive Protective Services',
    description:
      'Your home is your most private space. Who’s protecting it while you sleep — and while you’re away? Licensed residential and estate security across South Florida.',
    url: 'https://massiveprotectiveservices.com/estate-security',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EstateSecurityPage() {
  return <EstateSecurityClient />;
}
// Force cache revalidation

