import catchAsync from '../../utils/catchAsync';
import manageResponse from '../../utils/response';
import { semesterServices } from './semester.service';

const createSemester = catchAsync(async (req, res) => {
  const result = await semesterServices.createSemesterIntoDB(req.body);
  manageResponse(res, {
    message: 'Semester created successfull',
    data: result,
  });
});
// get all semster
const getAllSemester = catchAsync(async (req, res) => {
  const result = await semesterServices.getAllSemesterFromDB();
  manageResponse(res, {
    message: 'Semester data collected!!',
    data: result,
  });
});

// get specifice semesteer
const getSpecificeSemester = catchAsync(async (req, res) => {
  const semesterId: string = req.params.semesterId;
  const result = await semesterServices.getSpecificeSemesterFromDB(semesterId);
  manageResponse(res, {
    message: 'Semester data collected!!',
    data: result,
  });
});
// delete a semester into db
const deleteSemester = catchAsync(async (req, res) => {
  const semesterId: string = req.params.semesterId;
  const result = await semesterServices.deleteSemesterFromDB(semesterId);
  manageResponse(res, {
    message: 'Semester deleted successfully !!',
    data: {},
  });
});

export const semesterController = {
  createSemester,
  getAllSemester,
  getSpecificeSemester,
  deleteSemester,
};
