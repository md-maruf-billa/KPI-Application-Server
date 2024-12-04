import { z } from 'zod';

// Define the Zod schema for TGuardiant
const guardianVaidationSchema = z.object({
  name: z.string(),
  contactNo: z.string(),
  guardianType: z.enum(['father', 'mother', 'other']),
});

// Define the Zod schema for TStudent
export const studentValidationSchema = z.object({
  name: z.string(),
  gender: z.enum(['Male', 'Female', 'Other']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  address: z.string(),
  guardian: guardianVaidationSchema,
  profileImage: z.string().optional(),
  admissionSemester: z.string(),
});
