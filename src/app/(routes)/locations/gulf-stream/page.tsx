import { Metadata } from 'next';
import { GulfStreamClient } from './components/GulfStreamClient';
import { gulfStreamData } from '@/data/locations/gulfStreamData';

export const metadata: Metadata = {
  title: gulfStreamData.metaTitle,
  description: gulfStreamData.metaDescription,
  alternates: {
    canonical: '/locations/gulf-stream',
  },
  openGraph: {
    title: gulfStreamData.metaTitle,
    description: gulfStreamData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/gulf-stream',
    images: [
      {
        url: '/images/mps_location_gulfstream_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Gulf Stream Oceanfront & Intracoastal Estate Security',
      },
    ],
  },
};

export default function GulfStreamLocationPage() {
  return <GulfStreamClient />;
}
