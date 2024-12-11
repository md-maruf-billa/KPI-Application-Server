import QueryBuilder from '../../build/queryBuilder';
import { TCourse } from './course.interface';
import { couresModel } from './course.schema';
import mongoose from 'mongoose';
import AppError from '../../../errors/appError';
import httpStatus from 'http-status';
const searchableFields = ['title', 'prefix', 'code'];

//create
const createCourseIntoDb = async (payload: TCourse) => {
    const result = await couresModel.create(payload);
    return result;
};
// update course
const updateCourseIntoDb = async (id: string, payload: Partial<TCourse>) => {
    const { preRequisitCoureses, ...courseInfoRem } = payload;
    const session = await mongoose.startSession();

    try {
        // Start transaction
        session.startTransaction();

        // Update basic course information
        const updateBasicData = await couresModel.findByIdAndUpdate(id, courseInfoRem, {
            new: true,
            session,
        });
        if (!updateBasicData) {
            throw new AppError(httpStatus.BAD_REQUEST, "Update Failed!");
        }

        if (preRequisitCoureses && preRequisitCoureses.length > 0) {
            // Extract deleted and added course IDs
            const deletedCourseIds = preRequisitCoureses
                .filter((el) => el.course && el.isDeleted)
                .map((el) => el.course);

            const addedCourses = preRequisitCoureses
                .filter((el) => el.course && !el.isDeleted)
                .map((el) => ({
                    course: el.course, // Ensure this matches your schema
                    isDeleted: false,
                }));

            // Remove deleted prerequisite courses
            const deletePreRequisite = await couresModel.findByIdAndUpdate(
                id,
                {
                    $pull: { preRequisitCoureses: { course: { $in: deletedCourseIds } } },
                },
                { new: true, session }
            );
            if (!deletePreRequisite) {
                throw new AppError(httpStatus.BAD_REQUEST, "Failed to remove prerequisites!");
            }

            // Add new prerequisite courses
            const addPreRequisite = await couresModel.findByIdAndUpdate(
                id,
                {
                    $addToSet: { preRequisitCoureses: { $each: addedCourses } },
                },
                { new: true, session }
            );
            if (!addPreRequisite) {
                throw new AppError(httpStatus.BAD_REQUEST, "Failed to add prerequisites!");
            }
        }

        // Commit the transaction and end session
        await session.commitTransaction();
        await session.endSession();

        // Return updated document
        const result = await couresModel.findById(id);
        return result;
    } catch (err: any) {
        // Abort transaction and end session
        await session.abortTransaction();
        await session.endSession();
        throw new Error(err); // Preserve the original error stack and type
    }
};


// get all
const getAllCourseIntoDb = async (query: Record<string, unknown>) => {
    const courseQuery = new QueryBuilder(
        query,
        couresModel.find().populate('preRequisitCoureses.course'),
    )
        .search(searchableFields)
        .filter()
        .sort()
        .pagination()
        .fieldsLimiting();
    const result = await courseQuery.queryModel;
    return result;
};

// get single
const getSingleCourseIntoDb = async (id: string) => {
    const result = await couresModel
        .findById(id)
        .populate('preRequisitCoureses.course');
    return result;
};
// delete coure
const deleteCourseFromDb = async (id: string) => {
    const result = await couresModel.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true },
    );
    return result;
};

// export all
export const courseServices = {
    createCourseIntoDb,
    getAllCourseIntoDb,
    getSingleCourseIntoDb,
    deleteCourseFromDb,
    updateCourseIntoDb,
};
