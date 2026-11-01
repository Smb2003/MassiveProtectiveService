import React from 'react';
import type { Metadata } from 'next';
import { VIPProtectionClient } from './components/VIPProtectionClient';

export const metadata: Metadata = {
  title: 'VIP & Celebrity Protection in Miami & South Florida | Massive Protective Services',
  description:
    'Discreet close protection for public figures, touring artists, visiting athletes, and UHNW principals across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.',
  openGraph: {
    title: 'VIP & Celebrity Protection in Miami & South Florida | Massive Protective Services',
    description:
      'From hotel arrivals to nightlife, events, and private travel. Licensed armed close protection with strict non-disclosure agreements.',
    url: 'https://massiveprotectiveservices.com/vip-celebrity-protection',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function VIPProtectionPage() {
  return <VIPProtectionClient />;
}
