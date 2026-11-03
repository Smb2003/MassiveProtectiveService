import { Metadata } from 'next';
import { BocaRatonClient } from './components/BocaRatonClient';
import { bocaRatonData } from '@/data/locations/bocaRatonData';

export const metadata: Metadata = {
  title: bocaRatonData.metaTitle,
  description: bocaRatonData.metaDescription,
  alternates: {
    canonical: '/locations/boca-raton',
  },
  openGraph: {
    title: bocaRatonData.metaTitle,
    description: bocaRatonData.metaDescription,
    url: 'https://massiveprotective.com/locations/boca-raton',
    type: 'website',
  },
};

export default function BocaRatonLocationPage() {
  return <BocaRatonClient />;
}
