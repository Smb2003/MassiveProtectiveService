import { Metadata } from 'next';
import { FortLauderdaleClient } from '../locations/fort-lauderdale/components/FortLauderdaleClient';
import { fortLauderdaleData } from '@/data/locations/fortLauderdaleData';

export const metadata: Metadata = {
  title: fortLauderdaleData.metaTitle,
  description: fortLauderdaleData.metaDescription,
  alternates: {
    canonical: '/locations/fort-lauderdale',
  },
};

export default function FortLauderdaleAliasPage() {
  return <FortLauderdaleClient />;
}
