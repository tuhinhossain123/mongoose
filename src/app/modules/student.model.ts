import { Schema } from 'mongoose';
import { Student } from './student/student.interface';

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: ['male', 'feMale'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emargencyContact: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presetAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    father: { type: String, required: true },
    fatherOccuption: { type: String, required: true },
    fatherContact: { type: String, required: true },
    mother: { type: String, required: true },
    motherOccuption: { type: String, required: true },
    motherContact: { type: String, required: true },
  },
  localGuardian: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  photoUrl: { type: String },
  isActive: ['active', 'Blocked'],
});
