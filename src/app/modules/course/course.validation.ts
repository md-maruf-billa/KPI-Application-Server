import z from 'zod';

const preRequisitCourseSchemaValidation = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});
const createCourseValidationSchema = z.object({
  title: z.string(),
  prefix: z.string(),
  code: z.number(),
  credits: z.number(),
  preRequisitCoureses: z.array(preRequisitCourseSchemaValidation).optional(),
});

// update validation schema
const updateCourseValidationSchema = createCourseValidationSchema.partial();

// export all
export const courseValidation = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
