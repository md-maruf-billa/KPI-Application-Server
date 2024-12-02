// type of guardian
type TGuardiant = {
  name: string;
  contactNo: string;
  guardiantType: 'father' | 'mother' | 'other';
};
// type of student
export type TStudent = {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  address: string;
  guardiant: TGuardiant;
  profileImage?: string;
  admissionSemester: string;
  isDeleted?: boolean;
};
