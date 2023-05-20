import { Schema, model, Types } from 'mongoose';
import { Complaint } from '../types';



const complaints_schema= new Schema<Complaint>({
    student: {type: Types.ObjectId, required:true, ref: "student"},
    teacher: {type: Types.ObjectId, required:true, ref: "teacher"},
    note: {type: Types.ObjectId, required:true, ref: "note"},
    message: {type: String, required: true}
},{timestamps: true}) 



const complaints_global_schema= new Schema({
    student: {type: Types.ObjectId, required:true, ref: "student"},
    grade: {type: Types.ObjectId, required:true, ref: "Grade"},
    year: {type: Number, required: true},
    message: {type: String, required: true}
},{timestamps: true}) 



const Complaint = model('Complaint',complaints_schema)
const ComplaintGlobal = model('ComplaintGlobal',complaints_global_schema)
export {
    Complaint,
    ComplaintGlobal
}