import { z } from 'zod';
import { sanitizeInput } from '@/utils/security';

const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export const inquirySchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .transform(sanitizeInput),
  email: z
    .string()
    .email('Invalid email address')
    .max(120, 'Email cannot exceed 120 characters')
    .transform(sanitizeInput),
  phone: z
    .string()
    .min(10, 'Phone number must have at least 10 digits')
    .refine((val) => phoneRegex.test(val.replace(/[\s()-]/g, '')), {
      message: 'Invalid phone number format (E.164 compliant required)',
    }),
  county: z.enum(['Palm Beach', 'Broward', 'Miami-Dade'], {
    message: 'Please select a valid Florida territory county',
  }),
  serviceType: z.enum(
    [
      'Executive Protection',
      'Estate Security',
      'VIP & Celebrity Protection',
      'Event Security',
      'Armed Transport',
      'Concierge Security',
    ],
    {
      message: 'Please select a valid specialized service',
    }
  ),
  requiresArmedDriver: z.boolean().default(false),
  ndaRequested: z.boolean().default(true),
  notes: z
    .string()
    .max(1000, 'Notes cannot exceed 1000 characters')
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : '')),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
