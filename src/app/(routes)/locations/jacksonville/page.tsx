import { Metadata } from 'next';
import { JacksonvilleClient } from './components/JacksonvilleClient';
import { jacksonvilleData } from '@/data/locations/jacksonvilleData';

export const metadata: Metadata = {
  title: jacksonvilleData.metaTitle,
  description: jacksonvilleData.metaDescription,
  alternates: {
    canonical: '/locations/jacksonville',
  },
  openGraph: {
    title: jacksonvilleData.metaTitle,
    description: jacksonvilleData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/jacksonville',
    images: [
      {
        url: '/images/mps_location_jacksonville_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacksonville Private Security and Protection Services',
      },
    ],
  },
};

export default function JacksonvilleLocationPage() {
  return <JacksonvilleClient />;
}
