import { userServices } from "./user.service";
import { userValidationSchema } from "./user.validator";
import manageResponse from "../../utils/response";
import catchAsync from "../../utils/catchAsync";


// create user controller
const createUser = catchAsync(async (req, res, next) => {

    const userData = req?.body;
    // const validetData = userValidationSchema.parse(userData);
    const result = await userServices.saveUserDataInDB(userData);
    manageResponse(res, { message: "User Created successfully!!", data: result });

})
// get all users
const getAllUsers = catchAsync(async (req, res, next) => {

    const result = await userServices.getAllUsersInDB();
    manageResponse(res, { message: "User successuflly retived.", data: result });

})
// get specific user
const getSpecificUser = catchAsync(
    async (req, res, next) => {
        const userID = req.params.userID;
        const result = await userServices.getSpecificUser(userID as string);
        manageResponse(res, { message: "user successfully retived", data: result });

    }
)

// export all controllers
export const userController = {
    createUser,
    getAllUsers,
    getSpecificUser
}