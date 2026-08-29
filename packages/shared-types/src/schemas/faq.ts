import { z } from 'zod';

export const createFaqSchema = z.object({
  question: z.string().min(5, "Question must be at least 5 characters"),
  answer: z.string().min(5, "Answer must be at least 5 characters"),
  order: z.number().int().default(0)
});

export const updateFaqSchema = createFaqSchema.partial();
