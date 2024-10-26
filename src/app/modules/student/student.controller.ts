import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student: studentData} = req.body;
    const result = await studentServices.createStudentIntoBD( studentData);
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res:Response)=>{
    try{

    }catch(err){
        console.log(err);
    }
}

export const StudentsControllers={
    createStudent
}
