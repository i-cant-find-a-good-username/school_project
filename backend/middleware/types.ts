import { Request, Response } from 'express';
import { UserType, UserLogin, UserRegsiter } from "../types"


const isUser = (req: Request, res: Response, next: Function) => {
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





const isLoginUser = (req: Request, res: Response, next: Function) => {
    const body: UserType = req.body
    if (
        body.email !== undefined && typeof(body.email) == "string" &&
        body.password !== undefined && typeof(body.password) == "string"
    ){
        next()
    }else{
        res.json({
            error: 400,
            message: "bad input"
        })
    }
}



const isRegisterUser = (req: Request, res: Response, next: Function) => {
    const body: UserType = req.body
    if (
        body.username !== undefined && typeof(body.username) == "string" &&
        body.email !== undefined && typeof(body.email) == "string" &&
        body.password !== undefined && typeof(body.password) == "string"
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
    isUser,
    isLoginUser,
    isRegisterUser
}