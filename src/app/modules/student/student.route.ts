import express from 'express';
import { StudentsControllers } from './student.controller';

const router = express.Router();
router.post('create-student', StudentsControllers.createStudent);

router.get('/', StudentsControllers.getAllStudents)

export const studentRoutes = router;
