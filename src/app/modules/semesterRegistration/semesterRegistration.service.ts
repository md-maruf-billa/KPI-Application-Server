import AppError from "../../../errors/appError";
import { SemesterModel } from "../semester/semester.model";
import { TSemesterRegistration } from "./semesterRegistration.interface"
import httpStatus from 'http-status';
import { semesterRegistrationModel } from './semesterRegistration.schema';

// create a semester registration
const createSemesterRegistrationIntoDb = async (payload: TSemesterRegistration) => {
    const { semester } = payload;
    // check the semester is exist
    const semesterExist = await SemesterModel.findById(semester);
    if (!semesterExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Your inputed semester is not found!!");
    }
    // check the semester already registred
    const semesterRegistred = await semesterRegistrationModel.findOne({ semester });
    if (semesterRegistred) {
        throw new AppError(httpStatus.CONFLICT, "Your inputed semester is already registred!!")
    }

    const result = await semesterRegistrationModel.create(payload);
    return result;
}

// get all registrations
const getAllSemesterRegistrationFromDb = async () => {

}


// export all
export const semesterRegistrationServices = {
    createSemesterRegistrationIntoDb,
    getAllSemesterRegistrationFromDb
}