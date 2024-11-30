import { Request, Response } from "express";
import { userServices } from "./user.service";
import { userValidationSchema } from "./user.validator";

// create user controller
const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req?.body;
        const validetData = userValidationSchema.parse(userData);
        const result = await userServices.saveUserDataInDB(validetData);
        res.status(200).send(result);

    } catch (err: any) {
        console.log(err)
    }
}


// export all controllers
export const userController = {
    createUser
}