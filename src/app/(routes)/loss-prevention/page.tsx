import React from 'react';
import type { Metadata } from 'next';
import { LossPreventionClient } from './components/LossPreventionClient';

export const metadata: Metadata = {
  title: 'Loss Prevention & Retail Security in South Florida | Massive Protective Services',
  description:
    'Observant retail security. Clear reporting. A considered approach to protecting your inventory, people, and customer experience across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.',
  openGraph: {
    title: 'Loss Prevention & Retail Security in South Florida | Massive Protective Services',
    description:
      'Protect what you have built. Respect the way you do business. Observant retail security, camera observation, stockroom controls, and visible deterrence.',
    url: 'https://massiveprotectiveservices.com/loss-prevention',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function LossPreventionPage() {
  return <LossPreventionClient />;
}
