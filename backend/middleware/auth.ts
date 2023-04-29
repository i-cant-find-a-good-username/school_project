import { Request, Response } from 'express';
import { UserType } from "../types"
import { sign, verify } from "jsonwebtoken"


const isAuth = (req: Request, res: Response, next: Function) => {
    if( req.get("X-Authorization") ) {
        const token: string = req.get("X-Authorization") as string
        verify(token, 'secret', (err: any, decoded: any) => {
            if (err === null){
                res.locals.user_data = decoded
                next()
            }else{
                return res.status(401).json({
                    message: 'invalid token  ' + err,
                }) 
            }
        });
    }else{
        res.status(401).json({
            message: 'no auth token',
        })
    }

}


export {
    isAuth
}