import { Request, Response } from 'express';
import { Student, Teacher } from "../models/user"
import bcrypt from 'bcrypt';
import { generate_token } from './generate_token'


const login = async (req: Request, res: Response) => {
	try {
		const data = req.body

		const user = await Student.findOne({email: data.email})
		if(!user) return res.status(401).json({
			message: "email does not exist",
		})
		
		const matched = await bcrypt.compare(data.password, user.password)
		if(!matched) return res.status(401).json({
			message: "bad password",
		})
	
		res.status(201).json({
			message: 'login ok',
			token: generate_token(user, user._id)
		})
	} catch (error) {
		res.status(500).json({
			message: error
		})
	}
}


const register = async (req: Request, res: Response) => {
	try {
		const data = req.body

		let teacher = await Teacher.findOne({email: data.email})
		if(teacher) return res.status(401).json({
			message: 'email taken'
		})
	
		const hash_password = await bcrypt.hash(data.password, 10)
		teacher = new Teacher({
			username : data.username,
			email : data.email,
			password : hash_password,
			profile_image : data.profile_image,
			createdAt : Date.now(),
			updatedAt : Date.now()
		})
		await teacher.save()
	
		res.status(201).json({
			message: 'account created',
			token: generate_token(teacher)
		})
	} catch (error) {
		res.status(500).json({
			message: error
		})
	}
}


export {
    login, register
}