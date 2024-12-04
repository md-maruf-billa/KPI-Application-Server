// define a user type
export type TUser = {
  id: string;
  email: string;
  password: string;
  neededPasswordChange: boolean;
  role: 'student' | 'teacher' | 'admin';
  status?: 'active' | 'blocked';
  isDeleted?: boolean;
};
