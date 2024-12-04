import { TMonths, TSemesterCode, TSemesterName } from './semester.interface';

// create a semeter name mapper utils
export const semesterName: TSemesterName[] = ['Pupil', 'Child', 'Pro'];

// create a semester code mapper utils
export const semesterCode: TSemesterCode[] = ['01', '02', '03'];
// create a months mapper utils
export const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const semesterNameCodeMapper = {
  Pupil: '01',
  Child: '02',
  Pro: '03',
};
