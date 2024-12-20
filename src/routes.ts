import courseRoute from './app/modules/course/course.route';
import facultyRoute from './app/modules/faculty/faculty.route';
import offeredCourseRoute from './app/modules/offeredCourse/offeredCourse.route';
import semesterRoute from './app/modules/semester/semester.route';
import semesterRegistrationRoute from './app/modules/semesterRegistration/semesterRegistration.route';
import studentRoute from './app/modules/student/student.route';
import userRoute from './app/modules/users/user.route';
import { Router } from 'express';

const moduleRoutes = Router();

const allRoute = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/student',
    route: studentRoute,
  },
  {
    path: '/semester',
    route: semesterRoute,
  },
  {
    path: '/faculty',
    route: facultyRoute,
  },
  {
    path: '/course',
    route: courseRoute,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoute,
  },
  {
    path: '/offered-course',
    route: offeredCourseRoute,
  },
];

// dynamically create route
allRoute.forEach((route) => moduleRoutes.use(route.path, route.route));

export default moduleRoutes;
