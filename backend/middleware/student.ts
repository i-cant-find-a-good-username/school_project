import { Request, Response } from 'express';




const isStudent = async (req: Request, res: Response, next: Function) => {
    if (res.locals.user_data.type === 'student'){
        next()
    }else{
        return res.status(401).json({
            message: 'un authorized',
        }) 
    }
}




export {
    isStudent
}