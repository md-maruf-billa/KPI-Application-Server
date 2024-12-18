import AppError from '../../../errors/appError';
import { SemesterModel } from '../semester/semester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import httpStatus from 'http-status';
import { semesterRegistrationModel } from './semesterRegistration.schema';
import QueryBuilder from '../../build/queryBuilder';
import { registrationStatusConst } from './semesterRegistration.constant';

// create a semester registration
const createSemesterRegistrationIntoDb = async (
  payload: TSemesterRegistration,
) => {
  const { semester, status } = payload;
  // check already upcoming or ongoing registered semester exist
  const upcomingOrOngoingSemesterExist = await SemesterModel.findOne({
    $or: [
      { status: registrationStatusConst.UPCOMING },
      { status: registrationStatusConst.ONGOING },
    ],
  });
  if (upcomingOrOngoingSemesterExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `Already have an ${upcomingOrOngoingSemesterExist} registered semester!`,
    );
  }
  // check the semester is exist
  const semesterExist = await SemesterModel.findById(semester);
  if (!semesterExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Your inputed semester is not found!!',
    );
  }
  // check the semester already registred
  const semesterRegistred = await semesterRegistrationModel.findOne({
    semester,
  });
  if (semesterRegistred) {
    throw new AppError(
      httpStatus.CONFLICT,
      'Your inputed semester is already registred!!',
    );
  }

  const result = await semesterRegistrationModel.create(payload);
  return result;
};

// get all registrations
const getAllSemesterRegistrationFromDb = async (
  query: Record<string, unknown>,
) => {
  const semesterRegistrationQueries = new QueryBuilder(
    query,
    semesterRegistrationModel.find().populate('semester'),
  )
    .filter()
    .sort()
    .pagination();

  const result = await semesterRegistrationQueries.queryModel;
  return result;
};

// get single registration
const getSingleSemesterRegistrationFromDb = async (id: string) => {
  const result = await semesterRegistrationModel.findById(id);
  return result;
};

// update registration
const updateSemesterRegistrationIntoDb = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  // check this semester is exist
  const semesterRegistrationIsExist =
    await semesterRegistrationModel.findById(id);
  if (!semesterRegistrationIsExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Semester information not found !',
    );
  }
  // check semester status already ended
  if (semesterRegistrationIsExist.status === registrationStatusConst.ENDED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `This semester is already ${semesterRegistrationIsExist.status}`,
    );
  }

  // check valid status update request
  if (
    semesterRegistrationIsExist.status === registrationStatusConst.UPCOMING &&
    payload.status === registrationStatusConst.ENDED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can't update status directly ${semesterRegistrationIsExist.status} to ${payload.status} `,
    );
  }
  if (
    semesterRegistrationIsExist.status === registrationStatusConst.ONGOING &&
    payload.status === registrationStatusConst.UPCOMING
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can't update status directly ${semesterRegistrationIsExist.status} to ${payload.status} `,
    );
  }

  const result = await semesterRegistrationModel.findByIdAndUpdate(
    id,
    payload,
    { new: true },
  );
  return result;
};

// export all
export const semesterRegistrationServices = {
  createSemesterRegistrationIntoDb,
  getAllSemesterRegistrationFromDb,
  getSingleSemesterRegistrationFromDb,
  updateSemesterRegistrationIntoDb,
};
