import { Metadata } from 'next';
import { HillsboroBeachClient } from '../locations/hillsboro-beach/components/HillsboroBeachClient';
import { hillsboroBeachData } from '@/data/locations/hillsboroBeachData';

export const metadata: Metadata = {
  title: hillsboroBeachData.metaTitle,
  description: hillsboroBeachData.metaDescription,
  alternates: {
    canonical: '/locations/hillsboro-beach',
  },
};

export default function HillsboroBeachAliasPage() {
  return <HillsboroBeachClient />;
}
