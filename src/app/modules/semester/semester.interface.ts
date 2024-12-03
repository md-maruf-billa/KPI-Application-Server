export type TSemesterCode = '01' | '02' | '03';
export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TSemesterName = 'Pupil' | 'Child' | 'Pro';

export type TSemester = {
  semesterName: TSemesterName;
  year: string;
  code: TSemesterCode;
  startMonth: TMonths;
  endMonth: TMonths;
  isDeleted?: boolean;
};
