import { Schema, model, Types } from 'mongoose';
import { Complaint } from '../types';




const complaints_schema= new Schema<Complaint>({
    student: {type: Types.ObjectId, required:true, ref: "Student"},
    teacher: {type: Types.ObjectId, required:true, ref: "Teacher"},
    Note: {type: Types.ObjectId, required:true, ref: "Note"},
    message: {type: String, required: true}
},{timestamps: true}) 




const Complaint = model('Complaint',complaints_schema)
export {
    Complaint
}