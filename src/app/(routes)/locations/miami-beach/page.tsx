import type { Metadata } from 'next';
import { MiamiBeachClient } from './components/MiamiBeachClient';
import { miamiBeachData } from '@/data/locations/miamiBeachData';

export const metadata: Metadata = {
  title: miamiBeachData.metaTitle,
  description: miamiBeachData.metaDescription,
  openGraph: {
    title: miamiBeachData.metaTitle,
    description: miamiBeachData.metaDescription,
    url: 'https://massiveprotectiveservice.com/locations/miami-beach',
    siteName: 'Massive Protective Services',
    images: [
      {
        url: miamiBeachData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Celebrity Protection Miami Beach FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: miamiBeachData.metaTitle,
    description: miamiBeachData.metaDescription,
    images: [miamiBeachData.hero.bgImage],
  },
  alternates: {
    canonical: 'https://massiveprotectiveservice.com/locations/miami-beach',
  },
};

export default function MiamiBeachPage() {
  return <MiamiBeachClient />;
}
