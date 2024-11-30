import { Schema, model } from 'mongoose';
import { TTeacher } from './teacher.interface';

export const teacherSchema = new Schema<TTeacher>({
  id: String,
  name: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  dateOfBirth: Date,
  email: String,
  contactNo: String,
  address: String,
  profileImage: {
    type: String,
    required: false,
  },
  academicTecher: {
    name: String,
    createdAt: {
      type: Date,
      required: false,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
  },
  academicDepartment: {
    name: String,
    academicTecher: String,
    createdAt: {
      type: Date,
      required: false,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
  },
  isDeleted: Boolean,
  createdAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

// create a model for student
export const teacherModel = model('teacher', teacherSchema);
