import bcrypt from 'bcrypt';




export const students = async () => {
    return [
        {
            username: "ilyes",
            email: "ilyes@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: "",
            year: 2022,
            previous: []
        },







        {
            username: "ahmed",
            email: "ahmed@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: "",
            year: 2022,
            previous: []
        },







        {
            username: "ali",
            email: "ali@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: "",
            year: 2022,
            previous: []
        },







        {
            username: "ali",
            email: "ali@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: "",
            year: 2022,
            previous: []
        },







        {
            username: "ali",
            email: "ali@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: "",
            year: 2022,
            previous: []
        },







    ]
}



