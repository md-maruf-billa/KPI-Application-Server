import { Schema, model } from 'mongoose';
import { TStudent } from './student.interface';

export const studentSchema = new Schema<TStudent>({
  id: String,
  name: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  dateOfBirth: String,
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
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// create a model for student
export const studentModel = model('student', studentSchema);
