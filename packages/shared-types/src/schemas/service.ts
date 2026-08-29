import { z } from 'zod';

export const updateServiceSchema = z.object({
  title: z.string().min(2, "Title is required").optional(),
  content: z.string().min(10, "Content must be at least 10 characters").optional(),
  order: z.number().int().optional()
});
