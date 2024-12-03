import { z } from 'zod';

// Define the Zod schema
export const userValidationSchema = z.object({
  id: z.string(),
  password: z.string(),
  neededPasswordChange: z.boolean(),
  role: z.enum(['student', 'teacher', 'admin']),
  isDeleted: z.boolean().default(false),
});
