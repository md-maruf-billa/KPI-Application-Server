import express from 'express';
import cors from 'cors';
import userRoute from './app/modules/users/user.route';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import manageResponse from './app/utils/response';
import studentRoute from './app/modules/student/student.route';
import semesterRoute from './app/modules/semester/semester.route';
const app = express();

//middleware
app.use(express.json());
app.use(express.raw());
app.use(cors());
app.use('/user', userRoute);
app.use('/student', studentRoute);
app.use("/semester", semesterRoute)

// test route
app.get('/', (req, res) => {
  manageResponse(res, {
    message: 'Server is running successfully!!',
    data: {},
  });
});
// handel error globally
app.use(globalErrorHandler);
// handel not found Route
app.use(notFound);
// export app for server
export default app;
