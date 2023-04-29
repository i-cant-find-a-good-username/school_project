import { Request, Response, NextFunction } from 'express';
import { UserType } from "../types"


const isUser = (req: Request, res: Response, next: any) => {
    const body: UserType = req.body
    if (
        body.username !== undefined && typeof(body.username) == "string" &&
        body.email !== undefined && typeof(body.email) == "string" &&
        body.password !== undefined && typeof(body.password) == "string" &&
        body.role !== undefined && typeof(body.role) == "string" &&
        body.profile_image !== undefined && typeof(body.profile_image) == "string"
    ){
        next()
    }else{
        res.json({
            error: 400,
            message: "bad input"
        })
    }
}





export {
    isUser
}


