import catchAsync from '../../utils/catchAsync';
import manageResponse from '../../utils/response';
import { studentService } from './student.service';

// create a student
const createStudent = catchAsync(async (req, res) => {
  const result = studentService.createStudentInoDB(req.body)
  manageResponse(res, {
    message: "Student created successfully",
    data: result
  })
});
// create a student
const getAllStudents = catchAsync(async (req, res) => { });

export const studentController = {
  createStudent,
  getAllStudents,
};
