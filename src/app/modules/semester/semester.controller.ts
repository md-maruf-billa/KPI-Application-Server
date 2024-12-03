import catchAsync from "../../utils/catchAsync";
import manageResponse from "../../utils/response";
import { semesterServices } from "./semester.service";

const createSemester = catchAsync(async (req, res) => {
    const result = await semesterServices.createSemesterIntoDB(req.body);
    manageResponse(res, {
        message: "Semester created successfull",
        data: result
    })
})

export const semesterController = {
    createSemester
}