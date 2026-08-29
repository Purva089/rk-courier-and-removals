import { z } from 'zod';
import * as auth from '../schemas/auth';
import * as shipment from '../schemas/shipment';
import * as quote from '../schemas/quote';
import * as contact from '../schemas/contact';
import * as newsletter from '../schemas/newsletter';
import * as career from '../schemas/career';
import * as testimonial from '../schemas/testimonial';
import * as faq from '../schemas/faq';
import * as service from '../schemas/service';

export type LoginInput = z.infer<typeof auth.loginSchema>;

export type TrackingLookupInput = z.infer<typeof shipment.trackingLookupSchema>;
export type CreateShipmentInput = z.infer<typeof shipment.createShipmentSchema>;
export type UpdateStatusInput = z.infer<typeof shipment.updateStatusSchema>;

export type QuoteRequestInput = z.infer<typeof quote.quoteRequestSchema>;

export type ContactMessageInput = z.infer<typeof contact.contactMessageSchema>;

export type NewsletterSubscribeInput = z.infer<typeof newsletter.newsletterSubscribeSchema>;

export type CreateJobInput = z.infer<typeof career.createJobSchema>;
export type JobApplicationInput = z.infer<typeof career.jobApplicationSchema>;

export type SubmitTestimonialInput = z.infer<typeof testimonial.submitTestimonialSchema>;

export type CreateFaqInput = z.infer<typeof faq.createFaqSchema>;
export type UpdateFaqInput = z.infer<typeof faq.updateFaqSchema>;

export type UpdateServiceInput = z.infer<typeof service.updateServiceSchema>;

export {
  ShipmentStatusEnum
} from '../schemas/shipment';

export {
  JobTypeEnum
} from '../schemas/career';

// API Response generic structure
export interface ApiResponse<T = any> {
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}
