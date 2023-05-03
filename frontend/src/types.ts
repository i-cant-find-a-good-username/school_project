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

export type {
    Data,
    Note
}