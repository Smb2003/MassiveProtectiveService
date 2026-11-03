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

export interface FortLauderdalePageConfig {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  maritimeSecurity: LocationSplitSectionData;
  neighborhoods: LocationSplitSectionData;
  corridorCoverage: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const fortLauderdaleData: FortLauderdalePageConfig = {
  metaTitle:
    'Private Security & Executive Protection in Fort Lauderdale, FL | Superyacht & Estate Security',
  metaDescription:
    'Armed security, executive protection and maritime services for Fort Lauderdale’s waterfront estates, corporate executives, and superyacht clientele. Licensed, discreet, South Florida-based.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    locationName: 'Fort Lauderdale',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Fort Lauderdale' },
    ],
    eyebrow: '— FORT LAUDERDALE / SOUTH FLORIDA',
    headline: 'Private Security & Executive Protection in Fort Lauderdale, FL',
    subtitle:
      'Armed security, executive protection and estate services for Fort Lauderdale’s waterfront estates, corporate executives and superyacht clientele — licensed, discreet, South Florida-based.',
    bgImage: '/images/mps_location_ftl_hero.jpg',
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
        icon: 'shield-check',
        label: 'ARMED & LICENSED — CLASS G OFFICERS',
      },
      {
        icon: 'anchor',
        label: 'ESTATES · EXECUTIVES · YACHT SEASON',
      },
    ],
  },

  // Screen 2: Philosophy / Statement (Image 2)
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Fort Lauderdale is the yachting capital of the world. It also has one of the most under-served luxury security markets in South Florida.',
    paragraph:
      'Fort Lauderdale has 165 miles of navigable waterways, a boat show that moves $4 billion in yachts every November, superyacht terminals at Port Everglades, and neighborhoods like Las Olas Isles and Harbor Beach where private docks and estate gates sit 30 feet from the water. The security needs here are specific — waterfront perimeters, yacht-side coverage, executive movements through a high-traffic city, and event security at a scale most firms in this market are not equipped for. Massive Protective Services is a licensed, armed security firm based in Delray Beach, 45 minutes north. We serve Fort Lauderdale clients who want a firm that already understands what they’re protecting.',
  },

  // Screen 3: Scope Grid (Image 3)
  servicesGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Fort Lauderdale Estates, Executives & Events',
    cardVariant: 'gold-title',
    cards: [
      {
        icon: 'home',
        title: 'Waterfront & Estate Security',
        description:
          'Armed overnight officers, access control and perimeter patrol for Las Olas Isles, Harbor Beach, Bay Colony and Coral Ridge estates — accounting for dock access, waterway exposure and road-facing perimeter as one plan.',
      },
      {
        icon: 'user',
        title: 'Executive Protection',
        description:
          'Close protection for Fort Lauderdale corporate executives, high-net-worth residents and visiting principals. Advance work, armed driving and consistent officer teams for daily routines and high-profile movements.',
      },
      {
        icon: 'ship',
        title: 'Yacht & Marina Security',
        description:
          'Armed officer coverage for superyacht arrivals, Port Everglades berths and private marina events. Coverage during the Fort Lauderdale International Boat Show and year-round for clients whose primary asset is on the water.',
      },
      {
        icon: 'building',
        title: 'Corporate & Office Security',
        description:
          'On-site armed security for Fort Lauderdale corporate headquarters, executive floors, high-risk terminations and business events where a licensed, professional armed presence is required — not a guard service.',
      },
      {
        icon: 'calendar',
        title: 'Private Event Security',
        description:
          'Estate galas, corporate events, charity dinners and high-profile parties secured by licensed, discreet officers. Crowd management, guest vetting and perimeter coverage for events up to several hundred attendees.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for any Fort Lauderdale assignment — residential, corporate, maritime or event. Vetted, licensed, professional and deployable on short notice.',
      },
    ],
  },

  // Screen 4: Yacht & Maritime Security Split Section with Stats (Image 4)
  maritimeSecurity: {
    eyebrow: 'YACHT & MARITIME SECURITY',
    headline: 'Fort Lauderdale Is the Yachting Capital of the World. Security Should Reflect That.',
    variant: 'cards',
    paragraphs: [
      'The Fort Lauderdale International Boat Show is the largest in-water boat show on earth. Every November, more than $4 billion in yachts — including dozens of superyachts over 100 feet — dock at Las Olas, Bahia Mar and Port Everglades. Owners fly in. Crews cycle. Guests board. The window of exposure is significant, and most security firms in this market have no maritime framework at all.',
      'Massive Protective Services provides armed officer coverage for yacht arrivals and departures, berth-side security during boat show season, private marina events and Port Everglades superyacht terminal coordination. We also serve Fort Lauderdale’s year-round community of liveaboard owners and seasonal yacht residents whose primary security need is on the water, not the road.',
    ],
    stats: [
      {
        value: '$4B+',
        label: 'Yachts at FLIBS annually',
      },
      {
        value: '165 mi',
        label: 'Fort Lauderdale navigable waterways',
      },
      {
        value: '#1',
        label: 'Largest in-water boat show in the world.',
      },
    ],
    items: [
      {
        icon: 'ship',
        title: 'Boat Show Coverage',
        description:
          'Armed officers for yacht-side security during FLIBS at Bahia Mar, Las Olas Marina and Port Everglades. Pre-event advance work available.',
      },
      {
        icon: 'compass',
        title: 'Superyacht Arrivals & Departures',
        description:
          'Coordinated armed coverage for superyacht owner arrivals, departing principals and high-value vessel movements through Fort Lauderdale waterways.',
      },
      {
        icon: 'anchor',
        title: 'Marina & Berth Security',
        description:
          'Overnight armed officer coverage for private marina berths, dock access control and vessel security during extended Fort Lauderdale stays.',
      },
    ],
  },

  // Screen 5 Top: Neighborhoods We Serve (Image 5 Top)
  neighborhoods: {
    eyebrow: 'FORT LAUDERDALE NEIGHBORHOODS WE SERVE',
    headline: 'Waterfront Estates, Executive Corridors and Private Communities',
    variant: 'cards',
    paragraphs: [
      'Fort Lauderdale’s security landscape breaks into three distinct zones. The waterfront residential tier — Las Olas Isles, Harbor Beach, Bay Colony, Coral Ridge — is South Florida’s densest concentration of private dock estates outside Palm Beach Island. Properties here have water exposure on multiple sides and represent the primary estate security market in Broward County.',
      'The corporate corridor — Broward Financial Centre, Las Olas Boulevard, the Flagler Village tech district — generates the executive protection and corporate security demand. And the events market — boat show season, Art Fort Lauderdale, Tortuga Music Festival, South Florida corporate galas — creates a recurring need for event security at a scale that requires genuine licensed capacity, not a staffing agency with shirts.',
    ],
    items: [
      {
        icon: 'home',
        title: 'Las Olas Isles & Harbor Beach',
        description:
          "Fort Lauderdale's premier waterfront estate neighborhoods. Private docks, Intracoastal exposure and estate-level security requirements.",
      },
      {
        icon: 'building',
        title: 'Corporate Corridor',
        description:
          'Las Olas Boulevard to Broward Financial Centre. Executive protection, corporate officer coverage and high-risk termination support.',
      },
      {
        icon: 'calendar',
        title: 'Event Season',
        description:
          'Boat Show, Art Fort Lauderdale, corporate galas. Licensed event security at the scale the Fort Lauderdale calendar demands.',
      },
    ],
  },

  // Screen 5 Bottom: Coverage Area (Image 5 Bottom)
  corridorCoverage: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Fort Lauderdale and Broward County’s Waterfront Corridor',
    variant: 'clean',
    column1: [
      'Las Olas Isles',
      'Harbor Beach',
      'Bay Colony',
      'Coral Ridge',
      'Victoria Park',
      'Rio Vista',
    ],
    column2: [
      'Middle River Terrace',
      'Flagler Village',
      'Port Everglades / Superyacht Terminal',
      'Bahia Mar & Las Olas Marina',
      'Downtown Fort Lauderdale',
      'Fort Lauderdale Beach (A1A)',
    ],
    footnote:
      'We also cover Hillsboro Beach, Lighthouse Point and Deerfield Beach directly from Fort Lauderdale — our Broward County coverage is continuous from the Palm Beach line south.',
  },

  // Screen 6: Process Grid / How We Work (Image 1 in remaining screens)
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'Professional, Licensed, Ready to Deploy',
    steps: [
      {
        number: 'I',
        title: 'Direct Consultation',
        description:
          'One call or a brief form submission — you reach our team, describe your situation, property or event and receive a plan within 24 hours. No sales team, no call center, no delay.',
      },
      {
        number: '2',
        title: 'Assessment & Planning',
        description:
          'Property walkthrough or remote estate assessment, event brief or executive threat review — whatever your situation requires. Written security plan delivered before any officer is placed.',
      },
      {
        number: '3',
        title: 'Officer Deployment',
        description:
          'Vetted, licensed officers matched to your assignment and briefed before the first shift. Armed or plain-clothes, overnight or event-based, residential or corporate — matched precisely to what you need.',
      },
      {
        number: '4',
        title: 'Documented, Consistent Coverage',
        description:
          'Written shift reports. Consistent officer assignments. Monthly client reviews. NDAs as standard. Every engagement runs at the same standard — no gaps, no improvisation, no excuses.',
      },
    ],
  },

  // Screen 7: Why Massive Protective (Image 2 Top in remaining screens)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'South Florida Licensed. Armed. Already in Your Market.',
    theme: 'dark',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Based in South Florida',
        description:
          'Our Delray Beach headquarters puts us 45 minutes north of Fort Lauderdale on I-95. We are a South Florida firm — not a national company with a regional rep. We know this market because we operate in it every day.',
      },
      {
        icon: 'file-text',
        title: 'Licensed and Verifiable',
        description:
          'FL Agency License B1400200, verifiable on FDACS. Every officer licensed under Chapter 493, Florida Statutes. No staffing agency fills, no unlicensed personnel, no subcontracting of your security to a third party.',
      },
      {
        icon: 'shield-check',
        title: 'Armed, Not Just Present',
        description:
          'Most Fort Lauderdale security providers offer unarmed guard services. Massive Protective fields Class G licensed armed officers — trained, licensed, accountable and suited to the property values and client profile of this market.',
      },
    ],
  },

  // Screen 8: Nearby Coverage Cards (Image 2 Bottom in remaining screens)
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Broward and Palm Beach County — Full Corridor Coverage',
    cards: [
      {
        title: 'Lighthouse Point',
        description: 'Canal-front estates and private docks — just north of Fort Lauderdale.',
        href: '#consultation-form',
      },
      {
        title: 'Hillsboro Beach',
        description: 'Broward’s most exclusive barrier island town.',
        href: '#consultation-form',
      },
      {
        title: 'Boca Raton',
        description: 'South Palm Beach County estates, executives and private events.',
        href: '/locations/boca-raton',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters — estate security, EP and private events.',
        href: '/locations/delray-beach',
      },
    ],
  },

  // Screen 10: Security FAQ (Image 4 in remaining screens)
  faq: {
    eyebrow: 'FORT LAUDERDALE SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Does Massive Protective Services operate in Fort Lauderdale?',
        answer:
          'Yes. Fort Lauderdale is one of our primary Broward County service areas. We provide armed security officers, executive protection, estate security and event security throughout Fort Lauderdale — including waterfront neighborhoods, corporate corridors and yacht/marina assignments.',
      },
      {
        question: 'Do you provide yacht and marina security in Fort Lauderdale?',
        answer:
          'Yes. We provide armed officer coverage for superyacht arrivals and departures, private marina berth security, Port Everglades superyacht terminal coordination and Fort Lauderdale International Boat Show coverage. Yacht and maritime security is a specialized service we offer specifically because of Fort Lauderdale’s waterfront profile.',
      },
      {
        question: 'Do you offer armed security for Fort Lauderdale estates?',
        answer:
          'Yes. Florida Class G licensed armed officers for residential overnight coverage, access control and perimeter security is one of our core services for Fort Lauderdale waterfront estates — including Las Olas Isles, Harbor Beach, Bay Colony and Coral Ridge.',
      },
      {
        question: 'Can you provide executive protection for Fort Lauderdale corporate clients?',
        answer:
          'Yes. Close protection for executives, corporate principals and high-net-worth individuals — including armed driving, advance work and consistent officer assignment — is available for Fort Lauderdale corporate clients on a retainer or per-engagement basis.',
      },
      {
        question: 'Do you cover Fort Lauderdale events, including the Boat Show?',
        answer:
          'Yes. We provide licensed event security for corporate galas, private estate events, yacht-side events and public venue events in Fort Lauderdale. We cover the Fort Lauderdale International Boat Show annually — waterside and venue-side — and are available for advance booking well ahead of peak season.',
      },
    ],
  },

  // Screen 11: Nearby Locations (Image 5 in remaining screens)
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    headline: 'Serving Broward and Palm Beach Counties',
    places: [
      {
        title: 'Boca Raton',
        description: 'Premier South Palm Beach County — estates, executives and private events.',
        href: '/locations/boca-raton',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Lighthouse Point',
        description: 'Broward County canal-front and Intracoastal estate security.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters city — the full suite of MPS services.',
        href: '/locations/delray-beach',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
