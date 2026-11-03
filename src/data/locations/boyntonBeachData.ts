import {
  LocationHeroData,
  LocationProximityAdvantageData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceWhyMassiveData,
  ServiceCredentialsData,
  ServiceFAQData,
  ServiceClosingCTAData,
} from '@/components/services/types';

export interface BoyntonBeachPageConfig {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  proximityAdvantage: LocationProximityAdvantageData;
  servicesGrid: ServiceScopeData;
  aboutBoynton: ServicePhilosophyData;
  whatSeparatesUs: ServiceWhyMassiveData;
  credentials: ServiceCredentialsData;
  faq: ServiceFAQData;
  closingCta: ServiceClosingCTAData;
}

export const boyntonBeachData: BoyntonBeachPageConfig = {
  metaTitle:
    'Armed Security & Executive Protection Boynton Beach, FL | Massive Protective Services',
  metaDescription:
    'Headquartered in Delray Beach directly adjacent to Boynton Beach. Rapid-response armed security for Intracoastal estates, Quantum Park corporate campuses, and private events. FL License B1400200.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    locationName: 'Boynton Beach',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Boynton Beach' },
    ],
    eyebrow: 'ARMED SECURITY · BOYNTON BEACH, FLORIDA',
    headline: 'Boynton Beach Armed Security — Based Next Door, Not an Hour Away',
    subtitle:
      'Massive Protective Services is headquartered in Delray Beach — directly adjacent to Boynton Beach. Our officers know this market, know these roads and respond faster here than any firm based in Miami or Fort Lauderdale. Licensed armed security for Boynton Beach residential estates, corporate principals and private events. FL License B1400200.',
    bgImage: '/images/mps_location_boynton_hero.jpg',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW SERVICES →',
      href: '#services',
    },
    badges: [
      {
        icon: 'file-text',
        label: 'FL LICENSE B1400200',
      },
      {
        icon: 'map-pin',
        label: 'HQ: DELRAY BEACH — ADJACENT TO BOYNTON BEACH',
      },
      {
        icon: 'shield',
        label: 'ARMED OFFICERS — CLASS G LICENSED',
      },
      {
        icon: 'clock',
        label: '24/7 AVAILABILITY',
      },
    ],
  },

  // Screen 2: Philosophy / Home Market Statement (Image 2)
  philosophy: {
    variant: 'two-column-prose',
    headline: 'Boynton Beach Is Our Home Market — Not a Service Area on a Map',
    column1Paragraphs: [
      'Boynton Beach sits directly north of Delray Beach — where Massive Protective Services is headquartered. For most security firms in South Florida, Boynton Beach is a dot on a service area map. For us, it is the market we drive through every day.',
      'That familiarity matters operationally. Our officers know the Intracoastal communities along Federal Highway, the corporate corridor at Quantum Park, the residential neighborhoods between Congress Avenue and Military Trail, and the waterfront properties along the eastern edge of the city. Local knowledge is not a marketing line — it is what determines response quality when something actually happens.',
    ],
    column2Paragraphs: [
      'Boynton Beach has changed significantly over the past decade. The Intracoastal waterfront corridor has seen substantial appreciation in residential property values. The corporate and executive population along the I-95 corridor has grown. Renaissance Commons and the Quantum Park business district have brought a professional client base that previously traveled to Boca Raton or Palm Beach for services.',
      'The security needs of this evolving market are not being met by guard companies. Massive Protective Services provides licensed armed security for the residential, corporate and event security requirements of Boynton Beach’s growing executive and high-net-worth community — from the Intracoastal estates to the Quantum Park corporate campus.',
    ],
  },

  // Screen 3: Proximity Advantage (Image 3)
  proximityAdvantage: {
    eyebrow: 'THE PROXIMITY ADVANTAGE',
    headline: 'Our Headquarters Is Your Neighbor. That Changes What Security Looks Like.',
    paragraphs: [
      'Most private security firms serving Palm Beach County are based in Miami, Fort Lauderdale or Boca Raton. When they send an officer to a Boynton Beach property, that officer has driven 30 to 60 minutes before the shift begins — and will drive back after it ends. That commute affects availability, response time and officer consistency.',
      'Massive Protective Services is headquartered in Delray Beach, directly on Boynton Beach’s southern border. Our officers are already here. They live and work in this market. They can be on a Boynton Beach property in minutes — not 45 minutes — and they can staff consistent assignments without the logistical friction that distance creates.',
      'This matters most in three situations: emergency response, same-day deployment requests and ongoing residential security where officer consistency is essential. On all three, proximity is an operational advantage that no out-of-area firm can replicate with a larger team or a lower rate.',
    ],
    cards: [
      {
        icon: 'clock',
        title: 'Fastest Local Response',
        description:
          'Boynton Beach is our adjacent market. Response times here are shorter than anywhere else we serve — because we are already here.',
      },
      {
        icon: 'map-pin',
        title: 'Officers Who Know the Area',
        description:
          'Our officers know Boynton Beach’s roads, neighborhoods, access patterns and venue layouts. That knowledge is operational — it affects how quickly a situation is assessed and how well a deployment is planned.',
      },
      {
        icon: 'calendar',
        title: 'Same-Day Deployment',
        description:
          'For urgent or same-day security requests in Boynton Beach, our proximity makes deployment feasible when an out-of-area firm cannot staff in time. Call 24/7.',
      },
    ],
  },

  // Screen 4: Services Grid (Image 4)
  servicesGrid: {
    eyebrow: 'OUR SERVICES IN BOYNTON BEACH',
    headline: 'Armed Security Services for Boynton Beach Residents, Executives and Businesses',
    columns: 4,
    cardVariant: 'white-title',
    cards: [
      {
        icon: 'home',
        title: 'Estate & Residential Security',
        description:
          'Armed security for Boynton Beach residential properties and waterfront estates along the Intracoastal corridor. Consistent officer assignment, written security plan, shift reports.',
      },
      {
        icon: 'user',
        title: 'Executive Protection',
        description:
          'Armed principal protection for Boynton Beach executives, corporate officers and high-net-worth individuals. Advance work, threat assessment and written protection plans on every engagement.',
      },
      {
        icon: 'building',
        title: 'Corporate & Business Security',
        description:
          'Armed security for corporate principals, executive offices and business campuses in Boynton Beach’s Quantum Park corridor and surrounding commercial districts. Tailored to the specific operating environment.',
      },
      {
        icon: 'calendar',
        title: 'Event Security',
        description:
          'Armed and plain-clothes security for private events hosted in Boynton Beach — estate events, corporate functions and private gatherings. Access control, perimeter coverage and principal protection integrated.',
      },
    ],
  },

  // Screen 5: About Boynton Beach (Image 5)
  aboutBoynton: {
    variant: 'two-column-prose',
    eyebrow: 'ABOUT BOYNTON BEACH',
    headline: 'A Growing Executive Market in the Heart of Palm Beach County',
    column1Paragraphs: [
      'Boynton Beach is the third-largest city in Palm Beach County by population — approximately 80,000 residents — and one of the county’s fastest-growing markets for executive residential and corporate investment. The city sits between Delray Beach to the south and Lake Worth Beach to the north, with Interstate 95 and US-1 as its primary north-south corridors.',
      'The eastern edge of Boynton Beach borders the Intracoastal Waterway, where properties in the eastern Intracoastal corridor have seen significant appreciation. The waterfront communities east of Federal Highway — including properties along the Intracoastal — represent the city’s highest-value residential concentration.',
    ],
    column2Paragraphs: [
      'Quantum Park & Village, in the Gateway Boulevard business area, is one of Palm Beach County’s major corporate business parks — home to technology, healthcare and professional services firms that bring a significant executive and corporate security client base to the area.',
      'Renaissance Commons, a mixed-use development at the southeast corner of Gateway Boulevard and Congress Avenue, represents the city’s newer commercial and residential growth corridor. For Massive Protective Services, Boynton Beach is not a distant market — it is the adjacent community to our Delray Beach headquarters, and it is where we have operated since the firm’s founding.',
    ],
  },

  // Screen 6: What Separates Us in the Boynton Beach Market (Image 1)
  whatSeparatesUs: {
    eyebrow: 'WHY MASSIVE PROTECTIVE SERVICES',
    headline: 'What Separates Us in the Boynton Beach Market',
    variant: 'vertical-bars',
    theme: 'dark',
    pillars: [
      {
        title: 'We Are Already Here',
        description:
          'Delray Beach headquarters means Boynton Beach is our home territory — not a service zone we drive into from another county.',
      },
      {
        title: 'Armed Officers Only — Class G Licensed',
        description:
          'Every officer we deploy holds a Florida Class G Statewide Firearm License. We do not deploy unarmed personnel. FL License B1400200, verifiable on FDACS.',
      },
      {
        title: 'Written Plans Before Every Deployment',
        description:
          'Every engagement begins with a written security plan. No officer arrives at a Boynton Beach property without knowing the layout, protocols and client-specific instructions.',
      },
      {
        title: 'Consistent Officer Assignment',
        description:
          'The same officer returns for every shift. No rotating pools, no unfamiliar faces. Officer consistency is what makes a security relationship work — and it is easier to maintain when we are local.',
      },
      {
        title: 'Direct Communication With Marc Tardalo',
        description:
          'Boynton Beach clients deal with Marc directly — not a dispatcher or a regional manager. When something changes, you have a direct line to the person responsible for your security.',
      },
    ],
    verifyLink: {
      label: 'Verify agency licence on FDACS',
      href: 'https://www.fdacs.gov/Business-Services/Private-Investigation-Licenses',
    },
  },

  // Screen 7: Credentials (Image 2)
  credentials: {
    theme: 'dark',
    showBottomDivider: false,
    cards: [
      {
        icon: 'file-text',
        label: 'FL Agency License:',
        value: 'B1400200',
      },
      {
        icon: 'shield',
        label: 'Officer License:',
        value: 'Class G Statewide Firearm',
      },
      {
        icon: 'book-open',
        label: 'Governing Law:',
        value: 'Chapter 493, FL Statutes',
      },
      {
        icon: 'map-pin',
        label: 'HQ:',
        value: 'Delray Beach, FL — Adjacent Market',
      },
    ],
  },

  // Screen 8: FAQ (Image 3)
  faq: {
    eyebrow: 'BOYNTON BEACH SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'How quickly can you respond to a security request in Boynton Beach?',
        answer:
          'Boynton Beach is directly adjacent to our Delray Beach headquarters — it is our fastest-response market. For urgent or same-day requests, call us at (954) 234-7231. We are available 24/7.',
      },
      {
        question: 'Do you serve the Quantum Park corporate corridor in Boynton Beach?',
        answer:
          'Yes. We provide armed security and executive protection for corporate principals, business officers and executive-level staff operating in Boynton Beach’s Quantum Park corridor and surrounding commercial districts.',
      },
      {
        question: 'Do you serve the Intracoastal waterfront residential communities in Boynton Beach?',
        answer:
          'Yes. The Intracoastal-adjacent residential communities along the eastern edge of Boynton Beach are part of our primary service territory. We provide estate security, residential armed security and mobile patrol for properties in this corridor.',
      },
      {
        question: 'Are your officers licensed to carry firearms in Boynton Beach?',
        answer:
          'Yes. Every officer deployed by Massive Protective Services holds a Florida Class G Statewide Firearm License — the state-required credential for armed security officers under Chapter 493, Florida Statutes. Agency License B1400200 is publicly verifiable through FDACS.',
      },
      {
        question: 'Do you serve other cities near Boynton Beach?',
        answer:
          'Yes. We serve Delray Beach, Boca Raton, Lake Worth Beach, Lantana, Hypoluxo, Highland Beach and the broader Palm Beach County area, as well as Broward and Miami-Dade counties.',
      },
    ],
  },

  // Screen 9: Closing CTA (Image 4)
  closingCta: {
    headline: 'Boynton Beach Security — Your Neighbor, Not a Vendor',
    subtitle:
      'Confidential consultation — direct conversation with Marc Tardalo. No sales process, no obligation.',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW ALL LOCATIONS →',
      href: '/locations',
    },
    disclaimer:
      'FL License B1400200 · Delray Beach HQ · Boynton Beach & Palm Beach County · Chapter 493, FL Statutes · 24/7',
  },
};
