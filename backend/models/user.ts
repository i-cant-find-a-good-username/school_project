import { Schema, model, Types } from 'mongoose';





const user_schema= new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    profile_image: {type: String, required: true, default: "default.jpg"},
},{timestamps: true}) 









const notes_schema= new Schema({


    student: {type: Types.ObjectId, required:true},
    teacher: {type: Types.ObjectId, required:true},
    subject: {type: Types.ObjectId, required:true},
    notes: [
        {
            average: {type: Number, required:true},
            exam: {type: Number, required:true},
            tqwim: {type: Number, required:true},
        }
    ]





},{timestamps: true}) 







const subs_schema= new Schema({


    name: {type: String, required:true},
    teachers: [{type: Types.ObjectId, required:true}],
    group: [{type: Types.ObjectId, required:true}],
    credits: [{type: Types.ObjectId, required:true}],
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









const User = model('User',user_schema)

export {
    User
}