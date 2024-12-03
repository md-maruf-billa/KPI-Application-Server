import { TUser } from '../users/user.interface';
import { TStudent } from './student.interface';

// create student into db
const createStudentInoDB = async (payload: TStudent) => {
  // step-1: create a user first
  const userData: Partial<TUser> = {};
  // set password
  userData.password = 'student123';
  // set role
  userData.role = 'student';
};
