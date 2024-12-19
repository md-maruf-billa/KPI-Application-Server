import { Router } from 'express';
import { offeredCourseControllers } from './offeredCourse.controller';
// create router
const offeredCourseRoute = Router();

// create a coures
offeredCourseRoute.post("/", offeredCourseControllers.createOfferedCourse);

// get all offered course
offeredCourseRoute.get("/", offeredCourseControllers.getAllOfferedCourse)

// get single offered course
offeredCourseRoute.get("/:id", offeredCourseControllers.getSingleOfferedCourse)


// export router
export default offeredCourseRoute;

