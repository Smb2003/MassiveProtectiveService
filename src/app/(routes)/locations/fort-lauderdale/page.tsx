import { Metadata } from 'next';
import { FortLauderdaleClient } from './components/FortLauderdaleClient';
import { fortLauderdaleData } from '@/data/locations/fortLauderdaleData';

export const metadata: Metadata = {
  title: fortLauderdaleData.metaTitle,
  description: fortLauderdaleData.metaDescription,
  alternates: {
    canonical: '/locations/fort-lauderdale',
  },
  openGraph: {
    title: fortLauderdaleData.metaTitle,
    description: fortLauderdaleData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/fort-lauderdale',
    images: [
      {
        url: '/images/mps_location_ftl_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Fort Lauderdale Maritime & Estate Security',
      },
    ],
  },
};

export default function FortLauderdaleLocationPage() {
  return <FortLauderdaleClient />;
}
