import bcrypt from 'bcrypt';




export const students = async () => {
    return [
        {
            username: "ilyes",
            email: "ilyes@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: inserted_grades[0]._id,
            year: 2022,
            previous: [
                {
                    year: 2021,
                    grade: inserted_grades[1]._id
                }
            ]
        },
        {
            username: "ahmed",
            email: "ahmed@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: inserted_grades[0]._id,
            year: 2022,
            previous: [
                {
                    year: 2021,
                    grade: inserted_grades[1]._id
                }
            ]
        },
        {
            username: "ali",
            email: "ali@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: inserted_grades[1]._id,
            year: 2022,
            previous: [
                {
                    year: 2021,
                    grade: inserted_grades[2]._id
                }
            ]
        },
    ]
}



