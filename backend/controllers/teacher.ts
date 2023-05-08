import { Request, Response } from 'express';
import { Student } from "../models/user"
import { Subject } from "../models/subject"
import { Note } from "../models/note"
import { ObjectId } from "mongodb";
import { Grade } from '../models/grade';
import { Complaint } from '../models/complaint';



const get_notes = async (req: Request, res: Response) => {
    try {
        const notes = await Note.find({teacher: new ObjectId(res.locals.user_data._id)})
            .populate({ path: 'subject', model: Subject})
            .populate({ path: 'grade', model: Grade})
            .populate({ path: 'student', select: 'username email profile_image', model: Student })

        res.status(200).json(notes) 
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}






const get_global_notes_teacher = async (req: Request, res: Response) => {
    try {
        let notes = await Note.find({
            grade: new ObjectId(req.params.grade),
            year: req.params.year,
        })
            .populate({path:'grade', model: Grade})
            .populate({path:'subject', model: Subject})
            .populate({path:'student', model: Student, select: 'username'})
    
        res.status(200).json(notes)  
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error
        })
    }
}







const edit_notes = async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data)
        const result = await Note.updateOne({_id: new ObjectId(req.params.id)}, {notes: data})
        if(result.modifiedCount !== 0){
            res.status(200).json({
                result: "success"
            })
        }else{
            res.status(404).json({
                message: "note not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: error
        })
    }
}






const get_teacher_complaints = async (req: Request, res: Response) => {
    try {
        let complaints = await Complaint.find({teacher: new ObjectId(res.locals.user_data._id)})

        if(complaints.length === 0){
            return res.status(404).json({
                message: "no complaints"
            })
        }

        res.status(200).json(complaints)

    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
    
}



export {
    get_notes,
    edit_notes,
    get_global_notes_teacher,
    get_teacher_complaints,
}