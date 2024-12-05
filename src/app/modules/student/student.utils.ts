import { TSemester } from '../semester/semester.interface';
import { userModel } from '../users/user.schema';

// Find the latest student ID
const findLatestId = async (): Promise<string | null> => {
  const result = await userModel
    .findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return result?.id || null; // Ensure null-safe access to `id`
};

// Generate a dynamic student ID
export const generateStudentID = async (
  payload: TSemester,
): Promise<string> => {
  const lastID = await findLatestId();
  const defaultID = '0';
  // Determine the next ID
  const incrementId = lastID
    ? (Number(lastID.substring(6)) + 1).toString().padStart(4, '0') // Increment if `lastID` exists
    : defaultID.padStart(4, '0'); // Start from default if `lastID` is null

  const studentID = `${payload.year}${payload.code}${incrementId}`;
  return studentID;
};
