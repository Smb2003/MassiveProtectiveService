import { ServicePageConfig } from '../types';

export const estateSecurityData: ServicePageConfig = {
  slug: 'estate-security',
  hero: {
    serviceName: 'Estate & Residential Security',
    breadcrumbTitle: 'Estate & Residential Security',
    headline: 'Estate & Residential Security Services in South Florida',
    subtitle:
      'Armed officers, access control, overnight coverage and private event protection for Palm Beach, Boca Raton, Manalapan and the South Florida coast.',
    bgImage: '/images/mps_hero_estate.jpg',
    primaryCta: {
      label: 'REQUEST RESIDENTIAL SECURITY',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7',
      href: 'tel:9542347231',
    },
    badges: [
      'FL LICENSE B1400200',
      'ARMED OFFICERS AVAILABLE',
      'SEASONAL & YEAR-ROUND COVERAGE',
    ],
  },

  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Your home is your most private space. Who’s protecting it while you sleep — and while you’re away?',
    paragraph:
      "Massive Protective provides licensed residential and estate security across South Florida's most exclusive communities. From gated Palm Beach estates to Intracoastal waterfront homes, we deploy discreet armed officers who protect your property, your family and your privacy — around the clock.",
  },

  scope: {
    eyebrow: 'WHAT WE COVER',
    headline: 'Full-Spectrum Estate & Residential Security',
    cards: [
      {
        icon: 'shield-check',
        title: 'Armed Officers & Overnight Watch',
        description:
          'Licensed Class D and Class G officers on-site through the night. Your property is covered when it matters most — visible deterrence and rapid response.',
      },
      {
        icon: 'door-closed',
        title: 'Gate & Access Control',
        description:
          'Visitor screening, delivery management and household staff access protocols. We control who enters your property and maintain a log of every arrival.',
      },
      {
        icon: 'scan',
        title: 'Perimeter & Patrol Coverage',
        description:
          'Scheduled exterior patrols, perimeter checks and vehicle sweeps. We identify vulnerabilities before they become incidents.',
      },
      {
        icon: 'clipboard-check',
        title: 'Household Staff & Vendor Screening',
        description:
          'We vet housekeepers, contractors, service providers and recurring vendors accessing your estate — background checks and access protocols included.',
      },
      {
        icon: 'home',
        title: 'Seasonal Residence Protection',
        description:
          "Protecting your South Florida home while you're away. Scheduled patrol checks, emergency response and property monitoring for snowbird and seasonal owners.",
      },
      {
        icon: 'wine',
        title: 'Private Events at Home',
        description:
          'Galas, family celebrations and intimate gatherings at your estate. Discreet security that blends in, controls access and protects your principal.',
      },
    ],
  },

  audience: {
    eyebrow: 'WHO HIRES US',
    headline: 'South Florida’s Most Private Residences Trust Massive',
    pillars: [
      {
        icon: 'home',
        title: 'UHNW Families & Estate Owners',
        description:
          "Palm Beach, Manalapan, Boca Raton and Highland Beach — the families in South Florida's most exclusive ZIP codes who require full-time, discreet protection.",
      },
      {
        icon: 'calendar',
        title: 'Seasonal & Part-Year Residents',
        description:
          "Snowbirds and international owners who need their Florida property protected year-round, even when they're not there. Patrol, monitoring and emergency response on retainer.",
      },
      {
        icon: 'landmark',
        title: 'Family Offices & Private Wealth Clients',
        description:
          'Coordinated security that works alongside your household manager, estate staff and travel team — fully integrated, never intrusive.',
      },
    ],
  },

  process: {
    eyebrow: 'OUR PROCESS',
    headline: 'Your Estate Security Programme Starts With a Site Visit',
    steps: [
      {
        number: '1',
        title: 'Site Assessment',
        description:
          'We walk your property, identify access points, perimeter risks and household vulnerabilities. You receive a written security assessment within 48 hours.',
      },
      {
        number: '2',
        title: 'Security Plan',
        description:
          'A tailored programme: officer schedule, patrol routes, access control protocols, emergency response chain and household staff procedures.',
      },
      {
        number: '3',
        title: 'Officer Deployment',
        description:
          'Licensed, vetted Class D and Class G officers deployed on your schedule — nightly, 24/7 or seasonal. Continuity of coverage, same team.',
      },
      {
        number: '4',
        title: 'Ongoing Review',
        description:
          'Monthly check-ins, incident reporting and plan updates as your needs change — travel schedules, new staff, events or elevated threat periods.',
      },
    ],
  },

  whyMassive: {
    theme: 'dark',
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'Residential Security Built for South Florida’s Most Demanding Clients',
    pillars: [
      {
        icon: 'eye-off',
        title: 'Privacy Is Non-Negotiable',
        description:
          "We don't discuss our clients, their properties or their schedules. NDAs available on request. Our officers are trained for discretion first, deterrence second.",
      },
      {
        icon: 'shield',
        title: 'Armed When It Matters',
        description:
          'All officers hold Florida Class D and Class G licenses. We deploy armed personnel for overnight coverage, elevated-risk periods and high-value residences.',
      },
      {
        icon: 'file-text',
        title: 'Local Knowledge, FL Licensed',
        description:
          "FL License B1400200. We know South Florida's gated communities, HOA protocols, marina access and county response times. This isn't generic guard service.",
      },
    ],
  },

  serviceArea: {
    eyebrow: 'SERVICE AREA',
    headline: 'Residential Security Across Palm Beach, Broward & Miami-Dade',
    citiesColumn1: [
      'Palm Beach',
      'Delray Beach',
      'Boca Raton',
      'Pompano Beach',
      'Fort Lauderdale',
      'Deerfield Beach',
    ],
    citiesColumn2: [
      'Highland Beach',
      'Boynton Beach',
      'West Palm Beach',
      'Manalapan',
      'Miami',
    ],
    footerNote:
      "We serve South Florida's most exclusive coastal communities. Contact us for coverage beyond these areas or for multi-property programmes.",
  },

  consultationForm: {
    eyebrow: 'A PRIVATE FIRST CONVERSATION',
    headline: 'Request Residential Security — We Respond Within 2 Hours',
    subtitle:
      "Tell us about your property and we'll design a security programme around it.",
    serviceCategory: 'Estate & Residential Security',
    propertyLocationLabel: 'Property City / Location',
    propertyLocationPlaceholder: 'Property city or location',
    needTypes: [
      'Overnight',
      'Armed Officers',
      'Full-Time Programme',
      'Seasonal',
      'Private Event at Home',
      'Other',
    ],
    defaultNeed: '',
    coverageStartOptions: [
      'Immediately',
      'Within 2 Weeks',
      'Planning Ahead',
      'Unsure',
    ],
    defaultCoverageStart: '',
    messagePlaceholder:
      'Describe your property, household and any specific security concerns',
    submitButtonText: 'REQUEST MY SECURITY PROGRAMME',
    footerNote: 'FL License B1400200 - All inquiries strictly confidential',
  },

  faq: {
    eyebrow: 'RESIDENTIAL SECURITY FAQ',
    headline: 'Your questions, answered.',
    faqs: [
      {
        question: 'What does residential estate security include?',
        answer:
          "An estate security programme typically includes armed officer deployment, perimeter patrols, gate and access control, visitor/vendor screening, overnight watch and private event coverage. Every programme is tailored to your property's size, layout and threat profile.",
      },
      {
        question: 'Do you provide overnight security for homes?',
        answer:
          'Yes. Overnight armed officers are one of our most requested services across Palm Beach and Boca Raton. Officers are on-site from arrival to departure — no gaps, no handoffs to a monitoring center.',
      },
      {
        question: 'Can you protect my property while I’m away?',
        answer:
          'Yes — seasonal and absentee residence protection is a specialty. We run scheduled patrols, respond to alarm activations and coordinate with your property manager while you’re away. Contact us to discuss a retainer.',
      },
      {
        question: 'Can you secure a private event at my home?',
        answer:
          'Absolutely. Private estate events are a core service — access control, perimeter coverage, discreet armed officers and VIP protection for your principal and guests. See our Event Security page for full details.',
      },
      {
        question: 'How much does private residential security cost?',
        answer:
          "Cost depends on property size, officer count, coverage hours and programme length. We don't publish rates because every engagement is custom-scoped. Contact us for a confidential consultation and written proposal.",
      },
    ],
  },

  relatedServices: {
    eyebrow: 'RELATED SERVICES',
    headline: 'Complete Protection for Your Home, Family and Lifestyle',
    services: [
      {
        title: 'Executive Protection',
        description:
          'Extend residential security into travel, the office and public appearances with a dedicated protection detail.',
        href: '/executive-protection',
        linkLabel: 'Learn More',
      },
      {
        title: 'Event Security',
        description:
          'Private parties, estate galas and family celebrations secured by our discreet licensed team.',
        href: '/event-security',
        linkLabel: 'Learn More',
      },
      {
        title: 'Concierge Security',
        description:
          'An ongoing retainer that covers your home, travel, events and family — one team, total coverage.',
        href: '/concierge-security',
        linkLabel: 'Learn More',
      },
    ],
  },
};
