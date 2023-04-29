import { Schema, model, Types, DiscriminatorModel } from 'mongoose';


const student_schema= new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profile_image: {type: String, default: "default.jpg"},
    current_grade: {type: String, required:true},
    current_year: {type: String, required:true}, // 20xx // 0000 == no longer a student
},{timestamps: true})


const teacher_schema= new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profile_image: {type: String, default: "default.jpg"},
    subjects: {type: [Types.ObjectId], default:[], ref: "User"},
    idAdmin: {type: Boolean, default:false}
},{timestamps: true})


const Student = model('Student',student_schema)
const Teacher = model('Teacher',teacher_schema)
export{
    Student,
    Teacher
}