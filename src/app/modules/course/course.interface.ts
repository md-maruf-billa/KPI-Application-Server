import { Types } from 'mongoose';

export type TPrerequisitCoureses = {
  course?: Types.ObjectId;
  isDeleted?: boolean;
};
export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisitCoureses?: TPrerequisitCoureses[];
  isDeleted?: boolean;
};
