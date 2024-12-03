import { Response } from 'express';
import status from 'http-status';
type TRes<T> = {
  message: string;
  data: T;
};
const manageResponse = <T>(res: Response, resData: TRes<T>) => {
  res.status(status.OK).json({
    success: true,
    message: resData.message,
    data: resData.data,
  });
};

export default manageResponse;
