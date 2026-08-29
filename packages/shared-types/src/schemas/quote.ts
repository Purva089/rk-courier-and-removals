import { z } from 'zod';

export const quoteRequestSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  originCity: z.string().min(2, "Origin country is required"),
  destinationCity: z.string().min(2, "Destination country is required"),
  serviceType: z.string().min(2, "Service type is required"),
  packageWeightKg: z.number().positive("Weight must be positive"),
  message: z.string().optional()
});
