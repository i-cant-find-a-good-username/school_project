import { Request, Response } from 'express';
import { UserType } from "../types"
import { sign, verify } from "jsonwebtoken"


const isAdmin = (req: Request, res: Response, next: Function) => {
    let is_admin = res.locals.user_data
    
    next()

}


export {
    isAdmin
}