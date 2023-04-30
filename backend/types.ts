import { ObjectId } from "mongodb"

interface UserType  {
    username: string,
    email: string,
    password: string,
    profile_image?: string,
}


interface Complaint {
    student: ObjectId,
    teacher: ObjectId,
    Note: ObjectId,
    message: string
}

interface StudentType extends UserType {
    current_grade: ObjectId,
    current_year: number,
}


interface TeacherType extends UserType {
    subjects: string[],
    isAdmin: boolean,
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
    //grade: ObjectId ,
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
    notes:{
            tp?: number,
            td?: number,
            exam?: number,
        }
}

interface Grade {
    name: string,
    subjects: ObjectId[]
}

export {
    UserType,
    StudentType,
    TeacherType,
    UserLogin,
    UserRegsiter,
    Subject,
    Note,
    Complaint,
    Grade
}