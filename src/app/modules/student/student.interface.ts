import { Date } from 'mongoose';

// type of guardian
type TGuardiant = {
  name: string;
  contactNo: string;
  guardiantType: 'father' | 'mother' | 'other';
};
// type of student
export type TStudent = {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  address: string;
  guardiant: TGuardiant;
  profileImage?: string;
  admissionSemester: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
