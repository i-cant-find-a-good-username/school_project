import { Schema, model, Types } from 'mongoose';
import { Grade } from '../types';




const grades_schema= new Schema<Grade>({
    name: {type: String, required:true, ref: "Student"},
    subjects: [{type: Types.ObjectId, required:true, ref: "subject"}],
},{timestamps: true}) 




const Grade = model('Grade',grades_schema)
export {
    Grade
}