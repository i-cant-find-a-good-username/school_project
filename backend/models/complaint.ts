import { Schema, model, Types, DiscriminatorModel } from 'mongoose';


const complaints_schema= new Schema({
    student: {type: Types.ObjectId, required:true, ref: "Student"},
    teacher: {type: Types.ObjectId, required:true, ref: "Teacher"},
    Note: {type: Types.ObjectId, required:true, ref: "Note"},
    message: {type: String, required: true}
},{timestamps: true}) 


const Complaint = model('Complaint',complaints_schema)
export {
    Complaint
}