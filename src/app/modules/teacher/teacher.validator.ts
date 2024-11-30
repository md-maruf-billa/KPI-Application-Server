import { z } from 'zod';

// Define the Zod schema for teacher
export const teacherValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.enum(['Male', 'Female', 'Other']),
  dateOfBirth: z.date(),
  email: z.string().email(),
  contactNo: z.string(),
  address: z.string(),
  profileImage: z.string().optional(),
  academicTecher: z
    .object({
      name: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
    })
    .optional(),
  academicDepartment: z
    .object({
      name: z.string(),
      academicTecher: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
    })
    .optional(),
  isDeleted: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
