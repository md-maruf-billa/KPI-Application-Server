import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

// define a TUserSchema
export const userSchema = new Schema<TUser>({
  id: String,
  password: String,
  neededPasswordChange: Boolean,
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
  },
  status: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

// define a model
export const userModel = model('userModel', userSchema);
