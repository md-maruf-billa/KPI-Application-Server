import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validetSenderInfo = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
    } catch (err) {
      next(err);
    }
    return next();
  };
};

export default validetSenderInfo;
