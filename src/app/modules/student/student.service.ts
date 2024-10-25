import { Student } from './student.interface';
import { StudentModel } from '../student.model';

const createStudentIntoBD = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const studentServices ={
    createStudentIntoBD
}
