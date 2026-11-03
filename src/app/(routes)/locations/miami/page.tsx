import type { Metadata } from 'next';
import { MiamiClient } from './components/MiamiClient';
import { miamiData } from '@/data/locations/miamiData';

export const metadata: Metadata = {
  title: miamiData.metaTitle,
  description: miamiData.metaDescription,
  openGraph: {
    title: miamiData.metaTitle,
    description: miamiData.metaDescription,
    url: 'https://massiveprotectiveservice.com/locations/miami',
    siteName: 'Massive Protective Services',
    images: [
      {
        url: miamiData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Miami Executive Protection — Armed Security for an International City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: miamiData.metaTitle,
    description: miamiData.metaDescription,
    images: [miamiData.hero.bgImage],
  },
  alternates: {
    canonical: 'https://massiveprotectiveservice.com/locations/miami',
  },
};

export default function MiamiLocationPage() {
  return <MiamiClient />;
}
