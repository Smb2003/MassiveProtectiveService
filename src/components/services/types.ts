import React from 'react';
import { ServiceIconName } from './ServiceIcon';

export interface ServiceHeroBadgeItem {
  icon?: ServiceIconName | string;
  label: string;
}

export interface ServiceHeroData {
  eyebrow?: string;
  serviceName: string;
  breadcrumbTitle?: string;
  headline: string;
  subtitle: string;
  bgImage: string;
  alignment?: 'center' | 'left';
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    icon?: string;
  };
  badges: (string | ServiceHeroBadgeItem)[];
}

export interface ServicePhilosophyData {
  eyebrow?: string;
  headline: string;
  paragraph?: string;
  variant?: 'left-gold-bar' | 'centered-gold-line' | 'two-column-prose';
  column1Paragraphs?: string[];
  column2Paragraphs?: string[];
}

export interface ServiceScopeItem {
  icon: ServiceIconName | string;
  title: string;
  description: string;
  note?: string;
}

export interface ServiceScopeData {
  eyebrow: string;
  headline: string;
  columns?: 2 | 3;
  cards: ServiceScopeItem[];
}

export interface ServiceAudienceItem {
  icon: ServiceIconName | string;
  title: string;
  description: string;
}

export interface ServiceAudienceData {
  variant?: 'cards' | 'split-list';
  eyebrow: string;
  headline: string;
  pillars?: ServiceAudienceItem[];
  paragraphs?: string[];
  listTitle?: string;
  listItems?: string[];
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcessData {
  eyebrow: string;
  headline: string;
  steps: ServiceProcessStep[];
}

export interface ServiceWhyMassivePillar {
  icon: ServiceIconName | string;
  title: string;
  description: string;
}

export interface ServiceWhyMassiveData {
  variant?: 'grid' | 'vertical-bars';
  theme?: 'light' | 'dark';
  eyebrow?: string;
  headline?: string;
  pillars?: ServiceWhyMassivePillar[];
}

export interface ServiceCredentialsItem {
  icon: ServiceIconName | string;
  label: string;
  value: string;
}

export interface ServiceCredentialsData {
  headline?: string;
  cards: ServiceCredentialsItem[];
  verifyLink?: {
    label: string;
    href: string;
  };
}

export interface ServiceAreaData {
  eyebrow?: string;
  headline?: string;
  hqBadge?: string;
  description?: string;
  countyBadge?: string;
  citiesColumn1?: string[];
  citiesColumn2?: string[];
  footerNote?: string;
}

export interface ServiceFormData {
  eyebrow?: string;
  headline?: string;
  subtitle?: string;
  serviceCategory: string;
  needTypes: string[];
  defaultNeed?: string;
  secondFieldLabel?: string;
  secondFieldPlaceholder?: string;
  secondFieldIcon?: string;
  dropdown1Label?: string;
  dropdown1Placeholder?: string;
  dropdown2Label?: string;
  dropdown2Placeholder?: string;
  dropdown2Options?: string[];
  coverageStartOptions?: string[];
  defaultCoverageStart?: string;
  propertyLocationLabel?: string;
  propertyLocationPlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  footerNote?: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceFAQData {
  eyebrow?: string;
  headline?: string;
  faqs: ServiceFAQItem[];
}

export interface ServiceRelatedItem {
  title: string;
  description?: string;
  href: string;
  linkLabel?: string;
}

export interface ServiceRelatedData {
  eyebrow?: string;
  headline?: string;
  services: ServiceRelatedItem[];
}

export interface ServiceClosingCTAData {
  headline?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export interface ServicePageConfig {
  slug: string;
  hero: ServiceHeroData;
  philosophy: ServicePhilosophyData;
  scope: ServiceScopeData;
  audience: ServiceAudienceData;
  corridor?: ServicePhilosophyData;
  process: ServiceProcessData;
  whyMassive?: ServiceWhyMassiveData;
  credentials?: ServiceCredentialsData;
  serviceArea?: ServiceAreaData;
  consultationForm?: ServiceFormData;
  faq?: ServiceFAQData;
  relatedServices?: ServiceRelatedData;
  closingCta?: ServiceClosingCTAData;
}
