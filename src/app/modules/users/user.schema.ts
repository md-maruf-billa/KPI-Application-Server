import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

// define a TUserSchema
export const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      unique: true,
    },
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// define a model
export const userModel = model('user', userSchema);
