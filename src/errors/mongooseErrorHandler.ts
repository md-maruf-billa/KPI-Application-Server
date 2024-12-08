import mongoose from "mongoose";
import { TErrorRes } from "../shared/globalTypes";
import httpStatus from "http-status";

const mongooseErrorHandler = (err: mongoose.Error.ValidationError): TErrorRes => {
    const errors = Object.values(err.errors).map((issue) => {
        return {
            message: issue.message,
            path: issue.name,
        };
    });

    return {
        statusCode: httpStatus.BAD_REQUEST,
        message: "Validation Failed !!",
        errorSources: errors,

    };
};

export default mongooseErrorHandler;
