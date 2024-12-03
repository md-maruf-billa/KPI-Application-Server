import { TUser } from './user.interface';
import { userModel } from './user.schema';

// save a user data in db
const saveUserDataInDB = async (userInfo: TUser) => {
  const result = await userModel.create(userInfo);
  return result;
};
const getAllUsersInDB = async () => {
  const result = await userModel.find();
  return result;
};

// get specific user
const getSpecificUser = async (userId: string) => {
  const result = await userModel.findOne({ id: userId });
  return result;
};

// export all services
export const userServices = {
  saveUserDataInDB,
  getAllUsersInDB,
  getSpecificUser,
};
