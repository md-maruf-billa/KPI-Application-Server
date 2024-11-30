import { Date } from 'mongoose';

// define a user type
export type TUser = {
  id: string;
  password: string;
  neededPasswordChange: boolean;
  role: 'student' | 'teacher' | 'admin';
  status: 'active' | 'blocked';
  isDeleted: boolean;
  ccreatedAt?: Date ;
  updatedAt?: Date;
};
