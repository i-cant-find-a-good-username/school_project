import { Request, Response } from 'express';
import {  } from 'mongoose'
import { Student, Teacher } from "../models/user"
import { Subject } from "../models/subject"
import { Note } from "../models/note"
import { Grade } from "../models/grade"
import { UserType } from "../types"
import { GridFSBucketReadStream, ObjectId } from "mongodb";

  



const get_notes = async (req: Request, res: Response) => {
    const notes = await Note.find({student: new ObjectId(res.locals.user_data._id)})
        //.populate('subject')
        .populate({ path: 'subject', model: Subject})
        .populate({ path: 'teacher', select: 'username email profile_image', model: Teacher })

    console.log(res.locals.user_data._id)
    console.log(notes)

    res.status(200).json({
        message: notes
    })
}


const get_global_notes = async (req: Request, res: Response) => {

    let students = await Student.find({})

    let ids = []
    for (let i = 0; i < students.length; i++) {
        ids.push(new ObjectId(students[i]._id))
    }
    console.log(ids)

    let notes = await Note.find({student: { $in: [ids] } })

 
    
    console.log(res.locals.user_data._id)
    console.log(students)
    console.log(notes)
    
    res.status(200).json({
        message: students,
        notes: notes
    })
}










export {
    get_notes,
    get_global_notes
}