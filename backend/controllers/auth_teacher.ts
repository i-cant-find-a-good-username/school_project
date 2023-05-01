import { Request, Response } from 'express';
import { Teacher } from "../models/user"
import bcrypt from 'bcrypt';
import { generate_token } from './auth'





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
		})
	} catch (error) {
		res.status(500).json({
			message: error
		})
	}
}


export {
    register
}