import { z } from 'zod';

export const submitTestimonialSchema = z.object({
  authorName: z.string().min(2, "Name is required"),
  authorRole: z.string().optional(),
  company: z.string().optional(),
  content: z.string().min(10, "Testimonial content must be at least 10 characters"),
  rating: z.number().int().min(1).max(5)
});
