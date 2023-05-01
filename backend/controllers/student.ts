import { Request, Response } from 'express';
import {  } from 'mongoose'
import { Student, Teacher } from "../models/user"
import { Subject } from "../models/subject"
import { Note } from "../models/note"
import { Complaint } from "../models/complaint"
import { Grade } from "../models/grade"
import { UserType } from "../types"
import { GridFSBucketReadStream, ObjectId } from "mongodb";

  



const get_notes = async (req: Request, res: Response) => {
    try {
        const notes = await Note.find({student: new ObjectId(res.locals.user_data._id)})
            .populate({ path: 'subject', model: Subject})
            .populate({ path: 'teacher', select: 'username email profile_image', model: Teacher })

        res.status(200).json({
            message: notes
        }) 
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}




const get_global_notes = async (req: Request, res: Response) => {
    try {
        let notes = await Note.find({})
            .populate('subject', 'name coefficient credits group _id')
            .populate('student', 'username')
    
        res.status(200).json({
            message: notes
        })  
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
            .populate('teacher', '_id')
        if(!note){
            res.status(404).json({
                message: "note not found"
            })
        }else{
            const complaint = new Complaint({
                student: new ObjectId(res.locals.user_data._id),
                // @ts-ignore
                teacher: new ObjectId(note.teacher._id),
                Note: new ObjectId(note._id),
                message: data.message,
            })
            complaint.save()
            res.status(200).json({
                result: "success"
            })
        }
    } catch (error) {
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



export {
    get_notes,
    get_global_notes,
    submit_complaint,
    delete_complaint
}