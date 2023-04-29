interface UserType {
    username: string,
    email: string,
    password: string,
    role: string,
    profile_image: string,
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



export {
    UserType,
    UserLogin,
    UserRegsiter
}