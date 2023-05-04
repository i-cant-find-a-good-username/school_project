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







const main = async () => {
    


    // subjects
    // teachers
    // grades
    // students
    // notes
    // complaints



    //teachers here
    
    const inserted_subjects = await SubjectModel.insertMany(subjects)
    for (let i = 0; i < inserted_subjects.length; i++) {
        grades[0].subjects.push(inserted_subjects[i].id)
        teachers[i].subjects.push(inserted_subjects[i].id)
    }
    const inserted_grades = await GradeModel.insertMany(grades)
    // this is here becuase of the needed await

    //student here

    //for (let i = 0; i < subjects.length; i++) {
    //    subjects[i].grade = inserted_grades[0]._id
    //}
    const inserted_students = await Student.insertMany(students)

    const inserted_teachers = await Teacher.insertMany(teachers)
    notes[0].student = inserted_students[0].id
    notes[0].teacher = inserted_teachers[0].id
    notes[0].subject = inserted_subjects[0].id
    notes[0].grade = inserted_grades[0].id
    notes[1].student = inserted_students[0].id
    notes[1].teacher = inserted_teachers[1].id
    notes[1].subject = inserted_subjects[1].id
    notes[1].grade = inserted_grades[0].id
    notes[2].student = inserted_students[0].id
    notes[2].teacher = inserted_teachers[2].id
    notes[2].subject = inserted_subjects[2].id
    notes[2].grade = inserted_grades[0].id
    notes[3].student = inserted_students[0].id
    notes[3].teacher = inserted_teachers[3].id
    notes[3].subject = inserted_subjects[3].id
    notes[3].grade = inserted_grades[0].id
    notes[4].student = inserted_students[0].id
    notes[4].teacher = inserted_teachers[4].id
    notes[4].subject = inserted_subjects[4].id
    notes[4].grade = inserted_grades[0].id
    await NodeModel.insertMany(notes)
    process.exit(0);
}


main()