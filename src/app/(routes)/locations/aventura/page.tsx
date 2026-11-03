import { Metadata } from 'next';
import { AventuraClient } from './components/AventuraClient';
import { aventuraData } from '@/data/locations/aventuraData';

export const metadata: Metadata = {
  title: aventuraData.metaTitle,
  description: aventuraData.metaDescription,
  alternates: {
    canonical: '/locations/aventura',
  },
  openGraph: {
    title: aventuraData.metaTitle,
    description: aventuraData.metaDescription,
    url: 'https://massiveprotective.com/locations/aventura',
    type: 'website',
  },
};

export default function AventuraLocationPage() {
  return <AventuraClient />;
}
