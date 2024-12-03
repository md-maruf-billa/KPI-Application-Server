import z from 'zod';
import { months, semesterCode, semesterName } from './semester.utils';

export const createSemesterValidationSchema = z.object({
    semesterName: z.enum([...semesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...semesterCode] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]])
})