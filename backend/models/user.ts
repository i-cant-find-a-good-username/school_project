import { Schema, model } from 'mongoose';
import { idText } from 'typescript';

const user_schema= new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    profile_image: {type: String, required: true, default: "default.jpg"},
},{timestamps: true}) 

const User = model('User',user_schema)

module.exports = User







const notes_schema= new Schema({


    teacher: {type: String, required:true},
    student: {type: String, required:true},
    subject: {type: String, required:true},
    notes: [
        {

        }
    ]





},{timestamps: true}) 





export {
    User
}