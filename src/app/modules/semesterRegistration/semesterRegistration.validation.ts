import z from 'zod';
import { semesterRegistrationStatus } from './semesterRegistration.constant';

const createSemesterRegistrationValidation = z.object({
    semester: z.string(),
    status: z.enum([...semesterRegistrationStatus as [string, ...string[]]]).default("UPCOMING"),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    minCredit: z.number(),
    maxCredit: z.number(),
})


// export all
export const semesterRegistrationValidations = {
    createSemesterRegistrationValidation
}