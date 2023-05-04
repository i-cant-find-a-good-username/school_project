interface UserData{
    _id: string,
    username: string,
    email: string, 
    profile_image: string,
    role: string,
    previous?: [{
        year: number,
        grade: string
    }],
    grade?: {
        grade: string,
        speciality: string,
        simester: string,
    },
    year?: string,
    subjects?: string,
    isAdmin?: string,
} 


interface Data {
    user_data: UserData,
    token: string,
}


interface Note{
    td: number,
    tp: number,
    exam: number,
}


interface Subject { 
    _id: string,
    name: string,
    group: string,
    credits: number,
    coefficient: number,
    notes_coefficient: {
       tp: number,
       td: number,
       exam: number
    },
}



interface NotesData{
    _id: string,
    student: string,
    teacher: {
        _id: string,
        username: string,
        email: string,
        profile_image: string 
    },
    subject: Subject
    notes: Note
    grade: string,
    year: number,
    createdAt: string,
    updatedAt: string
}

interface Complaint {
    _id: string,
    student: string,
    teacher: string,
    note: string,
    message: string,
}

interface Grade {
    _id: string,
    grade: string,
    speciality: string,
    simester: number,
    subjects: string[],
    createdAt: string,
    updatedAt: string
}


export type {
    Data,
    Note,
    NotesData,
    Complaint,
    Grade
}
