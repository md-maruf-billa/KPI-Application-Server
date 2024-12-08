import { Request, Response, NextFunction } from 'express';
import { ZodError } from "zod";
import zodErrorHandler from '../../errors/zodErrorHandler';
import serverConfig from '../config';
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // pre defiend valriable
  let statusCode = 500;
  let message = "Something went wrong!!"
  let errorSources = [
    {
      message: "",
      path: ""
    }
  ];
  const stack = serverConfig.env_mode === "development" ? err.stack : null




  // check zod err
  if (err instanceof ZodError) {
    const zodErr = zodErrorHandler(err);
    statusCode = zodErr.statusCode;
    message = zodErr.message;
    errorSources = zodErr.errorSources;

  }


  // send error res
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack
  });
};

export default globalErrorHandler;
