import { ZodError } from "zod";
import { TErrorRes } from "../shared/globalTypes";
import httpStatus from "http-status";

const zodErrorHandler = (err: ZodError): TErrorRes => {
    const errors = err.issues.map((issue) => {
        return {
            message: issue.message,
            path: issue.path[issue.path.length - 1] as string,
        };
    });

    return {
        statusCode: httpStatus.BAD_REQUEST,
        message: "Validation Failed !!",
        errorSources: errors,
        
    };
};

export default zodErrorHandler;
