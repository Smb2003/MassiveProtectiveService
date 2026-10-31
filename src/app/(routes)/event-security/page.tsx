import React from 'react';
import type { Metadata } from 'next';
import { EventSecurityClient } from './components/EventSecurityClient';

export const metadata: Metadata = {
  title: 'Event Security Services in Miami & South Florida | Massive Protective Services',
  description:
    'Armed and plain-clothes protection for galas, private parties, VIP appearances and corporate events — from Palm Beach to Boca to Miami. FDACS License B1400200.',
  openGraph: {
    title: 'Event Security Services in Miami & South Florida | Massive Protective Services',
    description:
      'Your guests should never know security is there. Your principal should never be without it. Licensed, discreet event security across South Florida.',
    url: 'https://massiveprotectiveservices.com/event-security',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EventSecurityPage() {
  return <EventSecurityClient />;
}
