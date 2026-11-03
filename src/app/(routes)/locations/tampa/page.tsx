import { Metadata } from 'next';
import { TampaClient } from './components/TampaClient';
import { tampaData } from '@/data/locations/tampaData';

export const metadata: Metadata = {
  title: tampaData.metaTitle,
  description: tampaData.metaDescription,
  alternates: {
    canonical: 'https://massiveprotectiveservices.com/locations/tampa',
  },
  openGraph: {
    title: tampaData.metaTitle,
    description: tampaData.metaDescription,
    url: 'https://massiveprotectiveservices.com/locations/tampa',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: tampaData.metaTitle,
    description: tampaData.metaDescription,
  },
};

export default function TampaPage() {
  return <TampaClient />;
}
