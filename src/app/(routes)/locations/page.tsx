import { Metadata } from 'next';
import { LocationsOverviewClient } from './components/LocationsOverviewClient';

export const metadata: Metadata = {
  title: 'Florida Locations & Deployment Grid | Massive Protective Services',
  description:
    'Explore licensed armed security and executive protection across 19+ Florida jurisdictions. Serving Palm Beach County, Broward, Miami-Dade, and regional Florida markets. FL License B1400200.',
  alternates: {
    canonical: 'https://massiveprotectiveservices.com/locations',
  },
  openGraph: {
    title: 'Florida Locations & Deployment Grid | Massive Protective Services',
    description:
      'Licensed armed executive protection, residential estate security, and airport escort across 19+ Florida jurisdictions. FL License B1400200.',
    url: 'https://massiveprotectiveservices.com/locations',
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Locations & Deployment Grid | Massive Protective Services',
    description:
      'Explore licensed armed security and executive protection across 19+ Florida jurisdictions.',
  },
};

export default function LocationsPage() {
  return <LocationsOverviewClient />;
}
