import { Subject, Note } from './types'
import { ObjectId } from "mongodb";
import { Subject as SubjectModel } from "./models/subject"
import { Note as NodeModel } from "./models/note"
import { Student, Teacher } from './models/user';
import { StudentType, TeacherType, Grade } from './types';
import { connect } from 'mongoose';
import bcrypt from 'bcrypt';


const mongo_uri = 'mongodb://127.0.0.1:27017/school_proc'
connect(mongo_uri);



const grades: Grade[] = [
    {
        name: "M1-STIC-S1",
        subjects: []
    }
]


const teachers: TeacherType[] = [
    {
        username: "mezioud",
        email: "mezioud@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
    },
    {
        username: "bouzenada",
        email: "bouzenada@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
    },
    {
        username: "chickhi",
        email: "chickhi@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
    },
    {
        username: "gharzouli",
        email: "gharzouli@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
    },
    {
        username: "draa",
        email: "draa@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
    },
    {
        username: "labed",
        email: "labed@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
    },
    {
        username: "idk",
        email: "idk@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
    },
    {
        username: "meriem",
        email: "meriem@gmail.com",
        password: "password",
        subjects: [],
        idAdmin: false,
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
        notes:{
                tp: 9,
                td: 9,
                exam: 0,
            }
    },
    {
        student: new ObjectId(), // change with existing ones
        teacher: new ObjectId(), // change with existing ones
        subject: new ObjectId(), // change with existing ones
        year: 2022,
        notes:{
                tp: 9,
                td: 9,
                exam: 7,
            }
    }
]








const main = async () => {
    // this is here becuase of the needed await
    const students: StudentType[] = [
        {
            username: "ilyes",
            email: "ilyes@gmail.com",
            password: await bcrypt.hash("password", 10),
            current_grade: "M1-STIC-2",
            current_year: 2022,
        },
        {
            username: "ahmed",
            email: "ahmed@gmail.com",
            password: await bcrypt.hash("password", 10),
            current_grade: "M1-STIC-2",
            current_year: 2022,
        },
    ]


    const inserted_subjects = await SubjectModel.insertMany(subjects)
    const inserted_students = await Student.insertMany(students)
    for (let i = 0; i < inserted_subjects.length; i++) {
        teachers[i].subjects.push(inserted_subjects[i].id)
    }
    const inserted_teachers = await Teacher.insertMany(teachers)
    notes[0].student = inserted_students[0].id
    notes[0].teacher = inserted_teachers[0].id
    notes[0].subject = inserted_subjects[0].id
    notes[1].student = inserted_students[1].id
    notes[1].teacher = inserted_teachers[1].id
    notes[1].subject = inserted_subjects[1].id
    await NodeModel.insertMany(notes)
    process.exit(0);
}


main()