import catchAsync from "../../utils/catchAsync";
import manageResponse from "../../utils/response";
import { semesterRegistrationServices } from "./semesterRegistration.service";

// create a semester registration
const createSemesterRegistration = catchAsync(async (req, res) => {
    const result = await semesterRegistrationServices.createSemesterRegistrationIntoDb(req?.body);
    manageResponse(res, {
        message: "Semester Registration successfully!",
        data: result
    })
})
// get all
const getAllSemesterRegistrations = catchAsync(async (req, res) => {

})
// get single
const getSingleSemesterRegistration = catchAsync(async (req, res) => {

})

// export all
export const semesterRegistrationController = {
    createSemesterRegistration,
    getSingleSemesterRegistration,
    getAllSemesterRegistrations
}