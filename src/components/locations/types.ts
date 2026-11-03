import {
  ServiceProcessData,
  ServiceWhyMassiveData,
  ServiceFAQData,
} from '@/components/services/types';

export interface LocationBreadcrumbItem {
  label: string;
  href?: string;
}

export interface LocationHeroBadge {
  icon?: string;
  label: string;
}

export interface LocationHeroData {
  breadcrumbs?: LocationBreadcrumbItem[];
  locationName: string;
  eyebrow?: string;
  headline: string;
  subtitle: string;
  bgImage: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    icon?: string;
  };
  align?: 'left' | 'center';
  breadcrumbsAlign?: 'left' | 'center';
  notice?: string;
  singleLineBadge?: string;
  badges?: (string | LocationHeroBadge)[];
}

export interface LocationSplitFeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface LocationSplitStatItem {
  value: string;
  label: string;
}

export interface LocationSplitSectionData {
  eyebrow?: string;
  headline: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  imagePosition?: 'left' | 'right' | 'top-full';
  items: LocationSplitFeatureItem[];
  variant?: 'cards' | 'divided-list';
  itemTitleColor?: 'gold' | 'white';
  stats?: LocationSplitStatItem[];
}

export interface LocationCorridorCoverageData {
  eyebrow?: string;
  headline: string;
  column1: string[];
  column2: string[];
  footnote?: string;
  footnotePlacement?: 'inside' | 'outside';
  variant?: 'boxed' | 'clean';
  noDividers?: boolean;
}

export interface LocationNearbyCard {
  title: string;
  description: string;
  href?: string;
}

export interface LocationNearbyCoverageData {
  eyebrow?: string;
  headline: string;
  cards: LocationNearbyCard[];
}

export interface LocationNearbyPlaceItem {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}

export interface LocationNearbyLocationsData {
  eyebrow?: string;
  headline?: string;
  places: LocationNearbyPlaceItem[];
}

export interface LocationProximityCard {
  icon?: string;
  title: string;
  description: string;
}

export interface LocationProximityAdvantageData {
  eyebrow?: string;
  headline: string;
  paragraphs: string[];
  cards: LocationProximityCard[];
  footnote?: string;
}

export interface LocationScenarioCard {
  tag?: string;
  title: string;
  description: string;
  footerNote?: string;
}

export interface LocationPlanningScenariosData {
  headline: string;
  subtitle: string;
  cards: LocationScenarioCard[];
  theme?: 'light' | 'dark';
}

export interface LocationSettingColumn {
  title: string;
  description: string;
}

export interface LocationSettingDetailData {
  headline: string;
  subtitle: string;
  columns: LocationSettingColumn[];
  footnote?: string;
  theme?: 'light' | 'dark';
  categoryTag?: string;
  variant?: 'columns' | 'boxed-grid';
}

export interface LocationPlanningBeyondCard {
  tag?: string;
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
}

export interface LocationPlanningBeyondData {
  headline: string;
  subtitle: string;
  cards: LocationPlanningBeyondCard[];
  theme?: 'light' | 'dark';
}

export interface LocationPageConfig {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: {
    variant: 'centered-gold-line';
    headline: string;
    paragraph: string;
  };
  servicesGrid: {
    eyebrow: string;
    headline: string;
    cardVariant: 'gold-title';
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  internationalProtection: LocationSplitSectionData;
  communities: LocationSplitSectionData;
  corridorCoverage: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}
