import type { Metadata } from 'next';
import { OrlandoClient } from './components/OrlandoClient';
import { orlandoData } from '@/data/locations/orlandoData';

export const metadata: Metadata = {
  title: orlandoData.metaTitle,
  description: orlandoData.metaDescription,
  openGraph: {
    title: orlandoData.metaTitle,
    description: orlandoData.metaDescription,
    url: 'https://massiveprotectiveservice.com/locations/orlando',
    siteName: 'Massive Protective Services',
    images: [
      {
        url: orlandoData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Protection in Orlando | Massive Protective Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: orlandoData.metaTitle,
    description: orlandoData.metaDescription,
    images: [orlandoData.hero.bgImage],
  },
  alternates: {
    canonical: 'https://massiveprotectiveservice.com/locations/orlando',
  },
};

export default function OrlandoLocationPage() {
  return <OrlandoClient />;
}
