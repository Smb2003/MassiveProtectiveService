import { Metadata } from 'next';
import { HillsboroBeachClient } from './components/HillsboroBeachClient';
import { hillsboroBeachData } from '@/data/locations/hillsboroBeachData';

export const metadata: Metadata = {
  title: hillsboroBeachData.metaTitle,
  description: hillsboroBeachData.metaDescription,
  alternates: {
    canonical: '/locations/hillsboro-beach',
  },
  openGraph: {
    title: hillsboroBeachData.metaTitle,
    description: hillsboroBeachData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/hillsboro-beach',
    images: [
      {
        url: '/images/mps_location_hillsboro_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hillsboro Beach Estate & Inlet Security',
      },
    ],
  },
};

export default function HillsboroBeachLocationPage() {
  return <HillsboroBeachClient />;
}
