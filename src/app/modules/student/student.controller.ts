import catchAsync from '../../utils/catchAsync';
import manageResponse from '../../utils/response';
import { studentService } from './student.service';

// create a student
const createStudent = catchAsync(async (req, res) => {
  const result = await studentService.createStudentInoDB(req.body);
  manageResponse(res, {
    message: 'Student created successfully',
    data: result,
  });
});
// create a student
const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentsIntoDB();
  manageResponse(res, {
    message: "All student data collected",
    data: result
  })
});

export const studentController = {
  createStudent,
  getAllStudents,
};
