import catchAsync from '../../utils/catchAsync';

// create a student
const createStudent = catchAsync(async (req, res) => {
  res.send(req.body);
});
// create a student
const getAllStudents = catchAsync(async (req, res) => {});

export const studentController = {
  createStudent,
  getAllStudents,
};
