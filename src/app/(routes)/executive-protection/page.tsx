import React from 'react';
import type { Metadata } from 'next';
import { ExecutiveProtectionClient } from './components/ExecutiveProtectionClient';

export const metadata: Metadata = {
  title: 'Executive Protection Services in South Florida | Massive Protective Services',
  description:
    'Armed Class G executive protection, threat assessment, advance reconnaissance, and secure transportation for corporate principals, family offices, and VIPs across South Florida. FL License B1400200.',
  openGraph: {
    title: 'Executive Protection Services in South Florida | Massive Protective Services',
    description:
      'Armed executive protection for principals who require more than a presence. Licensed, vetted, discreet close protection across South Florida and beyond.',
    url: 'https://massiveprotectiveservices.com/executive-protection',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ExecutiveProtectionPage() {
  return <ExecutiveProtectionClient />;
}
