import { Request, Response } from 'express';
import { Student } from "../models/user"
import { Subject } from "../models/subject"
import { Note } from "../models/note"
import { ObjectId } from "mongodb";



const get_notes = async (req: Request, res: Response) => {
    try {
        const notes = await Note.find({teacher: new ObjectId(res.locals.user_data._id)})
            .populate({ path: 'subject', model: Subject})
            .populate({ path: 'student', select: 'username email profile_image', model: Student })

        res.status(200).json({
            message: notes
        }) 
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}







const add_notes = async (req: Request, res: Response) => {}








const edit_notes = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await Note.updateOne({_id: new ObjectId(req.params.id)}, {notes: data})
        console.log(result)
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




export {
    get_notes,
    add_notes,
    edit_notes
}