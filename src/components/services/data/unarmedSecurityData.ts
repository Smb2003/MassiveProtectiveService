import { ServicePageConfig } from '../types';

export const unarmedSecurityData: ServicePageConfig = {
  slug: 'unarmed-security-guards',
  hero: {
    serviceName: 'Unarmed Security Guards',
    breadcrumbTitle: 'Unarmed Security Guards',
    headline: 'Unarmed Security Guards in South Florida',
    subtitle:
      'A reassuring presence. Attentive access control, property patrols, and professional front-of-house security — without firearms.',
    bgImage: '/images/mps_service_unarmed_security.jpg',
    alignment: 'center',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7: (954) 234-7231',
      href: 'tel:9542347231',
      icon: 'none',
    },
    badges: [
      'LIC. B1400200',
      'LICENSED & INSURED',
      '24/7 RESPONSE',
      'MIAMI-DADE · BROWARD · PALM BEACH',
    ],
    footnote: 'Illustrative photo · Not actual Massive staff',
  },

  philosophy: {
    theme: 'light',
    variant: 'split-highlight',
    eyebrow: 'Proposed service content — confirm availability and operating details',
    headline: 'A professional presence. A considered approach.',
    paragraph:
      'Not every environment calls for an armed officer. Unarmed security focuses on observation, access control, clear communication, and early escalation. This proposed Massive service is designed for properties where an attentive presence should support everyday operations while helping residents, guests, and staff feel welcome.',
    highlightBox: {
      title: 'Quiet authority. Clear responsibilities.',
      description:
        'Coverage shaped around your property, your people, and agreed post orders.',
    },
  },

  scope: {
    headline: 'What Your Unarmed Security Covers',
    columns: 2,
    cardVariant: 'minimal-gold',
    cards: [
      {
        icon: 'key',
        title: 'Access Control',
        description:
          'Monitor designated entrances, check authorisation, and follow your property’s access rules.',
      },
      {
        icon: 'users',
        title: 'Visitor Management',
        description:
          'Welcome visitors, record arrivals and departures, and coordinate with hosts or building staff.',
      },
      {
        icon: 'route',
        title: 'Property Patrol',
        description:
          'Observe agreed interior and exterior routes, identify concerns, and report unusual activity.',
      },
      {
        icon: 'concierge-bell',
        title: 'Front-of-House Presence',
        description:
          'An approachable, attentive point of contact that supports a calm and professional arrival experience.',
      },
      {
        icon: 'file-text',
        title: 'Incident Reporting',
        description:
          'Document observations, incidents, and actions taken in line with agreed reporting procedures.',
      },
      {
        icon: 'door-open',
        title: 'Opening & Closing Checks',
        description:
          'Check designated doors and common areas against a site-specific checklist at the start or end of the day.',
      },
      {
        icon: 'phone',
        title: 'Emergency Escalation',
        description:
          'Notify designated contacts and emergency services when required, following the site’s escalation plan.',
      },
      {
        icon: 'clipboard-check',
        title: 'Site-Specific Post Orders',
        description:
          'Define responsibilities, patrol routes, reporting contacts, and handover requirements before coverage begins.',
      },
    ],
  },

  audience: {
    theme: 'light',
    variant: 'bordered-cards',
    headline: 'For places where presence matters.',
    cardsPerRow: 4,
    cards: [
      {
        title: 'Commercial Properties',
        description:
          'Office buildings and managed properties balancing controlled access with a welcoming environment.',
      },
      {
        title: 'Residential Communities',
        description:
          'Condominiums and communities seeking visitor coordination and common-area observation.',
      },
      {
        title: 'Luxury Retail & Showrooms',
        description:
          'An attentive entrance presence that complements the customer experience.',
      },
      {
        title: 'Corporate Workplaces',
        description:
          'Reception support, employee access procedures, and communication with site management.',
      },
    ],
  },

  process: {
    headline: 'A clear brief. A purposeful presence.',
    steps: [
      {
        number: '01',
        title: 'Understand the Site',
        description:
          'Discuss your property, opening hours, visitor flow, and the concerns driving your request.',
      },
      {
        number: '02',
        title: 'Define the Assignment',
        description:
          'Agree access rules, patrol areas, reporting needs, and whether unarmed coverage suits the risk.',
      },
      {
        number: '03',
        title: 'Brief the Officer',
        description:
          'Confirm post orders, presentation, shift handovers, and escalation contacts before the assignment.',
      },
      {
        number: '04',
        title: 'Review & Refine',
        description:
          'Review observations with your site contact and adjust agreed duties as requirements change.',
      },
    ],
  },

  whyMassive: {
    theme: 'light',
    variant: 'bordered-cards',
    headline: 'The right presence for your property.',
    pillars: [
      {
        title: 'Uniformed Officers',
        description:
          'A recognisable security presence for entrances, reception areas, and agreed patrol routes. Presentation is confirmed for the site.',
      },
      {
        title: 'Plainclothes Officers',
        description:
          'A less conspicuous presence where appropriate to the assignment. Duties and identification protocols remain clearly defined.',
      },
      {
        title: 'Shift & Post Coverage',
        description:
          'Discuss 8-hour or 12-hour shifts, opening and closing support, or a staffed 24/7 post using multiple shifts. Scheduling is subject to confirmation.',
      },
    ],
    footerNote:
      'Officer availability, shift structure, duties, and pricing are confirmed after a review of the site and scope. No standard fee or deployment time is implied.',
  },

  credentials: {
    theme: 'dark',
    variant: 'cards-3',
    headline: 'Licensed. Clear in scope. Accountable.',
    cards: [
      {
        title: 'Florida Agency Licence',
        description:
          'Massive Protective Services is a licensed and insured Florida security agency. Agency licence B1400200.',
      },
      {
        title: 'Class D · Unarmed',
        description:
          'Florida Class D is the security officer licence used for unarmed security work. This service does not include carrying a firearm.',
      },
      {
        title: 'Class G · Armed',
        description:
          'An armed security assignment requires the appropriate security licence plus a valid Florida Class G statewide firearms licence. Class D alone does not authorise armed duty.',
      },
    ],
    footerNote:
      'Security officers are not law enforcement. Agreed duties focus on observation, communication, de-escalation, and escalation to emergency services where required. A site review determines whether unarmed or armed coverage is appropriate.',
  },

  serviceArea: {
    theme: 'light',
    variant: 'city-cards',
    headline: 'A South Florida presence.',
    subtitle:
      'Serving Miami-Dade, Broward, and Palm Beach. Confirm unarmed service availability and operating details for your location with our team.',
    cities: [
      'Miami',
      'Miami Beach',
      'Fort Lauderdale',
      'Palm Beach',
      'West Palm Beach',
      'Boca Raton',
      'Delray Beach',
      'Aventura',
      'Sunny Isles Beach',
      'Jupiter',
    ],
  },

  faq: {
    theme: 'light',
    headline: 'Your questions, answered.',
    faqs: [
      {
        question: 'What is the difference between Class D and Class G?',
        answer:
          'A Florida Class D licence is the security officer licence used for unarmed security work. Carrying a firearm on an armed security assignment requires the appropriate security licence plus a valid Class G statewide firearms licence. A Class D licence alone does not authorise armed duty.',
      },
      {
        question: 'When is unarmed security appropriate?',
        answer:
          'Unarmed coverage may suit access control, visitor coordination, routine observation, and front-of-house duties. The site’s risks and operating requirements should be reviewed before selecting unarmed or armed coverage.',
      },
      {
        question: 'Can officers work in uniform or plainclothes?',
        answer:
          'Both presentation options can be discussed. The appropriate style, identification, and duties depend on the site and assignment; availability and operating details must be confirmed.',
      },
      {
        question: 'What happens if there is an emergency?',
        answer:
          'Officers follow agreed site procedures, notify designated contacts, and contact emergency services when required. They are not police officers and do not replace law enforcement. For an immediate emergency, call 911.',
      },
      {
        question: 'What shifts can I request, and when can coverage begin?',
        answer:
          'Discuss 8-hour or 12-hour shifts, opening and closing support, or a staffed 24/7 post using multiple shifts. Start dates, staffing, and schedules depend on the scope and availability. No arrival or deployment time is guaranteed.',
      },
      {
        question: 'How much does unarmed security cost?',
        answer:
          'A quote depends on the property, duties, hours, staffing requirements, and duration. Request a confidential consultation to confirm availability and receive a scope-specific quote; no fixed fees are published for this proposed service.',
      },
    ],
  },

  relatedServices: {
    theme: 'light',
    headline: 'A complete circle of protection.',
    services: [
      {
        title: 'Armed Security Guards ↣',
        description:
          'For assignments requiring an armed presence, with the appropriate Florida security and Class G firearms licensing.',
        href: '/armed-officers',
        linkLabel: 'none',
      },
      {
        title: 'Residential Security ↣',
        description:
          'Explore access control and property coverage for private homes, estates, and residential communities.',
        href: '/estate-security',
        linkLabel: 'none',
      },
      {
        title: 'Corporate Security ↣',
        description:
          'Explore security planning and a professional presence for offices and workplace environments.',
        href: '/corporate-security',
        linkLabel: 'none',
      },
    ],
  },

  closingCta: {
    headline: 'Discreet protection, planned around you.',
    subtitle:
      'Tell us what you need protected. A licensed specialist responds within 24 hours, 24/7.',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7: (954) 234-7231',
      href: 'tel:9542347231',
    },
  },
};
