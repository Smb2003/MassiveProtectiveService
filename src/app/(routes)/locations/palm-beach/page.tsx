import { Metadata } from 'next';
import { PalmBeachClient } from './components/PalmBeachClient';
import { palmBeachData } from '@/data/locations/palmBeachData';

export const metadata: Metadata = {
  title: palmBeachData.metaTitle,
  description: palmBeachData.metaDescription,
  alternates: {
    canonical: 'https://massiveprotectiveservices.com/locations/palm-beach',
  },
  openGraph: {
    title: palmBeachData.metaTitle,
    description: palmBeachData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/palm-beach',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: palmBeachData.metaTitle,
    description: palmBeachData.metaDescription,
  },
};

export default function PalmBeachPage() {
  return <PalmBeachClient />;
}
