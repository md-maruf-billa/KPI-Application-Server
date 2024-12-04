import z from 'zod';

export const facaltyValidation = z.object({
    name: z.string()
})