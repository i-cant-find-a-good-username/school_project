interface UserData{
    _id: string,
    username: string,
    email: string, 
    profile_image: string,
    role: string,
    grade?: string,
    year?: string,
    subjects?: string,
    isAdmin?: string,
} 


interface Data {
    user_data: UserData,
    token: string,
}


export type {
    Data,
}