import { Router } from 'express';
import checkValidationSchema from '../../middleware/validetUser';
import { courseValidation } from './course.validation';
import { courseControllers } from './course.controller';
const courseRoute = Router();


// create course
courseRoute.post("/", checkValidationSchema(courseValidation.createCourseValidationSchema), courseControllers.createCourse);
// get all
courseRoute.get("/", courseControllers.getAllCourse);
// get single
courseRoute.get('/:id', courseControllers.getSingleCourse);
// update course
courseRoute.patch("/:id",checkValidationSchema(courseValidation.updateCourseValidationSchema), courseControllers.updateCourse);
//delete 
courseRoute.delete("/:id", courseControllers.deleteCourse)

// export this route
export default courseRoute;