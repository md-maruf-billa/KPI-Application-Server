export type TErrorRes = {
  statusCode: number;
  message: string;
  errorSources: {
    message: string;
    path: string;
  }[];
};
