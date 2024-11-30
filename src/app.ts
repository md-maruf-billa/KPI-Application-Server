import express, { response } from 'express';
import status from 'http-status';
import cors from 'cors';
const app = express();

//middleware
app.use(express.json());
app.use(express.raw());
app.use(cors());

app.get('/', (req, res) => {
  res.status(status.OK).send({
    success: true,
    message: 'Server is running!!',
  });
});

// export app for server
export default app;
