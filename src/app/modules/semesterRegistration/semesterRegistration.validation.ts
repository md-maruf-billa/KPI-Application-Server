import z from 'zod';
import { semesterRegistrationStatus } from './semesterRegistration.constant';

const createSemesterRegistrationValidation = z.object({
  semester: z.string(),
  status: z
    .enum([...(semesterRegistrationStatus as [string, ...string[]])])
    .default('UPCOMING'),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  minCredit: z.number(),
  maxCredit: z.number(),
});

const updateSemesterRegistrationValidation = z.object({
  semester: z.string().optional(),
  status: z
    .enum([...(semesterRegistrationStatus as [string, ...string[]])])
    .default('UPCOMING')
    .optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  minCredit: z.number().optional(),
  maxCredit: z.number().optional(),
});

// export all
export const semesterRegistrationValidations = {
  createSemesterRegistrationValidation,
  updateSemesterRegistrationValidation,
};
