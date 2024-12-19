import catchAsync from "../../utils/catchAsync";
import manageResponse from "../../utils/response";
import { offeredCourseServices } from "./offeredCourse.service";

// create a course
const createOfferedCourse = catchAsync(async (req, res) => {
    const result = await offeredCourseServices.createOfferedCourseIntoDB(req.body);
    manageResponse(res, {
        message: "Offered Course Created Sucessfully!!",
        data: result,
    })
})

// get all offered coures
const getAllOfferedCourse = catchAsync(async (req, res) => {
    const result = await offeredCourseServices.getAllOfferedCourseFormDB(req.query);
    manageResponse(res, {
        message: "Offered course retrived sucessfully",
        data: result
    })
})

// get all offered coures
const getSingleOfferedCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await offeredCourseServices.getSingleOfferedCourseFormDB(id as string);
    manageResponse(res, {
        message: "Offered course retrived sucessfully",
        data: result
    })
})


// export all controller
export const offeredCourseControllers = {
    createOfferedCourse,
    getAllOfferedCourse,
    getSingleOfferedCourse
}