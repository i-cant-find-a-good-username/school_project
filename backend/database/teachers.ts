import bcrypt from 'bcrypt';




export const teachers = async () => {
    return [
        {
            username: "ahmed",
            email: "ahmed@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },





        {
            username: "jamal",
            email: "jamal@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },





        {
            username: "adli",
            email: "adli@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },





        {
            username: "mohamed",
            email: "mohamed@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },





        {
            username: "mostafa",
            email: "mostafa@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },





        {
            username: "amar",
            email: "amar@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },




        
        {
            username: "sief",
            email: "sief@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },




        
        {
            username: "fadi",
            email: "fadi@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },



        
        {
            username: "youcef",
            email: "youcef@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },




        
        {
            username: "oussama",
            email: "oussama@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
    ]
}



