import { Router } from 'express';
import { semesterController } from './semester.controller';
import checkValidationSchema from '../../middleware/validetUser';
import { createSemesterValidationSchema } from './semester.validator';

// semester route
const semesterRoute = Router();

// create semester
semesterRoute.post(
  '/',
  checkValidationSchema(createSemesterValidationSchema),
  semesterController.createSemester,
);
// get all semester
semesterRoute.get('/', semesterController.getAllSemester);
// get specifice semester
semesterRoute.get('/:semesterId', semesterController.getSpecificeSemester);
// deleter a semester
semesterRoute.delete('/:semesterId', semesterController.deleteSemester);

// export router
export default semesterRoute;
