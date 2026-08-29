import { z } from 'zod';

export enum JobTypeEnum {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT'
}

export const createJobSchema = z.object({
  title: z.string().min(2, "Title is required"),
  department: z.string().min(2, "Department is required"),
  location: z.string().min(2, "Location is required"),
  type: z.nativeEnum(JobTypeEnum),
  description: z.string().min(10, "Description must be at least 10 characters"),
  isActive: z.boolean().default(true)
});

// For public API submission. Resume is handled separately via multipart form.
export const jobApplicationSchema = z.object({
  jobId: z.string().uuid("Invalid job ID"),
  applicantName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  coverNote: z.string().optional()
});
