import { Schema, model, Types, DiscriminatorModel } from 'mongoose';


const notes_schema= new Schema({
    student: {type: Types.ObjectId, required:true, ref: "Student"},
    teacher: {type: Types.ObjectId, required:true, ref: "Teacher"},
    subject: {type: Types.ObjectId, required:true, ref: "Subject"},
    year: {type: String, required:true}, // 2021 // 2022 // 2021 is considered school year 2021-2022 same for all years 2022 = 2022-2023
    notes: [
        {
            td: {type: Number, required:true},
            tp: {type: Number, required:true},
            exam: {type: Number, required:true},
        }
    ]
},{timestamps: true}) 


const Note = model('Note',notes_schema)
export {
    Note
}