import catchAsync from '../../utils/catchAsync';
import manageResponse from '../../utils/response';
import { courseServices } from './course.service';

// create coures
const createCourse = catchAsync(async (req, res) => {
  const result = await courseServices.createCourseIntoDb(req.body);
  manageResponse(res, {
    message: 'Courese is created successfully!',
    data: result,
  });
});

// get all course
const getAllCourse = catchAsync(async (req, res) => {
  const result = await courseServices.getAllCourseIntoDb(req.query);
  manageResponse(res, {
    message: 'Courese is retrieved successfully!',
    data: result,
  });
});
// get single course
const getSingleCourse = catchAsync(async (req, res) => {
  const result = await courseServices.getSingleCourseIntoDb(req?.params?.id);
  manageResponse(res, {
    message: 'Course is retrieved successfully',
    data: result,
  });
});

// delete a course
const deleteCourse = catchAsync(async (req, res) => {
  const result = await courseServices.deleteCourseFromDb(req?.params?.id);
  manageResponse(res, {
    message: 'Course delete successfully',
    data: {},
  });
});
// update course
const updateCourse = catchAsync(async (req, res) => {
  const result = await courseServices.updateCourseIntoDb(
    req?.params?.id,
    req?.body,
  );
  manageResponse(res, {
    message: 'Course updated successfully!',
    data: result,
  });
});

// export all
export const courseControllers = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  deleteCourse,
  updateCourse,
};
