import QueryBuilder from '../../build/queryBuilder';
import { TCourse } from './course.interface';
import { couresModel } from './course.schema';
const searchableFields = ['title', 'prefix', 'code'];

//create
const createCourseIntoDb = async (payload: TCourse) => {
  const result = await couresModel.create(payload);
  return result;
};
// update course
const updateCourseIntoDb = async (id: string, payload: Partial<TCourse>) => {
  //basic info
  const { preRequisitCoureses, ...courseInfoRem } = payload;
  // update
  let result = await couresModel.findByIdAndUpdate(id, courseInfoRem, {
    new: true,
  });
  // check if preRequiseitCorses have
  if (preRequisitCoureses && preRequisitCoureses.length > 0) {
    // find deleted courses
    const deletedCourseId = preRequisitCoureses
      .filter((el) => el.course && el.isDeleted)
      .map((el) => el.course);
    const addedCourseId = preRequisitCoureses.filter(
      (el) => el.course && !el.isDeleted,
    );

    // delte preRequisit course
    result = await couresModel.findByIdAndUpdate(
      id,
      {
        $pull: { preRequisitCoureses: { course: { $in: deletedCourseId } } },
      },
      { new: true },
    );

    // add preRequisit course
    result = await couresModel.findByIdAndUpdate(
      id,
      {
        $push: { preRequisitCoureses: addedCourseId },
      },
      { new: true },
    );
  }
  return result;
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
