import { TSemester } from "./semester.interface";
import { SemesterModel } from "./semester.model";
import { semesterNameCodeMapper } from "./semester.utils";

// create a semester into db
const createSemesterIntoDB = async (payload: TSemester) => {
    // check semester name and code valid or not
    if (semesterNameCodeMapper[payload.semesterName] !== payload.code) {
        throw new Error("Invalid semester code!!");
    }
    const result = await SemesterModel.create(payload);
    return result;
}


export const semesterServices = {
    createSemesterIntoDB
}