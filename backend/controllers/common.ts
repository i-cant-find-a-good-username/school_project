import { Request, Response } from 'express';
import { UserType } from "../types"
import { sign } from "jsonwebtoken"
import { Student, Teacher } from "../models/user"
import bcrypt from 'bcrypt';
import { Grade } from '../models/grade';
import { Subject } from '../models/subject';




const get_grades = async (req: Request, res: Response) => {
	try {
        const grades = await Grade.find({})
		res.status(200).json(grades)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: error
		})
	}
}






export { get_grades }