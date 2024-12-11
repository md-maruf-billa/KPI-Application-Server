import courseRoute from './app/modules/course/course.route';
import facultyRoute from './app/modules/faculty/faculty.route';
import semesterRoute from './app/modules/semester/semester.route';
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
];

// dynamically create route
allRoute.forEach((route) => moduleRoutes.use(route.path, route.route));

export default moduleRoutes;
