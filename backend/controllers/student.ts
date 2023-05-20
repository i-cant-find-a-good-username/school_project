import { Request, Response } from 'express';
import { Student, Teacher } from "../models/user"
import { Subject } from "../models/subject"
import { Note } from "../models/note"
import { Complaint } from "../models/complaint"
import { ObjectId } from "mongodb";




const get_notes = async (req: Request, res: Response) => {
    try {
        const notes = await Note.find({
            student: new ObjectId(res.locals.user_data._id),
            grade: new ObjectId(req.params.grade),
            year: req.params.year,
        })
            .populate({ path: 'subject', model: Subject})
            .populate({ path: 'teacher', select: 'username email profile_image', model: Teacher })

        res.status(200).json(notes) 
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}




const get_global_notes = async (req: Request, res: Response) => {
    try {
        let notes = await Note.find({
            grade: new ObjectId(req.params.grade),
            year: req.params.year,
        })
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



const get_complaints = async (req: Request, res: Response) => {
    try {
        let complaints = await Complaint.find({student: new ObjectId(res.locals.user_data._id)})

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



const submit_complaint = async (req: Request, res: Response) => {
    try {
        const data = req.body
        let note = await Note.findOne({_id: new ObjectId(data.note)})
            .populate({path: 'teacher', model: Teacher, select: '_id'})
        if(!note){
            res.status(404).json({
                message: "note not found"
            })
        }else{
            const complaint = new Complaint({
                student: new ObjectId(res.locals.user_data._id),
                // @ts-ignore
                teacher: new ObjectId(note.teacher._id),
                note: new ObjectId(note._id),
                message: data.message,
            })
            complaint.save()
            res.status(201).json(complaint)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error
        })
    }
}




const delete_complaint = async (req: Request, res: Response) => {
    try {
        const result = await Complaint.deleteOne({_id: new ObjectId(req.params.id)})
        if(result.deletedCount !== 0){
            res.status(200).json({
                result: "success"
            })
        }else{
            res.status(404).json({
                message: "complaint not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: error
        })
    }
}


const get_global_complaints = async (req: Request, res: Response) => {
    
}
const submit_global_complaint = async (req: Request, res: Response) => {
    
}





export {
    get_notes,
    get_global_notes,
    get_complaints,
    submit_complaint,
    delete_complaint,
    get_global_complaints,
    submit_global_complaint
}