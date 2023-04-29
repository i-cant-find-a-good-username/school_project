import { Request, Response } from 'express';
import {  } from 'mongoose'
import { Student } from "../models/user"
import { Note } from "../models/note"
import { UserType } from "../types"
import { ObjectId } from "mongodb";

  



const get_notes = async (req: Request, res: Response) => {
    
    const notes = await Note.find({student: new ObjectId(res.locals.user_data._id)})


    console.log(res.locals.user_data._id)
    console.log(notes)

    res.status(200).json({
        message: 'hello there'
    })
}


const get_global_notes = (req: Request, res: Response) => {}
const create_claim = (req: Request, res: Response) => {}










export {
    get_notes
}