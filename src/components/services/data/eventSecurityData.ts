import { ServicePageConfig } from '../types';

export const eventSecurityData: ServicePageConfig = {
  slug: 'event-security',
  hero: {
    serviceName: 'Event Security',
    breadcrumbTitle: 'Event Security',
    headline: 'Event Security Services in Miami & South Florida',
    subtitle:
      'Armed and plain-clothes protection for galas, private parties, VIP appearances and corporate events — from Palm Beach to Boca to Miami.',
    bgImage: '/images/mps_hero_event.jpg',
    primaryCta: {
      label: 'REQUEST EVENT SECURITY',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7',
      href: 'tel:9542347231',
    },
    badges: [
      'FL LICENSE B1400200',
      'ARMED & PLAIN-CLOTHES OFFICERS',
      'FULLY INSURED',
    ],
  },

  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Your guests should never know security is there. Your principal should never be without it.',
    paragraph:
      "Massive Protective provides licensed, discreet event security across South Florida. Whether it's a 12-person estate dinner in Manalapan or a 500-person gala at the Breakers, we deploy the right team, in the right clothes, before the first guest arrives.",
  },

  scope: {
    eyebrow: 'EVENTS WE SECURE',
    headline: 'Full-Service Security for Every Type of Private & VIP Event',
    cards: [
      {
        icon: 'landmark',
        title: 'Private Estate Events & Galas',
        description:
          'Intimate to grand-scale events at private residences, waterfront estates and luxury venues. Access control, perimeter security and discreet personal protection.',
      },
      {
        icon: 'users',
        title: 'VIP & Celebrity Appearances',
        description:
          'Talent arrivals, meet-and-greets and public-facing appearances. Armed escorts, crowd buffer and press-line management — plain-clothes or suited.',
      },
      {
        icon: 'briefcase',
        title: 'Corporate Events & Shareholder Meetings',
        description:
          'Executive protection for keynote speakers, board dinners and high-profile corporate gatherings. Threat assessment included for sensitive events.',
      },
      {
        icon: 'wine',
        title: 'Charity Galas & Fundraisers',
        description:
          'Discreet security that blends into black-tie settings. Armed officers in formal attire, guest screening and venue perimeter coverage.',
      },
      {
        icon: 'ship',
        title: 'Yacht & Waterfront Events',
        description:
          'Dock-side security, vessel access control and on-water personnel for private yacht events, boat shows and waterfront celebrations along the Intracoastal.',
      },
      {
        icon: 'sparkles',
        title: 'Weddings & Private Celebrations',
        description:
          'Guest list management, perimeter coverage and discreet VIP protection so the principal and their family can celebrate without distraction.',
      },
    ],
  },

  audience: {
    eyebrow: 'WHO HIRES US',
    headline: 'Trusted by South Florida’s Most Discerning Event Hosts',
    pillars: [
      {
        icon: 'home',
        title: 'Private Hosts & UHNW Families',
        description:
          'From Palm Beach estate parties to private island gatherings — clients who expect total discretion, armed coverage and zero incidents.',
      },
      {
        icon: 'calendar',
        title: 'Event Planners & Production Companies',
        description:
          "South Florida's top event professionals embed us into the planning timeline early, so security is seamless — never a last-minute add-on.",
      },
      {
        icon: 'building',
        title: 'Venues, Hotels & Resorts',
        description:
          'Luxury properties from Boca Raton to Miami Beach hire Massive for VIP guest coverage, after-hours events and high-profile venue security.',
      },
    ],
  },

  process: {
    eyebrow: 'HOW WE PLAN IT',
    headline: 'Your Security Plan Starts Weeks Before the Event',
    steps: [
      {
        number: '01',
        title: 'Event Brief',
        description:
          'Share the event type, guest count, venue and any known risks. We assess threat level, principal profile and access points within 24 hours.',
      },
      {
        number: '02',
        title: 'Security Plan',
        description:
          'We provide a written security plan: officer count, placement, attire, entry/exit protocols, emergency response and communication chain.',
      },
      {
        number: '03',
        title: 'Deployment',
        description:
          'Our licensed Class D and Class G officers arrive before guests — in formal attire, plain clothes or uniformed, per your plan. Zero visible tension.',
      },
      {
        number: '04',
        title: 'Post-Event Report',
        description:
          'Every engagement closes with an incident report and debrief — so you have documentation and peace of mind, whether or not anything happened.',
      },
    ],
  },

  whyMassive: {
    theme: 'dark',
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'What Sets Our Event Security Apart',
    pillars: [
      {
        icon: 'eye-off',
        title: 'Discretion by Design',
        description:
          'Our officers are trained to blend in. Event guests see professionals — not a security detail. We protect your principal without disrupting your event.',
      },
      {
        icon: 'shield',
        title: 'Armed When It Matters',
        description:
          'All officers hold Florida Class D and Class G licenses. We deploy armed personnel where the risk warrants it — and can do so without formal attire breaking the look.',
      },
      {
        icon: 'file-text',
        title: 'Vetted & Licensed',
        description:
          'FL License B1400200. Every officer is background-checked, Florida-licensed and briefed on your specific event before arrival — no freelancers, no surprises.',
      },
    ],
  },

  serviceArea: {
    eyebrow: 'WHERE WE OPERATE',
    headline: 'Event Security Across Palm Beach, Broward & Miami-Dade',
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
      'Available for out-of-area events on request. Call 24/7 to discuss your location.',
  },

  consultationForm: {
    eyebrow: 'A PRIVATE FIRST CONVERSATION',
    headline: 'Request Event Security — We Respond Within 2 Hours',
    subtitle:
      "Tell us about your event and we'll build a tailored security plan.",
    serviceCategory: 'Event Security',
    secondFieldLabel: 'Event Date',
    secondFieldPlaceholder: 'MM / DD / YYYY',
    secondFieldIcon: 'calendar',
    dropdown1Label: 'Event Type',
    dropdown1Placeholder: 'Select event type',
    needTypes: [
      'Private Estate Event',
      'Gala or Fundraiser',
      'VIP / Celebrity Appearance',
      'Corporate Event',
      'Wedding or Celebration',
      'Yacht or Waterfront Event',
      'Other',
    ],
    defaultNeed: '',
    dropdown2Label: 'Guest Count',
    dropdown2Placeholder: 'Select guest count',
    dropdown2Options: [
      'Under 50',
      '50–150',
      '150–300',
      '300+',
      'Unsure',
    ],
    defaultCoverageStart: '',
    messagePlaceholder:
      'Tell us about your event, venue and any specific security concerns',
    submitButtonText: 'REQUEST MY SECURITY PLAN',
    footerNote: 'FL License B1400200 - All inquiries are strictly confidential',
  },

  faq: {
    eyebrow: 'EVENT SECURITY FAQ',
    headline: 'Your questions, answered.',
    faqs: [
      {
        question: 'How many security guards do I need for an event?',
        answer:
          "It depends on guest count, venue layout, VIP presence and threat level. As a general guide: 1 officer per 50–75 guests for standard events; 1 per 25 for high-risk or VIP-heavy events. We'll recommend the right staffing after your brief.",
      },
      {
        question:
          'What’s the difference between uniformed and plain-clothes event security?',
        answer:
          "Uniformed officers signal visible deterrence — ideal for larger events with public access. Plain-clothes officers blend into black-tie or private settings, protecting principals without changing the event's atmosphere. Massive can provide both.",
      },
      {
        question:
          'Can you provide security for a private party at a home or estate?',
        answer:
          'Yes — private estate events are one of our specialties across Palm Beach, Boca and the Intracoastal. We handle access control, perimeter coverage, staff screening and discreet close protection for the host and any VIPs.',
      },
      {
        question: 'How far in advance should I book event security?',
        answer:
          'For large or high-profile events, 2–4 weeks ahead is ideal for a full security plan. For smaller private events, we can often deploy within 48–72 hours. Contact us as early as possible for Art Basel, Fashion Week or major Miami event weekends.',
      },
      {
        question: 'Are your event security officers armed?',
        answer:
          'Yes, where appropriate. All our officers hold Florida Class D and Class G (firearm) licenses. Armed deployment is determined by threat level, event type and client preference — and is always done discreetly.',
      },
    ],
  },

  relatedServices: {
    eyebrow: 'RELATED SERVICES',
    headline: 'Complete Protection Beyond the Event',
    services: [
      {
        title: 'Executive Protection',
        description:
          'Personal protection for principals, speakers and VIPs before, during and after your event.',
        href: '/executive-protection',
        linkLabel: 'Learn More',
      },
      {
        title: 'Estate Security',
        description:
          'Extend coverage beyond the event to full residential and estate protection for your property.',
        href: '/estate-security',
        linkLabel: 'Learn More',
      },
      {
        title: 'Concierge Security',
        description:
          'Ongoing luxury security retainers for UHNW clients who require coverage across every context — events included.',
        href: '/concierge-security',
        linkLabel: 'Learn More',
      },
    ],
  },
};
