/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import sendResponse from './app/utils/sendResponse';

const app: Application = express();

//parsers
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:5173'] }));

// application routes
app.use(router);


app.get('/', (req, res) => {
    sendResponse(res,  {
        statusCode: 200,
        success: true,
        message: 'Welcome to the KPI web API',
        data: null
    });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
