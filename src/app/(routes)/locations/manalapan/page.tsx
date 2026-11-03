import type { Metadata } from 'next';
import { ManalapanClient } from './components/ManalapanClient';
import { manalapanData } from '@/data/locations/manalapanData';

export const metadata: Metadata = {
  title: manalapanData.metaTitle,
  description: manalapanData.metaDescription,
  openGraph: {
    title: manalapanData.metaTitle,
    description: manalapanData.metaDescription,
    url: 'https://massiveprotectiveservice.com/locations/manalapan',
    siteName: 'Massive Protective Services',
    images: [
      {
        url: manalapanData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Manalapan Estate Security & Armed Officers FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: manalapanData.metaTitle,
    description: manalapanData.metaDescription,
    images: [manalapanData.hero.bgImage],
  },
  alternates: {
    canonical: 'https://massiveprotectiveservice.com/locations/manalapan',
  },
};

export default function ManalapanPage() {
  return <ManalapanClient />;
}
