import { TUser } from "./user.interface"
import { userModel } from "./user.schema"

// save a user data in db
const saveUserDataInDB = async (userInfo: TUser) => {
    const result = await userModel.create(userInfo);
    return result;
}


// export all services
export const userServices = {
    saveUserDataInDB
}