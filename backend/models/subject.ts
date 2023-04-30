import { Schema, model, Types } from 'mongoose';
import { Subject } from '../types';


const subjects_schema= new Schema<Subject>({
    name: {type: String, required:true},
    group: {type: String, required:true}, // UEF1 // UEF2 // UEM1
    credits: {type: Number, required:true},
    Coefficient: {type: Number, required:true},
    notes_Coefficient: {
        tp: {type: Number, required:true},
        td: {type: Number, required:true},
        exam: {type: Number, required:true},
    }
},{timestamps: true}) 


const Subject = model('Subject',subjects_schema)
export {
    Subject
}