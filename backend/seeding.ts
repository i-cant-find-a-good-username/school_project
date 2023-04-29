import { Subject, Note } from './types'
import { ObjectId } from "mongodb";
import { Subject as SubjectModel } from "./models/subject"
import { Note as NodeModel } from "./models/note"
import { Student, Teacher } from './models/user';
import { StudentType, TeacherType } from './types';







const students: StudentType[] = [
    {
        username: "ilyes",
        email: "ilyes@gmail.com",
        password: "password",
        profile_image: "random.png",
        current_grade: "M1-STIC-2",
        current_year: 2022,
    },
    {
        username: "ahmed",
        email: "ahmed@gmail.com",
        password: "password",
        profile_image: "random.png",
        current_grade: "M1-STIC-2",
        current_year: 2022,
    },
]


const subjects: Subject[] = [
    {
        name: "igr",
        group: "UEF1",
        grade: "M1-STIC-S2",
        credits: 5,
        Coefficient: 5,
        notes_Coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "cse",
        group: "UEF1",
        grade: "M1-STIC-S2",
        credits: 5,
        Coefficient: 5,
        notes_Coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "sri",
        group: "UEF1",
        grade: "M1-STIC-S2",
        credits: 3,
        Coefficient: 3,
        notes_Coefficient: {
            tp: 0,
            td: 0,
            exam: 1,
        }
    },
    {
        name: "aaw",
        group: "UEF2",
        grade: "M1-STIC-S2",
        credits: 3,
        Coefficient: 3,
        notes_Coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "mssc",
        group: "UEF2",
        grade: "M1-STIC-S2",
        credits: 4,
        Coefficient: 4,
        notes_Coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "gcc",
        group: "UEF2",
        grade: "M1-STIC-S2",
        credits: 4,
        Coefficient: 4,
        notes_Coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "ang2",
        group: "UEM1",
        grade: "M1-STIC-S2",
        credits: 2,
        Coefficient: 2,
        notes_Coefficient: {
            tp: 0,
            td: 0,
            exam: 1,
        }
    },
    {
        name: "mts",
        group: "UEM1",
        grade: "M1-STIC-S2",
        credits: 2,
        Coefficient: 2,
        notes_Coefficient: {
            tp: 0,
            td: 0,
            exam: 1,
        }
    },
]
const notes: Note[] = [
    {
        student: new ObjectId(), // change with existing ones
        teacher: new ObjectId(), // change with existing ones
        subject: new ObjectId(), // change with existing ones
        year: 2022,
        notes: [
            {
                tp: 0,
                td: 0,
                exam: 0,
            }
        ]
    }
]




console.log(subjects)
console.log(notes)



//SubjectModel.insert
//NodeModel.insert


