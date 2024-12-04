import { Types } from 'mongoose';

// type of guardian
type TGuardian = {
  name: string;
  contactNo: string;
  guardiantType: 'father' | 'mother' | 'other';
};
// type of student
export type TStudent = {
  id?: string;
  user: Types.ObjectId;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  address: string;
  guardian: TGuardian;
  profileImage?: string;
  admissionSemester: string;
  isDeleted?: boolean;
};
