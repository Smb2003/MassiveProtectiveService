import { Metadata } from 'next';
import { WestPalmBeachClient } from './components/WestPalmBeachClient';
import { westPalmBeachData } from '@/data/locations/westPalmBeachData';

export const metadata: Metadata = {
  title: westPalmBeachData.metaTitle,
  description: westPalmBeachData.metaDescription,
  alternates: {
    canonical: 'https://massiveprotectiveservices.com/locations/west-palm-beach',
  },
  openGraph: {
    title: westPalmBeachData.metaTitle,
    description: westPalmBeachData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/west-palm-beach',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: westPalmBeachData.metaTitle,
    description: westPalmBeachData.metaDescription,
  },
};

export default function WestPalmBeachPage() {
  return <WestPalmBeachClient />;
}
