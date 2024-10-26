import { Student } from './student.interface';
import { StudentModel } from '../student.model';

const createStudentIntoBD = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDB= async()=>{
    const result = await StudentModel.find();
    return result
}

export const studentServices ={
    createStudentIntoBD,
    getAllStudentFromDB
}
