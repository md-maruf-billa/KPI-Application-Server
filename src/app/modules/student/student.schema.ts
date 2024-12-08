import { Schema, model } from 'mongoose';
import { TStudent } from './student.interface';
import { userModel } from '../users/user.schema';
import AppError from '../../../errors/appError';
import httpStatus from 'http-status';

// Define the schema for students
export const studentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      unique: true,
      required: false,
    },
    user: {
      type: Schema.Types.ObjectId, // Corrected ObjectId reference
      ref: 'userModel', // Optional: Add reference if linking to a 'User' model
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    guardian: {
      name: {
        type: String,
        required: true,
      },
      contactNo: {
        type: String,
        required: true,
      },
      guardianType: {
        type: String,
        enum: ['father', 'mother', 'other'],
        required: true,
      },
    },
    profileImage: {
      type: String,
      required: false,
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'semester',
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// check this student already exist in the user database
studentSchema.pre('save', async function (next) {
  const isExist = await studentModel.findOne({ email: this.email });

  // chek this user
  if (isExist) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'This student already registred!!',
    );
  }
  next();
});

// Create a model for students
export const studentModel = model<TStudent>('Student', studentSchema);
