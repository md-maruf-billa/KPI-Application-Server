import { Router } from 'express';
import { studentController } from './student.controller';
import checkValidationSchema from '../../middleware/validetUser';
import { studentValidationSchema } from './student.validator';

const studentRoute = Router();

// create a stuent
studentRoute.post(
  '/',
  checkValidationSchema(studentValidationSchema),
  studentController.createStudent,
);

// get all student form DB
studentRoute.get('/', studentController.getAllStudents);

// export this router
export default studentRoute;
