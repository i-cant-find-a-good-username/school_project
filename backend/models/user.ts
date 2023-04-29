import { Schema, model, Types, DiscriminatorModel } from 'mongoose';




const student_schema= new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profile_image: {type: String, required: true, default: "default.jpg"},
    year_grade: {type: Types.ObjectId, required:true},
},{timestamps: true})


const teacher_schema= new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profile_image: {type: String, required: true, default: "default.jpg"},
    grades: {type: [String], required:true},
    subjects: {type: [Types.ObjectId], required:true},
    idAdmin: {type: Boolean, required:true}
},{timestamps: true})




const notes_schema= new Schema({
    student: {type: Types.ObjectId, required:true, ref: "User"},
    teacher: {type: Types.ObjectId, required:true, ref: "User"},
    subject: {type: Types.ObjectId, required:true, ref: "Class"},
    year: {type: String, required:true}, // 20212022
    grade: {type: String, required:true}, // M1-STIC // L3-TI
    notes: [
        {
            average: {type: Number, required:true},
            exam: {type: Number, required:true},
            tqwim: {type: Number, required:true},
        }
    ]





},{timestamps: true}) 


const year_grade_schema= new Schema({
    year: {type: String, required:true}, // 20212022
    grade: {type: String, required:true}, // M1-STIC // L3-TI
    subjects: [Types.ObjectId],
})


const subjects_schema= new Schema({
    name: {type: String, required:true},
    teachers: [Types.ObjectId],
    classes: [Types.ObjectId]
})





const subject_schema= new Schema({
    name: {type: String, required:true},
    group: [{type: String, required:true, ref: "Group"}],
    credits: [{type: Number, required:true}],
    Coefficient: [{type: Number, required:true}],
    notes: {
        tp: {
            value: {type: Number, required:true},
            Coefficient: {type: Number, required:true},
        },
        td: {
            value: {type: Number, required:true},
            Coefficient: {type: Number, required:true},
        },
        exam: {
            value: {type: Number, required:true},
            Coefficient: {type: Number, required:true},
        }
    }
},{timestamps: true}) 



const complaints_schema= new Schema({
    student: {type: Types.ObjectId, required:true},
    teacher: {type: Types.ObjectId, required:true},
    subject: {type: Types.ObjectId, required:true},
    message: {type: String, required: true}
},{timestamps: true}) 





const User = model('Student',student_schema)
console.log(User)
export {
    User
}