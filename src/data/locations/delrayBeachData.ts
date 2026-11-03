import {
  LocationHeroData,
  LocationSplitSectionData,
  LocationNearbyCoverageData,
  LocationNearbyLocationsData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceProcessData,
  ServiceWhyMassiveData,
  ServiceFAQData,
} from '@/components/services/types';

export interface DelrayBeachPageConfig {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  localKnowledge: LocationSplitSectionData;
  nearbyCoverage: LocationNearbyCoverageData;
  process: ServiceProcessData;
  whyChooseMassive: ServiceWhyMassiveData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const delrayBeachData: DelrayBeachPageConfig = {
  metaTitle:
    'Private Security & Bodyguards in Delray Beach, FL | Massive Protective Services Headquarters',
  metaDescription:
    'Massive Protective Services headquarters in Delray Beach. Executive protection, waterfront estate security east of A1A, and licensed armed officers for Atlantic Avenue and Palm Beach County.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    locationName: 'Delray Beach',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Delray Beach' },
    ],
    eyebrow: '— DELRAY BEACH / HEADQUARTERS',
    headline: 'Private Security & Bodyguards in Delray Beach, FL',
    subtitle:
      'Massive Protective Services is headquartered in Delray Beach. Executive protection, estate security and armed officers for the clients who live, work and entertain here.',
    bgImage: '/images/mps_location_delray_hero.jpg',
    primaryCta: {
      label: 'TALK TO OUR DELRAY BEACH TEAM',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7',
      href: 'tel:9542347231',
    },
    badges: [
      {
        icon: 'map-pin',
        label: 'DELRAY BEACH HQ',
      },
      {
        icon: 'file-text',
        label: 'FL LICENSE B1400200',
      },
      {
        icon: 'clock',
        label: 'SERVING PALM BEACH COUNTY 24/7',
      },
    ],
  },

  // Screen 2: Philosophy / HQ Statement (Image 2)
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'This isn’t a market we service from a distance. Delray Beach is where we’re based.',
    paragraph:
      'Massive Protective Services was built in Delray Beach and operates out of it. When a client east of A1A needs an armed officer tonight, we’re not dispatching from Miami or Fort Lauderdale. We know this city — the estates off Spanish Trail, the events on Atlantic Avenue, the gated communities along the Intracoastal. That proximity is part of what we offer.',
  },

  // Screen 3: Scope Grid (Image 3)
  servicesGrid: {
    eyebrow: 'WHAT WE DO HERE',
    headline: 'Security Services Available in Delray Beach & Boynton Beach',
    cardVariant: 'gold-title',
    cards: [
      {
        icon: 'executive',
        title: 'Executive Protection',
        description:
          'Close protection for Delray Beach executives, family office principals and visiting VIPs. Armed detail available with same-day deployment from our local team.',
      },
      {
        icon: 'home',
        title: 'Estate & Residential Security',
        description:
          'Overnight armed officers, gate security and perimeter patrols for waterfront estates, gated communities and private residences along the A1A corridor and Intracoastal.',
      },
      {
        icon: 'calendar',
        title: 'Event Security',
        description:
          'Private events on Atlantic Avenue, estate galas and charity fundraisers in Delray Beach and Boynton Beach. Licensed officers, access control and discreet VIP coverage.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for businesses, law offices, medical practices and any situation requiring a licensed armed presence in Palm Beach County.',
      },
      {
        icon: 'building',
        title: 'Corporate Security',
        description:
          'Security coverage for local corporate offices, high-risk HR situations and business premises along Linton Boulevard and Military Trail corridors.',
      },
      {
        icon: 'key',
        title: 'Concierge Security',
        description:
          'Ongoing retainers for UHNW Delray Beach families — coverage across the home, travel, events and daily movements. One team, one point of contact.',
      },
    ],
  },

  // Screen 4: Local Knowledge Split Section with Photo (Image 4)
  localKnowledge: {
    eyebrow: 'LOCAL KNOWLEDGE',
    headline: 'We Know Delray Beach. That’s Not a Marketing Line.',
    variant: 'cards',
    paragraphs: [
      'Delray Beach isn’t a uniform city. The security needs of a waterfront estate east of A1A are different from a business on Congress Avenue. A charity gala at the Delray Beach Golf Club has different access control requirements than a private dinner at a Mizner Park restaurant. We’ve worked this city. We know where the risk surfaces, how the neighborhoods differ and what discretion actually looks like when your neighbors are your clients.',
    ],
    image: {
      src: '/images/mps_location_delray_oldschool.jpg',
      alt: 'Old School Square Delray Beach',
      caption: 'OLD SCHOOL SQUARE · DELRAY BEACH',
    },
    items: [
      {
        icon: 'map-pin',
        title: 'East of A1A',
        description:
          'Waterfront estates, seasonal residents, visiting VIPs. Armed overnight coverage and access control are the primary ask here.',
      },
      {
        icon: 'party-popper',
        title: 'Atlantic Avenue',
        description:
          'Restaurants, galleries, private dining and after-hours events. Discreet plain-clothes coverage for hosts and principals.',
      },
      {
        icon: 'building',
        title: 'West Delray / Boynton Beach',
        description:
          'Corporate offices, medical practices and businesses requiring licensed armed or unarmed on-site security.',
      },
    ],
  },

  // Screen 5: Also Serving / Core Territory (Image 5)
  nearbyCoverage: {
    eyebrow: 'ALSO SERVING',
    headline: 'Delray Beach Is Our Base. Palm Beach County Is Our Territory.',
    cards: [
      {
        title: 'Boca Raton',
        description: 'Estates, corporate campuses and private events south of Delray.',
        href: '/locations/boca-raton',
      },
      {
        title: 'Boynton Beach',
        description: 'Adjacent coverage, same team, same response time.',
        href: '/locations/boynton-beach',
      },
      {
        title: 'West Palm Beach',
        description: 'Business district, courthouse corridor and Palm Beach Island access.',
        href: '#consultation-form',
      },
      {
        title: 'Palm Beach',
        description:
          'The island’s estates and seasonal residents — discreet, licensed, local.',
        href: '#consultation-form',
      },
    ],
  },

  // Screen 6: Process Roadmap (Screen 1 in remaining screens)
  process: {
    eyebrow: 'HOW IT STARTS',
    headline: 'From Your First Call to Your First Officer On-Site',
    steps: [
      {
        number: 'I',
        title: 'Call or Request',
        description:
          'Reach us by phone or form. We pick up 24/7 — no call center, no hold music. You speak to someone on our team who knows Delray Beach.',
      },
      {
        number: '2',
        title: 'Situation Brief',
        description:
          'Tell us what you need — estate coverage, an event, an executive arriving Thursday. We assess the situation and recommend the right response within hours.',
      },
      {
        number: '3',
        title: 'Officer Assignment',
        description:
          'We match the right officer to your environment — armed, plain-clothes or uniformed. Briefed on your specific situation before they arrive at your door.',
      },
      {
        number: '4',
        title: 'Deployment',
        description:
          "Your officer on-site, on time. Whether it's tonight or next month, we confirm every detail before the first shift begins.",
      },
    ],
  },

  // Screen 7: Why Choose Massive (Screen 2 in remaining screens)
  whyChooseMassive: {
    eyebrow: 'WHY CHOOSE MASSIVE',
    headline: 'A Local Agency. Not a Regional Franchise.',
    theme: 'dark',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Based Here',
        description:
          'Our office is in Delray Beach. When response time matters — and it always does — we’re not routing a call through a regional dispatch center three counties away.',
      },
      {
        icon: 'shield-check',
        title: 'Licensed & Accountable',
        description:
          'FL Agency License B1400200, verifiable on the FDACS public registry. Every officer holds a current Class D or Class G license. No subcontractors, no unlicensed personnel.',
      },
      {
        icon: 'users',
        title: 'Clients Who Stay',
        description:
          "We don't do volume. We do relationships. Most of our Delray Beach clients have been with us through multiple engagements — estate coverage, events, travel, and back again.",
      },
    ],
  },

  // Screen 9: FAQ (Screen 4 in remaining screens)
  faq: {
    eyebrow: 'DELRAY BEACH SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Do you have an office in Delray Beach?',
        answer:
          "Yes — Delray Beach is our headquarters. We're not a regional firm covering this city from a distance. Our team is based here, and our response time reflects that.",
      },
      {
        question: 'What areas of Delray Beach do you cover?',
        answer:
          'All of Delray Beach — east of A1A waterfront estates, Atlantic Avenue, downtown, the gated communities west of Federal Highway and commercial corridors along Congress and Military Trail. We also cover Boynton Beach, which borders Delray directly to the north.',
      },
      {
        question: 'How quickly can you deploy security in Delray Beach?',
        answer:
          'For most engagements, we can have a licensed officer on-site within hours of confirmation. For planned events or estate coverage, we typically confirm within 24 hours of your first contact.',
      },
      {
        question: 'Do you serve Boynton Beach as well?',
        answer:
          'Yes. Boynton Beach is directly adjacent to Delray and falls within our primary coverage area. Same team, same response time, same service standard.',
      },
      {
        question: 'How much does private security cost in Delray Beach?',
        answer:
          "Cost depends on service type, officer count and coverage hours. We don't publish rates because every engagement is custom-scoped. Contact us for a written proposal — no obligation.",
      },
    ],
  },

  // Screen 10: Nearby Locations (Screen 5 in remaining screens)
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    headline: 'Serving All of Palm Beach County',
    places: [
      {
        title: 'Boca Raton',
        description: 'Private security, bodyguards and estate coverage in Boca Raton, FL.',
        href: '/locations/boca-raton',
        linkLabel: 'View Coverage',
      },
      {
        title: 'West Palm Beach',
        description: 'Executive protection and corporate security in West Palm Beach.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Palm Beach',
        description: 'Discreet residential and estate security on Palm Beach Island.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
