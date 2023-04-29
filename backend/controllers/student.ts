import { Request, Response } from 'express';
import {  } from 'mongoose'
import { User } from "../models/user"
import { UserType } from "../types"

  
const func = (req: Request, res: Response) => {
    try{
        const defunt: UserType = req.body;
        console.log(defunt)
        //User.insertMany([
        //    new User
        //])
        res.json({
            hello: "dzadzad"
        })
    }catch(e){
        res.json({
            hello: e
        })
    }
}






const get_notes = (req: Request, res: Response) => {}
const get_global_notes = (req: Request, res: Response) => {}
const post_claim = (req: Request, res: Response) => {}










export {
    func
}