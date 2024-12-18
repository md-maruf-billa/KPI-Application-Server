import { Router } from 'express';
import checkValidationSchema from '../../middleware/validetUser';
import { semesterRegistrationValidations } from './semesterRegistration.validation';
import { semesterRegistrationController } from './semesterRegistration.controller';
const semesterRegistrationRoute = Router();

// create registration
semesterRegistrationRoute.post(
  '/',
  checkValidationSchema(
    semesterRegistrationValidations.createSemesterRegistrationValidation,
  ),
  semesterRegistrationController.createSemesterRegistration,
);
// get all
semesterRegistrationRoute.get(
  '/',
  semesterRegistrationController.getAllSemesterRegistrations,
);
//get single
semesterRegistrationRoute.get(
  '/:id',
  semesterRegistrationController.getSingleSemesterRegistration,
);
// update
semesterRegistrationRoute.patch(
  '/:id',
  checkValidationSchema(
    semesterRegistrationValidations.updateSemesterRegistrationValidation,
  ),
  semesterRegistrationController.updateSemesterRegistration,
);

// export router
export default semesterRegistrationRoute;
