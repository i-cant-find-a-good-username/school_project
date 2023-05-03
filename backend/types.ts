import { ObjectId } from "mongodb"


interface UserType  {
    username: string,
    email: string,
    password: string,
    profile_image?: string,
}


interface StudentType extends UserType {
    grade: ObjectId,
    year: number,
    previous: [{
        year: number,
        grade: ObjectId
    }]
}


interface TeacherType extends UserType {
    subjects: string[],
    isAdmin: boolean,
    grades_admin: ObjectId[],
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
    subject: ObjectId,
    grade: ObjectId,
    year: number,
    notes:{
            tp?: number,
            td?: number,
            exam?: number,
        }
}


interface Grade {
    grade: string,
    speciality: string,
    simester: string,
    subjects: ObjectId[]
}


interface Complaint {
    student: ObjectId,
    teacher: ObjectId,
    note: ObjectId,
    message: string
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