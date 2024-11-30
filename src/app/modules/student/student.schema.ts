import { Schema, model } from 'mongoose';
import { TStudent } from './student.interface';

export const studentSchema = new Schema<TStudent>({
  id: String,
  name: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  dateOfBirth: Schema.Types.Date,
  email: String,
  contactNo: String,
  address: String,
  guardiant: {
    name: String,
    contactNo: String,
    guardiantType: {
      type: String,
      enum: ['father', 'mother', 'other'],
    },
  },
  profileImage: {
    type: String,
    required: false,
  },
  admissionSemester: {
    type: String,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8'],
  },
  isDeleted: Boolean,
  createdAt: {
    type: Schema.Types.Date,
    required: false,
  },
  updatedAt: {
    type: Schema.Types.Date,
    required: false,
  },
});

// create a model for student
export const studentModel = model('student', studentSchema);
