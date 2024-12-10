import { TCourse } from "./course.interface"
import { couresModel } from "./course.schema"


//create 
const createCourseIntoDb = async (payload: TCourse) => {
    const result = await couresModel.create(payload);
    return result;
}

// get all
const getAllCourseIntoDb = async () => {
    const result = await couresModel.find();
    return result;
}

// get single
const getSingleCourseIntoDb = async (id: string) => {
    const result = await couresModel.findById(id);
    return result;
}
// delete coure
const deleteCourseFromDb = async (id: string) => {
    const result = await couresModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
}


// export all 
export const courseServices = {
    createCourseIntoDb,
    getAllCourseIntoDb,
    getSingleCourseIntoDb,
    deleteCourseFromDb,
}