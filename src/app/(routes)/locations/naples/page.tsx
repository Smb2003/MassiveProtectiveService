import type { Metadata } from 'next';
import { NaplesClient } from './components/NaplesClient';
import { naplesData } from '@/data/locations/naplesData';

export const metadata: Metadata = {
  title: naplesData.metaTitle,
  description: naplesData.metaDescription,
  openGraph: {
    title: naplesData.metaTitle,
    description: naplesData.metaDescription,
    url: 'https://massiveprotectiveservice.com/locations/naples',
    siteName: 'Massive Protective Services',
    images: [
      {
        url: naplesData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Protection in Naples | Massive Protective Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: naplesData.metaTitle,
    description: naplesData.metaDescription,
    images: [naplesData.hero.bgImage],
  },
  alternates: {
    canonical: 'https://massiveprotectiveservice.com/locations/naples',
  },
};

export default function NaplesLocationPage() {
  return <NaplesClient />;
}
