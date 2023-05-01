import { Schema, model, Types } from 'mongoose';
import { StudentType, TeacherType } from '../types';




const student_schema= new Schema<StudentType>({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profile_image: {type: String, default: "default.jpg"},
    grade: {type: Types.ObjectId, required:true, ref: "grade"},
    year: {type: Number, required:true}, // 20xx // 0000 == no longer a student
},{timestamps: true})




const teacher_schema= new Schema<TeacherType>({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profile_image: {type: String, default: "default.jpg"},
    subjects: [{type: Types.ObjectId, ref: 'subject'}],
    isAdmin: {type: Boolean, default:false}
},{timestamps: true})




const Student = model('Student',student_schema)
const Teacher = model('Teacher',teacher_schema)
export{
    Student,
    Teacher
}