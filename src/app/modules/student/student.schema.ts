import { Schema, model } from 'mongoose';
import { TStudent } from './student.interface';

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
      type: String,
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

// Create a model for students
export const studentModel = model<TStudent>('Student', studentSchema);
