import { z } from 'zod';

// Define the Zod schema for TGuardiant
const guardiantVaidationSchema = z.object({
  name: z.string(),
  contactNo: z.string(),
  guardiantType: z.enum(['father', 'mother', 'other']),
});

// Define the Zod schema for TStudent
export const studentValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.enum(['Male', 'Female', 'Other']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  address: z.string(),
  guardiant: guardiantVaidationSchema,
  profileImage: z.string().optional(),
  admissionSemester: z.enum(['1', '2', '3', '4', '5', '6', '7', '8']),
});
