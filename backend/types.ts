import { ObjectId } from "mongodb"

interface UserType  {
    username: string,
    email: string,
    password: string,
    profile_image: string,
}


interface StudentType extends UserType {
    current_grade: string,
    current_year: number,
}


interface TeacherType extends UserType {
    subjects: string[],
    idAdmin: string,
}


interface UserLogin {
    email: string,
    password: string,
}


interface UserRegsiter {
    username: string,
    email: string,
    password: string,
}


interface Subject {
    name: string,
    group: string,
    grade: string ,
    credits: number,
    Coefficient: number,
    notes_Coefficient: {
        tp: number,
        td: number,
        exam: number,
    }
}


interface Note {
    student: ObjectId,
    teacher: ObjectId,
    subject: ObjectId ,
    year: number,
    notes: [
        {
            tp: number,
            td: number,
            exam: number,
        }
    ]
}


export {
    UserType,
    StudentType,
    TeacherType,
    UserLogin,
    UserRegsiter,
    Subject,
    Note,
}