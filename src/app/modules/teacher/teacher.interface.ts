import { Date } from 'mongoose';

// type of Academic techer
type TAcademicTecher = {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};
// type of academic department
type TAcademicDepartment = {
  name: string;
  academicTecher: string;
  createdAt?: Date;
  updatedAt?: Date;
};
// type of student
export type TTeacher = {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  address: string;
  profileImage?: string;
  academicTecher: TAcademicTecher;
  academicDepartment: TAcademicDepartment;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
