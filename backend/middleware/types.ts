import { Request, Response } from 'express';
import { UserType, UserLogin, UserRegsiter, TeacherType, StudentType } from "../types"


const isUser = (req: Request, res: Response, next: Function) => {
    const body: UserType = req.body
    if (
        body.username !== undefined &&
        body.email !== undefined &&
        body.password !== undefined 
    ){
        next()
    }else{
        res.json({
            error: 400,
            message: "bad input"
        })
    }
}




const isStudent = (req: Request, res: Response, next: Function) => {
    const body: StudentType = req.body
    if (
        body.username !== undefined &&
        body.email !== undefined &&
        body.password !== undefined && 
        body.current_grade !== undefined &&
        body.current_year !== undefined
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
        body.email !== undefined &&
        body.password !== undefined
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
        body.username !== undefined &&
        body.email !== undefined &&
        body.password !== undefined
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
    isStudent,
    isUser,
    isLoginUser,
    isRegisterUser
}