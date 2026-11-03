import type { Metadata } from 'next';
import { OceanRidgeClient } from './components/OceanRidgeClient';
import { oceanRidgeData } from '@/data/locations/oceanRidgeData';

export const metadata: Metadata = {
  title: oceanRidgeData.metaTitle,
  description: oceanRidgeData.metaDescription,
  openGraph: {
    title: oceanRidgeData.metaTitle,
    description: oceanRidgeData.metaDescription,
    url: 'https://massiveprotectiveservice.com/locations/ocean-ridge',
    siteName: 'Massive Protective Services',
    images: [
      {
        url: oceanRidgeData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Estate Protection in Ocean Ridge, FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: oceanRidgeData.metaTitle,
    description: oceanRidgeData.metaDescription,
    images: [oceanRidgeData.hero.bgImage],
  },
  alternates: {
    canonical: 'https://massiveprotectiveservice.com/locations/ocean-ridge',
  },
};

export default function OceanRidgeLocationPage() {
  return <OceanRidgeClient />;
}
