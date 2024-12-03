import { Router } from "express";
import { userController } from "./user.controller";
import validateUser from "../../middleware/validetUser";
import { userValidationSchema } from "./user.validator";

// create a route
const userRoute = Router();
// create a user
userRoute.post("/", validateUser(userValidationSchema), userController.createUser);
// get all user
userRoute.get("/", userController.getAllUsers)
// get specific user
userRoute.get("/:userID", userController.getSpecificUser)
// export this route
export default userRoute;