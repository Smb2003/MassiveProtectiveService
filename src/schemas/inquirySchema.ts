import { z } from 'zod';

// US Standard or E.164 phone regex (e.g., +15615550199, (561) 555-0199, 561-555-0199, 5615550199)
const phoneRegex = /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$|^\+?[1-9]\d{1,14}$/;

export const inquirySchema = z.object({
  fullName: z
    .string({
      error: 'Full name is required',
    })
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name cannot exceed 80 characters')
    .refine((val) => !/[<>{}\\]/.test(val), {
      message: 'Name contains invalid characters',
    }),

  email: z
    .string({
      error: 'Email address is required',
    })
    .email('Please enter a valid RFC 5322 email address')
    .max(120, 'Email cannot exceed 120 characters'),

  phone: z
    .string({
      error: 'Contact phone number is required',
    })
    .min(10, 'Phone number must contain at least 10 digits')
    .max(24, 'Phone number exceeds maximum length')
    .refine((val) => phoneRegex.test(val.replace(/\s+/g, ' ')), {
      message: 'Phone must be a valid US format (XXX) XXX-XXXX or E.164 international (+1XXXXXXXXXX)',
    }),

  county: z.enum(['Palm Beach', 'Broward', 'Miami-Dade', 'Visiting Principal'], {
    message: 'Please select a valid Florida territory (Palm Beach, Broward, Miami-Dade, or Visiting Principal)',
  }),

  serviceType: z.enum(
    [
      'Executive Protection',
      'Estate Security',
      'Event Security',
      'VIP/Celebrity',
      'Armed Escort',
      'Armed Security Officers',
      'Concierge Security',
      'Corporate Security',
      'Loss Prevention',
      'Mobile Patrol',
      'School Security',
      'Other',
    ],
    {
      message: 'Please select a valid specialized protection service',
    }
  ),

  locationPreset: z.string().max(100).optional(),
  preferredDate: z.string().max(50).optional(),
  message: z.string().max(1000, 'Special requirements cannot exceed 1000 characters').optional(),
  specialRequirements: z.string().max(1000, 'Special requirements cannot exceed 1000 characters').optional(),
  ndaRequested: z.boolean(),
  requiresArmedDriver: z.boolean(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
