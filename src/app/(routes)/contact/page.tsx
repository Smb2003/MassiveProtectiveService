import React from 'react';
import type { Metadata } from 'next';
import { ContactFormSection } from './components/ContactFormSection';
import { ResponseTimeBanner } from './components/ResponseTimeBanner';
import { PrimaryServiceAreaSection } from './components/PrimaryServiceAreaSection';

export const metadata: Metadata = {
  title: 'Contact Massive Protective Services | Start a Confidential Conversation',
  description:
    'Start a confidential conversation with Massive Protective Services. Direct response within hours. No sales process. Delray Beach HQ serving Palm Beach, Broward, and Miami-Dade.',
};

export default function ContactPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Main Confidential Consultation Form & Contact Cards (Screenshot Image 1) */}
      <ContactFormSection />

      {/* 2. Direct Response Time Banner (Screenshot Image 2) */}
      <ResponseTimeBanner />

      {/* 3. Primary Service Area Pill Tags (Screenshot Image 2) */}
      <PrimaryServiceAreaSection />
    </div>
  );
}
