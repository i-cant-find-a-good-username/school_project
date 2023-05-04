import bcrypt from 'bcrypt';




export const teachers = async () => {
    return [
        {
            username: "mezioud",
            email: "mezioud@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "bouzenada",
            email: "bouzenada@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "chickhi",
            email: "chickhi@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "gharzouli",
            email: "gharzouli@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "draa",
            email: "draa@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "labed",
            email: "labed@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "idk",
            email: "idk@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "meriem",
            email: "meriem@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
    ]
}



