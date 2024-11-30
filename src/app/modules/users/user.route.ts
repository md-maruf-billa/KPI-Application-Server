import { Router } from "express";
import { userController } from "./user.controller";

// create a route
const userRoute = Router();

userRoute.post("/", userController.createUser)


// export this route
export default userRoute;