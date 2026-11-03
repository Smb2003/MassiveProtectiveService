import { Metadata } from 'next';
import { BoyntonBeachClient } from './components/BoyntonBeachClient';
import { boyntonBeachData } from '@/data/locations/boyntonBeachData';

export const metadata: Metadata = {
  title: boyntonBeachData.metaTitle,
  description: boyntonBeachData.metaDescription,
  alternates: {
    canonical: '/locations/boynton-beach',
  },
  openGraph: {
    title: boyntonBeachData.metaTitle,
    description: boyntonBeachData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/boynton-beach',
    images: [
      {
        url: '/images/mps_location_boynton_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Boynton Beach Armed Security & Executive Protection',
      },
    ],
  },
};

export default function BoyntonBeachLocationPage() {
  return <BoyntonBeachClient />;
}
