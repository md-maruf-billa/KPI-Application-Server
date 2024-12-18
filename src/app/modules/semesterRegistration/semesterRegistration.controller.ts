import catchAsync from "../../utils/catchAsync";

// create a semester registration
const createSemesterRegistration = catchAsync(async (req, res) => {

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