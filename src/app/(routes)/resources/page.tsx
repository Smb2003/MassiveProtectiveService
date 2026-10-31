import React from 'react';
import type { Metadata } from 'next';
import { BlogPageClient } from '../blog/components/BlogPageClient';

export const metadata: Metadata = {
  title: 'Resources & Security Guides | Massive Protective Services',
  description: 'Practical security intelligence and guides for South Florida.',
};

export default function ResourcesPage() {
  return <BlogPageClient />;
}
