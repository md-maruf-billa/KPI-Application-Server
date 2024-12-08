import AppError from '../../../errors/appError';
import QueryBuilder from '../../build/queryBuilder';
import { TSemester } from '../semester/semester.interface';
import { SemesterModel } from '../semester/semester.model';
import { TUser } from '../users/user.interface';
import { userModel } from '../users/user.schema';
import { TStudent } from './student.interface';
import { studentModel } from './student.schema';
import { generateStudentID } from './student.utils';
import httpStatus from 'http-status';

// create student into db
const createStudentInoDB = async (payload: TStudent) => {
  try {
    // find semester
    const academicSemesterInfo = await SemesterModel.findOne({
      _id: payload.admissionSemester,
    }).lean();
    if (!academicSemesterInfo)
      throw new AppError(httpStatus.NOT_FOUND, 'Academic Semester not found');
    // step-1: create a user first
    const userData: Partial<TUser> = {};
    // set password
    userData.password = 'student123';
    // set role
    userData.role = 'student';
    // set email
    userData.email = payload.email;
    // create roll
    userData.id = await generateStudentID(academicSemesterInfo as TSemester);
    // create a new user
    const newUser = await userModel.create(userData);

    if (!newUser) throw new Error('Something went wrong!!');

    // set id , _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //reference _id

    const newStudent = await studentModel.create(payload);
    return newStudent;
  } catch (err) {
    throw new Error(err as string);
  }
};

// get all student
const getAllStudentsIntoDB = async (query: Record<string, unknown>) => {
  // searching field
  const searchableFields = ['name', 'email', 'address', 'guardian.name'];
  const studentQuery = new QueryBuilder(query, studentModel.find())
    .search(searchableFields)
    .filter()
    .sort()
    .pagination()
    .fieldsLimiting();
  const result = await studentQuery.queryModel;
  return result;
};
export const studentService = {
  createStudentInoDB,
  getAllStudentsIntoDB,
};
