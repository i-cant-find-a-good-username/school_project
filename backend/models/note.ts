import { Schema, model, Types } from 'mongoose';
import { Note } from '../types';




const notes_schema= new Schema<Note>({
    student: {type: Types.ObjectId, required:true, ref: "student"},
    teacher: {type: Types.ObjectId, required:true, ref: "teacher"},
    subject: {type: Types.ObjectId, required:true, ref: "subject"},
    grade: {type: Types.ObjectId, required:true, ref: "grade"},
    year: {type: Number, required:true}, // 2021 // 2022 // 2021 is considered school year 2021-2022 same for all years 2022 = 2022-2023
    notes: {
            td: Number,
            tp: Number,
            exam: Number,
        }
},{timestamps: true}) 




const Note = model('Note',notes_schema)
export {
    Note
}