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

export interface GulfStreamPageConfig {
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

export const gulfStreamData: GulfStreamPageConfig = {
  metaTitle:
    'Private Security & Estate Protection in Gulf Stream, FL | Oceanfront & Intracoastal Security',
  metaDescription:
    'Discreet, licensed security for Gulf Stream’s oceanfront and Intracoastal estates from an agency headquartered two miles south on Federal Highway. Class G armed officers and estate protection.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    locationName: 'Gulf Stream',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Gulf Stream' },
    ],
    eyebrow: '— GULF STREAM / PALM BEACH COUNTY',
    headline: 'Private Security & Estate Protection in Gulf Stream, FL',
    subtitle:
      'Discreet, licensed security for Gulf Stream’s oceanfront and Intracoastal estates — from an agency headquartered two miles south on Federal Highway.',
    bgImage: '/images/mps_location_gulfstream_hero.jpg',
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
        label: '2 MILES FROM GULF STREAM — DELRAY BEACH HQ',
      },
      {
        icon: 'waves',
        label: 'OCEANFRONT · INTRACOASTAL · ESTATE',
      },
    ],
  },

  // Screen 2: Philosophy Section (Image 2)
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Gulf Stream has roughly 900 residents and its own police department. It does not have a security firm that knows its name.',
    paragraph:
      'Gulf Stream sits on a narrow strip of the Atlantic barrier island between Delray Beach and Boynton Beach. A1A runs through it. There are no traffic lights, no stores, no hotels and no foot traffic. What there is: some of the most private, most valuable and most architecturally protected residential estates in the state of Florida. Massive Protective Services is two miles south, headquartered in Delray Beach. We serve Gulf Stream because it deserves a security partner close enough to treat it like a priority — not a line item.',
  },

  // Screen 3: Scope Grid (Image 3)
  servicesGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Gulf Stream Estates & Residences',
    cardVariant: 'gold-title',
    cards: [
      {
        icon: 'home',
        title: 'Oceanfront & Intracoastal Estate Security',
        description:
          'Armed overnight officers, access control and full perimeter coverage for Gulf Stream’s barrier island properties — ocean-side and Intracoastal-side exposure planned for as one.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for residential coverage, overnight shifts and any elevated-risk situation on your Gulf Stream property. Verified, licensed, uniformed or plain-clothes.',
      },
      {
        icon: 'user',
        title: 'Executive & Principal Protection',
        description:
          'Close protection for Gulf Stream residents and their guests. Advance work, consistent officer teams and armed coverage that extends beyond the property when needed.',
      },
      {
        icon: 'key',
        title: 'Seasonal & Absentee Estate Protection',
        description:
          'Regular scheduled patrols, property checks and monitoring coordination for seasonal owners and those away from Gulf Stream for extended periods. Year-round coverage, not just when you’re there.',
      },
      {
        icon: 'wine',
        title: 'Private Event Security at Home',
        description:
          'Dinner parties, estate galas and private social events secured by discreet, licensed officers. Guest management, perimeter coverage and a presence that is felt, not seen.',
      },
      {
        icon: 'book-open',
        title: 'Household & Vendor Access Protocols',
        description:
          'Security procedures for households with rotating contractors, service staff, landscapers and domestic teams. Access control and vendor screening designed for high-value residential properties.',
      },
    ],
  },

  // Screen 4: Understanding Gulf Stream (Image 4)
  understanding: {
    eyebrow: 'UNDERSTANDING GULF STREAM',
    headline: 'One Mile. Nine Hundred Residents. No Room for a Security Firm That Guesses.',
    variant: 'cards',
    paragraphs: [
      'Gulf Stream enforces British Colonial architectural standards by municipal ordinance. It has its own police department — historically one of the most active speed-enforcement agencies per capita in South Florida, patrolling A1A through the town. It has no commercial district, no visitor traffic and no buffer between private estates and the road.',
      'That combination — extreme residential exclusivity, very limited public space, a physically narrow island corridor with ocean to the east and Intracoastal to the west — creates a security profile that standard residential security companies have no framework for. The clients here are not looking for a guard service. They’re looking for a professional security firm that knows where Gulf Stream is and can be there in minutes.',
    ],
    items: [
      {
        icon: 'landmark',
        title: 'Architecture-Protected Estates',
        description:
          'British Colonial standards enforced by ordinance. Every property is distinctive, maintained and high-value. Security planning here accounts for architectural character, not just perimeter footage.',
      },
      {
        icon: 'waves',
        title: 'Narrow Barrier Island',
        description:
          'Ocean east, Intracoastal west. One road through. Access points are limited and well-defined — which makes them plannable and defensible.',
      },
      {
        icon: 'clock',
        title: '2-Mile Response Distance',
        description:
          'Massive Protective’s Delray Beach headquarters is approximately two miles south on Federal Highway. Gulf Stream is one of our fastest-response coverage areas in all of South Florida.',
      },
    ],
  },

  // Screen 5: Coverage Area (Image 5 Top in first batch)
  corridorCoverage: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Gulf Stream and the Central Palm Beach Barrier Island',
    variant: 'boxed',
    column1: [
      'Gulf Stream (A1A Corridor)',
      'Oceanfront Estates (East Side)',
      'Intracoastal Estates (West Side)',
      'North Gulf Stream (toward Boynton Beach)',
    ],
    column2: [
      'South Gulf Stream (toward Delray Beach)',
      'Ocean Ridge (north — adjacent)',
      'Briny Breezes (north — adjacent)',
      'Delray Beach (2 miles south — our HQ)',
    ],
    footnote:
      'Gulf Stream is the closest city to our Delray Beach headquarters. We treat it as our most immediate service area — not a remote call.',
  },

  // Screen 6: How We Work (Image 5 Bottom in first batch)
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'A Quiet, Professional Process for a Quiet, Professional Community',
    steps: [
      {
        number: 'I',
        title: 'Confidential Contact',
        description:
          'A phone call or a brief form submission — no call center, no sales team. You speak directly with our firm, describe your property and what you need, and receive a thoughtful response, not a quote sheet.',
      },
      {
        number: '2',
        title: 'Property Assessment',
        description:
          'A written assessment of your Gulf Stream estate: perimeter, access points, household activity patterns and existing security. Delivered within 48 hours. No obligation.',
      },
      {
        number: '3',
        title: 'Officer Placement',
        description:
          'A vetted, licensed officer assigned to your property — armed or plain-clothes, overnight or ongoing — who is briefed on your specific estate before the first shift begins.',
      },
      {
        number: '4',
        title: 'Consistent, Documented Coverage',
        description:
          'Consistent officers. Written shift reports. Monthly check-ins. NDAs signed by everyone involved. This is not a staffing rotation — it is a security relationship.',
      },
    ],
  },

  // Screen 7: Why Massive Protective (Image 1 Top in remaining screens)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'Two Miles Away. Fully Licensed. Completely Discreet.',
    theme: 'dark',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Headquartered Next Door',
        description:
          'Our base of operations is in Delray Beach — approximately two miles from Gulf Stream’s southern boundary. We are not dispatching from Broward, Palm Beach Gardens or Miami. We are already here.',
      },
      {
        icon: 'file-text',
        title: 'Licensed and Verifiable',
        description:
          'FL Agency License B1400200, verifiable at any time on the FDACS public database. Every officer licensed under Chapter 493, Florida Statutes. No subcontracting. No staffing agency officers. No improvisation.',
      },
      {
        icon: 'lock',
        title: 'Gulf Stream-Level Discretion',
        description:
          'We do not maintain public client lists. Our officers do not discuss assignments. NDAs are standard on request. Gulf Stream clients should never have to ask whether their engagement is confidential — it always is.',
      },
    ],
  },

  // Screen 8: Nearby Coverage Cards (Image 1 Bottom in remaining screens)
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Serving the Palm Beach Barrier Island Corridor',
    cards: [
      {
        title: 'Delray Beach',
        description: 'Our headquarters — 2 miles south. Estate security, executive protection, events.',
        href: '/locations/delray-beach',
      },
      {
        title: 'Ocean Ridge',
        description: 'Ultra-exclusive barrier island town, just north.',
        href: '#consultation-form',
      },
      {
        title: 'Boca Raton',
        description: '10 minutes south — estates, executives, corporate events.',
        href: '/locations/boca-raton',
      },
      {
        title: 'Manalapan',
        description: 'Adjacent south — one of Palm Beach County’s most private municipalities.',
        href: '#consultation-form',
      },
    ],
  },

  // Screen 10: Security FAQ (Image 3 in remaining screens)
  faq: {
    eyebrow: 'GULF STREAM SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Do you provide security services in Gulf Stream, FL?',
        answer:
          'Yes. Gulf Stream is one of our closest coverage areas — our Delray Beach headquarters is approximately two miles south. We serve Gulf Stream estates with armed officers, overnight residential security, executive protection and seasonal property coverage.',
      },
      {
        question: 'What makes Gulf Stream’s security needs unique?',
        answer:
          'Gulf Stream is a one-mile barrier island enclave with fewer than 1,000 residents, no commercial district and enforced architectural standards that reflect the value — and visibility — of every property in the town. Ocean-side and Intracoastal-side exposure, a single road corridor through the town and a highly private client profile all require a security plan built for this specific environment, not adapted from a suburban template.',
      },
      {
        question: 'Do you offer armed overnight security for Gulf Stream homes?',
        answer:
          'Yes. Licensed Class G armed officers deployed overnight is one of our primary services for Gulf Stream residences. Officers are assigned to your property specifically, briefed before arrival and on-site for the full shift with no substitution for remote monitoring.',
      },
      {
        question: 'Can you secure my Gulf Stream property during the off-season when I’m not there?',
        answer:
          'Yes. Seasonal and absentee property protection — regular scheduled patrols, event-triggered response and written documentation of every visit — is available as an ongoing engagement. Many Gulf Stream clients retain us year-round for exactly this reason.',
      },
      {
        question: 'Do you provide NDAs for Gulf Stream clients?',
        answer:
          'Yes. Non-disclosure agreements covering our entire team, the engagement details and the client’s identity are available as standard. We do not maintain public client lists, and Gulf Stream clients are never referenced — publicly or privately — without explicit written consent.',
      },
    ],
  },

  // Screen 11: Nearby Locations (Image 4 in remaining screens)
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    headline: 'Serving the Central Palm Beach Barrier Island',
    places: [
      {
        title: 'Delray Beach',
        description: 'Our headquarters. Estate security, executive protection and private events.',
        href: '/locations/delray-beach',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Ocean Ridge',
        description: 'Ultra-exclusive barrier island enclave north of Gulf Stream.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Boca Raton',
        description: 'Premier South Palm Beach County coverage — estates, executives and corporate security.',
        href: '/locations/boca-raton',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
