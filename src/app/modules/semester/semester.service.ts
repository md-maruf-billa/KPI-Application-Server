import { TSemester } from './semester.interface';
import { SemesterModel } from './semester.model';
import { semesterNameCodeMapper } from './semester.utils';

// create a semester into db
const createSemesterIntoDB = async (payload: TSemester) => {
  // check semester name and code valid or not
  if (semesterNameCodeMapper[payload.semesterName] !== payload.code) {
    throw new Error('Invalid semester code!!');
  }
  const result = await SemesterModel.create(payload);
  return result;
};
// get all semester form db
const getAllSemesterFromDB = async () => {
  const result = await SemesterModel.find().lean();
  return result;
};
//get specifice semester
const getSpecificeSemesterFromDB = async (semesterId: string) => {
  const result = await SemesterModel.findById(semesterId).lean();
  return result;
};

// delete a semester
const deleteSemesterFromDB = async (semesterId: string) => {
  const result = await SemesterModel.findByIdAndUpdate(semesterId, {
    isDeleted: true
  })
  return result;
}

export const semesterServices = {
  createSemesterIntoDB,
  getAllSemesterFromDB,
  getSpecificeSemesterFromDB,
  deleteSemesterFromDB
};
