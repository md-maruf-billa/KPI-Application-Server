import { RequestHandler } from "express";
import status from 'http-status';

const notFound: RequestHandler = (req, res, next) => {
    res.
        status(status.NOT_FOUND)
        .json(
            {
                success: false,
                message: "API Not found!!"
            }
        )
}

export default notFound;