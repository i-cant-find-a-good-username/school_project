import { Schema, model, Types } from 'mongoose';
import { Grade } from '../types';




const grades_schema= new Schema<Grade>({
    grade: {type: String, required:true},
    speciality: {type: String, required:true},
    simester: {type: String, required:true},
    subjects: [{type: Types.ObjectId, required:true, ref: "subjects"}],
},{timestamps: true}) 




const Grade = model('Grade',grades_schema)
export {
    Grade
}