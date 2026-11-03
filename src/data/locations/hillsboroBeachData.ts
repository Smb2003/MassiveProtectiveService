import {
  LocationHeroData,
  LocationSplitSectionData,
  LocationCorridorCoverageData,
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

export interface HillsboroBeachPageConfig {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  understanding: LocationSplitSectionData;
  corridorCoverage: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const hillsboroBeachData: HillsboroBeachPageConfig = {
  metaTitle:
    'Private Security & Estate Protection in Hillsboro Beach, FL | Hillsboro Mile Security',
  metaDescription:
    'Discreet, licensed security for Hillsboro Beach’s oceanfront and Intracoastal estates on the Hillsboro Mile — from a Palm Beach County agency 15 minutes north on A1A.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    locationName: 'Hillsboro Beach',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Hillsboro Beach' },
    ],
    eyebrow: '— HILLSBORO BEACH / BROWARD COUNTY',
    headline: 'Private Security & Estate Protection in Hillsboro Beach, FL',
    subtitle:
      'Discreet, licensed security for Hillsboro Beach’s oceanfront and Intracoastal estates — from a Palm Beach County agency 15 minutes north on A1A.',
    bgImage: '/images/mps_location_hillsboro_hero.jpg',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7',
      href: 'tel:9542347231',
    },
    badges: [
      {
        icon: 'file-text',
        label: 'FL LICENSE B1400200',
      },
      {
        icon: 'map-pin',
        label: 'DELRAY BEACH HQ — 15 MIN NORTH',
      },
      {
        icon: 'waves',
        label: 'OCEANFRONT · INTRACOASTAL · HILLSBORO MILE',
      },
    ],
  },

  // Screen 2: Philosophy Section (Image 2)
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Hillsboro Beach has a lighthouse that’s guided ships since 1907. Most security firms still haven’t found the town.',
    paragraph:
      'Hillsboro Beach sits on a narrow barrier island at the northern edge of Broward County — separated from Deerfield Beach by Hillsboro Inlet and running south along A1A through some of the most valuable residential real estate in South Florida. Locals call it the Hillsboro Mile. It has no traffic lights, no commercial district and no visitor draw beyond the inlet and the lighthouse. The roughly 1,900 people who live here are precisely the type of client Massive Protective Services exists to serve. We are headquartered in Delray Beach — 15 minutes north — and we treat Hillsboro Beach as home territory.',
  },

  // Screen 3: Scope Grid (Image 3)
  servicesGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Hillsboro Beach Estates & Residences',
    cardVariant: 'gold-title',
    cards: [
      {
        icon: 'home',
        title: 'Oceanfront & Intracoastal Estate Security',
        description:
          'Armed overnight officers, perimeter patrol and access control for Hillsboro Beach’s barrier island estates — covering ocean-side and Intracoastal-side exposure as one coordinated plan.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for residential overnight coverage, elevated-risk windows and any situation at your Hillsboro Beach property requiring a licensed, armed presence.',
      },
      {
        icon: 'anchor',
        title: 'Inlet & Waterfront Security',
        description:
          'Hillsboro Inlet creates unique waterside access to barrier island properties. Our estate security plans account for dock access, inlet proximity and waterfront perimeter vulnerabilities specific to this location.',
      },
      {
        icon: 'key',
        title: 'Seasonal & Absentee Property Protection',
        description:
          'Scheduled patrol checks, property monitoring and written documentation for seasonal residents and owners away from Hillsboro Beach for extended periods. Consistent coverage regardless of whether you are there.',
      },
      {
        icon: 'user',
        title: 'Executive & Principal Protection',
        description:
          'Close protection for Hillsboro Beach residents and their visiting principals — consistent officer teams, advance work and armed coverage that travels when your schedule requires it.',
      },
      {
        icon: 'wine',
        title: 'Private Event Security at Home',
        description:
          'Estate dinners, private gatherings and residential events secured by discreet, licensed officers. Guest management and perimeter coverage that blends into the occasion, not disrupts it.',
      },
    ],
  },

  // Screen 4: Understanding Hillsboro Beach (Image 4)
  understanding: {
    eyebrow: 'UNDERSTANDING HILLSBORO BEACH',
    headline: 'A Barrier Island With a Lighthouse, an Inlet and No Commercial Buffer',
    variant: 'cards',
    paragraphs: [
      'The Hillsboro Lighthouse has stood at the northern tip of this peninsula since 1907. It marks the inlet — and the inlet is the detail that separates Hillsboro Beach’s security profile from most other barrier island towns in South Florida. Hillsboro Inlet is an active waterway. Boats move through it. Properties on the north end of the Hillsboro Mile have inlet-side exposure that oceanfront and Intracoastal coverage alone doesn’t address.',
      'The rest of the town is a narrow strip of A1A flanked by high-value estates on both sides. No commercial traffic, no tourist draw, no foot traffic. What looks like low-risk from the outside is actually a collection of unguarded oceanfront and Intracoastal properties with limited visible security presence — exactly the profile that attracts opportunistic risk. A proactive security plan here isn’t an overreaction. It’s what the property values already justify.',
    ],
    items: [
      {
        icon: 'radio',
        title: 'Hillsboro Inlet Proximity',
        description:
          'The inlet creates waterside access from the north. Our estate plans for Hillsboro Beach account for inlet-adjacent exposure — not just the road-facing perimeter.',
      },
      {
        icon: 'waves',
        title: 'The Hillsboro Mile',
        description:
          'A1A through Hillsboro Beach is lined with oceanfront and Intracoastal estates end to end. No buffer zones, no commercial breaks — pure residential, continuous.',
      },
      {
        icon: 'clock',
        title: '15 Minutes from Our HQ',
        description:
          'Massive Protective’s Delray Beach headquarters is approximately 15 minutes north. Hillsboro Beach is covered the same way we cover our own backyard.',
      },
    ],
  },

  // Screen 5: Coverage Area (Image 5 Top in first batch)
  corridorCoverage: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Hillsboro Beach and the Northern Broward Barrier Island',
    variant: 'boxed',
    column1: [
      'Hillsboro Beach (A1A / Hillsboro Mile)',
      'Oceanfront Estates (East Side)',
      'Intracoastal Estates (West Side)',
      'Hillsboro Inlet Area (North End)',
    ],
    column2: [
      'Deerfield Beach (adjacent north)',
      'Pompano Beach (adjacent south)',
      'Lighthouse Point (south — Intracoastal)',
      'Delray Beach (15 min north — our HQ)',
    ],
    footnote:
      'Hillsboro Beach is our southernmost Broward County coverage area and among our fastest response locations — directly on A1A from our Delray Beach headquarters.',
  },

  // Screen 6: How We Work (Image 5 Bottom in first batch)
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'A Professional Process for a Private Community',
    steps: [
      {
        number: 'I',
        title: 'Confidential Contact',
        description:
          'One call or a brief form submission — no call center, no sales team. You describe your property and what you need. We respond with a plan, not a pitch.',
      },
      {
        number: '2',
        title: 'Property Assessment',
        description:
          'A written assessment of your Hillsboro Beach estate: oceanfront and Intracoastal perimeter, inlet proximity if applicable, access points and household activity patterns. Delivered within 48 hours.',
      },
      {
        number: '3',
        title: 'Officer Assignment',
        description:
          'A vetted, licensed officer matched to your property and briefed before arrival — armed or plain-clothes, overnight or ongoing. Consistent personnel, not a rotating pool.',
      },
      {
        number: '4',
        title: 'Documented, Ongoing Coverage',
        description:
          'Written shift reports. Monthly check-ins. NDAs signed by every member of our team. The same standards every shift — no gaps, no improvisation.',
      },
    ],
  },

  // Screen 7: Why Massive Protective (Image 1 in remaining screens)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: '15 Minutes Away. Fully Licensed. Absolutely Discreet.',
    theme: 'dark',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Headquartered 15 Minutes North',
        description:
          'Our base of operations is in Delray Beach — a straight shot south on A1A. We are not dispatching from a central Florida call center or routing through a staffing agency. We are already in this corridor.',
      },
      {
        icon: 'file-text',
        title: 'Licensed and Verifiable',
        description:
          'FL Agency License B1400200, publicly verifiable on the FDACS database. Every officer licensed under Chapter 493, Florida Statutes. No subcontracting. No staffing agency fills. Accountable at every level.',
      },
      {
        icon: 'lock',
        title: 'NDAs and No Public Lists',
        description:
          'We do not maintain public client lists. We do not reference engagements publicly. NDAs are available as standard — covering our entire team, the client’s identity and all security arrangements.',
      },
    ],
  },

  // Screen 8: Nearby Coverage Cards (Image 2 in remaining screens)
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Serving the Broward-Palm Beach Coastal Corridor',
    cards: [
      {
        title: 'Lighthouse Point',
        description: 'Broward County canal-front and Intracoastal estates — just south.',
        href: '#consultation-form',
      },
      {
        title: 'Deerfield Beach',
        description: 'Adjacent north — coastal and residential coverage.',
        href: '#consultation-form',
      },
      {
        title: 'Pompano Beach',
        description: 'South Broward coastal and waterfront estates.',
        href: '#consultation-form',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters — 15 minutes north. Full estate security and EP services.',
        href: '/locations/delray-beach',
      },
    ],
  },

  // Screen 10: Security FAQ (Image 4 in remaining screens)
  faq: {
    eyebrow: 'HILLSBORO BEACH SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Do you provide security in Hillsboro Beach, FL?',
        answer:
          'Yes. Hillsboro Beach is one of our closest Broward County coverage areas — our Delray Beach headquarters is approximately 15 minutes north on A1A. We serve Hillsboro Beach estates with armed officers, overnight residential security, executive protection and seasonal property coverage.',
      },
      {
        question: 'What makes Hillsboro Beach’s security profile different from other barrier island towns?',
        answer:
          'Hillsboro Beach has Hillsboro Inlet at its northern tip — an active waterway that creates water-side access to properties near the inlet that standard oceanfront and Intracoastal planning doesn’t address. Combined with the high concentration of estate-level properties along the Hillsboro Mile, no commercial buffer and limited visible security presence, Hillsboro Beach requires a security plan that accounts for both the road corridor and the water.',
      },
      {
        question: 'Do you offer armed overnight security for Hillsboro Beach residences?',
        answer:
          'Yes. Class G licensed armed officers deployed overnight is a primary service for Hillsboro Beach properties. Officers are briefed on your specific estate before arrival and present for the full shift — no remote monitoring substitution.',
      },
      {
        question: 'Can you cover my Hillsboro Beach property during the off-season?',
        answer:
          'Yes. Seasonal and absentee property protection with scheduled patrols, written visit documentation and emergency response coordination is available as an ongoing engagement. Many of our barrier island clients retain us specifically for this purpose.',
      },
      {
        question: 'Do you sign NDAs for Hillsboro Beach clients?',
        answer:
          'Yes. Non-disclosure agreements covering our entire team, the client’s identity and all engagement details are available as standard practice. We do not maintain public client lists or reference any engagement without explicit written consent.',
      },
    ],
  },

  // Screen 11: Nearby Locations (Image 5 in remaining screens)
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    headline: 'Serving the South Florida Coastal Corridor',
    places: [
      {
        title: 'Lighthouse Point',
        description: 'Canal-front and Intracoastal estates in Broward County.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters — estate security, executive protection and private events.',
        href: '/locations/delray-beach',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Deerfield Beach',
        description: 'Northern Broward County coastal and residential coverage.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
