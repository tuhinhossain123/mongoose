import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRoutes)

const getAController = (req: Request, res: Response) => {
  var a = 10;
  res.send(a);
};

app.get('/', getAController);

export default app;
