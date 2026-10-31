import React from 'react';
import type { Metadata } from 'next';
import { BlogPageClient } from './components/BlogPageClient';

export const metadata: Metadata = {
  title: 'Security Intelligence & Guides | Massive Protective Services — Delray Beach, FL',
  description:
    'Security Guides for Executives, Families and Estate Owners. Practical guidance on executive protection, armed security, Florida licensing and private security costs.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
