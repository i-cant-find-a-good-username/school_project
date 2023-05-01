import { Request, Response } from 'express';
import { Teacher } from "../models/user"
import { ObjectId } from 'mongodb';


const isAdmin = async (req: Request, res: Response, next: Function) => {
    const teacher = await Teacher.findOne({_id: new ObjectId(res.locals.user_data._id)})
    if (!teacher){
        return res.status(404).json({
            message: 'user not found',
        }) 
    }else{
        if(teacher.isAdmin){
            next()
        }else{
            return res.status(401).json({
                message: 'un authorized',
            }) 
        }
    }

}


export {
    isAdmin
}