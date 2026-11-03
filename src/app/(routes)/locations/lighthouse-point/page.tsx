import { Metadata } from 'next';
import { LighthousePointClient } from './components/LighthousePointClient';
import { lighthousePointData } from '@/data/locations/lighthousePointData';

export const metadata: Metadata = {
  title: lighthousePointData.metaTitle,
  description: lighthousePointData.metaDescription,
  alternates: {
    canonical: '/locations/lighthouse-point',
  },
  openGraph: {
    title: lighthousePointData.metaTitle,
    description: lighthousePointData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/lighthouse-point',
    images: [
      {
        url: '/images/mps_location_lighthouse_point_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Lighthouse Point Waterfront Estate and Bodyguard Security',
      },
    ],
  },
};

export default function LighthousePointLocationPage() {
  return <LighthousePointClient />;
}
