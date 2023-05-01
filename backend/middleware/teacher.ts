import { Request, Response } from 'express';


const isTeacher = async (req: Request, res: Response, next: Function) => {
    if (res.locals.user_data.type === 'teacher'){
        next()
    }else{
        return res.status(401).json({
            message: 'un authorized',
        }) 
    }
}


export {
    isTeacher
}