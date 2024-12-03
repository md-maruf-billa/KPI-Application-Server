import { Request, Response, NextFunction } from 'express';
import status from 'http-status';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: err?.message || 'Something went wrong!!',
    error: err,
  });
};

export default globalErrorHandler;
