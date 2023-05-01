import { Request, Response } from 'express';
import { UserType, UserLogin, UserRegsiter, TeacherType, StudentType } from "../types"


const isLoginUser = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.email !== undefined &&
        body.password !== undefined &&
        body.type !== undefined && body.type === "teacher" || body.type === 'student'
    ){
        next()
    }else{
        res.json({
            error: 400,
            message: "bad input"
        })
    }
}


const isRegisterTeacher = (req: Request, res: Response, next: Function) => {
    const body = req.body
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


const isRegisterUser = (req: Request, res: Response, next: Function) => {
    const body = req.body
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





const isGlobalNotesReq = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.grade !== undefined &&
        body.year !== undefined && typeof(body.year) === "number"
    ){
        next()
    }else{
        res.json({
            error: 400,
            message: "bad input"
        })
    }
}







const isComplaint = (req: Request, res: Response, next: Function) => {
    const body = req.body
    if (
        body.note !== undefined &&
        body.message !== undefined
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
    isRegisterTeacher,
    isLoginUser,
    isRegisterUser,
    isGlobalNotesReq,
    isComplaint
}