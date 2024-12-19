import QueryBuilder from "../../build/queryBuilder";
import { TOfferdCourse } from "./offeredCourse.interface";
import { offeredCourseModel } from "./offeredCourse.schema"

//   create a offered courese into db
const createOfferedCourseIntoDB = async (paylod: TOfferdCourse) => {
    const result = await offeredCourseModel.create(paylod);
    return result
}

// get all offered course
const getAllOfferedCourseFormDB = async (query: Record<string, unknown>) => {
    const offerdQueries = new QueryBuilder(query, offeredCourseModel.find()).search(["teacher", "courseId"]).filter().sort().pagination().fieldsLimiting();

    
    const result = await offerdQueries.queryModel
    return result;
}

// get all offered course
const getSingleOfferedCourseFormDB = async (id: string) => {
    const result = await offeredCourseModel.findById(id);
    return result;
}

// export all services
export const offeredCourseServices = {
    createOfferedCourseIntoDB,
    getAllOfferedCourseFormDB,
    getSingleOfferedCourseFormDB
}

/**
 * 
 * {
 *      key--> string   :   value ----> any
 * }
 * 
 */