import z from 'zod';

export const facaltyValidation = z.object({
  name: z.string({
    invalid_type_error: 'Faculty must be an string!!',
  }),
});
