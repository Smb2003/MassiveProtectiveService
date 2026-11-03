import { Metadata } from 'next';
import { DelrayBeachClient } from './components/DelrayBeachClient';
import { delrayBeachData } from '@/data/locations/delrayBeachData';

export const metadata: Metadata = {
  title: delrayBeachData.metaTitle,
  description: delrayBeachData.metaDescription,
  alternates: {
    canonical: '/locations/delray-beach',
  },
  openGraph: {
    title: delrayBeachData.metaTitle,
    description: delrayBeachData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/delray-beach',
    images: [
      {
        url: '/images/mps_location_delray_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Delray Beach Private Security & Bodyguards Headquarters',
      },
    ],
  },
};

export default function DelrayBeachLocationPage() {
  return <DelrayBeachClient />;
}
