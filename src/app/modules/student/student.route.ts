import { Router } from 'express';
import { studentController } from './student.controller';
import validetSenderInfo from '../../middleware/validetUser';
import { studentValidationSchema } from './student.validator';

const studentRoute = Router();

// create a stuent
studentRoute.post(
  '/',
  validetSenderInfo(studentValidationSchema),
  studentController.createStudent,
);

// export this router
export default studentRoute;
